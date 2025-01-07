import Books from "./Book";
import "./BrowseBookList.css"
import { Link } from "react-router-dom";

function BrowseBooksList(props){

    console.log(props.books);
    
    return(
        <>
        <div className="browsebookslist">
            <h1>{props.category}</h1>
            <a href={`./books/${props.category.toLowerCase()}`}>View All</a>
            <div className="browsebooklistcontainer">
                {
                    props.books.map((el)=>{
                        return(
                            <Books data={el}></Books>
                        )
                        
                    })
                }
            </div>
        </div>
        </>
    )
}

export default BrowseBooksList;