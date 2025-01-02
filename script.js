var factList = [
  "More than 1 in 6 children — 12.5 million—lived in food-insecure households in 2017.",
  "Today, there are an estimated 17 million children struggling with hunger in America – 6 million more than before the pandemic.",
  "The percent of Black (25.6 percent) and Hispanic households with food-insecure children (24.3 percent) was nearly two times that of white households (13.2 percent) in 2016.",
  "In 2018, 63 percent of food-insecure households were in the labor force; 53 percent were households with full-time workers.",
  "Research shows that food insecurity leads to increased risk of mental health challenges, poor interpersonal skills, difficulty being engaged in the classroom as well as tardiness and absence from school.",
  "Students that participate in school breakfast show improved behavior, attendance and academic performance.",
  "In summer 2018, the Summer Food Service Program and the Summer Option through the National School Lunch Program served only 14 percent of children who received free or reduced-price lunch during the 2017-2018 school year.",
  "With 30 million children in the U.S. depending on school for meals, school closures and loss of family income mean food insecurity rates will rise."
];


var myBtn = document.getElementById("myBtn");
var fact = document.getElementById("fact");
var count = 0;


myBtn.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}