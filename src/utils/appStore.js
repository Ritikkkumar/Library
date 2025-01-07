import {configureStore} from "@reduxjs/toolkit";
import fictionReducer from "./fictionSlice";
import nonfictionRender from "./nonfictionslice";
import booksRender from "./booksSlice";
import dramaRender from "./dramaSlice";
import scifiRender from "./scifiSlice";
import horrorRender from "./horrorSlice";
import romanceRender from "./romanceSlice";

const appStore=configureStore({
    reducer:{
        books:booksRender,
        fiction:fictionReducer,
        nonfiction:nonfictionRender,
        scifi:scifiRender,
        romance:romanceRender,
        horror:horrorRender,
        drama:dramaRender,
    }
});

export default appStore;