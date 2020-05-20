import React, {Component} from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

const list = [
    {
        userName: 'sontungmtp',
        avatar: require('./assets/mtp.png'),
        image: require('./assets/mtp.png'),
        like: '308.006',
        content: 'Lạc trôiiiiiiiiiiiiiiii',
        cmt: '2.791',
        date: '14 tháng 3',
        liked: true
    },
    {
        userName: 'cr7cristianoronaldo',
        avatar: require('./assets/ronaldo.jpeg'),
        image:require('./assets/cr7sir.jpg'),
        like: '1.308.006',
        content: 'My second father',
        cmt: '452.791',
        date: '15 tháng 1',
        liked: false
    },
    {
        userName: 'trump_kute',
        avatar: require('./assets/trump.jpg'),
        image: require('./assets/vn.jpeg'),
        like: '6.100.308.006',
        content: 'HoangSa, TruongSa are belongs to Vietnam',
        cmt: '10.000.000.791',
        date: '30 tháng 4',
        liked: true
    }
]

const width = Dimensions.get('window').width - 20

export default class Instagram extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    _renderHeaderbar = () => {
        return (
            <View style = {styles.header}>
                <View style = {{ 
                        flexDirection: 'row', 
                        height: '100%', 
                        alignItems: 'center'}}>  
                    <TouchableOpacity activeOpacity = {0.85} >
                        <Image source = {require('./assets/camera.png')} />
                    </TouchableOpacity>
        
                    <Image 
                        source = {require('./assets/logo.png')}
                        style = {{marginTop: 5, marginLeft: 10}}
                    />
                </View>
                <TouchableOpacity activeOpacity = {0.85}>
                    <Image source = {require('./assets/inbox.png')} /> 
                </TouchableOpacity>
            </View>
        );
    }

    _renderContent = () => {
        return (
            <ScrollView
                style = { styles.content }
                showsVerticalScrollIndicator = {false}
            >
                {this._renderStoryBlock()}
                {list.map((item) => this._renderItem(item))}
                <View style = {{
                    backgroundColor: '#ffffff', 
                    height: 50}}></View>
            </ScrollView>
        )
    }

    _renderItem = (item) => {
        return (
            <View style = {{
                    height: 600, 
                    width: '100%', 
                    paddingBottom: 10, 
                    backgroundColor: '#fff'}}>
                <View style = {styles.headerItem}>
                    <View style = {{
                            flexDirection: 'row', 
                            height: '100%', 
                            alignItems: 'center'}}>
                        <Image 
                            source={item.avatar}
                            style = {styles.avatar}
                        />
                        <Text style = {styles.textName}>
                            {item.userName}
                        </Text>
                        <Image source={require('./assets/check.png')} style = {{marginLeft: 5}} />
                    </View> 
                    <Image source={require('./assets/3dots.png')}/>
                </View>
                <View style = {{
                        width: '100%', 
                        height: Dimensions.get('window').width, 
                        backgroundColor: 'black'}}>
                    <Image 
                        source={item.image}
                        style = {{ width: '100%', height: Dimensions.get('window').width}}
                        resizeMode = {'contain'}
                    />
                </View>

                <View style = {{paddingHorizontal: 10}}>
                    <View style = {styles.iconBlock}>
                        <View style = {{
                                width: '25%', 
                                flexDirection: 'row', 
                                alignItems: 'center', 
                                justifyContent: 'space-between'}}>
                            <Image source = {require('./assets/heart.png')} /> 
                            <Image source = {require('./assets/chat.png')} />
                            <Image source = {require('./assets/inbox.png')} />
                        </View>
                        <Image source = {require('./assets/badge.png')} />
                    </View>

                    <Text style = {{
                        fontWeight: '700', 
                        marginLeft: 0}}>{item.like} lượt thích</Text>
                    <Text style = {{
                        marginTop: 5, 
                        fontWeight: '700', 
                        marginLeft: 0}}>{item.userName} <Text style = {{fontWeight: 'normal'}}>{item.content}</Text></Text>
                    <Text style = {{
                        marginTop: 5, 
                        color: 'gray'}}>Xem tất cả {item.cmt} bình luận</Text>
                    <View style = {styles.addCmt}>
                        <View style = {{...styles.addCmt, marginTop: 0}}>
                            <Image source={require('./assets/avatar.jpg')} style = {styles.avatar}/>
                            <Text style = {{color: 'gray', marginLeft: 5}}>Thêm bình luận...</Text>
                        </View>
                    </View>
                    <Text style = {{ color: 'gray', marginTop: 5, fontSize: 12}}>{item.date}</Text>
                </View>
                
            </View>
        )
    }

    _renderBottombar = () => {
        return (
            <View style = {styles.bottomBar}>
                <Image source = {require('./assets/home_act.png')} /> 
                <Image source = {require('./assets/search.png')} />
                <Image source = {require('./assets/plus.png')} />
                <Image source = {require('./assets/heart.png')} />
                <Image source={require('./assets/avatar.jpg')} style = {styles.avatar}/>
            </View>
        )
    }

    _renderStoryBlock = () => {
        const stories = [...list]
        return (
            <View style = {styles.storyBlock}>
                <View style = {{ 
                        flexDirection: 'row', 
                        height: 57, 
                        width: 57, 
                        borderRadius: 100, 
                        borderColor: 'gray', 
                        borderWidth: 0.5, 
                        marginHorizontal: 7.5}}>
                    <Image 
                        source = {require('./assets/avatar.jpg')} 
                        style = {{height: 55, width: 55, borderRadius: 100}}/>
                    <View style = {{
                            backgroundColor: '#009dff', 
                            height: 20, 
                            width: 20, 
                            borderRadius: 50, 
                            borderWidth: 2, 
                            borderColor: '#ffffff', 
                            marginTop: 40, 
                            marginLeft: -15, 
                            justifyContent: 'center', 
                            alignItems: 'center', 
                            fontSize: 14}}>
                        <Text style = {{
                            color: '#ffffff', 
                            fontWeight: 'bold', 
                            textAlign: 'center'}}>+</Text>
                    </View>
                </View>
                {stories.map((item) => 
                <View style = {{ 
                        height: 57, 
                        width: 57, 
                        borderRadius: 100, 
                        borderColor: 'gray', 
                        borderWidth: 0.5, 
                        marginHorizontal: 7.5}}>
                    <Image 
                        source={item.avatar} 
                        style = {{height: 55, width: 55, borderRadius: 100}}/>
                </View>)}
            </View>
        );
    }

    render() {
        return (
                <View style = {styles.container}>
                    {this._renderHeaderbar()}
                    {this._renderContent()}
                    <View style = {styles.bottom}>
                        {this._renderBottombar()}
                    </View>
                </View>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#ffffff',
        flex: 1
    },

    content: {
        
    },  

    header: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 44,
        width: '100%',
        backgroundColor: '#ffffff',
        borderBottomColor: '#fefefe',
        borderBottomWidth: 0.5,
        shadowColor: "#000000",
        shadowOpacity: 0.12,
        shadowOffset: {
            height: 0,
            width: 0
        },
        elevation: 5,
        zIndex: 100
    },

    headerItem: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        height: 44,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    avatar: {
        width: 25,
        height: 25, 
        borderRadius: 50
    },

    textName: {
        fontWeight: '500',
        marginLeft: 8
    },

    iconBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 44,
        width: '100%'
    },  

    storyBlock: {
        flexDirection: 'row',
        paddingHorizontal: 7.5,
        width: '100%',
        height: 80,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(0,0,0,0.12)',
        alignItems: 'center'
    },

    addCmt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8
    },

    bottom: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },

    bottomBar: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderTopWidth: 0.5,
        borderTopColor: 'gray',
        height: 44,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30
    },

})