
function add(){
    let username = document.getElementById('username').value;
    let usercity = document.getElementById('usercity').value;

    document.getElementById('user1').innerHTML  += username;
    document.getElementById('user2').innerHTML  += usercity;
}
function clear(){
    document.getElementById('user1').innerHTML  += "";
    document.getElementById('user2').innerHTML  += "";
}