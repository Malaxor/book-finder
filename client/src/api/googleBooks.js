import axios from 'axios';

const getBooksByAuthor = async author => {
   let url = `https://www.googleapis.com/books/v1/volumes`;

   const { data: { items }} = await axios({
      method: 'GET',
      url,
      params: {
         q: `inauthor:${author}`,
         maxResults: 5,
      }
   });
   return items;
}
export default getBooksByAuthor;
