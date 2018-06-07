import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  ActivityIndicator
} from 'react-native';
import { debounce } from 'lodash';
import SearchBar from '../../components/SearchBar/SearchBar.component';
import NewsItem from '../../components/NewsItem/NewsItem.component';
import styles from './SearchScreen.component.style';
import { searchNews } from '../../utils/api';
import theme from '../../styles/theme.style';


export default class SearchScreen extends Component {
  state = {
    query: '',
    results: [],
    isLoading: false,
  }

  renderResults = () => {
    if (this.state.isLoading) {
      return (
        <ActivityIndicator style={styles.loading} size='small' color={theme.COLOR_MANGO_TANGO} />
      );
    }

    if (this.state.results.length !== 0) {
      return this.state.results.map((item, index) => (
        <NewsItem
          key={index}
          title={item.title}
          author={item.author}
          imageUrl={item.urlToImage}
          datePublished={item.publishedAt}
          link={item.url}
        />
      ));
    } else if (this.state.query.length !== 0 && this.state.results.length === 0) {
      return (
        <Text style={styles.noResultsText}>No results found.</Text>
      );
    } else {
      return null;
    }
  }

  handleTextChange = debounce((query) => {
    const source = this.props.navigation.getParam('id', '');

    this.setState({ 
      query,
      isLoading: true, 
    }, () => {
      if (query === '') {
        this.setState({
          results: [],
          isLoading: false,
        });
      } else {
        searchNews(query, source).then((res) => {
          this.setState({
            isLoading: false,
            results: [...res.data.articles]
          });
        });
      }
    });
  }, 300);

  handleClearText = () => {
    this.setState({
      query: '',
      isLoading: false,
      results: []
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          onChangeText={this.handleTextChange}
          onClearText={this.handleClearText}
        />
        <ScrollView style={styles.container}>
          {this.renderResults()}
        </ScrollView>
      </View>
    );
  }
}