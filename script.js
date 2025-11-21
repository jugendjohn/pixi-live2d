(async () => {
  //
  // 1. Check PIXI loaded
  //
  if (typeof PIXI === "undefined") {
    console.error("❌ PIXI NOT LOADED — pixi.min.js failed");
    return;
  }

  //
  // 2. Create PIXI Application safely
  //
  let app;
  try {
    app = new PIXI.Application({
      background: "#1099bb",
      resizeTo: window
    });
  } catch (e) {
    console.error("❌ PIXI Application failed:", e);
    return;
  }

  //
  // 3. Make sure renderer exists
  //
  if (!app.renderer) {
    console.error("❌ app.renderer is undefined — PIXI build incorrect");
    return;
  }

  //
  // 4. Make sure canvas exists
  //
  if (!app.view) {
    console.error("❌ app.view is undefined — cannot append canvas");
    return;
  }

  document.body.appendChild(app.view);

  //
  // 5. Check Live2D plugin loaded
  //
  if (!PIXI.live2d) {
    console.error("❌ pixi-live2d plugin NOT LOADED");
    return;
  }

  const { Live2DModel } = PIXI.live2d;

  //
  // 6. Load model
  //
  try {
    console.log("Loading model...");

    const model = await Live2DModel.from(
      "asset/haru_greeter_pro_jp/runtime/haru_greeter_t03.can3"
    );

    //
    // 7. Position model
    //
    model.anchor.set(0.5);
    model.scale.set(0.5);
    model.x = app.screen.width / 2;
    model.y = app.screen.height / 2;

    app.stage.addChild(model);

    console.log("✅ Model loaded!");
  } catch (err) {
    console.error("❌ MODEL LOAD ERROR:", err);
  }
})();
