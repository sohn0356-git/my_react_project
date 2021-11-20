import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

function Product({ product }) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        marginTop: 10,
        borderBottomColor: '#dfe4ea',
        borderBottomWidth: 1,
        paddingVertical: 10,
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        {/* Product Image View */}
        <View style={{ flex: 1, paddingHorizontal: 8 }}>
          <Image
            style={{ width: 100, height: 100, resizeMode: 'center' }}
            source={{ uri: product.img }}
          />
        </View>
        {/* Product Details View */}
        <View style={{ flex: 3 }}>
          {/* -- Ratings View */}
          <View>
            <Text>{product.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fff200',
                  alignItems: 'center',
                  paddingHorizontal: 4,
                  paddingVertical: 2,
                  borderRadius: 4,
                  marginTop: 4,
                }}
              >
                <Text
                  style={{
                    color: '#111',
                    marginRight: 8,
                    fontSize: 16,
                  }}
                >
                  {product.rating}
                </Text>
                <Icon
                  name='star'
                  size={12}
                  color={'#111'}
                />
              </View>
              <Text style={{ marginLeft: 6}}>
                ({product.ratingCount})
              </Text>
            </View>
          </View>
          {/* -- Price View */}
          <View style={{ marginTop: 4 }}>
            <Text style={{fontSize: 16 }}>
              {`₹${product.price}  `}
              <Text
                style={{
                  color: '#57606f',
                  textDecorationLine: 'line-through',
                }}
              >
                {product.actualPrice !== '' ? `₹${product.actualPrice}` : null}
              </Text>
              <Text style={{ color: 'green' }}>{`  ${product.discount}`}</Text>
            </Text>
          </View>
        </View>
      </View>
      {/* Offer View */}
      <View
        style={{
          paddingHorizontal: 8,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Icon name='tag' size={16} />
        <Text style={{ marginLeft: 10, fontSize: 16}}>
          {product.offer}
        </Text>
      </View>
      {/* Specifications Wrap */}
      <View
        style={{
          marginTop: 4,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        {product.specifications.map((spec, idx) => (
          <Text
            key={idx}
            style={{
              marginTop: 4,
              marginBottom: 4,
              marginLeft: 4,
              marginRight: 4,
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#f2f2f2',
              alignSelf: 'baseline',
              paddingHorizontal: 6,
              paddingVertical: 4,
              borderRadius: 4,
            }}
          >
            {spec}
          </Text>
        ))}
      </View>
    </View>
  );
}

export default function cartScreen({ navigation }) {

  const [products] = useState([
    {
      name:
        'HP 15s Ryzen 5 Quad Core - (8 GB/1 TB HDD/Windows 10 Home) 15s-GR0009AU',
      img: 'https://i.imgur.com/FVhuBzL.jpg',
      rating: '4.5',
      ratingCount: '214',
      price: '41,990',
      actualPrice: '44,908',
      discount: '6% off',
      offer: 'No cost EMI ₹4,666/month. Standard EMI also available',
      specifications: [
        '8 GB/1 TB HDD',
        'Windows 10 Home',
        '15.6 inch Full HD',
        'Thin and Light Laptop',
      ],
    },
    {
      name:
        'Dell Vostro Core i5 10th Gen - (8 GB/1 TB HDD/256 GB SSD/Windows 10 Home) Vostro 3491',
      img: 'https://i.imgur.com/XZIJXIq.jpg',
      rating: '4.2',
      ratingCount: '112',
      price: '53,490',
      actualPrice: '53,859',
      discount: '',
      offer: 'No cost EMI ₹5,944/month. Standard EMI also available',
      specifications: [
        '8 GB/1 TB HDD/256 GB SSD',
        'Windows 10 Home',
        '14 inch Full HD Display',
        'Without Optical Disk Drive',
      ],
    },
    {
      name:
        'Apple MacBook Pro Core i9 9th Gen - (16 GB/1 TB SSD/Mac OS Catalina/4 GB Graphics)',
      img: 'https://i.imgur.com/1ge8POI.jpg',
      rating: '4.6',
      ratingCount: '42',
      price: '2,24,900',
      actualPrice: '2,39,900',
      discount: '6% off',
      offer: 'No cost EMI ₹24,989/month. Standard EMI also available',
      specifications: [
        '16 GB/1 TB SSD/4 GB Graphics',
        'Mac OS Catalina',
        '16 inch, Silver, 2 kg',
        'IPS Retina Display ',
      ],
    },
    {
      name:
        'Asus Vivobook Ryzen 5 Quad Core - (8 GB/1 TB HDD/Windows 10 Pro) D1401D-EK166',
      img: 'https://i.imgur.com/UvL33gA.jpg',
      rating: '4.0',
      ratingCount: '36',
      price: '50,900',
      actualPrice: '',
      discount: '',
      offer: 'Get Google One 3-month Free Trial on purchase of a Laptop',
      specifications: [
        '8 GB/1 TB HDD/Ryzen 5 Quad Core',
        'Windows 10 Pro',
        '14 inch, Transparent Silver',
        'Without Optical Disk Drive',
      ],
    },
  ]);

  useEffect(() => {
    navigation.setOptions({
      title: 'Laptops',
      headerTitleStyle: { fontSize: 22 },
      headerStyle: { backgroundColor: '#f6e58d' },
      headerLeft: () => (
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Icon
            name='bar-chart'
            size={28}
            style={{ transform: [{ rotate: '90deg' }, { scaleX: -1 }] }}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Icon name='shopping-cart' size={24} />
          <View style={[styles.iconCountView, { right: -6 }]}>
            <Text style={styles.iconCountText}>4</Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, []);

  
  
  

  return (
    <>
      {/* Arrange Products Bar */}
      <View style={styles.arrangeProductsBar}>
        <TouchableOpacity
          style={[
            styles.arrangeProductsBarItemOpacity,
            { borderRightColor: '#dfe4ea', borderRightWidth: 1 },
          ]}
        >
          <Icon name='sort-amount-desc' size={20} />
          <Text style={styles.arrangeProductsBarItemLabel}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrangeProductsBarItemOpacity}>
          <View>
            <Icon name='filter' size={20} />
            <View style={styles.iconCountView}>
              <Text style={styles.iconCountText}>2</Text>
            </View>
          </View>
          <Text style={styles.arrangeProductsBarItemLabel}>Filter</Text>
        </TouchableOpacity>
      </View>
      {/* Products List */}
      <ScrollView>
        {Array(5)
          .fill(1)
          .map((el, idx1) =>
            products.map((product, idx2) => (
              <TouchableOpacity key={idx1+1000+idx2}>
                <Product product={product} key={idx2} />
              </TouchableOpacity>
            ))
          )}
      </ScrollView>
      <View style={{ height: 20 }}></View>
    </>
  );
}

const styles = StyleSheet.create({
  arrangeProductsBar: {
    flexDirection: 'row',
    paddingVertical: 14,
    backgroundColor: '#fafafa',
    borderBottomColor: '#dfe4ea',
    borderBottomWidth: 1,
  },
  arrangeProductsBarItemOpacity: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrangeProductsBarItemLabel: {
    marginHorizontal: 10,
    fontSize: 20,
  },
  iconCountView: {
    position: 'absolute',
    zIndex: 2,
    right: -4,
    top: -4,
    paddingHorizontal: 4,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  iconCountText: { color: '#fff', fontWeight: 'bold' },
});