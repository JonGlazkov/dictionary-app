import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { Avatar, Button, Card, Divider, Text } from "react-native-paper";

interface CardContentProps {
  title: string;
  subtitle?: string;
  hasAudio?: boolean;
  content: WordData;
}

export default function CardContent({
  subtitle,
  title,
  hasAudio,
  content,
}: CardContentProps) {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const audioUrl = content.phonetics.find((p) => p.audio)?.audio;

  const playAudio = async () => {
    if (!audioUrl) {
      console.warn("Nenhum áudio disponível.");
      return;
    }
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: audioUrl },
        { shouldPlay: true }
      );
      setSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error("❌ Erro ao tocar o áudio:", error);
    }
  };

  useEffect(() => {
    (async () => {
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        allowsRecordingIOS: false,
        staysActiveInBackground: false,
        shouldDuckAndroid: true,
      });
    })();

    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return (
    <Card style={{ borderRadius: 10, margin: 10 }} disabled>
      <Card.Title
        title={title}
        subtitle={subtitle}
        right={(props) =>
          hasAudio ? (
            <Button onPress={playAudio}>
              <Avatar.Icon
                {...props}
                style={{ backgroundColor: "white" }}
                size={30}
                icon="volume-high"
              />
            </Button>
          ) : null
        }
      />
      <Divider />
      <View style={{ padding: 10 }}>
        {content.meanings.map((meaning, index) => (
          <View key={index} style={{ paddingBottom: 10 }}>
            <Text variant="titleMedium" style={{ fontWeight: "bold" }}>
              {meaning.partOfSpeech}
            </Text>
            {meaning.definitions.map((definition, idx) => (
              <Text
                key={idx}
                variant="bodyMedium"
                style={{ marginVertical: 5 }}
              >
                • {definition.definition}
              </Text>
            ))}
            {index < content.meanings.length - 1 && (
              <Divider style={{ marginVertical: 10 }} />
            )}
          </View>
        ))}
      </View>
    </Card>
  );
}
