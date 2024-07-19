import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import articlesRoutes from './routes/articles.js';
import dotenv from 'dotenv';
import { loadArticles } from './services/articleService.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000, //10seg
  socketTimeoutMS: 45000, //45seg
})
.then(() => {
  console.log('uri', uri);
  console.log('MongoDB connected');
  loadArticles();
})
.catch(err => {
  console.error('Connection error', err);
});

app.use('/articles', articlesRoutes);

app.get('/', (req, res) => {
  res.send("Welcome");
});

app.listen(9000, () => console.log('Server listening'));
