import React, { PureComponent } from 'react';
import { 
  View,
  TouchableOpacity 
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Feather';
import styles from './HeaderBar.component.style';
import theme from '../../styles/theme.style';


class HeaderBar extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    id: PropTypes.string.isRequired,
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  goToSearch = () => {
    this.props.navigation.navigate('Search', {
      id: this.props.id
    });
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
        
        <TouchableOpacity 
          opacity={0.8}
          onPress={this.goToSearch}
          style={styles.actionButton}
        >
          <Icon 
            name='search' 
            size={24} 
            color={theme.COLOR_PURE_BLACK} 
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(HeaderBar);