
1. 新增行程 與 日顯示 區塊的函式作註解(這兩塊比較複雜)
   要找函式會比較好找，細節的部分，還是得自己看一下

2. 變數會比較複雜且多，畢竟是邊做邊塞，並沒有時間做完整的規劃

3. 共用的變數與函式，會在 main.js 裡面

4. 搜尋分布在 calendar、folder、main.js

5. 及時動態消息，在 global.js 裡面，把原本 infor 動態產前端的函式拉出來
   ，並寫入 setInterval 去執行 (act_msg();)，即時算出有幾筆動態消息

6. 詳細行程內容，這邊跳頁有狀況的話，請到 page.html 的 pageChange_meeting_con 函式找;

7. calendar、folder、infor、chatroom、add 都會使用到 page.html，這邊的判斷依據是靠著
   pageHistory 這個陣列來判斷轉跳

8. 側邊選單有在改寫過


/*-------------------------- add.html 新增行程區塊 ----------------------------*\
\*-----------------------------------------------------------------------------*/
※ 前端顯示函式

	- 行程 => trip_List     , json => cusObj 
	- 提醒 => remind_List   , json => addCon_obj.remindText
	- 重複 => repeat_List   , json => addCon_obj.repeatText
	- 地點 => location_List , json => addCon_obj.locationText

		** 以上函式還有包含點選效果fn在裡面 **

	- 側邊選單
		1. 行程 => trip_Slide   , json => typeObj
		2. 提醒 => remind_Slide , json => addCon_obj.remindContent
		3. 重複 => repeat_Slide , json => addCon_obj.repeatContent

		** 以上點選效果fn 在 chk_input 函式裡 **


※ 動態載入側邊選單選取項目 & 取值
	
	- 行程 =>trip_block
	- 重複 =>repeat_block
	- 提醒 =>remind_block , re_jugTime(自訂)

	- 判斷側邊選單內容點選是否，並動態產入 => addSlide_jud
	   變數 => no_chk, on_change

	- 確認與取消 => btn_confirm_chk


※ 起、迄時間

	/*- 注意 -*/
	datetime-local所給的時間格式為 2018-01-01T01:00，所以前端這邊會拆掉重組 2018-01-01 01:00

	- 開始時間 => star_time
	- 結束時間 => end_time

	- 變數 =>
		1.抓取台灣時間套件moment   => var s_time = moment.tz(s_dateType, "Asia/Taipei").format();
		2.點選全天預訂按鈕 input值 => time_val 
		3.給後端時間的值           => var s_timestamp, $('input[name="start_day"]').val(s_timestamp); 
		4.判斷選取時間是禮拜幾     => s_zh_week_text = addCon_obj.zhWeek[s_getweek*1];

	- 判斷開始與結束時間大小 => jug_meeting

	- 點選全天置頂時，去變動下方選擇時間欄位 => allDay_chk, chg_type 


※  點選確定新增時，前端防呆判斷
	
	- 函式 => allChk_jug
	  利用every 去判斷所有push的值都要等於true 才可以過

	- 警告彈窗陣列 => alertFn


※  行程都點選後取值 => getValue

※  確定新增 & 取消的按鈕 => addClose
	
※  在350行的 $(function (){...} , 是後端寫的
	
※	Safari 不接受 2018-01-01 這樣的格式，所以會改成 2018/01/01

	- s_getweek = new Date(start_day.replace(/-/g, '/')).getDay(),


/*-------------------------- add.html 會議室預約區塊 ----------------------------*/

※	變數
	- 判斷進頁面的新增狀態 or 修改狀態 => type == 'edit_data' 

※	上方下拉月曆(產一整年的月份)
	
	- 產月份函式           => now_Month
	- 月曆滑動效果         => touch_move (左右滑動更換月份, 套件touchwipe)
	- 月曆高度     	       => dataList_Ul
	- 滑動時，同步日期顯示 => chgDay
	- 上方日期點選		   => chk
	- 月曆內日期底選	   => dayClick
	- 月曆顯示&隱藏效果	   => ov_today_fn

※	產出所有表格內容
	
	- 已預約資料樣式   => hasRes, json => ov_obj
	- 內容表格li class => li_addClass
	- 內容表格         => btm_right_container
	- 上方會議室欄位   => top_right_container
	- 左方選擇時間     => btm_left_container

※	表格滑動效果 => ov_move (套件touchwipe)
	
※	表格點選效果 & 判斷
	
	- 函式 => liJug
	- 陣列 => ulArray, 存選過的表格(儲存名稱為li的class, ex: 11_t)

	- 方法 => nextUntil, prevUntil 

※	表格點選後取值

	- 函式 => reservedFn	
	- 陣列 => ov_timeObj
		1. 這邊是抓取有active class的li為each基準，因為class="11_t", 會用substr拆掉字串重組
		2. ov_timeObj 這邊會儲存選好的時間

※	預約 & 取消按鈕
	
	- 函式 => ov_confirmBtn(type)
	- ov_timeObj陣列會在這邊清空

※	會議室高度
	=> maxHeight(整體高度)
	=> btm_right 


/*-------------------------- calendar.html 新增行程區塊 ----------------------------*\
\*----------------------------------------------------------------------------------*/

※	共用變數

	- pageHistory(陣列) => 存取瀏覽過的頁面資料
	- ymd(年月日)       => 日顯示頁面會共用變數(帶入日期 20180101)
	- re_window         => 高度設定
	- searchFun(搜尋fn) => 日顯示與收藏紀錄都會用到
	- chkDate           => 上方月曆點選時會帶值進去
	- 其他變數請參照註解

	** ymd 會受到 chkDate 的值所影響 **


※  月曆 & 週顯示
		
	- 下拉月曆(產一整年的月份)

		1. 產月份函式           => created_month , json => dayObj
		2. 月曆滑動效果         => touch_move (左右滑動更換月份, 套件touchwipe)
		3. 月曆高度     	    => dataList_Ul
		4. 滑動時，同步日期顯示 => chgDay
		5. 上方日期點選		    => chk
		6. 月曆內日期點選	    => chk_Day
		7. 月曆顯示&隱藏效果	=> closeWin, chk_Day(點選日期後隱藏)


	- 週顯示
		
		1.顯示資料 => CalendFn
			- 變數 => winLoad   (判斷是否第一次載入)
				   => reloadDay (時間 20180412)
				   => get_day   (日期 12)
		
			/*--------------------------注意----------------------------*\		
			日期，會因為 winLoad、chkDate 的值不同，reloadDay、get_day
			相對的帶入的值也會不同，會對應到不同的變數
				
				- reloadDay 被 chkDate, yearDay, catch_data_day 影響
				- get_day   被 dayClass, $day 影響
			\*----------------------------------------------------------*/

		2.週點選日期時，上方月曆也跟著點選   => wekTo_top
		3.週顯示滑動效果 			         => sb_content
		4.上方月曆點選時，下方週顯示一併改變 => count_fn


	- 月曆日期點選(執行時)

			1. 獲取選取的月份跟日期
			2. 判斷是在條列式還是便利貼，並重新載入資料 => re_load_fn
			3. 收起視窗 								=> closeWin
			4. 載入日期資料 							=> CalendFn
			5. 計算日期 & 滑動到該週 					=> count_fn
			6. 上方月曆點選時，下方週顯示一併改變 		=> count_fn


	- 週日期點選(執行時)

			1. 獲取選取的月份跟日期
			2. 判斷是在條列式還是便利貼，並重新載入資料 => re_load_fn
			3. 週點選日期時，上方月曆也跟著點選   		=> wekTo_top
			4. 上方月曆點選時，下方週顯示一併改變 		=> count_fn

※  日顯示
		
	- 便條紙資料 => sky_date, json => sech
		- 從新計算高度 => calendar_page_h

	- 條列式資料 => at_date, json => sech
		- 判斷是否置頂,並修改bgcolor => judg_top_article

	- 以上兩者皆有
		1. 已讀、未讀、行程取消、置頂 樣式
		2. 尚未有任何行程 判斷
		3. 點選行程轉跳(page.html) => add_goPage


※  內容滑動效果
	
	- 內容滑動
		1. 函式 => cal_content
		2. 向右滑-執行 moveR_Fn
		3. 向左滑-執行 moveL_Fn

	- 抓取點選的日期 => cal_lieach

	- 計算下一天 => movePlus 
	- 計算前一天 => moveLess
		** (以上同時執行cal_lieach, re_load_touchMove) **

	- 判斷是在條列式還是便利貼，並重新載入資料 
		=> re_load_fn (點選日期時)
		=> re_load_touchMove (內容左右滑動時)
		** (以上同時執行 load_data_type) **


※  動態消息 => inforIcon

※  日選單條件

	- 隱藏 => calendar_box_hide
	- 切換
		1. 函式 => btnCalender
		2. 變數
			a. noteType (判斷 便利貼 or 條列式)
			b. chgType  (日顯示轉換判斷)

		** 同時執行load_data_type **

※  依照行程類別篩選 => load_data_type

※  側邊選單
	
	- 內容 => classify_List, json => typeList
	- 變數 => sum
	- 顯示 => menu_out
	- 隱藏 => menu_in

	- 把選中的值，傳入陣列 

		1. 函式 => get_input
		2. 陣列 => s_type

	- 確認 & 取消按鈕

		1. 函式 => sliderBtn
		2. 同時執行
			a. 確認按鈕 
				=> get_input
				=> load_data_type
				=> menu_in

			b. 取消按鈕
				=> menu_in

	- 全選或是全不選 => chkBtn
	- 高度 => classify_height
