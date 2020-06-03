import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native'

export default class Screen2 extends Component {
    render(){

        const {navigation, route} = this.props
        // const {id} = route.params
        return (
            <View
                style = {{ flex:1, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}
            >
                <TouchableOpacity
                    onPress = {()=>{
                        navigation.goBack()
                    }}                
                >
                    <View style = {{height: 100, width: 100, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
                        {/* <Text style = {{color: 'black', fontSize: 16, fontWeight: 'bold'}}>{id}</Text> */}
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}