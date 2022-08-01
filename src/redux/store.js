import { createStore, combineReducers } from "redux"
import gallery from "./reducers/gallery"

const rootReducer = combineReducers({gallery})
const store = createStore(rootReducer)

export default store