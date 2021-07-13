// Boss
Scene.prototype.boss = function() {
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
      game.boss.timer++;
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
    }
    if (game.boss.dead && game.boss.dieTimer === 400) {
      this.scene.stop();
      this.scene.start("Credits");
    }
    if (game.boss.dead && game.boss.dieTimer < 400) {
      game.boss.dieTimer++;
    }
  }
};
