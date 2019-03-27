import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions, Modal } from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import firebase from "react-native-firebase"


const { height, width } = Dimensions.get("window")
const database = firebase.database().ref("/")
export default class App extends Component {
    constructor() {
        super()
        this.state = {
            modalVisible: false,
            currentUser: {},
            documentsArr: []
        };
    }


    async componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                database.child(`Users/${user.uid}/`).once("value", (snapshoot) => {
                    let currentUser = snapshoot.val()
                    currentUser.uid = snapshoot.key;
                    this.setState({
                        currentUser: currentUser
                    })
                    database.child(`Documents/${currentUser.uid}/`).on("value", (data) => {
                        let arr = []
                        let obj = data.val()
                        for (var key in obj) {
                            arr.push({ ...obj[key], key })
                        }
                        this.setState({
                            documentsArr: arr
                        })

                    })
                })
            }
        })
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    goToEditor() {
        this.props.navigation.navigate("TextEditor", { currentUser: this.state.currentUser })
        this.setState({ modalVisible: false });

    }


    logout() {
        firebase.auth().signOut()
        this.props.navigation.navigate("SignIn")
    }



    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 70, width: "100%", backgroundColor: '#3454cd', alignItems: "center", flexDirection: "row", justifyContent: "space-between", padding: 10 }} >
                    <Text style={{ fontSize: 20, fontWeight: "500", color: "#fff" }} > Note</Text>
                    <TouchableOpacity onPress={this.logout.bind(this)} >
                        <Text style={{ fontSize: 20, fontWeight: "500", color: "#fff" }} > Log out</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, backgroundColor: "#f0f3f5" }} >
                    <View style={{ height: 150, backgroundColor: "#fff" }} >
                        {/* <<============>> EMPTY VIEW <<==============>> */}
                    </View>
                    <View style={{ flex: 1, backgroundColor: "#fff", marginTop: 4 }} >
                        <View style={{ alignItems: "center", padding: 10 }} ><Text style={{ fontSize: 17, fontWeight: "500" }} >All Notes</Text></View>
                        <View style={{ paddingLeft: 15, paddingRight: 15 }} >

                            <FlatList data={this.state.documentsArr}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => { this.props.navigation.navigate("ViewDocument", item) }}
                                            style={{
                                                height: height / 12,
                                                borderBottomColor: "#f0f3f5",
                                                borderBottomWidth: 1,
                                            }} >
                                            <View style={{ flexDirection: "row", alignItems: "center" }} >

                                                <Icon name="note-outline" style={{ color: "#3454cd", fontSize: 20, alignSelf: "center" }} />
                                                <View style={{ flex: 1, padding: 5 }} >
                                                    <Text style={{ fontWeight: "500", fontSize: 14 }} >{item.documanentVal}</Text>
                                                </View>
                                            </View>
                                            <Text style={{ marginLeft: 25 }} >{item.noteText.slice(0, 10)}...</Text>
                                        </TouchableOpacity>
                                    )
                                }} keyExtractor={(item) => item.key} />
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                        style={{ height: 50, width: 50, borderRadius: 1000, position: "absolute", justifyContent: "center", alignItems: "center", bottom: 15, left: (Dimensions.get("window").width / 2) - 25, backgroundColor: "#c0f0f2", elevation: 5 }} >
                        <Text style={{ fontSize: 25, color: "#fff", fontWeight: "500" }} >+</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ marginTop: 22 }}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                        }}>
                        <View style={{ flex: 1, backgroundColor: "rgba(53, 84, 207, .2)", justifyContent: "flex-end" }}>
                            <View style={{
                                height: 180, backgroundColor: "#fff",
                                justifyContent: "center", alignItems: "center",

                            }} >
                                <View style={{ alignItems: "center", }} >
                                    <Text style={{ fontSize: 17, fontWeight: "500" }} >What do you like to do</Text>
                                </View>

                                <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center" }} >
                                    <View style={{ height: 90, width: 130, padding: 10 }} >
                                        <TouchableOpacity onPress={() => {
                                            this.setModalVisible(false);
                                        }} style={{ flex: 1, borderRadius: 3, backgroundColor: "#f0f3f5", }} >

                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ height: 90, width: 130, padding: 10 }} >
                                        <TouchableOpacity onPress={this.goToEditor.bind(this)} style={{ flex: 1, borderRadius: 5, backgroundColor: "#f0f3f5", justifyContent: "center" }} >
                                            <Icon name="note-outline" style={{ color: "#3454cd", fontSize: 25, alignSelf: "center" }} />
                                            <Text style={{ fontSize: 15, fontWeight: "500", color: "#3454cd", textAlign: "center" }} >Add Note</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "green"
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});







