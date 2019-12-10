const style = css(
  "*", {
    "padding": 0,
    "margin": 0,
    "box-sizing": "border-box",
    "text-align": "center",
    "font-family": "sans-serif"
  }
).css(
  "header", {
    "background": "cornflowerblue",
    "color": "white",
    "padding": "10px"
  }
).css(
  "body", {
    "background": "royalblue",
    "height": "100vh"
  }  
).css(
  "p", {
    "color": "royalblue",
    "font-size": "20px"  
  }
).css(
  "*:not(html):not(body)", {
    "margin": "5px;"
  }
).toElement();

document.body.appendChild(style);