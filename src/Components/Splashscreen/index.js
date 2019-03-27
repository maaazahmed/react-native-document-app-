import React, { Component } from "react";
import {
    View,
    StyleSheet,
    ActivityIndicator
} from "react-native";
import firebase from "react-native-firebase";


const database = firebase.database().ref("/")
export default class Splash extends Component {
    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                database.child(`Users/${user.uid}/`).once("value", (snapshoot) => {
                    let currentUser = snapshoot.val()
                    currentUser.uid = snapshoot.key;
                    setTimeout(() => {
                        this.props.navigation.navigate("Dashboard")
                    }, 1000)
                })
            }
            else {
                setTimeout(() => {
                    this.props.navigation.navigate("SignIn")
                }, 1000)
            }
        })
    }

    
    render() {
        return (
            <View style={styles.constianer} >
                <ActivityIndicator size="large" color="#fff" />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    constianer: {
        flex: 1,
        backgroundColor: "#3454cd",
        justifyContent: "center",
        alignItems: "center",
    }
})