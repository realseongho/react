import Book from './Book.jsx'
function BookList(props){
    const books = [
        {title:'To Kill a Mockingbird',author:'Harper Lee',year:1960},
        {title:'1984',author:'George Orwell',year:1949},
        {title:'The Greate Gatsby',author:'F. Scott Fitzegerald',year:1925},
        {title:'The Catcher in the Rye',author:'J.D. Salinger',year:1519}
    ]

    return (
    <div className="App">
      <Book {...books[0]}/>
      <Book {...books[1]}/>
      <Book {...books[2]}/>
      <Book {...books[3]}/>
    </div>
    )
}

export default BookList