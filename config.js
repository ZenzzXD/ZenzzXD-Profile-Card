const config = {
    PORT: process.env.PORT || 3000,
    settings: {
        design: {
            background_hex: '#DAEAFF',
            header_image: null,
            layout: ['projects', 'links', 'interests']
        },
        profile: {
            personal: {
                profile_url: '/profile_img.jpg',
                name: 'ZenzzXD',
                is_verified: true,
                pronunciation: 'zenn',
                pronouns: 'He/She?',
                location: 'Surabaya, Jawa Timur',
                about: 'Just a newbie exploring the world of coding.'
            },
            professional: {
                job_title: 'Web Developer',
                company: 'ZenzzXD Folders.'
            },
            projects: [
                {
                    thumbnail: '/emailsender_img.png',
                    name: 'Zenzxz Email Sender',
                    desc: 'A powerful AI assistant built to help with everyday tasks and answer questions efficiently.',
                    link: 'https://mind.hydrooo.web.id'
                },
                {
                    thumbnail: '/rynnui_img.png',
                    name: 'Rynn UI (Open Source)',
                    desc: 'A simple and easy-to-use API documentation interface built with Express.js.',
                    link: 'https://github.com/rynn-k/Rynn-UI'
                },
                {
                    thumbnail: '/nekorinn_img.png',
                    name: 'Nekorinn API\'s',
                    desc: 'A streamlined REST API service designed for developers who need quick access to multiple API functionalities in one place.',
                    link: 'https://api.nekorinn.my.id'
                },
                {
                    thumbnail: '/nekonime_img.png',
                    name: 'Nekonime',
                    desc: 'An anime streaming platform with a minimalist, ad-free, and user-friendly interface for a seamless viewing experience.',
                    link: 'https://nekonime.nekorinn.my.id'
                },
                {
                    thumbnail: '/mnmlistai_img.png',
                    name: 'Mnmlist AI',
                    desc: 'A minimalist AI tool designed for simplicity and clarity. Focus on what matters—no clutter, just intelligent solutions.',
                    link: 'https://mnmlist.up.railway.app'
                }
            ],
            links: [
                {
                    name: 'GitHub',
                    is_verified: true,
                    link: 'https://github.com/rynn-k'
                },
                {
                    name: 'Instagram',
                    is_verified: true,
                    link: 'https://instagram.com/ran.dyyn'
                },
                {
                    name: 'Telegram',
                    is_verified: true,
                    link: 'https://t.me/rynnajahh'
                }
            ],
            interests: ['Coding', 'Music', 'Gaming', 'Anime']
        }
    }
};

module.exports = config;
