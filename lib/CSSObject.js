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
    Array.isArray(selector) ? selector[0] : selector;

  // Add selector
  let cssString = `${sel.trim()}{`;

  // Add each style rule:
  Object.keys(stylesheet).forEach((k) => {
    if (stylesheet.hasOwnProperty(k)) {
      const style = `${k.trim()}:${stylesheet[k].toString().trim()};`;
      cssString += style;
    }
  });

  // End Brace
  cssString += "}";

  // Return CSSObject
  return new CSSObject(cssString);
}


