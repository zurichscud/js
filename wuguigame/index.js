const elements = document.getElementsByClassName("move");
for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click",()=>{
    let value = elements[i].value;
    let wugui = document.getElementById("wugui");
    if (value==="向上走"){
      let top = wugui.style.top;
      let s = +top.substring(0,top.indexOf("p"));
      s-=10
      wugui.style.top=s+'px'
    }
    if (value==="向下走"){
      let top = wugui.style.top;
      let s = +top.substring(0,top.indexOf("p"));
      s+=10
      wugui.style.top=s+'px'
    }
    if (value==="向左走"){
      let left = wugui.style.left;
      let s = +left.substring(0,left.indexOf("p"));
      s-=10
      wugui.style.left=s+'px'
    }
    if (value==="向右走"){
      let left = wugui.style.left;
      let s = +left.substring(0,left.indexOf("p"));
      s+=10
      wugui.style.left=s+'px'
    }

  })
}
document.getElementById("btn").addEventListener("click",()=>{
  document.getElementById('wugui').style.top='120px'
  document.getElementById('wugui').style.left='100px'
})
