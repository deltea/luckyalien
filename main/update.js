// Update
Scene.prototype.update = function() {
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
    if (game.sound) {
      sfx.jump.play();
    }

    // Jump
    game.player.setVelocityY(-game.jumpHeight);

    // Reset height
    game.jumpHeight = 700;

    // Increment jumpsMade
    game.jumpsMade++;
  }
  if (keyPress(Phaser.Input.Keyboard.KeyCodes.UP) && game.jumpsMade % 2 === 0 && !game.player.body.blocked.down && game.abilities.doubleJumps) {
    // SFX
    if (game.sound) {
      sfx.jump.play();
    }

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
    if (game.sound) {
      sfx.carrot.play();
    }

    // Flip
    if (game.player.dir === "R") {
      game.abilities.carrots.create(game.player.x, game.player.y, "carrot").setVelocityY(-400).setVelocityX(500).setScale(0.5);
    } else {
      game.abilities.carrots.create(game.player.x, game.player.y, "carrot").setVelocityY(-400).setVelocityX(-500).setScale(0.5);
    }
  } else if (keyPress(Phaser.Input.Keyboard.KeyCodes.X) && game.abilities.sword) {
    // SFX
    if (game.sound) {
      sfx.sword.play();
    }

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
    if (game.sound) {
      sfx.respawn.play()
    }

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

    // Check if booos scene
    if (this.sceneKey === "Boss") {
      if (sprite.body.blocked.down) {
        sprite.setVelocityX(0);
      }
    }

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
          if (game.sound) {
            sfx.speedBlock.play();
          }
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

  // Boss
  if (this.sceneKey === "Boss") {
    if (!game.boss.dead) {
      game.boss.anims.play("spike", true);
    }

    // Hit animation
    if (game.boss.animHit && game.boss.animHitTimer < 50) {
      game.boss.animHitTimer++;
    }
    if (game.boss.animHit && game.boss.animHitTimer >= 50) {
      game.boss.anims.play("spike", true);
      game.boss.animHit = false;
    }

    // Cloud
    if (game.boss.attack) {
      game.cloud.attack = false;
    } else {
      game.cloud.attack = true;
    }
    if (game.cloud.attack && game.cloud.timer >= (game.boss.health <= 20 ? 59 : 99) && !game.boss.dead) {
      let spike = game.spikes.create(game.cloud.x, game.cloud.y, "spike0").setCollideWorldBounds(true).setScale(0.4);
      spike.setVelocityX(game.player.x - game.cloud.x);
      if (Math.random() * 2 > 1) {
        spike.vel = 200;
      } else {
        spike.vel = -200;
      }
      game.cloud.timer = 0;
    }
    if (game.cloud.attack && game.cloud.timer < (game.boss.health <= 20 ? 59 : 99)) {
      game.cloud.timer++;
    }

    // Phases
    // Attack
    if (game.boss.attack && !game.boss.attacked) {
      game.boss.setVelocityX(game.boss.speed).setVelocityY(game.boss.speed);
      game.boss.attackTime++;
      game.boss.timer = 0;
      game.boss.attacked = true;
    }
    if (game.boss.attack && game.boss.attacked && !game.boss.dead) {
      game.boss.timer++
      if (game.boss.timer === 250 && game.boss.attackTime >= 2) {
        if (game.sound) {
          sfx.flames.play();
        }
        let flameNum = 15;
        for (var i = 0; i < flameNum; i++) {
          let flame = game.flames.create(game.boss.x, game.boss.y, "fire").setCircle(30).setOffset(0, 10);
          flame.angle = i * 360 / flameNum;
          flame.setVelocityX(300 * Math.cos(flame.rotation - 67.5));
          flame.setVelocityY(300 * Math.sin(flame.rotation - 67.5));
          flame.setGravityY(-config.physics.arcade.gravity.y);
        }
      }
    }
    if (game.boss.timer >= 500) {
      game.boss.attack = false;
      game.boss.timer = 0;
      game.boss.speed += 50;
      game.boss.setVelocityX(0).setVelocityY(0);
      game.boss.x = 650;
      game.boss.y = 321.5;
    }

    // Player attack
    if (!game.boss.attack && game.boss.timer <= 300) {
      game.boss.timer++;
    }
    if (!game.boss.attack && game.boss.timer > 300) {
      game.boss.attack = true;
      game.boss.timer = 0;
      game.boss.attacked = false;
    }

    // Boss die
    if (game.boss.health <= 0 && !game.boss.dead) {
      if (game.sound) {
        sfx.bossExplode.play({
          volume: 2,
          rate: 0.5
        });
      }
      sfx.boss.stop();
      game.cloud.visible = false;
      game.cloud.body.enable = false;
      game.boss.anims.stop("spike");
      game.boss.dead = true;
      game.boss.dieTimer = 0;
      game.boss.setTexture("smoke").setScale(10);
      game.boss.body.enable = false;
    }
    if (game.boss.dead && game.boss.dieTimer >= 50) {
      game.boss.visible = false;
    }
    if (game.boss.dead && game.boss.dieTimer >= 200) {
      sfx.win.play();
      this.scene.stop();
      this.scene.start("Credits");
    }
    if (game.boss.dead && game.boss.dieTimer < 400) {
      game.boss.dieTimer++;
    }
  }
}
