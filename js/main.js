var rot = r(1, 360);

var svgDef = `
<svg width="100%" height="100%">
            <defs>
<pattern id="polka-dots" x="0" y="0" width="100" height="100"patternUnits="userSpaceOnUse" 
patternTransform="rotate(${rot})">
    ${Circle()}
    ${Line()}
    ${Line()}
    ${Poly()}
</pattern>
</defs>

<rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"></rect>
</svg>`;

document.querySelector(".background").innerHTML = svgDef;

function r(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function BackgroundRect() {
  let colour = rColour();
  return `<rect fill="${colour}" x="0" width="100" height="100"></rect>`;
}

function Circle() {
  let radius = r(1, 50);
  let xPos = r(1 + radius, 100 - radius);
  let yPos = r(1 + radius, 100 - radius);
  let colour = rColour();
  console.log(radius, xPos, yPos)
  return `<circle fill="${colour}" cx="${xPos}" cy="${yPos}" r="${radius}">
    </circle>`;
}

function Line() {
  let x1 = r(1, 100),
    x2 = r(1, 100),
    y1 = r(1, 100),
    y2 = r(1, 100);
  let colour = rColour();

  return `<line stroke="${colour}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"></line>`;
}

function Poly() {
  let points = [];
  for (let i = 0; i < 4; i++) {
    points.push(r(1, 100) + "," + r(1, 100));
  }
  points = points.join(" ");
  let colour = rColour();
  return `<polygon points="${points}" fill="${colour}" />`;
}

function rColour() {
  return "#" + r(0, 16777215).toString(16);
}