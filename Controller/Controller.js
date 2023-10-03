const Tasks = require("../Models/Tasks");

exports.Home = (req, res) => {
    res.send('TaskZone Server Running...')
};

exports.PostTasks = async(req, res) => {
    try{
        const {text} = req.body;
        const tasks = new Tasks({text});
        await tasks.save();
        res.status(201).json(tasks);
    } 
    catch(error){
        res.status(500).json({error: 'Internal Server Error'})
    }
};

exports.GetTasks = async(req, res) => {
    try{
        const tasks = await Tasks.find();
        res.json(tasks);
    } 
    catch(error){
        res.status(500).json({error: 'Internal Server Error'})
    }
};
exports.DeleteTask = async(req, res) => {
    try{
        const {_id} = req.params;
        const deletedTask = await Tasks.deleteOne(_id);
        if(!deletedTask){
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({message: 'Task Deleted Successfully'});
    }
    catch(error){
        res.status(500).json({error: 'Internal Server Error'})
    }
};