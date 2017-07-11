/**
 * Navbar Logout Button
 */
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

/* Component ==================================================================== */
const NavbarLogoutButton = ({ logout }) => (
  <TouchableOpacity
    onPress={() => {
      logout().then(() => {
        Actions.authenticate({type: 'reset'});
      });
    }}
    activeOpacity={0.7}
    style={{ top: -2 }}
    hitSlop={{ top: 7, right: 7, bottom: 7, left: 7 }}
    testID={'logoutButton'}
  >
    <Icon name={'ios-log-out'} size={30} color={'#FFF'} />
  </TouchableOpacity>
);

NavbarLogoutButton.propTypes = {
  logout: PropTypes.func.isRequired,
};

NavbarLogoutButton.defaultProps = {};

/* Export Component ==================================================================== */
export default NavbarLogoutButton;
