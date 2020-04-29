export default class BlobObject
{
    constructor(name)
    {
        this._name = name;
    }
    
    get name()
    {
        return this._name;
    }
    
    set name(value)
    {
        if (value.length < 3) {
            console.error("This name is short");
            return;
        }
        this._name = value;
    }
    
    getBlob()
    {
        let buffer = new Uint8Array([72, 101, 108, 108, 111]); // Здесь забито слово Hello
        let blob = new Blob([buffer, " ", "world", " ", "from", " ", this._name], {type: "text/plain"});
        
        return blob;
    }
}