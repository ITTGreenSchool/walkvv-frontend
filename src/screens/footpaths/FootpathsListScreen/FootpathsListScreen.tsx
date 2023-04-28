import React, { useMemo } from "react";
import { SectionList } from "react-native";
import { Appbar, Divider, List, Text } from "react-native-paper";
import FootpathListTile from "../../../components/FootpathsListScreen/FootpathListTile/FootpathListTile";
import { FootpathsListScreenProps } from "../../../navigation/FootpathStack";
import { Footpath, FootpathStatus } from "../../../types/Footpath";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

const FootpathsListScreen = ({ navigation }: FootpathsListScreenProps) => {
	React.useLayoutEffect(() => {
		navigation.setOptions({
			title: "Lista percorsi",
			headerRight: () => (
				<Appbar.Action
					icon="account-circle"
					onPress={() => {
						navigation.navigate("AccountSettingsScreen");
					}}
				/>
			),
		});
	});

	const [footpathsList, setFootpathsList] = React.useState<Footpath[]>([]);

	React.useEffect(() => {
		setFootpathsList([
			{
				status: FootpathStatus.InProgress,
				id: 1,
				name: "Sorgenti del Meschio",
				description: "Il meschio è un fiume che attraversa vittorio, è una delle motivazioni dell’insediamento umano a Vittorio. Il fiume nasce alle pendici del monte visentin, a savassa alta frazione di Vittorio Veneto. La meta è esattamente l’inizio del fiume Meschio, è una sorgente d’acqua limpida che nel tempo ha creato un laghetto. consiglio vivamente di fare questo percorso più volte durante l’anno, per vedere i vari colori che la sorgente assume.",
				imgPath: require("../../../img/download.jpeg"),
				start: "45.99731967211662, 12.290553390655688",
				end: "46.022076719399614, 12.288486597034858",
				mapCode: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=14kcDbbXbKFllAZeQRp_3sFjZ3BYtbIk&ehbc=2E312F" width="100%" height="100%"></iframe>',
			},
			{
				status: FootpathStatus.NotDone,
				id: 2,
				name: "Madonna della salute",
				description: "La passeggiata offre una gradevole vista di Vittorio, di Costa e anche , se c’è buon tempo si può ammirare anche Venezia. La meta è il santuario della madonna della salute costruito in 7 mesi nel 1829, è stato costruito con la “piera dolza” di Fregona, prese dalle grotte del Caglieron.",
				imgPath: require("../../../img/img_6218.jpg"),
				start: "45.99731967211662, 12.290553390655688",
				end: "45.990794145333716, 12.310004312372744",
				mapCode: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1lP7FHwA1UNeWmnwnwcSvJ9PegLPUHNc&ehbc=2E312F" width="100%" height="100%"></iframe>',
			},
			{
				status: FootpathStatus.NotDone,
				id: 3,
				name: "Sentiero della rappresaglia",
				description: "Il sentiero, denominato 'Sui Luoghi della Rappresaglia Tedesca (23 Agosto 1944)', ripercorre i luoghi che furono teatro della rappresaglia tedesca del 23 Agosto 1944, che porto' all'incendio e alla distruzione dei borghi di Santa Giustina, Naronchie, Pradal Centro e Pradal Basso.",
				imgPath: require("../../../img/esterno-della-chiesa.jpg"),
				start: "45.99731967211662, 12.290553390655688",
				end: "46.006656450631006, 12.287605409845874",
				mapCode: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=19ELW5m2yrG1s1PLEQGnP1Xz7-IcxqMo&ehbc=2E312F" width="100%" height="100%"></iframe>',
			},


		]);
	}, []);

	const inProgressFootpaths = useMemo(
		() =>
			footpathsList.filter(
				(value) => value.status === FootpathStatus.InProgress
			),
		[footpathsList]
	);

	const notDoneFootpaths = useMemo(
		() =>
			footpathsList.filter(
				(value) => value.status === FootpathStatus.NotDone
			),
		[footpathsList]
	);
	const doneFootpaths = useMemo(
		() =>
			footpathsList.filter(
				(value) => value.status === FootpathStatus.Done
			),
		[footpathsList]
	);

	return (
		<SafeAreaView style={styles.container}>
		<SectionList
			sections={[
				{
					title: "In Corso",
					data: inProgressFootpaths,
				},
				{
					title: "Da Percorrere",
					data: notDoneFootpaths,
				},
				{
					title: "Conclusi",
					data: doneFootpaths,
				},
			]}
			style={styles.container}
			renderSectionHeader={({ section: { title, data } }) => (
				<>
					<List.Subheader style={styles.sectionHeader}>
						<Text variant="titleLarge" style={styles.sectionTitle}>
							{title}
						</Text>
					</List.Subheader>
					{data.length > 0 || (
						<Text
							variant="bodySmall"
							style={styles.sectionEmptyText}
						>
							Nessun elemento da visualizzare
						</Text>
					)}
				</>
			)}
			keyExtractor={(footpath) => footpath.id.toString()}
			renderItem={({ item }) => (
				<FootpathListTile
					footpath={item}
					onPress={() =>
						navigation.navigate("FootpathDetailsScreen", {
							footpath: item,
						})
					}
				/>
			)}
		/>
		</SafeAreaView>
	);
};

export default FootpathsListScreen;
