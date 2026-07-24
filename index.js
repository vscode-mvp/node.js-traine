import fs from 'fs/promises'

const fileName = 'file.txt'

async function createFile(filename) {
    await fs.writeFile(filename, "hello world")
}

async function readFile(filename) {
    const data = await fs.readFile(fileName, 'utf8')
    const stat = await fs.stat(fileName)

    console.log(`Содержимое файла ${fileName}: "${data}", Размер файла (байты): ${stat.size}`)
}

async function main() {
    await createFile(fileName)
    await readFile(fileName)
}
main()