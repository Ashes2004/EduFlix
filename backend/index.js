import express from 'express';

const app = express();

app.use(express.json());
app.use('/api', (req , res)=>{
       res.send("send successfully")
})
app.listen(5000 , () => console.log('server is running on port 5000'));