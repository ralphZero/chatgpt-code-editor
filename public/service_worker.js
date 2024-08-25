chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: false })
  .catch((error) => console.error(error));

const CHATGPT_ORIGIN = 'chatgpt.com';

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  try {
    if (!tab.url) return;
    const url = new URL(tab.url);
    // Enables the side panel on chatgpt.com
    if (url.href.includes(CHATGPT_ORIGIN)) {
      await chrome.sidePanel.setOptions({
        tabId,
        path: 'index.html',
        enabled: true
      });
    } else {
      // Disables the side panel on all other sites
      await chrome.sidePanel.setOptions({
        tabId,
        enabled: false
      });
    }
  } catch (error) {
    console.error(error);
  }
});

chrome.runtime.onMessage.addListener((message, sender) => {
  // The callback for runtime.onMessage must return falsy if we're not sending a response
  (async () => {
    if (message.type === 'openCodeEditor') {
      // This will open a tab-specific side panel only on the current tab.
      await chrome.sidePanel.open({ tabId: sender.tab.id });
      await chrome.sidePanel.setOptions({
        tabId: sender.tab.id,
        path: 'index.html',
        enabled: true
      });
    }
  })();
});
