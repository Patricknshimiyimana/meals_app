import { Text, View } from "react-native";

export default function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  const mealTitle = route.params.mealTitle;
  console.log(route.params.mealId);
  console.log(route.params.mealTitle);
  return (
    <View>
      <Text>{mealTitle}</Text>
    </View>
  );
}
