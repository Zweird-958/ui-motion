import { TweenService } from "@rbxts/services"
import deepMerge from "../utils/deepMerge"
import { DEFAULT_OPTIONS } from "./buttons.constants"
import { ButtonGoalTween, Options, RequiredOptions } from "./buttons.type"

const clickAnimations = new Map<GuiObject, { down: Tween; up: Tween }>()

type UI = {
	button: GuiButton
	content?: GuiObject
}
type ClickOptions = {
	tweenInfo: TweenInfo
	goal: ButtonGoalTween
}

const createClickAnimation = (content: GuiObject, { tweenInfo, goal }: ClickOptions) =>
	TweenService.Create(content, tweenInfo, goal)

const clickAnimation = (ui: UI, options?: Options) => {
	const mergedOptions = deepMerge(DEFAULT_OPTIONS, options) as RequiredOptions

	const { button, content } = ui
	const {
		goals: { click, unclick },
		callbacks: { MouseButton1Down, MouseButton1Up },
		tweenInfo,
	} = mergedOptions
	const tween = clickAnimations.get(content ?? button)

	if (!tween) {
		const down = createClickAnimation(content ?? button, { goal: click, tweenInfo })
		const up = createClickAnimation(content ?? button, { goal: unclick, tweenInfo })

		clickAnimations.set(content ?? button, { down, up })

		clickAnimation(ui, options)

		return
	}

	button.MouseButton1Down.Connect(() => {
		tween.down.Play()
		MouseButton1Down?.()
	})

	button.MouseButton1Up.Connect(() => {
		tween.up.Play()
		MouseButton1Up?.()
	})
}

export default clickAnimation
