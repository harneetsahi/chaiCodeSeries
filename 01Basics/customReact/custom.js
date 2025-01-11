function customRender(reactEl, container) {
  const domEl = document.createElement(reactEl.type);

  domEl.innerHTML = reactEl.children;

  for (const prop in reactEl.props) {
    if (prop === "children") continue;

    domEl.setAttribute(prop, reactEl.props[prop]);
  }

  container.appendChild(domEl);
}

const reactEl = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const container = document.getElementById("root");

customRender(reactEl, container);
