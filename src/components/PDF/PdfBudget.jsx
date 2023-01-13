import React from 'react'
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import dayjs from 'dayjs';

export default function PdfBudget({ pdfData, cot, uti, tarj }) {
    const today = new Date()

    return (
        <Document>
            <Page
                size="A4"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    backgroundColor: "white",
                }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                    <Image
                        style={{ width: "120px" }}
                        alt="logo"
                        src="../images/logoesdi.png"
                    />
                    <View style={{ display: "flex", flexDirection: "column" }}>
                        <Text style={{ fontSize: 11, paddingBottom: 3 }}>Precios válidos 24Hs - Fecha emisión presupuesto: {dayjs(today).locale("es").format("DD/MM/YY")}</Text>
                    </View>
                </View>

                <View style={{ display: "flex", flexDirection: "column", width: "100%", margin: "2px" }}>
                    <View style={{ display: "flex", flexDirection: "column", margin: "20px", borderBottom: "2px solid #dd237d" }}></View>
                    {pdfData.map((data) => <View style={{ display: "flex", flexDirection: "column", margin: "2px", justifyContent: "space-around" }}>
                        <View style={{ display: "flex", flexDirection: "row", margin: "4px", justifyContent: "space-between" }}>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={{ fontSize: 18, paddingBottom: "4px" }}>Notebook {data.marca + " " + data.modelo}</Text>
                                <Text style={{ fontSize: 12, paddingBottom: "4px" }}>Procesador: {data.marcaProcesador + " " + data.modeloProcesador}</Text>
                                <Text style={{ fontSize: 12, paddingBottom: "4px" }}>Memoria RAM: {data.ram}</Text>
                                <Text style={{ fontSize: 12, paddingBottom: "4px" }}>Almacenamiento: {data.almacenamiento}</Text>
                                <Text style={{ fontSize: 12, paddingBottom: "4px" }}>Pantalla: {data.pantalla}</Text>
                                {data.placavideo !== "" ? (<Text style={{ fontSize: 12, paddingBottom: "4px" }}>Placa de video: {data.placavideo}</Text>) : (<Text style={{ fontSize: 10 }}></Text>)}
                                {data.otros !== "" ? (<Text style={{ fontSize: 8 }}>{data.otros}</Text>) : (<Text style={{ fontSize: 10 }}></Text>)}
                            </View>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Image
                                    style={{ width: "230px", height: "230px" }}
                                    alt="imgNbk"
                                    src={data.imagen}
                                />
                            </View>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", marginBottom: "2px" }}>
                            <Text style={{ fontSize: 15, paddingBottom: "10px" }}>Precio Efectivo/Transferencia Bancaria: ${Math.round((data.precio * cot[0].usd) * uti[0].uti20)}</Text>
                            <Text style={{ fontSize: 12, paddingBottom: "10px" }}>Precio Lista-Tarjetas de crédito: ${Math.round((data.precio * cot[0].usd) * uti[0].uti25)}</Text>
                            <Text style={{ fontSize: 12, paddingBottom: "10px" }}>Tarjetas Bancarizadas VISA - MasterCard</Text>
                            <Text style={{ fontSize: 12, paddingBottom: "10px" }}>12 cuotas de:  ${((((data.precio * cot[0].usd) * uti[0].uti25) * tarj[0].ahora12) / 12).toFixed(2)}</Text>
                            <Text style={{ fontSize: 12, paddingBottom: "10px" }}>18 cuotas de:  ${((((data.precio * cot[0].usd) * uti[0].uti25) * tarj[0].ahora18) / 18).toFixed(2)}</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "column", marginBottom: "5px", marginTop: "5px", borderBottom: "3px solid #dd237d" }}></View>
                    </View>)}
                </View>
            </Page>
        </Document >

    )
}


{/* <View style={{ display: "flex", flexDirection: "row", margin: "20px", justifyContent: "space-between" }}>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={{ fontSize: 15 }}>Notebook ASUS 123</Text>
                                <Text style={{ fontSize: 10 }}>Procesador: Intel i5-12128</Text>
                                <Text style={{ fontSize: 10 }}>Memoria RAM: 8GB</Text>
                                <Text style={{ fontSize: 10 }}>Almacenamiento: 256GB</Text>
                                <Text style={{ fontSize: 10 }}>Pantalla: 15.6" Full-HD</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={{ fontSize: 12 }}>Precio contado Efectivo: $150000</Text>
                                <Text style={{ fontSize: 12 }}>12 cuotas de :$15000</Text>
                                <Text style={{ fontSize: 12 }}>18 cuotas de :$10500</Text>
                            </View>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", margin: "20px", justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ fontSize: 15 }}>Notebook HP 4210AB</Text>
                                <Text style={{ fontSize: 10 }}>Procesador: Intel i7-15128</Text>
                                <Text style={{ fontSize: 10 }}>Memoria RAM: 16GB</Text>
                                <Text style={{ fontSize: 10 }}>Almacenamiento: 1000GB</Text>
                                <Text style={{ fontSize: 10 }}>Pantalla: 15.6" Full-HD</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "column" }}>
                                <Text style={{ fontSize: 12 }}>Precio contado Efectivo: $150000</Text>
                                <Text style={{ fontSize: 12 }}>12 cuotas de :$15000</Text>
                                <Text style={{ fontSize: 12 }}>18 cuotas de :$10500</Text>
                            </View>
                        </View> */}