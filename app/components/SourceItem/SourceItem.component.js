import React, { PureComponent } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './SourceItem.component.style';
import { acronym } from '../../utils/helpers';


export default class SourceItem extends PureComponent {
  static propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    lang: PropTypes.string,
    onPress: PropTypes.func,
  }

  renderThumbnail = () => {
    if (this.props.imageUrl) {
      return (
        <Image 
          style={styles.thumbnailImage}
          resizeMode='contain'
          source={{ uri: this.props.imageUrl }} 
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
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={0.7}>
        <View style={styles.container}>
          <View style={styles.thumbnailWrapper}>
            {this.renderThumbnail()}
          </View>
          <View style={styles.contentWrapper}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.desc}>{this.props.desc}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}