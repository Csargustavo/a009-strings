const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const semEpaço = minhaString.trim();
console.log(`a string possui ${minhaString.length} caracteres, apos remover os espaços fica ${semEpaço.length}`)

const novaString = minhaString.replaceAll("_______","stilicioso")
console.log(novaString);