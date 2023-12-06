// Write your code here...
const showGreetingBtn = document.querySelector('#showGreetingBtn');
const toggleBtn = document.querySelector('#toggleBtn');
const title = document.querySelector('#title');

const showGreetingHandler = function () {
  title.innerText = 'Please wait...';
  //setTimeout allows the browser to show "Please wait..." then it greets after 3000ms
  setTimeout(() => (title.innerText = 'Greetings from a Slow Function!'), 3000);
};

showGreetingBtn.addEventListener('click', showGreetingHandler);

//change text on toggle button
const toggleLabelHandler = function (evt) {
  evt.target.innerText === 'Off'
    ? (evt.target.innerText = 'On')
    : (evt.target.innerText = 'Off');
};

toggleBtn.addEventListener('click', toggleLabelHandler);
