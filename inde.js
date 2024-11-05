const c= [];
function gen(){
    const ch ="abcdefghjklmonpquwetcx1234567890";
    const codelength = 16 ;
    for (let i =0 ; i<1;i++){
        let code="";
        for (let j = 0 ;j <codelength; j++){
             const randomindex = Math.floor(Math.random()*ch.length);
             code += ch[randomindex];
        }
        c.push(code)
    }
    const coo = document.getElementById("coo");
    coo.innerHTML = ".";
    c.forEach((code,index)=>{
        const listItem = document.createElement('li')
        listItem.textContent =index + 1 +'.'+code;
        coo.appendChild(listItem);
    });
}
function ch(){
const inputValue = document.getElementById("inputField").value;
   const index = c.indexOf(inputValue);
    if ( index !==-1){
        c.splice(index ,1);
        document.getElementById("result").textContent="hi";
        alert("accses this page")
        window.location.href="v.html"
    }else{
        document.getElementById("result").textContent="wronge";
    }
}