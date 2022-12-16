import {configureStore} from '@reduxjs/toolkit' 
import currentUser from './slices/currentuser'

 const store = configureStore({
    reducer : {
        currentUser
    }
})



export default store
