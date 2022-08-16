export const addErrorChecker = (field)=> {
    const target = document.getElementById(`${field}`)
    const value = parseInt(target.value)
    
    if (target.name === 'reps') {
        if (value < 1 || value > 20 || !value) {
            target.style.color = 'red'
            return 'Please enter a REPS number between 1 and 20'
        } else {
            target.style.color = 'black'
            return false
        }
    } else if (target.name === 'weight') {
        if (value < 5 || value > 400 || !value) {
            target.style.color = 'red'
            return 'Please enter a WEIGHT number between 5 and 400'
        } else {
            target.style.color = 'black'
            return false
        }
    }
}