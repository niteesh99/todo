let list = [];
let list1 = [];
document.getElementById("name").addEventListener('keyup',function(e){
if (e.keyCode === 13) {
  add();
}
});

function onLoad()
{
    let ans = ``;
    let ans1 = ``;
    list.map((value,i) => {
        ans += `<input type="checkbox" id="${i}" onclick="transfer(${i})" /><label id="p${i}">${value}</label><label class="btn"onclick="edit('p${i}',${i})">Edit</label> <label class="btn" onclick="deltodo(${i})">Delete</label>  <br/>`
    })
   document.getElementById("dis").innerHTML = ans
    list1.map((value,i) => {
        ans1 += `<input type="checkbox" onclick="transfer1(${i})" id="${i}" checked /><label class="underline" id="g${i}">${value}</label><label class="btn" onclick="edit1('p${i}',${i})">Edit</label> <label class="btn" onclick="delconfirm(${i})">Delete</label>  <br/>`
    })
    document.getElementById("dis2").innerHTML = ans1
    console.log(ans1)
}
function add()
{
    list.push(document.getElementById("name").value);
    var d=document.getElementById("name").value;
    document.getElementById("name").value = ""
    var ans = loadData();
    document.getElementById("dis").innerHTML = ans;
    console.log(ans)
}
function loadData(){
let ans = ``
list.map((value,i) => {
    ans += `<input type="checkbox" id="${i}"onclick="transfer(${i})"/><label id="p${i}">${value}</label><label class="btn" onclick="edit('p${i}',${i})">Edit</label> <label class="btn"onclick="deltodo(${i})">Delete</label><br/>`
})
return ans;
}
function transfer(i){
   var del = list.splice(i,1)
   list1.push(del[0]);
   onLoad();
   console.log(list1)
}
function transfer1(i){
   var del = list1.splice(i,1)
   list.push(del[0]);
   onLoad();
}
function deltodo(i)
{
   list.splice(i,1);
   onLoad();
}
function delconfirm(i)
{
   list1.splice(i,1);
   onLoad();
}
function edit(i)
{ 
    var x = list.splice(i,1);
    onLoad();
    document.getElementById("name").value=x;

}
function edit1(i)
{ 
    var x1 = list1.splice(i,1);
    onLoad();
    document.getElementById("name").value=x1;

}