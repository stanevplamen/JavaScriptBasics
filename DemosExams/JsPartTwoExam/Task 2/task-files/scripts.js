$.fn.gallery = function (value) {
    
    if (!value) {
        value = 4;
    }

    var $galleryContainer = this;
    $galleryContainer.addClass('gallery');
    $galleryContainer.width(value * 260);

    $selectedItems = $galleryContainer.find('.selected');
    $selectedItems.hide();

    $galleryContainer.on('click', '.image-container', function () {

        $galleryContainer.addClass('.blurred');
        $selectedItems.show();

        var $clickedElement = $(this);
        var $clickedImage = $clickedElement.find('img')[0];
        var $src = $clickedImage.attributes['src'];
        var $datavalue = $clickedImage.attributes['data-info'];
        //var $src = $clickedImage.attr("src");

        //var $mainImage = $selectedItems.find('#current-image');
        //$mainImage.attr('src', $src);
        //$mainImage.attr('data-info', $datavalue);


        var t = 5;

       // $selectedItems.html('');


        //hideControlContent();
        //$tabsControl.find('.tab-item').removeClass('current');
        //$clickedElement.next().show();
        //$clickedElement.parent().addClass('current');
    });

};