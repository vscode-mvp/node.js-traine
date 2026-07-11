import { generatedId } from "./modules.js";
const ids = { id: null };

function generateIdObj() {
    for (let i = 1; i <= 10; i++) {
        let genId = generatedId()
        ids.id = genId

        console.log(`id ${i}: ${genId}`)
    }
}
generateIdObj()