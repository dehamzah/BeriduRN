import React, { PureComponent } from 'react';
import { 
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { CustomTabs } from 'react-native-custom-tabs';
import PropTypes from 'prop-types';
import styles from './NewsItem.component.style';


export default class NewsItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    author: PropTypes.string.isRequired,
    datePublished: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }

  handlePress = () => {
    const { link } = this.props;
    CustomTabs.openURL(link, {
      toolbarColor: 'white',
      enableUrlBarHiding: true,
      showPageTitle: true,
      enableDefaultShare: true,
    });
  }

  render() {
    return (
      <TouchableOpacity 
        activeOpacity={0.7}
        onPress={this.handlePress}
      >
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
      </TouchableOpacity>
    );
  }
}



