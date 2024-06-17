function Book(props){
    const {title, author, year} = props
    return(
        <h1>
            {title}, {author}, {year}
        </h1>
    )
}

export default Book