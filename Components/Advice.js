import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Advice() {
	const [advice, setAdvice] = useState();

	useEffect(() => {
		axios.get("https://api.adviceslip.com/advice");
		console.log("I ran");
		setAdvice("I ran");
	}, []);

	return <Text>{advice}</Text>;
}
