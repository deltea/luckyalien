// Alien
// Game obj
let game = {
  jumpHeight: 700,
  carrot: false,
  sword: false,
  checkpoint: [200, 1100],
  bounceMagic: false
};

// Stats obj
let stats = {
  coins: 0
}

// SFX obj
let sfx = {};

// Preload
function preload() {
  // Load images
  // Backgrounds
  this.load.image("background0", "assets/imgs/background0.png");
  this.load.image("background1", "assets/imgs/background1.png");

  // Grass block
  this.load.image("grassBlock", "assets/imgs/grassBlock.png");

  // Stone block
  this.load.image("stoneBlock", "assets/imgs/stoneBlock.png");

  // Speed block
  this.load.image("speedBlock", "assets/imgs/speedBlock.png");

  // Mushroom
  this.load.image("mushroom", "assets/imgs/mushroom.png");

  // Coin stat
  this.load.image("coinStat", "assets/imgs/coinStat.png");

  // Carrot
  this.load.image("carrot", "assets/imgs/carrot.png");

  // Sword
  this.load.image("sword", "assets/imgs/sword.png");

  // InactiveBox
  this.load.image("inactiveBox", "assets/imgs/inactiveBox.png");

  // ActiveBox
  this.load.image("activeBox", "assets/imgs/activeBox.png");

  // CarrotPowerup
  this.load.image("carrotPowerup", "assets/imgs/carrotPowerup.png");

  // MuhshroomPowerup
  this.load.image("mushroomPowerup", "assets/imgs/mushroomPowerup.png");

  // House
  this.load.image("house", "assets/imgs/house.png");

  // Laser
  this.load.image("laser", "assets/imgs/laser.png");
  this.load.image("laserShooter", "assets/imgs/laserShooter.png");

  // Numbers
  this.load.image("0", "assets/imgs/0.png");
  this.load.image("1", "assets/imgs/1.png");
  this.load.image("2", "assets/imgs/2.png");
  this.load.image("3", "assets/imgs/3.png");
  this.load.image("4", "assets/imgs/4.png");
  this.load.image("5", "assets/imgs/5.png");
  this.load.image("6", "assets/imgs/6.png");
  this.load.image("7", "assets/imgs/7.png");
  this.load.image("8", "assets/imgs/8.png");
  this.load.image("9", "assets/imgs/9.png");

  // Clouds
  this.load.image("cloud0", "assets/imgs/cloud0.png");
  this.load.image("cloud1", "assets/imgs/cloud1.png");
  this.load.image("cloud2", "assets/imgs/cloud2.png");

  // Spritesheets
  // Player frames
  this.load.image("player", "assets/imgs/player.png");
  this.load.image("playerWalk0", "assets/imgs/playerWalk0.png");
  this.load.image("playerWalk1", "assets/imgs/playerWalk1.png");
  this.load.image("playerWalk2", "assets/imgs/playerWalk2.png");

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

  // Spider frames
  this.load.image("spider0", "assets/imgs/spider0.png");
  this.load.image("spider1", "assets/imgs/spider1.png");

  // Flag frames
  this.load.image("flagDown", "assets/imgs/flagDown.png");
  this.load.image("flagMove0", "assets/imgs/flagMove0.png");
  this.load.image("flagMove1", "assets/imgs/flagMove1.png");

  // Snail frames
  this.load.image("snail0", "assets/imgs/snail0.png");
  this.load.image("snail1", "assets/imgs/snail1.png");
  this.load.image("snailShell", "assets/imgs/snailShell.png");

  // SFX
  // Backgrounds
  this.load.audio("background0", "assets/sfx/background0.mp3");
  this.load.audio("background1", "assets/sfx/background1.mp3");

  // Jump
  this.load.audio("jump", "assets/sfx/jump.mp3");

  // Mushroom jump
  this.load.audio("mushroom", "assets/sfx/mushroom.mp3");

  // Coin
  this.load.audio("coin", "assets/sfx/coin.wav");

  // Carrot
  this.load.audio("carrot", "assets/sfx/carrot.mp3");

  // Sword
  this.load.audio("sword", "assets/sfx/sword.mp3");

  // Explosion
  this.load.audio("explosion", "assets/sfx/explosion.wav");

  // Box
  this.load.audio("box", "assets/sfx/box.mp3");

  // Powerups
  this.load.audio("powerup", "assets/sfx/powerup.wav");
  this.load.audio("powerup2", "assets/sfx/powerup2.wav");

  // Die
  this.load.audio("die", "assets/sfx/die.mp3");

  // Checkpoint
  this.load.audio("checkpoint", "assets/sfx/checkpoint.wav");

  // Shield
  this.load.audio("shield", "assets/sfx/shield.mp3");

  // SpeedBlock
  this.load.audio("speedBlock", "assets/sfx/speedBlock.mp3");

  // Respawn
  this.load.audio("respawn", "assets/sfx/respawn.mp3");
}

// Create
function create() {
  // SFX
  sfx.background0 = this.sound.add("background0");
  sfx.background1 = this.sound.add("background1");
  sfx.jump = this.sound.add("jump");
  sfx.mushroom = this.sound.add("mushroom");
  sfx.coin = this.sound.add("coin");
  sfx.carrot = this.sound.add("carrot");
  sfx.sword = this.sound.add("sword");
  sfx.explosion = this.sound.add("explosion");
  sfx.box = this.sound.add("box");
  sfx.powerup = this.sound.add("powerup");
  sfx.powerup2 = this.sound.add("powerup2");
  sfx.die = this.sound.add("die");
  sfx.checkpoint = this.sound.add("checkpoint");
  sfx.shield = this.sound.add("shield");
  sfx.speedBlock = this.sound.add("speedBlock");
  sfx.respawn = this.sound.add("respawn");

  // Loop music
  sfx.background0.setLoop(true);
  sfx.background1.setLoop(true);

  // Play music
  sfx.background0.play();

  // Create background
  for (var i = 0; i < 8; i++) {
    if (i < 3) {
      this.add.image(i * 1024, 900, "background0");
    } else {
      this.add.image(i * 1024, 900, "background1");
    }
  }

  // Create clouds
  game.clouds = this.physics.add.staticGroup();
  for (var i = 0; i < 10; i++) {
    game.clouds.create(Math.random() * 6000, Math.random() * 500, `cloud${Math.round(Math.random() * 2)}`)
  }

  // House
  game.house = this.physics.add.staticSprite(150, 1000, "house").setScale(2).setSize(246, 246).setOffset(-50, -20);

  // Player
  game.player = this.physics.add.sprite(200, 1100, "player").setScale(0.8);
  this.physics.add.collider(game.player, game.house);

  // Camera
  this.cameras.main.setBounds(0, 0, 6000, config.height + 500);
  this.physics.world.setBounds(0, 0, 6000, config.height + 500);
  this.cameras.main.startFollow(game.player, true, 0.1, 0.1);

  // Number stats
  game.coinNumbers = this.physics.add.staticGroup();
  game.carrotNumbers = this.physics.add.staticGroup();

  // Bounds
  game.player.setCollideWorldBounds(true);

  // Input
  game.cursors = this.input.keyboard.createCursorKeys();

  // Blocks
  game.blocks = this.physics.add.staticGroup();

  // Create blocks
  for (var x = 0; x < world.blocks.length; x++) {
    game.blocks.create(world.blocks[x][0], world.blocks[x][1], world.blocks[x][2]).setScale(0.3).setSize(40, 39).setOffset(44, 44);
  }

  // Collider, Player, Block
  this.physics.add.collider(game.player, game.blocks, function(player, block) {
    if (player.body.touching.right && block.body.touching.left) {
      player.x -= 2;
    }
    if (player.body.touching.left && block.body.touching.right) {
      player.x += 2;
    }
    if (player.body.touching.down && block.body.touching.up && block.texture.key === "speedBlock") {
      if (!block.touched) {
        block.destroyTimer = 7;
      }
      block.touched = true;
    }
  });

  // Coins
  game.coins = this.physics.add.group();

  // Collider Block, Coin
  this.physics.add.collider(game.blocks, game.coins);

  // Collider Player, Coin
  this.physics.add.overlap(game.player, game.coins, function(player, coin) {
    // SFX
    sfx.coin.play();

    // Add to coins
    stats.coins++;

    // Update stat
    game.coinNumbers.getChildren().forEach(num => {
      num.destroy();
    });

    for (var i = 0; i < stats.coins.toString().split("").length; i++) {
      game.coinNumbers.create(90 + i * 28, 40, stats.coins.toString().split("")[i]).setScrollFactor(0);
    }

    // Destroy
    coin.destroy();
  });

  // Coin stat
  game.coinStat = this.physics.add.staticSprite(40, 40, "coinStat").setScale(0.7).setScrollFactor(0);
  for (var i = 0; i < stats.coins.toString().split("").length; i++) {
    game.coinNumbers.create(90 + i * 28, 40, stats.coins.toString().split("")[i]).setScrollFactor(0);
  }

  // Mushrooms
  game.mushrooms = this.physics.add.staticGroup();

  // Create mushrooms
  for (var x = 0; x < world.mushrooms.length; x++) {
    game.mushrooms.create(world.mushrooms[x][0], world.mushrooms[x][1], "mushroom").setScale(1).setSize(80, 75).setOffset(0, 5).setCollideWorldBounds(true);
  }

  // Collider Player, Mushroom
  this.physics.add.collider(game.player, game.mushrooms, function(player, mushroom) {
    if (player.body.touching.down && mushroom.body.touching.up && game.bounceMagic) {
      // SFX
      sfx.mushroom.play();

      // Bounce
      game.player.setVelocityY(-1050);
    }
  });

  // Boxes
  game.boxes = this.physics.add.staticGroup();

  // Create boxes
  for (var x = 0; x < world.boxes.length; x++) {
    let box = game.boxes.create(world.boxes[x][0], world.boxes[x][1], "activeBox");
    box.setScale(0.3).setSize(40, 39).setOffset(45, 45);
    box.active = true;
    box.entity = world.boxes[x][2];
  }

  // Collider Player, Box
  this.physics.add.collider(game.player, game.boxes, function(player, box) {
    if (player.body.touching.up && box.body.touching.down) {
      if (box.active) {
        // SFX
        if (box.entity === "carrotPowerup" || box.entity === "mushroomPowerup" || box.entity === "swordPowerup") {
          sfx.powerup2.play({
            volume: 4
          });
        } else {
          sfx.box.play();
        }

        // Box
        box.setTexture("inactiveBox");
        box.active = false;

        if (box.entity === "coin") {
          // Create coin
          game.coins.create(box.x, box.y - 30, "coin0").setCollideWorldBounds(true).setScale(0.4).setVelocityY(-500);
        } else if (box.entity === "carrotPowerup") {
          // Create carrotPowerup
          game.carrotPowerup.create(box.x, box.y - 30, "carrotPowerup").setCollideWorldBounds(true).setScale(0.5).setVelocityY(-500);
        } else if (box.entity === "mushroomPowerup") {
          // Create mushroomPowerup
          game.mushroomPowerup.create(box.x, box.y - 30, "mushroomPowerup").setCollideWorldBounds(true).setScale(0.8).setVelocityY(-500);
        } else {
          // Create swordPowerup
          game.swordPowerup.create(box.x, box.y - 30, "sword").setCollideWorldBounds(true).setScale(0.8).setVelocityY(-500);
        }
      }
    }
  });

  // Collider Coin, Box
  this.physics.add.collider(game.coins, game.boxes);

  // Carrots
  game.carrots = this.physics.add.group();

  // Collider Carrot, Block
  this.physics.add.collider(game.carrots, game.blocks, function(carrot, platform) {
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
    game.coinNumbers.getChildren().forEach(num => {
      num.destroy();
    });

    for (var i = 0; i < stats.coins.toString().split("").length; i++) {
      game.coinNumbers.create(90 + i * 28, 40, stats.coins.toString().split("")[i]).setScrollFactor(0);
    }

    // Destroy
    coin.destroy();
    carrot.destroy();
  });

  // Swords
  game.swords = this.physics.add.group();

  // Collider Sword, Block
  this.physics.add.collider(game.swords, game.blocks, function(sword, platform) {
    sword.destroy();
  });

  // Collider Sword, Mushroom
  this.physics.add.collider(game.swords, game.mushrooms, function(sword, mushroom) {
    sword.destroy();
  });

  // Collider Sword, Box
  this.physics.add.collider(game.swords, game.boxes, function(sword, box) {
    sword.destroy();
  });

  // Collider Sword, Coin
  this.physics.add.collider(game.swords, game.coins, function(sword, coin) {
    // SFX
    sfx.coin.play();

    // Add to coins
    stats.coins++;

    // Update stat
    game.coinNumbers.getChildren().forEach(num => {
      num.destroy();
    });

    for (var i = 0; i < stats.coins.toString().split("").length; i++) {
      game.coinNumbers.create(90 + i * 28, 40, stats.coins.toString().split("")[i]).setScrollFactor(0);
    }

    // Destroy
    coin.destroy();
    sword.destroy();
  });

  // Spikes
  game.spikes = this.physics.add.group();

  // Create spikes
  for (var x = 0; x < world.spikes.length; x++) {
    spike = game.spikes.create(world.spikes[x][0], world.spikes[x][1], "spike0").setCollideWorldBounds(true).setScale(0.4);
    spike.dir = ["R", "L"][x];
    spike.moves = world.spikes[x][2];
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

  // Collider Spikes, Blocks
  this.physics.add.collider(game.spikes, game.blocks, function(spike, block) {
    if (spike.body.touching.left || spike.body.touching.right) {
      if (spike.dir === "R") {
        spike.vel = -200;
        spike.dir = "L";
        spike.flipX = false;
      } else {
        spike.vel = 200;
        spike.dir = "R";
        spike.flipX = true;
      }
    }
  });

  // Collider Spikes, Player
  this.physics.add.overlap(game.player, game.spikes, (player, spike) => {
    sfx.die.play({
      volume: 2.5
    });
    this.cameras.main.shake(240, 0.05, false);
    player.x = game.checkpoint[0];
    player.y = game.checkpoint[1] - 10;
  });

  // Collider Spike, Carrot
  this.physics.add.overlap(game.spikes, game.carrots, function(spike, carrot) {
    // SFX
    sfx.shield.play();

    // Destroy
    carrot.destroy();
  });

  // Collider Spike, Sword
  this.physics.add.overlap(game.spikes, game.swords, function(spike, sword) {
    // SFX
    sfx.explosion.play();

    // Destroy
    spike.destroy();
    sword.destroy();
  });

  // Snail
  game.snails = this.physics.add.group();

  // Create snails
  for (var x = 0; x < world.snails.length; x++) {
    snail = game.snails.create(world.snails[x][0], world.snails[x][1], "snail0").setCollideWorldBounds(true).setScale(0.5).setSize(0, 80).setOffset(0, 50);
    snail.dir = ["R", "L"][x];
    snail.active = true;
    if (snail.dir === "R") {
      snail.vel = 250;
    } else {
      snail.vel = -250;
    }
  }

  // Collider Snails, Mushrooms
  this.physics.add.collider(game.snails, game.mushrooms, function(snail, mushroom) {
    if (snail.body.touching.left || snail.body.touching.right) {
      if (snail.dir === "R") {
        snail.vel = -250;
        snail.dir = "L";
        snail.flipX = false;
      } else {
        snail.vel = 250;
        snail.dir = "R";
        snail.flipX = true;
      }
    }
  });

  // Collider Snails, Blocks
  this.physics.add.collider(game.snails, game.blocks, function(snail, block) {
    if (snail.body.touching.left || snail.body.touching.right) {
      if (snail.dir === "R") {
        snail.vel = -250;
        snail.dir = "L";
        snail.flipX = false;
      } else {
        snail.vel = 250;
        snail.dir = "R";
        snail.flipX = true;
      }
    }
  });

  // Collider Snails, Player
  this.physics.add.overlap(game.player, game.snails, (player, snail) => {
    if (snail.active) {
      if (player.body.touching.down && snail.body.touching.up) {
        // SFX
        sfx.shield.play();

        // Shell
        snail.active = false;
        snail.timer = 250;

        // Bounce
        player.setVelocityY(-500);
      } else {
        // Die
        sfx.die.play({
          volume: 2.5
        });
        this.cameras.main.shake(240, 0.05, false);
        player.x = game.checkpoint[0];
        player.y = game.checkpoint[1] - 10;
      }
    }
  });

  // Collider Snails, Carrot
  this.physics.add.overlap(game.snails, game.carrots, function(snail, carrot) {
    // SFX
    sfx.shield.play();

    // Destroy
    carrot.destroy();

    // Shell
    snail.active = false;
    snail.timer = 250;
  });

  // Collider Snails, Sword
  this.physics.add.overlap(game.snails, game.swords, function(snail, sword) {
    // SFX
    sfx.shield.play();

    // Destroy
    sword.destroy();

    // Shell
    snail.active = false;
    snail.timer = 250;
  });

  // Springs
  game.springs = this.physics.add.group();

  // Create springs
  for (var x = 0; x < world.springs.length; x++) {
    game.springs.create(world.springs[x][0], world.springs[x][1], "spring0").setCollideWorldBounds(true).setScale(0.4).setVelocityY(-500).setBounce(1);
  }

  // Collider Springs, Blocks
  this.physics.add.collider(game.springs, game.blocks);

  // Collider Springs, Boxes
  this.physics.add.collider(game.springs, game.boxes);

  // Collider Springs, Player
  this.physics.add.overlap(game.player, game.springs, (player, spring) => {
    sfx.die.play({
      volume: 2.5
    });
    this.cameras.main.shake(240, 0.05, false);
    player.x = game.checkpoint[0];
    player.y = game.checkpoint[1];
  });

  // Collider Springs, Carrots
  this.physics.add.collider(game.springs, game.carrots, function(spring, carrot) {
    // SFX
    sfx.explosion.play();

    // Destroy
    carrot.destroy();
    spring.destroy();
  });

  // Collider Springs, Swords
  this.physics.add.collider(game.springs, game.swords, function(spring, sword) {
    // SFX
    sfx.explosion.play();

    // Destroy
    sword.destroy();
    spring.destroy();
  });

  // Spider
  game.spiders = this.physics.add.group();

  // Create spider
  for (var x = 0; x < world.spiders.length; x++) {
    spider = game.spiders.create(world.spiders[x][0], world.spiders[x][1], "spider0").setCollideWorldBounds(true).setScale(0.8);
    spider.dir = ["L"][x];
    if (spider.dir === "R") {
      spider.vel = 200;
    } else {
      spider.vel = -200;
    }
  }

  // Collider Spider, Blocks
  this.physics.add.collider(game.spiders, game.blocks, function(spider, block) {
    if (spider.body.touching.left || spider.body.touching.right) {
      if (spider.dir === "R") {
        spider.vel = -200;
        spider.dir = "L";
        spider.flipX = false;
      } else {
        spider.vel = 200;
        spider.dir = "R";
        spider.flipX = true;
      }
    }
  });

  // Collider Spider, Mushrooms
  this.physics.add.collider(game.spiders, game.mushrooms, function(spider, mushroom) {
    if (spider.body.touching.left || spider.body.touching.right) {
      if (spider.dir === "R") {
        spider.vel = -200;
        spider.dir = "L";
        spider.flipX = false;
      } else {
        spider.vel = 200;
        spider.dir = "R";
        spider.flipX = true;
      }
    }
  });

  // Collider Spider, Carrot
  this.physics.add.collider(game.spiders, game.carrots, function(spider, carrot) {
    // SFX
    sfx.explosion.play();

    // Destroy
    carrot.destroy();
    spider.destroy();
  });

  // Collider Spider, Sword
  this.physics.add.collider(game.spiders, game.swords, function(spider, sword) {
    // SFX
    sfx.explosion.play();

    // Destroy
    sword.destroy();
    spider.destroy();
  });

  // Collider Spider, Player
  this.physics.add.collider(game.player, game.spiders, (player, spider) => {
    if (player.body.touching.down && spider.body.touching.up) {
      // SFX
      sfx.explosion.play();

      // Bounce
      game.player.setVelocityY(-500);
      spider.destroy();
    } else {
      // Die
      sfx.die.play({
        volume: 2.5
      });
      this.cameras.main.shake(240, 0.05, false);
      player.x = game.checkpoint[0];
      player.y = game.checkpoint[1] - 10;
    }
  });

  // CarrotPowerup
  game.carrotPowerup = this.physics.add.group();

  // Collider Box, CarrotPowerup
  this.physics.add.collider(game.boxes, game.carrotPowerup);

  // Collider Player, CarrotPowerup
  this.physics.add.overlap(game.player, game.carrotPowerup, function(player, powerup) {
    // SFX
    sfx.powerup.play({
      volume: 4
    });

    // Enable
    game.carrot = true;

    // Destroy
    powerup.destroy();
  });

  // SwordPowerup
  game.swordPowerup = this.physics.add.group();

  // Collider Box, SwordPowerup
  this.physics.add.collider(game.boxes, game.swordPowerup);

  // Collider Player, SwordPowerup
  this.physics.add.overlap(game.player, game.swordPowerup, function(player, powerup) {
    // SFX
    sfx.powerup.play({
      volume: 4
    });

    // Enable
    game.sword = true;

    // Destroy
    powerup.destroy();
  });

  // MushroomPowerup
  game.mushroomPowerup = this.physics.add.group();

  // Collider Box, MushroomPowerup
  this.physics.add.collider(game.boxes, game.mushroomPowerup);

  // Collider Player, MushroomPowerup
  this.physics.add.overlap(game.player, game.mushroomPowerup, function(player, powerup) {
    // SFX
    sfx.powerup.play({
      volume: 4
    });

    // Enable
    game.bounceMagic = true;

    // Destroy
    powerup.destroy();
  });

  // Laser
  game.lasers = this.physics.add.staticGroup();
  game.laserBlasts = this.physics.add.group();

  // Create lasers
  for (var x = 0; x < world.lasers.length; x++) {
    laser = game.lasers.create(world.lasers[x][0], world.lasers[x][1], "laserShooter").setCollideWorldBounds(true).setScale(0.8).setSize(50, 50).setOffset(15, 15);
    laser.dir = world.lasers[x][2];
    laser.timer = 100;
    if (laser.dir === "R") {
      laser.flipX = true;
    } else {
      laser.flipX = false;
    }
  }

  // Collider Laser, Player
  this.physics.add.collider(game.lasers, game.player);

  // Collider LaserBlasts, Player
  this.physics.add.collider(game.laserBlasts, game.player, (player, blast) => {
    // Die
    sfx.die.play({
      volume: 2.5
    });
    this.cameras.main.shake(240, 0.05, false);
    player.x = game.checkpoint[0];
    player.y = game.checkpoint[1] - 10;
  });

  // Collider LaserBlasts, Carrots
  this.physics.add.collider(game.laserBlasts, game.carrots, function(blast, carrot) {
    // SFX
    sfx.explosion.play();

    // Destroy
    carrot.destroy();
  });

  // Collider LaserBlasts, Swords
  this.physics.add.collider(game.laserBlasts, game.swords, function(blast, sword) {
    // SFX
    sfx.explosion.play();

    // Destroy
    sword.destroy();
  });

  // Collider LaserBlasts, Blocks
  this.physics.add.collider(game.laserBlasts, game.blocks, function(blast, block) {
    // Destroy
    blast.destroy();
  });

  // Collider Lasers, Carrot
  this.physics.add.overlap(game.lasers, game.carrots, function(laser, carrot) {
    // SFX
    sfx.shield.play();

    // Destroy
    carrot.destroy();
  });

  // Collider Lasers, Sword
  this.physics.add.overlap(game.lasers, game.swords, function(laser, sword) {
    // SFX
    sfx.explosion.play();

    // Destroy
    laser.destroy();
    sword.destroy();
  });

  // Flags
  game.flags = this.physics.add.staticGroup();
  world.flags.forEach(data => {
    let flag = game.flags.create(data[0], data[1], "flagDown").setScale(0.5).setSize(20, 60).setOffset(30, 35);
    flag.active = false
    flag.area = data[1];
  });

  // Collider Flag, Player
  this.physics.add.overlap(game.flags, game.player, function(player, flag) {
    // SFX
    if (flag.active === false) {
      sfx.checkpoint.play();
    }

    // Reset flags
    game.flags.getChildren().forEach(sprite => {
      sprite.anims.stop();
      sprite.setTexture("flagDown");
      sprite.active = false;
    });

    // Set XY
    game.checkpoint[0] = flag.x;
    game.checkpoint[1] = flag.y;
    flag.active = true;

    // Animation
    flag.anims.play("flag", true);
  });

  // Animation
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
}

// Update
function update() {
  // Move
  // Right
  if (game.cursors.right.isDown) {
    // Move right
    game.player.setVelocityX(350);

    // Play player move animation
    game.player.anims.play("walk", true);

    // Flip image
    game.player.flipX = false;

    // Dir var
    game.player.dir = "R";

  // Left
  } else if (game.cursors.left.isDown) {
    // Move left
    game.player.setVelocityX(-350);

    // Play move animation
    game.player.anims.play("walk", true);

    // Flip image
    game.player.flipX = true;

    // Dir var
    game.player.dir = "L";

  // None
  } else {
    // Don't move
    game.player.setVelocityX(0);

    // Stop anims
    game.player.setTexture("player");
  }

  // Jump
  if (game.cursors.up.isDown && game.player.body.blocked.down) {
    // SFX
    sfx.jump.play();

    // Jump
    game.player.setVelocityY(-game.jumpHeight);

    // Reset height
    game.jumpHeight = 700;
  }

  // Key function
  const keyPress = (key) => {
    if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(key))) {
      return true;
    } else {
      return false;
    }
  }

  // Shoot
  if ((keyPress(Phaser.Input.Keyboard.KeyCodes.SPACE) || keyPress(Phaser.Input.Keyboard.KeyCodes.C)) && game.carrot) {
    // SFX
    sfx.carrot.play();

    // Flip
    if (game.player.dir === "R") {
      game.carrots.create(game.player.x, game.player.y, "carrot").setVelocityY(-400).setVelocityX(500).setScale(0.5);
    } else {
      game.carrots.create(game.player.x, game.player.y, "carrot").setVelocityY(-400).setVelocityX(-500).setScale(0.5);
    }
    this.children.bringToTop(game.player);
  } else if ((keyPress(Phaser.Input.Keyboard.KeyCodes.DOWN) || keyPress(Phaser.Input.Keyboard.KeyCodes.X)) && game.sword) {
    // SFX
    sfx.sword.play();

    // Flip
    if (game.player.dir === "R") {
      game.swords.create(game.player.x, game.player.y, "sword").setVelocityY(-400).setVelocityX(600).setScale(0.7);
    } else {
      game.swords.create(game.player.x, game.player.y, "sword").setVelocityY(-400).setVelocityX(-600).setScale(0.7);
    }
    this.children.bringToTop(game.player);
  }

  // Respawn
  if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R))) {
    // SFX
    sfx.respawn.play()

    // Move
    game.player.x = game.checkpoint[0];
    game.player.y = game.checkpoint[1] - 10;
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

  // Rotate swords
  game.swords.getChildren().forEach(sprite => {
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
    if (sprite.x > config.width + 4970) {
      if (sprite.dir === "L") {
        sprite.vel = 200;
        sprite.dir = "R";
      } else {
        sprite.vel = -200;
        sprite.dir = "L";
      }
    }

    // Rotate
    if (sprite.dir === "L") {
      sprite.angle -= 5;
    } else {
      sprite.angle += 5;
    }

    // Move
    if (sprite.moves) {
      sprite.setVelocityX(sprite.vel);
    }
  });

  // Snail
  game.snails.getChildren().forEach(sprite => {
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
    if (sprite.x > config.width + 4970) {
      if (sprite.dir === "L") {
        sprite.vel = 200;
        sprite.dir = "R";
      } else {
        sprite.vel = -200;
        sprite.dir = "L";
      }
    }

    // Active
    if (sprite.active) {
      // Animation
      sprite.anims.play("snail", true);

      // Move
      sprite.setVelocityX(sprite.vel);
    } else {
      if (sprite.timer < 0) {
        sprite.active = true;
      } else {
        sprite.setVelocityX(0);
        sprite.setTexture("snailShell");
        sprite.timer--;
      }
    }
  });

  // Spider
  game.spiders.getChildren().forEach(sprite => {
    // Animation
    sprite.anims.play("spider", true);

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
    if (sprite.x > config.width + 4970) {
      if (sprite.dir === "L") {
        sprite.vel = 200;
        sprite.dir = "R";
      } else {
        sprite.vel = -200;
        sprite.dir = "L";
      }
    }

    // Move
    sprite.setVelocityX(sprite.vel);
  });

  // Laser
  game.lasers.getChildren().forEach(sprite => {
    // Decrement
    sprite.timer--;

    // Check
    if (sprite.timer < 0) {
      // Reset timer
      sprite.timer = 200;

      // Attributes
      laserBlast = game.laserBlasts.create(sprite.x, sprite.y, "laser");
      laserBlast.setGravityY(-1500);
      laserBlast.dir = sprite.dir;
      laserBlast.setSize(35, 10);
      laserBlast.setImmovable(true);
      this.children.bringToTop(sprite);

      // Move
      if (laserBlast.dir === "R") {
        laserBlast.setVelocityX(300);
      } else {
        laserBlast.setVelocityX(-300);
      }
    }
  });

  // SpeedBlock
  game.blocks.getChildren().forEach(sprite => {
    if (sprite.texture.key === "speedBlock") {
      if (sprite.touched) {
        sprite.destroyTimer--;
        if (sprite.destroyTimer < 0) {
          sfx.speedBlock.play();
          sprite.body.enable = false;
          sprite.respawnTimer = 200;
          sprite.destroyTimer = 7;
          sprite.visible = false;
          sprite.touched = false;
        }
      }
      if (sprite.respawnTimer > 0) {
        sprite.respawnTimer--;
      }
      if (!sprite.visible && sprite.respawnTimer <= 0) {
        sprite.visible = true;
        sprite.body.enable = true;
      }
    }
  });

  // Change music
  if (game.player.x < 2536) {
    sfx.background1.play({
      volume: 0.6
    });
  } else {
    sfx.background0.play();
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
  backgroundColor: 0xcfeffc,

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
