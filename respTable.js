function respTable(){
	$(".tableWrapper").each(function() {
	    var t = [];
	    $(this).find("thead th").each(function() {
	        t.push($(this).clone().children().remove().end().text().trim())
	    });
	    $(this).find("tbody tr").each(function() {
	        for (var r = $(this), i = 0; i < t.length; i++) {
	        	r.find("td").eq(i).attr("data-before", t[i]);
	        } 
	    })
	});
}

$(document).ready(function(){
	respTable();
});