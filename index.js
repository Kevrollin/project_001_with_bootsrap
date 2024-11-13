
const eventsContainer = document.querySelector('.events-container');

eventsContainer.addEventListener('scroll', () => {
  const eventElements = document.querySelectorAll('.event');
  
  eventElements.forEach((event, index) => {
    const eventTop = event.getBoundingClientRect().top;
    const containerTop = eventsContainer.getBoundingClientRect().top;

    // Snap to event if it’s closest to the container top
    if (Math.abs(eventTop - containerTop) < 50) {
      eventsContainer.scrollTo({
        top: event.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

