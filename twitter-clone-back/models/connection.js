const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://eze_flt:Blackops2@cluster0.qxydwzg.mongodb.net/TwitterClone';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
