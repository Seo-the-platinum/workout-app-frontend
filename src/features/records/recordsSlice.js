import { createSlice } from '@reduxjs/toolkit'

export const recordsSlice = createSlice({
    name: 'records',
    initialState: {
        value: []
    },
    reducers: {
        addToRecords: (state, action)=> {
            state.value.push(action.payload)
        },

        updateRecords: (state, action)=> {
            state.value = action.payload ? action.payload : []
        },

        editRecord: (state, action)=> {
            state.value = state.value.map(record=> {
                if (record.id === action.payload.id) {
                    record = {...action.payload}
                }
                return record
            })
        },

        recordToDelete: (state, action)=> {
            state.value = state.value.filter(record=> {
                return record.id !== action.payload
            })
        }
    }
})

export const { addToRecords, updateRecords, editRecord, recordToDelete} = recordsSlice.actions
export default recordsSlice.reducer