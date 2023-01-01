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
                        image_url: 'https://bit.ly/imageHeadphone1',
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
                        ],
                    },
                    {
                        title: 'Sony Industry Leading Noise Canceling Wireless behind -neck',
                        image_url: 'https://bit.ly/imageHeadphone2',
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
                        ],
                    },
                    {
                        title: 'Sony Wireless in-ear Headset',
                        image_url: 'https://bit.ly/imageHeadphone3',
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
                        ],
                    },
                ],
            },
        },
    };
};
export { sendCategoriesTemplate };
