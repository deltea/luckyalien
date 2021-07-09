// Alien
// Game obj
let game = {
  jumpHeight: 700,
  checkpoint: [200, 1100],
  lastScene: "",
  isFirstScene: true,
  jumpsMade: 0,
  sound: true,
  abilities: {
    carrot: false,
    sword: false,
    bounceMagic: false,
    doubleJumps: false
  }
};

// Stats obj
let stats = {
  coins: 0
}

// SFX obj
let sfx = {};

// Scene class
class Scene extends Phaser.Scene {
  // Constructor
  constructor(key) {
    // Super
    super(key);

    // LevelKey
    this.sceneKey = key;

    // SceneLength
    this.sceneLength = world[this.sceneKey].length;

    // SceneHeight
    this.sceneHeight = world[this.sceneKey].height;

    // HasClouds
    this.hasClouds = world[this.sceneKey].hasClouds;
  }
}

// Scenes
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
        game.signText.text += game.signContent[i]
        i++
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
    game.creditsTitle = this.add.text(500, 321.5, "Credits", {
      fontFamily: "Arial",
      fontSize: 100,
      color: "#f5f5f5"
    }).setOrigin(0, 0);

    // Credits
    game.credits = this.add.text(300, 500, "Programmer: thcheetah777\nGraphics: Kenney.nl\nMusic: Kirby\nFramework: Phaser.js\nLevel design: thcheetah777 and sister\n\n\n\n\n\n\n           Thanks for playing!", {
      fontFamily: "Arial",
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

// Grassland
class Grassland extends Scene {
  // Constructor
  constructor() {
    // Super
    super("Grassland");
  }
}

// Forest
class Forest extends Scene {
  // Constructor
  constructor() {
    // Super
    super("Forest");
  }
}

// Clouds
class Clouds extends Scene {
  // Constructor
  constructor() {
    // Super
    super("Clouds");
  }
}

// Boss
class Boss extends Scene {
  // Constructor
  constructor() {
    // Super
    super("Boss");
  }
}

// Phaser config
const config = {
  // Type
  type: Phaser.AUTO,

  // Proportions
  width: 1300,
	height: 643,

  // Color of sky
  backgroundColor: 0xd0f4f7,

  // Physics
  physics: {
    // Default
    default: "arcade",

    // Arcade
    arcade: {
      // Gravity
      gravity: {
        y: 1500
      },

      // Options
      enableBody: true,
      // debug: true
    }
  },

  // Scenes
  scene: [Grassland, Boss, SignContent, Forest, Clouds, Credits]
};

// Phaser game
const phaserGame = new Phaser.Game(config);
