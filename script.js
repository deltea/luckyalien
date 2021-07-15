// Alien
// Game obj
let game = {
  jumpHeight: 700,
  checkpoint: [200, 1100],
  lastScene: "",
  isFirstScene: true,
  jumpsMade: 0,
  paused: false,
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
  lives: 3,
  maxLives: 3,
  coins: 0
}

// SFX obj
let sfx = {};

// Phaser game
const phaserGame = new Phaser.Game(config);
