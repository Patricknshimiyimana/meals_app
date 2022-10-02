import { View, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

export default function MealsOverview({ route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData) => {
    return <MealItem title={itemData.item.title}></MealItem>
  };

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
