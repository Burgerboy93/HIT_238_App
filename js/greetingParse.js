var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var response = JSON.parse(xhttp.responseText);

       var greetingHeadings = response.greetingHeading;
       var greetingWords = response.greetingWord;
       var greetingDefinitions = response.greetingDefinition;
       var greetingAudioClip = response.greetingAudio;

       var greetings = '';

       for (var i = 0; i < greetingDefinitions.length; i++) {
         greetings += '<div class="tab"><input id="tab'+i+'" type="radio" name="tabs"><label for="tab'+i+'">' +greetingDefinitions[i]+
          '</label><div class="tabContent"><table class="table"><tr><th>Japanese</th><th>Audio</th></tr><tr><td>'
         +greetingWords[i]+'</td><td><audio class ="word" src="'+greetingAudioClip[i]+
         '" preload= "metadata" type ="audio/mpeg"></audio><button class="audio" id="sound'+i+'" onclick="playAudio()"></button></td></tr></table></div></div>';

       };

       document.getElementById('heading').innerHTML = greetingHeadings;
       document.getElementById('greetings').innerHTML = greetings;

    };
};

xhttp.open("GET", "lessons.json", true);
xhttp.send();
