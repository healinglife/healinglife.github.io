
function openModalMenu() {
    var modalMenuNode = document.getElementById('modal-menu');
    modalMenuNode.classList.remove('modal-menu-fade-out');
    modalMenuNode.classList.add('modal-menu-fade-in');
    modalMenuNode.style.display = 'block';
}

function closeModalMenu() {
    var modalMenuNode = document.getElementById('modal-menu');
    modalMenuNode.classList.remove('modal-menu-fade-in');
    modalMenuNode.classList.add('modal-menu-fade-out');
    window.setTimeout(function() {
        modalMenuNode.style.display = 'none';
    }, 300);
}

var modalMenuButtonNode = document.getElementById('modal-menu-button');
var closeModalMenuButtonNode = document.getElementById('close-modal-menu');

modalMenuButtonNode.addEventListener('click', function() {
    openModalMenu();
});

closeModalMenuButtonNode.addEventListener('click', function() {
    closeModalMenu();
});

document.addEventListener('DOMContentLoaded', function() {

});