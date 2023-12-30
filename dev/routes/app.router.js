const express = require('express');
const apps = require('../models/app.model');
const expressAsyncHandler = require('express-async-handler');
const AppData = require('../data/app.data');

const appRouter = express.Router();

appRouter.get('/seed',expressAsyncHandler(
    async (req,res) => {
        const createApp = await apps.insertMany(AppData.apps);
        res.send({ createApp })
    })
)


module.exports = appRouter;