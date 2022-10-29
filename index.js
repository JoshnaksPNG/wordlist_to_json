const fs = require("fs");
//const readline = require("readline");
const prompt = require("prompt-sync")({ sigint: true});

/*const rl = readline.createInterface(
{
    input: process.stdin,
    output: process.stdout
});*/

let input_path = "";
let is_valid_path = false;
let input_buffer;
let input_text = "";
let input_list = [];
let list_obj = { list:[] };

while(!is_valid_path)
{
    input_path = prompt("Path to the input text file:");

    if(input_path.endsWith(".txt"))
    {
        is_valid_path = true;
    }
    else
    {
        console.log("Invalid Path, please enter a .txt file\n");
    }
}

input_buffer = fs.readFileSync(input_path);

input_text = input_buffer.toString();

input_list = input_text.split("\r\n");

list_obj.list = input_list;

fs.writeFileSync("output.json", JSON.stringify(list_obj, null, 4));