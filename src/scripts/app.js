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


$("#txtSearch").keypress(function(e){
	if(e.which == 13){
		searchPost();
	}
});


$("#btnSearch").click(function(){
	searchPost();
});


function searchPost(){
	var searchInput = $("#txtSearch").val();	
	loadPOST(JSON_FILE,function(txt){
		var data = JSON.parse(txt);
		var datos = data.data;		
		$.each(datos, function(k,v){
			if(searchInput == v.title){
				var loadData = '<article>'+
	  								'<figure>'+
	  									'<img src="'+v.image+'">'+
	  								'</figure>'+
	  								'<h3>'+v.title+'</h3>'+
	  								'<p>'+v.teaser+'</p>'+
	  							'</article>';
	  			$('content').append(loadData);
			}			
		});
		
	});
}