// Bad
function createFile(name, temp){
    if (temp){
        fs.create(`./temp/${name}`);
    } else {
        fs.create(name);
    }
}