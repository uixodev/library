const canvas = document.getElementById("canvas");
const pencil = canvas.getContext("2d");

const dpr = window.devicePixelRatio || 1;

canvas.width = cw * dpr;
canvas.height = ch * dpr;

pencil.scale(dpr, dpr);
