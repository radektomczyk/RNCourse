import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

function App() {
    const [counter, setCounter] = useState(0);
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const [courseGoals, setCourseGoals] = useState([]);

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            enteredGoalText,
        ]);
        incrementCounter();
        console.log(counter);
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                    placeholder="Your first goal"
                />
                <Button onPress={addGoalHandler} title="Add goal" />
            </View>

            <View style={styles.goalsContainer}>
                {courseGoals.map((goal, counter) => (
                    <View style={styles.goalItem} key={counter}>
                        <Text style={styles.goalText}>{goal}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

export default App;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        padding: 50,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
    },
    goalsContainer: {
        flex: 5,
    },
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
        padding: 8,
    },
    goalText: {
        color: "white",
    },
});
