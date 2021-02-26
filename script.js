// Stick Man Platformer
// Game obj
let game = {
  jumpHeight: 800,
  big: false
};

// Stats obj
let stats = {
  coins: 0
}

// SFX obj
let sfx = {};

// Upload
function preload() {
  // Load images
  // Background
  this.load.image("background", "assets/imgs/background.png");

  // Platform
  this.load.image("platform", "assets/imgs/platform.png");

  // Broken platform
  this.load.image("brokenPlatform", "assets/imgs/brokenPlatform.png");

  // Stone platform
  this.load.image("stonePlatform", "assets/imgs/stonePlatform.png");

  // Mushroom
  this.load.image("mushroom", "assets/imgs/mushroom.png");

  // Coin stat
  this.load.image("coinStat", "assets/imgs/coinStat.png");

  // Coin stat
  this.load.image("carrot", "assets/imgs/carrot.png");

  // InactiveBox
  this.load.image("inactiveBox", "assets/imgs/inactiveBox.png");

  // ActiveBox
  this.load.image("activeBox", "assets/imgs/activeBox.png");

  // Spritesheets
  // Player
  this.load.spritesheet("player", "assets/imgs/player.png", {
    // Proportions
    frameWidth: 20,
    frameHeight: 40
  });

  // Coin frames
  this.load.image("coin0", "assets/imgs/coin0.png");
  this.load.image("coin1", "assets/imgs/coin1.png");
  this.load.image("coin2", "assets/imgs/coin2.png");
  this.load.image("coin3", "assets/imgs/coin3.png");

  // Spike frames
  this.load.image("spike0", "assets/imgs/spikeBall0.png");
  this.load.image("spike1", "assets/imgs/spikeBall1.png");

  // Spring frames
  this.load.image("spring0", "assets/imgs/spring0.png");
  this.load.image("spring1", "assets/imgs/spring1.png");

  // SFX
  // Background
  this.load.audio("background", "assets/sfx/background.mp3");

  // Jump
  this.load.audio("jump", "assets/sfx/jump.ogg");

  // Break platform
  this.load.audio("breakPlatform", "assets/sfx/breakPlatform.mp3");

  // Mushroom jump
  this.load.audio("mushroom", "assets/sfx/mushroom.ogg");

  // Coin
  this.load.audio("coin", "assets/sfx/coin.wav");

  // Carrot
  this.load.audio("carrot", "assets/sfx/carrot.ogg");

  // Explosion
  this.load.audio("explosion", "assets/sfx/explosion.wav");

  // Box
  this.load.audio("box", "assets/sfx/box.ogg");
}

// Create
function create() {
  // SFX
  sfx.background = this.sound.add("background");
  sfx.jump = this.sound.add("jump");
  sfx.breakPlatform = this.sound.add("breakPlatform");
  sfx.mushroom = this.sound.add("mushroom");
  sfx.coin = this.sound.add("coin");
  sfx.carrot = this.sound.add("carrot");
  sfx.explosion = this.sound.add("explosion");
  sfx.box = this.sound.add("box");

  // Loop music
  sfx.background.setLoop(true);

  // Play music
  sfx.background.play();

  // Create background
  this.add.image(500, 450, "background");

  // Player
  game.player = this.physics.add.sprite(500, 630, "player").setScale(1.5);

  // Bounds
  game.player.setCollideWorldBounds(true);

  // Input
  game.cursors = this.input.keyboard.createCursorKeys();

  // Platforms
  game.platforms = this.physics.add.staticGroup();

  // Create platforms
  for (var x = 0; x < 5; x++) {
    game.platforms.create([850, 150, 500, 850, 150][x], [500, 500, 330, 150, 150][x], ["platform", "platform", "stonePlatform", "platform", "platform"][x]).setScale(0.3).setSize(110, 25).setOffset(135, 34);
  }

  // Collider, Player, Platform
  this.physics.add.collider(game.player, game.platforms, function(player, platform) {
    if (player.body.touching.up && platform.body.touching.down && platform.texture.key != "stonePlatform") {
      // SFX
      sfx.breakPlatform.play();

      // Broken
      platform.setTexture("brokenPlatform");

      // Destroy
      if (platform.broken) {
        // Destroy
        platform.destroy();

        // Create coin
        game.coins.create(platform.x, platform.y, "coin0").setCollideWorldBounds(true).setScale(0.4).setVelocityY(-500);
      } else {
        platform.broken = true;
      }
    }
  });

  // Coins
  game.coins = this.physics.add.group();

  // Collider Platform, Coin
  this.physics.add.collider(game.platforms, game.coins);

  // Collider Player, Coin
  this.physics.add.overlap(game.player, game.coins, function(player, coin) {
    // SFX
    sfx.coin.play();

    // Add to coins
    stats.coins++;

    // Update stat
    game.coinStatText.setText(`:${stats.coins}`);

    // Destroy
    coin.destroy();
  });

  // Coin stat
  game.coinStat = this.physics.add.staticSprite(40, 40, "coinStat").setScale(0.55);
  game.coinStatText = this.add.text(70, 25, `:${stats.coins}`, {
    fontSize: "35px",
    fill: "#000"
  });

  // Mushrooms
  game.mushrooms = this.physics.add.staticGroup();

  // Create mushrooms
  for (var x = 0; x < 2; x++) {
    game.mushrooms.create([350, 650][x], [605, 605][x], "mushroom").setScale(1).setSize(80).setOffset(0).setCollideWorldBounds(true);
  }

  // Collider Player, Mushroom
  this.physics.add.collider(game.player, game.mushrooms, function(player, mushroom) {
    if (player.body.touching.down && mushroom.body.touching.up) {
      // SFX
      sfx.mushroom.play();

      // Bounce
      game.player.setVelocityY(-1050);
    }
  });

  // Boxes
  game.boxes = this.physics.add.staticGroup();

  // Create boxes
  for (var x = 0; x < 3; x++) {
    game.boxes.create([500, 150, 850][x], [500, 300, 300][x], "activeBox").setScale(0.6).setSize(41, 42).setOffset(15, 30).active = true;
  }

  // Collider Player, Box
  this.physics.add.collider(game.player, game.boxes, function(player, box) {
    if (player.body.touching.up && box.body.touching.down) {
      if (box.active) {
        // SFX
        sfx.box.play();

        // Box
        box.setTexture("inactiveBox");
        box.active = false;
        box.x += 36;
        box.y += 7;
        // Create coin
        game.coins.create(box.x - 38, box.y - 80, "coin0").setCollideWorldBounds(true).setScale(0.4).setVelocityY(-500);
      }
    }
  });

  // Collider Coin, Box
  this.physics.add.collider(game.coins, game.boxes);

  // Carrots
  game.carrots = this.physics.add.group();

  // Collider Carrot, Platform
  this.physics.add.collider(game.carrots, game.platforms, function(carrot, platform) {
    carrot.destroy();
  });

  // Collider Carrot, Mushroom
  this.physics.add.collider(game.carrots, game.mushrooms, function(carrot, mushroom) {
    carrot.destroy();
  });

  // Collider Carrot, Box
  this.physics.add.collider(game.carrots, game.boxes, function(carrot, box) {
    carrot.destroy();
  });

  // Collider Carrot, Coin
  this.physics.add.collider(game.carrots, game.coins, function(carrot, coin) {
    // SFX
    sfx.coin.play();

    // Add to coins
    stats.coins++;

    // Update stat
    game.coinStatText.setText(`:${stats.coins}`);

    // Destroy
    coin.destroy();
    carrot.destroy();
  });

  // Spikes
  game.spikes = this.physics.add.group();

  // Create spikes
  for (var x = 0; x < 2; x++) {
    spike = game.spikes.create([0, 1000][x], [700, 700][x], "spike0").setCollideWorldBounds(true).setScale(0.4);
    spike.dir = ["R", "L"][x];
    if (spike.dir === "R") {
      spike.vel = 200;
    } else {
      spike.vel = -200;
    }
  }

  // Collider Spike, Mushroom
  this.physics.add.collider(game.spikes, game.mushrooms, function(spike, mushroom) {
    if (spike.dir === "R") {
      spike.vel = -200;
      spike.dir = "L";
    } else {
      spike.vel = 200;
      spike.dir = "R";
    }
  });

  // Collider Spike, Carrot
  this.physics.add.collider(game.spikes, game.carrots, function(spike, carrot) {
    // SFX
    sfx.explosion.play();

    // Destroy
    carrot.destroy();
    spike.destroy();
  });

  // Springs
  game.springs = this.physics.add.group();

  // Create springs
  for (var x = 0; x < 2; x++) {
    game.springs.create([150, 850][x], [450, 450][x], "spring0").setCollideWorldBounds(true).setScale(0.4).setVelocityY(-500).setBounce(1);
  }

  // Collider Springs, Platforms
  this.physics.add.collider(game.springs, game.platforms);

  // Collider Springs, Carrots
  this.physics.add.collider(game.springs, game.carrots, function(spring, carrot) {
    // SFX
    sfx.explosion.play();

    // Destroy
    carrot.destroy();
    spring.destroy();
  });

  // Animation
  // Run
  this.anims.create({
    // Animation key
    key: "run",

    // Frames
    frames: this.anims.generateFrameNumbers("player", {
      start: 0,
      end: 7
    }),

    // Options
    frameRate: 30,
    repeat: -1
  });

  // Idle
  this.anims.create({
    // Animation key
    key: "idle",

    // Frames
    frames: this.anims.generateFrameNumbers("player", {
      start: 0,
      end: 1
    }),

    // Options
    frameRate: 4,
    repeat: -1
  });

  // Coin
  this.anims.create({
    // Animation key
    key: "coin",

    // Frames
    frames: [{
      key: "coin0"
    },
    {
      key: "coin1"
    },
    {
      key: "coin2"
    },
    {
      key: "coin3"
    }],

    // Options
    frameRate: 8,
    repeat: -1
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
}

// Update
function update() {
  // Move
  // Right
  if (game.cursors.right.isDown) {
    // Move right
    game.player.setVelocityX(350);

    // Play player move animation
    game.player.anims.play("run", true);

    // Flip image
    game.player.flipX = true;

  // Left
  } else if (game.cursors.left.isDown) {
    // Move left
    game.player.setVelocityX(-350);

    // Play move animation
    game.player.anims.play("run", true);

    // Flip image
    game.player.flipX = false;

  // None
  } else {
    // Don't move
    game.player.setVelocityX(0);

    // Play idle
    game.player.anims.play("idle", true);
  }

  // Jump
  if (game.cursors.up.isDown && game.player.body.blocked.down) {
    // SFX
    sfx.jump.play();

    // Jump
    game.player.setVelocityY(-game.jumpHeight);

    // Reset height
    game.jumpHeight = 800;
  }

  // Shoot
  if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE))) {
    // SFX
    sfx.carrot.play();

    // Flip
    if (game.player.flipX) {
      let carrot = game.carrots.create(game.player.x, game.player.y, "carrot").setVelocityY(-400).setVelocityX(500).setScale(0.5);
    } else {
      let carrot = game.carrots.create(game.player.x, game.player.y, "carrot").setVelocityY(-400).setVelocityX(-500).setScale(0.5);
      carrot.flipX = true;
    }
  }

  // Coin animation
  game.coins.getChildren().forEach(sprite => {
    sprite.anims.play("coin", true);
  });

  // Spring animation
  game.springs.getChildren().forEach(sprite => {
    sprite.anims.play("spring", true);
  });

  // Rotate carrots
  game.carrots.getChildren().forEach(sprite => {
    sprite.angle += 20;
  });

  // Spike
  game.spikes.getChildren().forEach(sprite => {
    // Animation
    sprite.anims.play("spike", true);

    // Check pos
    // Left edge
    if (sprite.x < 30) {
      if (sprite.dir === "R") {
        sprite.vel = 200;
        sprite.dir = "L";
      } else {
        sprite.vel = -200;
        sprite.dir = "R";
      }
    }

    // Right edge
    if (sprite.x > 970) {
      if (sprite.dir === "L") {
        sprite.vel = 200;
        sprite.dir = "R";
      } else {
        sprite.vel = -200;
        sprite.dir = "L";
      }
    }

    // Rotate
    sprite.angle += 5;

    // Move
    sprite.setVelocityX(sprite.vel);
  });
}

// Phaser config
const config = {
  // Type
  type: Phaser.AUTO,

  // Proportions
  width: 1000,
	height: 643,

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
  scene: {
    preload,
    create,
    update
  }
};

// Phaser game
const phaserGame = new Phaser.Game(config);
