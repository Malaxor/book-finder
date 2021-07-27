const mongoose = require('mongoose');
const { mongoURI } = require('./keys');

module.exports = async () => {
   try {
      await mongoose.connect(mongoURI, 
      { 
         useNewUrlParser: true, 
         useUnifiedTopology: true, 
         useCreateIndex: true,
         useFindAndModify: false  
      });
      console.log('MongoDB Connected');
   } 
   catch(err) {
      console.log(err.message);
      process.exit(1); // Exit process with failure
   }
}
