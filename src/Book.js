const Book = (props) => {
   //const {img, title, author} = props.book;
    const img = props.book.img;
    const title = props.book.title;
    const author = props.book.author;
   //console.log(props.book);
  return(
      <article className="book">
        <img src={img} alt=''/>
        <h1>{title}</h1>
        <h4 className="author">{author}</h4>
      </article>
   );
 }
 export default Book;