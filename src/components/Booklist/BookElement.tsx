import React from 'react';
import { Book } from '../../types';

interface BookElementProps {
  props: Book; 
}

const BookElement: React.FC<BookElementProps> = ({ props }) => {
  const { id, volumeInfo } = props; 
  console.log(volumeInfo.imageLinks?.thumbnail)
  const imgurl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYZOS6s9mhR43Nm28psii4c_4weUDrstABg&s"

  return (
    <div key={id} className='max-w-[350px] bg-slate-50 rounded-xl border-2 p-10 my-3 text-center flex flex-col justify-center items-center cursor-pointer'>
      <img src={volumeInfo.imageLinks?.smallThumbnail || imgurl} alt="" className='w-1/2 mb-5' />
      <h3 className='text-2xl my-2 hover:underline font-medium'>{volumeInfo.title}</h3>
      <p className='text-lg'>{volumeInfo.authors}</p>
      <span className='text-sm my-[0.5rem]'>{volumeInfo.publisher}</span>
      <p className='line-clamp-2 text-md my-[0.5rem]'>{volumeInfo.description}</p>
    </div>
  );
};

export default BookElement;
