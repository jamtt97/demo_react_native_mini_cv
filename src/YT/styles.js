import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

export default {
    container: {
        backgroundColor: '#fff',
        flex: 1
    },

    header: {
        marginTop: 23,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        borderColor: 'gray',
        borderWidth: 0.5,
        justifyContent: 'space-between'
    },

    search: {
        flexDirection: 'row',
        height: 35,
        width: '60%',
        borderRadius: 8,
        backgroundColor: '#e5e3e3',
        paddingHorizontal: 10,
        alignItems: 'center',
    },

    searchInput: {
        paddingHorizontal: 10,
        height: '100%',
        width: '90%'
    },

    avatar: {
        height: 25,
        width: 25,
        borderRadius: 50,
    },

    bottom: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        borderTopWidth: 0.5,
        borderTopColor: '#828282'
    },

    bottomItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    bottomItemImage: {
        height: 20,
        width: 20,
    },

    bottomItemTitle: {
        marginTop: 5,
        fontSize: 11,
        color: 'rgba(0,0,0,0.9)',
        fontWeight: '500'
    },

    itemBlock: {
        width: width,
        aspectRatio: 11/8.5,
        borderBottomColor: '#828282',
        borderBottomWidth: 0.2,
        paddingBottom: 10
    },

    itemImage: {
        width: width,
        aspectRatio: 16/9
    },

    itemInfo: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: '100%',
        width: '100%',
        padding: 10,
        flex: 1,
        justifyContent: 'space-between'
    },

    itemLogo: {
        height: 35,
        width: 35,
        borderRadius: 50
    },

    itemTitle: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },

    itemDataBlock: {
        width: '90%',
        flex: 1,
        marginLeft: 10,
    },

    itemData: {
        fontSize: 14,
        color: '#828282'
    },

    detailContainer: {
        flex: 1,
        backgroundColor: '#fff'
    },

    process: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%',
        height: 2
    },

    detailInfo: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    detailFeature: {
        paddingHorizontal: 30,
        borderBottomColor: '#828282',
        borderBottomWidth: 0.3,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    detailChannel: {
        flexDirection: 'row',
        width: '100%',
        height: 65,
        padding: 10,
        borderBottomColor: '#828282',
        borderBottomWidth: 0.3,
        alignItems: 'center',
    },

    detailChannelName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000'
    },

    continueBlock: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',

    }
}