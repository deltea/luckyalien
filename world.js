// World
const world = {
  blocks: [
    // Pyramid
    [580, 1122, "grassBlock"],
    [620, 1122, "grassBlock"],
    [620, 1082, "grassBlock"],
    [660, 1042, "grassBlock"],
    [660, 1082, "grassBlock"],
    [660, 1122, "grassBlock"],
    [700, 1002, "grassBlock"],
    [700, 1042, "grassBlock"],
    [700, 1082, "grassBlock"],
    [700, 1122, "grassBlock"],
    [740, 962, "grassBlock"],
    [740, 1122, "grassBlock"],
    [740, 1002, "grassBlock"],
    [740, 1042, "grassBlock"],
    [740, 1082, "grassBlock"],
    [940, 1122, "grassBlock"],
    [900, 1122, "grassBlock"],
    [900, 1082, "grassBlock"],
    [860, 1042, "grassBlock"],
    [860, 1082, "grassBlock"],
    [860, 1122, "grassBlock"],
    [820, 1002, "grassBlock"],
    [820, 1042, "grassBlock"],
    [820, 1082, "grassBlock"],
    [820, 1122, "grassBlock"],
    [780, 962, "grassBlock"],
    [780, 1122, "grassBlock"],
    [780, 1002, "grassBlock"],
    [780, 1042, "grassBlock"],
    [780, 1082, "grassBlock"],

    // Platform
    [1020, 882, "grassBlock"],

    // Platform
    [1140, 802, "grassBlock"],
    [1180, 802, "grassBlock"],

    // Platform
    [1020, 722, "grassBlock"],

    // Platform
    [1140, 642, "grassBlock"],

    // Platform
    [1020, 562, "grassBlock"],

    // Platform
    [1140, 482, "grassBlock"],

    // Platform
    [700, 482, "grassBlock"],
    [740, 482, "grassBlock"],
    [780, 482, "grassBlock"],
    [820, 482, "grassBlock"],
    [860, 482, "grassBlock"],
    [860, 442, "grassBlock"],
    [700, 442, "grassBlock"],

    // Wall
    [2560, 1122, "grassBlock"],
    [2560, 1082, "grassBlock"],
    [2560, 1042, "grassBlock"],
    [2560, 1002, "grassBlock"],
    [2560, 962, "grassBlock"],
    [2560, 922, "grassBlock"],
    [2560, 882, "grassBlock"],
    [2560, 842, "grassBlock"],
    [2560, 802, "grassBlock"],
    [2560, 762, "grassBlock"],

    // Mini wall
    [1220, 1122, "grassBlock"],

    // Mini wall
    [1500, 1122, "grassBlock"],

    // Parallel
    [1780, 1122, "stoneBlock"],
    [1820, 1122, "stoneBlock"],
    [1860, 1122, "stoneBlock"],
    [1900, 1122, "stoneBlock"],
    [1940, 1122, "stoneBlock"],
    [1980, 1122, "stoneBlock"],

    // Mini platform
    [1880, 882, "grassBlock"],
    [1920, 882, "grassBlock"],
    [1840, 882, "grassBlock"],

    // Box
    // Top
    [1340, 482, "stoneBlock"],
    [1380, 482, "stoneBlock"],
    [1420, 482, "stoneBlock"],
    [1460, 482, "stoneBlock"],
    [1500, 482, "stoneBlock"],
    [1540, 482, "stoneBlock"],
    [1580, 482, "stoneBlock"],
    [1620, 482, "stoneBlock"],
    [1660, 482, "stoneBlock"],
    [1700, 482, "stoneBlock"],

    // Left
    [1340, 522, "stoneBlock"],
    [1340, 562, "stoneBlock"],
    [1340, 602, "stoneBlock"],
    [1340, 642, "stoneBlock"],
    [1340, 682, "stoneBlock"],
    [1340, 722, "stoneBlock"],
    [1340, 842, "stoneBlock"],

    // Right
    [1700, 522, "stoneBlock"],
    [1700, 562, "stoneBlock"],
    [1700, 602, "stoneBlock"],
    [1700, 642, "stoneBlock"],
    [1700, 682, "stoneBlock"],
    [1700, 722, "stoneBlock"],
    [1700, 842, "stoneBlock"],

    // Bottom
    [1380, 842, "stoneBlock"],
    [1420, 842, "stoneBlock"],
    [1460, 842, "stoneBlock"],
    [1500, 842, "stoneBlock"],
    [1540, 842, "stoneBlock"],
    [1580, 842, "stoneBlock"],
    [1620, 842, "stoneBlock"],
    [1660, 842, "stoneBlock"],

    // Inside box
    [1500, 722, "grassBlock"],
    [1540, 722, "grassBlock"],

    // Mini wall
    [1340, 442, "stoneBlock"],
    [1340, 402, "stoneBlock"],

    // Mini wall
    [1700, 442, "stoneBlock"],
    [1700, 402, "stoneBlock"],

    // Platform
    [1740, 402, "stoneBlock"],
    [1780, 402, "stoneBlock"],
    [1820, 402, "stoneBlock"],
    [1860, 402, "stoneBlock"],

    // Mini wall
    [2180, 1122, "grassBlock"],

    // Box
    // Bottom
    [1980, 642, "grassBlock"],
    [2020, 642, "grassBlock"],
    [2060, 642, "grassBlock"],
    [2100, 642, "grassBlock"],
    [2140, 642, "grassBlock"],
    [2180, 642, "grassBlock"],
    [2220, 642, "grassBlock"],
    [2260, 642, "grassBlock"],
    [2300, 642, "grassBlock"],
    [2340, 642, "grassBlock"],
    [2380, 642, "grassBlock"],
    [2420, 642, "grassBlock"],
    [2460, 642, "grassBlock"],
    [2500, 642, "grassBlock"],
    [2540, 642, "grassBlock"],
    [2580, 642, "grassBlock"],
    [2620, 642, "grassBlock"],
    [2660, 642, "grassBlock"],
    [2700, 642, "grassBlock"],
    [2740, 642, "grassBlock"],
    [2780, 642, "grassBlock"],
    [2820, 642, "grassBlock"],
    [2860, 642, "grassBlock"],
    [2900, 642, "grassBlock"],
    [2940, 642, "grassBlock"],
    [2980, 642, "grassBlock"],
    [3020, 642, "grassBlock"],
    [3060, 642, "grassBlock"],
    [3100, 642, "grassBlock"],
    [3140, 642, "grassBlock"],
    [3180, 642, "grassBlock"],
    [3220, 642, "grassBlock"],
    [3260, 642, "grassBlock"],
    [3300, 642, "grassBlock"],
    [3340, 642, "grassBlock"],
    [3380, 642, "grassBlock"],

    // Top
    [1980, 202, "grassBlock"],
    [2020, 202, "grassBlock"],
    [2060, 202, "grassBlock"],
    [2100, 202, "grassBlock"],
    [2140, 202, "grassBlock"],
    [2180, 202, "grassBlock"],
    [2220, 202, "grassBlock"],
    [2260, 202, "grassBlock"],
    [2300, 202, "grassBlock"],
    [2340, 202, "grassBlock"],
    [2380, 202, "grassBlock"],
    [2420, 202, "grassBlock"],
    [2460, 202, "grassBlock"],
    [2500, 202, "grassBlock"],
    [2540, 202, "grassBlock"],
    [2580, 202, "grassBlock"],
    [2620, 202, "grassBlock"],
    [2660, 202, "grassBlock"],
    [2700, 202, "grassBlock"],
    [2740, 202, "grassBlock"],
    [2780, 202, "grassBlock"],
    [2820, 202, "grassBlock"],
    [2860, 202, "grassBlock"],
    [2900, 202, "grassBlock"],
    [2940, 202, "grassBlock"],
    [2980, 202, "grassBlock"],
    [3020, 202, "grassBlock"],
    [3060, 202, "grassBlock"],
    [3100, 202, "grassBlock"],
    [3140, 202, "grassBlock"],
    [3180, 202, "grassBlock"],
    [3220, 202, "grassBlock"],
    [3260, 202, "grassBlock"],
    [3300, 202, "grassBlock"],
    [3340, 202, "grassBlock"],
    [3380, 202, "grassBlock"],

    // Left
    [1980, 242, "grassBlock"],
    [1980, 282, "grassBlock"],
    [1980, 322, "grassBlock"],
    [1980, 362, "grassBlock"],
    [1980, 402, "grassBlock"],
    [1980, 442, "grassBlock"],
    [1980, 602, "grassBlock"],

    // Right
    [3380, 242, "grassBlock"],
    [3380, 282, "grassBlock"],
    [3380, 322, "grassBlock"],
    [3380, 362, "grassBlock"],
    [3380, 402, "grassBlock"],
    [3380, 442, "grassBlock"],
    [3380, 482, "grassBlock"],
    [3380, 522, "grassBlock"],
    [3380, 562, "grassBlock"],
    [3380, 602, "grassBlock"],

    // Inside big box
    // Mini wall
    [2140, 562, "stoneBlock"],
    [2140, 602, "stoneBlock"],

    // Mini wall
    [2380, 562, "stoneBlock"],
    [2380, 602, "stoneBlock"],

    // Mini wall
    [2740, 562, "stoneBlock"],
    [2740, 602, "stoneBlock"],

    // Mini wall
    [3100, 602, "stoneBlock"],
    [3100, 562, "stoneBlock"],

    // Mini wall
    [2060, 162, "grassBlock"],
    [2060, 122, "grassBlock"],

    // Platform
    [2600, 762, "speedBlock"],
    [2640, 762, "speedBlock"],
    [2680, 762, "grassBlock"],
    [2720, 762, "grassBlock"],
    [2760, 762, "grassBlock"],
    [2800, 762, "grassBlock"],
    [2840, 762, "grassBlock"],
    [2880, 762, "grassBlock"],
    [2920, 762, "grassBlock"],
    [2960, 762, "grassBlock"],
    [3000, 762, "grassBlock"],
    [3040, 762, "grassBlock"],

    [3180, 762, "speedBlock"],
    [3220, 762, "speedBlock"],
    [3260, 762, "speedBlock"],
    [3300, 762, "speedBlock"],
    [3340, 762, "speedBlock"],
    [3380, 762, "speedBlock"],
    [3420, 762, "speedBlock"],
    [3460, 762, "speedBlock"],
    [3500, 762, "speedBlock"],
    [3540, 762, "speedBlock"],
    [3580, 762, "speedBlock"],
    [3620, 762, "speedBlock"],
    [3660, 762, "speedBlock"],
    [3700, 762, "speedBlock"],
    [3740, 762, "speedBlock"],
    [3780, 762, "speedBlock"],
    [3820, 762, "speedBlock"],
    [3860, 762, "speedBlock"],
    [3900, 762, "speedBlock"],
    [3940, 762, "speedBlock"],
    [3980, 762, "speedBlock"],
    [4020, 762, "speedBlock"],
    [4060, 762, "speedBlock"],
    [4100, 762, "speedBlock"],
    [4140, 762, "speedBlock"],
    [4180, 762, "speedBlock"],
    [4220, 762, "speedBlock"],
    [4260, 762, "speedBlock"],
    [4300, 762, "speedBlock"],
    [4340, 762, "speedBlock"],
    [4380, 762, "speedBlock"],
    [4420, 762, "speedBlock"],
    [4460, 762, "speedBlock"],
    [4500, 762, "speedBlock"],
    [4540, 762, "speedBlock"],
    [4580, 762, "speedBlock"],
    [4620, 762, "speedBlock"],
    [4660, 762, "speedBlock"],
    [4700, 762, "speedBlock"],
    [4740, 762, "speedBlock"],
    [4780, 762, "speedBlock"],
    [4820, 762, "speedBlock"],
    [4860, 762, "speedBlock"],
    [4900, 762, "speedBlock"],
    [4940, 762, "speedBlock"],
    [4980, 762, "speedBlock"],
    [5020, 762, "speedBlock"],
    [5060, 762, "speedBlock"],
    [5100, 762, "speedBlock"],
    [5140, 762, "speedBlock"],
    [5180, 762, "speedBlock"],
    [5220, 762, "speedBlock"],
    [5260, 762, "speedBlock"],
    [5300, 762, "speedBlock"],
    [5340, 762, "speedBlock"],
    [5380, 762, "speedBlock"],
    [5420, 762, "speedBlock"],
    [5460, 762, "speedBlock"],
    [5500, 762, "speedBlock"],
    [5540, 762, "speedBlock"],
    [5580, 762, "speedBlock"],
    [5620, 762, "speedBlock"],
    [5660, 762, "speedBlock"],
    [5700, 762, "speedBlock"],
    [5740, 762, "speedBlock"],
    [5780, 762, "speedBlock"],
    [5820, 762, "speedBlock"],
    [5860, 762, "speedBlock"],
    [5900, 762, "speedBlock"],
    [5940, 762, "speedBlock"],
    [5980, 762, "speedBlock"],

    // Mini wall
    [2880, 1122, "grassBlock"],
    [2880, 1082, "grassBlock"],

    // Mini wall
    [3160, 1122, "grassBlock"],
    [3160, 1082, "grassBlock"],

    // Speed platform
    [3160, 1042, "speedBlock"],
    [3200, 1042, "speedBlock"],
    [3240, 1042, "speedBlock"],
    [3280, 1042, "speedBlock"],
    [3320, 1042, "speedBlock"],
    [3360, 1042, "speedBlock"],
    [3400, 1042, "speedBlock"],
    [3440, 1042, "speedBlock"],
    [3480, 1042, "speedBlock"],
    [3520, 1042, "speedBlock"],
    [3560, 1042, "speedBlock"],
    [3600, 1042, "speedBlock"],
    [3640, 1042, "speedBlock"],
    [3680, 1042, "speedBlock"],
    [3720, 1042, "speedBlock"],
    [3760, 1042, "speedBlock"],
    [3800, 1042, "speedBlock"],
    [3840, 1042, "speedBlock"],
    [3880, 1042, "speedBlock"],
    [3920, 1042, "speedBlock"],
    [3960, 1042, "speedBlock"],
    [4000, 1042, "speedBlock"],
    [4040, 1042, "speedBlock"],
    [4080, 1042, "speedBlock"],
    [4120, 1042, "speedBlock"],
    [4160, 1042, "speedBlock"],
    [4200, 1042, "speedBlock"],
    [4240, 1042, "speedBlock"],
    [4280, 1042, "speedBlock"],
    [4320, 1042, "speedBlock"],

    // Mini wall
    [4320, 1122, "grassBlock"],
    [4320, 1082, "grassBlock"],
  ],
  mushrooms: [
    // Besides wall
    [2500, 1110],
    [2620, 1110],

    // On box
    [1640, 419],

    // Underground
    [5926, 1110],
  ],
  boxes: [
    // Alternate
    [980, 882, "coin"],
    [1180, 642, "coin"],
    [980, 722, "coin"],
    [980, 562, "coin"],
    [1180, 482, "coin"],

    // Platform
    [1780, 1002, "coin"],
    [1820, 1002, "coin"],
    [1940, 1002, "coin"],
    [1980, 1002, "coin"],

    // Mushroom magic
    [1520, 602, "mushroomPowerup"],

    // In box
    [2260, 460, "coin"],
    [2560, 460, "coin"],

    // CarrotPowerup
    [3300, 460, "carrotPowerup"],

    // Underground
    [2880, 922, "coin"],
    [5771, 922, "swordPowerup"],
  ],
  spiders: [
    // Floating platform
    [820, 440],

    // Ground
    [1220, 1100],
    [1300, 1100],

    // Ground
    [2580, 800],

    // In box
    [2440, 602],
    [2520, 602],
    [2600, 602],
    [2680, 602],
  ],
  springs: [
    // Guarding mushroomPowerup
    [1520, 730],
    [1450, 730],
    [1590, 730],

    // Inside box
    [2560, 450],
    [2860, 515],
    [2900, 515],
    [2940, 515],
    [2980, 515],

    // Underground
    [3240, 1010, false],
    [3320, 1010, false],
    [3400, 1010, false],
    [3480, 1010, false],
    [3560, 1010, false],
    [3640, 1010, false],
    [3720, 1010, false],
    [3800, 1010, false],
    [3880, 1010, false],
    [3960, 1010, false],
    [4040, 1010, false],
    [4120, 1010, false],
    [4200, 1010, false],
  ],
  spikes: [
    // In box
    [2330, 582, true],
    [3180, 582, true],

    // On box
    [1650, 430, true],

    // Underground
    [2700, 1110, true],
    [3240, 1110, false],
    [3320, 1110, false],
    [3400, 1110, false],
    [3480, 1110, false],
    [3560, 1110, false],
    [3640, 1110, false],
    [3720, 1110, false],
    [3800, 1110, false],
    [3880, 1110, false],
    [3960, 1110, false],
    [4040, 1110, false],
    [4120, 1110, false],
    [4200, 1110, false],

    [4600, 1110, false],
    [4720, 1110, false],
    [4960, 1110, false],
    [5080, 1110, false],
    [5320, 1110, false],
    [5440, 1110, false],

    [5706, 1110, false],
  ],
  snails: [
    [3000, 1122],
  ],
  lasers: [
    [3340, 153, "L"],
    [4320, 995, "L"],
    [4330, 953, "R"],
    [4380, 995, "R"],
    [4426, 1040, "R"],
    [5526, 1115, "L"],
  ],
  flags: [
    // Box
    [2005, 552],
    [2005, 152],

    // Wall
    [2580, 710],
  ]
}
