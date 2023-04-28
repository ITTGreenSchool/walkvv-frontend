import { View } from "react-native";
import React, { useContext } from "react";
import AuthContext from "../../../contexts/global/AuthContext";
import {
	ActivityIndicator,
	Button,
	HelperText,
	TextInput,
} from "react-native-paper";
import { Controller, useForm } from "react-hook-form";
import styles from "./styles";
import { SignInScreenProps } from "../../../navigation/AuthStack";
import {Image} from "react-native";

// Form data type
type formData = {
	username: string;
	password: string;
};

// Sign in screen is a component that allows the user to sign in
const SignInScreen = ({ navigation }: SignInScreenProps) => {

	// Sets the title of the screen
	React.useLayoutEffect(() => {
		navigation.setOptions({ title: "Login" });
	});

	// Gets the login function from the auth context
	const {login} = useContext(AuthContext)


	function onSubmit({ username, password }: formData) {
		login(username, password);
	}

	const form = useForm<formData>();
	return (
		<View style={styles.mainView}>

			<Image
				source={require("../../../img/leaf.png")}
				style={styles.image}
			/>

			<Controller
				name="username"
				control={form.control}
				rules={{ required: true }}
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput
						placeholder="Username"
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						mode="outlined"
						error={
							authError === AuthenticationError.NonExistingUser
						}
						outlineStyle={{borderRadius: 20, backgroundColor: "#fff"}}
					/>
				)}
			/>
			<HelperText
				type="error"
				visible={authError === AuthenticationError.NonExistingUser}
			>
				Utente non esistente
			</HelperText>

			<Controller
				name="password"
				control={form.control}
				rules={{ required: true }}
				render={({ field: { onChange, value, onBlur } }) => (
					<TextInput
						placeholder="Password"
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						mode="outlined"
						error={authError === AuthenticationError.WrongPassword}
						secureTextEntry
						outlineStyle={{borderRadius: 20, backgroundColor: "#fff"}}
					/>
				)}
			/>
			<HelperText
				type="error"
				visible={authError === AuthenticationError.WrongPassword}
			>
				Password errata
			</HelperText>
			<Button mode="elevated" onPress={form.handleSubmit(onSubmit)} style={styles.button}>
				Login
			</Button>
			<ActivityIndicator animating={authInProgress} size="large" />
		</View>
	);
};

export default SignInScreen;
