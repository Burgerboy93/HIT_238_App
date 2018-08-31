function beginLearning(){
  var toggle = document.getElementsByClassName('container');
  toggle[0].classList.remove("active");
  toggle[1].classList.add("active");
};

function previousLesson(){
  var toggle = document.getElementsByClassName('container');
  toggle[2].classList.remove("active");
  toggle[1].classList.add("active");
};

function nextLesson(){
  var toggle = document.getElementsByClassName('container');
  toggle[1].classList.remove("active");
  toggle[2].classList.add("active");
};

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var response = JSON.parse(xhttp.responseText);
       console.log(response)
       var word = response.word;
       var definition = response.definition;
       var sentences = response.sentences;
       var sentenceDefinition = response.sentenceDefinition;


       var greetingSentences = '';
       var greetingWordContent = '';

       for (var i = 0; i < word.length; i++) {

         greetingWordContent += '<tr><td>' + word[i]+ '</td><td>' + definition[i] + '</td></tr>';


       };
       for (var i = 0; i < sentences.length; i++){
       greetingSentences += '<tr><td>' + sentences[i]+ '</td><td>' + sentenceDefinition[i] + '</td></tr>';
     }
       document.getElementById('greetingContent').innerHTML = greetingWordContent;
       document.getElementById('greetingSentencesContent').innerHTML = greetingSentences;

    };
};


xhttp.open("GET", "lessons.json", true);
xhttp.send();
