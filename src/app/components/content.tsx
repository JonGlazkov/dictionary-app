import { PropsWithChildren } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

interface ContentProps extends PropsWithChildren {}

export default function Content({ children }: ContentProps) {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
      }}
    >
      {children}
    </View>
  );
}
