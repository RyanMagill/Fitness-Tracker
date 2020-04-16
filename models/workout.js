const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let workoutSchema = new Schema(
    {
        day: {type:Date, default: ()=> new Date()},
        exercises: [{
            type: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            duration: {
                type: String
            },
            distance: {
                type: String
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            
        }]
    }
);

const ExerciseModel = mongoose.model("Exercise", workoutSchema);

module.exports = ExerciseModel;