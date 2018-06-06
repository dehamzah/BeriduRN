import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './SourceItem.component.style';
import { acronym } from '../../utils/helpers';


export default class SourceItem extends Component {
  static propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    lang: PropTypes.string,
  }

  renderThumbnail = () => {
    if (this.props.image) {
      return (
        <Image 
          style={styles.thumbnailImage}
          source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} 
        />
      );
    } else {
      return (
        <View style={styles.thumbnailDefault}>
          <Text style={styles.thumbnailDefaultText}>{acronym(this.props.title, 3)}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.thumbnailWrapper}>
          {this.renderThumbnail()}
        </View>
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.desc}>{this.props.desc}</Text>
        </View>
      </View>
    );
  }
}