import React, { PureComponent } from 'react';
import { 
  View,
  SectionList,
  StatusBar,
  ActivityIndicator,
  Alert
} from 'react-native';
import SourceItem from '../../components/SourceItem/SourceItem.component';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';
import HomeHeader from '../../components/HomeHeader/HomeHeader.component';
import styles from './HomeScreen.component.style';
import { parseToSectionListFormat } from '../../utils/helpers';
import { getSources } from '../../utils/api';
import theme from '../../styles/theme.style';


export default class HomeScreen extends PureComponent {
  state = {
    sources: [],
    isFetching: true,
  }

  componentDidMount() {
    getSources().then((res) => {
      this.setState({
        sources: parseToSectionListFormat(res.data.sources),
        isFetching: false
      });
    }).catch(() => {
      this.setState({
        isFetching: false
      });
      Alert.alert(
        'Failed to fetch data',
        'Something wrong in your side or in our server.'
      );
    });
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

  renderFooter = () => {
    if (!this.state.isFetching) return null;

    return (
      <ActivityIndicator style={styles.loading} size='small' color={theme.COLOR_MANGO_TANGO} />
    );
  }

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
          ListFooterComponent={this.renderFooter}
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.state.sources}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}