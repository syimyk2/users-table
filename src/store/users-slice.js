import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchApi } from '../api/fetchApi'
import { columnInfo } from '../utils/helpers/data'

const initialState = {
   contacts: JSON.parse(localStorage.getItem('users')) || [],
   columnInfo: columnInfo,
   isLoading: false,
   errorMessage: null,
   selectedValues: null,
   fitleredContacts: [],
}
export const getContacts = createAsyncThunk(
   'contacts/getContacts',
   async (_, { rejectWithValue }) => {
      try {
         const contacts = await fetchApi({
            path: 'users',
            method: 'GET',
         })
         return contacts
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

const contactSlice = createSlice({
   name: 'contacts',
   initialState,
   reducers: {
      getSelectedValues(state, action) {
         const {selected,defaultHeading} =action.payload
         state.selectedValues = selected

        const selectedItemIndex = state.columnInfo.findIndex((el)=>el.key===defaultHeading)
        state.columnInfo.splice(selectedItemIndex,1, {key: selected.value, heading: selected.label, id: Math.random().toString()} )

      },
      clearSelectedHeading(state, action){
         state.selectedValues = null
      }
   },
   extraReducers: {
      [getContacts.pending]: (state) => {
         state.isLoading = true
      },
      [getContacts.fulfilled]: (state, action) => {
         state.isLoading = false
         state.contacts = action.payload
      },
      [getContacts.pending]: (state, action) => {
         state.isLoading = false
         state.errorMessage = action.payload
      },
   },
})
export const contactsActions = contactSlice.actions
export default contactSlice
