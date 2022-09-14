import { configureStore }  from '@reduxjs/toolkit'
import modalReducer from '../lib/Modal/modal'

const store = configureStore ({
    reducer: {
        modal: modalReducer,
    }
})

export default store