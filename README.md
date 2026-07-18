<div align="center">

# AI Chatbot Directory

A Persian, responsive, and searchable directory of AI tools and selected student projects.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-222222?style=for-the-badge&logo=github)

</div>

---

## Overview

AI Chatbot Directory is a static single-page website that organizes AI tools into searchable categories.

The interface is designed for Persian-speaking users and supports right-to-left layout, category filtering, expandable tool cards, and a separate section for selected student projects.

## Live Demo

[Open the live website](https://mr-amirasgari.github.io/ai-chatbot-directory/)

## Features

- Persian RTL interface
- Search by tool name, description, or category
- Category-based filtering
- Expandable tool collections
- Dynamic tool and category statistics
- Selected student-project directory
- Responsive layout
- Safe external links
- No backend or database required
- No external JavaScript framework

## Project Structure

```text
ai-chatbot-directory/
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── app.js
│       └── data.js
├── .gitignore
├── index.html
└── README.md
```

## File Responsibilities

| File | Purpose |
|---|---|
| `index.html` | Page structure and content containers |
| `assets/css/styles.css` | Layout, responsive design, animations, and visual styles |
| `assets/js/data.js` | AI-tool categories and student-project data |
| `assets/js/app.js` | Search, filters, rendering, navigation, and statistics |

## Run Locally

Clone the repository:

```bash
git clone https://github.com/mr-amirasgari/ai-chatbot-directory.git
cd ai-chatbot-directory
```

Open `index.html` directly in a modern browser.

You can also run a local server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Adding an AI Tool

Open:

```text
assets/js/data.js
```

Add the tool inside the appropriate category:

```javascript
"Tool Name": {
    desc: "Short Persian description",
    url: "https://example.com"
}
```

## Adding a Student Project

Add a new object to the `defaultProjects` array in `assets/js/data.js`:

```javascript
{
    name: "Project Name",
    url: "https://example.com",
    author: "Student Name",
    cat: ["Python", "Machine Learning"],
    desc: "Short project description."
}
```

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

## Notes

- Tool names, services, URLs, and availability may change over time.
- Inclusion in this directory does not imply endorsement.
- Users should review each service's pricing, privacy policy, and terms independently.

## Possible Improvements

- Add automatic broken-link checking
- Add English localization
- Add favorites using LocalStorage
- Add sort options
- Add tool logos
- Add accessibility improvements
- Move data to JSON files
- Add automated JavaScript tests

## Author

**Amir Mohammad Asgari**

[GitHub Profile](https://github.com/mr-amirasgari)  
[Official Website](https://www.am-asgari.ir/)