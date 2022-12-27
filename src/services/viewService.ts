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
                            title: 'Outfit suggestions',
                            payload: 'CURATION',
                        },
                        {
                            type: 'web_url',
                            title: 'Shop now',
                            url: 'https://www.originalcoastclothing.com/',
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
        console.log('Done');
        return response;
    } catch (error) {
        throw error;
    }
};

export { handleSetupProfileAPI };
