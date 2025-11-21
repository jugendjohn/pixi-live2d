import * as PIXI from 'pixi.js';
import { Live2DModel } from 'pixi-live2d-display';
window.PIXI = PIXI;

(async () => {
  // Safety check: PIXI loaded?
  if (typeof PIXI === "undefined") {
    console.error("❌ PIXI NOT LOADED — check pixi.min.js");
    return;
  }

  // Safety check: Live2D plugin loaded?
  if (typeof Live2DModel === "undefined") {
    console.error("❌ pixi-live2d-display NOT LOADED");
    return;
  }

  //
  // 1. Create PIXI Application
  //
  const app = new PIXI.Application({
    background: "#1099bb",
    resizeTo: window,
  });

  document.body.appendChild(app.view);

  //
  // 2. Load Live2D Cubism 4 model
  //
  const MODEL_PATH =
    "asset/haru_greeter_pro_jp/runtime/haru_greeter_t03.model3.json";

  let model;

(async function () {
  const app = new PIXI.Application({
    view: document.getElementById('canvas'),
  });

  const model = await Live2DModel.from(PMODEL_ATH);
  app.stage.addChild(model);
  //
  // 3. Position + scale model
  //
  model.x = 100;
  model.y = 100;
  model.rotation = Math.PI;
  model.skew.x = Math.PI;
  model.scale.set(2, 2);
  model.anchor.set(0.5, 0.5);
  // interaction
  model.on('hit', (hitAreas) => {
    if (hitAreas.includes('body')) {
      model.motion('tap_body');
  //
  // 4. Add to stage
  //
  app.stage.addChild(model);

  console.log("✅ Model loaded using pixi-live2d-display (Cubism 4).");
})();
