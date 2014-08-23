$(function(){
	$('#FeaturedArticleButtonToggle').click(function(e){
		var button = $(e.target);
		var pk = button.data("article");
		var newState = !button.hasClass('active');
		$.get("/articles/" + pk +"/", {'state':newState}, function(data,state) {
			if(state=='success'){
				if(data == "True"){
					button.addClass('active');
				} else {
					button.removeClass('active');
				}
			}
		});
	});
});

$(function() {
	// wire up the buttons to dismiss the modal when shown
	$("#DeleteModal").bind("show", function() {
		$("#DeleteModal button.btn-danger").click(function(e) {
			// do something based on which button was clicked
			// we just log the contents of the link element for demo purposes
			// console.log("button pressed: "+$(this).html());
			var button = $(e.target);
			var pk = button.data("article");
			var member = button.data("member");
			//$.get("/articles/" + pk + "/delete/");
			window.location = "/articles/" + pk + "/delete/";
			// hide the dialog box
			$("#DeleteModal").modal('hide');
			});
		});
	// remove the event listeners when the dialog is hidden
	$("#DeleteModal").bind("hide", function() {
		// remove event listeners on the buttons
		$("#DeleteModal button.btn-danger").unbind();
		});
	// finally, wire up the actual modal functionality and show the dialog
	$("#DeleteModal").modal({
		"backdrop" : "static",
		"keyboard" : true,
		"show" : false
		});
});


$(function() {
	$("#ArticleProjectModal").bind("show", function() {
		$("#ArticleProjectModal button.btn-primary").click(function(e) {
			var button = $(e.target);
			var pk = button.data("article");
			var project_pk = $("#id_project option:selected").val();
			$.get("/articles/" + pk + "/", {'project_pk':project_pk}, function(project_name,state) {
				if (project_name == "None") {
					$(".projectnav").hide();
				} else {
					$(".projectnav").show();
				}
				$(".projectnav:last a").attr("href", "/projects/" + project_name + "/");
				$(".projectnav:last a").text(project_name);
			});
			$("#ArticleProjectModal").modal('hide');
			});
		});
	$("#ArticleProjectModal").bind("hide", function() {
		$("#ArticleProjectModal button.btn-primary").unbind();
		});
	$("#ArticleProjectModal").modal({
		"backdrop" : "static",
		"keyboard" : true,
		"show" : false
		});
	if ($(".projectnav:last").data("project") == "None") {
		$(".projectnav").hide();
	};
});

$(function() {
	$("#ArticleProjectModal").bind("show", function() {
		$("#ArticleProjectModal button.btn-primary").click(function(e) {
			var button = $(e.target);
			var pk = button.data("article");
			var project_pk = $("#id_project option:selected").val();
			$.get("/articles/" + pk + "/", {'project_pk':project_pk}, function(project_name,state) {
				if (project_name == "None") {
					$(".projectnav").hide();
				} else {
					$(".projectnav").show();
				}
				$(".projectnav:last a").attr("href", "/projects/" + project_name + "/");
				$(".projectnav:last a").text(project_name);
			});
			$("#ArticleProjectModal").modal('hide');
			});
		});
	$("#ArticleProjectModal").bind("hide", function() {
		$("#ArticleProjectModal button.btn-primary").unbind();
		});
	$("#ArticleProjectModal").modal({
		"backdrop" : "static",
		"keyboard" : true,
		"show" : false
		});
	if ($(".projectnav:last").data("project") == "None") {
		$(".projectnav").hide();
	};
});

/*
$(function() {
	var edit = 0;
	$("#aboutme").click(function(e) {
		if (edit == 0) {
			var aboutme_text = $("#aboutme").html().trim();
			$("#aboutme").text("");
			$("#aboutme").append("<textarea id='aboutme_input' rows='20'>" + aboutme_text + "</textarea>");
			$("#aboutme_input").focus();
			edit = 1;
		} else {
			var aboutme_text = $("#aboutme_input").val();
			var nickname = $("#aboutme").data("nickname");
			$("#aboutme").text("");
			$("#aboutme").html(aboutme_text);
			edit = 0;
			$.get("/members/" + nickname + "/", {'aboutme': aboutme_text});
		}
	});
}); */
