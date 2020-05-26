import React, {Component} from 'react';
import {View, Text, Image, FlatList, TouchableWithoutFeedback, ScrollView} from 'react-native';
import styles from './styles';
import videos from './YoutubeScreen';
import {formatNumber, formatTitle} from './utils'

const features = [
    {
        img: require('../assets/like.png'),
        title: '678'
    },
    {
        img: require('../assets/dislike.png'),
        title: '20'
    },
    {
        img: require('../assets/share.png'),
        title: 'Chia sẻ'
    },
    {
        img: require('../assets/download.png'),
        title: 'Tải xuống'
    },
    {
        img: require('../assets/add.png'),
        title: 'Lưu'
    }
]

const maxLength = 75

export default class YouTubeDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            fullTitle: false
        }
    }

    _renderVideoItem = (item) => {
        return (
            <TouchableWithoutFeedback
                onPress = {()=>{
                    this.setState({
                        data: item
                    })
                    this.scrollview.scrollTo({x: 0, y: 0, animated: false})
                }}
            >
                    <View style = {styles.itemBlock}>
                        <Image 
                            source = {{ 
                                uri: item.image
                            }}
                            style = {styles.itemImage}
                            resizeMode = {'cover'}
                        />
                        <View style = {styles.itemInfo}> 
                            <Image 
                                source = {{
                                    uri: item.channel.image
                                }}
                                style = {styles.itemLogo}
                            />
                            <View style = {styles.itemDataBlock}>
                                <Text style = {styles.itemTitle}>{formatTitle(item.title)}</Text>
                                <View style = {{ flexDirection: 'row'}}>
                                    <Text style = {styles.itemData}>
                                        {item.channel.title}
                                    </Text>
                                    <View style = {{
                                        marginTop: -8, 
                                        marginHorizontal: 5, 
                                        justifyContent: 'center', 
                                        alignItems: 'center'
                                    }}>
                                        <Text style = {styles.itemData}>.</Text>
                                    </View>
                                    <Text style = {styles.itemData}>
                                        {formatNumber(item.viewCount)} lượt xem
                                    </Text>
                                </View>
                            </View>
                            <Image 
                                source = {
                                    require('../assets/3dots.png')
                                }
                                style = {{ width: 12, height: 12, marginTop: 3}}
                                resizeMode = {'contain'}
                            />
                        </View>
                    </View>
            </TouchableWithoutFeedback>
        )
    }

    _renderFeatureItem = (item) => {
        return (
            <View style = {styles.bottomItem}>
                <Image 
                    source = {item.img}
                    style = {{height: 25, width: 25}}
                />
                <Text style = {styles.bottomItemTitle}>{item.title}</Text>
            </View>
        )
    }

    _renderFeatureBlock = () => {
        return (
            <View style = {styles.detailFeature}>
                {features.map((item) => this._renderFeatureItem(item))}
            </View>
        )
    } 

    _renderRegisterBlock = () => {
        const {data} = this.state
        return (
            <View style = {styles.detailChannel}>
                <Image 
                    source = {{
                        uri: data.channel.image
                    }}
                    style = {styles.itemLogo}
                />
                <View style = {{ marginLeft: 10}}>
                    <Text style = {styles.detailChannelName}>{data.channel.title}</Text>
                    <Text style = {styles.itemData}>212 N người đăng ký</Text>
                </View>
                <Text style = {{...styles.itemData, fontWeight: '600', fontSize: 16, marginLeft: 50}}>ĐÃ ĐĂNG KÝ</Text>
                <Image 
                    source = {require('../assets/bell.png')}
                    style = {{...styles.bottomItemImage, marginLeft: 10}}
                />
            </View>
        )
    }

    _renderContinueBlock = () => {
        return (
            <View style = {styles.continueBlock}>
                <Text style = {styles.itemData}>Tiếp theo</Text>
                <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style = {styles.itemData}>Tự động phát</Text>
                    <View style = {{ height: 10, width:25, borderRadius: 20, backgroundColor: '#438ff2', marginLeft: 10}}/>
                    <View style = {{ height: 18, width:18, borderRadius: 50, backgroundColor: '#065fd4', marginLeft: -15}}/>
                </View>
            </View>
        )
    }

    render(){
        const {data, fullTitle} = this.state
        let title = fullTitle ? data.title : formatTitle(data.title,maxLength)
        let icon = fullTitle ? require('../assets/up-arrow.png') : require('../assets/down-arrow.png')
        return (
            <View style = {styles.detailVideo}>
                <Image 
                    source = {{ 
                        uri: data.image
                    }}
                    style = {{...styles.itemImage, marginTop: 23}}
                    resizeMode = {'cover'}
                />
                <View style = {styles.process}>
                    <View style = {{...styles.process, backgroundColor: 'red', width: '70%'}}/>
                </View>
                <ScrollView ref = {ref => this.scrollview = ref}>
                    <View style = {styles.detailInfo}>
                        <View style = {{width: '95%'}}>
                            <Text style = {styles.itemTitle}>{title}</Text>
                        </View>
                        {data.title.length > maxLength &&
                            <TouchableWithoutFeedback
                                onPress = {() => {
                                    this.setState({
                                        fullTitle: !fullTitle
                                    })}}
                            >
                                <Image
                                    source = {icon}
                                    style = {{height: 17, width: 13}}
                                />
                            </TouchableWithoutFeedback>
                        }
                    </View>
                    <Text style = {{...styles.itemData, marginLeft: 10}}>{formatNumber(data.viewCount)} lượt xem</Text>
                    {this._renderFeatureBlock()}
                    {this._renderRegisterBlock()}
                    {this._renderContinueBlock()}
                    {videos.map(item => item != data ? this._renderVideoItem(item) : null)}
                    <View style = {{height: 250}}/>
                </ScrollView>
            </View>
        )
    }
}