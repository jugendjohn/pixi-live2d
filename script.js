(async () => {
  // Create PIXI Application
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x1099bb,
    resizeTo: window // automatically resize canvas
  });

  // Append the canvas to the body
  if (!app.view) {
    console.error("PIXI app.view is undefined! Make sure PIXI.js is loaded correctly.");
    return;
  }
  document.body.appendChild(app.view);

  // Make sure Live2D plugin is loaded
  if (!PIXI.live2d) {
    console.error("PIXI.live2d is not loaded! Include pixi-live2d.min.js via CDN or locally.");
    return;
  }
  const { Live2DModel } = PIXI.live2d;

  try {
    // Load the model from the correct asset path
    const model = await Live2DModel.from('asset/haru_greeter_pro_jp/runtime/haru_greeter_t03.can3');

    // Scale and position
    model.scale.set(0.5); // adjust size
    model.anchor.set(0.5, 0.5);
    model.x = app.screen.width / 2;
    model.y = app.screen.height / 2;

    // Add model to stage
    app.stage.addChild(model);

    console.log("Live2D model loaded successfully!");
  } catch (err) {
    console.error("Failed to load Live2D model:", err);
  }

  // Optional: handle window resize
  window.addEventListener("resize", () => {
    model.x = app.screen.width / 2;
    model.y = app.screen.height / 2;
  });
})();
