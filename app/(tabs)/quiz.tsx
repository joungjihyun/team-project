import React from 'react';
import { Image, StyleSheet, Text, View, TextInput } from 'react-native';

export default function Quiz() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ position: 'relative', flexDirection: 'row' }}>
          <Text>🌻</Text>
          <View style={{ backgroundColor: '#e4f0d1', flexDirection: 'row', marginLeft: 15, marginTop: 4 }}>
            <Text style={{ fontSize: 10, alignSelf: 'center' }}> 세계 8대 건강식품 기억하기    </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginLeft: 15 }}>
        <Text style={styles.textWithNoSpace}>앞서 기억해 둔 </Text>
          <Text style={[styles.textWithNoSpace, { color: 'red'}]}>세계 8대 건강식품과 효능</Text>
          <Text style={styles.textWithNoSpace}>입니다.</Text>
        </View>
        <Text style={{ marginLeft: 15 }}>각 부위에 해당하는 건강식품 이름을 적어보세요.</Text>
      </View>
      <View style={styles.body}>
        <Image source={require('../../assets/images/tables/body.png')} style={{ width: 200, height: 470, marginTop: 35 }} />
        <View style={{ flexDirection: 'column', marginLeft: 5 }}>
          <View style={{ marginTop: 70, marginLeft: 0, flexDirection: 'row', alignItems: 'center'}}>
            <TextInput style={{ borderWidth: 1, width: 65, height: 25, fontSize: 15, paddingVertical: 0, color: 'red'}} scrollEnabled={false} />
            <Text style={{fontSize: 15}}> : 눈 피로 감소</Text>
          </View>
          <View style={{ marginTop: 20, marginLeft: 0, flexDirection: 'row', alignItems: 'center'}}>
            <TextInput style={{ borderWidth: 1, width: 65, height: 25, fontSize: 15, paddingVertical: 0, color: 'red'}} scrollEnabled={false} />
            <Text style={{fontSize: 15}}> : 백내장 예방</Text>
          </View>
          <View style={{ marginTop: 20, marginLeft: 0, flexDirection: 'row', alignItems: 'center'}}>
            <TextInput style={{ borderWidth: 1, width: 65, height: 25, fontSize: 15, paddingVertical: 0, color: 'red'}} scrollEnabled={false} />
            <Text style={{fontSize: 15}}> : 동맥경화 예방</Text>
          </View>
          <View style={{ marginTop: 20, marginLeft: 0, flexDirection: 'row', alignItems: 'center'}}>
            <TextInput style={{ borderWidth: 1, width: 65, height: 25, fontSize: 15, paddingVertical: 0, color: 'red'}} scrollEnabled={false} />
            <Text style={{fontSize: 15}}> : 고혈압 예방</Text>
          </View>
          <View style={{ marginTop: 20, marginLeft: 0, flexDirection: 'row', alignItems: 'center'}}>
            <TextInput style={{ borderWidth: 1, width: 65, height: 25, fontSize: 15, paddingVertical: 0, color: 'red'}} scrollEnabled={false} />
            <Text style={{fontSize: 15}}> : 소화기능 향상</Text>
          </View>
          <View style={{ marginTop: 20, marginLeft: 0, flexDirection: 'row', alignItems: 'center'}}>
            <TextInput style={{ borderWidth: 1, width: 65, height: 25, fontSize: 15, paddingVertical: 0, color: 'red'}} scrollEnabled={false} />
            <Text style={{fontSize: 15}}> : 위암 예방</Text>
          </View>
          <View style={{ marginTop: 20, marginLeft: 0, flexDirection: 'row', alignItems: 'center'}}>
            <TextInput style={{ borderWidth: 1, width: 65, height: 25, fontSize: 15, paddingVertical: 0, color: 'red'}} scrollEnabled={false} />
            <Text style={{fontSize: 15}}> : 변비 예방</Text>
          </View>
          <View style={{ marginTop: 20, marginLeft: 0, flexDirection: 'row'}}>
            <TextInput style={{ borderWidth: 1, width: 65, height: 25, fontSize: 15, paddingVertical: 0, color: 'red'}} scrollEnabled={false} />
            <View style={{flexDirection: 'column', marginTop: 0}}>
              <Text style={{fontSize: 15}}> : 골다공증, </Text>
              <Text style={{fontSize: 15}}>   치매 예방</Text>
            </View>
          </View>
        </View>
      </View>
        <Text style={{ fontSize: 15 }}>🗓️</Text>
        <Text style={[styles.textWithNoSpaceWithUnderline, { color: 'red' }]}>세계 8대 건강식품과 효능</Text>
        <Text style={styles.textWithNoSpaceWithUnderline}>을 기억해주세요.</Text>
      </View>


  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 20,
    paddingBlockStart: 30,
    backgroundColor: 'white'
  },
  header: {
    flex: 1,
    flexDirection: 'column'
  },
  body: {
    flex: 7,
    flexDirection: 'row'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  textWithNoSpace: {
    marginHorizontal: 0
  },
  textWithNoSpaceWithUnderline: {
    marginHorizontal: 0,
    textDecorationLine: 'underline'
  }
});