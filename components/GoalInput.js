import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

function GoalInput({ onAddGoal, isVisible, onCancel }) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText);
    };

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    };

    return (
        <Modal visible={isVisible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                    placeholder="Your first goal"
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title="Add goal" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        padding: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "100%",
        padding: 8,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: "30%",
        marginHorizontal: 8,
    },
});
