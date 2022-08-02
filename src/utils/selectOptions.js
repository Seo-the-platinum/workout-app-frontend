const exerciseValues = ['Bench Press', 'Dead Lifts', 'Rear Squats', 'Overhead Press', 'Curls', 'Tricep Pushdown']

export const exerciseOptions = exerciseValues.map(el=> {
    return {
        value: el,
        label: el,
    }
})

const restValues = ['30 sec', '45 sec', '60 sec', '90 sec', '120 sec+']
export const restOptions = restValues.map(el=> {
    return {
        value: el,
        label: el,
    }
})

const weightValues = ['Lbs', 'Kgs']
export const weightOptions = weightValues.map(el=> {
    return {
        value: el,
        label: el,
    }
})
