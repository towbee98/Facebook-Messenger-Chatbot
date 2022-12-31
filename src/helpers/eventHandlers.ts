import axios from 'axios';
import config from '../config';
import { fetchFacebookUsername } from '../services/viewService';

// Handles messages events
const handleMessage = (sender_psid: string, received_message: any) => {
    let response: any;

    // Check if the message contains text
    if (received_message.text) {
        // Create the payload for a basic text message
        response = {
            text: `You sent the message: "${received_message.text}". Now send me an image!`,
        };
    } else if (received_message.attachments) {
        // Gets the URL of the message attachment
        let attachment_url = received_message.attachments[0].payload.url;
        response = {
            attachment: {
                type: 'template',
                payload: {
                    template_type: 'generic',
                    elements: [
                        {
                            title: 'Is this the right picture?',
                            subtitle: 'Tap a button to answer.',
                            image_url: attachment_url,
                            buttons: [
                                {
                                    type: 'postback',
                                    title: 'Yes!',
                                    payload: 'yes',
                                },
                                {
                                    type: 'postback',
                                    title: 'No!',
                                    payload: 'no',
                                },
                            ],
                        },
                    ],
                },
            },
        };
    }

    // Sends the response message
    callSendAPI(sender_psid, response);
};

// Handles messaging_postbacks events
const handlePostback = (sender_psid: string, received_postback: any) => {
    let response;

    // Get the payload for the postback
    let payload = received_postback.payload;

    // Set the response based on the postback payload
    if (payload === 'yes') {
        response = { text: 'Thanks!' };
    } else if (payload === 'no') {
        response = { text: 'Oops, try sending another image.' };
    } else if (payload === 'GET_STARTED') {
        fetchFacebookUsername(sender_psid);
        response = {
            text: `Welcome to O.T Creatives page`,
        };
    }
    // Send the message to acknowledge the postback
    callSendAPI(sender_psid, response);
};

// Sends response messages via the Send API
const callSendAPI = (sender_psid: string, response: any) => {
    // Construct the message body
    let request_body = {
        recipient: {
            id: sender_psid,
        },
        message: response,
    };

    // Send the HTTP request to the Messenger Platform
    axios({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        params: { access_token: config.PAGE_ACCESS_TOKEN },
        method: 'POST',
        data: request_body,
    })
        .then((res) => {
            console.log('message sent!');
        })
        .catch((err) => {
            // console.log(err);
            console.log('Unable to send message!' + err.message);
        });
};

export { handleMessage, handlePostback, callSendAPI };
