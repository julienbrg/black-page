import { Web3Storage, Blob, File , getFilesFromPath } from "web3.storage";

function main() {

    function getAccessToken() {
        return process.env.WEB3STORAGE_TOKEN
      }
    
    function makeStorageClient() {
        return new Web3Storage({ token: getAccessToken() } as any)
    }

    async function getFiles (file1:any, file2:any) {
        const File = await getFilesFromPath(file1, file1)
        console.log(`read ${File.length} file(s) from ${file1} and ${file2}`)
        return File
    }
    
    async function storeFiles(files:any) {
        const client = makeStorageClient()
        const add = await client.put(files)
        return add;
    }



    
    console.log("storage done. ✅")
}