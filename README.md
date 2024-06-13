# ✨ UI-Motion ✨

A simple package to create animations for your UI elements in Roblox.

## Installation

```
npm i @rbxts/ui-motion
```

## Usage

### Button

```ts
import { clickAnimation } from "@rbxts/ui-motion"

// Simple usage

const button = new Instance("TextButton")

clickAnimation({ button })

// If you want animate a UI element when button is clicked

const button = new Instance("TextButton")
const frame = new Instance("Frame")

clickAnimation({ button, content: frame })
```

#### Options

- goals: Edit the goal values of the tween animation.

```ts
goals: {
	click: Partial<ExtractMembers<GuiObject, Tweenable>> // --> Default: { Size: UDim2.fromScale(0.9, 0.9) }
	unclick: Partial<ExtractMembers<GuiObject, Tweenable>> // --> Default: { Size: UDim2.fromScale(1, 1) }
}
```

- tweenInfo: Edit the tween information.

```ts
tweenInfo: TweenInfo // --> Default: new TweenInfo(0.25, Enum.EasingStyle.Linear, Enum.EasingDirection.InOut)
```

- callbacks: Add callbacks for MouseButton1Down and MouseButton1Up events.

```ts
callbacks: {
  MouseButton1Down?: () => void // --> Default: undefined
  MouseButton1Up?: () => void // --> Default: undefined
}
```

##### Example

```ts
clickAnimation(
	{ button },
	{
		callbacks: {
			MouseButton1Down: () => {
				print("Mouse button down")
			},
			MouseButton1Up: () => {
				print("Mouse button up")
			},
		},
		tweenInfo: new TweenInfo(0.1, Enum.EasingStyle.Linear, Enum.EasingDirection.InOut, 0, false, 0.1),
		goals: {
			click: { Transparency: 0.5 },
			unclick: { Transparency: 0 },
		},
	},
)
```

### Hover

```ts
import { hoverAnimation } from "@rbxts/ui-motion"

// Simple usage

const button = new Instance("TextButton")

hoverAnimation({ main: button })

// If you want animate a UI element when button is clicked

const button = new Instance("TextButton")
const frame = new Instance("Frame")

hoverAnimation({ main: button, content: frame })
```

#### Options

- goals: Edit the goal values of the tween animation.

```ts
goals: {
	hover: Partial<ExtractMembers<GuiObject, Tweenable>> // --> Default: { Size: UDim2.fromScale(0.9, 0.9) }
	unhover: Partial<ExtractMembers<GuiObject, Tweenable>> // --> Default: { Size: UDim2.fromScale(1, 1) }
}
```

- tweenInfo: Edit the tween information.

```ts
tweenInfo: TweenInfo // --> Default: new TweenInfo(0.1, Enum.EasingStyle.Linear, Enum.EasingDirection.InOut)
```

- callbacks: Add callbacks for MouseEnter and MouseLeave events.

```ts
callbacks: {
  MouseEnter?: () => void // --> Default: undefined
  MouseLeave?: () => void // --> Default: undefined
}
```

##### Example

```ts
hoverAnimation(
	{ main: button },
	{
		callbacks: {
			MouseEnter: () => {
				print("Mouse enter")
			},
			MouseLeave: () => {
				print("Mouse leave")
			},
		},
		tweenInfo: new TweenInfo(0.1, Enum.EasingStyle.Linear, Enum.EasingDirection.InOut, 0, false, 0.1),
		goals: { hover: { Rotation: 30 }, unhover: { Rotation: 0 } },
	},
)
```

### Scale

```ts
import { scaleUp, scaleDown, customScale } from "@rbxts/ui-motion"

const button = new Instance("TextButton")

scaleUp(button)
scaleDown(button)
customScale(button, 0.7)
```

#### Options

- tweenInfo: Edit the tween information.

```ts
tweenInfo: TweenInfo // --> Default: new TweenInfo(0.2, Enum.EasingStyle.Quad, Enum.EasingDirection.Out)
```

##### Example

```ts
scaleUp(button, {
	tweenInfo: new TweenInfo(0.1, Enum.EasingStyle.Linear, Enum.EasingDirection.InOut, 0, false, 0.1),
})
customScale(button, 0.9, {
	tweenInfo: new TweenInfo(0.1, Enum.EasingStyle.Linear, Enum.EasingDirection.InOut, 0, false, 0.1),
})
```
