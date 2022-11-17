
var fs=require("fs")
const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent, (err) => {
		if (err) {
			console.log(err);
		}
		console.log("File Created");
	});
}

const myFileReader = async (fileName) => {
	
await new Promise((resolve) => {
    fs.readFile(fileName, "utf8", function (err, data) {
		console.log(data);
    });
  });
  return console.log(data);
};

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName, fileContent, (err) => {
		if (err) {
			console.log(err);
		}
		console.log("File Appended");
	});
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName, (err) => {
		if (err) {
			console.log(err);
		}
		console.log("File Deleted");
	});
}
const fileName = "File.txt"
const fileContent = "hello"
const modifiedContent = "world"

myFileWriter(fileName, fileContent);
myFileReader(fileName);
myFileUpdater(fileName, modifiedContent);
myFileDeleter(fileName);


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
