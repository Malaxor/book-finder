const express = require('express');
const router = express.Router();
const getBooksByAuthor = require('../../config/getBooksByAuthor');

router.get('/', async (req, res) => {
   const response = await getBooksByAuthor('noam chomsky');
   res.json(response.length)
});
module.exports = router;