function battleHorde(zombies, humans) {
	let added;
	let side;
	zombies = zombies = zombies.split("");
	humans = humans.split("");
	for (let i = 0; i < zombies.length; i++) {
		if (i == 0) {
			added = 0;
			side = "";
		}

		if (side == "z") {
			zombies[i] = parseInt(zombies[i]) + added;
		} else if (side == "h") {
			humans[i] = parseInt(humans[i]) + added;
		}

		if (parseInt(zombies[i]) > parseInt(humans[i])) {
			added = parseInt(zombies[i]) - parseInt(humans[i]);
			side = "z";
		} else if (parseInt(humans[i]) > parseInt(zombies[i])) {
			added = parseInt(humans[i]) - parseInt(zombies[i]);
			side = "h";
		} else {
			added = 0;
			side = "x";
		}
	}

	if (side == "x") {
		return "x";
	}
	return added + side;
}
