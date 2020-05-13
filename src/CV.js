import React, {Component} from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

export function TextComponent(props) {
    return (
        <View style = {{...styles.textComponent, ...props.style}}>
            <Text style = {styles.textTitle}>{props.title}</Text>
            <Text style = {styles.textValue}>{props.value}</Text>
        </View>
    )
}

export default class CV extends Component {
    render() {
        return(
            <View style = { styles.container }>
                <View style = {{ backgroundColor: '#000', padding: 2, borderRadius: 15}}>
                    <View style = { styles.titleBlock }>
                        <Text style = { styles.title }>Personal Profile</Text>
                    </View>
                    <Image 
                        source = {require('./assets/avatar.jpg')}
                        resizeMode = 'contain'
                        style = {styles.imageSection}
                    />
                    <View style = { styles.body }>
                        <TextComponent title = 'Full Name' value = 'Nguyen Thanh Tu' style = {{marginTop: 20}}/>
                        <TextComponent title = 'D.O.B' value = 'Nov 17, 1997'/>
                        <TextComponent title = 'Gender' value = 'Male' />
                        <TextComponent title = 'University' value = "VNU's University of Science"/>
                        <TextComponent title = 'Hobbies' value = 'Cinema, Music, Games' />
                        <TextComponent title = 'Abilities' value = 'Java, Python, ReactNative' />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },

    titleBlock: {
        backgroundColor: '#1981cc',
        width: '100%',
        height: 95,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginBottom: -15,
        zIndex: 1,
    },

    title: {
        marginLeft: 150,
        color: '#fff',
        fontSize: 20,
        marginTop: 50,
        fontWeight: 'bold'
    },

    body: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDE2CA',
        shadowColor: "rgba(0, 0, 0, 0.16)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        width: '100%',
        borderRadius: 15,
        borderWidth: 5,
        borderColor: '#1981cc',
        paddingVertical: 30,
        paddingHorizontal: 10,
        zIndex: 2,
        marginTop: -50
    },

    imageSection: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: -50,
        marginLeft: 20,
        borderWidth: 5,
        borderColor: '#1981cc',
        backgroundColor: 'gray',
        shadowColor: "rgba(0, 0, 0, 0.16)",
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 4,
        shadowOpacity: 1,
        zIndex: 3,
    },

    textComponent: {
        flexDirection: 'row',
        borderBottomColor: 'rgba(0,0,0,0.16)',
        backgroundColor: '#FDE2CA',
        borderBottomWidth: 0.5,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        width: '100%',
    },

    textTitle: {
        fontSize: 13,
        lineHeight: 20,
        color: '#000'
    },

    textValue: {
        fontSize: 15,
        lineHeight: 20,
        color: '#000'
    }

    
})