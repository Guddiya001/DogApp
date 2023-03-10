import { createStore ,applyMiddleware} from "redux";
import rootReducder from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const store = createStore(
    rootReducder,composeWithDevTools(applyMiddleware(thunk))
)

export default store