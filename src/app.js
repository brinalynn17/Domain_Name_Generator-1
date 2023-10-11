/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function getDomain() {
  //write your code here
  let pronouns = ["the", "our", "her", "him", "them"];
  let adjectives = ["great", "big", "small", "average", "enormous", "doglike"];
  let nouns = ["jogger", "racoon", "dog", "cat", "snake", "fish"];
  let extensions = [".com", ".net", ".us", ".io", ".org"];
  let domainHacks = [".bad", ".help", ".notsure", ".vacation"];

  /*function setElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }*/
  let domainName = [];
  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          domainName.push(`${pronoun}${adjective}${noun}${extension}`);

          //this will print Domain Names to the console
          console.log(domainName);
        }
      }
    }
  }
  //trying my luck at adding the domain hack

  let domainHackName = [];
  for (let pronoun of pronouns) {
    for (let adjective of adjectives) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          for (let hack of domainHacks) {
            domainHackName.push(
              `${pronoun}${adjective}${noun}${extension}${hack}`
            );
            console.log(domainHackName);

            document.body.innerHTML = `<ul>${domainName.map(
              domainName => `<li>${domainName}</li>`
            )}</ul>`;
            document.body.innerHTML = `<ul>${domainHackName.map(
              domainHackName => `<li>${domainHackName}</li>`
            )}</ul>`;
          }
        }
      }
    }
  }
};
