import React, { Component } from 'react';
import { 
  View, 
  Text 
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import styles from './DetailHeader.component.style';


export default class DetailHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.separator} />
        <View style={styles.linkWrapper}>
          <Icon name='link' />
          <Text style={styles.link}>{this.props.link}</Text>
        </View>
      </View>
    );
  }
}