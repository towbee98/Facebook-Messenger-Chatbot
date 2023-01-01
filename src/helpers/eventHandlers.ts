import { fetchFacebookUsername } from '../services/homepageService';
import { sendMessage, sendWelcomeMessage } from '../services/chatBotService';

// Handles messages events
const handleMessage = async (sender_psid: string, received_message: any) => {
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
    // callSendAPI(sender_psid, response);
    await sendMessage(sender_psid, response);
};

// Handles messaging_postbacks events
const handlePostback = async (sender_psid: string, received_postback: any) => {
    let response;

    // Get the payload for the postback
    let payload = received_postback.payload;

    // Set the response based on the postback payload
    if (payload === 'yes') {
        response = { text: 'Thanks!' };
    } else if (payload === 'no') {
        response = { text: 'Oops, try sending another image.' };
    } else if (payload === 'GET_STARTED') {
        await sendWelcomeMessage(sender_psid);
    }
    // Send the message to acknowledge the postback
    // await sendMessage(sender_psid, response);
};

export { handleMessage, handlePostback };
