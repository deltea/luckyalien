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
  scene: [Start, Grassland, Boss, SignContent, Forest, Clouds, Credits]
};
