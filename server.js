const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();
mongoose.connect("mongodb://localhost:27017/nodeapi",{useNewUrlParser:true});

requireDir("./src/models");

const Medico = mongoose.model('medico');

app.use("/api",require('./src/routes'));
app.listen(3001);