import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import { SiteContent } from '@/types/content'

let contentCache: SiteContent | null = null

export function getContent(): SiteContent {
  if (contentCache) {
    return contentCache
  }

  try {
    const contentPath = path.join(process.cwd(), 'content.yaml')
    const fileContents = fs.readFileSync(contentPath, 'utf8')
    contentCache = yaml.load(fileContents) as SiteContent
    return contentCache
  } catch (error) {
    console.error('Error loading content.yaml:', error)
    throw new Error('Failed to load site content')
  }
}