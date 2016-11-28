module.exports = (Franz, options) => {
  function getMessages() {
    const notify = parseInt($('header span.counter').text(), 10);
    Franz.setBadge(notify);
  }

  Franz.loop(getMessages);
};

