import { QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { expo as appName } from "../../app.json";
import { queryClient } from "../lib/react-query";
import App from "./app";

export default function Main() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </QueryClientProvider>
  );
}
AppRegistry.registerComponent(appName.name, () => Main);
