import { batch } from 'factorial-clock-in';

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'executeBatch') {
    batch(message.data)
      .then((response) => {
        console.log(response);
        sendResponse(response);
      })
      .catch((error) => {
        console.error(error);
        sendResponse({ error: error.message });
      });
    return true; // Mantén el canal abierto para sendResponse
  }
});
