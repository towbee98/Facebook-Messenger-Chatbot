import config from '../config';
import axios from 'axios';
import {
    markMessageAsRead,
    markMessageAsTypingOn,
} from '../services/homepageService';
import { fetchFacebookUsername } from '../services/homepageService';
import {
    backToMainMenuTemplate,
    lookupOrderTemplate,
    sendCategoriesTemplate,
    showHeadPhonesTemplate,
} from '../helpers/templateMessage';

const sendWelcomeMessage = async (sender_psid: string) => {
    try {
        const username = await fetchFacebookUsername(sender_psid);
        let response1 = {
            text: `Hi ${username},  Welcome to O.T Creatives page`,
        };
        let response2 = {
            attachment: {
                type: 'image',
                payload: {
                    url: 'http://bit.ly/imageWelcome',
                    is_reusable: true,
                },
            },
        };

        let response3 = {
            text: 'You can use the menu below to navigate through the features any time.',
        };

        let response4 = {
            text: 'What do you want to do?',
            quick_replies: [
                {
                    content_type: 'text',
                    title: 'Talk to an agent',
                    payload: 'CARE_HELP',
                    //payload:'TALK_AGENT',
                },
                {
                    content_type: 'text',
                    title: 'Categories',
                    payload: 'CATEGORIES',
                },
                {
                    content_type: 'text',
                    title: 'Lookup order',
                    payload: 'LOOKUP_ORDER',
                },
            ],
        };

        await sendMessage(sender_psid, response1);
        await sendMessage(sender_psid, response2);
        await sendMessage(sender_psid, response3);
        await sendMessage(sender_psid, response4);
        console.log('done');
    } catch (error) {
        throw error;
    }
};
const sendMessage = async (sender_psid: string, response: any) => {
    try {
        //Mark message as read and send a typing on norification
        await markMessageAsRead(sender_psid);
        await markMessageAsTypingOn(sender_psid);

        // Construct the message body
        let request_body = {
            recipient: {
                id: sender_psid,
            },
            message: response,
        };

        // Send the HTTP request to the Messenger Platform
        const res = await axios({
            url: 'https://graph.facebook.com/v2.6/me/messages',
            params: { access_token: config.PAGE_ACCESS_TOKEN },
            method: 'POST',
            data: request_body,
        });
        console.log('Message Sent');
    } catch (error) {
        throw error;
    }
};

const sendCategories = async (sender_psid: string) => {
    try {
        let response = sendCategoriesTemplate();
        await sendMessage(sender_psid, response);
        console.log('done');
    } catch (error) {
        throw error;
    }
};

const sendLookupOrder = async (sender_psid: string) => {
    try {
        let response = lookupOrderTemplate();
        await sendMessage(sender_psid, response);
        console.log('done');
    } catch (error) {
        throw error;
    }
};

const setInfoOrderByWebview = async (sender_psid: string) => {
    try {
        let response = lookupOrderTemplate();
    } catch (error) {
        throw error;
    }
};

const backToMainMenu = async (sender_psid: string) => {
    try {
        let response = backToMainMenuTemplate();
        await sendMessage(sender_psid, response);
        console.log('done');
    } catch (error) {
        throw error;
    }
};
const requestTalkToAgent = async (sender_psid: string) => {
    try {
        console.log(sender_psid);
    } catch (error) {
        throw error;
    }
};

const showTvs = async (sender_psid: string) => {
    try {
        console.log(sender_psid);
    } catch (error) {
        throw error;
    }
};
const showHeadPhones = async (sender_psid: string) => {
    try {
        let response = showHeadPhonesTemplate();
        await sendMessage(sender_psid, response);
    } catch (error) {
        throw error;
    }
};
const showPlayStations = async (sender_psid: string) => {
    try {
        console.log(sender_psid);
    } catch (error) {
        throw error;
    }
};

const backToCategories = async (sender_psid: string) => {
    try {
        await sendCategories(sender_psid);
    } catch (error) {
        throw error;
    }
};
export {
    sendMessage,
    sendWelcomeMessage,
    sendCategories,
    sendLookupOrder,
    requestTalkToAgent,
    showTvs,
    showHeadPhones,
    showPlayStations,
    backToCategories,
    backToMainMenu,
    setInfoOrderByWebview,
};
