const express = require('express');
const dotenv = require('dotenv');
const app = require('./app');
require('dotenv').config();
const mongoose = require('mongoose');

const DB = 'mongodb+srv://hazem:hazem1234@cluster0.30pube4.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(() => { 
    console.log('db connection successfully');
  }).catch(error => {
    console.error('🔥🔥 Error connecting to MongoDB:', error.message);
  });

const port = 5000;
const server = app.listen(port, () => {
  console.log('app running');
});
process.on('unhandledRejection', (err) => {
  console.log(err.message,err.name);
  // server.close(()=>{
  //   process.exit(1);
  // });
  });