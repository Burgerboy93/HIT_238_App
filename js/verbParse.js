//Parse JSON File
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
         +verbWords[i]+'</td><td><button id="sound'+i+'">Play</button></td></tr></table></div></div>';

       };

       document.getElementById('verbHeading').innerHTML = verbHeadings;
       document.getElementById('verbs').innerHTML = verbs;


       var obj = document.createElement("audio");
       obj.src = "audio/taberu.mp3";
       obj.volume = 0.3;
       obj.autoPlay = false;
       obj.preLoad = true;
       obj.controls = true;
       $("#sound0").click(function() {
         obj.play();
       });
       ;

       var obj1 = document.createElement("audio");
       obj1.src = "audio/wakaru.mp3";
       obj1.volume = 0.3;
       obj1.autoPlay = false;
       obj1.preLoad = true;
       obj1.controls = true;
       $("#sound1").click(function() {
         obj1.play();
       });
       ;
       var obj2 = document.createElement("audio");
       obj2.src = "audio/miru.mp3";
       obj2.volume = 0.3;
       obj2.autoPlay = false;
       obj2.preLoad = true;
       obj2.controls = true;
       $("#sound2").click(function() {
         obj2.play();
       });
       ;
       var obj3 = document.createElement("audio");
       obj3.src = "audio/neru.mp3";
       obj3.volume = 0.3;
       obj3.autoPlay = false;
       obj3.preLoad = true;
       obj3.controls = true;
       $("#sound3").click(function() {
         obj3.play();
       });
       ;
       var obj4 = document.createElement("audio");
       obj4.src = "audio/suru.mp3";
       obj4.volume = 0.3;
       obj4.autoPlay = false;
       obj4.preLoad = true;
       obj4.controls = true;
       $("#sound4").click(function() {
         obj4.play();
         });
       ;
       var obj5 = document.createElement("audio");
       obj5.src = "audio/kiku.mp3";
       obj5.volume = 0.3;
       obj5.autoPlay = false;
       obj5.preLoad = true;
       obj5.controls = true;
       $("#sound5").click(function() {
         obj5.play();
         });
       ;
       var obj6 = document.createElement("audio");
       obj6.src = "audio/nomu.mp3";
       obj6.volume = 0.3;
       obj6.autoPlay = false;
       obj6.preLoad = true;
       obj6.controls = true;
       $("#sound6").click(function() {
         obj6.play();
         });
       ;
       var obj7 = document.createElement("audio");
       obj7.src = "audio/hanasu.mp3";
       obj7.volume = 0.3;
       obj7.autoPlay = false;
       obj7.preLoad = true;
       obj7.controls = true;
       $("#sound7").click(function() {
         obj7.play();
         });

     };
};

xhttp.open("GET", "lessons.json", true);
xhttp.send();
