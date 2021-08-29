document.addEventListener("DOMContentLoaded", function () {
  let attempts = 10;
  const template3 = `
  <h1>Attempts: ${attempts}</h1>
  `;
  document.querySelector("#attempts").innerHTML = template3;
  const createLetterChocies = () => {
    fetch(`/api/words`)
      .then((res) => {
        return res.json(res);
      })
      .then((data) => {
        const word = data[getRandomInt(data.length)].word.split("");
        console.log("***word", word);
        let template = "";
        word.forEach((letter) => {
          template += `
          <div class="letter-spot" data="${letter.toUpperCase()}">
            _
          </div>
        `;
        });
        document.querySelector("#word-display").innerHTML = template;
      });
  };
  createLetterChocies();

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const revealLetter = (allLetterSpot) => {
    allLetterSpot.forEach((spot) => {
      const selectedLetter = event.target.textContent;
      const spotLetter = spot.getAttribute("data");
      console.log("*******", selectedLetter, spotLetter);
      if (selectedLetter === spotLetter) {
        spot.textContent = selectedLetter;
      }
    });
  };

  const checkWin = (allLetterSpot) => {
    //check if we won - see if we found all the letter
    let flag = true;
    allLetterSpot.forEach((letter) => {
      console.log("*****letter",letter);
      console.log("*****letter.textContent",letter.textContent);
      console.log("*****letter.textContent is",letter.textContent.trim() === "_");
      if (letter.textContent.trim() === "_") {
        flag = false;
      }
    });
    return flag;
  };

  document.querySelector(".userButtons").addEventListener("click", (event) => {
    if (event.target.className.includes("letter-Btn")) {
      attempts--;
      const template3 = `
  <h1>Attempts: ${attempts}</h1>
  `;
  document.querySelector("#attempts").innerHTML = template3;
      console.log("attempts", attempts);
      if (attempts > 0) {
        //show the leter on the right spot
        const allLetterSpot = document.querySelectorAll(".letter-spot");
        revealLetter(allLetterSpot);
        const didWin = checkWin(allLetterSpot);
        if (didWin) {
          const template2 = `
            <h1>YOU WIN</h1>
            `;
          document.querySelector("#you-win").innerHTML = template2;
        }
      } else if (attempts == 0) {
        //do the lose stuff here
        const template = `
          <h1>YOU LOSE</h1>
          `;
        document.querySelector("#you-lose").innerHTML = template;
      }
    }
  });
});
