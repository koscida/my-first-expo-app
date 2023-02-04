import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Advice from "./Components/Advice";

export default function App() {
	return (
		<View style={styles.container}>
			<Advice />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
