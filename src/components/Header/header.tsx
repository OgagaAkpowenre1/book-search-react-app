import SearchForm from "../SearchForm/searchForm";
import Navbar from "../Navbar/navbar";
import './header.css'

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="text-white bg-heroImg min-h-[75vh] bg-center bg-cover text-center flex flex-col justify-center">
        <h2 className="text-6xl font-bold ">Find your book of choice</h2>
        <br />
        <p className="mt-[1.8rem] mb-[2.8rem] max-w-[770px] text-center mx-auto text-xl leading-9">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
          consequuntur ipsum aliquam deleniti necessitatibus nulla doloribus,
          nisi consectetur quia eaque numquam ex vel unde dignissimos quam!
          Minus repellendus placeat ratione voluptates dolores? Ipsa iusto iure
          perspiciatis aliquam, veniam eum. Nulla.
        </p>
        <SearchForm />
      </div>
    </>
  );
};

export default Header;
