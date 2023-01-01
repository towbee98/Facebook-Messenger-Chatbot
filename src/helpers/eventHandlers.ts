import { fetchFacebookUsername } from '../services/homepageService';
import {
    backToCategories,
    backToMainMenu,
    requestTalkToAgent,
    sendCategories,
    sendLookupOrder,
    sendMessage,
    sendWelcomeMessage,
    setInfoOrderByWebview,
    showHeadPhones,
    showPlayStations,
    showTvs,
} from '../services/chatBotService';

// Handles messages events
const handleMessage = async (sender_psid: string, received_message: any) => {
    try {
        //Chenck if the received message is a quick reply
        if (
            received_message.quick_reply &&
            received_message.quick_reply.payload
        ) {
            const quick_reply_payload = received_message.quick_reply.payload;
            quick_reply_payload === 'CATEGORIES'
                ? await sendCategories(sender_psid)
                : quick_reply_payload === 'LOOKUP_ORDER'
                ? await sendLookupOrder(sender_psid)
                : quick_reply_payload === 'CARE_HELP'
                ? await requestTalkToAgent(sender_psid)
                : quick_reply_payload === 'BACK_TO_MAIN_MENU'
                ? await backToMainMenu(sender_psid)
                : null;
            return;
        }
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
    } catch (error) {
        throw error;
    }
};

// Handles messaging_postbacks events
const handlePostback = async (sender_psid: string, received_postback: any) => {
    let response;

    // Get the payload for the postback
    let payload = received_postback.payload;

    // Set the response based on the postback payload
    if (payload === 'CARE_HELP') {
        await requestTalkToAgent(sender_psid);
    } else if (
        payload === 'GET_STARTED' ||
        payload === 'RESTART_CONVERSATION'
    ) {
        await sendWelcomeMessage(sender_psid);
    } else if (payload === 'SHOW_HEADPHONES') {
        await showHeadPhones(sender_psid);
    } else if (payload === 'SHOW_TV') {
        await showTvs(sender_psid);
    } else if (payload === 'SHOW_PLAYSTATION') {
        await showPlayStations(sender_psid);
    } else if (payload === 'BACK_TO_CATEGORIES') {
        await backToCategories(sender_psid);
    } else if (payload === 'SET_INFO_ORDER') {
        await setInfoOrderByWebview(sender_psid);
    } else if (payload === 'BACK_TO_MAIN_MENU') {
        await backToMainMenu(sender_psid);
    }
};

export { handleMessage, handlePostback };
