import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox, Slider, FAB } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import LoginController from './src/Screen/Login/LoginController';
import GetAddressController from './src/Screen/GetAddress/GetAddressController';

export default function App() {
	return <GetAddressController />;
}

// 	const [checked, setChecked] = useState(true);
// 	const [sliderValue, setSliderValue] = useState(0);

// 	return (
// 		<View style={styles.container}>
// 			<View style={styles.icon}>
// 				<FontAwesome name="users" size={128} color="blue" />
// 			</View>

// 			<CheckBox
// 				center
// 				title="Clique aqui"
// 				checked={checked}
// 				onPress={() => setChecked(!checked)}
// 			/>
// 			<Slider
// 				value={sliderValue}
// 				maximumValue={50}
// 				minimumValue={0}
// 				step={1}
// 				trackStyle={{ height: 10 }}
// 				thumbStyle={{ height: 20, width: 20 }}
// 				onValueChange={(value) => setSliderValue(value)}
// 			/>
// 			<Text>Slider: {sliderValue}</Text>
// 			<FAB
// 				title="+"
// 				placement="right"
// 				color="blue"
// 				onPress={() => console.log('clicou')}
// 			/>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flexDirection: 'column',
// 		flex: 1,
// 		marginTop: 60,
// 		backgroundColor: '#fff',
// 	},
// 	icon: {
// 		margin: 20,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 	},
// });
