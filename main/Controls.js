Scene.prototype.controls = function() {
  // Controls
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
  };

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
      sfx.respawn.play();
    }

    // Move
    game.player.x = game.checkpoint[0];
    game.player.y = game.checkpoint[1] - 10;
  }
};
