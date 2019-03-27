import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import firebase from "react-native-firebase"


const database = firebase.database().ref()
export default class SignIn extends Component {
    static navigationOptions = {
        title: 'Sign In',
        headerStyle: { backgroundColor: '#3454cd' },
        headerTitleStyle: { color: '#fff', fontSize: 14 },
        headerTintColor: '#ffffff',
    }
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            isLoader: false
        }
    }

    SignIn() {
        const { email, password } = this.state
        if (password !== "" && email !== "") {
            this.setState({
                isLoader: true
            })
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then((res) => {
                    database.child(`Users/${res.user._user.uid}/`).once("value", (snapshoot) => {
                        let currentUser = snapshoot.val()
                        currentUser.uid = snapshoot.key;
                        setTimeout(() => {
                            this.setState({
                                isLoader: false
                            })
                            this.props.navigation.navigate("Dashboard")
                        }, 2000)
                    })
                })
                .catch((error) => {
                    var errorMessage = error.message;
                    alert(errorMessage)
                    this.setState({
                        isLoader: false
                    })
                })
        }
        else {
            alert("All Feilds are required !")
        }
    }


    render() {
        const { email, password } = this.state
        return (
            <View style={styles.container}>
                <View style={{ height: 70, width: "100%", backgroundColor: '#3454cd', alignItems: "center", justifyContent: "flex-end", padding: 10 }} >
                    <Text style={{ fontSize: 20, fontWeight: "500", color: "#fff" }} > Note</Text>
                </View>
                <View style={{ flex: 0.5,justifyContent:"center" , alignItems:"center" }} >
                    <Text style={{ fontSize: 20, fontWeight: "500", color: "#4a4a4a", }} > 
                      Clever message 
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: "500", color: "#4a4a4a", }} > 
                     for login
                    </Text>
                </View>
                <View style={{ flex: 1, width: "100%", alignItems: "center" }} >
                    <View style={[styles.TextInputView, styles.marginTop]} >
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={(email) => this.setState({ email })}
                            style={[styles.TextInput, {}]} />
                    </View>
                    <View style={[styles.TextInputView, styles.marginTop]} >
                        <TextInput
                            secureTextEntry={true}
                            placeholder="Password"
                            value={password}
                            onChangeText={(password) => this.setState({ password })}
                            style={[styles.TextInput, {}]} />
                    </View>
                    <View style={styles.buttonView} >
                        {(this.state.isLoader) ?
                            <ActivityIndicator size="large" color="#3454cd" />
                            :
                            <TouchableOpacity onPress={this.SignIn.bind(this)} activeOpacity={.5} style={styles.button} >
                                <Text style={styles.buttonText} >SIGN IN</Text>
                            </TouchableOpacity>}
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("SignUp")}
                        style={{ marginTop: 10, alignSelf:"flex-end", padding:15 }} >
                        <Text style={{ color: "#3454cd", fontWeight:"500" }} >Don't have an accunt !</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
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
    TextInputView: {
        height: 50,
        width: "95%"
    },
    TextInput: {
        flex: 1,
        fontSize: 13,
        // borderColor: "#3454cd",
        // borderWidth: 1,
        borderRadius: 3,
        padding: 5,
        backgroundColor: "#f0f3f5"

    },
    buttonView: {
        height: 50,
        width: "95%", marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        height: 50,
        width: "100%",
        backgroundColor: "#c0f0f2",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3
    },
    buttonText: {
        color: "#fff"
    },
    marginTop: {
        marginTop: 20
    }
});
