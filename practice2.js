!(function($) {
    var toggle = $.fn.toggle;
    $.fn.toggle = function() {
        var args = $.makeArray(arguments),
            lastArg = args.pop();

        if (lastArg == 'visibility') {
            return this.visibilityToggle();
        }

        return toggle.apply(this, arguments);
    };
})(jQuery);
