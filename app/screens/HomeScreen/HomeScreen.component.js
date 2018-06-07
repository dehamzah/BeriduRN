import React, { PureComponent } from 'react';
import { 
  View,
  FlatList,
  StatusBar,
  ActivityIndicator,
  Alert
} from 'react-native';
import SourceItem from '../../components/SourceItem/SourceItem.component';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';
import HomeHeader from '../../components/HomeHeader/HomeHeader.component';
import styles from './HomeScreen.component.style';
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
        sources: res.data.sources,
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

  goToDetail = (item) => {
    this.props.navigation.navigate('Detail', item);
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

  renderItem = ({ item }) => (
    <SourceItem 
      title={item.name} 
      desc={item.description}
      onPress={() => this.props.navigation.navigate('Detail', item)} // eslint-disable-line
    />
  );

  renderSectionHeader = ({ section: { title } }) => (
    <SectionHeader text={title} />
  )

  keyExtractor = (item) => item.id;

  itemLayout = (data, index) => (
    { length: 70, offset: 70 * index, index }
  )

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='white'
        />
        <FlatList
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          renderItem={this.renderItem}
          data={this.state.sources}
          keyExtractor={this.keyExtractor}
          getItemLayout={this.itemLayout}
          maxToRenderPerBatch = {1}
        />
      </View>
    );
  }
}