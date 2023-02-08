
// $(document).ready(function(){
//     $("#btn").click(function(){
//         var x=$("#inp1").val();
//         var y=$("#inp2").val();

//         $("#m").html(x);
//         $("#n").html(y);
//     })
// })


// var arr=[] 
// var table=document.getElementById("#tab")
// function func(){
//     table.innerHTML=`<tr><th>Name</th><th>Mobile no.</th></td>`;
//     var obj={};
//     obj.name=$("#inp1").val();
//     obj.mobile=$("#inp2").val();
//     arr.push(obj);
//     arr.forEach(function(value){
//         document.createElement('tr')
//         true.innerHTML=`<td>${value.name}</td>
//                         <td>${value.mobile}</td>`
//     })
// }




// var p;
var arr = []
var count = 0;
function func() {
    count++;
    var obj = {};
    obj.name = $("#inp1").val();
    obj.mob = $("#inp2").val();
    obj.id = count;
    arr.push(obj);
    arr.forEach(function (value) {
        data = `<div style="border:2px solid black" class="col-sm-4 col-lg-4 card" id="d${count}"><p class="detail">Name :<span id="name_${count}">${value.name}</span></p>
                 <p class="detail">Mob no. : <span id="mob_${count}">${value.mob}</span></p>
                <div> <button id="btn1" class="btn btn-success" onclick="Edit(${count})">Edit</button><br>
                 <button onclick=Del(${count}) id="btn2" class="btn btn-danger" >Delete</button></div></div>`
    })
    $("#container").append(data);
    $("#inp1").val('');
    $("#inp2").val('');


}

// function Del(){
//     var r=arr.indexOf()

//     if(r>-1)
//     arr.splice(r,1)
// }
function Del(a) {
    $("#d" + a).remove();
    arr.forEach(function (value, index) {
        if (value.id == a) {
            arr.splice(index, 1)
        }
    })
}

$("#btn4").hide();

function Edit(i) {
    p = i;
    $("#btn4").show();
    $("#btn").hide();
    $("#inp1").val($("#name_" + i).text());
    $("#inp2").val($("#mob_" + i).text());
    $("#hdn").val(i);

}

function update() {
    
    var name1 = $("#inp1").val();
    var mob1 = $("#inp2").val();
    var id = $("#hdn").val();

    $("#name_" + id).html(name1);
    $("#mob_" + id).html(mob1);
    $("#btn4").hide();
    $("#btn").show();

    $("#inp1").val('');
    $("#inp2").val('');
    arr.forEach(function (value, index) {

        if (value.id == p) {
            arr[index].name = name1;
            arr[index].mob = mob1;
        }
    })

}

$("#btn3").click(function () {
    var arr1 = []
    arr.forEach(function (value, index) {
        var js = {};
        js.Name = value.name;
        js.Mobile = value.mob;
        arr1.push(js)
    })
    $("#js").text(JSON.stringify(arr1))
})

