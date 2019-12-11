class CSSObject {
  constructor(...styles) {
    this.stylesheet = 
      styles.map((value) => value.toString());
  }

  css(selector, stylesheet) {
    return new CSSObject(
      ...this.stylesheet,
      css(selector, stylesheet).toString()
    );
  }

  toString() {
    return this.stylesheet.join('');
  }

  toArray() {
    return this.stylesheet;
  }

  toElement() {
    const styleTag = document.createElement("style");
    styleTag.appendChild(
      document.createTextNode(this.toString())
    );
    return styleTag;
  }
}

function css(selector, stylesheet) {
  // Check if tagged-template is used:
  const sel =
    Array.isArray(selector) ? selector[0].trim() : selector;

  // Add selector
  let cssString = `${sel}{`;

  // Array of pseudo-classes/elements:
  let pseudos = [];

  // Add each style rule:
  Object.keys(stylesheet).forEach((k) => {
    if (stylesheet.hasOwnProperty(k)) {
      if(k.startsWith("&:")){
        pseudos.push(
          css(k.replace("&", sel), stylesheet[k])
        )
      }
      else{
        const style = `${k.trim()}:${stylesheet[k].toString().trim()};`;
        cssString += style;
      }
    }
  });

  // End Brace
  cssString += "}";

  // Return CSSObject
  return new CSSObject(cssString, ...pseudos);
}


