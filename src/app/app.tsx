import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { getWord } from "../api/get-word";
import CardContent from "./components/card-content";
import Content from "./components/content";
import EmptyContent from "./components/empty-content";
import Header from "./components/header";
import Search from "./components/search";

export default function App() {
  const [search, setSearch] = useState("");

  const {
    data: wordResult,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["word", search],
    queryFn: async () => {
      if (!search) return;
      return getWord(search);
    },
    enabled: !!search,
  });

  console.log(wordResult?.map((word) => word));
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Header title="Dicionário" />
      <View style={{ flex: 1, width: "100%" }}>
        {isLoading && <ActivityIndicator animating />}
        {wordResult && (
          <Content>
            {wordResult.map((word) => (
              <CardContent
                key={word.word}
                title={word.word}
                content={word}
                hasAudio={!!word.phonetics.find((p) => p.audio)}
              />
            ))}
          </Content>
        )}
        {!wordResult && !isLoading && (
          <EmptyContent
            message={!wordResult && isError ? error.message : undefined}
          />
        )}
        <Search onSearch={setSearch} />
      </View>
    </KeyboardAvoidingView>
  );
}
