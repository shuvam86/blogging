const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/home', (req, res) => {
  console.log('API is running home...');
  res.send('Home route response from backend');
});

app.get('/about',(req,res) => {
    res.send("Hello from about backend")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
