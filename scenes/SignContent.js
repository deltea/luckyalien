// Sign content
class SignContent extends Phaser.Scene {
  // Constructor
  constructor() {
    super("SignContent");
  }

  // Load assets
  preload() {
    // No assets
  }

  // Main create function
  create() {
    // Set background color
    // HACK: Don't know how to set background color
    game.background = this.add.rectangle(0, 0, config.width, config.height, 0xae7640).setOrigin(0, 0);

    // Sign title
    this.add.text(580, 50, "Sign:", {
      fontFamily: "kenneyPixel",
      fontSize: 125,
      color: "#fff"
    });

    // Sign content
    game.signText = this.add.text(100, 200, "", {
      fontFamily: "kenneyPixel",
      fontSize: 80,
      color: "#fff"
    });

    let i = 0;
    this.time.addEvent({
      // Time
      delay: 50,

      // Callback
      callback: () => {
        game.signText.text += game.signContent[i];
        i++;
      },
      callbackScope: this,

      // Options
      repeat: game.signContent.length - 1
    });
  }

  // Update animations, sprites
  update() {
  }
}
