(async () => {
  window.PIXI = PIXI;

  const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x1099bb,
    resizeTo: window
  });

  document.body.appendChild(app.view);

  const { Live2DModel } = PIXI.live2d;

  try {
    const model = await Live2DModel.from(
      'https://jugendjohn.github.io/pixi-live2d/asset/haru_greeter_pro_jp/runtime/haru_greeter_t05.model3.json'
    );

    model.anchor.set(0.5);
    model.x = app.screen.width / 2;
    model.y = app.screen.height / 2;
    model.scale.set(0.5);

    app.stage.addChild(model);

    window.addEventListener('resize', () => {
      model.x = app.screen.width / 2;
      model.y = app.screen.height / 2;
    });

    app.ticker.add(() => {
      model.rotation = Math.sin(Date.now() * 0.001) * 0.02;
    });
  } catch (err) {
    console.error('❌ Failed to load Live2D model:', err);
  }
})();
