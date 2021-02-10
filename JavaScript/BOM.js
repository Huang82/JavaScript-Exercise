
// BOM 指得是瀏覽器物件模型，就是對瀏覽器本身做操作

// window 屬性

window.closed	// 檢查瀏覽器視窗是否已關閉，傳回boolean
window.history.back() (forward())	// 可以讓網頁回到前一頁或是下一頁(如果沒有歷史紀錄的話則沒有變更頁面)
window.innerWidth	// 偵測目前頁面可用之寬度
window.innerHeight	// 偵測目前頁面可用之高度
window.prompt("String", "");        /* 這個函數可以輸入2個參數，第一個參數顯示在對話方塊的訊息
                                       第二個參數是輸入欄位預設的輸入值，輸入的資料是字串資料  */

// window 方法

alert(str) // 彈出視窗來顯示內容
close()	   // 關閉瀏覽器視窗
var ans = confirm(str);		// 和alert類似，不過這個可以選擇確定或取消，會傳回boolean可來做判斷
open(URL);		// 開啟一個新的視窗 (如果為空會開啟一個空白視窗)
