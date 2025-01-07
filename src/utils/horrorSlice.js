import { createSlice } from "@reduxjs/toolkit";

const horrorSlice=createSlice({
    name:"horror",
    initialState:{
        books:[
            {
                "id": 1,
                "title": "To Kill a Mockingbird",
                "author": "Harper Lee",
                "genre": "Fiction",
                "image": "https://picsum.photos/150?random=1",
                "description": "A classic novel of racism and injustice in the deep South, centered around a young girl named Scout Finch."
              },
              {
                "id": 2,
                "title": "1984",
                "author": "George Orwell",
                "genre": "Dystopian",
                "image": "https://picsum.photos/150?random=2",
                "description": "A haunting depiction of a totalitarian regime, where Big Brother watches everything, and truth is manipulated."
              },
              {
                "id": 3,
                "title": "The Great Gatsby",
                "author": "F. Scott Fitzgerald",
                "genre": "Classic",
                "image": "https://picsum.photos/150?random=3",
                "description": "A tale of wealth, ambition, and tragic love set in the Jazz Age of 1920s America."
              },
              {
                "id": 4,
                "title": "Pride and Prejudice",
                "author": "Jane Austen",
                "genre": "Romance",
                "image": "https://picsum.photos/150?random=4",
                "description": "A timeless story of love and social commentary, focusing on the independent Elizabeth Bennet and the reserved Mr. Darcy."
              },
              {
                "id": 5,
                "title": "The Catcher in the Rye",
                "author": "J.D. Salinger",
                "genre": "Fiction",
                "image": "https://picsum.photos/150?random=5",
                "description": "A controversial and influential novel about teenage rebellion and disillusionment, narrated by Holden Caulfield."
              },
              {
                "id": 6,
                "title": "Moby-Dick",
                "author": "Herman Melville",
                "genre": "Adventure",
                "image": "https://picsum.photos/150?random=6",
                "description": "The epic tale of Captain Ahab's obsessive quest to hunt the white whale, Moby-Dick."
              },
              {
                "id": 7,
                "title": "War and Peace",
                "author": "Leo Tolstoy",
                "genre": "Historical Fiction",
                "image": "https://picsum.photos/150?random=7",
                "description": "A sprawling narrative that chronicles Russian society during the Napoleonic Era."
              },
              {
                "id": 8,
                "title": "The Hobbit",
                "author": "J.R.R. Tolkien",
                "genre": "Fantasy",
                "image": "https://picsum.photos/150?random=8",
                "description": "The adventurous journey of Bilbo Baggins, who joins a company of dwarves to reclaim their homeland."
              },
              {
                "id": 9,
                "title": "Jane Eyre",
                "author": "Charlotte Brontë",
                "genre": "Gothic Romance",
                "image": "https://picsum.photos/150?random=9",
                "description": "A story of a governess's resilience and her love for the enigmatic Mr. Rochester."
              },
              {
                "id": 10,
                "title": "The Lord of the Rings: The Fellowship of the Ring",
                "author": "J.R.R. Tolkien",
                "genre": "Fantasy",
                "image": "https://picsum.photos/150?random=10",
                "description": "The first volume in the epic fantasy trilogy about the quest to destroy the One Ring."
              },
              {
                "id": 11,
                "title": "The Alchemist",
                "author": "Paulo Coelho",
                "genre": "Adventure",
                "image": "https://picsum.photos/150?random=11",
                "description": "A philosophical tale about a shepherd's journey to fulfill his Personal Legend."
              },
              {
                "id": 12,
                "title": "Brave New World",
                "author": "Aldous Huxley",
                "genre": "Science Fiction",
                "image": "https://picsum.photos/150?random=12",
                "description": "A dystopian vision of a society controlled by technology, conditioning, and drugs."
              },
              {
                "id": 13,
                "title": "Wuthering Heights",
                "author": "Emily Brontë",
                "genre": "Gothic Romance",
                "image": "https://picsum.photos/150?random=13",
                "description": "A dark tale of love, revenge, and obsession set on the Yorkshire moors."
              },
              {
                "id": 14,
                "title": "Animal Farm",
                "author": "George Orwell",
                "genre": "Political Satire",
                "image": "https://picsum.photos/150?random=14",
                "description": "An allegorical novella that critiques totalitarianism through the lens of a farm's rebellion."
              },
              {
                "id": 15,
                "title": "The Road",
                "author": "Cormac McCarthy",
                "genre": "Post-Apocalyptic Fiction",
                "image": "https://picsum.photos/150?random=15",
                "description": "A harrowing story of a father and son's journey through a bleak, desolate world."
              },
              {
                "id": 16,
                "title": "The Book Thief",
                "author": "Markus Zusak",
                "genre": "Historical Fiction",
                "image": "https://picsum.photos/150?random=16",
                "description": "The story of a young girl in Nazi Germany who finds solace in stealing books and sharing them."
              },
              {
                "id": 17,
                "title": "The Kite Runner",
                "author": "Khaled Hosseini",
                "genre": "Drama",
                "image": "https://picsum.photos/150?random=17",
                "description": "A powerful tale of friendship, betrayal, and redemption set in Afghanistan."
              },
              {
                "id": 18,
                "title": "The Da Vinci Code",
                "author": "Dan Brown",
                "genre": "Thriller",
                "image": "https://picsum.photos/150?random=18",
                "description": "A fast-paced mystery that delves into secret societies and hidden religious truths."
              },
              {
                "id": 19,
                "title": "A Tale of Two Cities",
                "author": "Charles Dickens",
                "genre": "Historical Fiction",
                "image": "https://picsum.photos/150?random=19",
                "description": "A story of love and sacrifice set against the backdrop of the French Revolution."
              },
              {
                "id": 20,
                "title": "Crime and Punishment",
                "author": "Fyodor Dostoevsky",
                "genre": "Psychological Fiction",
                "image": "https://picsum.photos/150?random=20",
                "description": "A gripping exploration of morality, guilt, and redemption."
              }
        ],
    },
    reducers:{
      addHorrorItem:(state,action)=>{
        state.books.unshift(action.payload);
      },
    }
})

export const{addHorrorItem}=horrorSlice.actions;
export default horrorSlice.reducer;