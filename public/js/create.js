// functionality for all of the create page
const steps = [];
document.getElementById('addstep').addEventListener('click', function () {
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