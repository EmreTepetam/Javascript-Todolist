var stor = []
const listem = document.querySelector('#list')
listem.addEventListener("click", silvekontrol)
var myliste = document.getElementsByTagName("LI")
var i;
for(i=0;i < myliste.length;i++){
    stor.push(myliste[i].innerHTML)
    console.log(stor)
    localStorage.setItem("listem",JSON.stringify(stor))
    var span = document.createElement("SPAN")
    var carp = document.createTextNode("\u00D7")
    span.className = "close"
    span.id = "sil"
    span.appendChild(carp)
    myliste[i].appendChild(span);
    myliste[i].classList.add("cekk")

}
function silvekontrol(e){
    const item = e.target;
    if(item.classList[0]==="close"){
        document.querySelector("#olm").innerHTML = "Madde silindi."
        $(".success").toast("show");
        const sil = item.parentElement;
        stor.pop();
        sil.remove();
        localStorage.clear();
    }
    if(item.classList[0]==="cekk"){
        document.querySelector("#olm").innerHTML = "Checked"
        $(".success").toast("show");
        item.classList.toggle('checked');
    }
    
}
function newElement() {
    var liste = document.createElement("li")
    var girdibilgisi = document.getElementById("task").value.trim()
    var yazi = document.createTextNode(girdibilgisi.trim())
    if (girdibilgisi == ""){
    document.querySelector("#olmz").innerHTML = "Listeye boş ekleme yapamazsınız!"
    $(".error").toast("show")
    document.getElementById("task").value = "";
    }
    else if(girdibilgisi ==" "){
    document.querySelector("#olmz").innerHTML = "Listeye boş ekleme yapamazsınız!"
    $(".error").toast("show");
    document.getElementById("task").value = "";
    }
    else if (Boolean(girdibilgisi) === undefined){
    document.querySelector("#olmz").innerHTML = "Geçersiz karakter girdiniz"
    $(".error").toast("show");    
    document.getElementById("task").value = "";
    }
    else {
        liste.appendChild(yazi)
        liste.classList.add("cekk")
        document.getElementById("list").appendChild(liste)
        document.getElementById("task").value = "";
        var span = document.createElement("SPAN")
        var carp = document.createTextNode("\u00D7")
        span.className = "close"
        span.id = "sil"
        span.appendChild(carp)
        liste.appendChild(span);
        document.querySelector("#olm").innerHTML = "Listeye eklendi."
        $(".success").toast("show");
        stor.push(girdibilgisi)
        localStorage.setItem("listem",JSON.stringify(stor))
    }
}