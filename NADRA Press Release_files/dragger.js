window.addEvent("load",function(){
	$$(".module_drag").each(function(element){
		element.makeDraggable({
			container: $("content_slider"),
			droppables: ["dobro", "zuo"]
		});
		
		
	});
});
	