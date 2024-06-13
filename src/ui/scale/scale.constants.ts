import { RequiredOptions } from "./scale.types"

export const SCALE_ANIMATION_DURATION = 0.2
export const SCALE_TWEEN_INFO = new TweenInfo(SCALE_ANIMATION_DURATION, Enum.EasingStyle.Quad, Enum.EasingDirection.Out)
export const DEFAULT_OPTIONS: RequiredOptions = {
	tweenInfo: SCALE_TWEEN_INFO,
}
