const classes: any[] = [
  {
    name: "Cleric",
    hitDice: "1d6",
    startHp: 6,
    description:
      "Clerics are those who have devoted themselves to the service of a deity, pantheon or other belief system. Most Clerics spend their time in mundane forms of service such as preaching and ministering in a temple; but there are those who are called to go abroad from the temple and serve their deity in a more direct way, smiting undead monsters and aiding in the battle against evil and chaos. Player character Clerics are assumed to be among the latter group",
    spells: "divine",
    attackBonus: (
      <table>
        <thead>
          <tr>
            <td>level</td>
            <td>bonus</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1-2</td>
            <td>+1</td>
          </tr>
          <tr>
            <td>3-4</td>
            <td>+2</td>
          </tr>
          <tr>
            <td>5</td>
            <td>+3</td>
          </tr>
        </tbody>
      </table>
    ),
    savingThrows: (
      <table>
        <thead>
          <tr>
            <td>level</td>
            <td>Death ray or poison</td>
            <td>Magic Wands</td>
            <td>Paralysis or Petrify</td>
            <td>Dragon Breath</td>
            <td>Spells</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>11</td>
            <td>12</td>
            <td>14</td>
            <td>16</td>
            <td>15</td>
          </tr>
          <tr>
            <td>2-3</td>
            <td>10</td>
            <td>11</td>
            <td>13</td>
            <td>15</td>
            <td>14</td>
          </tr>
          <tr>
            <td>4-5</td>
            <td>9</td>
            <td>10</td>
            <td>13</td>
            <td>15</td>
            <td>14</td>
          </tr>
        </tbody>
      </table>
    ),
    features: [
      {
        name: "Divine spellcasting",
        description: "Can cast divine spells",
      },
      {
        name: "Smite",
        description:
          "Use your action to imbue your weapon with holy energy. If you deal damage to an enemy during this turn, damaged enemy has to do saving throw agains spells. If the throw is failed, add 1d4 per level to damage roll. The effect lasts for 3 turns.",
      },
      {
        name: "Turn undead",
        description:
          "Undead that was dealt damage by weapon with Smite effect on it, won't revive.",
      },
    ],
  },
  {
    name: "Fighter",
    hitDice: "1d8",
    startHp: 8,
    description:
      "Fighters include soldiers, guardsmen, barbarian warriors, and anyone else for whom fighting is a way of life. They train in combat, and they generally approach problems head on, weapon drawn. Not surprisingly, Fighters are best at fighting of all the classes. They are also the hardiest, able to take more punishment than any other class. Although they are not skilled in the ways of magic, Fighters can nonetheless use many magic items, including but not limited to magical weapons and armor.",
    attackBonus: (
      <table>
        <thead>
          <tr>
            <td>level</td>
            <td>bonus</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>+1</td>
          </tr>
          <tr>
            <td>2-3</td>
            <td>+2</td>
          </tr>
          <tr>
            <td>4</td>
            <td>+3</td>
          </tr>
          <tr>
            <td>5</td>
            <td>+4</td>
          </tr>
        </tbody>
      </table>
    ),
    savingThrows: (
      <table>
        <thead>
          <tr>
            <td>level</td>
            <td>Death ray or poison</td>
            <td>Magic Wands</td>
            <td>Paralysis or Petrify</td>
            <td>Dragon Breath</td>
            <td>Spells</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>17</td>
          </tr>
          <tr>
            <td>2-3</td>
            <td>11</td>
            <td>12</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
          </tr>
          <tr>
            <td>4-5</td>
            <td>11</td>
            <td>11</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
          </tr>
        </tbody>
      </table>
    ),
    features: [
      {
        name: "Martial Ability",
        description:
          "Add +1 to all melee attack rolls per level. Also, add your level to initiative (if equiped with melee weapon) and damage rolls.",
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
  },
  {
    name: "Mage",
    hitDice: "1d4",
    startHp: 4,
    description:
      "Magic-Users are those who seek and use knowledge of the arcane. They do magic not as the Cleric does, by faith in a greater power, but rather through insight and understanding. Magic-Users are the worst of all the classes at fighting; hours spent studying massive tomes of magic do not lead a character to become strong or adept with weapons. They are the least hardy, equal to Thieves at lower levels but quickly falling behind.",
    spells: "arcane",
    attackBonus: (
      <table>
        <thead>
          <tr>
            <td>level</td>
            <td>bonus</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1-3</td>
            <td>+1</td>
          </tr>
          <tr>
            <td>4-5</td>
            <td>+2</td>
          </tr>
        </tbody>
      </table>
    ),
    savingThrows: (
      <table>
        <thead>
          <tr>
            <td>level</td>
            <td>Death ray or poison</td>
            <td>Magic Wands</td>
            <td>Paralysis or Petrify</td>
            <td>Dragon Breath</td>
            <td>Spells</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>11</td>
            <td>12</td>
            <td>14</td>
            <td>16</td>
            <td>15</td>
          </tr>
          <tr>
            <td>2-3</td>
            <td>10</td>
            <td>11</td>
            <td>13</td>
            <td>15</td>
            <td>14</td>
          </tr>
          <tr>
            <td>4-5</td>
            <td>9</td>
            <td>10</td>
            <td>13</td>
            <td>15</td>
            <td>14</td>
          </tr>
        </tbody>
      </table>
    ),
    features: [
      {
        name: "Arcane spellcasting",
        description: "Can cast arcane spells.",
      },
      {
        name: "Arcane blast",
        description:
          "You can use your bonus action to shot a magic missle (your hands has to be able to point at target, roll standard magic attack roll) that deals 1d4 on hit. Additional 1d4 damage per level.",
      },
      {
        name: "Minor magic",
        description:
          "You can cast level 0 spells, outside combat without preparing it and without using spell slot. Every level increase the spell level that you can use this way by 1.",
      },
    ],
  },
  {
    name: "Thief",
    hitDice: "1d4",
    startHp: 4,
    description:
      "Thieves are those who take what they want or need by stealth, disarming traps and picking locks to get to the gold they crave; or “borrowing” money from pockets, beltpouches, etc. right under the nose of the “mark” without the victim ever knowing. Thieves fight better than Magic-Users but not as well as Fighters. Avoidance of honest work leads Thieves to be less hardy than the other classes, though they do pull ahead of the Magic-Users at higher levels.",
    attackBonus: (
      <table>
        <thead>
          <tr>
            <td>level</td>
            <td>bonus</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1-2</td>
            <td>+1</td>
          </tr>
          <tr>
            <td>3-4</td>
            <td>+2</td>
          </tr>
          <tr>
            <td>5</td>
            <td>+3</td>
          </tr>
        </tbody>
      </table>
    ),
    savingThrows: (
      <table>
        <thead>
          <tr>
            <td>level</td>
            <td>Death ray or poison</td>
            <td>Magic Wands</td>
            <td>Paralysis or Petrify</td>
            <td>Dragon Breath</td>
            <td>Spells</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>13</td>
            <td>14</td>
            <td>13</td>
            <td>16</td>
            <td>15</td>
          </tr>
          <tr>
            <td>2-3</td>
            <td>12</td>
            <td>14</td>
            <td>12</td>
            <td>15</td>
            <td>14</td>
          </tr>
          <tr>
            <td>4-5</td>
            <td>11</td>
            <td>13</td>
            <td>12</td>
            <td>14</td>
            <td>14</td>
          </tr>
        </tbody>
      </table>
    ),
    features: [
      {
        name: "Sneak attack",
        description:
          "During combat, if you attack an enemy, and you have advantage on the attack roll, get +2 bonus to attack roll (melee only), and double the weapon damage dices.",
      },
      {
        name: "Riposte",
        description:
          "If an enemy that attack you missed his attack, you may instantly make an attack roll as riposte. You can't this feat again until your next turn.",
      },
      {
        name: "Connections",
        description:
          "You know people everywhere. You can find someone through his network to help you in some minor way, or do a small favor for you. DC depends on the population of the area. To find someone",
      },
    ],
  },
];

export default classes;
