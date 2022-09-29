import { View, Text, StatusBar, StyleSheet, FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = () => {
  const renderCategoryItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPressCatItem={() => {
          console.log('category item pressed!', itemData.item.title)
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          numColumns={2}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {},
});
