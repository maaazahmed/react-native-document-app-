
// import React, { Component } from 'react';
// import {
//     TextInput,
//     View, StyleSheet, Keyboard
//     , TouchableWithoutFeedback, Text, Dimensions
//     , KeyboardAvoidingView, Platform
// } from 'react-native';
// import CNRichTextEditor, { CNToolbar, getInitialObject, getDefaultStyles } from "react-native-cn-richtext-editor";
// import Icon from "react-native-vector-icons/MaterialCommunityIcons"

// import {
//     Menu,
//     MenuOptions,
//     MenuOption,
//     MenuTrigger,
//     MenuContext,
//     MenuProvider,
//     renderers
// } from 'react-native-popup-menu';

// const { SlideInMenu } = renderers;

// const IS_IOS = Platform.OS === 'ios';
// const { width, height } = Dimensions.get('window');
// const defaultStyles = getDefaultStyles();

// class App extends Component {

//     constructor(props) {
//         super(props);


//         this.state = {
//             selectedTag: 'body',
//             selectedColor: 'default',
//             selectedHighlight: 'default',
//             colors: ['red', 'green', 'blue'],
//             highlights: ['yellow_hl', 'pink_hl', 'orange_hl', 'green_hl', 'purple_hl', 'blue_hl'],
//             selectedStyles: [],
//             value: [getInitialObject],
//             documanentVal: ""
//         };

//         this.state.value = [getInitialObject()];

//         this.editor = null;

//     }

//     onStyleKeyPress = (toolType) => {
//         this.editor.applyToolbar(toolType);
//     }

//     onSelectedTagChanged = (tag) => {
//         this.setState({
//             selectedTag: tag
//         })
//     }

//     onSelectedStyleChanged = (styles) => {
//         const colors = this.state.colors;
//         const highlights = this.state.highlights;
//         let sel = styles.filter(x => colors.indexOf(x) >= 0);

//         let hl = styles.filter(x => highlights.indexOf(x) >= 0);
//         this.setState({
//             selectedStyles: styles,
//             selectedColor: (sel.length > 0) ? sel[sel.length - 1] : 'default',
//             selectedHighlight: (hl.length > 0) ? hl[hl.length - 1] : 'default',
//         })

//     }

//     onValueChanged = (value) => {
//         this.setState({
//             value: value
//         });
//     }


//     onColorSelectorClicked = (value) => {

//         if (value === 'default') {
//             this.editor.applyToolbar(this.state.selectedColor);
//         }
//         else {
//             this.editor.applyToolbar(value);

//         }

//         this.setState({
//             selectedColor: value
//         });
//     }

//     onHighlightSelectorClicked = (value) => {
//         if (value === 'default') {
//             this.editor.applyToolbar(this.state.selectedHighlight);
//         }
//         else {
//             this.editor.applyToolbar(value);

//         }

//         this.setState({
//             selectedHighlight: value
//         });
//     }

//     renderColorMenuOptions = () => {

//         let lst = [];

//         if (defaultStyles[this.state.selectedColor]) {
//             lst = this.state.colors.filter(x => x !== this.state.selectedColor);
//             lst.push('default');
//             lst.push(this.state.selectedColor);
//         }
//         else {
//             lst = this.state.colors.filter(x => true);
//             lst.push('default');
//         }

//         return (

//             lst.map((item) => {
//                 let color = defaultStyles[item] ? defaultStyles[item].color : 'black';
//                 return (
//                     <MenuOption value={item} key={item}>
//                         <Icon name="format-color-text" color={color}
//                             size={28} />
//                     </MenuOption>
//                 );
//             })

//         );
//     }

//     renderHighlightMenuOptions = () => {
//         let lst = [];

//         if (defaultStyles[this.state.selectedHighlight]) {
//             lst = this.state.highlights.filter(x => x !== this.state.selectedHighlight);
//             lst.push('default');
//             lst.push(this.state.selectedHighlight);
//         }
//         else {
//             lst = this.state.highlights.filter(x => true);
//             lst.push('default');
//         }

//         return (

//             lst.map((item) => {
//                 let bgColor = defaultStyles[item] ? defaultStyles[item].backgroundColor : 'black';
//                 return (
//                     <MenuOption value={item} key={item}>
//                         <Icon name="marker" color={bgColor}
//                             size={26} />
//                     </MenuOption>
//                 );
//             })

//         );
//     }

//     renderColorSelector() {

//         let selectedColor = '#737373';
//         if (defaultStyles[this.state.selectedColor]) {
//             selectedColor = defaultStyles[this.state.selectedColor].color;
//         }


//         return (
//             <Menu renderer={SlideInMenu} onSelect={this.onColorSelectorClicked}>
//                 <MenuTrigger>
//                     <Icon name="format-color-text" color={selectedColor}
//                         size={28} style={{
//                             top: 2
//                         }} />
//                 </MenuTrigger>
//                 <MenuOptions customStyles={optionsStyles}>
//                     {this.renderColorMenuOptions()}
//                 </MenuOptions>
//             </Menu>
//         );
//     }

//     renderHighlight() {
//         let selectedColor = '#737373';
//         if (defaultStyles[this.state.selectedHighlight]) {
//             selectedColor = defaultStyles[this.state.selectedHighlight].backgroundColor;
//         }
//         return (
//             <Menu renderer={SlideInMenu} onSelect={this.onHighlightSelectorClicked}>
//                 <MenuTrigger>
//                     <Icon name="marker" color={selectedColor}
//                         size={24} style={{
//                         }} />
//                 </MenuTrigger>
//                 <MenuOptions customStyles={highlightOptionsStyles}>
//                     {this.renderHighlightMenuOptions()}
//                 </MenuOptions>
//             </Menu>
//         );
//     }

//     render() {
//         return (
//             <View
//                 // behavior="padding"
//                 // enabled
//                 // keyboardVerticalOffset={IS_IOS ? 0 : 0}
//                 style={styles.root}
//             >
//                 <View style={{ height: 150, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }} >
//                     <View style={{
//                         height: 60,
//                         width: "75%",
//                         justifyContent: "center"
//                     }} >
//                         <TextInput
//                             value={this.state.documanentVal}
//                             onChangeText={(documanentVal) => this.setState({ documanentVal })}
//                             style={{
//                                 width: "100%",
//                                 height: "85%",
//                                 fontSize: 13,
//                                 borderRadius: 3,
//                                 padding: 5,
//                                 backgroundColor: "#f0f3f5"
//                             }} />
//                     </View>
//                     <View style={{
//                         height: 60,
//                         width: "75%",
//                         justifyContent: "center"
//                     }} >
//                         <TextInput 
//                         style={{
//                             width: "100%",
//                             height: "85%",
//                             fontSize: 13,
//                             borderRadius: 3,
//                             padding: 5,
//                             backgroundColor: "#f0f3f5"
//                         }} />
//                     </View>
//                 </View>
//                 <MenuProvider style={{ flex: 1 }}>
//                     <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
//                         <View style={styles.main}>
//                             <CNRichTextEditor
//                                 ref={input => this.editor = input}
//                                 onSelectedTagChanged={this.onSelectedTagChanged}
//                                 onSelectedStyleChanged={this.onSelectedStyleChanged}
//                                 value={this.state.value}
//                                 style={styles.editor}
//                                 styleList={defaultStyles}
//                                 foreColor='dimgray' // optional (will override default fore-color)
//                                 onValueChanged={this.onValueChanged}
//                             />
//                         </View>
//                     </TouchableWithoutFeedback>

//                     <View style={styles.toolbarContainer}>

//                         <CNToolbar
//                             size={28}
//                             body={<Icon name="format-text" />}
//                             bold={<Icon name="format-bold" />}
//                             italic={<Icon name="format-italic" />}
//                             underline={<Icon name="format-underline" />}
//                             // lineThrough={<Icon name="format-strikethrough-variant" />}
//                             // title={<Icon name="format-header-1" />}
//                             // heading={<Icon name="format-header-3" />}
//                             ul={<Icon name="format-list-bulleted" />}
//                             ol={<Icon name="format-list-numbered-rtl" />}
//                             foreColor={this.renderColorSelector()}
//                             // highlight={this.renderHighlight()}
//                             selectedTag={this.state.selectedTag}
//                             selectedStyles={this.state.selectedStyles}
//                             onStyleKeyPress={this.onStyleKeyPress}
//                             backgroundColor="aliceblue" // optional (will override default backgroundColor)
//                             color="gray" // optional (will override default color)
//                             selectedColor='white' // optional (will override default selectedColor)
//                             selectedBackgroundColor='deepskyblue' // optional (will override default selectedBackgroundColor)
//                         />
//                     </View>
//                 </MenuProvider>
//             </View>
//         );
//     }

// }

// var styles = StyleSheet.create({
//     root: {
//         flex: 1,
//         // paddingTop: 20,
//         backgroundColor: '#eee',
//         flexDirection: 'column',
//         justifyContent: 'flex-end',
//     },
//     main: {
//         flex: 1,
//         // marginTop: 10,
//         // paddingLeft: 30,
//         // paddingRight: 30,
//         // paddingBottom: 1,
//         alignItems: 'stretch',
//     },
//     editor: {
//         backgroundColor: '#f0f3f5'
//     },
//     toolbarContainer: {
//         minHeight: 35
//     },
//     menuOptionText: {
//         textAlign: 'center',
//         paddingTop: 5,
//         paddingBottom: 5
//     },
//     divider: {
//         marginVertical: 0,
//         marginHorizontal: 0,
//         borderBottomWidth: 1,
//         borderColor: '#eee'
//     }
// });

// const optionsStyles = {
//     optionsContainer: {
//         backgroundColor: 'yellow',
//         padding: 0,
//         width: 40,
//         marginLeft: width - 40 - 30,
//         alignItems: 'flex-end',
//     },
//     optionsWrapper: {
//         //width: 40,
//         backgroundColor: 'white',
//     },
//     optionWrapper: {
//         //backgroundColor: 'yellow',
//         margin: 2,
//     },
//     optionTouchable: {
//         underlayColor: 'gold',
//         activeOpacity: 70,
//     },
//     // optionText: {
//     //   color: 'brown',
//     // },
// };

// const highlightOptionsStyles = {
//     optionsContainer: {
//         backgroundColor: 'transparent',
//         padding: 0,
//         width: 40,
//         marginLeft: width - 40,

//         alignItems: 'flex-end',
//     },
//     optionsWrapper: {
//         //width: 40,
//         backgroundColor: 'white',
//     },
//     optionWrapper: {
//         //backgroundColor: 'yellow',
//         margin: 2,
//     },
//     optionTouchable: {
//         underlayColor: 'gold',
//         activeOpacity: 70,
//     },
//     // optionText: {
//     //   color: 'brown',
//     // },
// };

// export default App;












import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    Modal,
    FlatList,
    Dimensions,
    Image,
    TextInput
} from 'react-native';
import { Container, Header, Content, Textarea, Form } from "native-base";
import firebase from "react-native-firebase"


const database = firebase.database().ref("/")
const { width, height } = Dimensions.get("window")
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
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate("Dashboard")} >
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
