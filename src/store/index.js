import { configureStore } from "@reduxjs/toolkit";
import hotels from './states/hotels.state'
import cityFilter from "./states/cityFilter.state";
import login from "./states/login.state";

import rol from "./states/rol.state";

export default configureStore({


    
    reducer:{
        hotels,
        cityFilter,
        login,
        rol,

        

    }

})