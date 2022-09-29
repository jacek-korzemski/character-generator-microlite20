type classessProperties = {
  name: string;
  description: string;
  features: any[];
  skills: {
    communication: number;
    knowledge: number;
    physical: number;
    subterfuge: number;
    survival: number;
  };
  spells?: string;
}[];

const classes: classessProperties = [
  {
    name: "Fighter",
    description: "Can use any armor and shields.",
    features: [
      {
        name: "Martial Ability",
        description:
          "Add +1 to all melee attack rolls (and another +1 per 4 levels). Also, add your level to initiative (if equiped with melee weapon) and damage rolls.",
      },
      {
        name: "Cleave",
        description:
          "After successfully killing an enemy, fighter may attack another still-standing foe withing 5 feet. Max amount of additional kills is equal to fighter level.",
      },
      {
        name: "Favored Weapon",
        description:
          "Choose a weapon type (e.g. short sword, long sword, scimitar, flail, crossbow, etc.). During combat, while using that type of weapon, you score critical hit on a natural 19 and 20 on attack roll. Once per combat, you may re-roll attack roll while using your favored weapon.",
      },
    ],
    skills: {
      communication: 0,
      knowledge: 0,
      physical: 3,
      subterfuge: 0,
      survival: 0,
    },
  },
  {
    name: "Ranger",
    description: "Can use light or medium armour and can use shields.",
    features: [
      {
        name: "Ranged weapon training",
        description:
          "Add +1 to all ranged attack rolls (and another +1 per 4 levels). Also, add your level to initiative (if equiped with a ranged weapon) and damage rolls.",
      },
      {
        name: "Two weapons fighting",
        description:
          "While wielding two light weapons, you don't get -2 penalny on attack roll with second weapon.",
      },
      {
        name: "Forest is my home",
        description:
          "You get advantage on rolls for survival in forest, and have resistance for poison damage from forest fauna.",
      },
    ],
    skills: {
      communication: 0,
      knowledge: 0,
      physical: 0,
      subterfuge: 0,
      survival: 3,
    },
  },
  {
    name: "Rogue",
    description: "Can use light armour.",
    features: [
      {
        name: "Sneak attack",
        description:
          "During combat, if you attack a specyfic enemy for the first time, and you have advantage on the attack roll, get +4 bonus to attack roll (melee only), and double the damage dealt on hit.",
      },
      {
        name: "Riposte",
        description:
          "If an enemy that attack you missed his attack, you may instantly make an attack roll as riposte. You can't this feat again until your next turn.",
      },
      {
        name: "Connections",
        description:
          "You know people everywhere. You can find someone through his netwoer to help you in some minor way, or do a small favor for you. DC depends on the population of the area. To find someone - roll MIND + your level.",
      },
    ],
    skills: {
      communication: 0,
      knowledge: 0,
      physical: 0,
      subterfuge: 3,
      survival: 0,
    },
  },
  {
    name: "Cleric",
    description: "Can wear light or medium armour. They cast divine spells.",
    features: [
      {
        name: "Divine spellcasting",
        description: "Can cast divine spells",
      },
      {
        name: "Smite",
        description:
          "Use your bonus action to imbue your weapon with holy energy. Until the end of your turn, your weapon converts physical damage to radiant.",
      },
      {
        name: "Turn undead",
        description:
          "Use your bonus action to destroy fallen undead, and prevent it from reviving.",
      },
    ],
    skills: {
      communication: 3,
      knowledge: 0,
      physical: 0,
      subterfuge: 0,
      survival: 0,
    },
    spells: "divine",
  },
  {
    name: "Mage",
    description: "Wear no armour. They can cast arcane spells.",
    features: [
      {
        name: "Arcane spellcasting",
        description: "Can cast arcane spells.",
      },
      {
        name: "Arcane blast",
        description:
          "You can use your bonus action to shot a magic missle (your hands has to be able to point at target, roll standard magic attack roll) that deals 1d4 on hit. Additional 1d4 damage per 4 levels.",
      },
      {
        name: "Minor magic",
        description:
          "You can cast level 0 spells, outside the combat with no magic point costs.",
      },
    ],
    skills: {
      communication: 0,
      knowledge: 3,
      physical: 0,
      subterfuge: 0,
      survival: 0,
    },
    spells: "arcane",
  },
];

export default classes;
