// Create
Scene.prototype.create = function() {
  // This class
  const thisScene = this;

  // SFX
  sfx.background = this.sound.add("background");
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
  sfx.door = this.sound.add("door");
  sfx.bossExplode = this.sound.add("bossExplode");
  sfx.boss = this.sound.add("boss");
  sfx.win = this.sound.add("win");
  sfx.flames = this.sound.add("flames");

  // Input
  game.cursors = this.input.keyboard.createCursorKeys();

  // Loop music
  sfx.background.setLoop(true);

  // Play music
  if (game.sound) {
    sfx.background.play();
  }

  // Create background
  for (var i = 0; i < 8; i++) {
    this.add.image(i * 1024, this.sceneHeight - 243, world[this.sceneKey].backgroundImage);
  }

  // Create clouds
  if (this.hasClouds) {
    game.clouds = this.physics.add.staticGroup();
    for (var i = 0; i < 10; i++) {
      game.clouds.create(Math.random() * this.sceneLength, Math.random() * this.sceneHeight - 500, `cloud${Math.round(Math.random() * 2)}`);
    }
  }

  // House
  if (this.sceneKey === "Grassland") {
    game.house = this.physics.add.staticSprite(150, 1000, "house").setScale(2).setSize(246, 246).setOffset(-50, -22);
  }

  // Find other door
  let xPos;
  let yPos;
  if (game.lastScene === "") {
    xPos = 200;
    yPos = 1100;
  } else {
    world[this.sceneKey].doors.forEach(sprite => {
      if (game.lastScene === sprite[2]) {
        xPos = sprite[0];
        yPos = sprite[1];
      }
    });
  }

  // Player
  game.player = this.physics.add.sprite(xPos, yPos, "player").setScale(0.8);

  // Set checkpoints
  game.checkpoint = [game.player.x, game.player.y];

  // Player and house collider
  this.physics.add.collider(game.player, game.house);

  // Camera
  this.cameras.main.setBounds(0, 0, this.sceneLength, this.sceneHeight);
  this.physics.world.setBounds(0, 0, this.sceneLength, this.sceneHeight);
  this.cameras.main.startFollow(game.player, true, 0.1, 0.1);

  // Number stats
  game.abilities.carrotNumbers = this.physics.add.staticGroup();

  // Bounds
  game.player.setCollideWorldBounds(true);

  // Signs
  game.signs = this.physics.add.staticGroup();

  // Create signs
  for (var x = 0; x < world[this.sceneKey].signs.length; x++) {
    let sign = game.signs.create(world[this.sceneKey].signs[x][0], world[this.sceneKey].signs[x][1], "sign");
    sign.setScale(0.5).setSize(64, 64).setOffset(32, 32);
    sign.content = world[this.sceneKey].signs[x][2];
  }

  // Collider Sign, Player
  this.physics.add.overlap(game.player, game.signs, function(player, sign) {
    if (Phaser.Input.Keyboard.JustDown(thisScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN))) {
      game.signContent = sign.content;
      thisScene.scene.stop(this.sceneKey);
      thisScene.scene.start("SignContent");
    }
  });

  // Blocks
  game.blocks = this.physics.add.staticGroup();

  // Create blocks
  for (var x = 0; x < world[this.sceneKey].blocks.length; x++) {
    game.blocks.create(world[this.sceneKey].blocks[x][0], world[this.sceneKey].blocks[x][1], world[this.sceneKey].blocks[x][2]).setScale(0.3).setSize(40, 39).setOffset(44, 44);
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
    if (game.sound) {
      sfx.coin.play();
    }

    // Add to coins
    stats.coins += coin.value;

    // Update stat
    game.numCoinStat.text = stats.coins;

    // Destroy
    coin.destroy();
  });

  // Coin stat
  game.coinStat = this.physics.add.staticSprite(40, 40, "coinStat").setScale(0.7).setScrollFactor(0);

  // Number of coins
  game.numCoinStat = this.add.text(70, 12, stats.coins, {
    fontFamily: "kenneyPixel",
    fontSize: 60,
    fontColor: 0x000
  }).setScrollFactor(0);

  // Mushrooms
  game.mushrooms = this.physics.add.staticGroup();

  // Create mushrooms
  for (var x = 0; x < world[this.sceneKey].mushrooms.length; x++) {
    game.mushrooms.create(world[this.sceneKey].mushrooms[x][0], world[this.sceneKey].mushrooms[x][1], "mushroom").setScale(1).setSize(80, 75).setOffset(0, 5).setCollideWorldBounds(true);
  }

  // Collider Player, Mushroom
  this.physics.add.collider(game.player, game.mushrooms, function(player, mushroom) {
    if (player.body.touching.down && mushroom.body.touching.up && game.abilities.bounceMagic) {
      // SFX
      if (game.sound) {
        sfx.mushroom.play();
      }

      // Bounce
      game.player.setVelocityY(-1050);
    }
  });

  // Doors
  game.doors = this.physics.add.group();

  // Create doors
  for (var x = 0; x < world[this.sceneKey].doors.length; x++) {
    let door = game.doors.create(world[this.sceneKey].doors[x][0], world[this.sceneKey].doors[x][1], "door").setScale(0.65).setSize(70, 110).setOffset(0, 0).setCollideWorldBounds(true).setGravityY(-config.physics.arcade.gravity.y);
    door.location = world[this.sceneKey].doors[x][2];
  }

  // Bring to top layer
  this.children.bringToTop(game.player);

  // Collider Player, Door
  // HACK: Can't reach "this" from collider function
  this.physics.add.overlap(game.player, game.doors, function(player, door) {
    if (game.cursors.down.isDown) {
      // Play SFX
      if (game.sound) {
        sfx.door.play({
          volume: 3
        });
      }

      // Stop music
      sfx.background.stop();

      // Set variables
      game.lastScene = thisScene.sceneKey;
      game.isFirstScene = false;

      // Transport to new location
      thisScene.scene.start(door.location);
    }
  });

  // Boxes
  game.boxes = this.physics.add.staticGroup();

  // Create boxes
  for (var x = 0; x < world[this.sceneKey].boxes.length; x++) {
    let box = game.boxes.create(world[this.sceneKey].boxes[x][0], world[this.sceneKey].boxes[x][1], "activeBox");
    box.setScale(0.3).setSize(40, 39).setOffset(45, 45);
    box.active = true;
    box.entity = world[this.sceneKey].boxes[x][2];
  }

  // Collider Player, Box
  this.physics.add.collider(game.player, game.boxes, function(player, box) {
    if (player.body.touching.up && box.body.touching.down) {
      if (box.active) {
        // SFX
        if (box.entity.includes("Powerup")) {
          if (game.sound) {
            sfx.powerup2.play({
              volume: 4
            });
          }
        } else {
          if (game.sound) {
            sfx.box.play();
          }
        }

        // Box
        box.setTexture("inactiveBox");
        box.active = false;

        if (box.entity === "goldCoin") {
          // Create gold coin
          let coin = game.coins.create(box.x, box.y - 30, "goldCoin0").setCollideWorldBounds(true).setScale(0.4).setVelocityY(-500);
          coin.value = 1;
        } else if (box.entity === "bronzeCoin") {
          // Create bronze coin
          let coin = game.coins.create(box.x, box.y - 30, "bronzeCoin0").setCollideWorldBounds(true).setScale(0.4).setVelocityY(-500);
          coin.value = 5;
        } else if (box.entity === "carrotPowerup") {
          // Create carrotPowerup
          if (!game.abilities.carrot) {
            game.abilities.carrotPowerup.create(box.x, box.y - 30, "carrotPowerup").setCollideWorldBounds(true).setScale(0.5).setVelocityY(-500);
          } else {
            // Create coin instead, can't collect powerup two times
            let coin = game.coins.create(box.x, box.y - 30, "goldCoin0").setCollideWorldBounds(true).setScale(0.4).setVelocityY(-500);
            coin.value = 1;
          }
        } else if (box.entity === "heartContainer") {
          // Create heart container
          game.heartContainers.create(box.x, box.y - 30, "emptyHeart").setCollideWorldBounds(true).setScale(0.35).setVelocityY(-500);
        } else if (box.entity === "mushroomPowerup") {
          // Create mushroomPowerup
          if (!game.abilities.mushroom) {
            game.mushroomPowerup.create(box.x, box.y - 30, "mushroomPowerup").setCollideWorldBounds(true).setScale(0.8).setVelocityY(-500);
          } else {
            // Create coin instead, can't collect powerup two times
            let coin = game.coins.create(box.x, box.y - 30, "goldCoin0").setCollideWorldBounds(true).setScale(0.4).setVelocityY(-500);
            coin.value = 1;
          }
        } else if (box.entity === "swordPowerup") {
          // Create swordPowerup
          if (!game.abilities.sword) {
            game.abilities.swordPowerup.create(box.x, box.y - 30, "sword").setCollideWorldBounds(true).setScale(0.8).setVelocityY(-500);
          } else {
            // Create coin instead, can't collect powerup two times
            let coin = game.coins.create(box.x, box.y - 30, "goldCoin0").setCollideWorldBounds(true).setScale(0.4).setVelocityY(-500);
            coin.value = 1;
          }
        } else {
          // Create doubleJumpPowerup
          if (!game.abilities.doubleJumps) {
            game.abilities.doubleJumpPowerup.create(box.x, box.y - 30, "doubleJumpPowerup").setCollideWorldBounds(true).setScale(0.5).setVelocityY(-500);
          } else {
            // Create coin instead, can't collect powerup two times
            let coin = game.coins.create(box.x, box.y - 30, "goldCoin0").setCollideWorldBounds(true).setScale(0.4).setVelocityY(-500);
            coin.value = 1;
          }
        }
      }
    }
  });

  // Collider Coin, Box
  this.physics.add.collider(game.coins, game.boxes);

  // Carrots
  game.abilities.swords = this.physics.add.group();
  game.abilities.carrots = this.physics.add.group();

  // Carrot and Sword colliders
  const carrotColliders = [game.blocks, game.mushrooms, game.boxes, game.coins];
  const throwingSprites = [game.abilities.carrots, game.abilities.swords];
  throwingSprites.forEach(throwingSprite => {
    carrotColliders.forEach(sprites => {
      this.physics.add.collider(throwingSprite, sprites, function(throwSprite, sprite) {
        if (sprites === game.coins) {
          // SFX
          if (game.sound) {
            sfx.coin.play();
          }

          // Add to coins
          stats.coins++;

          // Update stat
          game.numCoinStat.text = stats.coins;

          // Destroy
          sprite.destroy();
        }
        throwSprite.destroy();
      });
    });
  });

  // Spikes
  game.spikes = this.physics.add.group();

  // Create spikes
  for (var x = 0; x < world[this.sceneKey].spikes.length; x++) {
    let spike = game.spikes.create(world[this.sceneKey].spikes[x][0], world[this.sceneKey].spikes[x][1], "spike0").setCollideWorldBounds(true).setScale(0.4);
    spike.dir = ["R", "L"][x];
    spike.moves = world[this.sceneKey].spikes[x][2];
    if (spike.moves === false) {
      spike.setGravityY(-config.physics.arcade.gravity.y);
    }
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
    if (game.sound) {
      sfx.die.play({
        volume: 2.5
      });
    }
    if (this.sceneKey === "Boss") {
      sfx.boss.stop();
      this.scene.restart();
    } else {
      this.cameras.main.shake(240, 0.05, false);
      stats.lives--;
      if (stats.lives <= 0) {
        sfx.background.stop();
        this.scene.stop();
        this.scene.start("Grassland")
        stats.lives = stats.maxLives;
        stats.coins = 0;
        game.numCoinStat.text = stats.coins;
        player.x = 200;
        player.y = 1100;
      } else {
        player.x = game.checkpoint[0];
        player.y = game.checkpoint[1] - 10;
      }
    }
  });

  // Collider Spike, Carrot
  this.physics.add.overlap(game.spikes, game.abilities.carrots, function(spike, carrot) {
    // SFX
    if (game.sound) {
      sfx.shield.play();
    }

    // Destroy
    carrot.destroy();
  });

  // Collider Spike, Sword
  this.physics.add.overlap(game.spikes, game.abilities.swords, function(spike, sword) {
    // SFX
    if (game.sound) {
      sfx.explosion.play();
    }

    // Destroy
    spike.destroy();
    sword.destroy();
  });

  // Snail
  game.snails = this.physics.add.group();

  // Create snails
  for (var x = 0; x < world[this.sceneKey].snails.length; x++) {
    let snail = game.snails.create(world[this.sceneKey].snails[x][0], world[this.sceneKey].snails[x][1], "snail0").setCollideWorldBounds(true).setScale(0.5).setSize(0, 80).setOffset(0, 50);
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
        if (game.sound) {
          sfx.shield.play();
        }

        // Shell
        snail.active = false;
        snail.timer = 250;

        // Bounce
        player.setVelocityY(-500);
      } else {
        // Die
        if (game.sound) {
          sfx.die.play({
            volume: 2.5
          });
        }
        this.cameras.main.shake(240, 0.05, false);
        stats.lives--;
        if (stats.lives <= 0) {
          sfx.background.stop();
          this.scene.stop();
          this.scene.start("Grassland");
          stats.lives = stats.maxLives;
          stats.coins = 0;
          game.numCoinStat.text = stats.coins;
          player.x = 200;
          player.y = 1100;
        } else {
          player.x = game.checkpoint[0];
          player.y = game.checkpoint[1] - 10;
        }
      }
    }
  });

  // Collider Snails, Carrot
  this.physics.add.overlap(game.snails, game.abilities.carrots, function(snail, carrot) {
    // SFX
    if (game.sound) {
      sfx.shield.play();
    }

    // Destroy
    carrot.destroy();

    // Shell
    snail.active = false;
    snail.timer = 250;
  });

  // Collider Snails, Sword
  this.physics.add.overlap(game.snails, game.abilities.swords, function(snail, sword) {
    // SFX
    if (game.sound) {
      sfx.shield.play();
    }

    // Destroy
    sword.destroy();

    // Shell
    snail.active = false;
    snail.timer = 250;
  });

  // Springs
  game.springs = this.physics.add.group();

  // Create springs
  for (var x = 0; x < world[this.sceneKey].springs.length; x++) {
    game.springs.create(world[this.sceneKey].springs[x][0], world[this.sceneKey].springs[x][1], "spring0").setCollideWorldBounds(true).setScale(0.4).setVelocityY(-500).setBounce(1);
  }

  // Collider Springs, Blocks
  this.physics.add.collider(game.springs, game.blocks);

  // Collider Springs, Boxes
  this.physics.add.collider(game.springs, game.boxes);

  // Collider Springs, Player
  this.physics.add.overlap(game.player, game.springs, (player, spring) => {
    if (game.sound) {
      sfx.die.play({
        volume: 2.5
      });
    }
    this.cameras.main.shake(240, 0.05, false);
    stats.lives--;
    if (stats.lives <= 0) {
      sfx.background.stop();
      this.scene.stop();
      sfx.background.stop();
      this.scene.start("Grassland")
      stats.lives = stats.maxLives;
      sfx.background.stop();
      stats.coins = 0;
      game.numCoinStat.text = stats.coins;
      player.x = 200;
      player.y = 1100;
    } else {
      player.x = game.checkpoint[0];
      player.y = game.checkpoint[1] - 10;
    }
  });

  // Collider Springs, Carrots
  this.physics.add.collider(game.springs, game.abilities.carrots, function(spring, carrot) {
    // SFX
    if (game.sound) {
      sfx.explosion.play();
    }

    // Destroy
    carrot.destroy();
    spring.destroy();
  });

  // Collider Springs, Swords
  this.physics.add.collider(game.springs, game.abilities.swords, function(spring, sword) {
    // SFX
    if (game.sound) {
      sfx.explosion.play();
    }

    // Destroy
    sword.destroy();
    spring.destroy();
  });

  // Spider
  game.spiders = this.physics.add.group();

  // Create spider
  for (var x = 0; x < world[this.sceneKey].spiders.length; x++) {
    let spider = game.spiders.create(world[this.sceneKey].spiders[x][0], world[this.sceneKey].spiders[x][1], "spider0").setCollideWorldBounds(true).setScale(0.8);
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
  this.physics.add.collider(game.spiders, game.abilities.carrots, function(spider, carrot) {
    // SFX
    if (game.sound) {
      sfx.explosion.play();
    }

    // Destroy
    carrot.destroy();
    spider.destroy();
  });

  // Collider Spider, Sword
  this.physics.add.collider(game.spiders, game.abilities.swords, function(spider, sword) {
    // SFX
    if (game.sound) {
      sfx.explosion.play();
    }

    // Destroy
    sword.destroy();
    spider.destroy();
  });

  // Collider Spider, Player
  this.physics.add.collider(game.player, game.spiders, (player, spider) => {
    if (player.body.touching.down && spider.body.touching.up) {
      // SFX
      if (game.sound) {
        sfx.explosion.play();
      }

      // Bounce
      game.player.setVelocityY(-500);
      spider.destroy();
    } else {
      // Die
      if (game.sound) {
        sfx.die.play({
          volume: 2.5
        });
      }
      this.cameras.main.shake(240, 0.05, false);
      stats.lives--;
      if (stats.lives <= 0) {
        sfx.background.stop();
        this.scene.stop();
        this.scene.start("Grassland")
        stats.lives = stats.maxLives;
        stats.coins = 0;
        game.numCoinStat.text = stats.coins;
        player.x = 200;
        player.y = 1100;
      } else {
        player.x = game.checkpoint[0];
        player.y = game.checkpoint[1] - 10;
      }
    }
  });

  // CarrotPowerup
  game.abilities.carrotPowerup = this.physics.add.group();

  // Collider Box, CarrotPowerup
  this.physics.add.collider(game.boxes, game.abilities.carrotPowerup);

  // Collider Player, CarrotPowerup
  this.physics.add.overlap(game.player, game.abilities.carrotPowerup, function(player, powerup) {
    // SFX
    if (game.sound) {
      sfx.powerup.play({
        volume: 4
      });
    }

    // Enable
    game.abilities.carrot = true;

    // Destroy
    powerup.destroy();
  });

  // SwordPowerup
  game.abilities.swordPowerup = this.physics.add.group();

  // Collider Box, SwordPowerup
  this.physics.add.collider(game.boxes, game.abilities.swordPowerup);

  // Collider Player, SwordPowerup
  this.physics.add.overlap(game.player, game.abilities.swordPowerup, function(player, powerup) {
    // SFX
    if (game.sound) {
      sfx.powerup.play({
        volume: 4
      });
    }

    // Enable
    game.abilities.sword = true;

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
    if (game.sound) {
      sfx.powerup.play({
        volume: 4
      });
    }

    // Enable
    game.abilities.bounceMagic = true;

    // Destroy
    powerup.destroy();
  });

  // DoubleJumpPowerup
  game.doubleJumpPowerup = this.physics.add.group();

  // Collider Box, DoubleJumpPowerup
  this.physics.add.collider(game.boxes, game.doubleJumpPowerup);

  // Collider Player, DoubleJumpPowerup
  this.physics.add.overlap(game.player, game.doubleJumpPowerup, function(player, powerup) {
    // SFX
    if (game.sound) {
      sfx.powerup.play({
        volume: 4
      });
    }

    // Enable
    game.abilities.doubleJumpPowerup = true;

    // Destroy
    powerup.destroy();
  });

  // Heart container
  game.heartContainers = this.physics.add.group();

  // Collider Box, HeartContainer
  this.physics.add.collider(game.boxes, game.heartContainers);

  // Collider Player, HeartContainer
  this.physics.add.overlap(game.player, game.heartContainers, function(player, container) {
    // SFX
    if (game.sound) {
      sfx.powerup.play({
        volume: 4
      });
    }

    // Add to max lives
    game.liveStats.create(150 + stats.maxLives * 50, 40, "fullHeart").setScrollFactor(0).setScale(0.45);
    stats.maxLives++;

    // Destroy
    container.destroy();
  });

  // Laser
  game.lasers = this.physics.add.staticGroup();
  game.laserBlasts = this.physics.add.group();

  // Create lasers
  for (var x = 0; x < world[this.sceneKey].lasers.length; x++) {
    let laser = game.lasers.create(world[this.sceneKey].lasers[x][0], world[this.sceneKey].lasers[x][1], "laserShooter").setCollideWorldBounds(true).setScale(0.8).setSize(50, 50).setOffset(15, 15);
    laser.dir = world[this.sceneKey].lasers[x][2];
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
    if (game.sound) {
      sfx.die.play({
        volume: 2.5
      });
    }
    this.cameras.main.shake(240, 0.05, false);
    stats.lives--;
    if (stats.lives <= 0) {
      sfx.background.stop();
      sfx.background.stop();
      this.scene.stop();
      this.scene.start("Grassland");
      stats.lives = stats.maxLives;
      stats.coins = 0;
      game.numCoinStat.text = stats.coins;
      player.x = 200;
      player.y = 1100;
    } else {
      player.x = game.checkpoint[0];
      player.y = game.checkpoint[1] - 10;
    }
  });

  // Collider LaserBlasts, Carrots
  this.physics.add.collider(game.laserBlasts, game.abilities.carrots, function(blast, carrot) {
    // SFX
    if (game.sound) {
      sfx.explosion.play();
    }

    // Destroy
    carrot.destroy();
  });

  // Collider LaserBlasts, Swords
  this.physics.add.collider(game.laserBlasts, game.abilities.swords, function(blast, sword) {
    // SFX
    if (game.sound) {
      sfx.explosion.play();
    }

    // Destroy
    sword.destroy();
  });

  // Collider LaserBlasts, Blocks
  this.physics.add.collider(game.laserBlasts, game.blocks, function(blast, block) {
    // Destroy
    blast.destroy();
  });

  // Collider Lasers, Carrot
  this.physics.add.overlap(game.lasers, game.abilities.carrots, function(laser, carrot) {
    // SFX
    if (game.sound) {
      sfx.shield.play();
    }

    // Destroy
    carrot.destroy();
  });

  // Collider Lasers, Sword
  this.physics.add.overlap(game.lasers, game.abilities.swords, function(laser, sword) {
    // SFX
    if (game.sound) {
      sfx.explosion.play();
    }

    // Destroy
    laser.destroy();
    sword.destroy();
  });

  // Flags
  game.flags = this.physics.add.staticGroup();
  world[this.sceneKey].flags.forEach(data => {
    let flag = game.flags.create(data[0], data[1], "flagDown").setScale(0.5).setSize(20, 60).setOffset(30, 35);
    flag.active = false;
    flag.area = data[1];
  });

  // Collider Flag, Player
  this.physics.add.overlap(game.flags, game.player, function(player, flag) {
    // SFX
    if (flag.active === false) {
      if (game.sound) {
        sfx.checkpoint.play();
      }
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

  // Bats and bat poop
  game.bats = this.physics.add.group();
  game.batPoop = this.physics.add.group();

  // Create bats
  for (var i = 0; i < world[this.sceneKey].bats.length; i++) {
    let bat = game.bats.create(world[this.sceneKey].bats[i][0], world[this.sceneKey].bats[i][1], "bat0").setCollideWorldBounds(true);
    bat.poops = world[this.sceneKey].bats[i][5];
    bat.setGravityY(-config.physics.arcade.gravity.y);
    bat.endX = world[this.sceneKey].bats[i][2];
    bat.endY = world[this.sceneKey].bats[i][3];
    bat.tweenDur = world[this.sceneKey].bats[i][4];

    // Bat move tween
    bat.fly = this.tweens.add({
      // Target
      targets: bat,

      // Move
      x: bat.endX,
      y: bat.endY,

      // Ease
      ease: "Quad.easeInOut",

      // Duration
      duration: bat.tweenDur,

      // On start
      onRepeat: () => {
        bat.flipX = false;
      },

      // On complete
      onYoyo: () => {
        bat.flipX = true;
      },

      // Repeat forever
      repeat: -1,

      // Yoyo
      yoyo: true
    });

    // Bat poop timer
    bat.batPoopTimer = this.time.addEvent({
      // Time
      delay: 2000,

      // Callback
      callback: () => {
        game.batPoop.create(bat.x, bat.y, `batPoop${Math.floor(Math.random() * 3)}`).setScale(0.7);
      },
      callbackScope: this,

      // Options
      repeat: -1
    });
  }

  // Collider Bat and bat poop, Player
  this.physics.add.collider(game.player, [game.bats, game.batPoop], function(player, bat) {
    if (game.sound) {
      sfx.die.play({
        volume: 2.5
      });
    }
    bat.destroy();
    thisScene.cameras.main.shake(240, 0.05, false);
    stats.lives--;
    if (stats.lives <= 0) {
      sfx.background.stop();
      thisScene.scene.stop();
      thisScene.scene.start("Grassland");
      stats.lives = stats.maxLives;
      stats.coins = 0;
      game.numCoinStat.text = stats.coins;
      player.x = 200;
      player.y = 1100;
    } else {
      player.x = game.checkpoint[0];
      player.y = game.checkpoint[1] - 10;
    }
  });

  // Collider Bat, Sword and Carrot
  this.physics.add.collider(game.bats, [game.abilities.swords, game.abilities.carrots], function(bat, shoot) {
    // SFX
    if (game.sound) {
      sfx.explosion.play();
    }

    // Stop timer
    bat.batPoopTimer.destroy();

    // Destroy
    bat.destroy();
    shoot.destroy();
  });

  // Boss
  if (this.sceneKey === "Boss") {
    sfx.background.stop();
    sfx.boss.play();
    sfx.boss.setLoop(true);

    game.boss = this.physics.add.sprite(650, 321.5, "spike0").setCollideWorldBounds(true).setScale(1);
    game.cloud = this.physics.add.sprite(650, 50, "cloud").setCollideWorldBounds(true).setVelocityX(500).setScale(0.5);
    game.flames = this.physics.add.group();
    game.boss.setGravityY(-config.physics.arcade.gravity.y);
    game.cloud.setGravityY(-config.physics.arcade.gravity.y);
    game.boss.setBounce(1);
    game.cloud.setBounce(1);
    game.boss.attackTime = 0;
    game.cloud.timer = 0;
    game.boss.attack = true;
    game.cloud.attack = false;
    game.boss.animHit = false;
    game.boss.health = 30;
    game.boss.speed = 350;

    // Collider Flame, Player
    this.physics.add.overlap(game.player, game.flames, (player, flames) => {
      if (game.sound) {
        sfx.die.play({
          volume: 2.5
        });
      }
      sfx.boss.stop();
      this.scene.restart();
      this.cameras.main.shake(240, 0.05, false);
    });

    // Collider Boss, Player
    this.physics.add.overlap(game.player, game.boss, (player, boss) => {
      if (game.sound) {
        sfx.die.play({
          volume: 2.5
        });
      }
      sfx.boss.stop();
      this.scene.restart();
      this.cameras.main.shake(240, 0.05, false);
    });

    // Collider Boss, Carrot
    this.physics.add.overlap(game.boss, game.abilities.carrots, function(boss, carrot) {
      // SFX
      if (game.sound) {
        sfx.shield.play();
      }

      // Destroy
      carrot.destroy();
    });

    // Collider Boss, Sword
    this.physics.add.overlap(game.boss, game.abilities.swords, function(boss, sword) {
      // SFX
      if (game.sound) {
        if (boss.attack) {
          sfx.shield.play();
        } else {
          // Hit
          game.boss.animHitTimer = 0;
          game.boss.animHit = true;
          game.boss.setTexture("bossHit");
          sfx.explosion.play();
          boss.health--;
        }
      }

      // Destroy
      sword.destroy();
    });
  }

  // Sound stat
  game.soundStat = this.physics.add.staticSprite(1260, 40, "soundOn").setScale(1.2).setScrollFactor(0).setInteractive();

  // Interaction
  game.soundStat.on("pointerdown", () => {
    // Change status
    if (game.sound) {
      game.soundStat.setTexture("soundOff");
      sfx.background.stop();
      sfx.boss.stop();
      game.sound = false;
    } else {
      game.soundStat.setTexture("soundOn");
      if (this.sceneKey === "Boss") {
        sfx.boss.play();
      } else {
        sfx.background.play();
      }
      game.sound = true;
    }
  });

  // Fullscreen UI
  game.fullscreenButton = this.physics.add.staticSprite(1200, 40, "fullscreen").setScrollFactor(0).setInteractive();

  // Interaction
  game.fullscreenButton.on("pointerdown", () => {
    // Change status
    game.fullscreen = !game.fullscreen;
    if (game.fullscreen) {
      game.fullscreenButton.setTexture("closeFullscreen");
      this.scale.startFullscreen();
    } else {
      game.fullscreenButton.setTexture("fullscreen");
      this.scale.stopFullscreen();
    }
  });

  // Lives stat
  game.liveStats = this.physics.add.staticGroup();

  // Create hearts
  if (this.sceneKey !== "Boss") {
    for (var i = 0; i < stats.maxLives; i++) {
      game.liveStats.create(150 + i * 50, 40, "fullHeart").setScrollFactor(0).setScale(0.45);
    }
  }

  // Load animations
  this.animations();
};
