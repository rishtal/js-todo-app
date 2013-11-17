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
			$itemsContainer.append("<li class='item'>" + value + "</li>");
			$itemValue.val("");
		}
	});

	//Empty all items in "container-items" class
	$("#delete-all").click( function(){
		$itemsContainer.empty();
	});

	//click an item, open a window with the contents of item
	$itemsContainer.on("click", ".item", function(e) {	
		$selected = $(e.currentTarget);
		$content = $(e.currentTarget);

		$editable.show();
		$editable.val( $selected.text() );
		$editable.select();
		$editable.blur(function() {
			$editable.hide();
			$selected.text($editable.val()); 

		});

		//$modal.show();
		//$editable.val( $selected.text() )

	});

	$(".cancel").on("click", function(){
		$modal.hide();
		$editable.val("");
	});

	$(".update").on("click", function(){
		$modal.hide();
		$selected.text($editable.val()); 

	});


	// var value = "";

	// //key up on keyboard event handler
	// $itemValue.keyup(function( event ){
		
	// 	value = $itemValue.val();

	// 	//if user pressed enter
	// 	if(event.which === 13){
	// 		if( !$(this).val() ){
	// 			$(".error").fadeIn("slow").delay(800).fadeOut("slow");
	// 		} else {
	// 			$itemsContainer.append("<li class='item'>" + value + "</li>");
	// 			$itemValue.val("");
	// 			value = "";	
	// 		}
	// 	}
	// });

	// //Submit item using "Add Item" button
	// $(".add-item-btn").click(function(){

	// 	value = $itemValue.val();

	// 	//check to see if empty string
	// 	if ( value === "" ){
	// 		$(".error").fadeIn("slow").delay(800).fadeOut("slow");
	// 	} else {
	// 		$itemsContainer.append("<li class='item'>" + value + "</li>");
	// 		$itemValue.val("");
	// 		value = "";	
	// 	}

	// });		


	// //click an item
	// $(".container-items").on('click', '.item', function(event){

	// 	//show modal
	// 	$("#modal-background, #modal").show();

	// 	//get the current item contents and store it in a variable
	// 	var itemContent = $(event.currentTarget).text();

	// 	//populate textarea content with current "itemContent"
	// 	$("#editableText").val(itemContent);

	// 	//when user clicks cancel
	// 	$(".cancel").on("click", function(){
	// 		$("#editableText").val("");
	// 		$("#modal-background, #modal").hide();
	// 		$(".cancel").off("click");
	// 		$(".update").off("click");
	// 	});

	// 	//when user clicks update
	// 	$(".update").on("click", function() {
	// 		var newItemContent = $("#editableText").val();
	// 		$(event.currentTarget).text(newItemContent);
	// 		$("#modal-background, #modal").hide();
	// 		$(".update").off("click");
	// 	});

	// });
	
});







