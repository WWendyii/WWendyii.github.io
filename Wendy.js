//打开网页 show 的东西
switch(new Date().getDay()){
	case 0: alert('Welcome to Minecraft website on Sunday');
		break;
	case 1: alert('Welcome to Minecraft website on Monday');
		break;
	case 2: alert('Welcome to Minecraft website on Tuesday');
		break;
	case 3: alert('Welcome to Minecraft website on Wednesday');
		break;
	case 4: alert('Welcome to Minecraft website on Thursday');
		break;
	case 5: alert('Welcome to Minecraft website on Friday');
		break;
	case 6: alert('Welcome to Minecraft website on Saturday');
		break;
	default:
		alert('please in a valid number');
	}
	
document.getElementById('demo').innerHTML = '✿Minecraft✿';

//show date
function greeting(){
	var time = new Date().getHours();
	if (time >= 0 && time <=8) {
		alert("Hi my frinend! Hope you have a great breakfast!");
	} 
	else if (time > 8 && time <= 16) {
		alert("Hi my frinend! Hope you have a great lunch!");
	} 
	else {
		alert("Hi my frinend! Hope you have a great dinner");
	}
	alert(time);
}

//大标题下面中间的按钮
function n(){
	alert('ʕ·͡ˑ·ཻʔ   (this is a selfie)');
}
//大标题下面右边的按钮
function haha(){
	var hg = new Date().getMonth();
	switch(hg){
		case 3:
		case 4:
		case 5:
		    alert('We are in Spring now!!');
		    break;
		case 6:
		case 7:
		case 8:
		    alert('We are in Summer now!!');
		    break;
		case 9:
		case 10:
		case 11:
		    alert('We are in Fall!');
		    break;
		default:
		    alert('We are in Winer now!!');
	}
}

//石头剪刀布
function r(){
	var choices = ['rock','paper','scissor'];
	var random = Math.floor(Math.random()*3);
	var computer = choices[random];
	console.log(computer);

	var player = prompt('please select your choice here:  (rock/paper/scissor)');
	if(player == computer){
		alert('平局');
	}
	else if(player == 'rock'){
		if(computer == 'paper'){
			alert('电脑赢!');
		}
		else if(computer == 'scissor'){
			alert('你赢了!');
		}
	}
	else if(player == 'paper'){
		if(computer == 'rock'){
			alert('你赢了!');
		}
		else if(computer == 'scissor'){
			alert('电脑赢!');
		}
		}
	else if(player == 'scissor'){
		if(computer == 'rock'){
			alert('电脑赢!');
		}
		else if(computer == 'paper'){
			alert('你赢了!');
		}
	}
}

//Notch 打招呼
function greet(){
	var name = prompt(alert('please write your name here: '))
	alert('Hello ' + name + ', nice to see you!');
}

//图片打分
function e(){
	var s = parseInt(prompt(alert('give pictures a gradeᵔ◡ᵔ: (0-10)')));
	if(s <= 3 && s >= 0){
		alert('I will improve next time!');
	}
	else if(s > 3 && s <= 7){
		alert('Thanks for your love!');
	}
	else if(s >7 && s <= 10){
		alert('I‘m appreciated that you love it.')
	}
	else{
		alert('please write a correct number')
	}
	alert(s);
}

function k(){
	var bb = ["Sheep","Chicken","Pig","Cow","Cat"];
	var random = Math.floor(Math.random() * 5);
	alert(bb[random]);
}

function m(){
	var name = {
		first: "SHEEP",
		second: "CHICKEN",
		third: "PIG",
		forth: "COW",
		last: "CAT",
	}
	var i;
	for(i in name){
		alert(name[i].toLowerCase());
	}
	alert(str[i]);
 }

function ll(){
	var nname = {
		first: "SHEEP",
		second: "CHICKEN",
		third: "PIG",
		forth: "COW",
		last: "CAT",
	}
	alert("I'm very happy you be these: " + nname.first + "," + nname.second + "," + nname.third + "," + nname.forth + "," + nname.last)

}

function dd(){
	var bbb = 3 + 4 + 2 + 1 + 5 + 2 + 8 + 7 + 3 + 6 + 3 + 3 + 2 + 6 + 5 + 1 + 3 + 1 + 3 + 2 + 2 + 1 + 3 + 1 + 1 + 1 +1 + 3 + 2;
	console.log('bbb')
	var h = Math.trunc(bbb);
	alert("There have around like " + h + " terrains.");
}

function ter(){
	var lk = parseInt(prompt('please write first number: '));
	var kl = parseInt(prompt('please write second number: '));
	var lkk = (lk**2)+(kl**2)
	alert("This is the radius: " + lkk);
}

function vb(){
	for (var gh = 0; gh < 86; gh++){
		alert(gh);
	}
	alert('有没有感觉不该点这个按钮?(๑乛◡乛๑)')
}

function iu(){
	var hhh = 85;
	do{
		alert('后悔吗，85 遍哦加油!');
		hhh--;
	}
	while(hhh >= 0);
}

function lan(){
	var x = 1e20;
	alert('but I donot want to list them');
	alert('because I am to lazy');
	alert('我的懒度:' + x + '%')
}


