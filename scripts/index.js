var render = function (template, node) {
    node.innerHTML = template;
};

document.addEventListener("DOMContentLoaded", function(event){

    let field = document.getElementById("note");
    if (localStorage.getItem("autosave")) {
      field.value = localStorage.getItem("autosave");
    }
    field.addEventListener("change", function() {
      localStorage.setItem("autosave", field.value);
    });

});
