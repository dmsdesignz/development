
class GrandParents {
	     constructor(age, eyeColor, vertical) {
		this.age = age;
		this.eyeColor= eyeColor;
		this.vertical= vertical;
		 }

	    report() {


                }
}
	class Parents extends GrandParents {
	    constructor(age, eyeColor, vertical) {
	        super(age, eyeColor, vertical);
	    }
	    report() {

            return `Parents ${super.report()}`;
	    }
	}

	class Children extends Parents {
         constructor(age, eyeColor, vertical) {
	        super(age, eyeColor, vertical);

	    }
   	  report() {

            return `Children ${super.report()}`;
	    }

	}
  let myGrandParents = new GrandParents('78', 'Blue', 6);
	alert(myGrandParents.report());

  let myParents = new Parents('59', 'blue', 20);
	alert(myParents.report());

	let myChildren = new Children('35', 'Blue', 28);
	alert(myChildren.report());

	console.log(myGrandParents);
		console.log(myParents);
			console.log(myChildren);
let verticalArr = [myGrandParents.vertical, myParents.vertical, myChildren.vertical];
for(let i = 0; i < verticalArr.length; i++){
	console.log('vertical jump is' + Arr[i] + 'in');
}
