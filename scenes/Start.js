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
    this.load.audio("statrBackground", "assets/sfx/start.mp3");
  }

  // Main create function
  create() {
    // Backgrond image
    game.background = this.add.tileSprite(0, -100, 1300, 1024, "background").setOrigin(0);

    // Title
    game.gameTitle = this.add.text(450, 100, "Lucky Alien", {
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
    sfx.startMusic = this.sound.add("statrBackground");
    sfx.startMusic.setLoop(true);
    sfx.startMusic.play();

    // Cursor
    game.chooseCursor = this.add.image(600, 350, "cursor");
    game.chooseCursor.selection = "start";

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
    game.startOptions = this.add.text(630, 321.5, "Play", {
      fontFamily: "kenneyPixel",
      fontSize: 60,
      color: "#d1d1d1"
    });
    game.instructionsOption = this.add.text(630, 381.5, "How to Play", {
      fontFamily: "kenneyPixel",
      fontSize: 60,
      color: "#d1d1d1"
    });
    game.githubOption = this.add.text(630, 441.5, "GitHub", {
      fontFamily: "kenneyPixel",
      fontSize: 60,
      color: "#d1d1d1"
    });

    // Press right to select
    game.selectInstruction = this.add.text(510, 580, "Press right to select", {
      fontFamily: "upheaval",
      fontSize: 30,
      color: "#4D4D4D"
    });

    // Blink event
    game.selectInstruction.hover = this.tweens.add({
      // Target
      targets: game.selectInstruction,

      // Ease
      ease: "Linear",

      // Stay where it is
      x: game.selectInstruction.x,

      // Duration
      duration: 600,

      // Callback
      onYoyo: () => {
        game.selectInstruction.visible = false;
      },
      onRepeat: () => {
        game.selectInstruction.visible = true;
      },

      // Repeat forever
      repeat: -1,

      // Yoyo
      yoyo: true
    });
  }

  // Update animations, sprites
  update() {
    // Scroll background image
    game.background.tilePositionX += 2;

    // Cursor functionality
    const DOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    const UP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    const RIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    if (Phaser.Input.Keyboard.JustDown(DOWN)) {
      if (game.chooseCursor.selection === "instructions") {
        game.chooseCursor.selection = "github";
        game.chooseCursor.y += 60;
      } else if (game.chooseCursor.selection === "start") {
        game.chooseCursor.selection = "instructions";
        game.chooseCursor.y += 60;
      }
    }
    if (Phaser.Input.Keyboard.JustDown(UP)) {
      if (game.chooseCursor.selection === "github") {
        game.chooseCursor.selection = "instructions";
        game.chooseCursor.y -= 60;
      } else if (game.chooseCursor.selection === "instructions") {
        game.chooseCursor.selection = "start";
        game.chooseCursor.y -= 60;
      }
    }
    if (game.chooseCursor.selection === "start") {
      game.startOptions.setColor("#fff");
      if (Phaser.Input.Keyboard.JustDown(RIGHT)) {
        sfx.startMusic.stop();
        this.scene.start("Grassland");
      }
    } else {
      game.startOptions.setColor("#d1d1d1");
    }
    if (game.chooseCursor.selection === "instructions") {
      game.instructionsOption.setColor("#fff");
      if (Phaser.Input.Keyboard.JustDown(RIGHT)) {
        sfx.startMusic.stop();
        this.scene.start("Instructions");
      }
    } else {
      game.instructionsOption.setColor("#d1d1d1");
    }
    if (game.chooseCursor.selection === "github") {
      game.githubOption.setColor("#fff");
      if (Phaser.Input.Keyboard.JustDown(RIGHT)) {
        open("https://github.com/thcheetah777/luckyalien");
      }
    } else {
      game.githubOption.setColor("#d1d1d1");
    }
  }
}
