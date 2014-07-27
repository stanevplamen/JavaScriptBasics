define(['controls/combobox', 'jquery'], function (ComboBoxItem) {
    var controls = (function () {
        function ComboBox(collection) {
            this._items = collection || [];
            this._collapsed = true;
        }

        ComboBox.prototype.render = function (htmlTemplate) {
            var self = this;
            var $combo = $('<div>')
                .addClass('combo-box')
            $('body').on('click', '.animal-item', function () {
                var $this = $(this);
                if (!self._collapsed) {
                    self._collapsed = true;
                    $this.parent().find('.animal-item').hide();
                    $this.show();
                } else {
                    $this.parent().find('.animal-item').show();
                    self._collapsed = false;
                }
            });
            $('<div>')
                .addClass('list')
                .appendTo($combo);
            for (var i = 0; i < this._items.length; i++) {
                $combo.html($combo.html() + ComboBoxItem(this._items[i]).render(htmlTemplate));
                $combo.find('.animal-item').hide().first().show();
            }
            return $combo.html();
        };

        return {
            ComboBox: function (collection) { return new ComboBox(collection); }
        };
    }());

    return controls;
});
