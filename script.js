// variables
const name = "Zara Darkbane";
const characterClass = "Hechicera";
const level = 7;
const health = 80;
const mana = 120;
const attack = 45;
const defense = 30;

// funciones
function calculateDamage(attack, defense) {
  const damage = attack - defense;
  return damage > 0 ? damage : 0;
}

const isAlive = (health) => health > 0;

const canCastSpell = (currentMana, spellCost, isStunned) => {
  return currentMana >= spellCost && !isStunned;
};

function getPresentation(name, characterClass, level) {
  return `${name} — ${characterClass} (Nivel ${level})`;
}

// resultados
console.log(calculateDamage(attack, defense));
console.log(isAlive(health));
console.log(canCastSpell(mana, 30, false));
console.log(getPresentation(name, characterClass, level));