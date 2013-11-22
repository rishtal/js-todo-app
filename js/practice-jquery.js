$( document ).ready(function() {
	
	//store the selectors to variables
	var $itemValue = $("#item-value"),
		$modal = $("#modal-background"),
		$editable = $("#editableText"),
		$itemsContainer = $(".container-items"),
		$selected; // keep track of current item

	//keyup event handler - when user releases the enter key
	$itemValue.keyup( function(e) {
		if(e.which === 13) {
			$(".add-item-btn").click();
		}
	});

	//when user clicks add item button
	$(".add-item-btn").on('click', function(){
		var value = $itemValue.val();
		if( !value ){
			$(".error").fadeIn("slow").delay(800).fadeOut("slow");
		} else {
			$itemsContainer.append("<li class='item'>" + "<input class='checkbox' type='checkbox'>" + "<p class='item-content'>" + value + "</p>" + "<button class='delete-item'>Delete</button>" + "</li>");
			$itemValue.val("");
			//$itemsContainer.find(".item").hide().fadeIn("slow")
		}
	});

	$itemsContainer.on("click", ".item .delete-item", function(e){
		$(this).closest(".item").remove();
	});

	$itemsContainer.on('mouseenter', '.item', function(e){
		$(this).find('.delete-item').show();
	});

	$itemsContainer.on('mouseleave', '.item', function(e){
		$(this).find('.delete-item').hide();
	});

	//Empty all items in "container-items" class
	$("#delete-all").click( function(){
		$itemsContainer.empty();
	});

	//checkbox for item - if item is done/not done show appropriate css
	$itemsContainer.on("click", ".item .checkbox", function(e){

		if($(this).is(":checked")){
			$(this).closest(".item").addClass("done");
		} else {
			$(this).closest(".item").removeClass("done");
		}

	});

	//click an item, open a window with the contents of item
	$itemsContainer.on("click", ".item p", function(e) {	
		$selected = $(e.currentTarget);

		$(this).siblings().remove();

		$editable.val( $selected.text() );
		$selected.replaceWith($editable.show());
		$editable.select();

		$editable.keyup(function(e){
			if(e.which === 13) {
				$editable.hide();
				$selected.text($editable.val());
				$editable.replaceWith("<input class='checkbox' type='checkbox'>" + "<p class='item-content'>" + $selected.text() + "</p>" + "<button class='delete-item'>Delete</button>");
			}
		});

		$editable.blur( function() {
			$editable.hide();
			$selected.text($editable.val());
			$editable.replaceWith("<input class='checkbox' type='checkbox'>" + "<p class='item-content'>" + $selected.text() + "</p>" + "<button class='delete-item'>Delete</button>");
		});

	});

	$(".cancel").on("click", function(){
		$modal.hide();
		$editable.val("");
	});

	$(".update").on("click", function(){
		$modal.hide();
		$selected.text($editable.val()); 

	});

});







