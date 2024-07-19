import * as articleService from '../services/articleService.js';

export const getAllArticles = async (req, res) => {
  try {
    const articles = await articleService.getAllArticles();
    res.json(articles);
  } catch (error) {
    res.status(500).send('Error al obtener artículos');
  }
};

export const getArticleById = async (req, res) => {
  try {
    const article = await articleService.getArticleById(req.params.id);
    if (!article) return res.status(404).json({ message: 'Article not found' });
    res.json(article);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const loadArticles = async (req, res) => {
  try {
    await articleService.loadArticles();
    res.send('Datos cargados exitosamente en MONGO');
  } catch (error) {
    res.status(500).send('Error al cargar datos');
  }
};
