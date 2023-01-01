const sendCategoriesTemplate = () => {
    return {
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
                        subtitle: 'Master of quality and incredible clarity',
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
                        subtitle: 'Incredible games and endless entertainment.',
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
};

const showHeadPhonesTemplate = () => {
    return {
        attachment: {
            type: 'template',
            payload: {
                template_type: 'generic',
                elements: [
                    {
                        title: 'Sony noise cancelling headphones',
                        image_url: 'https://bit.ly/imageHeadphone1a',
                        subtitle: '$348.00',
                        default_action: {
                            type: 'web_url',
                            url: 'https://bit.ly/viewHeadphone1',
                            webview_height_ratio: 'tall',
                        },
                        buttons: [
                            {
                                type: 'web_url',
                                url: 'https://bit.ly/viewHeadphone1',
                                title: 'Order now ',
                            },
                            {
                                type: 'postback',
                                title: 'Back to Categories',
                                payload: 'BACK_TO_CATEGORIES',
                            },
                            {
                                type: 'postback',
                                title: 'Back to Main Menu',
                                payload: 'BACK_TO_MAIN_MENU',
                            },
                        ],
                    },
                    {
                        title: 'Sony Industry Leading Noise Canceling Wireless behind -neck',
                        image_url: 'https://bit.ly/imageHeadphone1b',
                        subtitle: '$298',
                        default_action: {
                            type: 'web_url',
                            url: 'https://bit.ly/viewHeadphone2',
                            webview_height_ratio: 'tall',
                        },
                        buttons: [
                            {
                                type: 'web_url',
                                url: 'https://bit.ly/viewHeadphone2',
                                title: 'Order now ',
                            },
                            {
                                type: 'postback',
                                title: 'Back to Categories',
                                payload: 'BACK_TO_CATEGORIES',
                            },
                            {
                                type: 'postback',
                                title: 'Back to Main Menu',
                                payload: 'BACK_TO_MAIN_MENU',
                            },
                        ],
                    },
                    {
                        title: 'Sony Wireless in-ear Headset',
                        image_url: 'https://bit.ly/imageHeadphone1c',
                        subtitle: '$38.00',
                        default_action: {
                            type: 'web_url',
                            url: 'https://bit.ly/viewHeadphone3',
                            webview_height_ratio: 'tall',
                        },
                        buttons: [
                            {
                                type: 'web_url',
                                url: 'https://bit.ly/viewHeadphone3',
                                title: 'Order now ',
                            },
                            {
                                type: 'postback',
                                title: 'Back to Categories',
                                payload: 'BACK_TO_CATEGORIES',
                            },
                            {
                                type: 'postback',
                                title: 'Back to Main Menu',
                                payload: 'BACK_TO_MAIN_MENU',
                            },
                        ],
                    },
                ],
            },
        },
    };
};

const lookupOrderTemplate = () => {
    return {
        attachment: {
            type: 'template',
            payload: {
                template_type: 'button',
                text: "Let's set info about your order.so i won't need to ask for them in future.",
                buttons: [
                    {
                        type: 'postback',
                        title: 'Set Info',
                        payload: 'SET_INFO_ORDER',
                    },
                    {
                        type: 'postback',
                        title: 'Back to Main Menu',
                        payload: 'BACK_TO_MAIN_MENU',
                    },
                ],
            },
        },
    };
};

const backToMainMenuTemplate = () => {
    return {
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
};
export {
    sendCategoriesTemplate,
    showHeadPhonesTemplate,
    lookupOrderTemplate,
    backToMainMenuTemplate,
};
