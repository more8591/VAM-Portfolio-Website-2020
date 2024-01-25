function waterFloat(elm,t,d,v){
var i = elm;
var runIt = function (elm,t,d,v) {
    elm.animate({top:'+='+v},t,"linear",function(){
		$({deg: -d}).animate({deg: d}, {
			duration: t,
			step: function(now){
				elm.css({
					transform: "rotate(" + now + "deg)"
				});
			}
		},"linear");
		elm.animate({top:'-='+v},t,"linear",function(){
			$({deg: d}).animate({deg: -d}, {
			duration: t,
			step: function(now){
            elm.css({
                transform: "rotate(" + now + "deg)"
				});
			}
		},"linear");
			runIt(elm,t,d,v);
		});	
	});
}
runIt(i,t,d,v);
}


var elem = $('#toggleOff'); // jquery selector to get a specific element with ID
var time = 900; //time in milli seconds
var degrees = 0; //angle of degrees to float
var vertical_displacement = 10; //value in pixels at which the div should take vertical displacements to float 
var waterfloat = new waterFloat(elem,time,degrees,vertical_displacement);