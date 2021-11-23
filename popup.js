function takeScreenshot() {
  
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;
    renderStatus('♻ Wait....');
    setTimeout(function() {
      chrome.tabs.captureVisibleTab( 
        chrome.windows.WINDOW_ID_CURRENT,
        function(src) {
          var a = document.getElementById("save");
          a.href = src;
          a.target = "_blank";
          var img = document.getElementById("screenshot");
          img.title = "Screenshot Image";
          img.src = src;
          renderStatus('✔');
          img.hidden = false;
        }
      );
    }, 1500);
  });
}

function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}

function closePopup() {
  window.close();
}

document.addEventListener('DOMContentLoaded', function() {
  takeScreenshot();
  document.getElementById('close').addEventListener('click', closePopup);
});
