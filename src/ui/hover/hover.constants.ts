import { UIGoalTween } from "../../types/common"
import { RequiredOptions } from "./hover.types"

export const HOVER_ANIMATION_DURATION = 0.1
export const HOVER_TWEEN_INFO = new TweenInfo(
	HOVER_ANIMATION_DURATION,
	Enum.EasingStyle.Linear,
	Enum.EasingDirection.InOut,
)
export const HOVER_GOAL: UIGoalTween = { Size: UDim2.fromScale(0.9, 0.9) }
export const UNHOVER_GOAL: UIGoalTween = { Size: UDim2.fromScale(1, 1) }
export const DEFAULT_OPTIONS: RequiredOptions = {
	goals: { hover: HOVER_GOAL, unhover: UNHOVER_GOAL },
	callbacks: {},
	tweenInfo: HOVER_TWEEN_INFO,
}
