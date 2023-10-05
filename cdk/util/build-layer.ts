import { exec } from 'child_process'
import path from 'path'
import fs from 'fs'

/**
 * Build lambda layer code and return directory path
 *
 * @param layerName Name of layer (must match ts file name in src)
 * @returns Directory path to lambda layer
 */
export const buildLayer = (layerName: string) => {
  const pathToLayer = path.join(__dirname, `../../src/${layerName}.ts`)

  const outDir = path.join(
    __dirname,
    '../../',
    `dist/${layerName}/nodejs/node_modules`
  )

  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true })
  }

  const cmdToRun = `esbuild --bundle --platform=node --sourcemap ${pathToLayer} --outdir=${outDir}`

  exec(cmdToRun, (err) => {
    if (err) {
      console.log(err)
    }
  })

  return path.join(__dirname, '../../', `dist/${layerName}`)
}
