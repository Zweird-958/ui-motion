const deepMerge = (target: Record<string, unknown>, source?: Record<string, unknown>) => {
	const newTable = { ...target }

	if (!source) {
		return newTable
	}

	for (const [key, value] of pairs(source)) {
		if (typeIs(value, "table") && typeIs(target[key], "table")) {
			const targetTable = target[key] as Record<string, unknown>
			newTable[key] = deepMerge(targetTable, value as Record<string, unknown>)
		} else {
			newTable[key] = value
		}
	}

	return newTable
}

export default deepMerge
