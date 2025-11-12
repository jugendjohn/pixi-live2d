(async () => {
  // Make PIXI accessible for the plugin
  window.PIXI = PIXI;

  // Create the PIXI application
  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x1099bb,
    resizeTo: window
  });

  // Add the canvas to the document
  document.body.appendChild(app.view);

  // Load the Live2D plugin
  const { Live2DModel } = PIXI.live2d;

  try {
    // ✅ Use the main model3.json file in the runtime folder
    const model = await Live2DModel.from(
      'https://github.com/jugendjohn/pixi-live2d/tree/main/asset/haru_greeter_pro_jp/runtime/haru_greeter_t05.model3.json'
    );

    // Center the model
    model.anchor.set(0.5);
    model.x = app.screen.width / 2;
    model.y = app.screen.height / 2;
    model.scale.set(0.5);

    // Add to the stage
    app.stage.addChild(model);

    // Handle window resize
    window.addEventListener('resize', () => {
      model.x = app.screen.width / 2;
      model.y = app.screen.height / 2;
    });

    // Simple idle animation
    app.ticker.add(() => {
      model.rotation = Math.sin(Date.now() * 0.001) * 0.02;
    });
  } catch (err) {
    console.error('❌ Failed to load Live2D model:', err);
  }
})();
