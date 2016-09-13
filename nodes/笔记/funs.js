//随机颜色
function rc(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	var a=Math.random()*2;

	return 'rgba('+r+','+g+','+b+','+a+')';
}
//