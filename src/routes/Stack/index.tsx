import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchProfile from '../../screens/searchProfile/SearchProfile';
import DataProfile from '../../screens/dataProfile/DataProfile';
import { PropsNavigationStack } from './Models';
import MenuProfiles from '../../screens/menuProfiles/MenuProfiles';

const { Navigator, Screen} = createNativeStackNavigator<PropsNavigationStack>()

export default function (){
    return (
        <>
        <Navigator initialRouteName='SearchProfile' screenOptions={{headerShown: false}}>
        <Screen name="SearchProfile" component={SearchProfile}/>
        <Screen name="DataProfile" component={DataProfile}/>
        <Screen name="MenuProfiles" component={MenuProfiles}/>
        </Navigator>
        </>
    )
}