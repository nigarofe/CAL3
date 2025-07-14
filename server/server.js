"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, '../client')));
// Serve node_modules
app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
