import { Injectable } from '@angular/core';
import { Data } from "./interfaces";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public static readonly data: Data = {
    playthrough: [{
      title: 'New Game',
      // url: 'http://darksouls3.wiki.fextralife.com/Cemetery+of+Ash',
      items: [
        {
          description: 'Wake up in the <a href="https://darksouls.wiki.fextralife.com/Northern+Undead+Asylum">Undead Asylum</a>, get your starting equipment and your estus flask from <a href="https://darksouls.wiki.fextralife.com/Oscar+of+Astora">Oscar of Astora</a>. Wether you kill him or not is up to you, but if you do I want you to know that you\'re a monster.',
          metadata: ['npc', 'estus'],
        },
        {
          description: 'Whoop the Asylum Demon\'s ass.',
          metadata: ['boss'],
        },
        {
          description: 'Arrive in Lordran and enter the Way of White through Petrus of Thorolund. Buy all of his Miracles. (Heal, Great Heal Exerpt, Homeward, Force)',
          metadata: ['npc'],
        },
        {
          description: 'Make your way through the Undead Burg and beat the Taurus Demon, but not before purchasing the Residence Key from the Undead Merchant (male).',
          metadata: ['boss', 'misc'],
        },
        {
          description: 'Trigger the Drake on the Bridge and shoot it\'s Tail off with a Bow to get the Drake Sword.',
          metadata: ['weap'],
        },
        {
          description: 'You can try to get to the Sunlight Altar now if you want, but I\'d recommend attempting it later when you have a bit more hp. This can easily be done by staying near him but out of his line of sight for a while. He\'ll fly onto the bridge and stay there for a few seconds if you\'re lucky. This is when you make a dash towards the Sunlight Altar.',
          metadata: [],
        },
        {
          description: 'If possible, enter the Warrior of Sunlight covenant to receive the Lightning Spear miracle. To enter the Covenant, 25 faith are required. Alternatively, the entry bar is lowered by 5 levels of faith for every boss that you help defeat in co-op.',
          metadata: [],
        },
        {
          description: 'Make your way through the Undead Burg and meet Andre. Make sure to grab the Mystery Key. Alsp grab the basement key on the steps in front of the church.',
          metadata: [],
        },
        {
          description: 'Free Lautrec.',
          metadata: ['npc'],
        },
        {
          description: 'Beat the Bell Gargoyles while making sure to cut off the Tail off the first one that spawns to receive the Gargoyle Tail Axe. If you just can\'t do it, don\'t worry, you\'ll get a third and fourth chance later on.',
          metadata: ['boss', 'weap'],
        },
        {
          description: 'Ring the Bell of Awakening. After that, purchase Karmic Justice from Oswald of Carim.',
          metadata: [],
        },
        {
          description: 'Speak to Lautrec to receive a Sunlight Medal. He\'ll kill the firekeeper after a while, but don\'t worry about it, you can revive her later. Just make sure to grab the Black eye orb you get from her corpse. Killing him at Firelink Shrine won\'t have any bad impact on the run and prevent him from Killing Anastasia (The Firekeeper). The only things you gain from not killing him is Anastasia\'s Armor set and a Souvenir of Reprisal. Anastasia will also regain the ability to speak after returning her soul to her.',
          metadata: ['npc', 'misc'],
        },
        {
          description: 'Revisit the <a hraf="https://darksouls.wiki.fextralife.com/Northern+Undead+Asylum">Undead Asylum</a>. Kill <a hraf="https://darksouls.wiki.fextralife.com/Oscar+of+Astora">Oscar of Astora</a> to get the Crest Shield.',
          metadata: ['arm'],
        },
        {
          description: 'Get the Peculiar Doll (this item is required to enter the painted world) and kill the Stray Demon. He\'ll drop a Titanite Slab for you. You can do this at any point in the playthrough after leaving the <a hraf="https://darksouls.wiki.fextralife.com/Northern+Undead+Asylum">Undead Asylum</a>, don\'t worry if you\'re not strong enough yet.',
          metadata: [],
        },
        {
          description: 'Leave the Undead Burg and enter the Darkroot Garden. From there, go to the bonfire next to the door that can be opened with the crest of artorias. Kill the Moonlight Butterfly to get it\'s soul. This can also be done later in the game when you head there to <s>kill</s> pet sif.',
          metadata: [],
        },
        {
          description: 'Farm the Stone Knights to get the Stone Greatsword and the Stone Greatshield.',
          metadata: ['weap'],
        },
        {
          description: 'Head back to the bridge with the Hellkite drake and use the Basement key to enter the lower Undead Burg. There you can free Griggs of Vinheim.',
          metadata: ['npc'],
        },
        {
          description: 'Kill the Kapra Demon.',
          metadata: ['boss'],
        },
        {
          description: 'Purchase all of Griggs\' Sorceries at Firelink Shrine. (Soul Arrow, Great Soul Arrow, Heavy Soul Arrow, Great Heavy Soul Arrow, Aural Decoy, Fall Control) Your intelligent must be at least 10 for him to teach you sorceries.',
          metadata: ['sorc'],
        },
        {
          description: 'Enter the Depths and get the Large Ember.',
          metadata: ['misc'],
        },
        {
          description: 'Free Laurentius of the Great Swamp.',
          metadata: ['f_npc'],
        },
        {
          description: 'Farm so many Basilisks until you have 7 eyes of death in your inventory.',
          metadata: ['f_misc'],
        },

        {
          description: 'Gaping Dragon</a>. Cut off it\'s Tail to call the Dragon King Greataxe a weapon of your own.',
          metadata: ['f_boss f_weap">Kill the <a href="https://darksouls.wiki.fextralife.com/Gaping+Dragon'],
        },

        {
          description: 'Enter Blighttown (don\'t worry, you\'ll only have to do this once.)',
          metadata: ['f_none'],
        },

        {
          description: 'Fetch the Pyromancy Power Within from under a gross Leech-thing stuck to a wall.',
          metadata: ['f_none'],
        },

        {
          description: 'Kill Chaos Witch Queelag to receive her Soul and ring the second Bell of Awakening.',
          metadata: ['f_none'],
        },

        {
          description: 'Meet the Fair Lady and Eingyi (the egg carrier accompanying her). Make sure to say <b>YES</b> when he asks you wether you\'re a new servant.',
          metadata: ['f_miss'],
        },

        {
          description: 'Get yourself infected with an egg by one of the egg carriers in Izalith. Wait until the Egg replaces your head, then buy all of Eingyi\'s Pyromancies. (Toxic Mist, Poison Mist) He\'ll sell the item you need to remove the egg.',
          metadata: ['f_none'],
        },

        {
          description: 'Offer 30 humanity to the Fair Lady after joining the chaos servants covenant to receive the Pyromancies Great Chaos Fireball and Chaos Storm.',
          metadata: ['f_none'],
        },

        {
          description: 'On your journey back up, grab the Remedy Sorcery, which is near the exit of Blighttown.',
          metadata: ['f_none'],
        },

        {
          description: 'Return to the surface and enter the Valley of Drakes. Fetch Astora\'s Straight Sword and the Dragon Crest Shield from under the Undead Dragon\'s nose.',
          metadata: ['f_none'],
        },

        {
          description: 'Open the shortcut that connects Firelink Shrine and the ruins of New Londo.',
          metadata: ['f_none'],
        },

        {
          description: 'While your in Firelink Shrine, Buy all of Laurentius\' Pyromancies (Fireball, Fire Orb, Combustion, Iron Flesh, Flash Sweat) and upgrade you Pyromancy flame to +10.',
          metadata: ['f_none'],
        },

        {
          description: 'Head to the Darkroot Basin and Kill the Hydra that lives there.',
          metadata: ['f_none'],
        },

        {
          description: 'Reload the area and find the golden Crystal Golem. Kill him to free Dusk of Oolacile.',
          metadata: ['f_none'],
        },

        {
          description: 'Find Dusks summoning sign where you killed the Hydra to summon her and buy all of her Sorceries. (Hidden Weapon, Hidden Body, Cast Light,Repair, Chameleon)',
          metadata: ['f_none'],
        },

        {
          description: 'Enter Sen\'s Funhouse. Make sure to talk to Siegmeyer while you\'re there.',
          metadata: ['npc'],
        },

        {
          description: 'Free Big Hat Logan and meet him at Firelink Shrine to purchase all of his spells. (Homing Soulmass, Soul Spear, Magic Weapon, Great Magic Weapon, Magic Shield) Your intelligent has to be at least 15 for that.',
          metadata: ['f_none'],
        },

        {
          description: 'Kill the Iron Golem to receive his Soul and make your way to Anor Londo.',
          metadata: ['f_none'],
        },

        {
          description: 'Perform a balance act in Anor Londo. Cut the chain of the chandelier while you\'re up there.',
          metadata: ['f_none'],
        },

        {
          description: 'Enter the painted world of Ariamis after Grabbing the Black Iron Set and the Black Iron Greatshield.',
          metadata: ['f_none'],
        },

        {
          description: 'Make your way through the painted world. You should farm at least eight Souvenirs of Reprisal by killing the Crow Demons.',
          metadata: ['f_none'],
        },

        {
          description: 'Get the Bloodshield from the bridge with the undead dragon.',
          metadata: ['f_none'],
        },

        {
          description: 'Pick up Velka\'s Rapier and Vow of Silence.',
          metadata: ['f_none'],
        },

        {
          description: 'Fetch the Pyromancy Acid Surge in the area where you\'re invaded by King Jeremia.',
          metadata: ['f_none'],
        },

        {
          description: 'Kill an unmoving toxic zombie behind an illusiory wall down a well in the area with the Phalanx. He drops the Pyromancy Fire Surge.',
          metadata: ['f_none'],
        },

        {
          description: 'Kill Crossbreed Priscilla to receive her soul, but also cut off her tail for Priscilla\'s Dagger.',
          metadata: ['f_none'],
        },

        {
          description: 'After returning to Anor Londo, make your way past the infamous Anor Londo Archers. Farm the Silver Knights that guard the halls of Anor Londo to earn the Silver Knight Straight Sword, Silver Knight Spear and the Silver Knight Shield. Help Siegmeyer with his little problem in the process. In addition, you can fetch three Sunlight Medals from a chest.',
          metadata: ['f_none'],
        },

        {
          description: 'Discover Havel\'s secret chamber to grab the Dragon Tooth and Havel\'s Greatshield from the chests down there.',
          metadata: ['f_none'],
        },

        {
          description: 'Kill Ornstein and Smough. But watch out: You\'ll only receive the Souls of whoever you kill second. Make 100% sure to kill the other one next time around. To gain more control over who dies first, try not summoning anyone for the fight.',
          metadata: ['f_none'],
        },

        {
          description: 'Purchase the Giant\'s Halberd from the Giant Blacksmith.',
          metadata: ['f_none'],
        },

        {
          description: 'Farm the Bat Wing Demons long enough to earn yourself the Demon\'s Spear.',
          metadata: ['f_none'],
        },

        {
          description: 'Drop out of the Window above the main entrance of Anor Londo to get to the Dragonslayer Greatbow.',
          metadata: ['f_none'],
        },

        {
          description: 'Use the Black Eye Orb to invade the world of Knight Lautrec and kill him to get a new Souvenir of Reprisal and the Firekeeper\'s soul back.',
          metadata: ['f_none'],
        },

        {
          description: 'Receive the Lordvessel and enter the Princess\' Guard, but shoot Gwynevere after you\'ve done that. Do NOT talk to Kingseeker Frampt anymore after receiving the Lordvessel.',
          metadata: ['f_none'],
        },

        {
          description: 'Challenge Gwyndolin to get his Soul and the miracle Sunlight Blade that lies within a chest at the end of the Darkmoon Tomb.',
          metadata: ['f_none'],
        },

        {
          description: 'Purchase the Crest of Artorias from Andre and open the gate to the Forest Hunter area. Run past all of the Npc fighters and enter the Forest Hunter Covenant by talking to the Alvina the white cat.',
          metadata: ['f_none'],
        },

        {
          description: 'Pet Great Greywolf Sif to get her Soul. Sif\'s souls is the only soul you\'ll need three times, she is the only reason you\'ll be required to play halfway through new game +2.',
          metadata: ['f_none'],
        },

        {
          description: 'Quickly run through New Londo. Don\'t forget to purchase the Sorcery Resist Curse from Ingward, the guardian of the seal of New Londo.',
          metadata: ['f_none'],
        },

        {
          description: 'Put on the Covenant of Artorias and Kill the Four Kings. Grab the Very Large Ember along the Way.',
          metadata: ['f_none'],
        },

        {
          description: 'Since you haven\'t talked to Frampt yet, Kaathe will appear. Let him transport you to the Lordvessel Chamber and enter the Darkwraith Covenant afterwards to receive the Dark Hand.',
          metadata: ['f_none'],
        },

        {
          description: 'Meet Siegmeyer at Firelink Shrine after you\'ve helped him in Anor Londo. Upon meeting him, he will ask wether you were the one who helped him in Sen\'s Fortress as well. Say YES to receive the Emit Force Miracle.',
          metadata: ['f_none'],
        },

        {
          description: 'Teleport to the Daughter of Chaos Bonfire and head to the Blighttown swamp. If your Pyromancy flame is +10 already, you\'ll find a new Npc, Quelana of Izalith. She\'ll teach you various pyromanciey, all of which you have to buy: Great Fireball, Firestorm, Fire Whip, Great Combustion, and Undead Rapport. She can also enhance your Pyromancy flame up to +15 with her help.',
          metadata: ['f_none'],
        },

        {
          description: 'Meet Siegmeyer In front of the Giant Tree in the Swamp and give him a purple moss clump to progress his questline.',
          metadata: ['f_none'],
        },

        {
          description: 'Walk through an illusiory wall in the giant tree surrounded by Leeches to find the entrance to the Great Hollow. Descend within the Great Hollow and arrive at Ash Lake.',
          metadata: ['f_none'],
        },

        {
          description: 'Proceed to explore Ash Lake and find Great Magic Barrier within another tree.',
          metadata: ['f_none'],
        },

        {
          description: 'Find the last Everlasting Dragon at the end of Ash Lake, enter the path of the dragon covenant and cut off his tail to get the Dragon Greatsword. Don\'t worry, he won\'t mind.',
          metadata: ['f_none'],
        },

        {
          description: 'Teleport back to Izalith and shove the Ceaseless discharge gently to his death.',
          metadata: ['f_none'],
        },

        {
          description: 'Run past the Capra Demons and fight the Demon Firesage. (it should be mentioned at this point that the Demon Firesage as well as the Centipide Demon technically aren\'t mandatory. They can be skipped by Becoming a +2 member of the servants of Chaos and activating the shortcut associated with that covenant.)',
          metadata: ['f_none'],
        },

        {
          description: 'Kill the Centipide Demon and make your way through Lost Izalith. Quelana will now ask you to kill her mother ( the Bed of Chaos).',
          metadata: ['f_none'],
        },

        {
          description: 'Either kill Solaire or save him by using the shortcut I previously mentioned before the centipide demon. Pick up the Sunlight maggot.',
          metadata: ['f_none'],
        },

        {
          description: 'Help Siegmeyer defeat the Chaos Eaters in the a pit, but make sure that his hp don\'t sink under 50%. I recommend killing most of the Chaos Eaters with a bow before talking to him.',
          metadata: ['f_none'],
        },

        {
          description: 'Pick up the Pyromancy Chaaos Fire Whip near the entrance of the Bed of Chaos bossroom.',
          metadata: ['f_none'],
        },

        {
          description: 'Defeat the Bed of Chaos.',
          metadata: ['f_boss'],
        },

        {
          description: 'Go talk to Quelana. She\'ll give you the Fire Tempest Pyromancy.',
          metadata: ['f_none'],
        },

        {
          description: 'Teleport to Anor Londo and make your way to the Duke\'s archives.',
          metadata: ['f_none'],
        },

        {
          description: 'Die in an unwinable battle to Seath. Put on a ring of sacrifice to avoid losing your souls.',
          metadata: ['f_none'],
        },

        {
          description: 'Escape your cell and kill all of the Pisaca to earn Bountiful Sunlightand Soothing Sunlight.',
          metadata: ['f_none'],
        },

        {
          description: 'Talk to Big Hat Logan in the Cell he\'s now Stuck in.',
          metadata: ['f_none'],
        },

        {
          description: 'Escape the Dungeon and farm the respawning Channelers in the rooms with the shifting staircases until you pick up the Channeler\'s Trident.',
          metadata: ['f_none'],
        },

        {
          description: 'Fetch Strong Magic Shield from a chest in the very same room.',
          metadata: ['f_none'],
        },

        {
          description: 'Get the Archive Tower Giant Cell Key and free Logan. He can now be found in the room next to the one you found the key in. He\'ll sell some new Sorceries including Homing Crystal Soulmass, Crystal Soul Spear and Crystal Magic Weapon.',
          metadata: ['f_none'],
        },

        {
          description: 'Kill the golden Crystal Golem in the Crystal Forest to free Sieglinde, Siegmeyer\'s Daughter. Answer YES to anything she\'ll ever ask you.',
          metadata: ['f_none'],
        },

        {
          description: 'Kill Seath the Scaleless in the Crytal Cave, but cut off his Tail at all costs to receive the Moonlight Greatsword. Wearing the Slumbering Dragoncrest Ring will make this task easier.',
          metadata: ['f_none'],
        },

        {
          description: 'Big hat Logan can now be found in the room where you first met Seath. He\'ll only spawn once you opened the chest that is now in there though. Kill him to receive the Sorcery White Dragon Breath.',
          metadata: ['f_none'],
        },

        {
          description: 'Make your way through the graveyard next to Firelink Shrine and enter the Catacombs.',
          metadata: ['f_none'],
        },

        {
          description: 'Grab the Darkmoon Seance Ring. It\'s inside a stone coffin. Near the the ring is in there is a room with a ladder on the wall. Climb the ladder to enter a room containing the miracle Tranquil Walk of Peace.',
          metadata: ['f_none'],
        },

        {
          description: 'Grab 3 more eyes of death that lay on the ground behind a titanite demon.',
          metadata: ['f_none'],
        },

        {
          description: 'Lay down inside an open stone coffin neaar the same titanite demon and wait for a bit. Walk to Nito\'s coffin, enter his covenant, the gravelord servants, and give him the 10 eyes of death. This will give you the Gravelord Sword, the Gravelord Sword Dance and the Gravelord Greatsword Dance.',
          metadata: ['f_none'],
        },

        {
          description: 'It\'s time for the most powerful boss in the game! That\'s right, it\'s time for Pinwheel! Overcome that challenge and move on into the Tomb of the Giants. Wearing the Sunlight Maggot on your head will help you very much in this area.',
          metadata: ['f_none'],
        },

        {
          description: 'Hidden somewhere in the Tomb is the Effigy Shield. Don\'t miss it.',
          metadata: ['f_miss'],
        },

        {
          description: 'Once you\'ve arrived at the Tomb of the Giants bonfire, you can get yourself kicked down a pit by Patches. Kill Nico and Vince and then talk to Reah of Thorolund. She\'ll give you the miracle Replenishment.',
          metadata: ['f_none'],
        },

        {
          description: 'Return to Firelink Shrine and kill Petrus. He is not relevant to Reah\'s questline anymore. She can now be found in the church of the Undead Burg, praying at the altar the corps with the Firekeeper soul lies on. She sells the following miracles: Force, Wrath of the Gods, Heal, Great Heal Exerpt, Great Heal, Homeward, Magic Barrier and Seek Guidance. Buy all of them.',
          metadata: ['f_none'],
        },

        {
          description: 'Return to the Tomb of the Giants, forgive Patches and return to Firelink Shrine.',
          metadata: ['f_none'],
        },

        {
          description: 'By now Sieglinde should be at Firelink Shrine. Tell her that you found her father.',
          metadata: ['f_none'],
        },

        {
          description: 'Buy all of the spells Griggs has left to sell, as well as all of his rings.',
          metadata: ['f_none'],
        },

        {
          description: 'Patches should also be an available merchant in Firelink Shrine by now. Buy the Crescent Axe from him. Edit: Killing Nito is required in order to turn Patches into an available merchant.',
          metadata: ['f_none'],
        },

        {
          description: 'Griggs can now be met in his hollow form in Sen\'s Fortress . Kill him to receive the sorcery Hush.',
          metadata: ['f_none'],
        },

        {
          description: 'If Sieglinde has returned by now, she\'ll tell you that she finally got to tell her father her mother\'s last words.',
          metadata: ['f_none'],
        },

        {
          description: 'Go back to Ash Lake to meet Sieglinde standing above Siegmeyer\'s dead body. She\'ll give you a Titanite Slab.',
          metadata: ['f_none'],
        },

        {
          description: 'Proceed to explore the Tomb of the Giants and let yourself get invaded by Paladin Leeroy. Kill him to receive the Grant and the Sanctus.',
          metadata: ['f_none'],
        },

        {
          description: 'Defeat Gravelord Nito after entering his Tomb.',
          metadata: ['f_boss'],
        },

        {
          description: 'Make your way to the Kiln of the first flame. Farm the Black Knights until you\'re holding the Black Knight Sword, the Black Knight Greatsword, the Black Knight Halberd, the Black Knight Shield and the Black Knight Greataxe. While you\'re at it, farm all of the colored Titanite Chunks.',
          metadata: ['f_none'],
        },

        {
          description: 'Finish off Gwyn and either Link the Fire or become the Dark Lord. Regardless of what you do, make sure to pick the other choice in new game+.',
          metadata: ['f_boss'],
        },
      ],
    },
    {
      title: 'New Game+',
      description: 'I will only list the stuff you\'ll have to do differently, or additional stuff you\'ll have to do. ',
      items: [
        {
          description: 'You won\'t have to kill the <a href="https://darksouls.wiki.fextralife.com/Gaping+Dragon">Gaping Dragon</a> and Crossbreed Priscilla.',
          metadata: ['f_none'],
        },

        {
          description: 'You will not have to follow Siegmeyer\'s Questline.',
          metadata: ['f_none'],
        },

        {
          description: 'You will not have to do any of the merchant\'s questlines since you won\'t need any of their spells.',
          metadata: ['f_none'],
        },

        {
          description: 'This time, grab all of the embers.',
          metadata: ['f_none'],
        },

        {
          description: 'The Large Ember is in the depths. (Give it to Andre)',
          metadata: ['f_none'],
        },

        {
          description: 'The Very large Ember is in the ruins of New Londo. (Give it to Andre)',
          metadata: ['f_none'],
        },

        {
          description: 'The Large Flame ember is in Lost Izalith. It\'s near the entrnace to the bossroom of the demon firesage. Just go left, were two Taurus Demons are standing around. The chest that holds the ember is protected by four large centipides. (Give it to the Skeleton Blacksmith Vamos)',
          metadata: ['f_none'],
        },

        {
          description: 'After getting the Orange Charred Ring from beating the Centipide Demon, head to the start of Izalith, where the Taurus Demon Army is. Defeat them and look through the lava behind them to find the Large Chaos Ember. (Give it to the Skeleton Blacksmith Vamos)',
          metadata: ['f_none'],
        },

        {
          description: 'The divine ember can be found at the top of the tower behind the boss arena of the Moonlight Butterfly. (Give it to Andre)',
          metadata: ['f_none'],
        },

        {
          description: 'The Dark Ember is located in the Painted world. It\'s in the area that is unlocked by using the annex key. (Give it to Andre)',
          metadata: ['f_none'],
        },

        {
          description: 'The Large Divine Ember is inside a giant coffin near the Tomb of the Giants bonfire. It\'s protected by a horde of giant skeletons. (Give it to Andre)',
          metadata: ['f_none'],
        },

        {
          description: 'The Enchanted Ember is near Sif\'s boss arena. It\'s inside a chest in a small puddle of water, protected by two mushroom people. (Give it to Blacksmith Rickert)',
          metadata: ['f_none'],
        },

        {
          description: 'The Large Magic Ember is inside Seath\'s original boss arena (the one where he kills you) after you\'ve defeated him. (Give it to Blacksmith Rickert)',
          metadata: ['f_none'],
        },

        {
          description: 'Last but not least, the Crystal Ember is inside a chest in Duke\'s archives. It\'s in the same room the Channeler\'s outfit can be found and is hidden behind a bookshelf. (Give it to the Giant Blacksmith)',
          metadata: ['f_none'],
        },

        {
          description: 'Make all of your infused weapons and upgrade them to their maximum strength. If you have trouble remembering how infusions work, click this link. (Andre: Raw (Large Ember) Divine (Divine Ember & Large Divine Ember)) Occult (Dark Ember) (Rickert: Enchanted (Enchanted Ember) & Magic (Large Magic Ember)) (Vamos: Fire (Large Flame Ember) Chaos (Large Chaos Ember)) (Giant Blacksmith: Lightning (Naturally) Crystal (Crystal Ember))',
          metadata: ['f_none'],
        },

        {
          description: 'Defeat Ornstein and Smough, but kill the other one first this time, depending on who you killed first the first time around.',
          metadata: ['f_none'],
        },

        {
          description: 'Trigger a different ending then last time, depending on wether you linked the fire or not in new game.',
          metadata: ['f_none'],
        },

      ],
    },
    {
      title: 'New Game+2',
      description: 'Here I will also only list the things you\'ll have to do differently.',
      items: [
        {
          description: 'You don\'t need any of the embers this time, except for the Large Ember.',
          metadata: ['f_none'],
        },

        {
          description: 'Kill Sif (for the third time) before going to Anor Londo.',
          metadata: ['f_none'],
        },

        {
          description: 'If you have enough Sunlight medals by now, enter the Warriors of Sunlight covenant and offer ten Sunlight medals to receive Great Lightning Spear. Now you have the ability to offer the Soul of Gwy, Lord of Cinder to get the miracle Sunlight Spear.',
          metadata: ['f_none'],
        },

        {
          description: 'Do not Kill Gwynevere. Instead, put on the Darkmoon Seance Ring to get to the Darkmoon Tomb without robbing Anor Londo of it\'s sunlight. DO NOT enter Gwyndolin\'s boss arena, but instead kneel on the carpet in front of the boss arena and take the covenant of Blade of the Darkmoon. Offer ten Souvenirs of Reprisal to receive the last miracle needed: Darkmoon Blade.',
          metadata: ['f_none'],
        },

        {
          description: 'It\'s time. You now have everything you need to create all of the boss wepons you\'ll need. Note that all of the weapons required for ascension have to be upgraded up to +10, not including the Catalysts since they cannot be upgraded. Here are all the Boss weapons you need and what you need for their ascension:',
          metadata: ['f_none'],
        },
      ],
    },
    {
      title: 'Soul of Chaos witch Queelag',
      url: '',
      items: [
        {
          description: 'Chaos Blade (Ascend a +10 Katana. The Uchigatana is recommended since it can easily be obtained by killing the undead merchant (male)).',
          metadata: ['f_weap'],
        },

        {
          description: 'Queelag\'s Furysword (Ascend a +10 Curved Sword, for example a scimitar or a Painting Guardian\'s Sword)',
          metadata: ['f_weap'],
        },
      ],
    },{
      title: 'Soul of the Moonlight Butterfly',
      url: '',
      items: [
        {
          description: 'Moonlight Butterfly Horn (Ascend a +10 Spear. The regular Spear is recommended since it\'s frequently dropped by undead Soldiers wielding it in the Undead Burg. Pikes can also be purchased from Andre.)',
          metadata: ['f_weap'],
        },

        {
          description: 'Crystal Ring Shield (Ascend a +10 standart shield or buckler. The Large Leather Shield can be bought from Andre for a relatively low price.)',
          metadata: ['f_weap'],
        },
      ],
    },{
      title: 'Core of the Iron Golem',
      url: '',
      items: [
        {
          description: 'Golem Axe (Ascend a +10 axe. The Battle Axe can be purchased from Andre.)',
          metadata: ['f_weap'],
        },

        {
          description: 'Dragon Bone Fist (Ascend a +10 claw or fist weapon. Andre sells Ceastus\' for a low price.)',
          metadata: ['f_weap'],
        },
      ],
    },{
      title: 'Soul of Gwyndolin',
      url: '',
      items: [
        {
          description: 'Darkmoon Bow (Ascend a +10 bow. The Longbow can be found on tthe path between the Darkroot Garden and the Darkroot Basin, alongside the hunter armor.)',
          metadata: ['f_weap'],
        },

        {
          description: 'Tin Darkmoon Catalyst (Ascend a Catalyst. The Sorcere\'s Catalyst can be bought from Griggs or Rickert.)',
          metadata: ['f_weap'],
        },

      ],
    },{
      title: 'Soul of Ornstein',
      url: '',
      items: [
        {
          description: 'Dragonslayer Spear (Ascend a +10 Spear. The regular Spear is recommended since it\'s frequently dropped by undead Soldiers wielding it in the Undead Burg. Pikes can also be purchased from Andre.)',
          metadata: ['f_weap'],
        },

      ],
    },{
      title: 'Soul of Smough',
      url: '',
      items: [
        {
          description: 'Smough\'s Hammer (Ascend a +10 Hammer or Great Hammer. The Large Club can be found in Blighttown, guarded by two Infested Barbarians with boulders that they hold above their heads.)',
          metadata: ['f_weap'],
        },

      ],
    },{
      title: 'Soul of Priscilla',
      url: '',
      items: [
        {
          description: 'Lifehunt Scythe (Ascend a +10 Scythe Halber, Scythe or Whip. The Great Scythe is located in the upper levels of the Catacombs.)',
          metadata: ['f_weap'],
        },

      ],
    },{
      title: 'Soul of Gwyn, Lord of Cinder',
      url: '',
      items: [
        {
          description: 'Great Lord Greatsword (Ascend a +10 Greatsword. The Greatsword can be purchased from the Crestfallen Merchant in Sen\'s Fortress.)',
          metadata: ['f_weap'],
        },

      ],
    },{
      title: 'Soul of Great Grey Wolf Sif',
      url: '',
      items: [
        {
          description: 'Greatshield of Artorias (Ascend a +10 Standart Shield or Buckler. The Large Leather Shield can be bought from Andre for a relatively low price.)',
          metadata: ['f_weap'],
        },

        {
          description: 'Greatsword of Artorias (true) (Ascend a +10 Broken Sword, dropped by the Hollows in the Undead Burg. The name doesn\'t indicate that it is the true greatsword and not the cursed one, but you can tell regardless. The true Greatsword inflicts magic damage in addition to physical damage and has higher faith and intelligence requirements to wield. MAKE ABSOLUTELY SURE that you don\'t ascend the same Greatsword two times. If you do this, you\'ll have to enter New Game +3 to get the remaining greatsword.)',
          metadata: ['f_weap'],
        },

        {
          description: 'Greatsword of Artorias (cursed) (Ascend a +10 Dagger, Sword or Greatsword. Make absolutely sure you ascend the right one.The cursed sword does not inflict magic damage, has lower faith and intelligence requirements than the true greatsword and can attack the ghosts in New Londo Ruins without requiring you to be cursed or use a trancient curse.)',
          metadata: ['f_weap'],
        },
      ],
    },
    ],
  };
}
