(async () => {
  // Create PIXI application
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x1099bb,
    resizeTo: window
  });

  document.body.appendChild(app.view);

  // Ensure Live2D plugin exists
  if (!PIXI.live2d) {
    console.error("PIXI.live2d is not loaded. Check your script includes!");
    return;
  }

  const { Live2DModel } = PIXI.live2d;

  try {
    // Load the model
    const model = await Live2DModel.from('haru_greeter_pro_jp/runtime/haru_greeter_t03.can3');

    // Optional: position and scale
    model.scale.set(0.5); // adjust size
    model.x = app.screen.width / 2;
    model.y = app.screen.height / 2;
    model.anchor.set(0.5, 0.5);

    // Add to stage
    app.stage.addChild(model);

    console.log("Live2D model loaded successfully!");
  } catch (err) {
    console.error("Failed to load Live2D model:", err);
  }
})();
