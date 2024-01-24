import fs from 'fs'
import matter from 'gray-matter'

import { GrayMatterFile } from './../types/content'

const updateFrontmatter = async () => {
  const [, , ...mdFilePaths] = process.argv
  mdFilePaths.forEach((filePath) => {
    if (!filePath.endsWith('.mdx')) {
      return
    }
    const file = matter.read(filePath) as unknown as GrayMatterFile
    const { data: currentFrontmatter } = file

    if (currentFrontmatter.isPublished === true) {
      const updatedFrontmatter = {
        ...currentFrontmatter,
        updatedOn: new Date().toISOString(),
      }
      file.data = updatedFrontmatter
      const updatedFileContent = matter.stringify(file.content, updatedFrontmatter)
      fs.writeFileSync(filePath, updatedFileContent)
    }
  })
}

updateFrontmatter()
