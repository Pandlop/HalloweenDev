function findSafestPath(dream) {
	const n = dream.length;
	const m = dream[0].length;

	const dp = Array.from({ length: n }, () => Array(m).fill(Infinity));

	dp[0][0] = dream[0][0];

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (j + 1 < m) {
				dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i][j] + dream[i][j + 1]);
			}
			if (i + 1 < n) {
				dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + dream[i + 1][j]);
			}
		}
	}

	return dp[n - 1][m - 1];
}
