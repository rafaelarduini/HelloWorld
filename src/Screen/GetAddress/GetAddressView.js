import styles from './GetAddressStyle';
import {
	View,
	Text,
	SafeAreaView,
	FlatList,
	RefreshControl,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';

const GetAddressView = (props) => {
	const renderItem = ({ item, index }) => {
		return (
			<View style={{ padding: 20 }}>
				<Text>{item.street}</Text>
				<View>
					<Text>Rua: </Text>
					<Text>
						{item.streetName}, {item.buildingNumber}
					</Text>
				</View>
				<View>
					<Text>Cidade: </Text>
					<Text>
						{item.city} / {item.county_code}
					</Text>
				</View>
				<View>
					<TouchableOpacity onPress={() => props.detailClicked(item)}>
						<Text>Mais informações</Text>
					</TouchableOpacity>
				</View>
				<View></View>
			</View>
		);
	};

	const renderFooter = () => {
		if (!props.hasMorePages) {
			return <View />;
		}
		return (
			<View>
				<ActivityIndicator size="small" />
			</View>
		);
	};
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={props.addresses}
				renderItem={renderItem}
				keyExtractor={(item) => item.street + item.latitude + item.longtude}
				refreshControl={
					<RefreshControl
						refreshing={props.isConnecting}
						onRefresh={() => props.onRefresh()}
					/>
				}
				ListFooterComponent={renderFooter}
				onEndReached={props.loadMoreItems}
				onEndReachedThreshold={0.3}
			/>
		</SafeAreaView>
	);
};

export default GetAddressView;
