import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IndexExampleContainer } from '@/Containers'

import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={IndexExampleContainer} />
    </Tab.Navigator>
  )
}

export default MainNavigator
