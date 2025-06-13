
const textInput = document.getElementById("text-input");
const wordCount = document.getElementById("word-count");
const charCount = document.getElementById("char-count");

textInput.addEventListener("input", function () {
  const text = textInput.value;

  
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  const characters = text.length;

  wordCount.textContent = words.length;
  charCount.textContent = characters;
});
