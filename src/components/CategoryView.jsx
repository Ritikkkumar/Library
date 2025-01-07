import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import Books from "./Book";
import "./CategoryView.css";

function CategoryView(){

    const param=useParams()
    const genre=param.category;
    console.log(param.category);
    var list=[];
    if(param.category=="fiction")
    {
         list=useSelector(store=>store.fiction.books);
    }
    else if(param.category=="non-fiction")
    {
        list=useSelector(store=>store.nonfiction.books);
    }
    else if(param.category=="sci-fi")
    {
        list=useSelector(store=>store.scifi.books);
    }
    else if(param.category=="romance")
    {
        list=useSelector(store=>store.romance.books);
    }
    else if(param.category=="drama")
    {
        list=useSelector(store=>store.drama.books);
    }
    else if(param.category=="horror")
    {
        list=useSelector(store=>store.horror.books);
    }

    return(
        <>
        <div className="categorymain">
    <h1>{param.category[0].toUpperCase()+param.category.slice(1,15)}</h1>
    <div className="categoryviewcontainer">
        {list.map((el)=>{
            return <Books data={el}></Books>
        })}
    </div>
    </div>
    </>
    )
}

export default CategoryView;