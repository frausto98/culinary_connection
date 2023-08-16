const filter_bt = document.getElementById('filter_bt');
// event listener to activate the javascript for the dropdown menu
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
});
// function to filter the recipes by difficulty
function filterbydifficulty() {
    fetch(`/filter/${filter_bt.value}`)
        .then(response => response.json())
        .then(data => {
            let recipes = data;
            let div = document.getElementById('recipes');
            // clear existing info to prevent duplicates
            div.innerHTML = '';
            console.log(filter_bt.value);
            console.log(recipes);
            // loop through the recipes and display the ones that match the difficulty level
            for (let i = 0; i < recipes.length; i++) {
                let recipe_difficulty = recipes[i].difficulty_level;
                if (recipe_difficulty == filter_bt.value) {
                    let newdiv = document.createElement('div');
                    newdiv.innerHTML = 'Recipe: ' + recipes[i].recipe_name;
                    div.appendChild(newdiv);
                }
            } console.log(data);
        })
        .catch(error => {
            console.log(error);
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