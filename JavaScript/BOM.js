
// BOM 指得是瀏覽器物件模型，就是對瀏覽器本身做操作

// window 物件的屬性

window.closed	// 檢查瀏覽器視窗是否已關閉，傳回boolean
window.history.back() (forward())	// 可以讓網頁回到前一頁或是下一頁(如果沒有歷史紀錄的話則沒有變更頁面)
window.innerWidth	// 偵測目前頁面可用之寬度
window.innerHeight	// 偵測目前頁面可用之高度
window.outerWidth   // 總視窗寬度
window.outerHeight  // 總視窗寬度
window.prompt("String", "");        /* 這個函數可以輸入2個參數，第一個參數顯示在對話方塊的訊息
                                       第二個參數是輸入欄位預設的輸入值，輸入的資料是字串資料  */
defaultStatus = ""                  /* 預設狀態列資訊 */
status = ""                         /* 狀態列資訊 */
document                            /* document物件 */
length                              /* 視窗的框架數目 */
location                            /* location物件 */
name                                /* 視窗名稱 */
navigator                           /* navigator物件 */
opener                              /* 這個視窗的開啟者 */
pageXOffset                         /* 文件視窗距離顯示區左上角的x位置 */
pageYOffset                         /* 文件目前視窗距離顯示區左上角的y位置 */
parent                              /* 指向父視窗 */
self                                /* 指向window物件本身 */
top                                 /* 指向最上層視窗 */
screen                              /* screen物件 */
screenX                             /* 視窗左上角距離螢幕左上角的x軸距離 */
screenY                             /* 視窗左上角距離螢幕左上角的y軸距離 */

// window 方法

alert(str) // 彈出視窗來顯示內容
close()	   // 關閉瀏覽器視窗
var ans = confirm(str);		// 和alert類似，不過這個可以選擇確定或取消，會傳回boolean可來做判斷
open(URL);		// 開啟一個新的視窗 (如果為空會開啟一個空白視窗)
idTime = setTimeout(confirm, 1000);           /* 計時器設定，setTimeout(function, milliseconds);
                                                   idTime:是此計時器的傳回參數，可由此關閉此計時器
                                                   function:計時到達時，所執行的函數
                                                   milliseconds:千分之一秒 */
clearTimeout(idTime)                          /* 關閉idTime計時器 */
idTime = setInterval(confirm, 1000);          /* 每隔設定毫秒數執行一次函數，setInterval(function, milliseconds);
                                                 function:每隔特定時間的週期，會執行此函數
                                                 milliseconds:單位是千分之一秒
                                                 idTime:執行setInterval的傳回值，可用此關閉此計時 */
clearInterval(idTime);                        /* 此函數可以關閉idTime計時器 */
winID = open();                                        /* 可以開新視窗，使用語法window.open(URL, name, specs, replace);
                                                 URL:這是選項，可以設定與開啟網頁文件的URL，如果不指定，則開啟的視窗是空白頁(blank)
                                                 name:可設定target屬性
                                                    _self:在目前的瀏覽頁面下顯示，這是系統預設
                                                    _blank:在現成的瀏覽器下新增一個瀏覽頁面
                                                    _parent:如果目前的頁面有父層級，在父層級頁面顯示
                                                    _top:在目前瀏覽器的最頂端顯示
                                                    name:視窗的名稱，可以新增一個瀏覽器視窗
                                                 specs(所開啟的視窗特色):
                                                    channelmode:值可以是yes| no | 1 | 0，是否用劇院模式開啟，預設是否
                                                    directory:值可以是yes| no | 1 | 0，是否增加目錄按鈕，預設是yes
                                                    fullscreen:值可以是yes| no | 1 | 0，是否已全螢幕開啟，預設是否
                                                    height:視窗高度，最小值是100px，單位是px
                                                    left:視窗的x軸座標，必須是正值，單位是px
                                                    location:值可以是yes| no | 1 | 0，是否顯示網址欄，預設是yes
                                                    menubar:值可以是yes| no | 1 | 0，是否顯示功能表
                                                    resizable:值可以是yes| no | 1 | 0，是否可更改視窗大小
                                                    scrollbars:值可以是yes| no | 1 | 0，是否顯示卷軸
                                                    status:值可以是yes| no | 1 | 0，是否顯示狀態列
                                                    titlebar:值可以是yes| no | 1 | 0，是否顯示標題欄
                                                    toolbar:值可以是yes| no | 1 | 0，是否顯示工具欄
                                                    top:視窗的y軸座標，必須是正值，單位是px
                                                    width:視窗寬度，最小值是100px，單位是px
                                                replace:這是布林值，true表示替換瀏覽歷史(history)的條目(entry)。false表示在瀏覽器中建新的條目(entry)
                                                winID:這是開新視窗後的傳回值，讀者可以自行設定這個傳回值的名稱，未來可以使用這個傳回值操作此視窗 */
winID.close();                                  /* 關閉視窗 */      
scrollBy();                                     /* 設定捲動卷軸的數量，單位是pixels，window.scrollBy(xnum, ynum)
                                                   xnum:x軸的捲動量，正值是往右捲動，負值是往左捲動
                                                   ynum:y軸的捲動量，正值是往下捲動，負值是往上捲動 */
scrollTo();                                     /* 設定捲動卷軸的位置，window.scrollTo(xpos, ypos)
                                                   xpos:捲到x軸位置
                                                   ypos:捲到y軸位置 */
blur();                                         /* 移除該視窗的焦點(focus) */
createPopup();                                  /* 建立一個彈出視窗 */
focus();                                        /* 為該視窗取得焦點(focus) */
moveBy(x, y);                                   /* 以(x, y)相對位置移動視窗 */
moveTo(x, y);                                   /* 視窗一致相對螢幕左上角絕對位置(x, y) */
resizeBy(x, y);                                 /* 調整視窗大小，變化量水平軸是x，垂直軸是y，單位是px */
resizeTo(x, y);                                 /* 將視窗調整至水平軸是，垂直軸是y，單位是px */                    


/* screen物件，screen物件主要是包含使用者的螢幕資訊 */

screen.height                                   /* 螢幕高度，單位是pixel */
screen.width                                    /* 螢幕寬度，單位是pixel */
screen.availHeight                              /* 螢幕可用高度，不包含螢幕下方的工作列，單位是pixel */
screen.availWidth                               /* 螢幕可用寬度，不包含螢幕左方的工作列，單位是pixel */
screen.colorDepth                               /* 色彩深度，列出每個像素用多少位元儲存，單位是pixel */
screen.pixelDepth                               /* 意義與screen.colorDepth相同 */

/* navigator物件，主要是可以獲得使用者的瀏覽器資訊，這是只能讀取的資訊，下列是此物件的屬性內容 */

navigator.appCodeName                           /* 瀏覽器的程式碼名稱，例如:Mozilla */
navigator.appMinorVersion                       /* 瀏覽器次版本的板次(好像不行用了?) */
navigator.appName                               /* 瀏覽器名稱 */
navigator.appVersion                            /* 瀏覽器的主板次 */
navigator.browerLanguage                        /* 瀏覽器所用語言(好像不行用了?) */
navigator.cookieEnabled                         /* 瀏覽器是否使用cookie功能，true表示是，false表是否 */
navigator.cpuClass                              /* 傳回CPU類型(好像不行用了?) */
navigator.onLine                                /* 傳回目前瀏覽器的作業系統平台 */
navigator.platform                              /* 傳回瀏覽器的作業系統平台 */
navigator.systemLanguage                        /* 傳回作業系統目前的語系(好像不行用了?) */
navigator.userAgent                             /* 傳回HTTP Request中user-agent的值 */
navigator.userLanguage                          /* 傳回瀏覽器作業系統所用語言(好像不行用了?) */

/* history物件，這個物件包含瀏覽器的瀏覽紀錄，這個物件只有一個屬性 */

history.length                                  /* 紀錄瀏覽紀錄的筆數 */
history.back()                                  /* 回到上一頁 */
history.forward()                               /* 跳到下一頁 */
history.go(n)                                   /* n是正值則跳到下n頁，n是負值則跳到上n頁 */

/* location物件，主要是列出目前瀏覽網頁的URL資訊，必須放在internet上才會有比較多的資訊，不然都是無值(看不到) */

location.hash                                   /* 網址中"#"符號後面的部分 */
location.host                                   /* 網址中的主機名稱與通訊埠 */
location.hostname                               /* 網址的主機名稱 */
location.href                                   /* 完整的URL字串 */
location.pathname                               /* 網址的檔案名稱與路徑 */
location.port                                   /* URL網址的通訊埠，預設值80或443不會有傳回值 */
location.search                                 /* 傳回URL網址?符號後面的資訊 */
location.assign()                               /* 載入參數URL的網頁 */
location.reload()                               /* 重新載入目前開啟的網頁 */
location.replace(URL)                           /* 載入URL的網頁，同時用這個網頁取代目前網頁在history的紀錄，相當於屬性href設為目前參數URL */