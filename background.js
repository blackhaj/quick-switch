// chrome.browserAction.onClicked.addListener(function(tab){
    
//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//       chrome.tabs.update(null, {url: 'https://www.google.com'})
//   });
// })

chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
});