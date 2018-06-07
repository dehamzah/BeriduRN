import React, { Component } from 'react';
import {
  FlatList
} from 'react-native';
import NewsItem from '../../components/NewsItem/NewsItem.component';
import styles from './Detail.component.style';
import techcrunch from '../../utils/dummy/techcrunch.json';


export default class Detail extends Component {
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
        keyExtractor={this.keyExtractor}
        data={techcrunch.articles}
        renderItem={this.renderItem}
      />
    );
  }
}