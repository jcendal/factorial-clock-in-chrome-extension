import { batch } from '@pachamamas/factorial-clock-in';

// chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(
//   ({ request, rule }) => {
//     console.log('onMatchedRuleDebug', rule.ruleId, JSON.stringify(request));
//   }
// );

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
