import Contents from "../Content/Contents";
import Intro from "../Intro/Intro";
import Menu from "../Menu/Menu";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import {useSelector} from 'react-redux'
import { useEffect, useState } from "react";
import Introduce from "../Introduce/Introduce";
import IntroduceAll from "../Introduce/IntroduceAll";

function Home(props) {
    const { MovieDetail } = useSelector((state) => state.infoMovies);
    const [isShowMovieDetail, setIsShowMovieDetail] = useState(false)
    useEffect(() => {
        setIsShowMovieDetail(MovieDetail ? true : false)
    }, [MovieDetail]);
    return (
      <div>
        <Intro></Intro>
        <Contents></Contents>
        <Menu></Menu>
        <MoviesDetail
          //khai báo redux, được lấy từ reducerRedux
          movie={MovieDetail}
          showModal={isShowMovieDetail}
        ></MoviesDetail>
        <IntroduceAll></IntroduceAll>
      </div>
    );
}

export default Home;