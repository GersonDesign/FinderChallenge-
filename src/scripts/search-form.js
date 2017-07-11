

function searchForm() {
	loadPOST(JSON_FILE,function(text){
		var data = JSON.parse(text);
		var arrayList = data.data;
		var list = [];
		var newObject = arrayList.map(function (value, label){
			return list.push(value.title);
		});
		var inputText = document.getElementById("txtSearch");
		new Awesomplete(inputText,{
			list: list,
			minChars: 3
		});
	});
}


