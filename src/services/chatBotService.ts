import config from '../config';
import axios from 'axios';
import {
    markMessageAsRead,
    markMessageAsTypingOn,
} from '../services/homepageService';
import { fetchFacebookUsername } from '../services/homepageService';

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
        console.log(sender_psid);
        let response = {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'generic',
                    elements: [
                        {
                            title: 'Headphones',
                            image_url: 'https://bit.ly/imageHeadphones',
                            subtitle:
                                'Noise canceling wireless bluetooth headphones',
                            default_action: {
                                type: 'web_url',
                                url: 'https://bit.ly/webHeadphones',
                                webview_height_ratio: 'tall',
                            },
                            buttons: [
                                {
                                    type: 'web_url',
                                    url: 'https://bit.ly/webHeadphones',
                                    title: 'View Website',
                                },
                                {
                                    type: 'postback',
                                    title: 'Show Headphones',
                                    payload: 'SHOW_HEADPHONES',
                                },
                            ],
                        },
                        {
                            title: 'TV',
                            image_url: 'https://bit.ly/imageTV',
                            subtitle:
                                'Master of quality and incredible clarity',
                            default_action: {
                                type: 'web_url',
                                url: 'https://bit.ly/webTelevision',
                                webview_height_ratio: 'tall',
                            },
                            buttons: [
                                {
                                    type: 'web_url',
                                    url: 'https://bit.ly/webTelevision',
                                    title: 'View  on Website',
                                },
                                {
                                    type: 'postback',
                                    title: 'Show Tvs',
                                    payload: 'SHOW_TV',
                                },
                            ],
                        },
                        {
                            title: 'PlayStation',
                            image_url: 'https://bit.ly/imagePlaystation',
                            subtitle:
                                'Incredible games and endless entertainment.',
                            default_action: {
                                type: 'web_url',
                                url: 'https://bit.ly/webPlaystation',
                                webview_height_ratio: 'tall',
                            },
                            buttons: [
                                {
                                    type: 'web_url',
                                    url: 'https://bit.ly/webPlaystation',
                                    title: 'View Website',
                                },
                                {
                                    type: 'postback',
                                    title: 'Show Playstation',
                                    payload: 'SHOW_PLAYSTATION',
                                },
                            ],
                        },
                    ],
                },
            },
        };
        await sendMessage(sender_psid, response);
        console.log('done');
    } catch (error) {
        throw error;
    }
};

const sendLookupOrder = async (sender_psid: string) => {
    try {
        console.log(sender_psid);
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

export {
    sendMessage,
    sendWelcomeMessage,
    sendCategories,
    sendLookupOrder,
    requestTalkToAgent,
};
