import { Pressable, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          { alignItems: 'center', borderWidth: 1, padding: 16 },
          pressed ? { backgroundColor: 'red' } : { backgroundColor: 'white' },
        ]}
      >
        <Text>This should be red when pressed</Text>
      </Pressable>
    </View>
  );
}
