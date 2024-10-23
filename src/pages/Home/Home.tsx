import Header from "../../components/Header/header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Booklist from "../../components/Booklist/booklist";

const Home = () => {
  const bookData = useSelector((state: RootState) => state.bookData);
//   console.log(bookData)
  return (
    <main>
      <Header />
      {bookData.length > 0 && <Booklist />}
      <Outlet />
    </main>
  );
};

export default Home;
