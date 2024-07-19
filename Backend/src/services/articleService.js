import Article from '../models/Article.js';
import fs from 'fs';
import path from 'path';

const dataPath= path.resolve('data/data.json');

export const getAllArticles = async () => {
  return await Article.find();
};

export const getArticleById = async (id) => {
  return await Article.findById(id);
};

export const loadArticles = async () => {
  try {
    const data = fs.readFileSync(dataPath, 'utf8');
    const articles = JSON.parse(data);
    await Article.insertMany(articles);
    console.log('Datos cargados exitosamente en MONGO');
  } catch (error) {
    console.error('Error al cargar datos', error);
    throw error;
  }
};
