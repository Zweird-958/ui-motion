import { ChildRequired, UIGoalTween } from "../../types/common"

export type Options = {
	goals?: Partial<Record<"click" | "unclick", UIGoalTween>>
	tweenInfo?: TweenInfo
	callbacks?: Partial<Record<"MouseButton1Down" | "MouseButton1Up", () => void>>
}

export type RequiredOptions = Pick<Required<Options>, "callbacks"> & Required<ChildRequired<Omit<Options, "callbacks">>>
