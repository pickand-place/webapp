import path from 'path'
import { pascalCase } from 'pascal-case'
import { readdir, readFile, writeFile } from 'fs/promises'

const BASE_ICON_PATH = './src/components/icons'

const componentTemplate = (name, svg) =>
  `
<template>
  ${svg}
</template>
<script lang="ts">
  export default {
    name: '${name}',
  }
</script>
`.trim()

const handleComponentName = (name) =>
  name.replace('.svg', '').replace(/\-(\d+)/, '$1')

async function generateIcons() {
  const files = await readdir(`${BASE_ICON_PATH}/svgs`)

  const icons = files.map((name) => ({
    name,
    pascalCasedComponentName: pascalCase(`icon-${handleComponentName(name)}`),
  }))

  console.table(icons)

  for (const icon of icons) {
    const fileContent = await (
      await readFile(`${BASE_ICON_PATH}/svgs/${icon.name}`)
    ).toString()

    const component = componentTemplate(
      icon.pascalCasedComponentName,
      fileContent
    )
    const filepath = `${BASE_ICON_PATH}/_generated/${icon.pascalCasedComponentName}.vue`

    await writeFile(filepath, component, 'utf8')
  }

  const exportFile = icons
    .map(
      (icon) =>
        `export { default as ${icon.pascalCasedComponentName} } from './_generated/${icon.pascalCasedComponentName}.vue'`
    )
    .join('\n\n')

  await writeFile(`${BASE_ICON_PATH}/icons.ts`, exportFile, 'utf8')
}

generateIcons()
