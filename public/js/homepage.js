const filter_bt = document.getElementById('filter_bt');
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    // var instances = M.Dropdown.init(elems, options);
});

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
getElementByClassName('easy').addEventListener('click', function () {
    filter_bt.value = 'easy';
    filterbydifficulty();
});
getElementByClassName('medium').addEventListener('click', function () {
    filter_bt.value = 'medium';
    filterbydifficulty();
});
getElementByClassName('hard').addEventListener('click', function () {
    filter_bt.value = 'hard';
    filterbydifficulty();
});