import { TweenService } from "@rbxts/services"
import deepMerge from "../../utils/deepMerge"
import { DEFAULT_OPTIONS } from "./scale.constants"
import { Options, RequiredOptions } from "./scale.types"

const scaleAnimationsUp = new Map<GuiObject, Tween>()
const scaleAnimationsDown = new Map<GuiObject, Tween>()
const customScaleAnimations: Record<string, Tween> = {}

const createScale = (ui: GuiObject) => {
	const scale = new Instance("UIScale", ui)

	return scale
}

const getScale = (ui: GuiObject) => (ui.FindFirstChildOfClass("UIScale") as UIScale | undefined) || createScale(ui)

export const scaleUp = (ui: GuiObject, options?: Options) => {
	const scale = getScale(ui)
	const tween = scaleAnimationsUp.get(ui)
	const { tweenInfo } = deepMerge(DEFAULT_OPTIONS, options) as RequiredOptions

	if (!tween) {
		scaleAnimationsUp.set(ui, TweenService.Create(scale, tweenInfo, { Scale: 1 }))

		scaleUp(ui, options)

		return
	}

	tween.Play()
}

export const scaleDown = (ui: GuiObject, options?: Options) => {
	const scale = getScale(ui)
	const tween = scaleAnimationsDown.get(ui)
	const { tweenInfo } = deepMerge(DEFAULT_OPTIONS, options) as RequiredOptions

	if (!tween) {
		scaleAnimationsDown.set(ui, TweenService.Create(scale, tweenInfo, { Scale: 0 }))

		scaleDown(ui, options)

		return
	}

	tween.Play()
}

export const customScale = (ui: GuiObject, scale: number, options?: Options) => {
	const uiScale = getScale(ui)
	const { tweenInfo } = deepMerge(DEFAULT_OPTIONS, options) as RequiredOptions
	const customName = `${ui.Name}-${scale}`
	const tween = customScaleAnimations[customName]

	if (!tween) {
		customScaleAnimations[customName] = TweenService.Create(uiScale, tweenInfo, { Scale: scale })

		customScale(ui, scale, options)

		return
	}

	tween.Play()
}
