const filter_bt = document.getElementById('filter_bt');
// event listner to activate the javascript for the dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });
// function to filter the recipes by difficulty
function filterbydifficulty() {
    fetch('http://localhost:3001/filter/:difficulty').then(response => response.json()).then(data => {
        let recipes = data.recipes;
        let div = document.getElementById('recipes');
        div.innerHTML = '';
        for (let i = 0; i < recipes.length; i++) {
            let recipe_difficulty = recipes[i].difficulty;
            if (recipe_difficulty == filter_bt.value) {
                let newdiv = document.createElement('div');
                newdiv.innerHTML = 'recipe';
                div.appendChild(newdiv);
            }
        }
    });
}

// event listener changes the value for the difficulty in the above funciton and then calls the function when the associated button is clicked
var element = document.getElementsByClassName('easy');
for (var i = 0; i < element.length; i++) {
    element[i].addEventListener('click', function () {
        filter_bt.value = 'easy';
        filterbydifficulty();
    });
}

var element = document.getElementsByClassName('medium');
for (var i = 0; i < element.length; i++) {
    element[i].addEventListener('click', function () {
        filter_bt.value = 'medium';
        filterbydifficulty();
    });
}

var element = document.getElementsByClassName('hard');
for (var i = 0; i < element.length; i++) {
    element[i].addEventListener('click', function () {
        filter_bt.value = 'hard';
        filterbydifficulty();
    });
}