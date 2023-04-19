// Genshin Character Search by Alex S

// Button Event Listener
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Search Input
  let name = document.getElementById("search-in").value.toLowerCase();

  // Test the Search Name
  // Four Stars and Traveler
  if (name === "vourukasha's glow") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/vourukashas-glow.png" alt="Main Character" />
      <h2>Vourukasha's Glow</h2>
      <p class = "Element">Domain: Molten Iron Fortress</p>
      <p class="Weapon">Set bonus (2-piece): Hp +20%</p>
      <p class="Affiliation">Set Bonus (4-piece): Elemental Skill and Elemental Burst DMG will be increased by 10%. After the equipping character takes DMG, the aforementioned DMG Bonus is increased by 80% for 5s. This effect increase can have 5 stacks. The duration of each stack is counted independently. These effects can be triggered even when the equipping character is not on the field.</p>
      <p class="Rarity">Works with: Dehya, Nilou</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "nymph's dream") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/nymphs-dream.png" alt="Main Character" />
      <h2>Nymph's Dream</h2>
      <p class = "Element">Domain: Molten Iron Fortress</p>
      <p class="Weapon">Set Bonus (2-piece): Hydro DMG Bonus +15%</p>
      <p class="Affiliation">Set Bonus (4-piece):After Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts hit opponents. 1 stack of Mirrored Nymph will triggered, lasting 8s. When under the effect of 1, 2, or 3 or more Mirrored Nymph stacks, ATK will be increased by 7%/16%/25%, and Hydro DMG will be increased by 4%/9%/15% Mirrored Nymph created by Normal, Charged, and Plunging Attacks, Elemental Skills, and Elemental Bursts exist independently.</p>
      <p class="Rarity">Works With: Childe, Ayato</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "flower of paradise lost") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/flower-of-paradise-lost.png" alt="Character 1" />
      <h2>Flower of Paradise Lost</h2>
      <p class = "Element">Domain: City of Gold</p>
      <p class="Weapon">Set Bonus (2-piece): Increases Elemental Mastery by 80.</p>
      <p class="Affiliation">Set Bonus (4-piece): The equipping character's Bloom, Hyperbloom, and Burgeon reaction DMG are increased by 40%. Additionally, after the equipping character triggers Bloom, Hyperbloom, or Burgeon, they will gain another 25% bonus to the effect mentioned prior. Each stack of this lasts 10s. Max 4 stacks simultaneously. This effect can only be triggered once per second. The character who equips this can still trigger its effects when not on the field.</p>
      <p class="Rarity">Works With: Thoma, Kuki Shinobu, Kokomi, Nahida</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "desert pavilion chronicle") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/desert-pavilion-chronicle.png" alt="Character 1" />
      <h2>Desert Pavilion Chronicle</h2>
      <p class = "Element">Domain: City of Gold</p>
      <p class="Weapon">Set Bonus (2-piece): Anemo DMG Bonus +15%</p>
      <p class="Affiliation">Set Bonus (4-piece): When Charged Attacks hit opponents, the equipping character's Normal Attack SPD will increase by 10% while Normal, Charged, and Plunging Attack DMG will increase by 40% for 15s.</p>
      <p class="Rarity">Works With: Wanderer/Scaramouche</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "gilded dreams") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/gilded-dreams.png" alt="Character 1" />
      <h2>Gilded Dreams</h2>
      <p class = "Element">Domain: Spire of Solitary Enlightment</p>
      <p class="Weapon">Set Bonus (2-piece): Elemental Mastery +80</p>
      <p class="Affiliation">Set Bonus (4-piece): Within 8s of triggering an Elemental Reaction, the character equipping this will obtain buffs based on the Elemental Type of the other party members, ATK is increased by 14% for each party member whose Elemental Type is the same as the equipping character, and Elemental Mastery is increased by 50 for every party member with a different Elemental Type. Each of the aforementioned buffs will count up to 3 characters. This effect can be triggered once every 8s. The character who equips this can still trigger its effects when not on the field.</p>
      <p class="Rarity">Works With: Cyno, Yae Miko, Nahida, Kazuha</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "deepwood memories") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/Minecraft-Logo.png" alt="Character 1" />
      <h2>Deepwood Memories</h2>
      <p class = "Element">Domain: Spire of Solitary Enlightment</p>
      <p class="Weapon">Set Bonus (2-piece): Dendro DMG Bonus +15%</p>
      <p class="Affiliation">Set Bonus (4-piece): After Elemental Skills or Bursts hit opponents, the targets' Dendro RES will be decreased by 30% for 8s. This effect can be triggered even if the equipping character is not on the field.</p>
      <p class="Rarity">Works With: Tighnari, Alhaitham, Collei, Nahida</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "echoes of an offering") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/echoes-of-an-offering.png" alt="Character 1" />
      <h2>Echoes of an Offering</h2>
      <p class = "Element">Domain: The Lost Valley</p>
      <p class="Weapon">Set Bonus (2-piece): ATK +18%</p>
      <p class="Affiliation">Set Bonus (4-piece): When Normal Attacks hit opponents, there is a 36% chance that it will trigger Valley Rite, which will increase Normal Attack DMG by 70% of ATK.
      This effect will be dispelled 0.05s after a Normal Attack deals DMG.
      If a Normal Attack fails to trigger Valley Rite, the odds of it triggering the next time will increase by 20%.
      This trigger can occur once every 0.2s.</p>
      <p class="Rarity">Works With: Ayato, Yoimiya, Childe, Razor</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "vermillion hereafter") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/vermillion-hereafter.png" alt="Character 1" />
      <h2>Vermillion Hereafter</h2>
      <p class = "Element">Domain: The Lost Valley</p>
      <p class="Weapon">Set Bonus (2-peice): ATK +18%</p>
      <p class="Affiliation">Set Bonus (4-peice): After using an Elemental Burst. this character will gain the Nascent Light effect, increasing their ATK by 8% for 16s. When the character's HP decreases, their ATK will further increase by 10%. This increase can occur this way maximum of 4 times. This effect can be triggered once every 0.8s. Nascent Light will be dispelled when the character leaves the field. If an Elemental Burst is used again during the duration of Nascent Light, the original Nascent Light will be dispelled.</p>
      <p class="Rarity">Works With: Xiao, Hutao</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "ocean-hued clam") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/ocean-hued-clam.png" alt="Character 1" />
      <h2>Ocean-Hued Clam</h2>
      <p class = "Element">Domain: Slumbering Court</p>
      <p class="Weapon">Set Bonus (2-piece): Healing Bonus +15%</p>
      <p class="Affiliation">Set Bonus (4-piece): When the character equipping this artifact set heals a character in the party, a Sea-Dyed Foam will appear for 3 seconds, accumulating the amount of HP recovered from healing (including overflow healing).
      At the end of the duration, the Sea-Dyed Foam will explode, dealing DMG to nearby opponents based on 90% of the accumulated healing.
      (This DMG is calculated similarly to Reactions such as Electro-Charged, and Superconduct, but it is not affected by Elemental Mastery, Character Levels, or Reaction DMG Bonuses).
      Only one Sea-Dyed Foam can be produced every 3.5 seconds.
      Each Sea-Dyed Foam can accumulate up to 30,000 HP (including overflow healing).
      There can be no more than one Sea-Dyed Foam active at any given time.
      This effect can still be triggered even when the character who is using this artifact set is not on the field.</p>
      <p class="Rarity">Works With: Kokomi, Qiqi, Jean, Barabra</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "husk of opulent dreams") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/husk-of-opulent-dreams.png" alt="Character 1" />
      <h2>Husk of Opulent Dreams</h2>
      <p class = "Element">Domain: Slumbering Court</p>
      <p class="Weapon">Set Bonus (2-piece): DEF +30%</p>
      <p class="Affiliation">Set Bonus (4-piece): A character equipped with this Artifact set will obtain the Curiosity effect in the following conditions:
      When on the field, the character gains 1 stack after hitting an opponent with a Geo attack, triggering a maximum of once every 0.3s.
      When off the field, the character gains 1 stack every 3s.
      Curiosity can stack up to 4 times, each providing 6% DEF and a 6% Geo DMG Bonus.
      When 6 seconds pass without gaining a Curiosity stack, 1 stack is lost.</p>
      <p class="Rarity">Works With: Itto, Albedo, Noelle</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "emblem of severed fate") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/emblem-of-severed-fate.png" alt="Character 1" />
      <h2>Emblem of Severed Fate</h2>
      <p class = "Element">Domain: Momiji-Dyed Court</p>
      <p class="Weapon">Set Bonus (2-piece): Energy Recharge +20%</p>
      <p class="Affiliation">Set Bonus (4-piece): Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can be obtained in this way.</p>
      <p class="Rarity">Works With: Raiden, Yelan, Mona, Xingqiu</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "shimenawa's reminiscence") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/shimenawas-reminiscence.png" alt="Character 1" />
      <h2>Shimenawa's Reminiscence</h2>
      <p class = "Element">Domain: Momiji-Dyed Court</p>
      <p class="Weapon">Set Bonus (2-piece): ATK +18%</p>
      <p class="Affiliation">Set Bonus (4-piece): When casting an Elemental Skill, if the character has 15 or more Energy, they lose 15 Energy and Normal/Charged/Plunging Attack DMG is increased by 50% for 10s. This effect will not trigger again during that duration.</p>
      <p class="Rarity">Works With: Yoimiya, Shenhe, Xiao, Klee</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "pale flame") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/pale-flame.png" alt="Character 1" />
      <h2>Pale Flame</h2>
      <p class = "Element">Domain: Ridge Watch</p>
      <p class="Weapon">Set Bonus (2-piece): Physical DMG Bonus +25%</p>
      <p class="Affiliation">Set Bonus (4-piece): When an Elemental Skill hits an opponent, ATK is increased by 9% for 7s. This effect stacks up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the 2-set effect is increased by 100%.</p>
      <p class="Rarity">Works With: Eula, Razor</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "tenacity of the millelith") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/Tenacity-of-the-millelith.png" alt="Character 1" />
      <h2>Tenacity of The Millelith</h2>
      <p class = "Element">Domain: Ridge Watch</p>
      <p class="Weapon">Set Bonus (2-piece): HP +20%</p>
      <p class="Affiliation">Set Bonus (4-piece): When an Elemental Skill hits an opponent, the ATK of all nearby party members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can be triggered once every 0.5s. This effect can still be triggered even when the character who is using this artifact set is not on the field.</p>
      <p class="Rarity">Works With: Zhongli, Hutao, Layla, Diona</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "heart of depth") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/heart-of-depth.png" alt="Character 1" />
      <h2>Heart of Depth</h2>
      <p class = "Element">Domain: Peak of Vindagnyr</p>
      <p class="Weapon">Set Bonus (2-piece): Hydro DMG Bonus +15%</p>
      <p class="Affiliation">Set Bonus (4-piece): After using an Elemental Skill, increases Normal Attack and Charged Attack DMG by 30% for 15s.</p>
      <p class="Rarity">Works With: Childe, Ayato, Yelan, Xingqiu</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "blizzard strayer") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/blizzard-strayer.png" alt="Character 1" />
      <h2>Blizzard Strayer</h2>
      <p class = "Element">Domain: Peak of Vindagnyr</p>
      <p class="Weapon">Set Bonus (2-piece): Cryo DMG Bonus +15%</p>
      <p class="Affiliation">Set Bonus (4-piece): When a character attacks an opponent affected by Cryo, their CRIT Rate is increased by 20%. If the opponent is Frozen, CRIT Rate is increased by an additional 20%.
      </p>
      <p class="Rarity">Works With: Shenhe, Ayaka, Ganyu, Aloy</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "crimson witch of flames") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/chrimson-witch-of-flames.png" alt="Character 1" />
      <h2>Crimson Witch of Flames</h2>
      <p class = "Element">Domain: Hidden Palace of Zhou Formula</p>
      <p class="Weapon">Set Bonus (2-piece): Pyro DMG Bonus 15%</p>
      <p class="Affiliation">Set Bonus (4-piece): Increases Overloaded and Burning, and Burgeon DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using Elemental Skill increases the 2-Piece Set Bonus by 50% of its starting value for 10s. Max 3 stacks.</p>
      <p class="Rarity">Works With: Diluc, Klee, Yoimiya, Hutao</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "lavawalker") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/lavawalker.png" alt="Character 1" />
      <h2>Lavawalker</h2>
      <p class = "Element">Domain: Hidden Palace of Zhou Formula</p>
      <p class="Weapon">Set Bonus (2-piece): Pyro RES increased by 40%</p>
      <p class="Affiliation">Set Bonus (4-piece): Increases DMG against opponents affected by Pyro by 35%.</p>
      <p class="Rarity">Works With: Yoimiya, Yanfei</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "thundering fury") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/thundering-fury.png" alt="Character 1" />
      <h2>Thundering Fury</h2>
      <p class = "Element">Domain: Midsummer Courtyard</p>
      <p class="Weapon">Set Bonus (2-piece): Electro DMG Bonus +15%</p>
      <p class="Affiliation">Set Bonus (4-piece): Increases DMG caused by Overloaded, Electro-Charged, Superconduct, and Hyperbloom by 40%, and the DMG Bonus conferred by Aggravate is increased by 20%. When Quicken or the aforementioned Elemental Reactions are triggered, Elemental Skill CD is decreased by 1s. Can only occur once every 0.8s.</p>
      <p class="Rarity">Works With: Raiden, Kujou, Beidou, Keqing</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "thundersoother") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/thundersoother.png" alt="Character 1" />
      <h2>Thundersoother</h2>
      <p class = "Element">Domain: Midsummer Courtyard</p>
      <p class="Weapon">Set Bonus (2-piece): Electro RES increased by 40%</p>
      <p class="Affiliation">Set Bonus (4-piece): Increases DMG against opponents affected by Electro by 35%.</p>
      <p class="Rarity">Works With: Lisa, Fischl, Beidou, Keqing</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "retracing bolide") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/retracing-bolide.png" alt="Character 1" />
      <h2>Retracing Bolide</h2>
      <p class = "Element">Domain: Domain of Guyun</p>
      <p class="Weapon">Set Bonus (2-piece): Increases Sheild Strength by 35%</p>
      <p class="Affiliation">Set Bonus (4-piece): While protected by a shield, gain an additional 40% Normal and Charged Attack DMG.</p>
      <p class="Rarity">Works With: Xinyan, Noelle</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "archaic petra") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/archaic-petra.png" alt="Character 1" />
      <h2>Archaic Petra</h2>
      <p class = "Element">Domain: Domain of Guyun</p>
      <p class="Weapon">Set Bonus (2-piece): Geo DMG Bonus+15%</p>
      <p class="Affiliation">Set Bonus (4-piece): Upon obtaining an Elemental Shard created through a Crystallize Reaction, all party members gain 35% DMG Bonus for that particular element for 10s. Only one form of Elemental DMG Bonus can be gained in this manner at any one time.</p>
      <p class="Rarity">Works With: Albedo, Zhongli</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "viridescent venerer") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/viridescent-venerer.png" alt="Character 1" />
      <h2>Viridescent Venerer</h2>
      <p class = "Element">Domain: Valley of Remembrance</p>
      <p class="Weapon">Set Bonus (2-piece): Anemo DMG Bonus +15%</p>
      <p class="Affiliation">Set Bonus (4-piece): Increases Swirl DMG by 60%. Decreases opponent's Elemental RES to the element infused in the Swirl by 40% for 10s.</p>
      <p class="Rarity">Works With: Xiao, Jean, Venti, Kazuha</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "maiden beloved") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/maiden-beloved.png" alt="Character 1" />
      <h2>Maiden Beloved</h2>
      <p class = "Element">Domain: Valley of Remembrance</p>
      <p class="Weapon">Set Bonus (2-piece): Character Healing Effectiveness +15%</p>
      <p class="Affiliation">Set Bonus (4-piece): Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s.</p>
      <p class="Rarity">Works With: Barabra, Jean, Bennett, Diona</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "bloodstained chivalry") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/bloodstained-chivalry.png" alt="Character 1" />
      <h2>Bloodstained Chivalry</h2>
      <p class = "Element">Domain: Clear Pool and Mountain Cavern</p>
      <p class="Weapon">Set Bonus (2-piece): Physical DMG Bonus +25%</p>
      <p class="Affiliation">Set Bonus (4-piece): After defeating an opponent, increases Charged Attack DMG by 50%, and reduces its Stamina cost to 0 for 10s. Also triggers with wild animals such as boars, squirrels and frogs.</p>
      <p class="Rarity">Works With: Eula, Jean, Razor</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "noblesse oblige") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/noblesse-oblige.png" alt="Character 1" />
      <h2>Noblesse Oblige</h2>
      <p class = "Element">Domain: Clear Pool and Mountian Cavern</p>
      <p class="Weapon">Set Bonus (2-piece): Elemential Burst DMG +20%</p>
      <p class="Affiliation">Set Bonus (4-piece): Using an Elemental Burst increases all party members' ATK by 20% for 12s. This effect cannot stack.</p>
      <p class="Rarity">Works With: Jean, Kaeya, Xingqiu, Lisa</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "wanderer's troupe") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/wanderers-troupe.png" alt="Character 1" />
      <h2>Wanderer's Troupe</h2>
      <p class = "Element">Source: Artifact Strongbox, Weekly Bosses, Normal Bosses</p>
      <p class="Weapon">Set Bonus (2-piece): Increases Elemental Mastery by 80.</p>
      <p class="Affiliation">Set Bonus (4-piece): Increases Charged Attack DMG by 35% if the character uses a Catalyst or Bow.</p>
      <p class="Rarity">Works With: Ganyu, Yanfei, Klee, Amber</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else if (name === "gladiator's finale") {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src="images/gladiators-finale.png" alt="Character 1" />
      <h2>Gladiator's Finale</h2>
      <p class = "Element">Source: Artifact Strongbox, Weekly Bosses, Normal Bosses</p>
      <p class="Weapon">Set Bonus (2-piece): ATK +18%</p>
      <p class="Affiliation">Set Bonus (4-piece): If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%.</p>
      <p class="Rarity">Works With: Razor, Keqing, Xinyan</p>
      <p class="Rarity">Rarity: 4-star, 5-star</p>
      `;
  } else {
    document.getElementById(
      "char-info"
    ).innerHTML = `<img src ="images/questionmark.png" alt="Question Mark" />
    <p class="Element">List of Artifacts Thus Far:</p>
    <ul class="Element">
    <li>Gladiators Finale</li>
    <li>Wanderer's Troupe</li>
    <li>Noblesse Oblige</li>
    <li>Bloodstained Chivalry</li>
    <li>Maiden Beloved</li>
    <li>Viridescent Venerer</li>
    <li>Archaic Petra</li>
    <li>Retracing Bolide</li>
    <li>Thundersoother</li>
    <li>Thundering Fury</li>
    <li>Lavawalker</li>
    <li>Crimson Witch of Flames</li>
    <li>Blizzard Strayer</li>
    <li>Heart of Depth</li>
    <li>Tenactiy of the Milleith</li>
    <li>Pale Flame</li>
    <li>Shimenawa's Reminiscence</li>
    <li>Emblem of Severd Fate</li>
    <li>Husk of Opulent Dreams</li>
    <li>Ocean-Hued Clam</li>
    <li>Vermillion Hereafter</li>
    <li>Echoes of an Offering</li>
    <li>Deepwood Memories</li>
    <li>Gilded Dreams</li>
    <li>Desert Pavilion Chronicle</li>
    <li>Flower of Paradise Lost</li>
    <li>Nymph's Dream</li>
    <li>Vourukasha's Glow</li>

    </ul>
    <p class="Element">try one of these Artifacts.</p>`;
  }
}
