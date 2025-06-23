# Our Anniversary Website 💕

A romantic anniversary website celebrating 3 months of love, with beautiful animations and password protection.

## Features

- 🔐 Password protection (only for you two)
- 💝 Romantic hero section with floating hearts
- 💌 Beautiful love letter section
- 📸 Memory gallery with romantic photos
- 📅 Timeline of your love journey
- ✨ Smooth animations and romantic styling
- ⚙️ Settings to change password and logout

## Running Locally

### Prerequisites

You need to have Node.js installed on your computer:
- Download from: https://nodejs.org/
- Choose the LTS (Long Term Support) version
- Install it and restart your computer

### Setup Instructions

1. **Download the project files**
   - Download all the project files to a folder on your computer
   - Or clone/download from the repository

2. **Open Terminal/Command Prompt**
   - On Windows: Press `Win + R`, type `cmd`, press Enter
   - On Mac: Press `Cmd + Space`, type `terminal`, press Enter
   - On Linux: Press `Ctrl + Alt + T`

3. **Navigate to the project folder**
   ```bash
   cd path/to/your/anniversary-website
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start the website**
   ```bash
   npm run dev
   ```

6. **Open in browser**
   - The website will be available at: `http://localhost:5000`
   - Open this URL in your browser


### Changing the Password

1. Enter the website with the default password
2. Click "Settings" in the navigation menu
3. Enter current password and your new password
4. The new password will be saved automatically

### Sharing Between Computers

To run on both computers:

1. **Option 1: Copy the project folder**
   - Copy the entire project folder to the other computer
   - Follow the same setup instructions
   - Each computer will have its own password settings

2. **Option 2: Network access (same WiFi)**
   - When starting the website, note your computer's IP address
   - Others on the same network can access it at: `http://YOUR-IP:5000`
   - To find your IP:
     - Windows: `ipconfig` in command prompt
     - Mac/Linux: `ifconfig` in terminal

### Stopping the Website

- Press `Ctrl + C` in the terminal where the website is running
- Close the terminal window

### Troubleshooting

**If you get permission errors:**
- On Mac/Linux, try: `sudo npm install`
- Make sure you have admin/administrator rights

**If port 5000 is busy:**
- The website will automatically try port 5001, 5002, etc.
- Check the terminal output for the actual port number

**If npm install fails:**
- Try deleting `node_modules` folder and `package-lock.json`
- Run `npm install` again

### Customization

The website is fully customizable:
- Edit the love letter in `client/src/components/love-letter-section.tsx`
- Change photos in `client/src/components/memories-section.tsx`
- Modify timeline events in `client/src/components/timeline-section.tsx`
- Adjust colors in `client/src/index.css`

---

Made with ❤️ for the most amazing couple
