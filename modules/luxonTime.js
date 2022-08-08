class Time {
  static displayTime() {
    const dt = luxon.DateTime.now()
      .setLocale(navigator.language)
      .toLocaleString({
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: 'false',
      });

    document.querySelector('time').innerHTML = dt;
  }
}

export default Time;
