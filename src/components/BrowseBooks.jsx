import {useSelector} from "react-redux"
import BrowseBooksList from "./BrowseBooksList";
import { useState } from "react";
import Books from "./Book";
import "./BrowseBooks.css"

function BrowseBooks(){

    const [inputtext,handleinputtext]=useState("");
    const [list,handlelist]=useState([]);
    const bookslice=useSelector(store=>store.books.books)
    const fictionslice=useSelector(store=>store.fiction.books);
    const nonfictionslice=useSelector(store=>store.nonfiction.books);
    const scifislice=useSelector(store=>store.scifi.books);
    const horrorslice=useSelector(store=>store.horror.books);
    const dramaslice=useSelector(store=>store.drama.books);
    const romanceslice=useSelector(store=>store.drama.books);

    //console.log("hh",storeItems);

    function handleChange(e){
        handleinputtext(e.target.value);
        handlelist(bookslice.filter((el)=>{
            return el.title.toLowerCase().includes(inputtext.toLowerCase());
        }))

    }

    if(inputtext=="")
    {
        return(
            <>
            <div className="top">
            <h1>Browse Books</h1>
            <input className="search" type="text" onChange={handleChange} placeholder="Search Books"></input>
            </div>
            <BrowseBooksList books={fictionslice} category={"Fiction"}></BrowseBooksList>
            <BrowseBooksList books={nonfictionslice} category={"Non-Fiction"}></BrowseBooksList>
            <BrowseBooksList books={scifislice} category={"Sci-Fi"}></BrowseBooksList>
            <BrowseBooksList books={romanceslice} category={"Romance"}></BrowseBooksList>
            <BrowseBooksList books={dramaslice} category={"Drama"}></BrowseBooksList>
            <BrowseBooksList books={horrorslice} category={"Horror"}></BrowseBooksList>
            </>
        )
    }
    else
    {
        return(
            <>
            <div className="top">
            <h1>Browse Books</h1>
            <input className="search" type="text" onChange={handleChange} placeholder="Search Books"></input>
            </div>
            <div className="listcontainer">
            {list.map((el)=>{
                return(
                    <div>
                        <Books data={el}></Books>
                    </div>
                )
            })}
            </div>
            </>
        )
    }

    
}

export default BrowseBooks;