(async () => {
  if (typeof PIXI === "undefined") {
    console.error("❌ PIXI NOT LOADED");
    return;
  }

  if (typeof Live2DModel === "undefined") {
    console.error("❌ pixi-live2d-display NOT LOADED");
    return;
  }

  const app = new PIXI.Application({
    background: "#1099bb",
    resizeTo: window,
  });

  document.body.appendChild(app.view);

  const MODEL_PATH = "asset/haru_greeter_pro_jp/runtime/haru_greeter_t03.model3.json";

  try {
    const model = await Live2DModel.from(MODEL_PATH);

    model.anchor.set(0.5);
    model.scale.set(0.5);
    model.position.set(app.screen.width / 2, app.screen.height / 2);

    app.stage.addChild(model);
  } catch (err) {
    console.error("❌ MODEL LOAD ERROR:", err);
  }
})();
