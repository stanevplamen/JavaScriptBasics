$.fn.dropdown = function () {

    // hide option element
    var $optionList = this;
    $optionList.hide();

    // create dropdown div container
    var $div = $('<div />').appendTo('body');
    $div.addClass('dropdown-list-container');

    // 
    var $ul = $('<ul />').appendTo($div);
    $ul.addClass('dropdown-list-options');

    // create list and get the values to list
    $('#dropdown option').each(function () {
        var $li = $('<li/>')
        .addClass('dropdown-list-option')
        .attr('data-value', $(this).val())
        .appendTo($ul);

        $li.html($(this).text());
    });

    // make a select node
    $ul.on('click', '.dropdown-list-option', function () {

        var $clickedElement = $(this);
        $ul.find('.dropdown-list-option').removeClass('selected');
        $clickedElement.addClass('selected');
    });
};