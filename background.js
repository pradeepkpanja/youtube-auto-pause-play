chrome.windows.onFocusChanged.addListener(windowId => {
    if (windowId === chrome.windows.WINDOW_ID_NONE) {
      // No window has focus (all windows minimized)
      chrome.tabs.query({ audible: true, url: "*://www.youtube.com/*" }, tabs => {
        tabs.forEach(tab => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: pauseVideo
          });
        });
      });
    } else {
      chrome.windows.get(windowId, { populate: true }, window => {
        const activeTab = window.tabs.find(tab => tab.active);
        if (activeTab && activeTab.url.includes("youtube.com/watch")) {
          chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            function: playVideo
          });
        }
      });
    }
  });
  
  function pauseVideo() {
    const video = document.querySelector("video");
    if (video) {
      video.pause();
    }
  }
  
  function playVideo() {
    const video = document.querySelector("video");
    if (video) {
      video.play();
    }
  }
  