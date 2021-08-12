function lastModifiedDay() {
	var day = new Date(document.lastModified);
	var y = day.getFullYear();
	var m = day.getMonth() + 1;
	var d = day.getDate();
	document.write("(最終更新 " + y + "/" + m + "/" + d + ")");
}
