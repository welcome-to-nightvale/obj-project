const items = [
    { name: "Jar",
      desc: "contains rocks",
      tags: ["decorative", "brings joy", "The Buried"],
      price: 20.00
    },
    { name: "Paper Crane",
      desc: "Paper Crane",
      tags: ["decorative","brings joy"],
      price: 2.50
    },
    { name: "Wasps' nest",
      desc: "perhaps it can soothe my itching soul",
      tags: ["brings joy", "potentially mind controlling","companion", "The Corruption"],
      price: 329.99
    },
    { name: "Fish Lamp",
      desc: "Radiates malice and hatred",
      tags: ["decorative", "brings misery", "The Desolation"],
      price: 32.23
    },
    { name: "orb",
      desc: "On Friday, we will be peering into Orbs and Spheres",
      tags: ["for divninging esoteric truths", "The Eye"],
      price: 10000000.00
    },
    { name: "Coconut husk fragment",
      desc: "from that one time vicky brought a coconut to gym",
      tags: ["decorative", "The Hunt"],
      price: 3.00
    },
    { name: "Harmonica",
      desc: "play some tunes",
      tags: ["brings joy", "The Slaughter"],
      price: 25.55
    },
    { name: "The Bag",
      desc: "don't look inside",
      tags: ["The Vast"],
      price: 59.99
    },
    { name: "James the Greater",
      desc: "taxidermied pufferfish",
      tags: ["companion", "The Stranger"],
      price: 16.00
    },
    { name: "Wizard hat",
      desc: "bugs under there",
      tags: ["for divninging esoteric truths", "accessory", "The Spiral"],
      price: 42.68
    },
    { name: "whiteboard magnet",
      desc: "snail-shaped",
      tags: ["companion", "brings joy"],
      price: 2.00
    },
    { name: "NYC Public Transit seating",
      desc: "build your very own basement train",
      tags: ["The Buried"],
      price: 200
    },
    { name: "Forbidden Scripture",
      desc: "remnants of a peculiar elementary schooler's writing journal. \nMarble notebook",
      tags: ["for divninging esoteric truths", "brings misery", "not for sale"],
      price: 15.01
    },
    { name: "Vase",
      desc: "vase that gaslights you. \nprice is only a little bit unreasonable",
      tags: ["The Spiral"],
      price: 67000.67
    },
    { name: "Casette Tape",
      desc: "perhaps it contains a statement",
      tags: ["The Web", "The Eye"],
      price: 19.99
    },
    { name: "Hat",
      desc: "as per the suggestion of my brother.\nNo particularly notable characteristics",
      tags: ["accessory"],
      price: 2.50
    },
    { name: "Cockroach",
      desc: "Named gertrude",
      tags: ["not for sale", "brings joy", "companion"],
      price: 0
    },
    { name: "Mold that makes you love Mold",
      desc: "put this in your House put this under your Bed",
      tags: ["potentially mind controlling", "companion", "The Corruption"],
      price: 0
    },
    { name: "Big Mouth Billy Bass",
      desc: "reprogrammed to now only sing La Carmagnole",
      tags: ["decorative", "brings joy", "The Hunt"],
      price: 73.99
    },
    { name: "Cursed Amulet",
      desc: "put this in your House put this under your Bed",
      tags: ["potentially mind controlling", "accessory", "The Web"],
      price: 0
    },
]

let cart = [];

function filter(tag) {
  let filtered = [];
  for (let item of items) {
    if (item.tags.find((t)=> t === tag) !== undefined) {
      filtered.push(item.name);
      //console.log(item);
    }
  }
  console.log(filtered);
}

filter("brings joy");

function addToCart(item) {
  cart.push(item);
}

