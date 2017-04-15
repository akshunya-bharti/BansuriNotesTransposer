var tblHigherOctave = document.getElementById("tblHigherOctave");
var tblNormalOctave = document.getElementById("tblNormalOctave");
var tblLowerOctave = document.getElementById("tblLowerOctave");
var divSelectedNotes = document.getElementById("divSelectedNotes");
var divTransposedNotes = document.getElementById("divTransposedNotes");
var paraSelectedNotes = document.getElementById("paraSelectedNotes");
var txtAreaInput = document.getElementById("txtAreaInput");
var btnTranspose = document.getElementById("btnTranspose");
var btnClear = document.getElementById("btnClear");
var btnClearAll = document.getElementById("btnClearAll");
var selectPitch = document.getElementById("selectPitch");



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
	paraSelectedNotes.innerText = "";
	paraSelectedNotes.innerText += textToPrint;
	transposer(textToPrint);
}


btnClear.onclick = function(){
	var textToPrint = txtAreaInput.value;
	textToPrint = textToPrint.substring(0,textToPrint.length-2);
	txtAreaInput.value = textToPrint;
}

btnClearAll.onclick = function(){
	txtAreaInput.value="";
}

function transposer(selectedNotes){
	var regExpHigher = /[SrRgGMm]\^/;
	var regExpNormal = /[SrRgGMmPdDnN]\-/;
	var regExpLower = /[PdDnN]\_/;
	var notesArray = ['P_','d_','D_','n_','N_','S-','r-','R-','g-','G-','M-','m-','P-','d-','D-','n-','N-','S^','r^','R^','g^','G^','M^','m^'];

	var modifiedDivSelectedNotes="<p class=\"clsOutputNotes\" id=\"paraSelectedNotes\">Selected Notes: ";
	var modifiedDivTransposedNotes="<p class=\"clsOutputNotes\" id=\"paraTransposedNotes\">Transposed Notes: ";

	for(var i=0; i<selectedNotes.length; i+=2){

		//SELECTED NOTES

		var note=selectedNotes.substring(i,i+2);
		
		var isHigherNote = regExpHigher.test(note);
		var isNormalNote = regExpNormal.test(note);
		var isLowerNote =  regExpLower.test(note); 
		
		if(isHigherNote){
			modifiedDivSelectedNotes += "<span class=\"clsHigherNote\">"+note.substring(0,1)+"</span>";
		}
		else if(isNormalNote){
			modifiedDivSelectedNotes += "<span class=\"clsNormalNote\">"+note.substring(0,1)+"</span>";
		}
		else if(isLowerNote){
			modifiedDivSelectedNotes += "<span class=\"clsLowerNote\">"+note.substring(0,1)+"</span>";
		}

		//TRANSPOSED NOTES
		var position = parseInt(notesArray.indexOf(note));
		var pitch = parseInt(selectPitch.value);
		var noteTransposed = notesArray[position+pitch];
		
		isHigherNote = regExpHigher.test(noteTransposed);
		isNormalNote = regExpNormal.test(noteTransposed);
		isLowerNote =  regExpLower.test(noteTransposed); 

		if(isHigherNote){
			modifiedDivTransposedNotes += "<span class=\"clsHigherNote\">"+noteTransposed.substring(0,1);+"</span>";
		}
		else if(isNormalNote){
			modifiedDivTransposedNotes += "<span class=\"clsNormalNote\">"+noteTransposed.substring(0,1);+"</span>";
		}
		else if(isLowerNote){
			modifiedDivTransposedNotes += "<span class=\"clsLowerNote\">"+noteTransposed.substring(0,1);+"</span>";
		}
		else if(noteTransposed == null){
			alert("Some notes are being transposed out of range!");
			modifiedDivSelectedNotes="<p class=\"clsOutputNotes\" id=\"paraSelectedNotes\">Selected Notes: ";
			modifiedDivTransposedNotes="<p class=\"clsOutputNotes\" id=\"paraTransposedNotes\">Transposed Notes: ";
			break;
		}
	}

	modifiedDivSelectedNotes+="</p>";
	modifiedDivTransposedNotes+="</p>";
	divSelectedNotes.innerHTML=modifiedDivSelectedNotes;
	divTransposedNotes.innerHTML=modifiedDivTransposedNotes;
}