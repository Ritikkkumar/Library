import "./AddBook.css"
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFictionItem } from "../utils/fictionSlice";
import { addNonFictionItem } from "../utils/nonfictionslice";
import { addSciFiItem } from "../utils/scifiSlice";
import { addRomanceItem } from "../utils/romanceSlice";
import { addDramaItem } from "../utils/dramaSlice";
import { addHorrorItem } from "../utils/horrorSlice";
import { addItem } from "../utils/booksSlice";
import { useSelector } from "react-redux";

function AddBook(){

    const dispatch=useDispatch();
    const inv=document.getElementsByTagName("input");
    const txt=document.getElementsByTagName("textarea");
    const sel=document.getElementsByTagName("select");
    //console.log(inv);


    function click()
    {
        console.log(inv[0].value)
        console.log(inv[1].value)
        console.log(inv[2].value)
        console.log(sel[0].value)
        console.log(txt[0].value)

        if(sel[0].value=="Fiction")
        {
            dispatch(addItem({
                "id": 21,
                    "title": inv[0].value ,
                    "author": inv[1].value,
                    "genre": sel[0].value,
                    "description": txt[0].value,
                    "image": inv[2].value,
                     
            }));
    
            dispatch(addFictionItem({
                "id": 21,
                    "title": inv[0].value ,
                    "author": inv[1].value,
                    "genre": sel[0].value,
                    "description": txt[0].value,
                    "image": inv[2].value,
            }));
        }
        else if(sel[0].value=="Non-Fiction")
        {
            dispatch(addItem({
                "id": 21,
                    "title": inv[0].value ,
                    "author": inv[1].value,
                    "genre": sel[0].value,
                    "description": txt[0].value,
                    "image": inv[2].value,
                     
            }));
    
            dispatch(addNonFictionItem({
                "id": 21,
                    "title": inv[0].value ,
                    "author": inv[1].value,
                    "genre": sel[0].value,
                    "description": txt[0].value,
                    "image": inv[2].value,
            }));
                
        }
        else if(sel[0].value=="Sci-Fi")
        {
            dispatch(addItem({
                "id": 21,
                    "title": inv[0].value ,
                    "author": inv[1].value,
                    "genre": sel[0].value,
                    "description": txt[0].value,
                    "image": inv[2].value,
                     
            }));
    
            dispatch(addSciFiItem({
                "id": 21,
                    "title": inv[0].value ,
                    "author": inv[1].value,
                    "genre": sel[0].value,
                    "description": txt[0].value,
                    "image": inv[2].value,
            }));
                    
        }
        else if(sel[0].value=="Romance")
        {
            dispatch(addItem({
                "id": 21,
                    "title": inv[0].value ,
                    "author": inv[1].value,
                    "genre": sel[0].value,
                    "description": txt[0].value,
                    "image": inv[2].value,
                     
            }));
    
            dispatch(addRomanceItem({
                "id": 21,
                    "title": inv[0].value ,
                    "author": inv[1].value,
                    "genre": sel[0].value,
                    "description": txt[0].value,
                    "image": inv[2].value,
            }));
                    
        }
        else if(sel[0].value=="Drama")
        {
            dispatch(addItem({
                "id": 21,
                    "title": inv[0].value ,
                    "author": inv[1].value,
                    "genre": sel[0].value,
                    "description": txt[0].value,
                    "image": inv[2].value,
                     
            }));
    
            dispatch(addDramaItem({
                "id": 21,
                    "title": inv[0].value ,
                    "author": inv[1].value,
                    "genre": sel[0].value,
                    "description": txt[0].value,
                    "image": inv[2].value,
            }));
                    
        }
        else if(sel[0].value=="Horror")
        {
            dispatch(addItem({
                "id": 21,
                    "title": inv[0].value ,
                    "author": inv[1].value,
                    "genre": sel[0].value,
                    "description": txt[0].value,
                    "image": inv[2].value,
                     
            }));
    
            dispatch(addHorrorItem({
                "id": 21,
                    "title": inv[0].value ,
                    "author": inv[1].value,
                    "genre": sel[0].value,
                    "description": txt[0].value,
                    "image": inv[2].value,
            }));
                    
        }
        
    }

    return(
        <>
        <div className="addbookscontainer">
        <h1>Add Books</h1>
        <form>
            <div>
            <label for="title">Title</label>
            <input type="text" id="title" name="title" required></input>
            </div>
            <div>
            <label for="author">Author</label>
            <input type="text" id="author" namr="author" required></input>
            </div>
            <div>
            <label for="genre">Genre</label>
            <select id="genre" name="genre" required>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
                <option value="Sci-Fi">Sci-Fi</option>
                <option value="Romance">Romance</option>
                <option value="Drama">Drama</option>
                <option value="Horror">Horror</option>
            </select>
            </div>
            <div>
            <label for="description">Description</label>
            <textarea type="text" id="description" name="description" required></textarea>
            </div>
            <div>
            <label for="image">Image Link</label>
            <input type="text" id="image" name="image" required></input>
            </div>
            
        </form>
        <button className="submitbutton" onClick={click}>Add Book</button>
        </div>
        </>
    )
}
//console.log(param.title);

export default AddBook;