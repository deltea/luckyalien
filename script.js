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
    carrot: true,
    sword: true,
    bounceMagic: true,
    doubleJumps: true
  }
};

// Stats obj
let stats = {
  coins: 0
}

// SFX obj
let sfx = {};

// Phaser game
const phaserGame = new Phaser.Game(config);
