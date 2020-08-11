
// typing practice js

    var newText = ["after all you are only an immortal until someone manages to kill you after that you were just long lived",
                    "as long as poverty injustice and gross inequality persist in our world none of us can truly rest",
                    "we  once you have tasted flight you will walk the earth with your eyes turned skywards for there you have been and there you will long to return",
                    "secwere like deaf people trying to dance to a beat we could not hear long after the music actually stopped",
                    "forurity is mostly a superstition it does not exist in nature nor do the children of men as a whole experience it avoiding danger is no safer in the long run than outright exposure life is either a daring adventure or nothing",
                    "time plays like an accordion in the way it can stretch out and compress itself in a thousand melodic ways months on end may pass blindingly in a quick series of chords open-shut together-apart and then a single melancholy week may seem like a year's pining one long unfolding note",
                    "life is beautiful as long as it consumes you when it is rushing through you destroying you life is gorgeous glorious It is when you burn a slow fire and save fuel that life is not worth having",
                    "before we can count we are taught to be grateful for what others do as we are broken open by our experience we begin to be grateful for what is and if we live long enough and deep enough and authentically enough gratitude becomes a way of life",
                    "this long run is a misleading guide to current affairs in the long run we are all dead economists set themselves too easy too useless a task if in tempestuous seasons they can only tell us that when the storm is long past the ocean is flat again",
                    "as long as I live I will hear waterfalls and birds and winds sing I will interpret the rocks learn the language of flood storm and the avalanche I will acquaint myself with the glaciers and wild gardens and get as near the heart of the world as I can"];

    document.getElementById("text").value = newText[Math.floor(Math.random()*10)];

    var correct = 0;
    var incorrect = 0;
    var x = document.getElementById("typing").value;
    var text = document.getElementById("text").value;
    var words = 1;
    var textIndex = 0;
    var s = 10;
    var timeout = null;

    $("#typing").keydown(function (event) {
        event = event || window.event;
        // Get the pressed key code
        const charCode = event.which || event.keyCode;
        // Read it as a normal key
        const charTyped = String.fromCharCode(charCode);

        if(charTyped.toLowerCase() === text.charAt(textIndex).toLowerCase()){
            correct++;
        }
        else{
            incorrect++;
            charTyped.fontcolor("red");
        };

        if(charTyped === " "){
            document.getElementById("typing").value = null;
            // reset();
            document.getElementById("text").value = text.substr(textIndex + 1, text.length);
            text = document.getElementById("text").value;
            textIndex = -1
            words++;
            
        }

        textIndex++;

        if(charCode === 8){  // Backspace key
           
            textIndex = textIndex - 2;
            incorrect--;
            correct--;
        }

        if(textIndex === text.length){
            reset();
        }

      

        console.log(charTyped)

    
  })
  
function submit(){
    scoreModal.style.display = "block";
    document.getElementById("typing").value = "";
    console.log(x);
    console.log(typeof(x));

    document.getElementById("correct").innerHTML = correct;
    document.getElementById("incorrect").innerHTML = incorrect;
    document.getElementById("words").innerHTML = words;
    reset();
    restart();
    clearTimeout(timeout);
    document.getElementById("typing").disabled = true;
    //return false;
}

function closeModal(){
    scoreModal.style.display = "none";
}


function start(){
    document.getElementById("typing").disabled = false;
    if(s == -1){
        clearTimeout(timeout);
        //alert("time out");
        submit();
        return false;
    }
    document.getElementById('s').innerText = s.toString();
    timeout = setTimeout(function(){
        s--;
        start();
    },1000);

}
function restart(){
    correct = 0;
    incorrect = 0;
    x = document.getElementById("typing").value;
    text = document.getElementById("text").value;
    words = 1;
    textIndex = 0;
    s = 60;
    clearTimeout(timeout);
    document.getElementById('s').innerText = s.toString();
    document.getElementById("typing").value = "";
}
    
function reset(){
    document.getElementById("text").value = newText[Math.floor(Math.random()*10)];
    text = " " + document.getElementById("text").value;
    textIndex = 0;
}

// login click js

var Logincontain = document.getElementById("Logincontainer");
function login(){
    Logincontain.style.display = "block"
}


window.onclick = function(event) {
    if (event.target == Logincontain) {
        Logincontain.style.display = "none";
    }
}

// typing test js

    var newTextTest =  [   "typing is quite easy and enjoyable when you have learned to do it correctly. it is amazing just how quick you can be when you learn to touch type all the letters exactly, from a to z. just relax and realize that typing with excellent accuracy is far better than typing fast; you will find it is quicker in the end.",
                        "I love you the more in that I believe you had liked me for my own sake and for nothing else",
                        "But man is not made for defeat. A man can be destroyed but not defeated",
                        "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward",
                        "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself"
                    ];

    document.getElementById("textTest").value = newTextTest[Math.floor(Math.random()*5)];


    var textTestIndex = 0;
    var textTest = document.getElementById("textTest").value;


    $("#typingTest").keydown(function (event) {
        event = event || window.event;
        // Get the pressed key code
        const charCode = event.which || event.keyCode;
        // Read it as a normal key
        const charTyped = String.fromCharCode(charCode);


        if(charTyped === " "){
            document.getElementById("typingTest").value = null;
            // reset();
            document.getElementById("textTest").value = textTest.substr(textTestIndex + 1, textTest.length);
            textTest = document.getElementById("textTest").value;
            textTestIndex = -1
        }

        textTestIndex++;

        if(charCode === 8){  // Backspace key
        
            textTestIndex = textTestIndex - 2;
        }

        if(textTestIndex === textTest.length){
            resetTypingTest();
        }


    })

    function startTypingTest(){
        document.getElementById("typingTest").disabled = false;
    }

    function resetTypingTest(){
        document.getElementById("textTest").value = newTextTest[Math.floor(Math.random()*5)];
        textTest = " " + document.getElementById("textTest").value;
        textTestIndex = 0;
    }