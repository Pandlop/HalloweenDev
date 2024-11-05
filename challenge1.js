function createMagicPotion(potions, target) {
	let pos1 = 0;
	let pos2 = potions.length;
	for (let i = 0; i < potions.length; i++) {
		val1 = potions[i];
		for (let j = i + 1; j < potions.length; j++) {
			val2 = potions[j];
			if (val1 + val2 == target && j < pos2) {
				pos1 = i;
				pos2 = j;
			}
		}
	}

	if (potions[pos1] + potions[pos2] != target) {
		return undefined;
	} else {
		return [pos1, pos2];
	}
}
