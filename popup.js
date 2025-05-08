document.getElementById('run-btn').addEventListener('click', async () => {
  const code = document.getElementById('js-input').value;
  if (!code.trim()) return;

  // Get the active tab
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.id) return;

  // Inject and execute the code
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (userCode) => {
      try {
        // eslint-disable-next-line no-eval
        eval(userCode);
      } catch (e) {
        alert('Error: ' + e.message);
      }
    },
    args: [code],
  });
}); 