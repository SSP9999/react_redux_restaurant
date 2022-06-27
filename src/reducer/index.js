import { configureStore } from "@reduxjs/toolkit";
import filterreducer from "./filterreducer";
import orderreducer from "./orderreducer";
import tablereducer from "./tablereducer";


const store = configureStore({
  reducer:{
    table:tablereducer,
    filter:filterreducer,
    order:orderreducer
  }
})

export default store;