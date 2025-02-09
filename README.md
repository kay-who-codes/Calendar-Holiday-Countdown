# Event Countdown App

This is a simple web-based application that allows users to view a countdown to various events. The app dynamically calculates the days remaining to the next occurrence of a set of predefined events (e.g., New Year's Day, Valentine's Day, Christmas). The event countdown adjusts based on the current date and always shows the next upcoming event.

[![App Image](Non-App/App%20Image.png)](https://kay-who-codes.github.io/Calendar-Holiday-Countdown)

## Features

- Displays a list of events with a countdown to the next occurrence.
- Updates the countdown automatically to show the number of days left.
- If an event's date has already passed for the current year, it adjusts to the next year's event.
- Responsive design that works on both desktop and mobile devices.

## Events Included

The app includes the following events:
- New Year's Day 🎉
- Bitcoin's Birthday 🟠
- Valentine's Day 💘
- St. Patrick's Day 🍀
- Spring 🌸
- Clocks Go Forward (Last Sunday of March) ⏩
- Easter 🐣
- April Fool's Day 🤣
- Earth Day 🌍
- Bonfire Night 🎆
- Pride Month 🏳️‍🌈
- Summer ☀️
- App Store Sales 🍏
- World Emoji Day 📅
- Autumn 🍂
- Clocks Go Backward (Last Sunday of October) ⏪
- Halloween 🎃
- Remembrance Day 🌍
- Black Friday Sales 🫰
- Thanksgiving (US) 🦃
- Winter ❄️
- Christmas 🎄

## Technologies Used

- **HTML**: For structure and content of the app.
- **CSS**: For styling and responsive design.
- **JavaScript**: For calculating the days remaining and dynamically updating the event list.

## How to Access

Access the app **[HERE](https://kay-who-codes.github.io/Calendar-Holiday-Countdown/)**

## How It Works

- The app defines a list of events with specific dates (e.g., `2024-01-01` for New Year's Day).
- It calculates the number of days remaining until each event using JavaScript, adjusting for events that have already passed in the current year.
- The events are displayed in a sorted order, with the nearest event at the top.
- Each event is displayed with an emoji and the number of days left until the event occurs.

## Days Calculation Logic

- The app checks if the event date has passed for the current year. If it has, the app calculates the countdown for the same event in the following year.
- The days remaining are calculated and displayed dynamically.

## Customisation

To add or modify events, you can update the `events` array in the script section of the `index.html` file. The array contains objects with the following properties:

- `emoji`: A string representing the emoji associated with the event.
- `name`: The name of the event.
- `date`: The date of the event in the format `YYYY-MM-DD`.

### Example:

```javascript
{ emoji: '🎉', name: 'New Year\'s Day', date: '2024-01-01' }

