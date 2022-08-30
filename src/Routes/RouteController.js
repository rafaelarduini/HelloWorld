import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetAddressController from '../Screen/GetAddress/GetAddressController';
import AboutController from '../Screen/About/AboutController';
import DetailAddressController from '../Screen/DetailAddress/DetailAddressController';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenu from '../Screen/SideMenu/SideMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function RouteController() {
	function HomeStackScreen() {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="GetAddressController"
					component={GetAddressController}
					options={{ title: 'Endereços' }}
				/>
				<Stack.Screen name="DetailAddressController" component={DetailAddressController} />
			</Stack.Navigator>
		);
	}
	function AboutStackScreen() {
		return (
			<Stack.Navigator>
				<Stack.Screen
					name="AboutInfo"
					component={AboutController}
					options={{ title: 'Sobre' }}
				/>
			</Stack.Navigator>
		);
	}

	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="About" drawerContent={SideMenu}>
				<Drawer.Screen
					name="Home"
					component={HomeStackScreen}
					options={{ headerShown: false }}
				/>
				<Drawer.Screen
					name="About"
					component={AboutStackScreen}
					options={{ headerShown: false }}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
export default registerRootComponent(RouteController);
