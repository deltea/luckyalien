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

// Phaser game
const phaserGame = new Phaser.Game(config);
