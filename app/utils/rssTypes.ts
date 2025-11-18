export interface RssItem {
  title: string
  link: string
  description: string
  pubDate: string
  creator: string | null
  guid: string | null
  image: string | null
  categories: string[]
}

export interface RssFeed {
  title: string
  link: string
  description: string
  language: string
  pubDate: string
  lastBuildDate: string
  items: RssItem[]
}
