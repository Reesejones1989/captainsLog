const express = require('express');
const router = express.Router();
const Logs = require('../models/logsSchema');

//INDEX
// router.get('/logs', async(req, res) => {
//     try{
//      const logs = await Logs.find();
//     console.log("CATCH THEM ALL" + logs)
//     res.render('Index', {logs:logs})
//     }catch(error){
//         console.log(error)
//     }
// })

router.get('/', async (req,res) =>{
    
    // Logs.find({}, (err , foundLogs )=>{
    //     res.json(foundLogs)
    
// })})

try{
    Logs.find({}, (err, foundLogs) =>{
        res.json(foundLogs)
    })
}catch(error){
    console.log(error)
}})
//NEW
router.get('/logs/new', (req, res) => {
res.render('New');})

//DELETE
router.delete('/logs/:id', async(req, res)=>{
    try {
     await Logs.findByIdAndRemove(req.params.id)
     console.log(Logs)
         res.redirect('/logs');
     }catch(error){
         console.error(error)
     }})

//UPDATE
router.put("/logs/:id",  async (req, res) => {
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
router.post('/logs', async(req, res) => {
    try{
        if(req.body.shipIsBroken === 'on'){
            req.body.shipIsBroken = true;
        } else { 
            req.body.shipIsBroken = false;
        }
    await Logs.create(req.body)
    res.redirect('/logs/:id')
    }catch(error){
        console.log(error)
    }
    }

)

//EDIT
router.get('/logs/:id/edit', async (req, res)=>{
    try {
        const foundLogs = await Logs.findById(req.params.id)
        res.render('Edit', 
        {logs: foundLogs})
    } catch(error) {
        console.log(error)
      }
})

//Show
router.get('/logs/:id', async(req, res) => {
     try{
        console.log("LOOK HERE")
        const logs = await Logs.findById(req.params.id);
        res.render('Show', {logs: logs})
    }catch(error){
        console.log(error)
    }})





module.exports = router;