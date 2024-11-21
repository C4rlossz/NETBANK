import { TextInput, Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import React, { useState } from 'react';

import logo from "../../assets/logo.png";
import setting from "../../assets/setting.png";
import mastercard from "../../assets/mastercard.png";
import Wallet from "../../assets/Wallet.png";
import Pix from "../../assets/pix.png";
import Boleto from "../../assets/boleto.png";
import IA from "../../assets/IA.png";
import Deposit from "../../assets/dinheiro.png";
import IPVA from "../../assets/IPVA.png";


export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={logo} />
          <Image source={setting} />
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View />
            <Image source={mastercard} />
          </View>
          <Text style={styles.cardText}>Carlos Eduardo</Text>
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.cardDetailsHeader}>
            <Text style={styles.cardDetailsHeaderText}>Saldo Disponivel</Text>
            <Image source={Wallet} />
          </View>
          <Text style={styles.cardDetailsText}>R$875,76</Text>
        </View>
      </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Do que precisa?</Text>

<ScrollView style={styles.FooterContentScroolView} showsHorizontalScrollIndicator={false} horizontal={true}>

          <View style={styles.footerCard}>            
            <Image source={Pix} />
            <Text style={styles.FooterCardText}>Fazer um Pix</Text>
          </View>
          <View style={styles.footerCard}>            
            <Image source={Boleto} />
            <Text style={styles.FooterCardText}>Pagar um Boleto</Text>
          </View>
          <View style={styles.footerCard}>            
            <Image source={Deposit} />
            <Text style={styles.FooterCardText}>Fazer um Deposito</Text>
          </View>
          <View style={styles.footerCard}>            
            <Image source={IA} />
            <Text style={styles.FooterCardText}>Falar com NET IA</Text>
          </View>
          <View style={styles.footerCard}>            
            <Image source={IPVA} />
            <Text style={styles.FooterCardText}>Consultar Multas e IPVA</Text>
          </View>
</ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008F8C",
    alignItems: "center",
  },
  content: {
    width: "100%",
    paddingHorizontal: 30,
  },
  FooterContentScroolView: {
    height: 400,
    paddingLeft: 20,
  },

  header: {
    paddingTop: 40,
    paddingBottom: 10,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },

  card: {
    width: "100%",
    height: 190,
    backgroundColor: "#0c9494",
    borderRadius: 21,
    elevation: 5,
    marginBottom: 20,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: 20,
    justifyContent: "space-between",
  },
  cardDetails: {
    width: "100%",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    height: 120,
    backgroundColor: "#0c9494",
    borderRadius: 21,
    elevation: 5,
    padding: 20,
    justifyContent: "space-between",
  },
  cardHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cardDetailsHeader: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  cardDetailsText: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "600",
  },

  cardDetailsHeaderText: {
    color: "#fff",
  },

  cardText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    lineHeight: 20,
  },
  footer: {
    paddingTop: 20,
    paddingLeft: 0,
    paddingRight: 0,
  },

  footerText: {
    color: "#fff",
    marginHorizontal: 40,
    fontWeight: "600",
    fontSize: 13,
    marginVertical: 10,
  },
  FooterCardText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
    lineHeight: 18,
  },

  footerCard: {
    width: 100,
    height: 127,
    backgroundColor: "#0c9494",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    elevation: 5,
    borderRadius: 20,
    justifyContent: "space-between",
    padding: 15,
    marginTop: 37,
    marginLeft: 10,
  },
});
