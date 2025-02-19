import { PropsWithChildren } from "react";
import { ScrollView, View } from "react-native";
import { useTheme } from "react-native-paper";

interface ContentProps extends PropsWithChildren {}

export default function Content({ children }: ContentProps) {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        padding: 12,
        width: "100%",
        backgroundColor: theme.colors.background,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          padding: 10,
          flexGrow: 1,
          paddingBottom: 80,
        }}
        keyboardShouldPersistTaps="never" // Ao tocar fora do input, o teclado é dispensado
        keyboardDismissMode="on-drag" // Ao arrastar, o teclado some
        nestedScrollEnabled={true}
      >
        {children}
      </ScrollView>
    </View>
  );
}
