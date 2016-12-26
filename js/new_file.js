Array.prototype.forEach = function(callback){
	var a = 0,
		len = this.length;
	while(a < len){
		callback(this[a], a++, this);
	};
};
Array.prototype.map = function(callback){
	var a = 0,
		len = this.length,
		result = [];
	while(a < len){
		result.push(callback(this[a], a++, this));
	};
	return result;
};
function createBanner(option){
	var data = option.data,
		dataLen = data.length,
		element = document.getElementById(option.element),
		fragment = document.createDocumentFragment(),
		a = 0,
		images = data.map(function(item){
			return fragment.appendChild(createImage(item));
		}),
		timer = createTimer();
	function createImage(option){
		var a = document.createElement("a");
		a.href = option.href;
		a.title = option.title;
		a.style.backgroundImage = "url(" + option.url + ")";
		return a;
	};
	function createTimer(){
		return setInterval(function(){
			var _a = a;
			a = a >= dataLen - 1 ? 0 : a + 1;
			images[_a].className = "";
			images[a].className = "current";
		}, 4000);
	};
	function createButton(className){
		var i = document.createElement("i");
		i.className = "icon" + className;
		i.onclick = function(){
			clearInterval(timer);
			timer = createTimer();
			var _a = a;
			if(className === "previous"){
				a = a > 0 ? a - 1 : dataLen - 1;
			} else {
				a = a >= dataLen - 1 ? 0 : a + 1;
			};
			images[_a].className = null;
			images[a].className = "current";
		};
		return i;
	};
	images[a].className = "current";
	fragment.appendChild(createButton("previous"));
	fragment.appendChild(createButton("next"));
	element.appendChild(fragment);
};
var bannerData = [
	{
		title : "广告",
		href : "/ad",
		url : "./img/banner1.jpg",
	},
	{
		title : "大风车",
		href : "/dfc",
		url : "./img/banner2.jpg",
	},
	{
		title : "车牛",
		href : "/cn",
		url : "./img/banner3.jpg",
	},
];
createBanner({
	element : "banner",
	data : bannerData,
});
function createBox(option){
	var a = document.createElement("a");
	a.style.backgroundImage = "url(" + option.bigUrl + ")";
	a.href = option.href;
	a.innerHTML = "<h2>" + option.title + "</h2>" + "<p>" + option.label + "</p>" + "<img src = \"" + option.smallUrl + "\" />";
	return a;
};
var exhibitionData = [
	{
		href : "/a",
		bigUrl : "./img/exhibition.jpg",
		smallUrl : "./img/littlecar.png",
		title : "豪车不止BBA",
		label : "德系三架马车，是时候退位让贤啦",
	},
	{
		href : "/a",
		bigUrl : "./img/exhibition.jpg",
		smallUrl : "./img/littlecar.png",
		title : "豪车不止BBA",
		label : "德系三架马车，是时候退位让贤啦",
	},
	{
		href : "/a",
		bigUrl : "./img/exhibition.jpg",
		smallUrl : "./img/littlecar.png",
		title : "豪车不止BBA",
		label : "德系三架马车，是时候退位让贤啦",
	},
	{
		href : "/a",
		bigUrl : "./img/exhibition.jpg",
		smallUrl : "./img/littlecar.png",
		title : "豪车不止BBA",
		label : "德系三架马车，是时候退位让贤啦",
	},
	{
		href : "/a",
		bigUrl : "./img/exhibition.jpg",
		smallUrl : "./img/littlecar.png",
		title : "豪车不止BBA",
		label : "德系三架马车，是时候退位让贤啦",
	},
	{
		href : "/a",
		bigUrl : "./img/exhibition.jpg",
		smallUrl : "./img/littlecar.png",
		title : "豪车不止BBA",
		label : "德系三架马车，是时候退位让贤啦",
	},
];
var fragment = document.createDocumentFragment();
exhibitionData.forEach(function(item){
	fragment.appendChild(createBox(item));
});
document.getElementById("exhibition").appendChild(fragment);
document.getElementById("top").onclick = function(){
	scrollTo(0, 0);
};
var topNav = document.getElementById("topNav"),
	topNavClassName = topNav.className;
onscroll = function(){
	topNav.className = topNavClassName + (scrollY >= 50 ? "fixed" : "normal");
};
