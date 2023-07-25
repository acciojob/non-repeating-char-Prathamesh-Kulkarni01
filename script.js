//your JS code here. If required.
var n = prompt("Enter a string");
let map={}
let flag=false;
n.split('').forEach(val=>{
if(map[val]){
	map[val]=map[val]+1;
}else{
	map[val]=1
}
})
// alert(map)
console.log(map)
n.split('').forEach(val=>{
	if(map[val]===1&&!flag){
	alert(val);flag=true 
}
						 })

