import { View, Text } from 'react-native';
import Constants from 'expo-constants';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

const AboutController = ({ navigation }) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<TouchableOpacity
					style={{ marginLeft: 5 }}
					onPress={() => navigation.toggleDrawer()}
				>
					<MaterialIcons name="menu" size={30} color="black" />
				</TouchableOpacity>
			),
		});
	}, [navigation]);

	return (
		<View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
			<Text style={{ fontSize: 30, fontWeight: 'bold' }}>Version</Text>
			<Text style={{ fontSize: 25 }}>{Constants.nativeAppVersion}</Text>
		</View>
	);
};

export default AboutController;
