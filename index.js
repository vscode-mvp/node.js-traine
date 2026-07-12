import fs from "fs/promises";

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
readFile()