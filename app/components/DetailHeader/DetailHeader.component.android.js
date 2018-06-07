import React, { PureComponent } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { CustomTabs } from 'react-native-custom-tabs';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import styles from './DetailHeader.component.style';


export default class DetailHeader extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
  }

  handleLink = () => {
    const { link } = this.props;
    CustomTabs.openURL(link, {
      toolbarColor: 'white',
      enableUrlBarHiding: true,
      showPageTitle: true,
      enableDefaultShare: true,
    }).catch(() => {
      ToastAndroid.show('Something is not right!', ToastAndroid.LONG);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.separator} />
        <TouchableOpacity
          onPress={this.handleLink}
          opacity='0.9'
          style={styles.linkWrapper}
        >
          <Icon name='link' />
          <Text style={styles.link}>{this.props.link}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}