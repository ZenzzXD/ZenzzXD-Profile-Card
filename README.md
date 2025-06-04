# Gravatar Profile Card

A simple, customizable profile card application built with Node.js and EJS templating, similar to Gravatar's profile display system.

## Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Customizable Layout** - Configure sections like projects, links, and interests
- **Profile Verification** - Display verified badges for authenticated profiles
- **Project Showcase** - Highlight your work with thumbnails and descriptions
- **Social Links** - Connect your social media and professional profiles
- **Interests Display** - Show your hobbies and areas of interest
- **Share Functionality** - Easy link sharing with clipboard integration

## Quick Preview

The profile card displays:
- Profile picture with verification badge
- Name, job title, and location
- Personal description
- Configurable sections for projects, links, and interests
- Clean, modern interface

## Configuration

Edit the `config.js` file to customize your profile:

```javascript
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
                name: 'Your Name',
                location: 'Your Location',
                about: 'Your bio description'
            },
            professional: {
                job_title: 'Your Job Title',
                company: 'Your Company'
            }
        }
    }
};
```

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure your profile in `config.js`
4. Add your profile image to `/profile_img.jpg`
5. Start the server: `npm start`
6. Visit `http://localhost:3000` to view your profile

## Customization

### Design
- Change background color via `background_hex`
- Add header image with `header_image`
- Reorder sections in the `layout` array

### Profile Sections
- **Projects**: Showcase your work with links and descriptions
- **Links**: Display social media and professional profiles
- **Interests**: List your hobbies and areas of interest

### Verification
Set `is_verified: true` to display verification badges on your profile and links.

## Technology Stack

- **Backend**: Node.js with Express
- **Templating**: EJS
- **Styling**: Tailwind CSS
- **Icons**: Material Icons
- **Fonts**: Google Fonts (Poppins)

## File Structure

```
├── config.js          # Profile configuration
├── profile.ejs        # Main template file
├── profile_img.jpg    # Profile picture
└── README.md         # Documentation
```

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to submit issues and pull requests to improve the profile card system.