const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
//connect to DB
mongoose.connect(
  process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/blog-api',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to DB');
  }
);
// mongoose
//   .connect('mongodb://127.0.0.1:27017/blog-api', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('connection is establised');
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// app.listen(3000, () => console.log('Server running......'));
//input two numbers
