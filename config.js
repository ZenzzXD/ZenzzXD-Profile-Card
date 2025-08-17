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
                    desc: 'Zenzxz Email Sender is a fast and efficient tool designed to simplify email communication and boost productivity.',
                    link: 'https://email.zenzxz.my.id'
                },
                {
                    thumbnail: '/apizenz_img.png',
                    name: 'Zenzxz APIs',
                    desc: 'Zenzxz APIs a clean, customizable API documentation interface with GitHub integration and developer support.',
                    link: 'https://api.zenzxz.my.id'
                },
                {
                    thumbnail: '/tts_img.png',
                    name: 'Zenzxz TTS',
                    desc: 'Zenzxz TTS is a high-quality text-to-speech service offering seamless conversion with over 700 diverse voices across multiple languages.',
                    link: 'https://tts.zenzxz.my.id'
                },
                {
                    thumbnail: '/uploader_img.png',
                    name: 'Zenzxz Uploader',
                    desc: 'Zenzxz Uploader is a lightweight and efficient tool that lets you upload files up to 4.5 MB with instant results.',
                    link: 'https://uploader.zenzxz.dpdns.org'
                },
                {
                    thumbnail: '/chat_img.png',
                    name: 'Zenzxz Chat AI',
                    desc: 'Let’s chat with AI—fast, smart, and personalized. Zenzxz Chat AI gives you instant access to various AI models tailored to what you need. Be it writing, coding, creativity, or analysis—just pick a mode and go!',
                    link: 'https://chat.zenzxz.my.id'
                },
                {
                    thumbnail: '/upscale_img.png',
                    name: 'Zenzxz Upscaler',
                    desc: 'Zenzxz Upscaler enables fast and reliable image enhancement—simply upload your image, and the system delivers an upscaled version with improved clarity and detail.',
                    link: 'https://upscaler.zenzxz.my.id'
                },                
                {
                    thumbnail: '/short_img.png',
                    name: 'Zenzxz Shorturl',
                    desc: 'Zenzxz ShortURL is a sleek, free tool to quickly convert long URLs into compact, shareable links.',
                    link: 'https://shorturl.zenzxz.my.id'
                }
            ],
            links: [
                {
                    name: 'GitHub',
                    is_verified: true,
                    link: 'https://ZenzzXD'
                },
                {
                    name: 'Instagram',
                    is_verified: true,
                    link: 'https://instagram.com/_zenzxz'
                },
                {
                    name: 'Telegram',
                    is_verified: true,
                    link: 'https://t.me/zenzzxz'
                }
            ],
            interests: ['Coding', 'Music', 'Gaming']
        }
    }
};

module.exports = config;
