function myFirstApp(name, age) {
	alert("Привет! Меня зовут " + name + " и это моя первая программа.");

	function showSkills () {
		let skills = ['html','css', 'PhotoShop', 'Illustrator', 'Avocode', 'Indesign'];
		console.log("Я владею:\n");
		for (let i = 0; i < skills.length; i++) {
			console.log(skills[i] + "\n");			
		}
	}

	showSkills();

	function checkAge(age) {
		if (age >= 18) {
			console.log("Отлично! 18 есть уже :)");
		} else {
			console.log("Жаль, вам меньше 18-ти...");
		}
	}

	function calcPow(num) {
		console.log("Число " + num + " в квадрате = " + num*num);
	}

	calcPow(4);
	checkAge(age);

}


myFirstApp("Jonh Dow", 30);