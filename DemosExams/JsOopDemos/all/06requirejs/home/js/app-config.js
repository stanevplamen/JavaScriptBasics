(function () { 

    require.config({
        paths: {
            'jquery' : 'libs/jquery'
        }
    });

    require(['controls/controls', 'jquery'], function (controls) {
   
        var comboBox = controls.ComboBox(animals);
        var template = $("#animal-template").html();
        var comboBoxHtml = comboBox.render(template);
        var container = document.getElementById('container');
        container.innerHTML = comboBoxHtml;
    });

    var animals = [{ id: 1, animal: "Dog", age: 5, image: "img/dog.jpg" },
                   { id: 2, animal: "Cat", age: 3, image: "img/cat.jpg" },
                   { id: 3, animal: "Horse", age: 6, image: "img/horse.jpg" },
                   { id: 4, animal: "Mouse", age: 1, image: "img/mouse.jpg" }];

})();