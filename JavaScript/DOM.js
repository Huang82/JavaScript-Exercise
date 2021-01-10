
DOM 指得是文件物件模型，文件代表瀏覽器的網頁，是負責與網頁內容進行互動

var t = document.getElementById(str) 			// 取得id屬性的元素，回傳單一筆
var t = document.getElementsByClassName(str) 	// 取得class的元素，回傳陣列型態
var temp = t.cloneNode(true);						// 複製節點給另外一個var
t.innerHTML 							// 取的特定節點的完整HTML內容，(可以添加或取代該節點的HTML程式碼)
t.innerText								// 取的特定節點的內容(不包含html標籤顯示)
document.body							// 取得html的body的子節點
document.body.appendChild()				// 新增子節點，加入在html裡

// 對CSS的控制
t.style.background = "blue"				// 可對指令元素設定style(這邊只是一個例子)
t.className = ""						// html裡設計好的CSS(Class)樣式名稱引入就可以為該元素做CSS設定
t.className.add("")						// 新增樣式
t.className.toggle("")					// 切換樣式(再次呼叫會取消樣式)			


var a = document.createElement(str)					// 建立新的元素節點
var text = document.createTextNode(str)				// 建立節點內容(賦予給上面創立的var)
a.appendChild(text)									// 在已存在的節點再加入新的子節點