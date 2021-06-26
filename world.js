// World data
const world = {
  "Grassland": {
    length: 4000,
    height: 1143,
    hasClouds: true,
    backgroundImage: "background0",
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
    ],
    mushrooms: [
      // Besides wall
      [2500, 1110],
      [2620, 1110],

      // On box
      [1640, 419],
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
    ],
    spiders: [
      // Floating platform
      [820, 440],

      // Ground
      [1220, 1100],
      [1300, 1100],

      // Ground
      [2400, 1100],

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
    ],
    spikes: [
      // In box
      [2330, 582, true],
      [3180, 582, true],

      // On box
      [1650, 430, true],
    ],
    snails: [
    ],
    lasers: [
      [3240, 153, "L"],
    ],
    flags: [
      // Box
      [2005, 552],
      [2005, 152],

      // Wall
      [2580, 710],
    ],
    doors: [
      // Test
      [2750, 1110, "Forest"],
      [150, 868, "Secret"],
      [3300, 405, "Clouds"]
    ]
  },
  "Clouds": {
    length: 2600,
    height: 1200,
    hasClouds: true,
    backgroundImage: "background0",
    blocks: [
      // Wall
      [1280, 1180, "grassBlock"],
      [1280, 1140, "grassBlock"],
      [1280, 1100, "grassBlock"],
      [1280, 1060, "grassBlock"],
      [1280, 1020, "grassBlock"],
      [1280, 980, "grassBlock"],
      [1280, 940, "grassBlock"],
      [1280, 900, "grassBlock"],
      [1280, 860, "grassBlock"],
      [1280, 820, "grassBlock"],
      [1280, 780, "grassBlock"],
      [1280, 740, "grassBlock"],
      [1280, 700, "grassBlock"],
      [1280, 660, "grassBlock"],
      [1280, 620, "grassBlock"],
      [1280, 580, "grassBlock"],

      // Platforms
      [650, 878.5, "stoneBlock"],
      [610, 878.5, "stoneBlock"],
      [690, 878.5, "stoneBlock"],

      [200, 1070, "stoneBlock"],
      [240, 1070, "stoneBlock"],
      [280, 1070, "stoneBlock"],

      [450, 960, "stoneBlock"],

      [450, 760, "stoneBlock"],

      [200, 670.5, "stoneBlock"],
      [240, 670.5, "stoneBlock"],
      [280, 670.5, "stoneBlock"],

      [450, 560, "stoneBlock"],

      [770, 478.5, "stoneBlock"],
      [730, 478.5, "stoneBlock"],
      [690, 478.5, "stoneBlock"],
      [650, 478.5, "stoneBlock"],
      [610, 478.5, "stoneBlock"],
    ],
    mushrooms: [
    ],
    boxes: [
      [690, 320.5, "coin"],
    ],
    spiders: [
    ],
    springs: [
      [450, 920],
      [450, 720],
      [450, 520],
    ],
    spikes: [
      [1230, 1180, false],
      [1170, 1180, false],
      [1110, 1180, false],
      [1050, 1180, false],
      [990, 1180, false],
      [930, 1180, false],
      [870, 1180, false],
      [810, 1180, false],
      [750, 1180, false],
      [690, 1180, false],
      [630, 1180, false],
      [570, 1180, false],
      [510, 1180, false],
      [450, 1180, false],
    ],
    snails: [
    ],
    lasers: [
    ],
    flags: [
      [1305, 530]
    ],
    doors: [
      [100, 1257, "Grassland"]
    ]
  },
  "Forest": {
    length: 6000,
    height: 643,
    hasClouds: true,
    backgroundImage: "background1",
    blocks: [
      // Platform
      [2600, 262, "speedBlock"],
      [2640, 262, "speedBlock"],
      [2680, 262, "grassBlock"],
      [2720, 262, "grassBlock"],
      [2760, 262, "grassBlock"],
      [2800, 262, "grassBlock"],
      [2840, 262, "grassBlock"],
      [2880, 262, "grassBlock"],
      [2920, 262, "grassBlock"],
      [2960, 262, "grassBlock"],
      [3000, 262, "grassBlock"],
      [3040, 262, "grassBlock"],

      [3180, 262, "speedBlock"],
      [3220, 262, "speedBlock"],
      [3260, 262, "speedBlock"],
      [3300, 262, "speedBlock"],
      [3340, 262, "speedBlock"],
      [3380, 262, "speedBlock"],
      [3420, 262, "speedBlock"],
      [3460, 262, "speedBlock"],
      [3500, 262, "speedBlock"],
      [3540, 262, "speedBlock"],
      [3580, 262, "speedBlock"],
      [3620, 262, "speedBlock"],
      [3660, 262, "speedBlock"],
      [3700, 262, "speedBlock"],
      [3740, 262, "speedBlock"],
      [3780, 262, "speedBlock"],
      [3820, 262, "speedBlock"],
      [3860, 262, "speedBlock"],
      [3900, 262, "speedBlock"],
      [3940, 262, "speedBlock"],
      [3980, 262, "speedBlock"],
      [4020, 262, "speedBlock"],
      [4060, 262, "speedBlock"],
      [4100, 262, "speedBlock"],
      [4140, 262, "speedBlock"],
      [4180, 262, "speedBlock"],
      [4220, 262, "speedBlock"],
      [4260, 262, "speedBlock"],
      [4300, 262, "speedBlock"],
      [4340, 262, "speedBlock"],
      [4380, 262, "speedBlock"],
      [4420, 262, "speedBlock"],
      [4460, 262, "speedBlock"],
      [4500, 262, "speedBlock"],
      [4540, 262, "speedBlock"],
      [4580, 262, "speedBlock"],
      [4620, 262, "speedBlock"],
      [4660, 262, "speedBlock"],
      [4700, 262, "speedBlock"],
      [4740, 262, "speedBlock"],
      [4780, 262, "speedBlock"],
      [4820, 262, "speedBlock"],
      [4860, 262, "speedBlock"],
      [4900, 262, "speedBlock"],
      [4940, 262, "speedBlock"],
      [4980, 262, "speedBlock"],
      [5020, 262, "speedBlock"],
      [5060, 262, "speedBlock"],
      [5100, 262, "speedBlock"],
      [5140, 262, "speedBlock"],
      [5180, 262, "speedBlock"],
      [5220, 262, "speedBlock"],
      [5260, 262, "speedBlock"],
      [5300, 262, "speedBlock"],
      [5340, 262, "speedBlock"],
      [5380, 262, "speedBlock"],
      [5420, 262, "speedBlock"],
      [5460, 262, "speedBlock"],
      [5500, 262, "speedBlock"],
      [5540, 262, "speedBlock"],
      [5580, 262, "speedBlock"],
      [5620, 262, "speedBlock"],
      [5660, 262, "speedBlock"],
      [5700, 262, "speedBlock"],
      [5740, 262, "speedBlock"],
      [5780, 262, "speedBlock"],
      [5820, 262, "speedBlock"],
      [5860, 262, "speedBlock"],
      [5900, 262, "speedBlock"],
      [5940, 262, "speedBlock"],
      [5980, 262, "speedBlock"],

      // Mini wall
      [2880, 622, "grassBlock"],
      [2880, 582, "grassBlock"],

      // Mini wall
      [3160, 622, "grassBlock"],
      [3160, 582, "grassBlock"],

      // Speed platform
      [3160, 542, "speedBlock"],
      [3200, 542, "speedBlock"],
      [3240, 542, "speedBlock"],
      [3280, 542, "speedBlock"],
      [3320, 542, "speedBlock"],
      [3360, 542, "speedBlock"],
      [3400, 542, "speedBlock"],
      [3440, 542, "speedBlock"],
      [3480, 542, "speedBlock"],
      [3520, 542, "speedBlock"],
      [3560, 542, "speedBlock"],
      [3600, 542, "speedBlock"],
      [3640, 542, "speedBlock"],
      [3680, 542, "speedBlock"],
      [3720, 542, "speedBlock"],
      [3760, 542, "speedBlock"],
      [3800, 542, "speedBlock"],
      [3840, 542, "speedBlock"],
      [3880, 542, "speedBlock"],
      [3920, 542, "speedBlock"],
      [3960, 542, "speedBlock"],
      [4000, 542, "speedBlock"],
      [4040, 542, "speedBlock"],
      [4080, 542, "speedBlock"],
      [4120, 542, "speedBlock"],
      [4160, 542, "speedBlock"],
      [4200, 542, "speedBlock"],
      [4240, 542, "speedBlock"],
      [4280, 542, "speedBlock"],
      [4320, 542, "speedBlock"],

      // Mini wall
      [4320, 622, "grassBlock"],
      [4320, 582, "grassBlock"],
    ],
    mushrooms: [
      // Besides wall
      [2620, 610],
      // Underground
      [5926, 610],
    ],
    boxes: [
      // Underground
      [2880, 422, "coin"],
      [5771, 422, "swordPowerup"],
    ],
    spiders: [
    ],
    springs: [
      // Underground
      [3240, 510, false],
      [3320, 510, false],
      [3400, 510, false],
      [3480, 510, false],
      [3560, 510, false],
      [3640, 510, false],
      [3720, 510, false],
      [3800, 510, false],
      [3880, 510, false],
      [3960, 510, false],
      [4040, 510, false],
      [4120, 510, false],
      [4200, 510, false],
    ],
    spikes: [
      // Underground
      [2700, 610, true],
      [3240, 610, false],
      [3320, 610, false],
      [3400, 610, false],
      [3480, 610, false],
      [3560, 610, false],
      [3640, 610, false],
      [3720, 610, false],
      [3800, 610, false],
      [3880, 610, false],
      [3960, 610, false],
      [4040, 610, false],
      [4120, 610, false],
      [4200, 610, false],

      [4600, 610, false],
      [4720, 610, false],
      [4960, 610, false],
      [5080, 610, false],
      [5320, 610, false],
      [5440, 610, false],

      [5706, 1110, false],
    ],
    snails: [
      [3000, 622],
    ],
    lasers: [
      [4320, 496, "L"],
      [4330, 453, "R"],
      [4380, 495, "R"],
      [4426, 540, "R"],
      [5526, 615, "L"],
    ],
    flags: [
    ],
    doors: [
      // Test
      [200, 1110, "Grassland"]
    ]
  },
  "Secret": {
    length: 1300,
    height: 643,
    hasClouds: false,
    backgroundImage: "background2",
    boxes: [
      [325, 341.5, "coin"],
      [285, 341.5, "coin"],
      [975, 341.5,"coin"],
      [1015, 341.5,"coin"],

      [487.5, 502.25,"coin"],
      [325, 502.25,"coin"],
      [812.5, 502.25,"coin"],
      [975, 502.25,"coin"],
    ],
    blocks: [
    ],
    mushrooms: [
    ],
    spiders: [
    ],
    springs: [
    ],
    spikes: [
    ],
    snails: [
    ],
    lasers: [
    ],
    flags: [
    ],
    doors: [
      [650, 1110, "Grassland"]
    ]
  }
}
