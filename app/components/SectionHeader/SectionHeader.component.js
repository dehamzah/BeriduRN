import React, { Component } from 'react';
import { 
  View, 
  Text 
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './SectionHeader.component.style';


export default class SectionHeader extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{(this.props.text).toUpperCase()}</Text>
        <View style={styles.line} />
      </View>
    );
  }
}