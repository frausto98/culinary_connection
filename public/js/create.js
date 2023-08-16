// functionality for all of the create page
const steps = [];
document.getElementById('addStep').addEventListener('click', function () {
    const step = document.getElementById('steps').value;
    steps.push(step);
    // console.log(steps);
    document.getElementById('steps').value = '';
    document.getElementById('steplist').innerHTML = '';
    steps.forEach(step => {
        const li = document.createElement('li');
        li.innerHTML = step;
        document.getElementById('steplist').appendChild(li);
    });
});


/////////////////////////////////////

const addRecipeBTN = document.getElementById('addRecipe');

addRecipeBTN.addEventListener('click', async (event) => {
event.preventDefault();

const recipeID = document.getElementById('recipeNum').value
const recipeName = document.getElementById('recipeName').value
const recipeDescription = document.getElementById('recipeDescription').value

if (!recipeID || !recipeName || !recipeDescription) {
    alert('Please enter a valid recipe name and description');
    return;
}

if (recipeID && recipeName && recipeDescription) {
    const response = await fetch('/api/recipe/', {
        method: 'POST',
        body: JSON.stringify({recipeID, recipeName, recipeDescription }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        alert('Recipe created');
    } else {
        alert('Failed to enter');
    }
}
});

//////////////////////////////////////

const addIngredientsBTN = document.getElementById('addIngredients');

addIngredientsBTN.addEventListener('click', async (event) => {
event.preventDefault();

const ingredName = document.getElementById('ingredientName').value
const ingredMeasure = document.getElementById('ingredientMeasure').value
const ingRecipeID = document.getElementById('ingRecipeID').value

if (!ingredName || !ingredMeasure || !ingRecipeID) {
    alert('Please enter a valid recipe name and description');
    return;
}

if (ingredName && ingredMeasure && ingRecipeID) {
    const response = await fetch('/api/ingredients/', {
        method: 'POST',
        body: JSON.stringify({ingredName, ingredMeasure, ingRecipeID}),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        alert('Recipe created');
    } else {
        alert('Failed to enter');
    }
}
});