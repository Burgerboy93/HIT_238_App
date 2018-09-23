var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var response = JSON.parse(xhttp.responseText);
       console.log(response)

       var japaneseWords = response.japaneseWord;
       var japaneseDefinitions = response.japaneseDefinition;
       var japaneseAudioClip = response.japaneseAudio;

       var japaneseWordDefinitions = '';

       for (var i = 0; i < japaneseDefinitions.length; i++) {
         japaneseWordDefinitions += '<div class="tab"><input id="tab'+i+'" type="radio" name="tabs"><label for="tab'+i+'">' +japaneseDefinitions[i]+
          '</label><div class="tabContent"><table class="table"><tr><th>Japanese</th><th>Audio</th></tr><tr><td>'
         +japaneseWords[i]+'</td><td><audio class ="word" src="'+japaneseAudioClip[i]+
         '" preload= "metadata" type ="audio/mpeg"></audio><button class="word-btn" onclick="playAudio()"><i class="fas fa-play-circle"></i></button></td></tr></table></div></div>';

       };

       document.getElementById('japaneseDefinitions').innerHTML = japaneseWordDefinitions;

    };
};

xhttp.open("GET", "lessons.json", true);
xhttp.send();

var word = document.getElementsByClassName('word');
var wordBtn = document.getElementsByClassName('word-btn');

function playPause(song){
   if (song.paused && song.currentTime >= 0 && !song.ended) {
      song.play();
   } else {
      song.pause();
   }
}

function reset(btn, song){
   if(btn.classList.contains('playing')){
      btn.classList.toggle('playing');
   }
   song.pause();
   song.currentTime = 0;
}

function progress(btn, song){
   setTimeout(function(){
      var end = song.duration;
      var current = song.currentTime;
      var percent = current/(end/100);
      //check if song is at the end
      if(current==end){
         reset(btn, song);
      }

      //call function again
      progress(btn, song);
   }, 1000);
}

function playAudio(){
 for (var i = 0; i < wordBtn.length; i++) {
  wordBtn[i].classList.toggle('playing');
  playPause(word[i]);
  progress(wordBtn[i], word[i]);
}
};
