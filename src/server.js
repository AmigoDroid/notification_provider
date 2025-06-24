import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/router.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({origin: '*'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api",router);

app.get('/', (req, res) => {
  res.json({
    IP: req.ip.replace('::ffff:', ''),
    ISP: req.headers['x-forwarded-for'] || req.connection.remoteAddress
  });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
