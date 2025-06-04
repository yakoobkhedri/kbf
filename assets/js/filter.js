
// open filter
let openFilter = document.getElementById('openFilter');
let closeFilter = document.getElementById('closeFilter');
openFilter.addEventListener('click', function () {
    document.getElementById('filtersidebar').classList.add('active');
});
closeFilter.addEventListener('click', function () {
    document.getElementById('filtersidebar').classList.remove('active');
});