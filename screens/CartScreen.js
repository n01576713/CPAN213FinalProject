import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { removeFromCart, clearCart } from '../slices/cart';
import { useSelector, useDispatch } from 'react-redux';

const CartScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [cartItems, setCartItems] = useState([]);
  
  //const dispatch = useDispatch();
  //const reduxCartItems = useSelector(state => state.cart.items);

  const handleBuy = () => {
    if (cartItems.length === 0) {
      Alert.alert('Empty Cart', 'The cart is empty.');
    } else if (!cardNumber || cardNumber.length !== 8) {
      Alert.alert('Not Valid', 'Please enter a valid 8-digit card number.');
    } else if (!name || !address) {
      Alert.alert('Incorrect', 'Please make sure name and address are filled.');
    } else {
      Alert.alert('Purchase Completed', 'Thank you for your purchase!', [{ onPress: resetCheckout }]);
    }
    dispatch(clearCart());
  };

  const resetCheckout = () => {
    setCardNumber('');
    setAddress('');
    setName('');
    setCartItems([]);
  };

  /*
  return (
    <View style={styles.container}>
      {cartItems.map((item, index) => (
        <View key={index}>
          <Text>{item.name} - ${item.price}</Text>
          <Button title="Remove" onPress={() => dispatch(removeFromCart(item))} />
        </View>
      ))}
      <Button title="Buy" onPress={handleBuy} />
    </View>
  );
  */

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Checkout</Text>
      <View style={styles.cartItems}>
        <Text style={styles.cartHeading}>Items:</Text>
        {cartItems.map((item, index) => (
          <View key={index}>
            <Text>{item.name} - ${item.price}</Text>
          </View>
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={(text) => setCardNumber(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Buy" onPress={handleBuy} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItems: {
    marginBottom: 10,
    padding:10,
  },
  cartHeading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default CartScreen;