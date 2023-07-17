import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Search, Profile } from '../screens/index'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants/index'
        

const BottomTapNavigation = () => {
  const Tab = createBottomTabNavigator()

  const screenOptions: any = ({ route }: any) => ({
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        height: 70,
    }
  } )


  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
          name="Home" 
          component={Home} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={focused ? COLORS.primary : COLORS.gray} />
                    </View>
                )   
            }}
        />
        <Tab.Screen 
          name="Search"
          component={Search} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Ionicons name='search-sharp' size={24} color={focused ? COLORS.primary : COLORS.gray}/>
                    </View>
                )   
            }}
        />
        <Tab.Screen 
          name="Profile"
          component={Profile} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={focused ? COLORS.primary : COLORS.gray} />
                    </View>
                )   
            }}
        />
    </Tab.Navigator>
  )
}

export default BottomTapNavigation