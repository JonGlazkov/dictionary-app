import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Text } from "react-native-paper";
import { getWord } from "../api/get-word";
import Content from "./components/content";
import EmptyContent from "./components/empty-content";
import Header from "./components/header";
import Search from "./components/search";

export default function App() {
  const [search, setSearch] = useState("");

  const { data } = useQuery({
    queryKey: ["word", search],
    queryFn: () => getWord(search),
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Header title="Início" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data ? (
            <Content>
              <Text variant="labelLarge">Hello</Text>
            </Content>
          ) : (
            <EmptyContent />
          )}
          <Search onSearch={setSearch} />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
