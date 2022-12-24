import {RequestHandler} from 'express'
const getHomePage:RequestHandler=(req,res,next)=>{
res.render('homePage')
}


export  default {
    getHomePage
}