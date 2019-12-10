const test = css("*", {
  "padding": 0,
  "margin": 0,
  "font-size": 12
}).css("h1", {
  "color": "cornflowerblue"
}).toElement();

const test2 = css(
  "h1", {
    "color": "purple"
  }).css(
  "p", {
    
  }
);

document.body.appendChild(test);
document.body.innerText += test2.toString();
