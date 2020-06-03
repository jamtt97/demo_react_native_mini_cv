import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native'

export default class Screen1 extends Component {
    render(){

        const {navigation} = this.props

        return (
            <View
                style = {{ flex:1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}
            >
                <TouchableOpacity
                    onPress = {()=>{
                        navigation.navigate('VideoDetail')
                    }}                
                >
                    <View style = {{height: 100, width: 100, backgroundColor: 'white'}}>

                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}