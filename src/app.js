/* eslint-disable */
import "bootstrap";
import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

window.onload = function getDomain() {
  //write your code here
  let pronouns = ["the", "our", "her", "him", "them"];
  let adjectives = ["great", "big", "small", "average", "enormous", "doglike"];
  let nouns = ["jogger", "racoon", "dog", "cat", "snake", "fish"];
  let extensions = [".com", ".net", ".us", ".io", ".org"];
  let domainHacks = [".bad", ".help", ".notsure", ".vacation"];

  let domainName = [];
  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          let domainName = pronoun + adjective + noun + extension;
          //this will print Domain Names to the console
          console.log(domainName);
        }
      }
    }
  }
  let domainHackName = [];
  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          for (let hack of domainHacks) {
            let domainHackName = pronoun + adjective + noun + extension + hack;
            //this will print Domain Names to the console
            console.log(domainHackName);
          }
        }
      }
    }
  }
const myDOMDomain[0].getElementById = domainName;
myDomDomain[0].innerText = getDomain;
console.log(myDOMDomain[0]);

  /*document.getElementById.domainName = `<ul>${domainName.map(
    domainName => `<li>${domainName}</li>`
  )}</ul>`;
  document.getElementById.domainHacks = `<ul>${domainHacks.map(
    domainHacks => `<li>${domainHacks}</li>`
  )}</ul>`;*/
};
