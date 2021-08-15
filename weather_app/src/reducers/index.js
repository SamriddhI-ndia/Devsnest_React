import { combineReducers } from "redux";
import UpdateLocation from "./updateLocation";
import UpdateTheme from "./updateTheme";
import UpdateData from "./updateData";

const rootReducer=combineReducers(
    {
        locate: UpdateLocation,
        data:UpdateData,
        theme:UpdateTheme,
    }
    );

export default rootReducer;
