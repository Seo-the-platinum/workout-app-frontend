export const getMinMax = (field)=> {
    let min
    let max
    switch(field) {
        case 'reps':
            min='1'
            max='20'
        break;
        case 'weight':
            min='5'
            max='500'
        break;
        default:
            break;
    }

    return [min, max]
}