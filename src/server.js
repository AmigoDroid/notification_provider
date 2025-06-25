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

app.get('/', async (req, res)=> {
  const IP_ISP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let data = await fetch("https://ipinfo.io/"+removeTexIP(IP_ISP)+"/json").then(response => {
  return response.json(); 
  }).then(data => {
    return data;
    
  })


  console.log(data);
  
  res.json({
    IP: removeTexIP(req.ip),
    ISP: removeTexIP(IP_ISP),
    data
  });
});


const removeTexIP = (text)=>{
   text.replace('::ffff:', '');
   return text.replace('::1', "");
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
