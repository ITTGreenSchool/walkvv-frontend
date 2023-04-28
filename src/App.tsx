import { Provider as PaperProvider } from "react-native-paper";
//import "react-native-gesture-handler";	// NEEDS TO STAY AT THE TOP LEVEL ENTRY
import RootNavigation from "./navigation/RootNavigation";
import AuthContext from "./contexts/global/AuthContext";
import { useState } from "react";
import { CombinedDarkTheme, CombinedLightTheme } from "./themes";
import { NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import {login, logout} from './services/Authentication';

const App = () => {
	// Authentication status
	const [authStatus, setAuthStatus] = useState<AuthenticationStatus>({});

	// Setting color scheme
	const colorScheme = useColorScheme();
	const CombinedDefaultTheme = colorScheme === 
	"dark" ? CombinedDarkTheme : CombinedLightTheme;

	return (
		<PaperProvider theme={CombinedDefaultTheme}>
			<AuthContext.Provider value={{ ...authStatus, login, logout}}>
				<NavigationContainer theme={CombinedDefaultTheme}>
					<RootNavigation />
				</NavigationContainer>
			</AuthContext.Provider>
		</PaperProvider>
	);
};

export default App;
