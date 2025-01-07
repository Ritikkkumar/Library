import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BookInfo.css"

function BookInfo(){

    const list=useSelector(store=>store.books.books);
    const param=useParams();
    const book=list.filter((el)=>{
        return el.id==param.id;
    })
    return(
        <>
        <div className="bookinfocontainer">
            {
            book.map((el)=>{
                return(
                    <>
                    <img src={el.image} alt="bookimg" height="300px" width="200px"></img>
                    <h1>{el.title}</h1>
                    <h2>{el.author}</h2>
                    <h2>{el.genre}</h2>
                    <h3>{el.description}</h3>
                    </>
                )
            })
        }
        </div>
        </>
    )
}

export default BookInfo;