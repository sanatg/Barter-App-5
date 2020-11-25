import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {BottomNavigator} from '../components/BottomNavigator';
import CustomSideBarMenu from '../components/CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: BottomNavigator
  },
},
  {
    contentComponent: CustomSideBarMenu
  },
  {
    initialRouteName: 'Home'
  })
