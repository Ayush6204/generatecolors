let jai=["virat","rohit","subhman"];
for(yum of jai){
    console.log(yum)
}

let shah=[["virat","subhman","rohit"],["dravid","sachin","saurav"]];
for(a of shah){
    for(c of a){
console.log(c);
    }
}
let todo=[];
let req=prompt("enter the list");
while(true){
    if(req=="quit"){
        console.log("quitting");
        break;
    }
    if(req=="list"){
        for(task of todo){
        console.log(task);
    }
}
else if(req=="add"){
    let task=prompt("enter the task");
    todo.push(task);
    console.log("task added");
}
else if(req=="delete"){
    let idx=prompt("enter task index");
    todo.splice(idx,1);
    console.log("task deleted");
}
else{
    console.log("wrong request");
}
req=prompt("enter your request");
}
