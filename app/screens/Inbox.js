import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AppScreen from "../components/AppScreen";
import { FONTS, icons } from "../constants/theme";
import Switch from "../components/SwitchBtn";
import FilterBtn from "../components/FilterBtn";
import AppGradient from "../components/AppGradient";
import InboxCard from "../components/cards/InboxCard";

const messages = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

const Inbox = () => {
  const [active, setActive] = useState(false);
  return (
    <AppScreen>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Inbox</Text>
          <Image
            source={icons.bell}
            resizeMode="contain"
            style={styles.bellIcon}
          />
        </View>

        <View style={styles.secondRow}>
          <Switch active={active} onChange={() => console.log("changed")} />
          <Text style={styles.groupBy}>Group by listings</Text>
        </View>

        <View style={styles.thirdRow}>
          <View style={styles.editContainer}>
            <Image
              source={icons.edit}
              resizeMode="contain"
              style={styles.editIcon}
            />
            <Text style={styles.editText}>Edit</Text>
          </View>

          <FilterBtn />
        </View>

        <View style={styles.fourthMain}>
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <InboxCard />}
          />
          <AppGradient />
        </View>
      </View>
    </AppScreen>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  bellIcon: {
    width: 30,
    height: 30,
  },
  editContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  editIcon: {
    width: 30,
    height: 30,
  },
  editText: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    marginLeft: 10,
  },
  fourthMain: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  groupBy: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    marginLeft: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  headerTitle: {
    fontFamily: FONTS.bold,
    fontSize: 24,
  },
  mainContainer: {
    flex: 1,
    paddingTop: 45,
  },
  secondRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  topContainer: {
    height: 240,
  },

  thirdRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    marginHorizontal: 20,
  },
});
