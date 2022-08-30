import FakerServices from '../../Services/FakerServices';

class GetAddressModel {
	getAddress(callBack) {
		FakerServices.get('addresses?_quantity=20')
			.then((response) => {
				callBack(1, response.data.data);
			})
			.catch((err) => {
				callBack(-99, null);
			});
	}
}

export default GetAddressModel;
