import axios from 'axios';
import PAGE_ACCESS_TOKEN from '../config';

// Handles messages events
const handleMessage = (sender_psid: string, received_message: any) => {
    let response: any;

    // Check if the message contains text
    if (received_message.text) {
        // Create the payload for a basic text message
        response = {
            text: `You sent the message: "${received_message.text}". Now send me an image!`,
        };
    }

    // Sends the response message
    callSendAPI(sender_psid, response);
};

// Handles messaging_postbacks events
const handlePostback = (sender_psid: string, received_postback: string) => {};

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
        params: { access_token: PAGE_ACCESS_TOKEN },
        method: 'POST',
        data: request_body,
    })
        .then((res) => {
            console.log('message sent!');
        })
        .catch((err) => {
            console.log('Unable to send message!' + err);
        });
};

export { handleMessage, handlePostback, callSendAPI };
