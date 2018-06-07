import React, { Component } from 'react';
import { 
  View,
  SectionList,
  StatusBar
} from 'react-native';
import SourceItem from '../../components/SourceItem/SourceItem.component';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';
import HomeHeader from '../../components/HomeHeader/HomeHeader.component';
import styles from './HomeScreen.component.style';
import { parseToSectionListFormat } from '../../utils/helpers';
import sourcesData from '../../utils/dummy/sources.json';


export default class HomeScreen extends Component {
  state = {
    sources: parseToSectionListFormat(sourcesData.sources)
  }

  goToDetail = () => {
    this.props.navigation.navigate('Detail');
  }

  renderHeader = () => (
    <HomeHeader 
      title='Beridu'
      desc='All your favorite news in one application.'
    />
  )

  renderItem = ({ item, index }) => (
    <SourceItem 
      key={index} 
      title={item.name} 
      desc={item.description}
      onPress={this.goToDetail}
    />
  );

  renderSectionHeader = ({ section: { title } }) => (
    <SectionHeader text={title} />
  )

  keyExtractor = (item, index) => item.id + index;

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='white'
        />
        <SectionList
          stickySectionHeadersEnabled={true}
          ListHeaderComponent={this.renderHeader}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.state.sources}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}