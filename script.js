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
