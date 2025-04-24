# Code Review App

This is a web-based code review tool that allows users to write, edit, and submit code for AI-based review. It features syntax highlighting, markdown-based review display, and multiple language support.

You can view the live website here 👉 `https://codereviewer-4ph0.onrender.com/`

## Features
- **Code Editing:** Users can write code in a simple yet powerful editor.
- **Syntax Highlighting:** Supports various programming languages with PrismJS.
- **AI-based Code Review:** Uses an Express backend to provide AI-generated feedback on submitted code.
- **Live Preview:** Displays formatted review responses with React Markdown.
- **Skeleton Loading Animation:** Provides a smooth UI experience while waiting for responses.

## Tech Stack
### Frontend:
- React
- PrismJS (Syntax Highlighting)
- react-simple-code-editor (Code Editing)
- react-markdown (Markdown Rendering)
- highlight.js (Code Highlighting in Markdown)
- axios (HTTP Requests)
- react-loading-skeleton (Loading Animation)

### Backend:
- Node.js
- Express.js
- OpenAI API (or any AI service for reviewing code)
- CORS (for handling cross-origin requests)

## Installation
### Prerequisites:
- Node.js and npm installed
- Backend running at `http://localhost:3000`

### Steps:
1. Clone the repository:
   ```sh
   git clone https://github.com/Anand-Chaudhary/code-review-app.git
   cd code-review-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the frontend:
   ```sh
   npm run dev
   ```

4. Navigate to `http://localhost:5173` in your browser.

## Backend Setup
1. Move to the backend folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   npm start
   ```

## Usage
1. Select a programming language from the dropdown.
2. Write or paste your code in the editor.
3. Click the **Review** button.
4. The AI will analyze your code and provide feedback in the right panel.

## Supported Languages
- JavaScript
- Python
- Java
- C
- C++
- Go
- Rust
- HTML
- CSS

## Creative Features
- Made a fun and beautiful Loader
- Framer-Motion for the Loader

## Contributing
Feel free to submit issues or pull requests to improve this project.

## License
This project is open-source and available under the MIT License.

