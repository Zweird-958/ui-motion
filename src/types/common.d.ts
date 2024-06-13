export type UIGoalTween = Partial<ExtractMembers<GuiObject, Tweenable>>
export type ChildRequired<T> = {
	[K in keyof T]: Required<T[K]>
}

export type DeepRequired<T> = {
	[K in keyof T]: Required<DeepRequired<T[K]>>
}
