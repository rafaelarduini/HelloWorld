import { View, Text } from 'react-native';

const DetailAddressView = (props) => {
	return (
		<View>
			<Text>{props.address.street}</Text>
			<Text>Rua: </Text>
			<Text>{props.address.streetName}</Text>
			<Text>Cidade: </Text>
			<Text>
				{props.address.city} / {props.address.county_code}
			</Text>
		</View>
	);
};

export default DetailAddressView;
