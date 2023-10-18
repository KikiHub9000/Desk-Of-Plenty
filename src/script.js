let effects = [
"You learn the cantrip Magic Manure, which grows trees in 10 seconds.",
"You change genders.",
"You know the location of a powerful artifact. ",
"You are dropped to 1 Hit point or buffed to Max hit points at your max level. (1d2)",
"A zombie appears with a shovel, it attacks you with it dealing 1d6 bludgeoning damage.",
"You can summon at will a Prostitute who appears out of thin air and doesn’t charge you. ",
"You are unknowingly recruited to a secret organization. ",
"You get the word “A$$HOLE” permanently tattooed to your face. It magically appears to be written in every other language to anyone who can read said languages. (-2 Charisma when visible) ",
"You become the leader of the Illuminati and gain the knowledge of one. ",
"You can cast find path at will, summons 2 hostile imps ",
"You contract Lycanthropy. ",
"You gain the ability to cast a random spell at will twice a day. Every time you attempt to cast this spell roll 1d6 to determine which spell happens. 1- Disintegrate 2- Heal 3- True Resurrection 4- Power Word Kill 5 - True Polymorph 6- Animal Shape ",
"If you are a chaotic alignment you can use the wish spell once at will, if neutral there is no effect, if lawful you are cursed with disadvantage on every role, only removable by a god or the wish spell. ",
"You have a flashback to your librarian days (Which you not have) ",
"You can cast a 10 minute ritual spell to turn a bucket into a bucket, it shines during the transformation, appearing to turn into something mystifying, but then returns to be a bucket. ",
"Every insult you make turns into vicious mockery ",
"The card turns into a Bag of Holding",
"The card turns into a Skeleton Key ",
"The card turns into a box of chocolates, each with a random potion effect decided by the DM ",
"Your heart doubles in size, visibly beating on your skin. ",
"You fall in love with pain and suffering",
"A gust of wind constantly surrounds you ",
"Your sneezes are so powerful they can create mini-tornadoes that deal 1d4 force damage ",
"You get your own personal rain cloud that follows you wherever you are ",
"An anvil weighing 120kg drops on your foot from 10ft above, you are grappled as it is falling dealing 1d10 bludgeoning damage ",
"A monster with a CR equal to your level forms out of the card.",
"You lose all possessions in the prime material plane ",
"You are possessed by a ghost, no one notices ",
"You grow deathly ill ",
"You gain telekinesis but only with dwarves.",
"You gain the ability to become intangible once a day for 30 minutes, you can pass through non-magical materials. ",
"You are knocked into a coma where you must face your greatest fear to awaken, you have disadvantages on rolls inside the coma/dream. ",
"Your skin turns to a diamond material, very hard and very shiny. ",
"You gain an enchanted 8 ball that will remove one creature from existence ",
"Murphy’s law truly applies to you ",
"You gain a potion of Speeeeeeeeeed ",
"You are teleported to a remote island in the middle of the ocean, miles away from anyone else. You stay there for 1 day and are teleported back to where you came from.",
"You are cloned and the clone tries to attack you",
"You get a stick of Old Spice ",
"You subclass as a gentleman ",
"You can summon a Butler at will, he will do Butler things for you. ",
"You learn the cantrip acid splash, however, when you use it you become high on acid.",
"You become the world's greatest chef, with culinary skills that seem almost magical. You can make anything taste good and you have a Bag of Holding V filled with all kinds of food fit for kings. It can only contain food. ",
"You gain darkvision. ",
"You are blinded",
"You lose an eye but get a cool eyepatch. ",
"You always see the worst in people",
"You gain truesight with a radius of 10 ft ",
"You decide life is too hard and role 1d6 (russian roulette) on a 1 you a shot in the head. ",
"You are hypnotized to believe whatever someone near you says next. ",
"You get a magical cloak of the DM’s choice.",
"Card transforms into a magical sword of the DM’s choice. ",
"A kitten pops out of the card, it follows you everywhere ",
"A large diamond appears but if you touch it you take 1d6 radiant damage. ",
"The ground falls out below you and you start falling, it seems to last forever but you are actually just on the ground screaming.. ",
"You get a torch of ever-burning fire ",
"You gain a third eye. You are now a triclops. ",
"5 random cantrips shootout at you from the card",
"7 hours pass but nobody and nothing has moved. ",
"You become aware you are in a game for 10 seconds and act accordingly. ",
"You are knocked unconscious.",
"Gravity increases 5 fold on you. ",
"Your voice sounds very quiet to you therefore you shout everything. ",
"You question everything (Paranoid) ",
"You question everything (Philosophy) ",
"You become a mathematician and aim your spells and attacks as such. Take an extra turn to calculate your attacks, you now crit on an 18, 19, or 20. ",
"You get the cantrip Occia allowing you to “Force pull” non-magical items toward you. ",
"You can read minds however you are always wrong. ",
"You can remove one entity from existence however you will also be removed from existence. (no revival) ",
"You are really good at killing small defenceless creatures. ",
"You know where the Tarasque is ",
"Endless Jug of Ale appears in your hand ",
"You get a cursed wand of magic missile: acts normal however any damage dealt is also dealt to the nearest young orphan.",
"You get a sentient cloak that just complains about the weather",
"You get boots of blinding speed, Your speed doubles and you lose all vision when worn ",
"A fanatic cult forms seeing you as their God, they will do anything for you ",
"A Great Wyrm Blue Dragon illusion appears in front of you, it stares at you growling. It lasts for 1 hour. ",
"You become obsessed with Atlantis.",
"You gain blacksmiths tools and proficiency with them. ",
"You have +2 to strength rolls using your dominant hand ",
"You get a job as a waiter at a maid cafe ",
"Kiki loses 2 intelligence permanently ",
"You can cast the Shield spell as a cantrip.",
];

let suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
let cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex > 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(effects);

let selected = effects.slice(0, 52);

let suit = 0;
let card = 0;

selected.forEach(function(entry) {
  if(card === 0)
        document.getElementById('desk-of-plenty').innerHTML += '<h3>' + suits[suit] + '</h3>';

  document.getElementById('desk-of-plenty').innerHTML += '<li>' + (cards[card] + " of " + suits[suit] + " : ").bold() + entry + '</li>';  
  card += 1;
  if(card === 13)
  {
    card = 0;
    suit +=1;
  }    
});
