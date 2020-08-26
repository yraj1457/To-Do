

document.querySelector('.add').addEventListener('click', addTask);




function addTask(){

var ul = document.querySelector('.tasks');

var inpVal = document.querySelector('.enterhere').value;

var li = document.createElement("li");

document.querySelector('.tasks').style.display = 'block';	

var t = document.createTextNode(inpVal);

li.appendChild(t);

ul.appendChild(li);

document.querySelector('.enterhere').value= ' ';	
	
}




document.querySelector('.clearall').addEventListener('click', clearFunc);

function clearFunc(){
	
	document.querySelector('.tasks').innerHTML = ' ';
	document.querySelector('.enterhere').value= ' ';	
}

var select = document.querySelector('ul');

select.addEventListener('click', function(selected){
		if(selected.target.tagName === 'LI'){
		selected.target.classList.toggle('done');
	}
});

document.querySelector('.thank').addEventListener('click', thankthem);

function thankthem() {
	
	
	
	window.alert('Thank you for using the app. Yash');
	
	
	
	
}











