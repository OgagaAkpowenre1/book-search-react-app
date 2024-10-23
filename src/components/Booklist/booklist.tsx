import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Book } from "../../types";
import BookElement from "./BookElement";

const Booklist = () => {
  const bookData = useSelector((state: RootState) => state.bookData);

  console.log(bookData);

  return (
    <section className="my-[4.5rem] mx-auto grid md:grid-cols-3 grid-cols-1 w-10/12">
      {bookData.map((book: Book) => (
        <BookElement key={book.id} props={book}></BookElement>
      ))}
    </section>
  );
};

export default Booklist;
