/**
 * Navbar Elements
 */
import { connect } from 'react-redux';

// Actions
import { Actions } from 'react-native-router-flux';
import * as UserActions from '@redux/user/actions';

// The component we're mapping to
import NavbarLogoutButtonRender from './NavbarLogoutButtonView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({});

// Any actions to map to the component?
const mapDispatchToProps = {
  logout: UserActions.logout,
};

/* Export Component ==================================================================== */
exports.NavbarLogoutButton = connect(mapStateToProps, mapDispatchToProps)(NavbarLogoutButtonRender);
