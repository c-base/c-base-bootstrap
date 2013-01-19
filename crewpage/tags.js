(function() {
		// Localize jQuery variable
		var jQuery;

		/******** Load jQuery if not present *********/
		if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.4.2') {
		    var script_tag = document.createElement('script');
		    script_tag.setAttribute("type","text/javascript");
		    script_tag.setAttribute("src",
		        "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
		    if (script_tag.readyState) {
		      	script_tag.onreadystatechange = function () { // For old versions of IE
		          if (this.readyState == 'complete' || this.readyState == 'loaded') {
		              scriptLoadHandler();
		          }
		    };
		    } else { // Other browsers
		    	script_tag.onload = scriptLoadHandler;
		    }
		    // Try to find the head, otherwise default to the documentElement
		    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
		} else {
		    // The jQuery version on the window is the one we want to use
		    jQuery = window.jQuery;
		    main();
		}

		/******** Called once jQuery has loaded ******/
		function scriptLoadHandler() {
		    // Restore $ and window.jQuery to their previous values and store the
		    // new jQuery in our local jQuery variable
		    jQuery = window.jQuery.noConflict(true);
		    // Call our main function
		    main(); 
		}

		function render_error_message() {
			jQuery('#tags').append('<p>There was an error loading the tags from c-portal.</p>');
		}

		/******** Our main function ********/
		function main() { 
			jQuery(document).ready(function($) {
				// Add a header 
				$('#tags').append('<h2>Tags</h2>');
				
				// The nickname of the c-portal user is stored in the target-div. */
				nickname = $('#tags').attr('data-nickname');
				
				// Create a JSON-RPC request to get tags from c-portal
		    	var data = '{"method": "api.get_member", "params": ["' + nickname + '"], "id": 0}';
				$.ajax({
				    type: 'POST',
			       	url: "https://c-portal.c-base.org/rpc/",
			       	data: data,
			       	processData: false,
			       	error: function(json) {
			        	render_error_message();
			        },
			   		success: function(json) {
						if (json == "") {
							render_error_message();
						}
						tags = json.result.fields.tags;
			 			$('#tags').append('<div class="cloud" id="c-portal-tags-content"></div>');
			   		  	for(var i = 0; i < tags.length; i++) {
							$('#c-portal-tags-content').append('<span class="tag">' + tags[i] + '</span> ');
			 			}
   
			 		}
	        	}); // end AJAX
		
			}); // end function main()
		}

})(); // We call our anonymous function immediately