export const formatNumber = (number) => {
    str = ''
    if (number > 1000) {
        str = Math.floor(number/1000) + ' N'
    }else if(number > 1000000){
        str = Math.floor(number/1000000) + ' Tr'
    }else{
        str = number
    }
    return str
}

export const formatTitle = (title, length) => {
    str = title + ''
    if (title.length > length) {
        str = title.substr(0,length) + '...'
    }
    return str

}