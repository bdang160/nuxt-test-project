import type { RssFeed, RssItem } from '~/utils/rssTypes'

export function parseRss(xmlString: string): RssFeed {
  const parser = new DOMParser()
  const doc = parser.parseFromString(xmlString, 'application/xml')
  const channel = doc.querySelector('channel')

  if (!channel) throw new Error('Invalid RSS feed')

  const text = (selector: string, scope: ParentNode = channel) =>
    scope.querySelector(selector)?.textContent?.trim() ?? ''

  const feed: RssFeed = {
    title: text('title'),
    link: text('link'),
    description: text('description'),
    language: text('language'),
    pubDate: text('pubDate'),
    lastBuildDate: text('lastBuildDate'),
    items: []
  }

  const itemNodes = channel.querySelectorAll('item')

  feed.items = Array.from(itemNodes).map(itemEl => ({
    title: itemEl.querySelector('title')?.textContent?.trim() ?? '',
    link: itemEl.querySelector('link')?.textContent?.trim() ?? '',
    description: itemEl.querySelector('description')?.textContent?.trim() ?? '',
    pubDate: itemEl.querySelector('pubDate')?.textContent?.trim() ?? '',
    creator: itemEl.querySelector('dc\\:creator')?.textContent?.trim() ?? null,
    guid: itemEl.querySelector('guid')?.textContent?.trim() ?? null,
    image:
      itemEl.querySelector('enclosure')?.getAttribute('url') ?? null,
    categories: Array.from(itemEl.querySelectorAll('category')).map(cat =>
      cat.textContent?.trim() ?? ''
    )
  }))

  return feed
}