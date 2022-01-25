function update(selected){
document.getElementById("calculator").value=selected
}
function append(selected){
document.getElementById("calculator").value+=selected
}
function calc(){
const process=document.getElementById("calculator").value
const total=new Function( `return `+process)
update(total())
}