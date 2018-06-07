import React, { Component } from 'react';
import { 
  View,
  Text  
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './HomeHeader.component.style';


export default class HomeHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.desc}>{this.props.desc}</Text>
      </View>
    );
  }
}