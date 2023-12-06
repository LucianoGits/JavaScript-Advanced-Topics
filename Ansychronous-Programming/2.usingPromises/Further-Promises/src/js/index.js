// Write your code here...
import { getMessages, getComments } from '../api';
import { renderContent } from '../utils';
const messagesContainer = document.querySelector('#messages');
const getMessageBtn = document.querySelector('#getMessages');
const spinner = document.querySelector('#spinner');
const errorEl = document.querySelector('#error');

getMessageBtn.addEventListener('click', async () => {
  spinner.style.display = 'block';
  messagesContainer.innerHTML = '';
  error.innerText = '';

  //fetching messages and comments
  //rendering messages and comments
  //finally hiding the spinner

  // //Method 1- using good ol fashioned Promise.all
  // Promise.all([getMessages(), getComments()])
  //   .then(([messages, comments]) =>
  //     renderContent(messages, comments, messagesContainer)
  //   )
  //   .catch(error => (errorEl.innerText = `Error: ${error}`))
  //   .finally(() => (spinner.style.display = 'none'));

  //method 2- using async and await to deal with promises
  try {
    const messages = await getMessages();
    const comments = await getComments();
    renderContent(messages, comments, messagesContainer);
  } catch (error) {
    errorEl.innerText = `Error: ${error}`;
  }
  spinner.style.display = 'none';
});
