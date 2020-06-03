import React, {Component} from 'react';
import {View, Text, Image, FlatList, TouchableWithoutFeedback, ScrollView} from 'react-native';
import styles from './styles';
import videos from './data';
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
            data: null,
            videoTitle: '',
            fullTitle: false,
            loading: true,
            otherList: []
        }
    }

    componentDidMount(){
        const {navigation, route} = this.props
        const {data, id} = route.params
        videos.splice(id,1)
        this.setState({
            data: data,
            videoTitle: data.title,
            loading:false,
            otherList: videos
        })
    }

    _renderVideoItem = (item) => {
        return (
            <TouchableWithoutFeedback
                onPress = {()=>{
                    this.props.navigation.navigate('VideoDetail', {data: item, id: videos.indexOf(item)})
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
                                <Text style = {styles.itemTitle}>{formatTitle(item.title,60)}</Text>
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

    _renderLoading = () => {
        return (
            <View style = {{ backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
                <Text>Loading ...</Text>
            </View>
        )
    }

    _onPressDelete = () => {
        const {navigation, route} = this.props
        route.params.onDelete()
        navigation.goBack()
    }

    _renderHeader = () => {
        const {navigation} = this.props
        return(
            <View style = {styles.detailHeader}>
                <TouchableWithoutFeedback 
                    onPress = {()=>navigation.goBack()}
                >
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../assets/back.png')}/>
                        <Text style = {{color: '#438ff2', fontSize: 16, fontWeight: '600', marginLeft: 3}}>Back</Text>
                    </View>
                </TouchableWithoutFeedback>
                
                <TouchableWithoutFeedback
                    onPress = {()=>this._onPressDelete()}
                >
                    <Image source = {require('../assets/bin.png')}/>
                </TouchableWithoutFeedback>
            </View>
        )
    }

    render(){
        const {data, fullTitle, videoTitle, loading, otherList} = this.state
        let title = fullTitle ? videoTitle : formatTitle(videoTitle,maxLength)
        let icon = fullTitle ? require('../assets/up-arrow.png') : require('../assets/down-arrow.png')
        return (
            loading ? this._renderLoading :
            <View style = {styles.detailContainer}>
                {this._renderHeader()}
                <Image 
                    source = {{ 
                        uri: data.image
                    }}
                    style = {{...styles.itemImage}}
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
                    {otherList.map((item) => item != data ? this._renderVideoItem(item) : null)}
                </ScrollView>
            </View>
         )
    }
}