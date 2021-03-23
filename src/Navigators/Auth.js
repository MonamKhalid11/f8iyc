import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { IndexExampleContainer } from '@/Containers'
import Register from '../Containers/Authentication/Register'
const Stack = createStackNavigator()

// @refresh reset
const AuthNavigator = (props) => {
    return (
        <Stack.Navigator headerMode={'none'}>
            <Stack.Screen name="Login" component={IndexExampleContainer} />
            <Stack.Screen name="Register" component={Register} />

        </Stack.Navigator>
    )
}

export default AuthNavigator
