import { RequestHandler } from 'express';
import { handleSetupProfileAPI } from '../services/viewService';
const getHomePage: RequestHandler = (req, res, next) => {
    res.render('homePage');
};

const setupProfile: RequestHandler = async (req, res, next) => {
    try {
        await handleSetupProfileAPI();
        res.redirect('/');
    } catch (error) {
        // console.log(error);
        next(error);
    }
};

const fetchSetupProfilePage: RequestHandler = async (req, res, next) => {
    try {
        res.render('profile');
    } catch (error) {
        next(error);
    }
};
export default { getHomePage, setupProfile, fetchSetupProfilePage };
