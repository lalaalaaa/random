function replace_plaque_text(new_text){
	if(new_text){
		var old_text = $(".print-only .plaque-text").text();
		$(".print-only .plaque-text").text(new_text);
		var response = "Replaced" 
		alert("Replaced \""+old_text+"\" with \""+new_text+"\" in the printed certificate. \r\rOnly YOU can see this. It will revert when you reload the page.")
    } 
}
replace_plaque_text(prompt('What\'s the new plaque text?'));