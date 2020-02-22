//获取文档ID
//alert(typeof document.getElementById("purchases"));
//根据标签名称获取内容
//alert(document.getElementsByTagName("li").length);
//赋值输出
var items = document.getElementsByTagName("li");

for (var index = 0; index < items.length; index++) {
    alert(typeof items[index]);
}

//获取文档中的所有节点  -- 支持通配符
alert(document.getElementsByTagName("*").length);
//获取ID purchases下的所有标签
var Shopping = document.getElementById("purchases");
var items = Shopping.getElementsByTagName("*");
alert(items.length);

//ClassName
document.getElementsByClassName("sale");
//实际类名并不重要，只要匹配就可以
alert(document.getElementsByClassName("important sale").length);


//getAttribute 用来获得属性值
//如果有值就弹出，没有值就不要弹出
var paras = document.getElementsByTagName("p");
for (var index = 0; index < paras.length; index++) {
    var title_text = paras[index].getAttribute("title");
    // if(title_text != null){
    //     alert(title_text);
    // }
    //与上面等价
    if (title_text) {
        alert(title_text);
    }
}

//setAttribute 用来设定属性值
var paras = document.getElementById("purchases");
alert(paras.getAttribute("title"));
paras.setAttribute("title", "a list of goods");
alert(paras.getAttribute("title"));
