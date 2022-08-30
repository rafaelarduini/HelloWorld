import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SideMenu = ({ navigation }) => {
	console.log(navigation);
	return (
		<View style={{ flex: 1 }}>
			<TouchableOpacity onPress={() => navigation.navigate('Home')}>
				<Text>Endereços</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate('About')}>
				<Text>Sobre</Text>
			</TouchableOpacity>
		</View>
	);
};

export default SideMenu;
