const mockAPIResponse = require('./mockAPI.js');
const express = require('express');
const axios = require('axios');
const { z } = require('zod');
const path = require('path');
const cors = require('cors');

require('dotenv').config();

const endpoint = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&url=`;

const app = express();
app.use(express.static('dist'));
app.use(express.json());
app.use(cors())

console.log(__dirname);

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});

app.post('/', async function (req, res) {
  const schema = z.object({
    url: z.string().url()
  });
  const validate = schema.safeParse(req.body);
  if (!validate.success) {
    return res.status(400).json(validate.error.issues)
  }
  const { data: { confidence, irony, score_tag, subjectivity } } = await axios.get(`${endpoint}${validate.data.url}`);
  res.status(200).json({ confidence, irony, score_tag, subjectivity });
});

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});
