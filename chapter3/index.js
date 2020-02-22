//获取文档ID
//alert(typeof document.getElementById("purchases"));
//根据标签名称获取内容
//alert(document.getElementsByTagName("li").length);
//赋值输出
var items = document.getElementsByTagName("li");

for (var index = 0; index < items.length; index++) {
    alert(typeof items[index]);
}