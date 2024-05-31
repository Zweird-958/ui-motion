export type ButtonGoalTween = Partial<ExtractMembers<GuiObject, Tweenable>>

export type ChildRequired<T> = {
	[K in keyof T]: Required<T[K]>
}

export type DeepRequired<T> = {
	[K in keyof T]: Required<DeepRequired<T[K]>>
}

export type Options = {
	goals?: Partial<Record<"click" | "unclick", ButtonGoalTween>>
	tweenInfo?: TweenInfo
	callbacks?: Partial<Record<"MouseButton1Down" | "MouseButton1Up", () => void>>
}

export type RequiredOptions = Pick<Required<Options>, "callbacks"> & Required<ChildRequired<Omit<Options, "callbacks">>>
