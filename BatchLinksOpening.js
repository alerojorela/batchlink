var AddSelected = function() {
	var option = $('#mySelect').find(':selected').attr('data-url');

	var linksobj = document.getElementById("linkstextbox");
	linksobj.value += "\n" + option;	
}

var PutSelected = function() {
	var option = $('#mySelect').find(':selected').attr('data-url');

	var linksobj = document.getElementById("linkstextbox");
	linksobj.value = option;
}


var Clear = function() {
	var textbox2 =  document.getElementById("parameterstextbox");
	textbox2.value = '';
}
	
var Run = function() {
	console.log('run()');
	var linksobj = document.getElementById("linkstextbox").value;
	var textbox2 =  document.getElementById("parameterstextbox").value;	

	
	// Remove break lines
	// https://stackoverflow.com/questions/10805125/how-to-remove-all-line-breaks-from-a-string
	var links = linksobj.split(/[\r\n]+/g); //(/(\r\n|\n|\r)/);
	var parameters = textbox2.split(/[\r\n]+/g);
	
	for (var m = 0; m < links.length; m++) {
		var link = links[m];
		if (link.trim() != "") {
			
			if ( !link.startsWith("http") ) link = "http" + link;

 			// defaults
			var pre = link; // append is default behaviour
			var post = "";
			var separatorChar = "+";

			var escapeChar = link.indexOf("\\");
			if (escapeChar != -1) {
				separatorChar = link.substr(escapeChar + 1, 1);
				link = link.slice(0, escapeChar + 1) + link.slice(escapeChar + 2);
				pre = link.slice(0, escapeChar);
				post = link.slice(escapeChar + 1);
				console.log(pre, post);
				// console.log(separatorChar, link);
			}

			for (var n = 0; n < parameters.length; n++) {
				var parameter = parameters[n].trim();
				if (parameter != "") {
					parameter = parameter.replace(/\s+/g, separatorChar) // g modifier: global. All matches (don't return after first match)
					var linkquery = pre + parameter + post;
					console.log(linkquery);
					window.open(linkquery);
				}
			}
		}
	}
}
