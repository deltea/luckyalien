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
    game.gameTitle = this.add.text(580, 200, "Alien", {
      fontFamily: "kenneyPixel",
      fontSize: 125,
      color: "#fff"
    });

    // Play music
    sfx.startMusic = this.sound.add("background");
    sfx.startMusic.setLoop(true);
    sfx.startMusic.play();
  }

  // Update animations, sprites
  update() {
    // Scroll background image
    game.background.tilePositionX += 2;
  }
}
