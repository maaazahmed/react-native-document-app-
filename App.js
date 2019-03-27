import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { TextEditor } from "./src/Components/index"

import AppNavigation from "./src"

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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












// import React, { Component } from 'react';
// import { View, StyleSheet, Keyboard
// , TouchableWithoutFeedback, Text
// , KeyboardAvoidingView } from 'react-native';

// import  CNRichTextEditor , { CNToolbar, getInitialObject , getDefaultStyles } from "react-native-cn-richtext-editor";

// const defaultStyles = getDefaultStyles();

// class App extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             selectedTag : 'body',
//             selectedStyles : [],
//             value: [getInitialObject()]
//         };

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
//         this.setState({
//             selectedStyles: styles,
//         })
//     }

//     onValueChanged = (value) => {
//         this.setState({
//             value: value
//         });
//     }


//     render() {
//         return (
//             <KeyboardAvoidingView 
//             behavior="padding" 
//             enabled
//             keyboardVerticalOffset={0}
//             style={{
//                 flex: 1,
//                 // paddingTop: 20,
//                 backgroundColor:'#eee',
//                 flexDirection: 'column', 
//                 justifyContent: 'flex-end', 
//             }}
//             >
//                 <TouchableWithoutFeedback onPress={Keyboard.dismiss} >             
//                     <View style={styles.main}>
//                         <CNRichTextEditor                   
//                             ref={input => this.editor = input}
//                             onSelectedTagChanged={this.onSelectedTagChanged}
//                             onSelectedStyleChanged={this.onSelectedStyleChanged}
//                             value={this.state.value}
//                             style={{ backgroundColor : '#f0f3f5'}}
//                             styleList={defaultStyles}
//                             onValueChanged={this.onValueChanged}
//                         />                        
//                     </View>
//                 </TouchableWithoutFeedback>

//                 <View style={{
//                     minHeight: 35
//                 }}>

//                     <CNToolbar
//                         size={28}
//                         bold={<Text style={[styles.toolbarButton, styles.boldButton]}>B</Text>}
//                         italic={<Text style={[styles.toolbarButton, styles.italicButton]}>I</Text>}
//                         underline={<Text style={[styles.toolbarButton, styles.underlineButton]}>U</Text>}
//                         lineThrough={<Text style={[styles.toolbarButton, styles.lineThroughButton]}>S</Text>}
//                         body={<Text style={styles.toolbarButton}>T</Text>}
//                         title={<Text style={styles.toolbarButton}>h1</Text>}
//                         heading={<Text style={styles.toolbarButton}>h3</Text>}
//                         ul={<Text style={styles.toolbarButton}>ul</Text>}
//                         ol={<Text style={styles.toolbarButton}>ol</Text>}

//                         selectedTag={this.state.selectedTag}
//                         selectedStyles={this.state.selectedStyles}
//                         onStyleKeyPress={this.onStyleKeyPress} />
//                 </View>
//         </KeyboardAvoidingView>
//         );
//     }

// }

// var styles = StyleSheet.create({
//     main: {
//         flex: 1,
//         // marginTop: 10,
//         // paddingLeft: 30,
//         // paddingRight: 30,
//         // paddingBottom: 1,
//         alignItems: 'stretch',
//     },
//     toolbarButton: {
//         fontSize: 15,
//         width: 28,
//         height: 28,
//         textAlign: 'center'
//     },
//     italicButton: {
//         fontStyle: 'italic'
//     },
//     boldButton: {
//         fontWeight: 'bold'
//     },
//     underlineButton: {
//         textDecorationLine: 'underline'
//     },
//     lineThroughButton: {
//         textDecorationLine: 'line-through'
//     },
// });


// export default App;