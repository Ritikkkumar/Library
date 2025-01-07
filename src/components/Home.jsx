import popularBooksList from "../utils/popularBooks"
import Books from "./Book"
import "./Home.css"

function Home(){
    return(
        <>
        <div className="home">
        <h2 className="welcometext">Welcome To Books Store</h2>
        <h1>Categories</h1>
        <ul className="homeul">
        <a href={`./books/fiction`}><li className="homeli">Fiction</li></a>
        <a href={`./books/non-fiction`}><li className="homeli">Non Fiction</li></a>
        <a href={`./books/sci-fi`}><li className="homeli">Sci-Fi</li></a>
        <a href={`./books/romantic`}><li className="homeli">Romantic</li></a>
        <a href={`./books/horror`}><li className="homeli">Horror</li></a>
        <a href={`./books/drama`}><li className="homeli">Drama</li></a>
        </ul>
        <h1>Popular Books</h1>
        <div className="popularbooks">
            {
                popularBooksList.map((el)=>{
                    return(
                        <>
                        <Books data={el} key={el.id}></Books>
                        </>
                    )
                })
            }
        </div>
        </div>
        </>
    )
}

export default Home;