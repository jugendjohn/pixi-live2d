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

  try {
    model = await Live2DModel.from(MODEL_PATH);
  } catch (err) {
    console.error("❌ MODEL LOAD ERROR:", err);
    return;
  }

  //
  // 3. Position + scale model
  //
  model.x = app.screen.width / 2;
  model.y = app.screen.height / 2;
  model.anchor.set(0.5, 0.5);
  model.scale.set(0.5);

  //
  // 4. Add to stage
  //
  app.stage.addChild(model);

  console.log("✅ Model loaded using pixi-live2d-display (Cubism 4).");
})();
