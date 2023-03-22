let blockchainScore = 20;
let frontendScore = 70;

let totalScore = blockchainScore + frontendScore;

if (totalScore > 78) {
  console.log("Great");
} else if (totalScore > 50) {
  console.log("Good");
} else if (totalScore > 30) {
  console.log("Try harder");
} else {
  console.log("Sad ,.,.,.");
}
