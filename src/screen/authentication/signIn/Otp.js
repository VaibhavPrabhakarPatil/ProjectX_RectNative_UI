import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import CommonCss from '@/src/components/Css/CommonCss'

export default function Otp({ navigation }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = Array.from({ length: 6 }, () => useRef(null));

  const handleChangeText = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text.length === 1 && index < 5) {
      inputRefs[index + 1].current.focus();
    }
    if (text.length === 0 && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };
  return (
    <ScrollView contentContainerStyle={CommonCss.container} keyboardShouldPersistTaps="handled">
      <Image source={require('../../../../assets/images/hand.png')} style={CommonCss.image} />
      <Text style={[CommonCss.title,{marginBottom:10}]}>Enter verification code</Text>
      <Text style={styles.subtitle}> We have sent you a 6 digit verification code on</Text>
      <Text style={styles.phoneNumber}>+91 00000000000</Text>
      <View style={styles.codeContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            ref={inputRefs[index]}
            mode="outlined"
            theme={{ colors: { primary: '#FFCC29' } }}
            style={styles.codeInput}
            keyboardType="number-pad"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChangeText(text, index)}
          />
        ))}
      </View>
      <View style={styles.resendContainer}>
        <Button mode="text">
          <Text style={styles.resendText}>Resend OTP</Text>
        </Button>
      </View>

      <Button mode="contained" onPress={() => navigation.navigate('Home')} style={CommonCss.button}>
        <Text style={CommonCss.buttonText}>Verify</Text>
      </Button>

      <Text style={styles.footerText}> By continuing, you agree to{' '}
        <Text style={[styles.footerText, { fontWeight: 'bold', color: 'black' }]}>Reebootz. </Text>
        <Text style={styles.linkText} onPress={() => navigation.navigate('Termsof_Use')}>Terms of Use</Text> and our{' '}
        <Text style={styles.linkText} onPress={() => navigation.navigate('Privacy_Policy')}>Privacy Policy</Text>.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  phoneNumber: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  codeInput: {
    width: 50,
    height: 45,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#f9f9f9',
    textAlignVertical: 'center', 
  },
  resendContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  resendText: {
    color: '#007bff',
    fontSize: 16,
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',  
    lineHeight: 20,
  },
  linkText: {
    color: '#007bff',
  },
});

