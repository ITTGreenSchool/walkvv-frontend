import {
	createStackNavigator,
	StackScreenProps,
} from "@react-navigation/stack";
import NavigationHeader from "../components/general/navigation/NavigationHeader";
import FootpathBarCodeScannerModal from "../screens/footpaths/FootpathBarCodeScannerModal/FootpathBarCodeScannerModal";
import FootpathDetailsScreen from "../screens/footpaths/FootpathDetailsScreen/FootpathDetailsScreen";
import FootpathsListScreen from "../screens/footpaths/FootpathsListScreen/FootpathsListScreen";
import AccountSettingsScreen from "../screens/settings/AccountSettingsScreen/AccountSettingsScreen";
import { Footpath } from "../types/Footpath";

const Stack = createStackNavigator<FootpathStackParamList>();

type FootpathStackParamList = {
	FootpathsListScreen: undefined;
	FootpathDetailsScreen: { footpath: Footpath };
	FootpathBarCodeScannerModal: { footpath?: Footpath };
	AccountSettingsScreen: undefined;
};

export type FootpathsListScreenProps = StackScreenProps<
	FootpathStackParamList,
	"FootpathsListScreen"
>;

export type FootpathDetailsScreenProps = StackScreenProps<
	FootpathStackParamList,
	"FootpathDetailsScreen"
>;

export type FootpathBarCodeScannerModalProps = StackScreenProps<
	FootpathStackParamList,
	"FootpathBarCodeScannerModal"
>;

export type AccountSettingsScreen = StackScreenProps<
	FootpathStackParamList,
	"AccountSettingsScreen"
>;

const FootpathStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="FootpathsListScreen"
			screenOptions={{
				header: (props) => <NavigationHeader {...props} />,
			}}
		>
			<Stack.Group>
				<Stack.Screen
					name="FootpathsListScreen"
					component={FootpathsListScreen}
				/>
				<Stack.Screen
					name="FootpathDetailsScreen"
					component={FootpathDetailsScreen}
				/>
				<Stack.Screen
					name="AccountSettingsScreen"
					component={AccountSettingsScreen}
				/>
			</Stack.Group>
			<Stack.Group
				screenOptions={{
					presentation: "modal",
				}}
			>
				<Stack.Screen
					name="FootpathBarCodeScannerModal"
					component={FootpathBarCodeScannerModal}
				/>
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default FootpathStack;
