import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList128247Navigator from '../features/NotificationList128247/navigator';
import Settings128246Navigator from '../features/Settings128246/navigator';
import Settings128238Navigator from '../features/Settings128238/navigator';
import UserProfile128236Navigator from '../features/UserProfile128236/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList128247: { screen: NotificationList128247Navigator },
Settings128246: { screen: Settings128246Navigator },
Settings128238: { screen: Settings128238Navigator },
UserProfile128236: { screen: UserProfile128236Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
