// types.ts (or wherever you want to define your types)
export interface Book {
    id: string; // Adjust types based on your data
    volumeInfo: {
      title: string;
      authors?: string[];
      publisher : string;
      publishedDate : string;
      description: string;
      pageCount: number;
      categories : string[];
      averageRating :  number;
      language: string;
      imageLinks : {
        smallThumbnail : string;
        thumbnail : string;
        small: string;
        medium: string;
        large: string;
        extralarge: string;
      }
      // Add other fields you expect to have
    };
    searchInfo : {
        snippet : string;
    }
  }
  
  export interface BookContextType {
    bookData: Book[];
    setBookData: React.Dispatch<React.SetStateAction<Book[]>>;
  }
  