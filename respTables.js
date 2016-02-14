
/*
                         _____         _      _
 _ __   ___  ___  _ __  /__   \  __ _ | |__  | |  ___  ___
| '__| / _ \/ __|| '_ \   / /\/ / _` || '_ \ | | / _ \/ __|
| |   |  __/\__ \| |_) | / /   | (_| || |_) || ||  __/\__ \
|_|    \___||___/| .__/  \/     \__,_||_.__/ |_| \___||___/
                 |_|

            Author: Vasilis Kortsimelidis
        Repository: https://github.com/vaskort/respTables
Issues/Suggestions: https://github.com/vaskort/respTables/issues

*/


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
