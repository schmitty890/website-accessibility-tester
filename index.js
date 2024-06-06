import express from 'express';
import pa11y from 'pa11y';
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.static('public'));

app.get('/api/test', async (req, res) => {
  console.log('test');
  if (!req.query.url) {
    res.status(400).json({ error: 'url is required' });
  } else {
    const results = await pa11y(req.query.url);
    res.status(200).json(results);
  }
});

app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});

async function run() {
  const response = await pa11y('https://www.bankofamerica.com/');
  console.log(typeof response);
  console.log(response);
}

run();
