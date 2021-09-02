import React from 'react';
import ReactDom from 'react-dom'
import Book from './Book';
import './index.css'

//setup vars
const books = [ //Mảng để lưu trữ các quyển sách
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51SuFuFRPIL._AC_SX184_.jpg',
    title: 'Little Blue Truck board book',
    author: 'Alice Schertle, Jill McElmurry'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51o4b5AdNLL._AC_SX184_.jpg',
    title: 'Where\'s Spot?',
    author: 'Eric Hill'
  },
   {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._AC_SX184_.jpg',
    title: 'If Animals Kissed Good Night',
    author: 'Ann Whitford Paul, David Walker'
  }
];

function BookList(){
  return (
  <section className="book-list">
    {books.map((book) => { //Tìm kiềm các phần tử của mảng books lấy ra img, title,author lọc lấy img, title, author
      //console.log(book);// check xem đã có nhận dữ liệu hay chưa
      return ( 
        <Book book={book}></Book>
      );
    })}
    </section>
  );
}



ReactDom.render(<BookList/>, document.getElementById('root'))