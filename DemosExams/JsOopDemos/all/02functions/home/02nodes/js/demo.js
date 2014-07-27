window.onload = onBodyLoad();

function onBodyLoad() {
   
    item.attachEventHandler('#btnAddCircle', 'click', function () { shape.add("rect"); });
    item.attachEventHandler('#btnAddRectangle', 'click', function () { shape.add("ellipse"); });
}