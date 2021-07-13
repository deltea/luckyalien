// Start scene
class Start extends Phaser.Scene {
  // Constructor
  constructor() {
    super("Start");
  }

  // Load assets
  preload() {
    // Cursor
    this.load.image("cursor", "assets/imgs/cursor.png")
  }

  // Main create function
  create() {
    // Title
    game.gameTitle = this.add.text(580, 200, "Alien", {
      fontFamily: "kenneyPixel",
      fontSize: 125,
      color: "#fff"
    });
  }

  // Update animations, sprites
  update() {

  }
}
