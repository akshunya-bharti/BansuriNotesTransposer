var tblHigherOctave = document.getElementById("tblHigherOctave");
var tblNormalOctave = document.getElementById("tblNormalOctave");
var tblLowerOctave = document.getElementById("tblLowerOctave");
var selectedNotesPara = document.querySelector("p");
var txtAreaInput = document.getElementById("txtAreaInput");



if (tblHigherOctave != null) {
	for (var i = 0; i < tblHigherOctave.rows.length; i++) {
	    for (var j = 0; j < tblHigherOctave.rows[i].cells.length; j++) {
	    	tblHigherOctave.rows[i].cells[j].onclick = (function () {
	    		addToTextArea(this,"^");
	        });
	    }
	}
}

if (tblNormalOctave != null) {
	for (var i = 0; i < tblNormalOctave.rows.length; i++) {
	    for (var j = 0; j < tblNormalOctave.rows[i].cells.length; j++) {
	    	tblNormalOctave.rows[i].cells[j].onclick = (function () {
	    		addToTextArea(this,"-");
	        });
	    }
	}
}

if (tblLowerOctave != null) {
	for (var i = 0; i < tblLowerOctave.rows.length; i++) {
	    for (var j = 0; j < tblLowerOctave.rows[i].cells.length; j++) {
	    	tblLowerOctave.rows[i].cells[j].onclick = (function () {
	    		addToTextArea(this,"_");
	        });
	    }
	}
}


function addToTextArea(tableCell,octaveIdentifier) {
	var textToAdd = tableCell.innerText;
    txtAreaInput.value += textToAdd+octaveIdentifier;
}

btnTranspose.onclick = function(){
	var textToPrint = txtAreaInput.value;
	selectedNotesPara.innerText = "Selected Notes: ";
	selectedNotesPara.innerText += textToPrint;
	transposer(textToPrint);
}


function transposer(selectedNotes){
	var regExpHigher = /[SrRgGMm]\^/g;
	var regExpNormal = /[SrRgGMmPdDnN]\-/g;
	var regExpLower = /[PdDnN]\_/g;
	var match, matches = [];

	for(var i=0; i<selectedNotes.length; i+=2){
		var note=selectedNotes.substring(i,i+2);
		var isHigherNote = Boolean((regExpHigher.exec(note)) != null);
		var isNormalNote = Boolean((regExpNormal.exec(note)) != null);
		var isLowerNote = Boolean((regExpLower.exec(note)) != null);

		console.log(note);


		// var matchOrNot = (vrbl === true ? "Match" : "Not a Match");
		// console.log(matchOrNot);

		if(isHigherNote){
			console.log("Higher");
		}
		else if(isNormalNote){
			console.log("Normal");
		}
		else if(isLowerNote){
			console.log("Lower");
		}

		isLowerNote=false;
		isNormalNote=false;
		isHigherNote=false;
	}


	// while ((match = regExpHigher.exec(selectedNotes)) != null) {
	//   matches.push(match[0]);
	//   console.log(match[0]);
	// }

	// console.log(matches);
}