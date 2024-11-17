import React, { useCallback, useState } from 'react'
import UMLEditor from '.'
import '../../../node_modules/@ginger-society/ginger-ui/dist/esm/index.css'
import { LegendConfigs, LegendItemT } from '../Legend/types'
import { Block, BlockType, Connection, EditorData, MarkerType } from './types'

// Example Story for the UML Editor
export const ExampleStory: React.FC = () => {
	// State to manage blocks and connections
	const [blocks, setBlocks] = useState<{
		[key: string]: Block
	}>({
		'block-1': {
			id: 'block-1',
			type: BlockType.Table,
			ref: React.createRef<HTMLDivElement>(),
			position: { top: 50, left: 100 },
			rows: [
				{ id: 'row-1', data: { label: 'Row 1' } },
				{ id: 'row-2', data: { label: 'Row 2' } }
			],
			data: { color: '#FFD700', label: 'Block 1' }
		},
		'block-2': {
			id: 'block-2',
			type: BlockType.Enum,
			ref: React.createRef<HTMLDivElement>(),
			position: { top: 200, left: 300 },
			rows: [
				{ id: 'row-1', data: { label: 'Option 1' } },
				{ id: 'row-2', data: { label: 'Option 2' } }
			],
			data: { color: '#32CD32', label: 'Block 2' }
		}
	})

	// Connections between blocks
	const [connections, setConnections] = useState<Connection[]>([
		{
			block1Id: 'block-1',
			fromRow: 0,
			block2Id: 'block-2',
			toRow: 1,
			marker: MarkerType.Triangle,
			label: 'Connection 1'
		}
	])

	const [editorData, setEditorData] = useState<EditorData>()

	// Legend configuration
	const legendConfigs: LegendConfigs = {
		[MarkerType.Rectangle4]: {
			label: 'Executable',
			color: '#4793AF'
		},
		[MarkerType.Hexagon]: {
			label: 'Database',
			color: '#89439f'
		},
		[MarkerType.Triangle]: {
			label: 'RPCEndpoint',
			color: '#799351'
		},
		[MarkerType.Rectangle]: {
			label: 'Portal',
			color: '#1A4870'
		},
		[MarkerType.Pentagon]: {
			label: 'Cache',
			color: '#6e46c0'
		},
		[MarkerType.Rectangle2]: {
			label: 'Library',
			color: '#000'
		},
		[MarkerType.Rectangle3]: {
			label: 'MessageQueue',
			color: '#2E4053'
		}
	}

	// Mock Row Editor Component
	const RowEditor = ({ close }: { close: () => void }) => (
		<div>
			<h3>Row Editor</h3>
			<button onClick={close}>Close</button>
		</div>
	)

	// Mock Block Editor Component
	const BlockEditor = ({ close }: { close: () => void }) => (
		<div>
			<h3>Block Editor</h3>
			<button onClick={close}>Close</button>
		</div>
	)

	// Function to update connections (can be expanded for actual logic)
	const updateConnections = useCallback(() => {
		console.log('Connections updated!')
	}, [])

	// Function to create new blocks with customizable properties
	const createNewBlock = (
		type: BlockType,
		x: number,
		y: number,
		id: string
	) => ({
		id,
		type,
		ref: React.createRef<HTMLDivElement>(),
		position: { top: y, left: x },
		rows: [],
		data: { color: '#ADD8E6', label: `New Block ${id}` }
	})

	// Handle legend item clicks for interactivity
	const handleLegendClick = (item?: LegendItemT) => {
		console.log('Legend clicked:', item)
	}

	return (
		<div>
			{/* <h2>UML Editor Example</h2> */}

			{/* UML Editor Component */}
			<UMLEditor
				setBlocks={setBlocks}
				setConnections={setConnections}
				blocks={blocks}
				connections={connections}
				legendConfigs={legendConfigs}
				RowEditor={RowEditor}
				BlockEditor={BlockEditor}
				setEditorData={setEditorData}
				updateConnections={updateConnections}
				createNewBlock={createNewBlock}
				handleLegendClick={handleLegendClick}
			/>
		</div>
	)
}
