import path , { dirname } from "path"
import { fileURLToPath} from 'url'
import { writeFileSync, appendFileSync, readFileSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// console.log(path.parse(__filename))
const lienFichier = path.join(__dirname,'links.txt')

writeFileSync(lienFichier, "blavla");
appendFileSync(lienFichier, "\nblovo")


const links = readFileSync(lienFichier).toString()
console.log(links)