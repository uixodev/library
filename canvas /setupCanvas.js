// const canvas = document.getElementById("canvas");
// const pencil = canvas.getContext("2d");

// const dpr = window.devicePixelRatio || 1;

// canvas.width = cw * dpr;
// canvas.height = ch * dpr;

// pencil.scale(dpr, dpr);

export function setupCanvas(canvas, width, height) {
  const pencil = canvas.getContext("2d");

  const dpr = window.devicePixelRatio || 1;

  canvas.width = width * dpr;
  canvas.height = height * dpr;

  pencil.scale(dpr, dpr);

  return pencil;
}
