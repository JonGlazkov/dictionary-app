import { router } from "expo-router";
import { Appbar } from "react-native-paper";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  const handleRouterBack = () => {
    router.canGoBack() && router.back();
  };

  return (
    <Appbar.Header mode="small" statusBarHeight={2}>
      {router.canGoBack() ? (
        <Appbar.BackAction size={16} onPress={handleRouterBack} />
      ) : (
        <Appbar.Action icon="book-open-blank-variant" />
      )}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
