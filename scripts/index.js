var render = function (template, node) {
    node.innerHTML = template;
};

document.addEventListener("DOMContentLoaded", function(event){

    let field = document.getElementById("note");
    chrome.storage.local.get(['autosave'], function(result) {
      // console.log('Value currently is ' + result.autosave);
      if (result.autosave !== undefined) {
      	field.value = result.autosave;
      }
    });
    field.addEventListener("change", function() {
      chrome.storage.local.set({autosave: field.value}, function() {
          // console.log('Value is set to ' + field.value);
        });
    });

});
