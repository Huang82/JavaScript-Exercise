
// DOM 指得是文件物件模型，文件代表瀏覽器的網頁，是負責與網頁內容進行互動

var t = document.getElementById(str); 			        // 取得指定id屬性的元素，回傳單一筆
var t = document.getElementsByClassName(str); 	        // 取得指定class所有的元素，回傳陣列型態
var t = document.getElementsByTagName(tag);             /* 取得html的所有指定標籤(tag)名稱，回傳是串列元素內容 */
var t = document.querySelectorAll(tag.class);           /* 取得class的tag所有內容，回傳世節點串列元素 */
var t = document.querySelector(tag.class);              /* 取得class的tag內容，如果有重複就是回傳第一筆資料 */
var temp = t.cloneNode(true);						    // 複製節點給另外一個var
t.length;                                               /* 傳回串列的長度 */
t.textContent;                                          /* 內容，不含任何標籤碼 */
t.innerHTML;							                /* 取的特定節點的完整HTML內容(不包含本身標籤碼)，(可以添加或取代該節點的HTML程式碼)
                                                           如果要進瀏覽器就更改必須要在更改的下方新增<script>才行不然後不行使用*/
t.outerHTML;                                            /* 元素內容，含子標籤碼，也含本身標籤碼 */
t.innerText								                // 取的特定節點的內容(不包含html標籤顯示)
document.body							                // 取得html的body的子節點
document.body.appendChild();				            // 新增子節點，加入在html裡
document.write();                                       // 可以寫入網頁，這個方法一般只做為測試程式輸出用，因為當網頁下載完成後，如果使用這種方法，將造成先前的網頁內容被刪除

/* nodes(樹節點) */
t.parentNode;                                           /* 父節點 */
t.firstChild;                                           /* 第一個子節點 */
t.lastChild;                                            /* 最後一個子節點 */
t.previousSibling;                                      /* 前一個兄弟節點 */
t.nextSibling;                                          /* 下一個兄弟節點 */
t.nodeName;                                             /* 節點標籤名稱 */
t.nodeValue;                                            /* 節點內容 */
t.childNodes[0];                                        /* 集合物件，任一個節點皆可進入它的子節點，存取節點已及結點內容。節點串列(取到的節點必須是有內容不然會錯誤) */
t.previousElementSibling.innerHTML;                     /* 前一個節點內容 */
t.nextElementSibling.innerHTML;                         /* 下一個節點內容 */
document.body;                                          /* <body>內所有文件內容 */
document.documentElement;                               /* <html>內所有文件內容 */

var newNode = document.createElement("元素(Tag標籤，不用<>)");   /* 創立新的節點，newNode是新建節點名稱 */
var nodeText = document.createTextNode("內容");          /* 創立新的文字節點，nodeText是文字節點 */
newNode.appendChild(nodeText);                           /* 將newNode和nodeText串起來 */
var existParentNode = document.getElementById("demo");   /* 尋找要插入的標籤 */
existParentNode.appendChild(newNode);                    /* 會插到最後面成為該元素的lastChild */

node.insertBefore(newNode, child);                       /* 將節點插入特定位置，node是父節點，newNode是新建節點，child是目標節點，newNode會插入在node父節點下，但是在child節點前 */
parentNode.removeChild(childNode);                       /* 刪除節點，必須指定父節點的一個子節點 */
parentNode.replaceChild(newNode, childNode);             /* 更換節點，newNode要替換的新節點，childNode被替換掉的子節點 */

/* HTML的集合物件，HTML DOM有提供一些特別的屬性可以存取集合(collection)物件 */
var t = document.images;                                /* 適合配合<img>標籤使用 */
var t = document.forms;                                 /* 適合配合<form>標籤使用 */
var t = document.links;                                 /* 適合配合有href屬性的<a>標籤使用 */
var t = document.images.length;                         /* 上述物件都可以使用這個屬性，物件數量 */

var tt = document.forms[0];
tt.elements[0].value;                                   /* 取得指定form裡面的元素內容 */

[index]                                                 /* 返回物件的特定索引值 */
item(index);                                            /* 傳回特定索引值的物件 */
namedItem(id);                                          /* 傳回特定id的物件 */

/* Image */
t.offsetHeight;                                         /* 元素物件的高度 */
t.offsetWidth;                                          /* 元素物件的寬度 */
t.offsetLeft;                                           /* 元素物件距離左邊界的距離 */
t.offsetTop;                                            /* 元素物件距離上邊界的距離 */
t.width;                                                /* 可以設定圖片width */
t.height                                                /* 可以設定height */

/* 對style做更改，比較常用的 */
t.style.backgroundColor = "yellow";                     /* 背景色 */
t.style.backgroundImage = "./";                         /* 圖案 */
t.style.color = "";                                     /* 前景色 */
t.style.visibility = true;                              /* 是否顯示 */
t.style.fontFamily = "";                                /* 字型 */
t.style.fontSize = "18px";                              /* 字型大小 */
t.style.textAlign = "center";                           /* 對齊方式 */                      

// 對CSS的控制
t.style.background = "blue";				            // 可對指令元素設定style(這邊只是一個例子)
t.className = "";						                // html裡設計好的CSS(Class)樣式名稱引入就可以為該元素做CSS設定
t.className.add("");						            // 新增樣式
t.className.toggle("");					                // 切換樣式(再次呼叫會取消樣式)			


var a = document.createElement(str);					// 建立新的元素節點
var text = document.createTextNode(str);				// 建立節點內容(賦予給上面創立的var)
a.appendChild(text);									// 在已存在的節點再加入新的子節點