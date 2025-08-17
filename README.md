For  HTML Content :
A simple web application that presents historical milestones in a clean, structured timeline format. The app is designed with HTML and includes features like a theme toggle, event descriptions,semantic tags, and placeholders for future enhancements such as article,filters and modals. Features: Displays key events in a timeline format.

Added buttons for  behaviour below header which when click changes the content below
Includes event year, title, image, and description.

Theme toggle button placeholder (functionality can be added with JavaScript).

Responsive design layout using semantic HTML elements.

Placeholder for filters (categories, tags, etc.).

Placeholder for modal popups (e.g., expanded details on events).
For CSS:
How i used css to style it beautifully Here is the short description.
This CSS file provides styling for a responsive timeline application with the following features:

Clean, modern design with responsive layout(i.e For desktop min_width=1024,tablet min_width=768 and for mobile max-width <=480)

Dark/light theme toggle capability

Interactive timeline navigation

Modal dialog support which is currently hidden using css

Mobile-first approach with responsive breakpoints(depending upon device width)
Added Javascipt file which helps in adding behaviour in the web page and also added css after adding script.js and also updated html and css here is the description below:
# Timeline App 🕒

An interactive timeline web application that visually presents major technology and internet milestones through a series of year-based buttons. Users can explore historical events, and toggle between light and dark themes for improved user experience.

## 🔥 Features

- 🟡 Interactive Year Buttons: Clickable buttons for each key year (e.g., 1977, 1990, etc.) that open a detailed pop-up for the corresponding event.
- 🟣 Dynamic Pop-up Modal: Displays detailed content including:
  - Year
  - Title
  - Description
  - Category
  - Image (fetched from `events.json`)
- Theme Toggle**: Switch between light and dark modes:
  - Light Theme: White background, dark text
  - Dark Theme: Dark background, aqua text inside the pop-up
- 🧠 Responsive Design:
  - Optimized for desktop, tablet, and mobile
  - Popup height auto-adjusts for smaller screens
- 🧩 Modular JSON Integration:
  - Events are dynamically loaded from `/data/events.json`

## 📁 Project Structure
│
├── index.html # Main HTML file
├── styles.css # All styling including responsive and modal styles
├── script.js # JavaScript file handling theme toggle and dynamic content rendering
├── /images # Folder containing all event-related images
└── /data
└── events.json # Contains array of events with year, title, description, imageURL, and category


## 🛠 Technologies Used

- HTML5
- CSS3 (Responsive Design, Flexbox)
- JavaScript (Vanilla JS, DOM manipulation)
- JSON (for structured event data)

## 🚀 How to Run

1. Clone this repository:
   ```bash
   git clone https://github.com/aghataquee/timeline-app.git
   cd timeline-app
2.open index.html
# or simply double-click on index.html



