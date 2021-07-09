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
}
