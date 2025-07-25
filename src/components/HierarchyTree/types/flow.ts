export interface Position {
  x: number
  y: number
}

export interface BoxSize {
  width: number
  height: number
}

export interface BoxData {
  id: string
  label: string
  position: Position
  size?: BoxSize // Opcional, usará valores padrão se não fornecido
}

export interface ConnectionData {
  start: string
  end: string
}

export interface FlowData {
  boxes: BoxData[]
  connections: ConnectionData[]
}

export interface BoxElement {
  boxRef: HTMLElement
}

export interface HierarchyTreeProps {
  initialData: FlowData
  showAddButton?: boolean
  showRemoveButton?: boolean
  allowLabelEdit?: boolean
  boxWidth?: number
  boxHeight?: number
  enableShadow?: boolean
  boxBackgroundColor?: string
  boxLabelColor?: string
  editFieldBorderColor?: string
  editFieldBackgroundColor?: string
  editFieldTextColor?: string
  addButtonBackgroundColor?: string
  addButtonBorderColor?: string
  addButtonContent?: string
  addButtonSize?: number
  addButtonShape?: 'circle' | 'square' | 'rounded'
  removeButtonBackgroundColor?: string
  removeButtonBorderColor?: string
  removeButtonContent?: string
  removeButtonSize?: number
  removeButtonShape?: 'circle' | 'square' | 'rounded'
  enableCollisionAvoidance?: boolean
  enableConsoleLog?: boolean
  highlightSelectedBox?: boolean
  selectedBoxBorderColor?: string
  selectedBoxBorderWidth?: number
  showButtonsOnlyOnSelected?: boolean
}
