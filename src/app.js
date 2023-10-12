/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

//creating the variables
let pronouns = ["the", "our", "her", "him", "them"];
let adjectives = ["great", "big", "small", "average", "enormous", "doglike"];
let nouns = ["jogger", "racoon", "dog", "cat", "snake", "fish"];
let extensions = [".com", ".net", ".us", ".io", ".org"];
//let domainHacks = [".bad", ".help", ".notsure", ".vacation"];
let domainNames = [];
for (let pronoun of pronouns) {
  for (let adjective of adjectives) {
    for (let noun of nouns) {
      for (let extension of extensions) {
        domainNames.push("www." + pronoun + adjective + noun + extension);
        //this will print Domain Names to the console
        console.log(domainName);
      }
    }
  }
}
window.onload = function() {
  let HelpMe = document.getElementsByTagName("ul")[0];
  console.log(domainNames);
  domainNames.foreach(domainName => {
    let domainItem = document.createElement("li");
    domainItem.innerText = domainName;
    HelpMe.appendChild(domainItem);
  });
};
