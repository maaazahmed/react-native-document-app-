import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";



export default class ViewDocument extends Component {
    render() {
        const document = this.props.navigation.state.params;
        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }} >
                <View style={{ height: 70, width: "100%", backgroundColor: '#3454cd', alignItems: "flex-end", justifyContent: "space-between", flexDirection: "row", padding: 10 }} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Dashboard")} >
                        <Text style={{ fontSize: 15, fontWeight: "500", color: "#fff" }} > Back</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: "500", color: "#fff" }} > Note</Text>
                    <TouchableOpacity  >
                        <Text style={{ fontSize: 15, fontWeight: "500", color: "#fff" }} > Delete</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ padding: 10, flex: 1 }} >
                    <Text style={{ fontSize: 20, fontWeight: "500", color: "#3454cd" }} >{document.documanentVal}</Text>
                    <View style={{ marginTop: 10 }} >
                        <Text style={{}} >{document.noteText}</Text>
                    </View>
                </View>
            </View>
        )
    }
}