import React from 'react';
import ReactDom from 'react-dom'
import Book from './Book';
import './index.css';
import {greeting} from '../testing/testing';

//setup vars
import data from './BookData';

function BookList(){
  console.log(greeting);
  return (
  <section className="book-list">
    {data.map((book) => { //Tìm kiềm các phần tử của mảng books lấy ra img, title,author lọc lấy img, title, author
      //console.log(book);// check xem đã có nhận dữ liệu hay chưa
      return (<Book key={book.id} {...book}></Book>); //Viết ...book thay thế cho book={book}
    })}
    </section>
  );
}



ReactDom.render(<BookList/>, document.getElementById('root'))