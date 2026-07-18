import fs from "fs/promises";

async function createFile() {
    try {
        await fs.writeFile('text.txt', 'Hello from generated txt!', 'utf-8')
        console.log('Файл создан!')
    }
    catch {
        console.error('Ошибка создания файла:', error.message)
    }
}

async function readFile() {
    try {
        const file = await fs.readFile('text.txt', 'utf-8')
    
        console.log("___СОДЕРЖИМОЕ ФАЙЛА___")
        console.log(file)
    }
    catch (error) {
        console.error(`Ошибка чтения файла: ${error.message}`)
    }
}
createFile()
readFile()