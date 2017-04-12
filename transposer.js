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
}



