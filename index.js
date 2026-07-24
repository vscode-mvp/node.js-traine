import fs from 'fs/promises'

const fileName = 'file.txt'

async function createFile(filename) {
    await fs.writeFile(filename, "hello world")
}

async function readFile() {
    const data = await fs.readFile('file.txt', 'utf8')
    const stat = await fs.stat('file.txt')

    console.log(`Содержимое файла ${fileName}: "${data}", Размер файла (байты): ${stat.size}`)
}

createFile(fileName)
readFile()