export const errorChecker = (field)=> {
    const target = document.getElementById(`${field}`)
    if (target.name === 'age') {
        const value = parseInt(target.value)
        
        if (value === 0 || value > 99) {
            target.style.color = 'red'
            return 'Please enter a number between 1 and 99'
        } else {
            target.style.color = 'black'
            return false
        }
    } else if (target.name === 'feet') {
        const value = parseInt(target.value)

        if (value > 7 || value < 3) {
            target.style.color = 'red'
            return 'please enter a number between 3 and 7'
        } else {
            target.style.color = 'black'
            return false
        }
    } else if (target.name === 'inches') {
        const value = parseInt(target.value)   

        if (value > 11 || value < 0) {
            target.style.color = 'red'
            return 'Please input a number between 0 and 11'
        } else {
            target.style.color = 'black'
            return false
        }
    } else if (target.name === 'weight') {
        const value = parseInt(target.value)

        if (value > 500 || value < 50) {
            target.style.color = 'red'
            return 'Please input a number between 50 and 500'
            
        } else {
            target.style.color = 'black'
            return false
        }
    }
}