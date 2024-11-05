function findTheKiller(whisper, suspects) {
	let names = [];
	for (let i = 0; i < suspects.length; i++) {
		let sus = true;
		for (let j = 0; j < whisper.length; j++) {
			if (whisper[j] == "$") {
				sus = suspects[i].length == whisper.length - 1;
			} else if (whisper[j] === "~") {
				continue;
			} else if (whisper[j].toLowerCase() !== suspects[i][j]?.toLowerCase()) {
				sus = false;
				break;
			}
		}

		if (sus) {
			names.push(suspects[i]);
		}
	}

	if (names.length > 1) {
		return names.join(",");
	} else if (names.length === 0) {
		return "";
	}
	return names[0];
}
