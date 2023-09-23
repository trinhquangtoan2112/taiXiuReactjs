import {combineReducers} from 'redux';
import BaiTapXucSacReducer from "./BaiTapXucSacReducer" 
const rootReducer =combineReducers({

         stateXucSac:BaiTapXucSacReducer
})


export default rootReducer;