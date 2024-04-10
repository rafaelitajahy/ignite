import { parse } from 'csv-parse'
import fs from 'node:fs'

const csvPath = new URL('./tasks.csv', import.meta.url)
const streamTasks = fs.createReadStream(csvPath)
const csvParse = parse({
  delimiter: ',',
  skipEmptyLines: true,
  fromLine: 2
})

async function run() {
  const tasksParse = streamTasks.pipe(csvParse)
  for await (const task of tasksParse) {
    const [title, description] = task
    await fetch('http://localhost:3333/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringfy({
        title,
        description,
      })
    })
  }
}

run()

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}