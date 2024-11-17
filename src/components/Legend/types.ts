import { MarkerType } from '../UMLEditor/types'

export type LegendConfigs = Partial<{
	[key in MarkerType]: LegendItemT
}>

export interface LegendItemT {
	label: string
	color: string
}
