## 🚀 Running the App

To get the app up and running, follow these steps:

1. **Install Node.js (LTS version)**  
   Download and install one of the latest LTS versions from the official [Node.js website](https://nodejs.org/).

2. **Install Gulp CLI globally**  
   Open a terminal or command prompt and run:
   ```bash
   npm install --global gulp-cli
   ```
3. **Install project dependencies**
   ```bash
   npm install
   ```
4. **Start the JSON server**
   ```bash
   npx json-server db.json
   ```
5. **Start the Gulp development server**
   ```bash
   gulp
   ```

## ⚠️ How to Solve:

### `Redirect has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header` ?

⚠️ To disable web security in Chrome for local development:

```bash
chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security
```

🔍 **Example (Windows default Chrome path):**

```bash
"C:\Users\username\AppData\Local\Google\Chrome\Application\chrome.exe" --user-data-dir="C:/Chrome dev session" --disable-web-security
```
