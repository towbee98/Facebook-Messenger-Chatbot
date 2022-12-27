import { RequestHandler } from 'express';
import { handleSetupProfileAPI } from '../services/viewService';
const getHomePage: RequestHandler = (req, res, next) => {
    res.render('homePage');
};

const setupProfile: RequestHandler = async (req, res, next) => {
    // res.render('profile');
    try {
        await handleSetupProfileAPI();
        res.redirect('/');
    } catch (error) {
        console.log(error);
        next(error);
    }
};

export default {
    getHomePage,
    setupProfile,
};
