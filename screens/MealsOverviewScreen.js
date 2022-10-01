import { View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";

export default function MealsOverview({ route }) {
    const catId = route.params.categoryId
  return (
    <View>
      <Text>Meals Overview screen - {catId}</Text>
    </View>
  );
}
