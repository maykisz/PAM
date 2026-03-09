import React from 'react';
import { styles } from './styles/styles';
import { produtos } from './Banco/banco';
import { View, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Item from './components/Item';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <FlatList
        data={produtos}
        renderItem={({ item }) => (
          <Item
              title={item.title}
              brand={item.brand}
              price={item.price}
              quantity={item.quantity}
              image={item.image}
         />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

export default App;