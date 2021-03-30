import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexExampleContainer } from '@/Containers'
import Register from '../Containers/Authentication/Register'
import Login from '../Containers/Authentication/Login'
const Stack = createStackNavigator()

// @refresh reset
const AuthNavigator = (props) => {
    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name="Login" component={IndexExampleContainer} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="SignIn" component={Login} />
        </Stack.Navigator>
    )
}

export default AuthNavigator
