import contactSlice from './users-slice'

const { configureStore } = require('@reduxjs/toolkit')

const store = configureStore({
   reducer: {
      contact: contactSlice.reducer,
   },
})
export default store
