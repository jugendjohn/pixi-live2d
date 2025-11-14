(async () => {
  // Create PIXI Application
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x1099bb,
    resizeTo: window
  });

  // Append canvas to body
  document.body.appendChild(app.view);

  // Ensure Live2D plugin is loaded
  if (!PIXI.live2d) {
    console.error("PIXI.live2d is not loaded!");
    return;
  }
  const { Live2DModel } = PIXI.live2d;

  try {
    // Load the model from your asset folder
    const model = await Live2DModel.from('asset/haru_greeter_pro_jp/runtime/haru_greeter_t03.can3');

    // Position and scale the model
    model.scale.set(0.5);
    model.x = app.screen.width / 2;
    model.y = app.screen.height / 2;
    model.anchor.set(0.5, 0.5);

    // Add model to the stage
    app.stage.addChild(model);

    console.log("Live2D model loaded successfully!");
  } catch (err) {
    console.error("Failed to load Live2D model:", err);
  }
})();
