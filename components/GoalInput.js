import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

function GoalInput({ onAddGoal }) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={goalInputHandler}
                style={styles.textInput}
                placeholder="Your first goal"
                value={enteredGoalText}
            />
            <Button onPress={addGoalHandler} title="Add goal" />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
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
});
