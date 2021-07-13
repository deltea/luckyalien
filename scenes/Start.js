// Start scene
class Start extends Phaser.Scene {
  // Constructor
  constructor() {
    super("Start");
  }

  // Load assets
  preload() {
    // Cursor
    this.load.image("cursor", "assets/imgs/cursor.png");

    // Background image
    this.load.image("background", "assets/imgs/background0.png");

    // Background music
    this.load.audio("background", "assets/sfx/start.mp3");
  }

  // Main create function
  create() {
    // Backgrond image
    game.background = this.add.tileSprite(0, -100, 1300, 1024, "background").setOrigin(0);

    // Title
    game.gameTitle = this.add.text(580, 100, "Alien", {
      fontFamily: "kenneyPixel",
      fontSize: 125,
      color: "#fff"
    });

    // Title tween
    game.gameTitle.hover = this.tweens.add({
      // Target
      targets: game.gameTitle,

      // Move
      y: 80,

      // Ease
      ease: "Quad.easeInOut",

      // Duration
      duration: 600,

      // Repeat forever
      repeat: -1,

      // Yoyo
      yoyo: true
    });

    // Play music
    sfx.startMusic = this.sound.add("background");
    sfx.startMusic.setLoop(true);
    sfx.startMusic.play();

    // Options
    game.startOptions = this.add.text(630, 321.5, "Play", {
      fontFamily: "kenneyPixel",
      fontSize: 60,
      color: "#000"
    });
  }

  // Update animations, sprites
  update() {
    // Scroll background image
    game.background.tilePositionX += 2;
  }
}
