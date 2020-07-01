    
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
