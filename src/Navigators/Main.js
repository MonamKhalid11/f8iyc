import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Amenities from '../Containers/ClubScreens/Amenities'
import UpcomingEvents from '../Containers/ClubScreens/UpcomingEvents'
import UpcomingEventsDetails from '../Containers/ClubScreens/UpcomingEvents/Details'
import ContactUs from '../Containers/ClubScreens/ContactUs'
import Profile from '../Containers/Authentication/Profile'
import Notifications from '../Containers/ClubScreens/PushNotifications'
const Drawer = createDrawerNavigator();
import { CustomDrawer } from '@/Components'

// @refresh reset
const MainNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home"
      drawerPosition={'left'}
      drawerType={'slide'}
      overlayColor={'transparent'}
      drawerStyle={{
        width: widthPercentageToDP('65'),
      }}
      drawerContent={props => <CustomDrawer {...props} />}

    >
      <Drawer.Screen name="Home" component={Amenities} options={{ headerShown: false }} />
      <Drawer.Screen name="UpcomingEvents" component={UpcomingEvents} options={{ headerShown: false }} />
      <Drawer.Screen name="UpcomingEventsDetails" component={UpcomingEventsDetails} options={{ headerShown: false }} />
      <Drawer.Screen name="Contact" component={ContactUs} options={{ headerShown: false }} />
      <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Drawer.Screen name="Notification" component={Notifications} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )
}

export default MainNavigator
