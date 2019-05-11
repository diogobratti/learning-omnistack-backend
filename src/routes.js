const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');


routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);
routes.post(
  "/boxes/:id/files", 
  multer(multerConfig).single('file'), 
  FileController.store
);
//routes.post('/files', multer(multerConfig).single('file'), FileController.store);

//localhost:3333/boxes/5cd7510b14095e12b4f81d9b/files

module.exports = routes;