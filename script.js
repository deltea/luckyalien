// Alien
// Game obj
let game = {
  jumpHeight: 700,
  checkpoint: [200, 1100],
  lastScene: "",
  isFirstScene: true,
  jumpsMade: 0,
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

  // Preload
  preload() {
    // Load images
    // Backgrounds
    this.load.image("background0", "assets/imgs/background0.png");
    this.load.image("background1", "assets/imgs/background1.png");
    this.load.image("background2", "assets/imgs/background2.png");

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

    // DoubleJumpPowerup
    this.load.image("doubleJumpPowerup", "assets/imgs/doubleJumpPowerup.png");

    // House
    this.load.image("house", "assets/imgs/house.png");

    // Laser
    this.load.image("laser", "assets/imgs/laser.png");
    this.load.image("laserShooter", "assets/imgs/laserShooter.png");

    // Door
    this.load.image("door", "assets/imgs/door.png");

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
    this.load.audio("background", "assets/sfx/background.mp3");

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

    // Door
    this.load.audio("door", "assets/sfx/door.wav");
  }

  // Create
  create() {
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

    // Loop music
    sfx.background.setLoop(true);

    // Play music
    sfx.background.play();

    // Create background
    for (var i = 0; i < 8; i++) {
      this.add.image(i * 1024, this.sceneHeight - 243, world[this.sceneKey].backgroundImage);
    }

    // Create clouds
    if (this.hasClouds) {
      game.clouds = this.physics.add.staticGroup();
      for (var i = 0; i < 10; i++) {
        game.clouds.create(Math.random() * this.sceneLength, Math.random() * this.sceneHeight - 500, `cloud${Math.round(Math.random() * 2)}`)
      }
    }

    // House
    if (this.sceneKey === "Grassland") {
      game.house = this.physics.add.staticSprite(150, 1000, "house").setScale(2).setSize(246, 246).setOffset(-50, -22);
    }

    // Find other door
    let xPos;
    let yPos;
    world[this.sceneKey].doors.forEach(sprite => {
      if (game.lastScene === "") {
        xPos = 200;
        yPos = 1100;
      } else {
        if (game.lastScene === sprite[2]) {
          xPos = sprite[0];
          yPos = sprite[1];
        }
      }
    });

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
    game.coinNumbers = this.physics.add.staticGroup();
    game.abilities.carrotNumbers = this.physics.add.staticGroup();

    // Bounds
    game.player.setCollideWorldBounds(true);

    // Input
    game.cursors = this.input.keyboard.createCursorKeys();

    // Blocks
    game.blocks = this.physics.add.staticGroup();

    // Create blocks
    for (var x = 0; x < world[this.sceneKey].blocks.length; x++) {
      let block = game.blocks.create(world[this.sceneKey].blocks[x][0], world[this.sceneKey].blocks[x][1], world[this.sceneKey].blocks[x][2]).setScale(0.3).setSize(40, 39).setOffset(44, 44);
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
    for (var x = 0; x < world[this.sceneKey].mushrooms.length; x++) {
      game.mushrooms.create(world[this.sceneKey].mushrooms[x][0], world[this.sceneKey].mushrooms[x][1], "mushroom").setScale(1).setSize(80, 75).setOffset(0, 5).setCollideWorldBounds(true);
    }

    // Collider Player, Mushroom
    this.physics.add.collider(game.player, game.mushrooms, function(player, mushroom) {
      if (player.body.touching.down && mushroom.body.touching.up && game.abilities.bounceMagic) {
        // SFX
        sfx.mushroom.play();

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
    const thisClass = this;
    this.physics.add.overlap(game.player, game.doors, function(player, door) {
      if (game.cursors.down.isDown) {
        // Play SFX
        sfx.door.play({
          volume: 3
        });

        // Stop music
        sfx.background.stop();

        // Set variables
        game.lastScene = thisClass.sceneKey;
        game.isFirstScene = false;

        // Transport to new location
        thisClass.scene.start(door.location);
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
          if (box.entity === "carrotPowerup" || box.entity === "mushroomPowerup" || box.entity === "swordPowerup"  || box.entity === "doubleJumpPowerup") {
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
            game.abilities.carrotPowerup.create(box.x, box.y - 30, "carrotPowerup").setCollideWorldBounds(true).setScale(0.5).setVelocityY(-500);
          } else if (box.entity === "mushroomPowerup") {
            // Create mushroomPowerup
            game.mushroomPowerup.create(box.x, box.y - 30, "mushroomPowerup").setCollideWorldBounds(true).setScale(0.8).setVelocityY(-500);
          } else if (box.entity === "swordPowerup") {
            // Create swordPowerup
            game.abilities.swordPowerup.create(box.x, box.y - 30, "sword").setCollideWorldBounds(true).setScale(0.8).setVelocityY(-500);
          } else {
            // Create doubleJumpPowerup
            game.abilities.swordPowerup.create(box.x, box.y - 30, "doubleJumpPowerup").setCollideWorldBounds(true).setScale(0.5).setVelocityY(-500);
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
      sfx.die.play({
        volume: 2.5
      });
      this.cameras.main.shake(240, 0.05, false);
      player.x = game.checkpoint[0];
      player.y = game.checkpoint[1] - 10;
    });

    // Collider Spike, Carrot
    this.physics.add.overlap(game.spikes, game.abilities.carrots, function(spike, carrot) {
      // SFX
      sfx.shield.play();

      // Destroy
      carrot.destroy();
    });

    // Collider Spike, Sword
    this.physics.add.overlap(game.spikes, game.abilities.swords, function(spike, sword) {
      // SFX
      sfx.explosion.play();

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
    this.physics.add.overlap(game.snails, game.abilities.carrots, function(snail, carrot) {
      // SFX
      sfx.shield.play();

      // Destroy
      carrot.destroy();

      // Shell
      snail.active = false;
      snail.timer = 250;
    });

    // Collider Snails, Sword
    this.physics.add.overlap(game.snails, game.abilities.swords, function(snail, sword) {
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
    for (var x = 0; x < world[this.sceneKey].springs.length; x++) {
      game.springs.create(world[this.sceneKey].springs[x][0], world[this.sceneKey].springs[x][1], "spring0").setCollideWorldBounds(true).setScale(0.4).setVelocityY(-500).setBounce(1);
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
    this.physics.add.collider(game.springs, game.abilities.carrots, function(spring, carrot) {
      // SFX
      sfx.explosion.play();

      // Destroy
      carrot.destroy();
      spring.destroy();
    });

    // Collider Springs, Swords
    this.physics.add.collider(game.springs, game.abilities.swords, function(spring, sword) {
      // SFX
      sfx.explosion.play();

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
      sfx.explosion.play();

      // Destroy
      carrot.destroy();
      spider.destroy();
    });

    // Collider Spider, Sword
    this.physics.add.collider(game.spiders, game.abilities.swords, function(spider, sword) {
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
    game.abilities.carrotPowerup = this.physics.add.group();

    // Collider Box, CarrotPowerup
    this.physics.add.collider(game.boxes, game.abilities.carrotPowerup);

    // Collider Player, CarrotPowerup
    this.physics.add.overlap(game.player, game.abilities.carrotPowerup, function(player, powerup) {
      // SFX
      sfx.powerup.play({
        volume: 4
      });

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
      sfx.powerup.play({
        volume: 4
      });

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
      sfx.powerup.play({
        volume: 4
      });

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
      sfx.powerup.play({
        volume: 4
      });

      // Enable
      game.abilities.doubleJumpPowerup = true;

      // Destroy
      powerup.destroy();
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
      sfx.die.play({
        volume: 2.5
      });
      this.cameras.main.shake(240, 0.05, false);
      player.x = game.checkpoint[0];
      player.y = game.checkpoint[1] - 10;
    });

    // Collider LaserBlasts, Carrots
    this.physics.add.collider(game.laserBlasts, game.abilities.carrots, function(blast, carrot) {
      // SFX
      sfx.explosion.play();

      // Destroy
      carrot.destroy();
    });

    // Collider LaserBlasts, Swords
    this.physics.add.collider(game.laserBlasts, game.abilities.swords, function(blast, sword) {
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
    this.physics.add.overlap(game.lasers, game.abilities.carrots, function(laser, carrot) {
      // SFX
      sfx.shield.play();

      // Destroy
      carrot.destroy();
    });

    // Collider Lasers, Sword
    this.physics.add.overlap(game.lasers, game.abilities.swords, function(laser, sword) {
      // SFX
      sfx.explosion.play();

      // Destroy
      laser.destroy();
      sword.destroy();
    });

    // Flags
    game.flags = this.physics.add.staticGroup();
    world[this.sceneKey].flags.forEach(data => {
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
  update() {
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

    // Key function
    const keyPress = (key) => {
      if (Phaser.Input.Keyboard.JustDown(this.input.keyboard.addKey(key))) {
        return true;
      } else {
        return false;
      }
    }

    // Jump
    if (game.cursors.up.isDown && game.player.body.blocked.down) {
      // SFX
      sfx.jump.play();

      // Jump
      game.player.setVelocityY(-game.jumpHeight);

      // Reset height
      game.jumpHeight = 700;

      // Increment jumpsMade
      game.jumpsMade++;
    }
    if (keyPress(Phaser.Input.Keyboard.KeyCodes.UP) && game.jumpsMade % 2 === 0 && !game.player.body.blocked.down && game.abilities.doubleJumps) {
      // SFX
      sfx.jump.play();

      // Jump
      game.player.setVelocityY(-game.jumpHeight);

      // Reset height
      game.jumpHeight = 700;

      // Increment jumpsMade
      game.jumpsMade++;
    }

    // Shoot
    if (keyPress(Phaser.Input.Keyboard.KeyCodes.C) && game.abilities.carrot) {
      // SFX
      sfx.carrot.play();

      // Flip
      if (game.player.dir === "R") {
        game.abilities.carrots.create(game.player.x, game.player.y, "carrot").setVelocityY(-400).setVelocityX(500).setScale(0.5);
      } else {
        game.abilities.carrots.create(game.player.x, game.player.y, "carrot").setVelocityY(-400).setVelocityX(-500).setScale(0.5);
      }
    } else if (keyPress(Phaser.Input.Keyboard.KeyCodes.X) && game.abilities.sword) {
      // SFX
      sfx.sword.play();

      // Flip
      if (game.player.dir === "R") {
        game.abilities.swords.create(game.player.x, game.player.y, "sword").setVelocityY(-400).setVelocityX(600).setScale(0.7);
      } else {
        game.abilities.swords.create(game.player.x, game.player.y, "sword").setVelocityY(-400).setVelocityX(-600).setScale(0.7);
      }
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
    game.abilities.carrots.getChildren().forEach(sprite => {
      sprite.angle += 20;
    });

    // Rotate swords
    game.abilities.swords.getChildren().forEach(sprite => {
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
        let laserBlast = game.laserBlasts.create(sprite.x, sprite.y, "laser");
        laserBlast.setGravityY(-config.physics.arcade.gravity.y);
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
  }
}

// Scenes
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

// Secret
class Secret extends Scene {
  // Constructor
  constructor() {
    // Super
    super("Secret");
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
  scene: [Grassland, Forest, Secret, Clouds]
};

// Phaser game
const phaserGame = new Phaser.Game(config);
