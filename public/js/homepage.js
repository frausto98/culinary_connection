const filter_bt = document.getElementById('filter_bt');
// event listner to activate the javascript for the dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });
// function to filter the recipes by difficulty
function filterbydifficulty() {
    fetch(`http://localhost:3001/filter/${filter_bt.value}`)
        .then(response => response.json())
        .then(data => {
            let recipes = data;
            let div = document.getElementById('recipes');
            div.innerHTML = '';
            for (let i = 0; i < recipes.length; i++) {
                let recipe_difficulty = recipes[i].difficulty_level; 
                if ((recipe_difficulty === 1 && filter_bt.value === 'easy') ||
                    (recipe_difficulty === 2 && filter_bt.value === 'medium') ||
                    (recipe_difficulty === 3 && filter_bt.value === 'hard')) {
                    let newdiv = document.createElement('div');
                    newdiv.innerHTML = 'Recipe: ' + recipes[i].recipe_name; 
                    div.appendChild(newdiv);
                }
            } console.log(recipes);
        });
}

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