var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var response = JSON.parse(xhttp.responseText);

       var verbHeadings = response.verbHeading;
       var verbWords = response.verbWord;
       var verbDefinitions = response.verbDefinition;
       var verbAudioClip = response.verbAudio;

       var verbs = '';

       for (var i = 0; i < verbDefinitions.length; i++) {
         verbs += '<div class="tab"><input id="tab'+i+'" type="radio" name="tabs"><label for="tab'+i+'">' +verbDefinitions[i]+
         '</label><div class="tabContent"><table class="table"><tr><th>Japanese</th><th>Audio</th></tr><tr><td>'
         +verbWords[i]+'</td><td><audio class ="word" id="sound'+i+'" src="'+verbAudioClip[i]+
         '" preload= "metadata" type ="audio/mpeg"></audio><button class="audio"><i class="fas fa-play-circle"></i></button></td></tr></table></div></div>';

       };

       document.getElementById('verbHeading').innerHTML = verbHeadings;
       document.getElementById('verbs').innerHTML = verbs;

     };
};

xhttp.open("GET", "lessons.json", true);
xhttp.send();
