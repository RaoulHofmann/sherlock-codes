export type SimpleCard = {
  _type: 'simpleCard'
  title: string
  description: string
}

export type Card = {
  _type: 'card'
  image: {
    _type: 'image'
    asset: { _ref: string; _type: 'reference' }
    alt: string
  }
  title: string
  description: string
  link?: {
    url?: string
    text?: string
    openInNewTab?: boolean
  }
}

export type CardGridComponentType = {
  _type: 'cardGridComponent'
  name: string
  heading?: string
  description?: string
  cards: (SimpleCard | Card)[]
  layout?: {
    columns?: 2 | 3 | 4
    gap?: 'small' | 'medium' | 'large'
    cardStyle?: 'default' | 'bordered' | 'shadow' | 'minimal'
  }
}
