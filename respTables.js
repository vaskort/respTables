(function($){
  $.fn.respTables = function(options) {
    var settings = $.extend({
        // These are the defaults.
        heading: 'th'
    }, options );

    // making the plugin chainable
    return this.each(function() {
      var t = [];
	    $(this).find(settings.heading).each(function() {
          // push every header into the array as text by first removing its children
	        t.push($(this).clone().children().remove().end().text().trim());
	    });
	    $(this).find("tr").each(function() {
          // put every header into td's before pseudoelement
	        for (var r = $(this), i = 0; i < t.length; i++) {
	        	r.find("td").eq(i).attr("data-before", t[i]);
	        }
	    });
    });
  }
}(jQuery));
