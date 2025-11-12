// Create a PixiJS app
const app = new PIXI.Application({ 
  width: 800, 
  height: 600, 
  backgroundColor: 0x1099bb 
});
document.body.appendChild(app.view);

// Add a sprite
const sprite = PIXI.Sprite.from("https://pixijs.io/examples/examples/assets/bunny.png");
sprite.anchor.set(0.5);
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;
app.stage.addChild(sprite);

// Animate
app.ticker.add(() => {
  sprite.rotation += 0.05;
});