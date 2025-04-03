import React from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CommonCss from "@/src/components/Css/CommonCss";
import CommonHeader from "@/src/components/CommonHeader";

export default function Home({navigation}){
  return (
    <>
      <CommonHeader />
      <View style={[CommonCss.container, { alignItems: '' }]}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="black" style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="Search Product" />
        </View>
        <Text style={styles.categoryTitle}>Select Category</Text>
        <View style={styles.row}>
          <Pressable style={styles.categoryBox} onPress={()=>navigation.navigate('Services')}>
            <View style={styles.imagePlaceholder}></View>
            <Text style={styles.categoryText}>Sarees</Text>
          </Pressable>
          <View style={styles.categoryBox}>
            <View style={styles.imagePlaceholder}></View>
            <Text style={styles.categoryText}>Imitation Jewellery</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.categoryBox}>
            <View style={styles.imagePlaceholder}></View>
            <Text style={styles.categoryText}>Furniture</Text>
          </View>
          <View style={styles.categoryBox}>
            <View style={styles.imagePlaceholder}></View>
            <Text style={styles.categoryText}>Computer</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.categoryBox}>
            <View style={styles.imagePlaceholder}></View>
            <Text style={styles.categoryText}>Dress</Text>
          </View>
          <View style={styles.categoryBox}>
            <View style={styles.imagePlaceholder}></View>
            <Text style={styles.categoryText}>Hand Bag</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginBottom: 15,
  },
  categoryBox: {
    width: "45%",
    alignItems: "center",
  },
  imagePlaceholder: {
    width: "100%",
    height: 70,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'black'
  },
  categoryText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

