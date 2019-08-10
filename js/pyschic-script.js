
      var wintracker = document.querySelector("#W")
      var losstracker = document.querySelector("#L")
      var choicetracker = document.querySelector("#choices")
      var livestracker = document.querySelector("#lives")

      let win = 0;
      let loss = 0;
      let chances = 5;

      const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
      function reset() {
        chances = 5
        selected.length = 0
        randomletter()
      }
      let randlet ;
      function randomletter() {
        return randlet = alphabet[Math.floor(Math.random() * alphabet.length)]
      };
      
      randomletter();
      const selected = []
      document.onkeyup = function(event){
        const keypress = event.key
        if (keypress === randlet) {
          win++ 
          wintracker.innerHTML = "Wins: " + win
          reset()
        }
        else {
          chances--
          livestracker.innerHTML = "Chances left: " + chances
          selected.push(keypress)
        } 
        if (chances === 0) {
          loss++
          losstracker.innerHTML = "Losses: " + loss
          reset()
        }
        console.log(choicetracker.innerHTML = "Letter(s) selected: " + selected)
        };
        

    