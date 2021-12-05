import {combineReducers} from 'redux';
import securityReducer from './security';
import appReducer from './app';
import notesReducer from './notes';
const rootReducer = combineReducers(
    {
        app:appReducer,
        security:securityReducer,
        notes:notesReducer
    }

)

export default rootReducer;