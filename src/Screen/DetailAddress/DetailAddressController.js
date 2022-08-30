import React from 'react';
import DetailAddressView from './DetailAddressView';

const DetailAddressController = ({ navigate, route }) => {
	const { address } = route.params;
	return <DetailAddressView address={address} />;
};

export default DetailAddressController;
