import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1,
	},
	safeAreaView: {
		flex: 1,
	},
	topView: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	},
	boxTop: {
		width: 200,
		height: 120,
		backgroundColor: 'rgba(255,255,255,0.5)',
		marginTop: 80,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
	},
	textLogo: {
		fontSize: 25,
		fontWeight: 'bold',
		color: 'blue',
	},
	bottomView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	boxBottom: {
		width: '80%',
		backgroundColor: 'rgba(255,255,255,0.5)',
		marginBottom: 80,
		justifyContent: 'center',
		alignItems: 'stretch',
		borderRadius: 20,
		padding: 15,
		paddingBottom: 30,
		paddingTop: 30,
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		borderRadius: 10,
		padding: 5,
	},
	loginBtn: {
		height: 40,
		backgroundColor: 'blue',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
	},
	textLoginBtn: {
		color: 'white',
		fontSize: 15,
		fontWeight: 'bold',
	},
});

export default styles;
