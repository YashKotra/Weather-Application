# 🌤️ React Weather App

This project is part of my learning path in **ReactJS** and demonstrates the use of key concepts such as component-based architecture, state management with hooks, props passing, API calls, conditional rendering, and Material UI integration.

---

## 📌 Features

- 🌇 Search weather by city name
- ☁️ Real-time weather data using OpenWeatherMap API
- 🌡️ Displays temperature, humidity, min/max temps, and weather description
- 🎨 Responsive UI using **Material UI**
- 🧠 Weather-themed icons and images change dynamically based on the data
- ❗ Error handling for invalid cities

---

## 🧠 Concepts Covered

| Concept                     | Description                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| `useState` Hook            | For managing city input and fetched weather data                           |
| Component Props            | Passing weather data from `SearchBox` to `InfoBox`                         |
| API Integration            | Fetching live data from OpenWeatherMap API                                 |
| Conditional Rendering      | Showing different icons/images based on weather conditions                 |
| Material UI                | For UI components like Card, Button, TextField, and Icons                  |
| Form Handling              | Handling form submission and controlled input components                   |
| Environmental Variables    | Managing API URL and key using `.env` variables                            |

---

## 🛠️ Tech Stack

- **React**
- **Material UI (MUI)**
- **OpenWeatherMap API**
- **CSS**

---

## 🔧 Installation

```bash
git clone https://github.com/YashKotra/Weather-Application.git
cd react-weather-app
npm install
```

> Create a `.env` file in the root with the following:

```
VITE_API_URL=https://api.openweathermap.org/data/2.5/weather
VITE_API_KEY=your_api_key_here
```

```bash
npm run dev
```

---

## 📂 Folder Structure

```
├── public/
├── src/
│   ├── App.jsx
│   ├── WeatherApp.jsx
│   ├── InfoBox.jsx
│   ├── SearchBox.jsx
│   ├── InfoBox.css
│   ├── SearchBox.css
├── .env
├── package.json
├── README.md
```

---


## 📚 Learning Reflection

This project helped me understand:

- Structuring reusable components
- Using APIs in React
- Enhancing UI with MUI
- Managing form inputs
- Error boundaries and fallback UI

