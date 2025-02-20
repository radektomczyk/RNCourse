import { useState } from "react";
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
    Image,
} from "react-native";

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
                <Image
                    style={styles.image}
                    source={require("../assets/splash-icon.png")}
                />
                <TextInput
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                    placeholder="Your first goal"
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={addGoalHandler} title="Add goal" color="#b180f0"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onCancel} color="#f31282"/>
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
        padding: 16,
        backgroundColor: "#311b6b",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: "100%",
        padding: 16,

    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16,
    },
    button: {
        width: "30%",
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
});
