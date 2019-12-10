function CSS(selector, stylesheet){
  // Check if tagged-template is used:
  const sel = 
    Array.isArray(selector) ? selector[0] : selector;

  // Add selector
  let cssString = `${sel.trim()}{`;
  
  Object.keys(stylesheet).forEach((k) => {
    if(stylesheet.hasOwnProperty(k)){
      const style = `${k.trim()}:${stylesheet[k].trim()};`;
      cssString += style;
    }
  });
  cssString += "}";

  return cssString;
}

console.log(CSS(
  "#test", {
    "background": "none"
  }
));

console.log(CSS`#title ${{
  "background": "none",
  "color": "red",
  "--css-var": "100%"
}}`);