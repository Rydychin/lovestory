# Quick Setup Guide for Your Anniversary Website

## Step 1: Install Node.js
1. Go to https://nodejs.org/
2. Download the LTS version (recommended)
3. Run the installer and follow the prompts
4. Restart your computer after installation

## Step 2: Download Project Files
1. Download all the project files to a folder on your computer
2. Extract if it's in a zip file
3. Remember the folder location (e.g., `C:\anniversary-website` or `~/anniversary-website`)

## Step 3: Open Terminal/Command Prompt
**Windows:**
- Press `Windows key + R`
- Type `cmd` and press Enter

**Mac:**
- Press `Cmd + Space`
- Type `terminal` and press Enter

**Linux:**
- Press `Ctrl + Alt + T`

## Step 4: Navigate to Your Project
In the terminal, type:
```
cd path/to/your/anniversary-website
```
(Replace with your actual folder path)

**Example paths:**
- Windows: `cd C:\Users\YourName\Downloads\anniversary-website`
- Mac: `cd ~/Downloads/anniversary-website`

## Step 5: Install Dependencies
Type this command and press Enter:
```
npm install
```
Wait for it to finish (may take a few minutes the first time)

## Step 6: Start the Website
Type this command:
```
npm run dev
```

## Step 7: Open in Browser
- Open your web browser
- Go to: `http://localhost:3000` (or check terminal for the actual port)
- Enter password: `ourlove2024`

## You're Done!
The website is now running locally on your computer. Only you can access it.

## To Stop the Website
- Go back to the terminal
- Press `Ctrl + C`

## Troubleshooting
**If you see "command not found" or "npm is not recognized":**
- Node.js wasn't installed properly
- Restart your computer and try again
- Make sure you downloaded from nodejs.org

**If port 5000 is busy:**
- The website will automatically use port 5001, 5002, etc.
- Check the terminal output for the actual port number

**Need help?**
- Take a screenshot of any error messages
- Make sure you're in the right folder with the project files