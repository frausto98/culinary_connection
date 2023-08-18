// functionality for addStep bt
// const steps = [];
// document.getElementById('addStep').addEventListener('click', function () {
//     const step = document.getElementById('stepNum', 'stepDescription').value;
//     steps.push(step);
//     console.log(steps);
//     // document.getElementById('stepNum').value = '';
//     // document.getElementById('stepDescription').innerHTML = '';
//     steps.forEach(step => {
//         const li = document.createElement('li');
//         li.innerHTML = step;
//         document.getElementById('createSteps').appendChild(li);
//     });
// });

/////////////////////////////////////

const addRecipeBTN = document.getElementById('addRecipe');

addRecipeBTN.addEventListener('click', async (event) => {
event.preventDefault();

const difficultyLevel = document.getElementById('difficultyLevel').value
const recipeName = document.getElementById('recipeName').value
const recipeDescription = document.getElementById('recipeDescription').value

if (!difficultyLevel || !recipeName || !recipeDescription) {
    alert('Please enter a valid recipe name and description');
    return;
}

if (difficultyLevel && recipeName && recipeDescription) {
    const response = await fetch('/api/recipe/', {
        method: 'POST',
        body: JSON.stringify({ difficultyLevel, recipeName, recipeDescription }),
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
// const ingRecipeID = document.getElementById('ingRecipeID').value

if (!ingredName || !ingredMeasure) {
    alert('Please enter a valid recipe name and description');
    return;
}

if (ingredName && ingredMeasure) {
    const response = await fetch('/api/ingredients/', {
        method: 'POST',
        body: JSON.stringify({ingredName, ingredMeasure}),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        alert('Ingredient created');
    } else {
        alert('Failed to enter');
    }
}
});

//////////////////////////////////////

const addStepBTN = document.getElementById('addStep');

addStepBTN.addEventListener('click', async (event) => {
event.preventDefault();

const stepNum = document.getElementById('stepNum').value
const stepDescription = document.getElementById('stepDescription').value

if (!stepNum || !stepDescription) {
    alert('Please enter a step number and description');
    return;
}
alert(stepNum + stepDescription);

if (stepNum && stepDescription) {
    const response = await fetch('/api/steps/', {
        method: 'POST',
        body: JSON.stringify({stepNum, stepDescription}),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        alert('Step created');
    } else {
        alert('Failed to enter');
    }
}
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });