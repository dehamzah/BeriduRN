import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import { withNavigation } from 'react-navigation';
import styles from './SearchBar.component.style';
import theme from '../../styles/theme.style';


class SearchBar extends Component {
  static propTypes = {
    onChangeText: PropTypes.func,
    onClearText: PropTypes.func,
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  refTextInput = (input) => { 
    this.textInput = input;
  }

  handleClearText = () => {
    this.textInput.clear();
    this.props.onClearText();
  }

   
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          opacity={0.8} 
          onPress={this.goBack}
          style={styles.actionButton}
        >
          <Icon 
            name='arrow-left' 
            size={24} 
            color={theme.COLOR_PURE_BLACK} 
          />
        </TouchableOpacity>

        <TextInput
          style={styles.textInput}
          underlineColorAndroid='transparent'
          placeholder='Search...'
          onChangeText={this.props.onChangeText}
          autoFocus={true}
          ref={this.refTextInput}
        />
        
        <TouchableOpacity 
          opacity={0.8}
          style={styles.actionButton}
          onPress={this.handleClearText}
        >
          <Icon 
            name='x' 
            size={24} 
            color={theme.COLOR_PURE_BLACK} 
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(SearchBar);