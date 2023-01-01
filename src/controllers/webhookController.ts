import { RequestHandler } from 'express';
import config from '../config';
import { handleMessage, handlePostback } from '../helpers/eventHandlers';
const getWebHooks: RequestHandler = (req, res, next) => {
    try {
        // Parse the query params
        let mode = req.query['hub.mode'];
        let token = req.query['hub.verify_token'];
        let challenge = req.query['hub.challenge'];

        // Check if a token and mode is in the query string of the request
        if (mode && token) {
            // Check the mode and token sent is correct
            if (mode === 'subscribe' && token === config.verifyToken) {
                // Respond with the challenge token from the request
                console.log('WEBHOOK_VERIFIED');
                res.status(200).send(challenge);
            } else {
                // Respond with '403 Forbidden' if verify tokens do not match
                res.sendStatus(403);
            }
        }
    } catch (error) {
        next(error);
    }
};

const postWebHooks: RequestHandler = (req, res, next) => {
    try {
        let body = req.body;

        //
        if (body.object === 'page') {
            body.entry.forEach(function (entry: any) {
                let webhook_event = entry.messaging[0];
                console.log(webhook_event);

                // Get the sender PSID
                let sender_psid = webhook_event.sender.id;
                console.log('Sender PSID: ' + sender_psid);

                // Check if the event is a message or postback and
                // pass the event to the appropriate handler function
                if (webhook_event.message) {
                    handleMessage(sender_psid, webhook_event.message);
                } else if (webhook_event.postback) {
                    handlePostback(sender_psid, webhook_event.postback);
                }
            });
            res.status(200).send('Event received');
        } else {
            console.log('webhook event', body.object);
            res.sendStatus(404);
        }
    } catch (error) {
        next(error);
    }
};

export default {
    getWebHooks,
    postWebHooks,
};
