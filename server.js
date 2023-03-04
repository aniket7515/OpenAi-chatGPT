const express= require('express')
const morgan= require('morgan')
const cors= require('cors')
const bodyParser= require('body-parser')
const colors= require('colors')
const dotenv= require('dotenv')
const connectDB = require('./config/db')

// routes path
const authRoutes= require('./routes/authRoutes')

// dotenv
dotenv.config()

// mongo db conncection
connectDB()

// rest object
const app= express()

// middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))


const PORT= process.env.PORT || 8080
// listen server
app.listen(PORT,()=>{
    console.log(`Server running at port ${process.env.DEV_MODE} `.bgCyan.white);
})