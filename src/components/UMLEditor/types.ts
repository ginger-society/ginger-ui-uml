import { FunctionComponent } from 'react'
import { LegendConfigs, LegendItemT } from '../Legend/types'

export enum MarkerType {
	Triangle = 'triangle',
	Rectangle = 'rectangle',
	Circle = 'circle',
	Hexagon = 'hexagon',
	Pentagon = 'pentagon',
	Rectangle2 = 'rectangle2',
	Rectangle3 = 'rectangle3',
	Rectangle4 = 'rectangle4'
}

export interface Row {
	id: string
	data: any
}

export enum BlockType {
	Enum = 'enum',
	Table = 'table',
	SystemBlock = 'system-block'
}

export interface Block {
	id: string
	type: BlockType
	ref: React.RefObject<HTMLDivElement>
	position: { top: number; left: number }
	rows: Row[] // Number of rows for each block
	data: Record<string, any>
}

export type BlockData = {
	id: string
	rows: Row[]
	type: BlockType
	position: { top: number; left: number }
	data: Record<string, any>
}

export interface Connection {
	block1Id: string
	fromRow: number
	block2Id: string
	toRow: number
	marker?: MarkerType // Specify the marker types
	label?: string // Add a label to the connection
}

export interface LegendProps {
	items: LegendConfigs
	onClick?: (item: LegendItemT) => void
	title?: string
}

export interface LegendItemProps {
	item: LegendItemT
	marker: MarkerType
}

export enum EditorTypeEnum {
	ROW = 'row',
	BLOCK = 'block'
}

export interface EditorData {
	rowIndex: number | undefined
	blockId: string
}

export interface EditorProps {
	close: () => void
}

export interface UMLEditorProps {
	setBlocks: React.Dispatch<
		React.SetStateAction<{
			[key: string]: Block
		}>
	>
	setConnections: React.Dispatch<React.SetStateAction<Connection[]>>
	blocks: { [key: string]: Block }
	connections: Connection[]
	legendConfigs: LegendConfigs
	RowEditor: FunctionComponent<EditorProps>
	BlockEditor: FunctionComponent<EditorProps>
	RowRenderer?: FunctionComponent<{ rowData: Row }>
	HeadingRenderer?: FunctionComponent<{ blockData: Block }>
	FooterRenderer?: FunctionComponent<{
		blockData: Block
		allowEdit?: boolean
		staticOptionsHandler: (option: string, blockData: Block) => void
	}>
	staticOptionsHandler?: (option: string, blockData: Block) => void
	allowEdit?: boolean
	allowDrag?: boolean
	EnumRowRenderer?: FunctionComponent<{ blockData: Block }>
	setEditorData: React.Dispatch<React.SetStateAction<EditorData | undefined>>
	updateConnections: () => void
	createNewBlock?: (type: BlockType, x: number, y: number, id: string) => Block
	handleLegendClick?: (item?: LegendItemT) => void
}
