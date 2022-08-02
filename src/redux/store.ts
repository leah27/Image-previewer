import { createStore, combineReducers } from "redux"
import gallery from "./reducers/gallery.ts"

const rootReducer = combineReducers({gallery})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer)

export default store