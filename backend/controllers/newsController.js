const asyncHandler = require('express-async-handler');
const News = require('../models/newsModel');

exports.createNews = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  const news = new News({
    title,
    content,
  });

  const createdNews = await news.save();
  res.status(201).json(createdNews);
});

exports.getAllNews = asyncHandler(async (req, res) => {
  const news = await News.find({});
  res.json(news);
});

exports.getNewsById = asyncHandler(async (req, res) => {
  const news = await News.findById(req.params.id);
  if (!news) {
    res.status(404);
    throw new Error('News not found');
  }
  res.json(news);
});

exports.updateNews = asyncHandler(async (req, res) => {
  const news = await News.findById(req.params.id);
  if (!news) {
    res.status(404);
    throw new Error('News not found');
  }

  news.title = req.body.title || news.title;
  news.content = req.body.content || news.content;

  const updatedNews = await news.save();
  res.json(updatedNews);
});

exports.deleteNews = asyncHandler(async (req, res) => {
  const news = await News.findById(req.params.id);
  if (!news) {
    res.status(404);
    throw new Error('News not found');
  }

  await news.remove();
  res.json({ message: 'News removed' });
});