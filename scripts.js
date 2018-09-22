var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       var response = JSON.parse(xhttp.responseText);
       console.log(response)

       var japaneseWords = response.japaneseWord;
       var japaneseDefinitions = response.japaneseDefinition;


       var japaneseWordContent = '';
       var japaneseWordDefinitions = '';

       for (var i = 0; i < japaneseWords.length; i++) {
         japaneseWordContent += '<div class="tab-btn"><button class="contentButtons"><em class="mdi mdi-plus"></em>' + japaneseWords[i]+ '</button></div>';
       };
       for (var i = 0; i < japaneseDefinitions.length; i++) {
         japaneseWordDefinitions += '<div class="tab-content"><p>'+ japaneseDefinitions[i]+ '</p></div>';

       };

       document.getElementById('japaneseWords').innerHTML = japaneseWordContent;
       document.getElementById('japaneseDefinitions').innerHTML = japaneseWordDefinitions;
    };
};


xhttp.open("GET", "lessons.json", true);
xhttp.send();
