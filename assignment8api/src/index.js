const mongoose = require('mongoose');
const app = require('./app');

mongoose
  .connect('mongodb://127.0.0.1:27017/blog-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connection is establised');
  })
  .catch((e) => {
    console.log(e);
  });
  app.listen(5000,()=>{
    console.log('your server is up')
})
