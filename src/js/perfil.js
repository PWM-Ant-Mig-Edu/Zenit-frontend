function setActive(num) {
    var padre = document.getElementById('buttons-profile-component');
    var hijos = padre.children;

    for (var i = 0; i < hijos.length; i++) {
        if (i === num) {
            hijos[i].id = "active";
        }
    }
};