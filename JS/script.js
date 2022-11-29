$(".burger").on("click", function(){
	if( $(this).hasClass("is-active")  ){
		 $(this).removeClass("is-active");
		 $(this).addClass("is-deactive");
	}else{
		 $(this).removeClass("is-deactive");
		 $(this).addClass("is-active");	
	}
});