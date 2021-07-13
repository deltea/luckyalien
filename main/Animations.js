// Animations
Scene.prototype.animations = function() {
  // Run
  this.anims.create({
    // Animation key
    key: "walk",

    // Frames
    frames: [{
      key: "playerWalk2"
    },
    {
      key: "playerWalk1"
    },
    {
      key: "playerWalk0"
    }],

    // Options
    frameRate: 10,
    repeat: -1
  });

  // Coin animations
  // Gold coin
  this.anims.create({
    // Animation key
    key: "goldCoin",

    // Frames
    frames: [{
      key: "goldCoin0"
    },
    {
      key: "goldCoin1"
    },
    {
      key: "goldCoin2"
    },
    {
      key: "goldCoin3"
    }],

    // Options
    frameRate: 8,
    repeat: -1,
    yoyo: true
  });

  // Bronze coin
  this.anims.create({
    // Animation key
    key: "bronzeCoin",

    // Frames
    frames: [{
      key: "bronzeCoin0"
    },
    {
      key: "bronzeCoin1"
    },
    {
      key: "bronzeCoin2"
    },
    {
      key: "bronzeCoin3"
    }],

    // Options
    frameRate: 10,
    repeat: -1,
    yoyo: true
  });

  // Spike
  this.anims.create({
    // Animation key
    key: "spike",

    // Frames
    frames: [{
      key: "spike0"
    },
    {
      key: "spike1"
    }],

    // Options
    frameRate: 8,
    repeat: -1
  });

  // Spring
  this.anims.create({
    // Animation key
    key: "spring",

    // Frames
    frames: [{
      key: "spring0"
    },
    {
      key: "spring1"
    }],

    // Options
    frameRate: 8,
    repeat: -1
  });

  // Spider
  this.anims.create({
    // Animation key
    key: "spider",

    // Frames
    frames: [{
      key: "spider0"
    },
    {
      key: "spider1"
    }],

    // Options
    frameRate: 8,
    repeat: -1
  });

  // Snail
  this.anims.create({
    // Animation key
    key: "snail",

    // Frames
    frames: [{
      key: "snail0"
    },
    {
      key: "snail1"
    }],

    // Options
    frameRate: 8,
    repeat: -1
  });

  // Flag
  this.anims.create({
    // Animation key
    key: "flag",

    // Frames
    frames: [{
      key: "flagMove0"
    },
    {
      key: "flagMove1"
    }],

    // Options
    frameRate: 5,
    repeat: -1
  });

  // Bat
  this.anims.create({
    // Animation key
    key: "bat",

    // Frames
    frames: [{
      key: "bat0"
    },
    {
      key: "bat1"
    }],

    // Options
    frameRate: 4,
    repeat: -1
  });
};
