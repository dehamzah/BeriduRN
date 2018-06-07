import React, { PureComponent } from 'react';
import {
  FlatList,
  View,
  Alert,
  ActivityIndicator
} from 'react-native';
import NewsItem from '../../components/NewsItem/NewsItem.component';
import DetailHeader from '../../components/DetailHeader/DetailHeader.component';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';
import HeaderBar from '../../components/HeaderBar/HeaderBar.component';
import { getLatestNews } from '../../utils/api';
import styles from './DetailScreen.component.style';
import theme from '../../styles/theme.style';


export default class DetailScreen extends PureComponent {
  state = {
    articles: [],
    pageFetched: 0,
    isFetching: true,
  }

  componentDidMount() {
    const id = this.props.navigation.getParam('id', '');

    getLatestNews(id).then((res) => {
      this.setState((prevState) => ({
        articles: res.data.articles,
        isFetching: false,
        pageFetched: prevState.pageFetched + 1
      }));
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

  renderHeader = () => {
    const title = this.props.navigation.getParam('name', '');
    const url = this.props.navigation.getParam('url', '');
    return (
      <View>
        <DetailHeader 
          title={title}
          link={url}
        />
        <SectionHeader text='LATEST NEWS' />
      </View>
    );
  };

  renderFooter = () => {
    if (!this.state.isFetching) return null;

    return (
      <ActivityIndicator style={styles.loading} size='small' color={theme.COLOR_MANGO_TANGO} />
    );
  }

  keyExtractor = (item, index) => item.source.id + index;

  renderItem = ({ item }) => (
    <NewsItem
      title={item.title}
      author={item.author}
      imageUrl={item.urlToImage}
      datePublished={item.publishedAt}
      link={item.url}
    />
  );

  handleOnEndReached = () => {
    const id = this.props.navigation.getParam('id', '');

    this.setState({
      isFetching: true
    });

    getLatestNews(id, this.state.pageFetched + 1).then((res) => {
      this.setState((prevState) => ({
        articles: [...prevState.articles, ...res.data.articles],
        isFetching: false,
        pageFetched: prevState.pageFetched + 1
      }));
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

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          keyExtractor={this.keyExtractor}
          data={this.state.articles}
          renderItem={this.renderItem}
          onEndReached={this.handleOnEndReached}
        />
        <HeaderBar id={this.props.navigation.getParam('id', '')} />
      </View>
    );
  }
}