const events = [
    { emoji: '🎉', name: 'New Year\'s Day', date: '2000-01-01' },
    { emoji: '🟠', name: 'Bitcoin\'s Birthday', date: '2000-01-03' },
    { emoji: '💘', name: 'Valentine\'s Day', date: '2000-02-14' },
    { emoji: '🍀', name: 'St. Patrick\'s Day', date: '2000-03-17' },
    { emoji: '🌸', name: 'Spring', date: '2000-03-20' },
    { emoji: '⏩', name: 'Clocks Go Forward (Last Sunday of March)', date: '2000-03-30' },
    { emoji: '🐣', name: 'Easter', date: '2000-03-31' },
    { emoji: '🤣', name: 'April Fool\'s Day', date: '2000-04-01' },
    { emoji: '🌍', name: 'Earth Day', date: '2000-04-22' },
    { emoji: '🎆', name: 'Bonfire Night', date: '2000-11-05' },
    { emoji: '🏳️‍🌈', name: 'Pride Month', date: '2000-06-01' },
    { emoji: '🍏', name: 'App Store Sales', date: '2000-06-10' },
    { emoji: '🙂', name: 'World Emoji Day', date: '2000-07-17' },
    { emoji: '☀️', name: 'Summer', date: '2000-06-21' },
    { emoji: '🍂', name: 'Autumn', date: '2000-09-23' },
    { emoji: '⏪', name: 'Clocks Go Backward (Last Sunday of October)', date: '2000-10-26' },
    { emoji: '🎃', name: 'Halloween', date: '2000-10-31' },
    { emoji: '🌍', name: 'Remembrance Day', date: '2000-11-11' },
    { emoji: '🫰', name: 'Black Friday Sales', date: '2000-11-17'},
    { emoji: '🦃', name: 'Thanksgiving (US)', date: '2000-11-28' },
    { emoji: '❄️', name: 'Winter', date: '2000-12-21' },
    { emoji: '🎄', name: 'Christmas', date: '2000-12-25' },
  ];
  
  const calculateDaysToNextEvent = (eventDateStr) => {
    const today = new Date();
    const eventDate = new Date(eventDateStr);
    
    // Set the year of the event to the current year
    eventDate.setFullYear(today.getFullYear());
  
    // If the event date is already passed this year, set it to the next year
    if (eventDate < today) {
      eventDate.setFullYear(today.getFullYear() + 1);
    }
  
    // Calculate the difference in days
    const diff = eventDate - today;
    return Math.ceil(diff / (1000 * 60 * 60 * 24)); // Convert ms to days
  };
  
  const renderEvents = () => {
    const container = document.getElementById('events');
  
    // Calculate days to next occurrence for each event
    const sortedEvents = events
      .map(event => ({
        ...event,
        daysLeft: calculateDaysToNextEvent(event.date),
      }))
      // Sort events by daysLeft in ascending order
      .sort((a, b) => a.daysLeft - b.daysLeft);
  
    // Render sorted events
    sortedEvents.forEach(event => {
      const eventDiv = document.createElement('div');
      eventDiv.className = 'event';
      eventDiv.innerHTML = `<span class="emoji">${event.emoji}</span><span class="event-text">${event.name} - ${event.daysLeft} days</span>`;
      container.appendChild(eventDiv);
    });
  };
  
  renderEvents();

  
