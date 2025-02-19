import { useState } from "react";
import { View } from "react-native";
import { TextInput, useTheme } from "react-native-paper";

interface SearchProps {
  onSearch: (search: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const theme = useTheme();
  const [search, setSearch] = useState("");

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  const handleSearchSubmit = () => {
    onSearch(search.trim());
  };

  return (
    <View
      style={{
        bottom: 0,
        position: "absolute",
        width: "100%",
        padding: 12,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        backgroundColor: theme.colors.surface,
      }}
    >
      <TextInput
        label="Pesquise uma palavra.."
        placeholder="Pesquise uma palavra no dicionário"
        value={search}
        onChangeText={handleSearch}
        onSubmitEditing={handleSearchSubmit}
        right={<TextInput.Icon icon="magnify" />}
      />
    </View>
  );
}
