const Book = ({ img, title, author}) => { //Do sử dụng ...book bên index.js nên sẽ gọi trực tiếp đc không cần qua props
   //const {img, title, author} = props.book;
   //const img = props.img;
   //const title = props.title;
   //const author = props.author;
   //console.log(props.book);

   // attribute, eventHandler
   // onClick, onMouseOver

   const clickHander = (e) =>{
     console.log(e);
     console.log(e.target);
     alert('hello world');//check xem có hoạt động hay không
   };
   const complexExample = (author) =>{
     console.log(author);
    }

  return(
      <article className="book" onMouseOver={()=>{
        console.log(author);
      }} >
        <img src={img} alt=''/>
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h4 className="author">{author}</h4>
        <button type="button" onClick={clickHander}>Reference example</button>
        <button type="button" onClick={() => complexExample(author)}>More complex example</button>
      </article>
   );
 }
 export default Book;