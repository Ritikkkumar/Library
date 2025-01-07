import "./Book.css"

function Books(props){
    //console.log(props.data.id);
    return(
        <>
        <a href={`/book/${props.data.id}`}>
        <div className="bookdiv">
        <img src={props.data.image} height="250px" width="200px"></img>
        <h3>{props.data.title}</h3>
        <h4>{props.data.author}</h4>
        <h6>{props.data.description}</h6>
        </div>
        </a>
        </>
    )
}

export default Books;