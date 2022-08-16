export const editErrorChecker = (field, value)=> {
    const target = document.getElementById(field)
    if (field === 'rest' || field === 'weight_units') {
        return false
    }
    if (field === 'reps') {
        if (value < 1 || value > 20 || !value) {
            target.style.color = 'red'
            return 'Please enter a REPS amount between 1 and 20'
        } else {
            target.style.color = 'black'
            return false
        }
    } else {
        if (!value) {
            target.style.color = 'red'
            return 'Please enter a WEIGHT amount'
        } else {
            target.style.color = 'black'
            return false
        }
    }
}