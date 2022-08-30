import { View, Text } from 'react-native';
import LoginView from './LoginView';
import styles from './LoginStyle';

const LoginController = () => {
	return (
		<View style={styles.container}>
			<LoginView />
		</View>
	);
};

export default LoginController;
