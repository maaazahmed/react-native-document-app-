import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { Textarea, Form } from "native-base";
import firebase from "react-native-firebase"


const database = firebase.database().ref("/")
export default class Dashboard extends Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: { backgroundColor: '#e91e8d' },
        headerTitleStyle: { color: '#fff', fontSize: 14 },
        headerTintColor: '#e91e8d',

    }
    constructor() {
        super()
        this.state = {
            noteText: "",
            documanentVal: "",
            currentUser: {}
        }
    }

    componentWillMount() {
        this.setState({
            currentUser: this.props.navigation.state.params.currentUser
        })
    }


    saveDocumanent() {
        const {
            noteText,
            documanentVal,
            currentUser
        } = this.state

        const documanent = {
            noteText, documanentVal
        }
        database.child(`Documents/${currentUser.uid}/`).push(documanent)
        this.props.navigation.navigate("Dashboard")
    }


    render() {
        return (
            <View style={styles.container} >
                <View style={{ height: 70, width: "100%", backgroundColor: '#3454cd', alignItems: "flex-end", justifyContent: "space-between", flexDirection: "row", padding: 10 }} >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Dashboard")} >
                        <Text style={{ fontSize: 15, fontWeight: "500", color: "#fff" }} > Cancel</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, fontWeight: "500", color: "#fff" }} > Note</Text>
                    <TouchableOpacity onPress={this.saveDocumanent.bind(this)} >
                        <Text style={{ fontSize: 15, fontWeight: "500", color: "#fff" }} > Save</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.TextInputContainer} >
                    <View style={styles.TextInputView} >
                        <TextInput
                            placeholder="Document Name"
                            value={this.state.documanentVal}
                            onChangeText={(documanentVal) => this.setState({ documanentVal })}
                            style={styles.TextInput} />
                    </View>
                    <View style={styles.TextInputView} >
                        <View style={styles.TextInput} />
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: "#f0f3f5", padding: 5 }}>
                    <Form style={{ flex: 1 }}>
                        <Textarea style={{ flex: 1 }}
                            onChangeText={(noteText) => this.setState({ noteText })}
                            bordered
                            placeholder="Write something" />
                    </Form>
                </View>
            </View>

        );
    }
}


// https://www.facebook.com/groups/895646787179039/2120981241312248/?comment_id=2121006757976363&reply_comment_id=2121217984621907&notif_id=1553710779414190&notif_t=group_comment

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: '#fff',
    },
    TextInputContainer: {
        height: 150,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    TextInputView: {
        height: 60,
        width: "75%",
        justifyContent: "center"
    },
    TextInput: {
        width: "100%",
        height: "85%",
        fontSize: 13,
        borderRadius: 3,
        padding: 5,
        backgroundColor: "#f0f3f5"
    }
});
