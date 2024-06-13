import { UIGoalTween } from "../types/common"

const goalMerge = (target: Record<string, UIGoalTween>, source?: Record<string, UIGoalTween>) => {
	const goals: Record<string, unknown> = {}

	if (!source) {
		return target
	}

	for (const [key, value] of pairs(source)) {
		goals[key] = value
	}

	return goals
}

const deepMerge = (target: Record<string, unknown>, source?: Record<string, unknown>, isGoal = false) => {
	const newTable = { ...target }

	if (!source) {
		return newTable
	}

	const goals = goalMerge(target.goals as Record<string, UIGoalTween>, source.goals as Record<string, UIGoalTween>)
	newTable.goals = goals

	for (const [key, value] of pairs(source)) {
		if (key === "goals") {
			continue
		}

		if (typeIs(value, "table") && typeIs(target[key], "table")) {
			const targetTable = target[key] as Record<string, unknown>
			newTable[key] = deepMerge(targetTable, value as Record<string, unknown>, isGoal || key === "goals")
		} else {
			newTable[key] = value
		}
	}

	return newTable
}

export default deepMerge
