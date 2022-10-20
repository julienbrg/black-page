import { Web3Storage, getFilesFromPath } from "web3.storage"
import * as dotenv from "dotenv";
dotenv.config();

function getAccessToken() {
    return process.env.WEB3STORAGE_TOKEN
}

function makeStorageClient() {
    return new Web3Storage({ token: getAccessToken() })
}

const dir = "./page/"

async function getFiles (file) {
    const File = await getFilesFromPath(file)
    return File
}

async function storeFiles(files) {
    const client = makeStorageClient()
    const add = await client.put(files,{ wrapWithDirectory:false })
    return add
}

const cid = await storeFiles(await getFiles(dir))

console.log("✅ cid:", cid)
console.log("✅ url:", "https://" + cid + ".ipfs.w3s.link/my-post.html")