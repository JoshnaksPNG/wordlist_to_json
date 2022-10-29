// Modules
const fs = require("fs");
const prompt = require("prompt-sync")({ sigint: true});

// Declarations
let input_path = "";
let is_valid_path = false;
let input_buffer;
let input_text = "";
let input_list = [];
let list_obj = { list:[] };

// Get path to text file
while(!is_valid_path)
{
    input_path = prompt("Path to the input text file: ");

    if(input_path.endsWith(".txt"))
    {
        is_valid_path = true;
    }
    else
    {
        console.log("Invalid Path, please enter a .txt file\n");
    }
}

// Get text buffer from file
input_buffer = fs.readFileSync(input_path);

// Get text from buffer
input_text = input_buffer.toString();

// Split Text into list
input_list = input_text.split("\r\n");

// Add list to object
list_obj.list = input_list;

// Write file
fs.writeFileSync("output/output.json", JSON.stringify(list_obj, null, 4));