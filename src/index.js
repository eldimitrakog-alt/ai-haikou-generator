function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0t6ef4f887495d65a4537f2face0bo0b";
  let context =
    "You are a Haikou expert and you will generate a haikou in english based on the user's instructions. Your mission is to generate a 3 line poem  and separate each line with a <br />.The haikou should be 3 lines long, with 5 syllables in the first line, 7 syllables in the second line, and 5 syllables in the third line. The haikou should be about the topic that the user has provided in their instructions.At he end of the Haikou you should sign as 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";

  let prompt = `User instructions: Generate a Haikou poem about ${instructionsInput.value}`;
  // prettier-ignore
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Haikou poem about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
