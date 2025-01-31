import cp from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import process from 'node:process'
import { getPath } from 'sys-shim-bin'

const binPath = getPath()
const binDir = path.parse(binPath).dir

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const execOpt = {
  cwd: binDir,
  stdio: `inherit`,
}

cp.exec(`"${binPath}" a b c d=1 /e 3`, {...execOpt}, (err) => {
  process.exit(err && err.code)
})
