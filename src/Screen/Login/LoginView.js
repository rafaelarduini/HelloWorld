import {
	ImageBackground,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import styles from './LoginStyle';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const LoginView = (props) => {
	const [loginInfo, setLoginInfo] = useState('');
	const [passInfo, setPassInfo] = useState('');

	return (
		<ImageBackground
			style={styles.container}
			source={require('../../../assets/foster-lake.jpg')}
		>
			<KeyboardAvoidingView
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				style={styles.container}
			>
				<View style={styles.topView}>
					<View style={styles.boxTop}>
						<MaterialIcons name="place" size={60} color="blue" />
						<Text style={styles.textLogo}>Place App</Text>
					</View>
				</View>
				<View style={styles.bottomView}>
					<View style={styles.boxBottom}>
						<TextInput
							style={styles.input}
							onChange={(value) => setLoginInfo(value)}
							value={loginInfo}
							placeholderTextColor="#707070"
							placeholder="user"
						/>
						<TextInput
							style={styles.input}
							onChange={(value) => setPassInfo(value)}
							value={passInfo}
							placeholderTextColor="#707070"
							placeholder="password"
						/>
						<TouchableOpacity
							style={styles.loginBtn}
							onPress={() => console.log('Presseds!')}
						>
							<Text style={styles.textLoginBtn}>Login</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		</ImageBackground>
	);
};

export default LoginView;
