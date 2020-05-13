import React, {Component} from 'react';
import {Text, View, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class ImageExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            str: '',
            enableText: false
        }
    }

    _onChangeText = (text) => {
        this.setState({
            str: text
        })
    }

    _onPress = () => {
        this.setState({
            enableText: !this.state.enableText,
        })
    }

    render(){

        const {img, title} = this.props

        return (
            <View style = {styles.container}>

                <Image
                    source = {{uri: img}}
                    style = {styles.image}
                />

                <Text style = {styles.text}> {title}</Text>

                <TextInput
                    style = {styles.input}
                    placeholder = {"Username"}
                    onChangeText = {(text) =>
                        this._onChangeText(text)
                    }
                    value = {this.state.str}
                    clearButtonMode = {"while-editing"}
                    autoFocus={true}
                />

                <TouchableOpacity
                    style = {styles.button}
                    onPress = {() =>
                        this._onPress()
                    }
                    activeOpacity={0.85}
                >
                    <Text style = {{color: '#fff', fontWeight: 'bold'}}>CLICK ME</Text>
                </TouchableOpacity>

                {this.state.enableText && this.state.str.length > 0 &&
                    <Text style = {{marginTop: 10}}>Xin chao {this.state.str}</Text>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },

    button: {
        height: 30,
        width: '30%',
        backgroundColor: 'coral',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    image: {
        marginTop: 200,
        width: '100%',
        borderColor: '#000',
        borderWidth: 1,
        height: 100
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'coral',
        marginVertical: 50
    },

    input: {
        paddingHorizontal: 20, 
        width: '80%', 
        borderRadius: 5, 
        borderWidth: 1, 
        borderColor: '#000', 
        height: 40
    }
})