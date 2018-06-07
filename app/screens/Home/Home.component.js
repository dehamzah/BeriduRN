import React, { Component } from 'react';
import { 
  View,
  SectionList,
} from 'react-native';
import SourceItem from '../../components/SourceItem/SourceItem.component';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';
import HomeHeader from '../../components/HomeHeader/HomeHeader.component';
import styles from './Home.component.style';
import { parseToSectionListFormat } from '../../utils/helpers';
import sourcesData from '../../utils/dummy/sources.json';


export default class Home extends Component {
  state = {
    sources: parseToSectionListFormat(sourcesData.sources)
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
    />
  );

  renderSectionHeader = ({ section: { title } }) => (
    <SectionHeader text={title} />
  )

  keyExtractor = (item, index) => item.id + index;

  render() {
    return (
      <View style={styles.container}>
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