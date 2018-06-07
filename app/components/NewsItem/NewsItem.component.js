import React, { Component } from 'react';
import { 
  View,
  Text,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './NewsItem.component.style';


export default class NewsItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    author: PropTypes.string.isRequired,
    datePublished: PropTypes.string.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          <View style={styles.thumbnailWrapper}>
            <Image 
              style={styles.thumbnail}  
              source={{ uri: this.props.imageUrl }}
            />
          </View>
        </View>
        <View style={styles.metaWrapper}>
          <Text style={styles.metaText}>By {this.props.author}</Text>
          <View style={styles.metaSeparator} />
          <Text style={styles.metaText}>{this.props.datePublished}</Text>
        </View>
      </View>
    );
  }
}



