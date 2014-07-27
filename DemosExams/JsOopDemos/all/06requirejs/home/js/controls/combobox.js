define(['jquery', 'libs/handlebars'], function () {
    var ComboBoxItem = (function () {
        function ComboBoxItem(item) {
            this._content = item || [];
        }

        ComboBoxItem.prototype.render = function (htmlTemplate) {
            var compiledTemplate = Handlebars.compile(htmlTemplate);
            var $item = $('<div>')
                .addClass('combobox')
                .html(compiledTemplate(this._content));
            return $item.html();
        };

        return {
            ComboBoxItem: function (item) { return new ComboBoxItem(item); }
        };
    }());

    return ComboBoxItem.ComboBoxItem;
});