import axios from 'axios';
import config from '../config';
let handleSetupProfileAPI = async () => {
    try {
        const url = `https://graph.facebook.com/v15.0/me/messenger_profile`;
        // Send the HTTP request to the Messenger Platform
        const request_body = {
            get_started: { payload: 'GET_STARTED' },
            persistent_menu: [
                {
                    locale: 'default',
                    composer_input_disabled: false,
                    call_to_actions: [
                        {
                            type: 'postback',
                            title: 'Talk to an agent',
                            payload: 'CARE_HELP',
                        },
                        {
                            type: 'postback',
                            title: 'Restart this converstion',
                            payload: 'RESTART_CONVERSATION',
                        },
                        {
                            type: 'web_url',
                            title: 'View facebook fan page',
                            url: 'https://www.facebook.com/O,T',
                            webview_height_ratio: 'full',
                        },
                    ],
                },
            ],
            whitelisted_domains: ['https://fb-messenger-chatbot.onrender.com'],
        };
        const response = await axios({
            url,
            params: { access_token: config.PAGE_ACCESS_TOKEN },
            method: 'POST',
            data: request_body,
        });
        console.log(response);
        console.log('Done');
        return response;
    } catch (error) {
        console.log('error occured in the handleSetup Profile handler', error);
        throw error;
    }
};

const fetchFacebookUsername = async (user_psid: string) => {
    try {
        const url = `https://graph.facebook.com/${user_psid}?fields=first_name,last_name,profile_pic&access_token=${config.PAGE_ACCESS_TOKEN}`;
        const response = await axios({
            url,
            method: 'GET',
        });
        const username = `${response.data.first_name} ${response.data.last_name}`;
        console.log('Done');
        return username;
    } catch (err) {
        console.log(err);
        throw err;
    }
};

const markMessageAsTypingOn = async (sender_psid: string) => {
    try {
        const url = `https://graph.facebook.com/v6.0/me/messages?access_token=${config.PAGE_ACCESS_TOKEN}`;
        const request_body = {
            recipient: {
                id: sender_psid,
            },
            sender_action: 'typing_on',
        };
        const response = await axios({
            url,
            method: 'POST',
            data: request_body,
        });
        console.log(response);
        console.log('Done');
        return response;
    } catch (error) {
        throw error;
    }
};

const markMessageAsRead = async (sender_psid: string) => {
    try {
        const url = `https://graph.facebook.com/v6.0/me/messages?access_token=${config.PAGE_ACCESS_TOKEN}`;
        const request_body = {
            recipient: {
                id: sender_psid,
            },
            sender_action: 'mark_seen',
        };
        const response = await axios({
            url,
            method: 'POST',
            data: request_body,
        });
        console.log(response);
        console.log('Done');
        return response;
    } catch (error) {
        throw error;
    }
};
export {
    handleSetupProfileAPI,
    fetchFacebookUsername,
    markMessageAsTypingOn,
    markMessageAsRead,
};
