import React, { useState } from "react";
import { AppLoading } from "expo";
import { Image } from "react-native";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";

const cacheImages = (images) => {
  if (typeof image === "string") {
    return Image.prefetch(image);
  } else {
    return Asset.fromModule(image).downloadAsync();
  }
};

const cacheFonts = (fonts) => {
  fonts.map((font) => Font.loadAsync(fonts));
};

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const loadAssets = async () => {
    const images = cacheImages([
      "http://pngimg.com/uploads/medical_mask/medical_mask_PNG41.png",
      require("./assets/splash.png"),
    ]);
    const fonts = cacheFonts([Ionicons.font]);
    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => setIsReady(true);

  return isReady ? null : (
    <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.error} />
  );
}
