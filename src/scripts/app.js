/*
  main script for only runs every function
*/
searchForm();


$('#txtSearch').keyup(function(event){
	var txt = $(this).val();
	if(($("#txtSearch").val().length)>= 2){
		$("#btnSearch").removeAttr('disabled');
		$("#btnSearch").removeClass('disabledSearch');
		if(txt.length > 0){
			var abecedario = $("article").filter(function(){
				var str = $(this).text();
				var reg = new RegExp(txt, "i");
				var result = reg.test(str);
				if(!result){
					return $(this);
				}
			}).hide();
		} else{
			$("article").show();
		}
	}else{
		$("#btnSearch").attr('disabled','disabled');
		$("#btnSearch").addClass('disabledSearch');
	}
	
}); 