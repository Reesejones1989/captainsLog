//INDUCES

const express = require('express')
const app = express();
const jsxEngine = require('jsx-view-engine');
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const methodOverride = require('method-override');



//DATA
// const log = require('./models/logsSchema');
const Logs = require('./models/logsSchema');

// const router = express.Router();

app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine())

dotenv.config()

app.use(express.urlencoded({extended:true}));//originally false

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});

app.use(methodOverride('_method'));

//INDEX

app.get('/logs', async(req, res) => {
    try{
     const logs = await Logs.find();
    //  console.log(logs)
    console.log("CATCH THEM ALL" + logs)

    res.render('Index', {logs:logs})

    }catch(error){
        console.log(error)
    }
})
//NEW

app.get('/logs/new', (req, res) => {
    res.render('New');})

//DELETE

app.delete('/logs/:id', async(req, res)=>{
    try {
     await Logs.findByIdAndRemove(req.params.id)
     console.log(Logs)
         res.redirect('/logs');
     }catch(error){
         console.error(error)
     }})

//UPDATE

app.put("/logs/:id",  async (req, res) => {
    try {
        if (req.body.shipIsBroken === "on") {
          req.body.shipIsBroken = true
        } else {
          req.body.shipIsBroken = false 
        }
         await Logs.findByIdAndUpdate(req.params.id, req.body)
    
        res.redirect("/logs")
    
      } catch(error) {
        console.log(error)
      }
    })
  

//CREATE
app.post('/logs', async(req, res) => {
    try{
        if(req.body.shipIsBroken === 'on'){
            req.body.shipIsBroken = true;
        } else { 
            req.body.shipIsBroken = false;
        }
    await Logs.create(req.body)
    res.redirect('/logs/')
    }catch(error){
        console.log(error)
    }
    }

)

//EDIT

app.get('/logs/:id/edit', async (req, res)=>{
    try {
        const foundLogs = await Logs.findById(req.params.id)
        res.render('Edit', 
        {logs: foundLogs})
    } catch(error) {
        console.log(error)
      }
})

//Show

app.get('/logs/:id', async(req, res) => {
     try{
        console.log("LOOK HERE")
        const logs = await Logs.findById(req.params.id);
        res.render('Show', {logs: logs})
    }catch(error){
        console.log(error)
    }})

// app.use('/logs', logsController )

//LISTEN
app.listen(3002, () => {
    console.log('We in the building', 3002)
  })