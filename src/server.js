import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({origin: '*'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API!'
  });
});
app.get("getNotify", (req, res) => {
  res.json({
    message: 'endpoint getNotify is working!',
    seila:"depois vou ver uma forma melhor de fazer isso"
  });
});

app.listen(PORT, () => {
    console.log(`Server is running on`);
});
