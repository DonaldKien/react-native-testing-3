import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Splash from '@containers/splash/splash';
import Landing from '@containers/landing/landing';
import Register from '@containers/register/register';
import Onboard from '@containers/onboard/onboard';
import Home from '@containers/home-seller-dashboard/home-seller-dashboard';
import Product from '@containers/products/products';
import Messages from '@containers/messages/messages';
import Orders from '@containers/orders/orders';
import Settings from '@containers/settings/settings';


const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
            initialRouteName="Home" 
            tabBarOptions={{ 
                    activeTintColor: '#FFA000', 
                    labelStyle: {fontSize: 12, paddingBottom: 10}, 
                    style:{borderTopStartRadius: 20, borderTopEndRadius: 20, height: 70, paddingTop: 5, marginTop: -20} 
                }}>
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarLabel: "Home", 
                    tabBarIcon: ({ color }) => (<Icon name="home" color={color} size={30}/>) 
                }} 
            />
            <Tab.Screen 
                name="Messages" 
                component={Messages} 
                options={{
                    tabBarLabel: "Messages", 
                    tabBarIcon: ({ color }) => (<Icon name="bell" color={color} size={30}/>) 
                }}
            />
            <Tab.Screen 
                name="Products" 
                component={Product} 
                options={{
                    tabBarLabel: "Products", 
                    tabBarIcon: ({ color }) => (<Icon name="align-justify" color={color} size={30}/>) 
                }}
            />

            <Tab.Screen 
                name="Orders" 
                component={Orders} 
                options={{
                    tabBarLabel: "Orders", 
                    tabBarIcon: ({ color }) => (<Icon name="dropbox" color={color} size={30}/>) 
                }}
            />
            <Tab.Screen 
                name="Settings" 
                component={Settings} 
                options={{
                    tabBarLabel: "Settings", 
                    tabBarIcon: ({ color }) => (<Icon name="cog" color={color} size={30}/>) 
                }}
            />
        </Tab.Navigator>
    );
};

const Stack = createStackNavigator();
function Navigation() {
	return (
		<NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
                <Stack.Screen name="SPLASH" component={Splash} />
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="Register" component={Register} />
                <Stack.Screen name="Onboard" component={Onboard} />
                <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
	);
}

export default Navigation;