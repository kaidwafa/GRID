import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';



export default function Example() {
    ; const styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  });
    const [items, setItems] = React.useState([
      { name: 'SALES SUMMARY : OVERVIEW', code: '' },
      { name: 'DZD292.67', code: 'GROSS Sales' },
      { name: '31', code: 'Sales' },
      { name: 'DZD282.67', code: 'Net Sales' },
      { name: 'DZD0.00', code: 'Methodes' },
      { name: '(DZD10.00)', code: 'Discounts and comptes' },
      { name: 'Yearly Gross Sales', code: '' },
      { name: 'This Year', code: 'DZD292.67' },
      { name: 'Previous Year', code: '' },
      { name: '', code: '' },
      { name:'', code: '' },
     
    ]);
   
    return (
      <FlatGrid
      itemDimension={130}
       data={items}
       style={styles.gridView}
       spacing={10}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
        )}
      />
    );
  }

 



