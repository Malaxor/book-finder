const axios = require('axios');
const { apiKey } = require('./keys');

module.exports = async (author) => {
   let url = `https://www.googleapis.com/books/v1/volumes`;

   const { data: { items }} = await axios({
      method: 'GET',
      url,
      params: {
         q: `inauthor:${author}`,
         maxResults: 5,
         key: apiKey
      }
   })
   return items;
}
