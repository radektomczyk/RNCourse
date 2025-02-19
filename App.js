import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

function App() {
    const [counter, setCounter] = useState(0);
    const [courseGoals, setCourseGoals] = useState([]);

    const incrementCounter = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const deleteGoalHandler = (id) => {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    };

    const addGoalHandler = (enteredGoalText) => {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            {
                text: enteredGoalText,
                id: counter.toString(),
            },
        ]);
        incrementCounter();
        console.log(counter);
    };

    return (
        <View style={styles.appContainer}>
            <GoalInput onAddGoal={addGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <GoalItem
                                text={itemData.item.text}
                                onDeleteItem={deleteGoalHandler}
                                id={itemData.item.id}
                            />
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
                    alwaysBounceVertical={false}
                />
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

    goalsContainer: {
        flex: 5,
    },
});
