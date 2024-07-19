import express from 'express';
import * as articleController from '../controllers/articleController.js';

const articles = express.Router();

articles.get('/', articleController.getAllArticles);
articles.get('/:id', articleController.getArticleById);
articles.post('/load', articleController.loadArticles); // Ruta para cargar datos

export default articles;