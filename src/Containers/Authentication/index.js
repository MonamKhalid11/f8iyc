//import liraries
import React from 'react'
import { View, ImageBackground } from 'react-native'
import { useTheme } from '@/Theme'
import { useTranslation } from 'react-i18next'
import { ClubButton } from '@/Components'
import { navigate } from '../../Navigators/Root'
// create a component
const Login = (props) => {
    const { Layout, Images } = useTheme()

    const { t } = useTranslation()
    return (
        <ImageBackground style={[Layout.fill, Layout.colCenter]}
            source={Images.authBg}
        >
            <View style={Layout.loginFields}>
                <ClubButton
                    name={t('loginScreen.login')}
                    auth={true}
                    onPress={() => navigate('SignIn')}
                />
                <ClubButton
                    name={t('loginScreen.create')}
                    onPress={() => navigate('Register')}
                    auth={true}
                />
            </View>
        </ImageBackground>
    );
};



//make this component available to the app
export default Login;
