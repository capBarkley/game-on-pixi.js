var app = new PIXI.Application();
document.body.appendChild(app.view);

PIXI.loader
    .add('img/character/png/knight.json')
    .load(onAssetsLoaded);

function onAssetsLoaded()
{
    // create an array of textures from an image path
    var frames = [];

    for (var i = 0; i < 10; i++) {
        var val = i < 10 ? '0' + i : i;

        // magically works since the spritesheet was loaded with the pixi loader
        frames.push(PIXI.Texture.fromFrame('rollSequence00' + val + '.png'));
    }

    // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
    var anim = new PIXI.extras.AnimatedSprite(frames);

    /*
     * An AnimatedSprite inherits all the properties of a PIXI sprite
     * so you can change its position, its anchor, mask it, etc
     */
    anim.x = app.screen.width / 4;
    anim.y = app.screen.height / 1.5;
    anim.anchor.set(0.5);
    anim.animationSpeed = 0.2;
    anim.play();

    app.stage.addChild(anim);

    // Animate the rotation
   /* app.ticker.add(function() {
        anim.rotation += 0.01;
    });*/
}
