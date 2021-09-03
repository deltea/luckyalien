// Credits
class Credits extends Phaser.Scene {
  // Constructor
  constructor() {
    super("Credits");
  }

  // Load assets
  preload() {
    // Load credits music
    this.load.audio("credits", "assets/sfx/credits.mp3");
  }

  // Main create function
  create() {
    // Load music
    sfx.credits = this.sound.add("credits");

    // Play music
    sfx.credits.setLoop(true);
    sfx.credits.play();

    // Credits title
    game.creditsTitle = this.add.text(550, 321.5, "Credits", {
      fontFamily: "kenneyPixel",
      fontSize: 100,
      color: "#f5f5f5"
    }).setOrigin(0, 0);

    // Credits
    game.credits = this.add.text(400, 500, "Programmer: thcheetah777\nGraphics: Kenney.nl\nMusic: Kirby\nFramework: Phaser.js\nLevel design: thcheetah777 and sister\nGame Testers: Willem and Nells\n\n\n\n\n\n\n              Thanks for playing!", {
      fontFamily: "kenneyPixel",
      fontSize: 50
    });

    // Timer
    game.credits.timer = 0;
  }

  // Update animations, sprites
  update() {
    // Move credits
    game.creditsTitle.y--;
    game.credits.y--;

    // Increment timer
    game.credits.timer++;
    if (game.credits.timer >= 800) {
      this.scene.pause();
    }
  }
}
