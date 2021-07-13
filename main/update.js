// Update
Scene.prototype.update = function() {
  // Controls
  this.controls();

  // Coin animation
  game.coins.getChildren().forEach(sprite => {
    if (sprite.value === 1) {
      sprite.anims.play("goldCoin", true);
    } else {
      sprite.anims.play("bronzeCoin", true);
    }
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

    // Check if boss scene
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

  // Bats
  game.bats.getChildren().forEach(sprite => {
    sprite.anims.play("bat", true);
  });

  // Update live
  for (var i = 0; i < game.liveStats.getChildren().length; i++) {
    // Check if it's int or float
    if (stats.lives % 1 === 0 && stats.lives - 1 >= i) {
      game.liveStats.getChildren()[i].setTexture("fullHeart");
    } else if (stats.lives % 1 === 0 && stats.lives - 1 < i) {
      game.liveStats.getChildren()[i].setTexture("emptyHeart");
    }
  }

  // Boss scene
  this.boss();
};
