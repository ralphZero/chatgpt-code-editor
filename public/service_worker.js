chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

// Allows users to open the side panel by clicking on the action toolbar icon
chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((error) => console.error(error));

const CHATGPT_ORIGIN = 'chatgpt.com';

chrome.tabs.onUpdated.addListener(async (tabId, info, tab) => {
  try {
    if (!tab.url) return;
    const url = new URL(tab.url);
    // Enables the side panel on chatgpt.com
    if (url.href.includes(CHATGPT_ORIGIN)) {
      console.log("Inside chat");
      await chrome.sidePanel.setOptions({
        tabId,
        path: 'index.html',
        enabled: true
      });
    } else {
      // Disables the side panel on all other sites
      console.log("Outside chat");
      await chrome.sidePanel.setOptions({
        tabId,
        enabled: false
      });
    }
  } catch (error) {
    console.error(error);
  }
});
