export const getMinMax= (field)=> {
    let min
    let max
    switch(field) {
        case 'age':
            min='1'
            max='100'
        break;
        case 'feet':
            min='3'
            max='7'
        break;
        case 'inches':
            min='0'
            max='11'
        break;
        case 'weight':
            min='50'
            max='400'
        break;
        default:
            break;
    }
    return [ min, max ]
}