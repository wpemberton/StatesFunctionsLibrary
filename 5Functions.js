var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Geography/US%20States.csv";

function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }


var stateNames = getColumn(url, 1);
var codeName = getColumn(url, 2);
var nickname = getColumn(url, 3);
var website = getColumn(url, 4);
var admissionYear = getColumn(url, 5);
var capital = getColumn(url, 7);
var population = getColumn(url,9);
var constitution = getColumn(url, 11);
var flag = getColumn(url, 12);
var povertyRate = getColumn(url, 19);
var Area = getColumn(url, 17)

//takes a state as a parameter and searches for the corresponding poverty rate for that state.
//state{string} - the desired state
//return {number} - the matching number of  poverty rates
function getPovertyRate(state){
  var matches = [];
  for (var i in povertyRate){
    if(stateNames[i].toLowerCase().includes(state.toLowerCase())){
      return parseFloat(povertyRate[i]);
    }
  } 
  if (matches.length == 0) {
    matches.push("that state does not exist");
  }
  return matches;
}



//takes a state as a parameter and finds the total area of that state. 
//state{string} - the desired state
//return {Number} - the matching number of area 
//return{-1} - error because that state doesn't exist
function getArea(states){
  var total = 0;
  var count;
  for (var i in stateNames){
    if(stateNames[i].toLowerCase().includes(states.toLowerCase())) {
  
      total += Area[i];
      count ++;
  }
    
  } 
   if (total == 0) {
    return -1;
   }
  return total;
}


//takes a state as a parameter and returns the capital of that state
//state{string} - the desired state
//return {String} - the matching name of capital
function getCapital(state){
  var matches3 = [];
  for (var i in capital){
    if(stateNames[i].toLowerCase().includes(state.toLowerCase())){
      return capital[i];
    }
  } 
   if (matches3.length == 0) {
    matches3.push("that state does not exist");
  }
  return matches3;
}


//takes a state as a parameter and returns a link to an image of that states flag 
//state{string} - the desired state
//return {String} - the matching link to the states flag
function getStateFlag(state){
  var matches2 = [];
  for(var i in flag){
    if(stateNames[i].toLowerCase().includes(state.toLowerCase())){
      return flag[i];
      
    }
  }
  if (matches2.length == 0) {
    matches2.push("that state does not exist");
  }
  return matches2;
}

//takes a state as a parameter and returns the nickname of that state
//state{string} - the desired state
//return {String} - the matching nickname
function getNickname(state){
  var matches4 = [];
  for(var i in nickname){
    if(stateNames[i].toLowerCase().includes(state.toLowerCase())){
      return nickname[i];
    }
  }
   if (matches4.length == 0) {
    matches4.push("that state does not exist");
  }
  return matches4;
}



