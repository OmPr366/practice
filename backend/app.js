const express =  require('express')
const mongoose = require('mongoose');
const morgan = require('morgan')
const cors =  require('cors');
const app = express();
app.use(express.json())
// Setting Env :- 
require('dotenv').config();

// Database connect
mongoose.connect(process.env.DATABASE_LOCAL, {useNewUrlParser:true} ).then(()=> console.log('Database connected') )



const port =  process.env.PORT;

// Cors Setting 
if (process.env.NODE_ENV==='development') {
    app.use(cors({origin:`${process.env.CLIENT_URL}`}))
}

// 


app.use(morgan('dev'))

// Setting Route 
const blogRoute =  require('./route/blog')
app.use('/blog', blogRoute);
const auth =  require('./route/auth')
app.use(auth);

app.get('/',(req,res)=>{
    res.send("HEllo This is body document shared Okay sharing")
})
app.listen(port,()=>{
    console.log(`Started Bro ${port}`);
})