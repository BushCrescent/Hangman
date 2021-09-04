document.querySelector("#add-word-form").addEventListener("submit", (event) => {
  // get the data
  const userInput = document.querySelector("#word").value;
  // contruct the data
  const dataEntry = {
    word: userInput,
  };
  //post the data to a route
  fetch("/api/create-word", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataEntry),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
