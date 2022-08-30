import './App.css';
import {useSelector} from 'react-redux'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
//Thêm này để sử dụng dc chuyển đổi các page (router-dom)
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Search from './components/Pages/Search';
import { useEffect } from 'react';

//hiệu ứng animation

function App() {

    const { MovieDetail } = useSelector(state => state.infoMovies);
    //khai báo redux, được lấy từ reducerRedux
  return (
    //Khai báo BrowserRouter, Routes, Route như sau để chuyển đổi link
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          {/* trang home không cần phải thêm path */}
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/search" element={<Search></Search>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Home></Home> */}
      {/* <SearchMovies></SearchMovies> */}
      {/* <Intro></Intro>
      <Contents></Contents>
      <Menu></Menu>
      <MoviesDetail
        //khai báo redux, được lấy từ reducerRedux
        movied={MovieDetail}
        showModal={MovieDetail ? true : false}
      ></MoviesDetail> */}
    </div>
  );
}

export default App;
