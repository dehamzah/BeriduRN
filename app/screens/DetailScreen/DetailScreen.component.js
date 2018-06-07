import React, { Component } from 'react';
import {
  FlatList,
  View
} from 'react-native';
import NewsItem from '../../components/NewsItem/NewsItem.component';
import DetailHeader from '../../components/DetailHeader/DetailHeader.component';
import SectionHeader from '../../components/SectionHeader/SectionHeader.component';
import techcrunch from '../../utils/dummy/techcrunch.json';


export default class DetailScreen extends Component {
  renderHeader = () => (
    <View>
      <DetailHeader 
        title='Tech Crunch'
        link='https://techcrunch.com'
      />
      <SectionHeader text='LATEST NEWS' />
    </View>
  );

  keyExtractor = (item, index) => item.source.id + index;

  renderItem = ({ item }) => (
    <NewsItem
      title={item.title}
      author={item.author}
      imageUrl={item.urlToImage}
      datePublished={item.publishedAt}
    />
  );

  render() {
    return (
      <FlatList
        ListHeaderComponent={this.renderHeader}
        keyExtractor={this.keyExtractor}
        data={techcrunch.articles}
        renderItem={this.renderItem}
      />
    );
  }
}