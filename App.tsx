// App.tsx

import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import ProductTree from './src/screens/ProductTree';
import {data} from './src/config/categories';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Product Hierarchy</Text>
      <ProductTree data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 14,
    textAlign: 'center',
  },
});

export default App;
