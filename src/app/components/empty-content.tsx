import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

interface EmptyContentProps {
  message?: string;
}

export default function EmptyContent({ message }: EmptyContentProps) {
  const theme = useTheme();

  return (
    <View
      style={{
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.inversePrimary,
      }}
    >
      <Text
        variant="labelLarge"
        style={{
          width: "80%",
          textAlign: "center",
        }}
      >
        {message ??
          "Procure uma palavra no dicionário para encontrar suas definições."}
      </Text>
    </View>
  );
}
