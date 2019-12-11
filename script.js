function ce(tag, attrs = {}, ...kids){
  // Create Element
  const el = document.createElement(tag);

  // Add attributes
  Object.keys(attrs).forEach((name) => {
    if(attrs.hasOwnProperty(name)){
      el.setAttribute(name, attrs[name]);
    }
  });

  // Add children
  kids.forEach((c) => {
    if(typeof c == "string")
      el.appendChild(document.createTextNode(c));
    else el.appendChild(c);
  });

  // Return element
  return el;
}

class StyledComponent extends HTMLElement {
  constructor(){
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  connectedCallback(){
    this.shadow.appendChild(this.style);
    this.shadow.appendChild(this.render);
  }
}

class test extends StyledComponent {
  get style() {
    return css(
      "h1", {
        "color": "royalblue",
        "background": "cornflowerblue",
        "padding": "10px",
        "transition": "color 0.5s ease-in-out, background 0.5s ease-in-out",
        "&:hover": {
          "background": "#003366",
          "color": "black"
        }
      }).css(
      "h1::before", {
        "content": "attr(text)"
      }
    ).toElement();
  }

  get render() {
    return ce("h1", {}, "XDDD");
  }
}

customElements.define("test-el", test);


const coolButton = {
  "background": "black",
  "color": "white",
  "border": "2px blue solid",
  "transition": "all 0.5s ease-in-out",

  "&:hover": {
    "background": "white",
    "color": "black"
  }
};

const btnStyle = (
  css`button ${{
  ...coolButton,
  "&:before": {
    "content": "attr(b4)"
  },
  "&:after": {
    "content": "attr(aphtr)"
  }
  }}`
).toElement();

document.body.appendChild(btnStyle);
