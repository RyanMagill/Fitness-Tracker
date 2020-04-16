const express = require("express");
let router = express.Router()
let DB = require("../models")

router.get("/api", (req,res)=>{
    res.send("GET request to the homepage")
});

router.get("/api/workouts/range", (req,res)=>{
    DB.ExerciseModel.find().then((data)=>{
        console.log(data)
        res.json(data)
    });
});

router.put("/api/workouts/:id", (req,res)=>{
    console.log(req.body)
    const newWorkout = {
        day: new Date().setDate(new Date().getDate()),
        exercises: [req.body]
    }
    DB.ExerciseModel.collection.insert(newWorkout).then((data)=>{
        res.json({})
    }).catch((err)=>{
        console.log(err);
    })
});

router.post('/api/workouts', (req,res)=>{
    console.log(req.body)
    res.send("Successfully Added")
});

module.exports = router