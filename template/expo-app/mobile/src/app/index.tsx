import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0A0A0A' }}>
      <Text style={{ fontSize: 20, color: '#ffffff', fontWeight: '600' }}>App Ready</Text>
      <Text style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginTop: 8 }}>Start chatting to build your app</Text>
    </View>
  );
}
