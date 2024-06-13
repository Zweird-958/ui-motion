import { TweenService } from "@rbxts/services"
import { Options, RequiredOptions } from "./hover.types"
import { DEFAULT_OPTIONS } from "./hover.constants"
import deepMerge from "../../utils/deepMerge"

const hoverAnimations = new Map<GuiObject, { enter: Tween; leave: Tween }>()

type UI = {
	main: GuiObject
	content?: GuiObject
}

const hoverAnimation = (ui: UI, options?: Options) => {
	const { main, content } = ui
	const {
		callbacks: { MouseEnter, MouseLeave },
		goals: { hover, unhover },
		tweenInfo,
	} = deepMerge(DEFAULT_OPTIONS, options) as RequiredOptions
	const currentUI = content ?? main
	const tween = hoverAnimations.get(currentUI)

	if (!tween) {
		const enter = TweenService.Create(currentUI, tweenInfo, hover)
		const leave = TweenService.Create(currentUI, tweenInfo, unhover)

		hoverAnimations.set(currentUI, { enter, leave })

		hoverAnimation(ui, options)

		return
	}

	main.MouseEnter.Connect(() => {
		tween.enter.Play()
		MouseEnter?.()
	})

	main.MouseLeave.Connect(() => {
		tween.leave.Play()
		MouseLeave?.()
	})
}

export default hoverAnimation
