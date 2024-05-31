import { ButtonGoalTween, RequiredOptions } from "./buttons.type"

export const CLICK_ANIMATION_DURATION = 0.25
export const CLICK_TWEEN_INFO = new TweenInfo(
	CLICK_ANIMATION_DURATION / 2,
	Enum.EasingStyle.Linear,
	Enum.EasingDirection.InOut,
)
export const CLICK_GOAL: ButtonGoalTween = { Size: UDim2.fromScale(0.9, 0.9) }
export const UNCLICK_GOAL: ButtonGoalTween = { Size: UDim2.fromScale(1, 1) }
export const DEFAULT_OPTIONS: RequiredOptions = {
	goals: { click: CLICK_GOAL, unclick: UNCLICK_GOAL },
	callbacks: {},
	tweenInfo: CLICK_TWEEN_INFO,
}
