import React, {Component} from 'react';
import {View, Text, Image, FlatList, TextInput, TouchableWithoutFeedback, Alert, Keyboard} from 'react-native';
import videos from './YoutubeScreen';
import styles from './styles';
import YouTubeDetail from './YouTubeDetail';
import {formatNumber, formatTitle} from './utils'

const menu = [
    {
        img: require('../assets/home_act.png'),
        title: 'Trang chủ'
    },
    {
        img: require('../assets/compass.png'),
        title: 'Khám phá'
    },
    {
        img: require('../assets/gallery.png'),
        title: 'Kênh đăng ký'
    },
    {
        img: require('../assets/mail.png'),
        title: 'Hộp thư đến'
    },
    {
        img: require('../assets/lib.png'),
        title: 'Thư viện'
    }
]

export default class YouTube extends Component {

    constructor(props){
        super(props);
        this.state = {
            list: videos,
            tempList: videos,
            changeScreen: false,
            textSearch: '',
            refreshing: false,
            onSearch: false,
            selectedItem: null
        }
    }

    _onPressSearchIcon = () => {
        this.setState({
            onSearch: true
        })
    }

    _renderHeader = () => {

        const {onSearch} = this.state

        return (
            <View style = {styles.header}>
                <Image
                    source = {require('../assets/ytlogo.png')}
                    style = {{ height: 75, width: 95}}
                    resizeMode = {"contain"}
                />
                { onSearch && this._renderSearchBar()}
                <View style = {{ flexDirection: 'row', alignItems: 'center'}}>
                    {!onSearch && 
                        <Image
                            source = {require('../assets/film.png')}
                            style = {{ height: 25, width: 25}}
                            resizeMode = {"contain"}
                        />
                    }
                    {!onSearch && <TouchableWithoutFeedback
                        onPress = {() => {
                            this._onPressSearchIcon()
                        }}
                    >
                        <Image
                            source = {require('../assets/search.png')}
                            style = {{ height: 20, width: 20, marginHorizontal: 20}}
                            resizeMode = {"contain"}
                        />
                    </TouchableWithoutFeedback>}
            
                    <Image 
                        source = {require('../assets/avatar.jpg')}
                        style = {styles.avatar}
                    />
                </View>
            </View>
        )
    }

    _renderSearchBar = () => {
        return (
            <View style = {styles.search}>
                <Image
                    source = {require('../assets/search.png')}
                    style = {{ height: 14, width: 14}}
                    resizeMode = {"contain"}
                    onPress = {() => {
                        Alert.alert('Hello')
                    }}
                />
                <TextInput
                    style = {styles.searchInput}
                    value = {this.state.textSearch}
                    placeholder = {"Tìm kiếm trên YouTube"}
                    onChangeText = {(text) => 
                        this._filterData(text)
                    }
                    autoCorrect ={false}
                    autoCapitalize = "none"
                    autoFocus = {this.state.onSearch ? true : false}
                    returnKeyType={'search'}
            />
            </View>
        )
    }

    _onRefresh = () =>{
        this.setState({
            refreshing: true
        })
        setTimeout(() => {
            this.setState({
                refreshing: false
            })
        }, 3000);
    }

    _renderContent = () => {
        return (
            <FlatList
                data = {this.state.list}
                renderItem = {({item}) => this._renderItem(item)}
                keyExtractor = {item => item.id} 
                onScroll = {() => Keyboard.dismiss()}
                showsVerticalScrollIndicator = {false}
                refreshing={this.state.refreshing}
                onRefresh={()=>{this._onRefresh()}}
            />
        )
    }

    _renderBottom = () => {
        return (
            <View style = {styles.bottom}>
                {menu.map((item) => this._renderBottomItem(item))}
            </View>
        )
    }

    _renderBottomItem = (item) => {
        return (
            <View style = {styles.bottomItem}>
                <Image 
                    source = {item.img}
                    style = {styles.bottomItemImage}
                />
                <Text style = {styles.bottomItemTitle}>{item.title}</Text>
            </View>
        )
    }

    _onPressItem = (item) => {
        const {list} = this.state
        this.setState({
            changeScreen: true,
            selectedItem: list[list.indexOf(item)]
        })
    }

    _renderItem = (item) => {
        return (
            <TouchableWithoutFeedback
                onPress = {() => {
                    this._onPressItem(item)
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

    _filterData = (text) => {
        var newData = this.state.tempList
        newData = this.state.tempList.filter((item)=>{  
            const itemText = item.title.toLowerCase();
            const textData = text.toLowerCase() ;  
            return (itemText.includes(textData))
        });  
        this.setState({  
            textSearch:text,  
            list: newData, 
        });  
    }

    render() {
        const {changeScreen} = this.state
        return (
            changeScreen == false ?
                <View style = {styles.container}>
                    {this._renderHeader()}
                    {this._renderContent()}
                    <View style = {{height: 50, width: '100%'}}/>
                    {this._renderBottom()}
                </View>
                :
                <YouTubeDetail data = {this.state.selectedItem}/>

        )
    }
}

