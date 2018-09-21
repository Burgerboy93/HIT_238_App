var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var response = JSON.parse(xhttp.responseText);
       console.log(response)

       var japaneseWords = response.japaneseWord;
       var japaneseDefinitions = response.japaneseDefinition;
       var germanWords = response.germanWord;
       var germanDefinitions = response.germanDefinition;
       var danishWords = response.danishWord;
       var danishDefinitions = response.danishDefinition;

       var japaneseWordContent = '';
       var germanWordContent = '';
       var danishWordContent = '';

       for (var i = 0; i < japaneseWords.length; i++) {
         japaneseWordContent += '<tr><td>' + japaneseWords[i]+ '</td><td>' + japaneseDefinitions[i] + '</td></tr>';
       };

       for (var i = 0; i < germanWords.length; i++) {
         germanWordContent += '<tr><td>' + germanWords[i]+ '</td><td>' + germanDefinitions[i] + '</td></tr>';
       };

       for (var i = 0; i < danishWords.length; i++) {
         danishWordContent += '<tr><td>' + danishWords[i]+ '</td><td>' + danishDefinitions[i] + '</td></tr>';
       };
       document.getElementById('japaneseContent').innerHTML = japaneseWordContent;
       document.getElementById('germanContent').innerHTML = germanWordContent;
       document.getElementById('danishContent').innerHTML = danishWordContent;
    };
};


xhttp.open("GET", "lessons.json", true);
xhttp.send();


function learnJapanese(){
  var toggle = document.getElementsByClassName('panel');
  toggle[0].classList.remove("active");
  toggle[1].classList.add("active");
};

function learnGerman(){
  var toggle = document.getElementsByClassName('panel');
  toggle[0].classList.remove("active");
  toggle[2].classList.add("active");
};

function learnDanish(){
  var toggle = document.getElementsByClassName('panel');
  toggle[0].classList.remove("active");
  toggle[3].classList.add("active");
};
