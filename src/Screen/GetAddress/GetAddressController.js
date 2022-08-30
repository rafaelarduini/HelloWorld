import GetAddressView from './GetAddressView';
import GetAddressModel from './GetAddressModel';
import React, { useRef, useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

const GetAddressController = ({ navigation }) => {
	const getAddressModel = useRef(null);
	const [isConnecting, setIsConnecting] = useState(true);
	const [addresses, setAddresses] = useState([]);
	const [hasMorePages, setHasMorePages] = useState(true);
	const [pageNo, setPageNo] = useState(0);

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

	useEffect(() => {
		getAddressModel.current = new GetAddressModel();
		getAddressModel.current.getAddress(callBackAddress);
	}, []);

	const callBackAddress = (code, addressInfo) => {
		console.log(code);
		console.log(addressInfo);
		setIsConnecting(false);
		if (addressInfo.length < 20) {
			setHasMorePages(false);
		}
		let auxAddress = [...addresses, ...addressInfo];
		setAddresses(auxAddress);
	};

	const onRefresh = () => {
		setIsConnecting(true);
		setAddresses([]);
		getAddressModel.current.getAddress(callBackAddress);
	};

	const loadMoreItems = () => {
		if (hasMorePages) {
			setPageNo(pageNo + 1);
			getAddressModel.current.getAddress(callBackAddress);
		}
	};

	const detailClicked = (item) => {
		navigation.navigate('DetailAddressController', { address: item });
	};

	return (
		<GetAddressView
			isConnecting={isConnecting}
			addresses={addresses}
			hasMorePages={hasMorePages}
			onRefresh={onRefresh}
			loadMoreItems={loadMoreItems}
			detailClicked={detailClicked}
		/>
	);
};

export default GetAddressController;
