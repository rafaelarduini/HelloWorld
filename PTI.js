// PTI-PROGRAMACAO PARA DISPOSITIVOS MOVEIS
// Aluno: Rafael Arduini Cavalcanti

const ProductCard = (props) => {
	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity onPress={() => props.cardClicked(item)}>
				<View>
					<Text>{item.name}</Text>
					<View>
						<Image source={'../../../assets/calories.jpg'} />
						<Text>{item.calories} Calories</Text>
					</View>
					<Text>$ {item.price}</Text>
				</View>
				<Image source={item.image} />
			</TouchableOpacity>
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
				data={props.products}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
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
