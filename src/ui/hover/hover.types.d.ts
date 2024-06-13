import { ChildRequired, UIGoalTween } from "../../types/common"

export type Options = {
	goals?: Partial<Record<"hover" | "unhover", UIGoalTween>>
	tweenInfo?: TweenInfo
	callbacks?: Partial<Record<"MouseEnter" | "MouseLeave", () => void>>
}

export type RequiredOptions = Pick<Required<Options>, "callbacks"> & Required<ChildRequired<Omit<Options, "callbacks">>>
