// Instructions scene
class Instructions extends Phaser.Scene {
  // Constructor
  constructor() {
    super("Instructions");
  }

  // Load assets
  preload() {
    // Cursor
    this.load.image("cursor", "assets/imgs/cursor.png");

    // Background image
    this.load.image("background", "assets/imgs/background0.png");

    // Background music
    this.load.audio("statrBackground", "assets/sfx/start.mp3");
  }

  // Main create function
  create() {
    // Backgrond image
    game.background = this.add.tileSprite(0, -100, 1300, 1024, "background").setOrigin(0);

    // Play music
    sfx.startMusic = this.sound.add("statrBackground");
    sfx.startMusic.setLoop(true);
    sfx.startMusic.play();

    // Instructions
    const instructions = "It's just a normal day in alienland... \n\n                    Move: Arrow keys \n                Use Powerups: X, C Keys";
    game.instructions = this.add.text(300, 220, instructions, {
      fontFamily: "kenneyPixel",
      fontSize: 70,
      color: "#4D4D4D"
    });

    // Hover instructions
    game.gameTitle.hover = this.tweens.add({
      // Target
      targets: game.instructions,

      // Move
      y: 200,

      // Ease
      ease: "Quad.easeInOut",

      // Duration
      duration: 600,

      // Repeat forever
      repeat: -1,

      // Yoyo
      yoyo: true
    });

    // Cursor
    game.chooseCursor = this.add.image(600, 600, "cursor");
    game.chooseCursor.selection = "back";

    // Cursor tween
    game.chooseCursor.hover = this.tweens.add({
      // Target
      targets: game.chooseCursor,

      // Move
      x: 580,

      // Ease
      ease: "Quad.easeInOut",

      // Duration
      duration: 600,

      // Repeat forever
      repeat: -1,

      // Yoyo
      yoyo: true
    });

    // Options
    game.backOption = this.add.text(630, 571.5, "Back", {
      fontFamily: "kenneyPixel",
      fontSize: 60,
      color: "#d1d1d1"
    });
  }

  // Update animations, sprites
  update() {
    // Scroll background image
    game.background.tilePositionX += 2;

    // Cursor functionality
    const RIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    if (Phaser.Input.Keyboard.JustDown(RIGHT)) {
      sfx.startMusic.stop();
      this.scene.start("Start");
    }
  }
}
