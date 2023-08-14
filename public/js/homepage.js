const filter_bt = document.getElementById('filter_bt');
function filterbydifficulty() {
    fetch('http://localhost:3001/filter/:difficulty').then(response => response.json()).then(data => {
        
}