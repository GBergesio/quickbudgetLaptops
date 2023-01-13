import React from 'react'
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';

export default function pdf({ pdfData }) {

    console.log("nueva data", pdfData)

    return (
        <>
            <View style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Text style={{ fontSize: 13, paddingBottom: 3 }}>Agustín Aguirre 332 - (5186) Alta Gracia, Córdoba</Text>
                {/* <Text>{pdfData[0].almacenamiento}</Text> */}
            </View>
        </>
    )
}
