function showpic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
}

function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    // alert(body_element.childNodes.length);
    // alert(body_element.nodeType);
    var description = document.getElementById("description");
    alert(description.firstChild.nodeValue);
}

window.onload = countBodyChildren;

// 读取第一个节点的方法
// firstChild
// 读取最后一个节点的方法
// lastChild
// 获取节点的内容
// nodeValue