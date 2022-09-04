import React from "react";
import { Page, Text, View, Document, StyleSheet, PDFViewer } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  title: {
    fontSize: "20pt",
    textAlign: "center",
  },
  section: {
    margin: 25,
    padding: 10,
    flexGrow: 1,
  },
  right: {
    textAlign: "right",
  },
  margin: {
    marginTop: 50,
    textAlign: "right",
  },
});

const MyDocument = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Parodi Hujan Bulan Oktober</Text>
          <View style={styles.section}>
            <Text>Tak ada yang lebih tabah</Text>
            <Text>Dari hujan bulan Oktober</Text>
            <Text>Dirahasiakannya hujan deras menggoncang</Text>
            <Text>Kepada lapang lahan berbanjir itu</Text>
            <Text>.</Text>
            <Text>Tak ada yang lebih sendu</Text>
            <Text>Dari hujan bulan Oktober</Text>
            <Text>Dihapuskannya jejak-jejak alir selokan</Text>
            <Text>Yang senyap senyap di ujung gelombang</Text>
            <Text>.</Text>
            <Text>Tak ada yang lebih dingin</Text>
            <Text>Dari hujan bulan Oktober</Text>
            <Text>Dibiarkannya yang tak terhanyut</Text>
            <Text>Dihambat alang alang pagar rumah tetangga itu</Text>
            <Text style={styles.margin}>Sapardi Djoko Damono</Text>
            <Text style={styles.right}>terespon</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default function Pdf() {
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
}
