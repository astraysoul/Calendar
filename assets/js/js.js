/* ---------------------------
           設定
------------------------------*/
var cusObj = {
    //推播 預設開啟為true
    "pushVal": true, 
    // 內容區塊 - 行程分類
    // 設定頁面的 標籤 & 新增行程的 行程分類都撈這邊
    "Tag":[
        {
            "type": "會議",
            "Classtype": "metting"
        },
        {
            "type": "活動",
            "Classtype": "activity"
        },
        {
            "type": "請假",
            "Classtype": "leave"
        },
        {
            "type": "其他",
            "Classtype": "other"
        }
    ]
}


/* ---------------------------
           新增行程
------------------------------*/
/*
    toTop - 置頂 
    allDay - 全天
    ordTitle - 標題
    tripClassify - 行程分類
    remind - 提醒
    repeat - 重覆
    location - 地點
    remarks - 備註
    people - 會議人數
*/
// 新增行程 & 會議室預約
var add_obj = {
    "startime": 
    {
        "hour": "",
        "minute": "",
        "week": "",
        "mouth": "",
        "day": ""
    },
    "endtime": 
    {
        "hour": "",
        "minute": "",
        "week": "",
        "mouth": "",
        "day": ""
    },
    "addelse": 
    {
        "toTop": false,
        "allDay": false,
        "ordTitle": "",
        "tripClassify": "",
        "remind": "",
        "repeat": "",
        "location": "",
        "remarks": "",
        "people": ""
    }
}

var addCon_obj = {
    // 內容區塊 - 提醒
    "remindText": [
        {
            "type": "無提醒",
            "Classtype": "noremind"
        },
        {
            "type": "30分前",
            "Classtype": "30minute"
        },
        {
            "type": "一小時前",
            "Classtype": "onehour"
        }
    ],
    // 內容區塊 - 重複
    "repeatText": [
        {
            "type": "無重複",
            "Classtype": "norepeat"
        },
        {
            "type": "每天",
            "Classtype": "everyday"
        },
        {
            "type": "每週",
            "Classtype": "everyweek"
        }
    ],
    // 內容區塊 - 會議
    "locationText": [
        {
            "type": "無地點",
            "Classtype": "noloca"
        },
        {
            "type": "會議室",
            "Classtype": "mettingroom"
        },
        {
            "type": "實際地點",
            "Classtype": "otherloca"
        },
    ],
    //側邊選單 - 行程分類
    "slideContent": [
        {
            "type": "請假",
            "Classtype": "leave"
        },
        {
            "type": "會議",
            "Classtype": "meeting"
        },
        {
            "type": "活動",
            "Classtype": "activity"
        },
        {
            "type": "其他",
            "Classtype": "other"
        },
        {
            "type": "展覽",
            "Classtype": "exhibition"
        },
        {
            "type": "VIP",
            "Classtype": "vip"
        },
        {
            "type": "面試",
            "Classtype": "interview"
        },
        {
            "type": "調班",
            "Classtype": "shift"
        },
        {
            "type": "維護",
            "Classtype": "maintain"
        },
        {
            "type": "節慶",
            "Classtype": "festival"
        },
        {
            "type": "賽事",
            "Classtype": "race"
        },
        {
            "type": "到職",
            "Classtype": "towork"
        },
        {
            "type": "出差",
            "Classtype": "businesstrip"
        },
        {
            "type": "追蹤",
            "Classtype": "track"
        },
        {
            "type": "聚餐",
            "Classtype": "dinner"
        },
        {
            "type": "公休",
            "Classtype": "placard"
        },
        {
            "type": "訪客",
            "Classtype": "visitors"
        },
        {
            "type": "維修",
            "Classtype": "service"
        },
        {
            "type": "功能",
            "Classtype": "features"
        },
        {
            "type": "例行",
            "Classtype": "routine"
        },
        {
            "type": "生日",
            "Classtype": "birthday"
        },
        {
            "type": "課程",
            "Classtype": "course"
        },
        {
            "type": "拜拜",
            "Classtype": "byebye"
        }
    ],
    //側邊選單 - 提醒
    "remindContent": [
        {
            "type": "無提醒",
            "Classtype": "noremind"
        },
        {
            "type": "30分鐘前",
            "Classtype": "30minute"
        },
        {
            "type": "1小時前",
            "Classtype": "onehour"
        },
        {
            "type": "1天前",
            "Classtype": "oneday"
        }
    ],
    //側邊選單 - 重複
    "repeatContent": [{
            "type": "無重複",
            "Classtype": "norepeat"
        },
        {
            "type": "每天重複",
            "Classtype": "everyday"
        },
        {
            "type": "每週重複",
            "Classtype": "everyweek"
        },
        {
            "type": "每月重複",
            "Classtype": "everymounth"
        },
        {
            "type": "每年重複",
            "Classtype": "everyear"
        }
    ],
    // 星期轉換 數置轉國字
    "zhWeek": ['日', '一', '二', '三', '四', '五', '六'],
    "setting_tag": ["會議", "請假", "活動", "其他"]
}
var set_obj = [];

/* ---------------------------
           對話記錄
------------------------------*/
// 抓取當前帳號的的名稱
// 日期
// 時間
// input class="respond" 的value
var chatroomText = {
    'name': 'YAYA',
    'day': '2017/10/20',
    'time': '05:31',
    'text': '測試測試測試測試測試測試測試測試測試測試測試測試測試測'
}
/* ---------------------------
           預約總覽
------------------------------*/
var ov_obj = [
    {
        'type': 'A1-1',
        'room': '大會議室',
        'people': '13',
        'time_block': [{
                'time': '09',
                'has_reserved': true,
                'reserved_myself': false,
                'reserved_name': 'YAYA'
            },
            {
                'time': '10',
                'has_reserved': true,
                'reserved_myself': false,
                'reserved_name': 'YAYA'
            },
            {
                'time': '11',
                'has_reserved': false,
                'reserved_myself': true
            },
            {
                'time': '12',
                'has_reserved': false,
                'reserved_myself': true
            },
            {
                'time': '13',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '14',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '15',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '16',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '17',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '18',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '19',
                'has_reserved': false,
                'reserved_myself': false
            }
        ]
    },
    {
        'type': 'A1-2',
        'room': '小會議室',
        'people': '4-5',
        'time_block': [{
                'time': '09',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '10',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '11',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '12',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '13',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '14',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '15',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '16',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '17',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '18',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '19',
                'has_reserved': false,
                'reserved_myself': false
            }
        ]
    },
    {
        'type': 'A1-3',
        'room': '小面談室',
        'people': '3',
        'time_block': [{
                'time': '09',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '10',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '11',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '12',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '13',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '14',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '15',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '16',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '17',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '18',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '19',
                'has_reserved': false,
                'reserved_myself': false
            }
        ]
    },
    {
        'type': 'B1-1',
        'room': '大會議室',
        'people': '6-8',
        'time_block': [{
                'time': '09',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '10',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '11',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '12',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '13',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '14',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '15',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '16',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '17',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '18',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '19',
                'has_reserved': false,
                'reserved_myself': false
            }
        ]
    },
    {
        'type': 'B1-2',
        'room': '小會議室',
        'people': '4-6',
        'time_block': [{
                'time': '09',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '10',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '11',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '12',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '13',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '14',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '15',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '16',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '17',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '18',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '19',
                'has_reserved': false,
                'reserved_myself': false
            }
        ]
    },
    {
        'type': 'B2-1',
        'room': '會議室',
        'people': '3',
        'time_block': [{
                'time': '09',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '10',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '11',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '12',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '13',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '14',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '15',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '16',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '17',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '18',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '19',
                'has_reserved': false,
                'reserved_myself': false
            }
        ]
    },
    {
        'type': 'B5-1',
        'room': '小面談室',
        'people': '6-7',
        'time_block': [{
                'time': '09',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '10',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '11',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '12',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '13',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '14',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '15',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '16',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '17',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '18',
                'has_reserved': false,
                'reserved_myself': false
            },
            {
                'time': '19',
                'has_reserved': false,
                'reserved_myself': false
            }
        ]
    }
]

/* ---------------------------
           行程內容
------------------------------*/
var star_End_Text = [{
        'starday': '10月23日',
        'starweek': '週二',
        'startime': '10:30'
    },
    {
        'endday': '10月24日',
        'endweek': '週三',
        'endtime': '11:30'
    },
]
var detail_content = [{
    'location': 'A1大會議室',
    'people': '25',
    'remarks': '請哲瑄準備相關報告',
    'name': '哲瑄',
    'remind': '一小時前',
    'repeat': '每週'
}]
/* ---------------------------
    收藏與記錄頁面/日顯示內容
------------------------------*/
// toTop    置頂
// hasRead  已讀
// isCancel 取消
// new_add 新增
// modify 修改
//
var pgCon = [
    {
        "id": "a1234",
        "name": "YAYA",
        "typeName": "會議",
        "classType": "meeting",
        "day":"2018年01月26日",
        "week":"五",
        "startime": "10:30",
        "endtime": "11:30",
        "ordTitle": "2018展覽位場勘查",
        "remind": "無提醒",
        "repeat": "每天",
        "r_location": "A1-1大會議室",
        "remarks": "請哲瑄準備相關報告",
        "people": "25",
        "reply": "10",
        "f_keep": "2017年11月23日",
        "toTop": false,
        "allDay": false,
        "hasRead": true,
        "isCancel": false,
    },
    {
        "id": "a1234",
        "name": "YAYA",
        "typeName": "會議",
        "classType": "meeting",
        "day": "2018年01月26日",
        "week": "五",
        "startime": "10:30",
        "endtime": "11:30",
        "ordTitle": "2018展覽位場勘查",
        "remind": "無提醒",
        "repeat": "每天",
        "r_location": "A1-1大會議室",
        "remarks": "請哲瑄準備相關報告",
        "people": "25",
        "reply": "10",
        "f_keep": "2017年11月23日",
        "toTop": false,
        "allDay": false,
        "hasRead": true,
        "isCancel": false,
    },
    {
        "id": "a1234",
        "name": "YAYA",
        "typeName": "會議",
        "classType": "meeting",
        "day": "2018年01月26日",
        "week": "五",
        "startime": "10:30",
        "endtime": "11:30",
        "ordTitle": "2018展覽位場勘查",
        "remind": "無提醒",
        "repeat": "每天",
        "r_location": "A1-1大會議室",
        "remarks": "請哲瑄準備相關報告",
        "people": "25",
        "reply": "10",
        "f_keep": "2017年11月23日",
        "toTop": false,
        "allDay": false,
        "hasRead": true,
        "isCancel": false,
    },
    {
        "id": "a1234",
        "name": "YAYA",
        "typeName": "會議",
        "classType": "meeting",
        "day": "2018年01月26日",
        "week": "五",
        "startime": "10:30",
        "endtime": "11:30",
        "ordTitle": "2018展覽位場勘查",
        "remind": "無提醒",
        "repeat": "每天",
        "r_location": "A1-1大會議室",
        "remarks": "請哲瑄準備相關報告",
        "people": "25",
        "reply": "10",
        "f_keep": "2017年11月23日",
        "toTop": false,
        "allDay": false,
        "hasRead": true,
        "isCancel": false,
    }
]

var sch_Date = {
    "201802":{
        "20180201":{},
        "20180202":{},
        "20180203":{},
        "20180204":{},
        "20180205":{},
        "20180206":{},
        "20180207":{},
        "20180208":{},
        "20180209":{},
        "20180210":{},
        "20180211":{},
        "20180212":{},
        "20180213":{},
        "20180214":{},
        "20180215":{},
        "20180216":{},
        "20180217":{},
        "20180218":{},
        "20180219":{},
        "20180220":{},
        "20180221":{},
        "20180222":{},
        "20180223":{},
        "20180224":{
            "schedule01": {
                "name": "YAYA",
                "id_schedule": "25",
                "typeName": "出差",
                "classType": "businesstrip",
                "f_day": "2017年11月23日",
                "f_week": "星期四",
                "starTime": "10:30",
                "endTime": "14:00",
                "f_theme": "2018展覽位場勘查",
                "meeting_room": "A2大會議室",
                "f_keep": "2017年5月5日",
                "reply": "5",
                "goTop": false,
                "hasRead": false,
                "isCancel": true
            }
        },
        "20180225":{
            "schedule01": {
                "id_schedule": "26",
                "typeName": "活動",
                "classType": "activity",
                "f_day": "2017年11月23日",
                "f_week": "星期四",
                "starTime": "09:30",
                "endTime": "14:00",
                "f_theme": "2018展覽位場勘查",
                "meeting_room": "A3大會議室",
                "f_keep": "2017年5月5日",
                "reply": "8",
                "goTop": false,
                "hasRead": false,
                "isCancel": false
            }
        },
        "20180226":{
            "schedule01": {
                "id_schedule": "24",
                "typeName": "會議",
                "classType": "meeting",
                "f_day": "2017年11月23日",
                "f_week": "星期四",
                "starTime": "13:30",
                "endTime": "14:00",
                "f_theme": "2018展覽位場勘查",
                "meeting_room": "A1大會議室",
                "f_keep": "2017年5月5日",
                "reply": "10",
                "people": "10",
                "goTop": true,
                "hasRead": true,
                "isCancel": false,
            },
            "schedule02": {
                "id_schedule": "24",
                "typeName": "出差",
                "classType": "businesstrip",
                "f_day": "2017年11月23日",
                "f_week": "星期四",
                "starTime": "18:30",
                "endTime": "14:00",
                "f_theme": "2018展覽位場勘查",
                "meeting_room": "A2大會議室",
                "f_keep": "2017年5月5日",
                "reply": "5",
                "goTop": false,
                "hasRead": false,
                "isCancel": true
            },
            "schedule03": {
                "id_schedule": "24",
                "typeName": "活動",
                "classType": "activity",
                "f_day": "2017年11月23日",
                "f_week": "星期四",
                "starTime": "15:30",
                "endTime": "14:00",
                "f_theme": "2018展覽位場勘查",
                "meeting_room": "A3大會議室",
                "f_keep": "2017年5月5日",
                "reply": "8",
                "goTop": true,
                "hasRead": false,
                "isCancel": false
            },
            "schedule04": {
                "id_schedule": "24",
                "typeName": "請假",
                "classType": "leave",
                "f_day": "2017年11月23日",
                "f_week": "星期四",
                "starTime": "16:30",
                "endTime": "14:00",
                "f_theme": "2018展覽位場勘查",
                "meeting_room": "A4大會議室",
                "f_keep": "2017年5月5日",
                "reply": "20",
                "goTop": false,
                "hasRead": true,
                "isCancel": false
            },
            "schedule05": {
                "id_schedule": "24",
                "typeName": "拜拜",
                "classType": "byebye",
                "f_day": "2017年11月23日",
                "f_week": "星期四",
                "starTime": "09:30",
                "endTime": "14:00",
                "f_theme": "2018展覽位場勘查",
                "meeting_room": "A5大會議室",
                "f_keep": "2017年5月5日",
                "reply": "0",
                "goTop": false,
                "hasRead": true,
                "isCancel": false
            }
        },
        "20180227":{
            "schedule01":{
                "id_schedule":"27",
                "typeName": "請假",
                "classType": "leave",
                "f_day": "2017年11月23日",
                "f_week": "星期四",
                "starTime": "10:30",
                "endTime": "14:00",
                "f_theme": "2018展覽位場勘查",
                "meeting_room": "A4大會議室",
                "f_keep": "2017年5月5日",
                "reply": "20",
                "goTop": false,
                "hasRead": true,
                "isCancel": false
            }
        },
        "20180228":{
            "schedule01":{
                "id_schedule":"28",
                "typeName": "拜拜",
                "classType": "byebye",
                "f_day": "2017年11月23日",
                "f_week": "星期四",
                "starTime": "10:30",
                "endTime": "14:00",
                "f_theme": "2018展覽位場勘查",
                "meeting_room": "A5大會議室",
                "f_keep": "2017年5月5日",
                "reply": "0",
                "goTop": false,
                "hasRead": true,
                "isCancel": false
            }
        }
        // },
        // "20180229":{
        //     "schedule01":{
        //         "id_schedule":"30",
        //         "typeName": "出差",
        //         "classType": "businesstrip",
        //         "f_day": "2017年11月23日",
        //         "f_week": "星期四",
        //         "starTime": "10:30",
        //         "endTime": "14:00",
        //         "f_theme": "2018展覽位場勘查",
        //         "meeting_room": "A2大會議室",
        //         "f_keep": "2017年5月5日",
        //         "reply": "5",
        //         "goTop": false,
        //         "hasRead": false,
        //         "isCancel": true
        //     },
        // },
        // "20180230":{
        //     "schedule01":{
        //         "id_schedule":"30",
        //         "typeName": "出差",
        //         "classType": "businesstrip",
        //         "f_day": "2017年11月23日",
        //         "f_week": "星期四",
        //         "starTime": "10:30",
        //         "endTime": "14:00",
        //         "f_theme": "2018展覽位場勘查",
        //         "meeting_room": "A2大會議室",
        //         "f_keep": "2017年5月5日",
        //         "reply": "5",
        //         "goTop": false,
        //         "hasRead": false,
        //         "isCancel": true
        //     },
        // },
        // "20180231":{
        //     "schedule01":{
        //         "id_schedule":"30",
        //         "typeName": "出差",
        //         "classType": "businesstrip",
        //         "f_day": "2017年11月23日",
        //         "f_week": "星期四",
        //         "starTime": "10:30",
        //         "endTime": "14:00",
        //         "f_theme": "2018展覽位場勘查",
        //         "meeting_room": "A2大會議室",
        //         "f_keep": "2017年5月5日",
        //         "reply": "5",
        //         "goTop": false,
        //         "hasRead": false,
        //         "isCancel": true
        //     },
        // }
    }
}
/* ---------------------------
           動態消息
------------------------------*/
// isCancel 取消
// new_add 新增
// modify 修改

var obj_folder = [{
        'type': '修改',
        'whos': 'YAYA',
        'theme': '《十一月節慶活動會議》',
        'minute': '12'
    },
    {
        'type': '新增',
        'whos': 'YAYA',
        'theme': '《十月節慶活動會議》',
        'minute': '12'
    },
    {
        'type': '提醒',
        'whos': 'YAYA',
        'theme': '《一月節慶活動會議》',
        'minute': '12'
    },
    {
        'type': '取消',
        'whos': 'YAYA',
        'theme': '《節慶活動會議》',
        'minute': '12'
    },
    {
        'type': '刪除',
        'whos': 'YAYA',
        'theme': '《活動會議》',
        'minute': '12'
    },
]

/* ---------------------------
             日期
------------------------------*/

var dayObj = {
    "201801": {
        "20180101": {
            "date": "01",
            "week": "MON"
        },
        "20180102": {
            "date": "02",
            "week": "TUE"
        },
        "20180103": {
            "date": "03",
            "week": "WED"
        },
        "20180104": {
            "date": "04",
            "week": "THU"
        },
        "20180105": {
            "date": "05",
            "week": "FRI"
        },
        "20180106": {
            "date": "06",
            "week": "SAT"
        },
        "20180107": {
            "date": "07",
            "week": "SUN"
        },
        "20180108": {
            "date": "08",
            "week": "MON"
        },
        "20180109": {
            "date": "09",
            "week": "TUE"
        },
        "20180110": {
            "date": "10",
            "week": "WED"
        },
        "20180111": {
            "date": "11",
            "week": "THU"
        },
        "20180112": {
            "date": "12",
            "week": "FRI"
        },
        "20180113": {
            "date": "13",
            "week": "SAT"
        },
        "20180114": {
            "date": "14",
            "week": "SUN"
        },
        "20180115": {
            "date": "15",
            "week": "MON"
        },
        "20180116": {
            "date": "16",
            "week": "TUE"
        },
        "20180117": {
            "date": "17",
            "week": "WED"
        },
        "20180118": {
            "date": "18",
            "week": "THU"
        },
        "20180119": {
            "date": "19",
            "week": "FRI"
        },
        "20180120": {
            "date": "20",
            "week": "SAT"
        },
        "20180121": {
            "date": "21",
            "week": "SUN"
        },
        "20180122": {
            "date": "22",
            "week": "MON"
        },
        "20180123": {
            "date": "23",
            "week": "TUE"
        },
        "20180124": {
            "date": "24",
            "week": "WED"
        },
        "20180125": {
            "date": "25",
            "week": "THU"
        },
        "20180126": {
            "date": "26",
            "week": "FRI"
        },
        "20180127": {
            "date": "27",
            "week": "SAT"
        },
        "20180128": {
            "date": "28",
            "week": "SUN"
        },
        "20180129": {
            "date": "29",
            "week": "MON"
        },
        "20180130": {
            "date": "30",
            "week": "TUE"
        },
        "20180131": {
            "date": "31",
            "week": "WED"
        }
    },
    "201802": {
        "20180201": {
            "date": "01",
            "week": "THU"
        },
        "20180202": {
            "date": "02",
            "week": "FRI"
        },
        "20180203": {
            "date": "03",
            "week": "SAT"
        },
        "20180204": {
            "date": "04",
            "week": "SUN"
        },
        "20180205": {
            "date": "05",
            "week": "MON"
        },
        "20180206": {
            "date": "06",
            "week": "TUE"
        },
        "20180207": {
            "date": "07",
            "week": "WED"
        },
        "20180208": {
            "date": "08",
            "week": "THU"
        },
        "20180209": {
            "date": "09",
            "week": "FRI"
        },
        "20180210": {
            "date": "10",
            "week": "SAT"
        },
        "20180211": {
            "date": "11",
            "week": "SUN"
        },
        "20180212": {
            "date": "12",
            "week": "MON"
        },
        "20180213": {
            "date": "13",
            "week": "TUE"
        },
        "20180214": {
            "date": "14",
            "week": "WED"
        },
        "20180215": {
            "date": "15",
            "week": "THU"
        },
        "20180216": {
            "date": "16",
            "week": "FRI"
        },
        "20180217": {
            "date": "17",
            "week": "SAT"
        },
        "20180218": {
            "date": "18",
            "week": "SUN"
        },
        "20180219": {
            "date": "19",
            "week": "MON"
        },
        "20180220": {
            "date": '20',
            "week": "TUE"
        },
        "20180221": {
            "date": "21",
            "week": "WED"
        },
        "20180222": {
            "date": "22",
            "week": "THU"
        },
        "20180223": {
            "date": "23",
            "week": "FRI"
        },
        "20180224": {
            "date": "24",
            "week": "SAT"
        },
        "20180225": {
            "date": "25",
            "week": "SUN"
        },
        "20180226": {
            "date": "26",
            "week": "MON"
        },
        "20180227": {
            "date": "27",
            "week": "TUE"
        },
        "20180228": {
            "date": "28",
            "week": "WED"
        }
    },
    "201803": {
        "20180301": {
            "date": "01",
            "week": "THU"
        },
        "20180302": {
            "date": "02",
            "week": "FRI"
        },
        "20180303": {
            "date": "03",
            "week": "SAT"
        },
        "20180304": {
            "date": "04",
            "week": "SUN"
        },
        "20180305": {
            "date": "05",
            "week": "MON"
        },
        "20180306": {
            "date": "06",
            "week": "TUE"
        },
        "20180307": {
            "date": "07",
            "week": "WED"
        },
        "20180308": {
            "date": "08",
            "week": "THU"
        },
        "20180309": {
            "date": "09",
            "week": "FRI"
        },
        "20180310": {
            "date": "10",
            "week": "SAT"
        },
        "20180311": {
            "date": "11",
            "week": "SUN"
        },
        "20180312": {
            "date": "12",
            "week": "MON"
        },
        "20180313": {
            "date": "13",
            "week": "TUE"
        },
        "20180314": {
            "date": "14",
            "week": "WED"
        },
        "20180315": {
            "date": "15",
            "week": "THU"
        },
        "20180316": {
            "date": "16",
            "week": "FRI"
        },
        "20180317": {
            "date": '17',
            "week": "SAT"
        },
        "20180318": {
            "date": "18",
            "week": "SUN"
        },
        "20180319": {
            "date": "19",
            "week": "MON"
        },
        "20180320": {
            "date": "20",
            "week": "TUE"
        },
        "20180321": {
            "date": "21",
            "week": "WED"
        },
        "20180322": {
            "date": "22",
            "week": "THU"
        },
        "20180323": {
            "date": "23",
            "week": "FRI"
        },
        "20180324": {
            "date": "24",
            "week": "SAT"
        },
        "20180325": {
            "date": "25",
            "week": "SUN"
        },
        "20180326": {
            "date": "26",
            "week": "MON"
        },
        "20180327": {
            "date": "27",
            "week": "TUE"
        },
        "20180328": {
            "date": "28",
            "week": "WED"
        },
        "20180329": {
            "date": "29",
            "week": "THU"
        },
        "20180330": {
            "date": "30",
            "week": "FRI"
        },
        "20180331": {
            "date": "31",
            "week": "SAT"
        }
    },
    "201804": {
        "20180401": {
            "date": "01",
            "week": "SUN"
        },
        "20180402": {
            "date": "02",
            "week": "MON"
        },
        "20180403": {
            "date": "03",
            "week": "TUE"
        },
        "20180404": {
            "date": "04",
            "week": "WED"
        },
        "20180405": {
            "date": "05",
            "week": "THU"
        },
        "20180406": {
            "date": "06",
            "week": "FRI"
        },
        "20180407": {
            "date": "07",
            "week": "SAT"
        },
        "20180408": {
            "date": "08",
            "week": "SUN"
        },
        "20180409": {
            "date": "09",
            "week": "MON"
        },
        "20180410": {
            "date": "10",
            "week": "TUE"
        },
        "20180411": {
            "date": "11",
            "week": "WED"
        },
        "20180412": {
            "date": "12",
            "week": "THU"
        },
        "20180413": {
            "date": "13",
            "week": "FRI"
        },
        "20180414": {
            "date": "14",
            "week": "SAT"
        },
        "20180415": {
            "date": "15",
            "week": "SUN"
        },
        "20180416": {
            "date": "16",
            "week": "MON"
        },
        "20180417": {
            "date": '17',
            "week": "TUE"
        },
        "20180418": {
            "date": "18",
            "week": "WED"
        },
        "20180419": {
            "date": "19",
            "week": "THU"
        },
        "20180420": {
            "date": "20",
            "week": "FRI"
        },
        "20180421": {
            "date": "21",
            "week": "SAT"
        },
        "20180422": {
            "date": "22",
            "week": "SUN"
        },
        "20180423": {
            "date": "23",
            "week": "MON"
        },
        "20180424": {
            "date": "24",
            "week": "TUE"
        },
        "20180425": {
            "date": "25",
            "week": "WED"
        },
        "20180426": {
            "date": "26",
            "week": "THU"
        },
        "20180427": {
            "date": "27",
            "week": "FRI"
        },
        "20180428": {
            "date": "28",
            "week": "SAT"
        },
        "20180429": {
            "date": "29",
            "week": "SUN"
        },
        "20180430": {
            "date": "30",
            "week": "MON"
        }
    },
    "201805":{
        "20180501": {
            "date": "01",
            "week": "TUE"
        },
        "20180502": {
            "date": "02",
            "week": "WED"
        },
        "20180503": {
            "date": "03",
            "week": "THU"
        },
        "20180504": {
            "date": "04",
            "week": "FRI"
        },
        "20180505": {
            "date": "05",
            "week": "SAT"
        },
        "20180506": {
            "date": "06",
            "week": "SUN"
        },
        "20180507": {
            "date": "07",
            "week": "MON"
        },
        "20180508": {
            "date": "08",
            "week": "TUE"
        },
        "20180509": {
            "date": "09",
            "week": "WED"
        },
        "20180510": {
            "date": "10",
            "week": "THU"
        },
        "20180511": {
            "date": "11",
            "week": "FRI"
        },
        "20180512": {
            "date": "12",
            "week": "SAT"
        },
        "20180513": {
            "date": "13",
            "week": "SUN"
        },
        "20180514": {
            "date": "14",
            "week": "MON"
        },
        "20180515": {
            "date": "15",
            "week": "TUE"
        },
        "20180516": {
            "date": "16",
            "week": "WED"
        },
        "20180517": {
            "date": "17",
            "week": "THU"
        },
        "20180518": {
            "date": "18",
            "week": "FRI"
        },
        "20180519": {
            "date": "19",
            "week": "SAT"
        },
        "20180520": {
            "date": "20",
            "week": "SUN"
        },
        "20180521": {
            "date": "21",
            "week": "MON"
        },
        "20180522": {
            "date": "22",
            "week": "TUE"
        },
        "20180523": {
            "date": "23",
            "week": "WED"
        },
        "20180524": {
            "date": "24",
            "week": "THU"
        },
        "20180525": {
            "date": "25",
            "week": "FRI"
        },
        "20180526": {
            "date": "26",
            "week": "SAT"
        },
        "20180527": {
            "date": "27",
            "week": "SUN"
        },
        "20180528": {
            "date": "28",
            "week": "MON"
        },
        "20180529": {
            "date": "29",
            "week": "TUE"
        },
        "20180530": {
            "date": "30",
            "week": "WED"
        },
        "20180531": {
            "date": "31",
            "week": "THU"
        }
    },
    "201806":{
        "20180601": {
            "date": "01",
            "week": "FRI"
        },
        "20180602": {
            "date": "02",
            "week": "SAT"
        },
        "20180603": {
            "date": "03",
            "week": "SUN"
        },
        "20180604": {
            "date": "04",
            "week": "MON"
        },
        "20180605": {
            "date": "05",
            "week": "TUE"
        },
        "20180606": {
            "date": "06",
            "week": "WED"
        },
        "20180607": {
            "date": "07",
            "week": "THU"
        },
        "20180608": {
            "date": "08",
            "week": "FRI"
        },
        "20180609": {
            "date": "09",
            "week": "SAT"
        },
        "20180610": {
            "date": "10",
            "week": "SUN"
        },
        "20180611": {
            "date": "11",
            "week": "MON"
        },
        "20180612": {
            "date": "12",
            "week": "TUE"
        },
        "20180613": {
            "date": "13",
            "week": "WED"
        },
        "20180614": {
            "date": "14",
            "week": "THU"
        },
        "20180615": {
            "date": "15",
            "week": "FRI"
        },
        "20180616": {
            "date": "16",
            "week": "SAT"
        },
        "20180617": {
            "date": "17",
            "week": "SUN"
        },
        "20180618": {
            "date": "18",
            "week": "MON"
        },
        "20180619": {
            "date": "19",
            "week": "TUE"
        },
        "20180620": {
            "date": "20",
            "week": "WED"
        },
        "20180621": {
            "date": "21",
            "week": "THU"
        },
        "20180622": {
            "date": "22",
            "week": "FRI"
        },
        "20180623": {
            "date": "23",
            "week": "SAT"
        },
        "20180624": {
            "date": "24",
            "week": "SUN"
        },
        "20180625": {
            "date": "25",
            "week": "MON"
        },
        "20180626": {
            "date": "26",
            "week": "TUE"
        },
        "20180627": {
            "date": "27",
            "week": "WED"
        },
        "20180628": {
            "date": "28",
            "week": "THU"
        },
        "20180629": {
            "date": "29",
            "week": "FRI"
        },
        "20180630": {
            "date": "30",
            "week": "SAT"
        }
    },
    "201807": {
        "20180701": {
            "date": "01",
            "week": "SUN"
        },
        "20180702": {
            "date": "02",
            "week": "MON"
        },
        "20180703": {
            "date": "03",
            "week": "TUE"
        },
        "20180704": {
            "date": "04",
            "week": "WED"
        },
        "20180705": {
            "date": "05",
            "week": "THU"
        },
        "20180706": {
            "date": "06",
            "week": "FRI"
        },
        "20180707": {
            "date": "07",
            "week": "SAT"
        },
        "20180708": {
            "date": "08",
            "week": "SUN"
        },
        "20180709": {
            "date": "09",
            "week": "MON"
        },
        "20180710": {
            "date": "10",
            "week": "TUE"
        },
        "20180711": {
            "date": "11",
            "week": "WED"
        },
        "20180712": {
            "date": "12",
            "week": "THU"
        },
        "20180713": {
            "date": "13",
            "week": "FRI"
        },
        "20180714": {
            "date": "14",
            "week": "SAT"
        },
        "20180715": {
            "date": "15",
            "week": "SUN"
        },
        "20180716": {
            "date": "16",
            "week": "MON"
        },
        "20180717": {
            "date": "17",
            "week": "TUE"
        },
        "20180718": {
            "date": "18",
            "week": "WED"
        },
        "20180719": {
            "date": "19",
            "week": "THU"
        },
        "20180720": {
            "date": "20",
            "week": "FRI"
        },
        "20180721": {
            "date": "21",
            "week": "SAT"
        },
        "20180722": {
            "date": "22",
            "week": "SUN"
        },
        "20180723": {
            "date": "23",
            "week": "MON"
        },
        "20180724": {
            "date": "24",
            "week": "TUE"
        },
        "20180725": {
            "date": "25",
            "week": "WED"
        },
        "20180726": {
            "date": "26",
            "week": "THU"
        },
        "20180727": {
            "date": "27",
            "week": "FRI"
        },
        "20180728": {
            "date": '28',
            "week": "SAT"
        },
        "20180729": {
            "date": "29",
            "week": "SUN"
        },
        "20180730": {
            "date": "30",
            "week": "MON"
        },
        "20180731": {
            "date": "31",
            "week": "TUE"
        }
    },
    "201808": {
        "20180801": {
            "date": "01",
            "week": "WED"
        },
        "20180802": {
            "date": "02",
            "week": "THU"
        },
        "20180803": {
            "date": "03",
            "week": "FRI"
        },
        "20180804": {
            "date": "04",
            "week": "SAT"
        },
        "20180805": {
            "date": "05",
            "week": "SUN"
        },
        "20180806": {
            "date": "06",
            "week": "MON"
        },
        "20180807": {
            "date": "07",
            "week": "TUE"
        },
        "20180808": {
            "date": "08",
            "week": "WED"
        },
        "20180809": {
            "date": "09",
            "week": "THU"
        },
        "20180810": {
            "date": "10",
            "week": "FRI"
        },
        "20180811": {
            "date": "11",
            "week": "SAT"
        },
        "20180812": {
            "date": "12",
            "week": "SUN"
        },
        "20180813": {
            "date": "13",
            "week": "MON"
        },
        "20180814": {
            "date": "14",
            "week": "TUE"
        },
        "20180815": {
            "date": "15",
            "week": "WED"
        },
        "20180816": {
            "date": "16",
            "week": "THU"
        },
        "20180817": {
            "date": "17",
            "week": "FRI"
        },
        "20180818": {
            "date": "18",
            "week": "SAT"
        },
        "20180819": {
            "date": "19",
            "week": "SUN"
        },
        "20180820": {
            "date": "20",
            "week": "MON"
        },
        "20180821": {
            "date": "21",
            "week": "TUE"
        },
        "20180822": {
            "date": "22",
            "week": "WED"
        },
        "20180823": {
            "date": "23",
            "week": "THU"
        },
        "20180824": {
            "date": "24",
            "week": "FRI"
        },
        "20180825": {
            "date": "25",
            "week": "SAT"
        },
        "20180826": {
            "date": "26",
            "week": "SUN"
        },
        "20180827": {
            "date": "27",
            "week": "MON"
        },
        "20180828": {
            "date": "28",
            "week": "TUE"
        },
        "20180829": {
            "date": "29",
            "week": "WED"
        },
        "20180830": {
            "date": "30",
            "week": "THU"
        },
        "20180831": {
            "date": "31",
            "week": "FRI"
        }
    },
    "201809": {
        "20180901": {
            "date": "01",
            "week": "SAT"
        },
        "20180902": {
            "date": "02",
            "week": "SUN"
        },
        "20180903": {
            "date": "03",
            "week": "MON"
        },
        "20180904": {
            "date": "04",
            "week": "TUE"
        },
        "20180905": {
            "date": "05",
            "week": "WED"
        },
        "20180906": {
            "date": "06",
            "week": "THU"
        },
        "20180907": {
            "date": "07",
            "week": "FRI"
        },
        "20180908": {
            "date": "08",
            "week": "SAT"
        },
        "20180909": {
            "date": "09",
            "week": "SUN"
        },
        "20180910": {
            "date": "10",
            "week": "MON"
        },
        "20180911": {
            "date": "11",
            "week": "TUE"
        },
        "20180912": {
            "date": "12",
            "week": "WED"
        },
        "20180913": {
            "date": "13",
            "week": "THU"
        },
        "20180914": {
            "date": "14",
            "week": "FRI"
        },
        "20180915": {
            "date": "15",
            "week": "SAT"
        },
        "20180916": {
            "date": "16",
            "week": "SUN"
        },
        "20180917": {
            "date": "17",
            "week": "MON"
        },
        "20180918": {
            "date": "18",
            "week": "TUE"
        },
        "20180919": {
            "date": "19",
            "week": "WED"
        },
        "20180920": {
            "date": "20",
            "week": "THU"
        },
        "20180921": {
            "date": "21",
            "week": "FRI"
        },
        "20180922": {
            "date": "22",
            "week": "SAT"
        },
        "20180923": {
            "date": "23",
            "week": "SUN"
        },
        "20180924": {
            "date": "24",
            "week": "MON"
        },
        "20180925": {
            "date": "25",
            "week": "TUE"
        },
        "20180926": {
            "date": "26",
            "week": "WED"
        },
        "20180927": {
            "date": "27",
            "week": "THU"
        },
        "20180928": {
            "date": "28",
            "week": "FRI"
        },
        "20180929": {
            "date": "29",
            "week": "SAT"
        },
        "20180930": {
            "date": "30",
            "week": "SUN"
        }
    },
    "201810":{
        "20181001": {
            "date": "01",
            "week": "MON"
        },
        "20181002": {
            "date": "02",
            "week": "TUE"
        },
        "20181003": {
            "date": "03",
            "week": "WED"
        },
        "20181004": {
            "date": "04",
            "week": "THU"
        },
        "20181005": {
            "date": "05",
            "week": "FRI"
        },
        "20181006": {
            "date": "06",
            "week": "SAT"
        },
        "20181007": {
            "date": "07",
            "week": "SUN"
        },
        "20181008": {
            "date": "08",
            "week": "MON"
        },
        "20181009": {
            "date": "09",
            "week": "TUE"
        },
        "20181010": {
            "date": "10",
            "week": "WED"
        },
        "20181011": {
            "date": "11",
            "week": "THU"
        },
        "20181012": {
            "date": "12",
            "week": "FRI"
        },
        "20181013": {
            "date": "13",
            "week": "SAT"
        },
        "20181014": {
            "date": "14",
            "week": "SUN"
        },
        "20181015": {
            "date": "15",
            "week": "MON"
        },
        "20181016": {
            "date": "16",
            "week": "TUE"
        },
        "20181017": {
            "date": "17",
            "week": "WED"
        },
        "20181018": {
            "date": "18",
            "week": "THU"
        },
        "20181019": {
            "date": "19",
            "week": "FRI"
        },
        "20181020": {
            "date": "20",
            "week": "SAT"
        },
        "20181021": {
            "date": "21",
            "week": "SUN"
        },
        "20181022": {
            "date": "22",
            "week": "MON"
        },
        "20181023": {
            "date": "23",
            "week": "TUE"
        },
        "20181024": {
            "date": "24",
            "week": "WED"
        },
        "20181025": {
            "date": "25",
            "week": "THU"
        },
        "20181026": {
            "date": "26",
            "week": "FRI"
        },
        "20181027": {
            "date": "27",
            "week": "SAT"
        },
        "20181028": {
            "date": "28",
            "week": "SUN"
        },
        "20181029": {
            "date": "29",
            "week": "MON"
        },
        "20181030": {
            "date": "30",
            "week": "TUE"
        },
        "20181031": {
            "date": "31",
            "week": "WED"
        }
    },
    "201811": {
        "20181101": {
            "date": "01",
            "week": "THU"
        },
        "20181102": {
            "date": "02",
            "week": "FRI"
        },
        "20181103": {
            "date": "03",
            "week": "SAT"
        },
        "20181104": {
            "date": "04",
            "week": "SUN"
        },
        "20181105": {
            "date": "05",
            "week": "MON"
        },
        "20181106": {
            "date": "06",
            "week": "TUE"
        },
        "20181107": {
            "date": "07",
            "week": "WED"
        },
        "20181108": {
            "date": "08",
            "week": "THU"
        },
        "20181109": {
            "date": "09",
            "week": "FRI"
        },
        "20181110": {
            "date": "10",
            "week": "SAT"
        },
        "20181111": {
            "date": "11",
            "week": "SUN"
        },
        "20181112": {
            "date": "12",
            "week": "MON"
        },
        "20181113": {
            "date": "13",
            "week": "TUE"
        },
        "20181114": {
            "date": "14",
            "week": "WED"
        },
        "20181115": {
            "date": "15",
            "week": "THU"
        },
        "20181116": {
            "date": "16",
            "week": "FRI"
        },
        "20181117": {
            "date": "17",
            "week": "SAT"
        },
        "20181118": {
            "date": "18",
            "week": "SUN"
        },
        "20181119": {
            "date": "19",
            "week": "MON"
        },
        "20181120": {
            "date": "20",
            "week": "TUE"
        },
        "20181121": {
            "date": "21",
            "week": "WED"
        },
        "20181122": {
            "date": "22",
            "week": "THU"
        },
        "20181123": {
            "date": "23",
            "week": "FRI"
        },
        "20181124": {
            "date": "24",
            "week": "SAT"
        },
        "20181125": {
            "date": "25",
            "week": "SUN"
        },
        "20181126": {
            "date": "26",
            "week": "MON"
        },
        "20181127": {
            "date": "27",
            "week": "TUE"
        },
        "20181128": {
            "date": "28",
            "week": "WED"
        },
        "20181129": {
            "date": "29",
            "week": "THU"
        },
        "20181130": {
            "date": "30",
            "week": "FRI"
        }
    },
    "201812": {
        "20181201": {
            "date": "01",
            "week": "SAT"
        },
        "20181202": {
            "date": "02",
            "week": "SUN"
        },
        "20181203": {
            "date": "03",
            "week": "MON"
        },
        "20181204": {
            "date": "04",
            "week": "TUE"
        },
        "20181205": {
            "date": "05",
            "week": "WED"
        },
        "20181206": {
            "date": "06",
            "week": "THU"
        },
        "20181207": {
            "date": "07",
            "week": "FRI"
        },
        "20181208": {
            "date": "08",
            "week": "SAT"
        },
        "20181209": {
            "date": "09",
            "week": "SUN"
        },
        "20181210": {
            "date": "10",
            "week": "MON"
        },
        "20181211": {
            "date": "11",
            "week": "TUE"
        },
        "20181212": {
            "date": "12",
            "week": "WED"
        },
        "20181213": {
            "date": "13",
            "week": "THU"
        },
        "20181214": {
            "date": "14",
            "week": "FRI"
        },
        "20181215": {
            "date": "15",
            "week": "SAT"
        },
        "20181216": {
            "date": "16",
            "week": "SUN"
        },
        "20181217": {
            "date": "17",
            "week": "MON"
        },
        "20181218": {
            "date": "18",
            "week": "TUE"
        },
        "20181219": {
            "date": "19",
            "week": "WED"
        },
        "20181220": {
            "date": "20",
            "week": "THU"
        },
        "20181221": {
            "date": "21",
            "week": "FRI"
        },
        "20181222": {
            "date": "22",
            "week": "SAT"
        },
        "20181223": {
            "date": "23",
            "week": "SUN"
        },
        "20181224": {
            "date": "24",
            "week": "MON"
        },
        "20181225": {
            "date": "25",
            "week": "TUE"
        },
        "20181226": {
            "date": "26",
            "week": "WED"
        },
        "20181227": {
            "date": "27",
            "week": "THU"
        },
        "20181228": {
            "date": "28",
            "week": "FRI"
        },
        "20181229": {
            "date": "29",
            "week": "SAT"
        },
        "20181230": {
            "date": "30",
            "week": "SUN"
        },
        "20181231": {
            "date": "31",
            "week": "MON"
        }
    }
}

/* ---------------------------
           搜尋區塊
------------------------------*/
//歷史搜尋紀錄
var record_data = [
    { 'key': '展覽' },
    { 'key': '行事曆' },
    { 'key': '會議' },
    { 'key': '派獎' },
    { 'key': '尾牙' },
    { 'key': '第六筆資料' },
    { 'key': '7' },
    { 'key': '8' },
    { 'key': '9' }
]

//搜尋後資料列表
var ssType = [
    {
        'type': '會議1',
        'date': '2017年11月23日 星期四',
        'time': '10:30 - 14:00',
        'topic': '2018展覽會場勘查',
        'location': 'A1大會議室',
        'Collection': '於2017年5月8收藏'
    },
    {
        'type': '會議2',
        'date': '2017年11月23日 星期五',
        'time': '10:30 - 14:00',
        'topic': 'G2E設計會議',
        'location': 'A1大會議室',
        'Collection': '於2017年5月8收藏'
    },
    {
        'type': '會議3',
        'date': '2017年11月23日 星期六',
        'time': '10:30 - 14:00',
        'topic': '2018_尾牙會議',
        'location': 'A1大會議室',
        'Collection': '於2017年5月8收藏'
    },
    {
        'type': '會議4',
        'date': '2017年11月23日 星期日',
        'time': '10:30 - 14:00',
        'topic': '2018_尾牙會議',
        'location': 'A3大會議室',
        'Collection': '於2017年5月8收藏'
    },
    {
        'type': '會議5',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議6',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議7',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議8',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議9',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議10',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議11',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議12',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議13',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議14',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議14',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議15',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議16',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議17',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議18',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議19',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議19',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議20',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    },
    {
        'type': '會議21',
        'date': '2017年11月23日 星期一',
        'time': '10:30 - 14:00',
        'topic': '行銷會議',
        'location': 'B2大會議室',
        'Collection': '於2018年1月5收藏'
    }
]

var per = [
    {
        "Name": "市場營運部",
        "Dept": "15",
        "Group": {
            "005": {
                "id": "005",
                "Name": "中-13",
                "staff": [
                    {
                        "id": "15",
                        "Name": "惠柏嘉",
                        "Act": "20100704",
                        "NickName": "柏嘉",
                        "Dep": "15",
                        "level": "04001",
                        "Slevel": "026",
                        "DirectorLevelID": "13",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "005",
                        "LevelSq": "94"
                    }
                ]
            },
            "InCharge": {
                "id": "InCharge",
                "Name": "中階主管以上及特別人物",
                "staff": [
                    {
                        "id": "40",
                        "Name": "JAY",
                        "Act": "mark",
                        "NickName": "杰哥",
                        "Dep": "15",
                        "level": "12",
                        "Slevel": "0100",
                        "DirectorLevelID": "2",
                        "DirectorGroup": "1",
                        "GroupID": "9",
                        "palmkID": "001",
                        "LevelSq": "98"
                    },
                    {
                        "id": "253",
                        "Name": "蘇憲峰",
                        "Act": "20130801",
                        "NickName": "Jason",
                        "Dep": "15",
                        "level": "05001",
                        "Slevel": "075",
                        "DirectorLevelID": "11",
                        "DirectorGroup": "1",
                        "GroupID": "0",
                        "palmkID": "004",
                        "LevelSq": "95"
                    },
                    {
                        "id": "154",
                        "Name": "謝健强",
                        "Act": "20120705",
                        "NickName": "强哥",
                        "Dep": "15",
                        "level": "05001",
                        "Slevel": "075",
                        "DirectorLevelID": "11",
                        "DirectorGroup": "1",
                        "GroupID": "0",
                        "palmkID": "004",
                        "LevelSq": "95"
                    },
                    {
                        "id": "6",
                        "Name": "王俊凱",
                        "Act": "20100502",
                        "NickName": "Tony",
                        "Dep": "15",
                        "level": "05000",
                        "Slevel": "076",
                        "DirectorLevelID": "6",
                        "DirectorGroup": "1",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": "95"
                    }
                ]
            }
        }
    },
    {
        "Name": "客服部",
        "Dept": "04",
        "Group": {
            "13": {
                "id": "13",
                "Name": "業務組",
                "staff": [
                    {
                        "id": "16",
                        "Name": "吳雅婷",
                        "Act": "20100705",
                        "NickName": "Ting",
                        "Dep": "04",
                        "level": "04001",
                        "Slevel": "026",
                        "DirectorLevelID": "13",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "003",
                        "LevelSq": "94"
                    },
                    {
                        "id": "166",
                        "Name": "盧泰頴",
                        "Act": "20120804",
                        "NickName": "Leo",
                        "Dep": "04",
                        "level": "03001",
                        "Slevel": "026",
                        "DirectorLevelID": "18",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "001",
                        "LevelSq": "93"
                    },
                    {
                        "id": "441",
                        "Name": "陳冠瑄",
                        "Act": "20150708",
                        "NickName": "Kelly",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "028",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "527",
                        "Name": "沈芸安",
                        "Act": "20160319",
                        "NickName": "Ann",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "028",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "394",
                        "Name": "林雯雯",
                        "Act": "20150308",
                        "NickName": "雯雯",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "028",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "548",
                        "Name": "劉琲㚬",
                        "Act": "20160508",
                        "NickName": "Una",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "028",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "653",
                        "Name": "葉筱涵",
                        "Act": "20170204",
                        "NickName": "Naomi",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "566",
                        "Name": "賴齊安",
                        "Act": "20160704",
                        "NickName": "Anna",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "028",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "387",
                        "Name": "楊舒涵",
                        "Act": "20150304",
                        "NickName": "Kokoro",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "028",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "528",
                        "Name": "楊義諍",
                        "Act": "20160401",
                        "NickName": "Ethan",
                        "Dep": "04",
                        "level": "02001",
                        "Slevel": "072",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "365",
                        "Name": "莊智淵",
                        "Act": "20140908",
                        "NickName": "Will",
                        "Dep": "04",
                        "level": "03001",
                        "Slevel": "062",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "99",
                        "Name": "楊蕓嘉",
                        "Act": "20120312",
                        "NickName": "Julie",
                        "Dep": "04",
                        "level": "03001",
                        "Slevel": "026",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "71",
                        "Name": "林怡婷",
                        "Act": "20110903",
                        "NickName": "小不點",
                        "Dep": "04",
                        "level": "03001",
                        "Slevel": "027",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "182",
                        "Name": "陳筱婷",
                        "Act": "20121002",
                        "NickName": "Ruby",
                        "Dep": "04",
                        "level": "03001",
                        "Slevel": "027",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "271",
                        "Name": "王姿婷",
                        "Act": "20130903",
                        "NickName": "Joanna",
                        "Dep": "04",
                        "level": "03001",
                        "Slevel": "027",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "338",
                        "Name": "黃氏添",
                        "Act": "20140611",
                        "NickName": "Rose",
                        "Dep": "04",
                        "level": "01001",
                        "Slevel": "028",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "315",
                        "Name": "衛亭伃",
                        "Act": "20140503",
                        "NickName": "小衛",
                        "Dep": "04",
                        "level": "01001",
                        "Slevel": "062",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "377",
                        "Name": "林函穎",
                        "Act": "20141104",
                        "NickName": "小穎",
                        "Dep": "04",
                        "level": "01001",
                        "Slevel": "028",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "13",
                        "palmkID": "003",
                        "LevelSq": 0
                    }
                ]
            },
            "14": {
                "id": "14",
                "Name": "波音組",
                "staff": [
                    {
                        "id": "745",
                        "Name": "楊晴羽",
                        "Act": "20170718",
                        "NickName": "晴羽",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "14",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "768",
                        "Name": "鄭思旻",
                        "Act": "20170813",
                        "NickName": "娃娃",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "14",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "806",
                        "Name": "溫羽汶",
                        "Act": "20171019",
                        "NickName": "羽汶",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "14",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "739",
                        "Name": "王鈺婷",
                        "Act": "20170712",
                        "NickName": "雪恩",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "14",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "737",
                        "Name": "陳沛漩",
                        "Act": "20170710",
                        "NickName": "Chloe",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "14",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "629",
                        "Name": "林禎綾",
                        "Act": "20161103",
                        "NickName": "Luini",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "14",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "658",
                        "Name": "杜品薇",
                        "Act": "20170209",
                        "NickName": "海妹",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "14",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "625",
                        "Name": "柏容庭",
                        "Act": "20161008",
                        "NickName": "麥麥",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "14",
                        "palmkID": "002",
                        "LevelSq": 0
                    }
                ]
            },
            "15": {
                "id": "15",
                "Name": "富博組",
                "staff": [
                    {
                        "id": "148",
                        "Name": "曾俊清",
                        "Act": "20120616",
                        "NickName": "阿清",
                        "Dep": "04",
                        "level": "02001",
                        "Slevel": "000",
                        "DirectorLevelID": "19",
                        "DirectorGroup": "0",
                        "GroupID": "15",
                        "palmkID": "002",
                        "LevelSq": "93"
                    },
                    {
                        "id": "754",
                        "Name": "裴金鳳",
                        "Act": "20170727",
                        "NickName": "金鳳",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "15",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "797",
                        "Name": "黎燈雄",
                        "Act": "20171011",
                        "NickName": "大雄",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "15",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "803",
                        "Name": "紀諾恩",
                        "Act": "20171016",
                        "NickName": "阿諾",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "15",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "660",
                        "Name": "阮氏玄",
                        "Act": "20170301",
                        "NickName": "玄",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "15",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "593",
                        "Name": "阮氏鮮",
                        "Act": "20160814",
                        "NickName": "鮮鮮",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "15",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "367",
                        "Name": "傅玉蓮",
                        "Act": "20140910",
                        "NickName": "玉蓮",
                        "Dep": "04",
                        "level": "01001",
                        "Slevel": "028",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "15",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "449",
                        "Name": "阮氏映虹",
                        "Act": "20150716",
                        "NickName": "Kendy",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "028",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "15",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "459",
                        "Name": "吳玉榮",
                        "Act": "20150809",
                        "NickName": "William",
                        "Dep": "04",
                        "level": "01000",
                        "Slevel": "028",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "15",
                        "palmkID": "003",
                        "LevelSq": 0
                    }
                ]
            },
            "InCharge": {
                "id": "InCharge",
                "Name": "中階主管以上及特別人物",
                "staff": [
                    {
                        "id": "55",
                        "Name": "王嘉鴻",
                        "Act": "20110901",
                        "NickName": "昌哥",
                        "Dep": "04",
                        "level": "07001",
                        "Slevel": "000",
                        "DirectorLevelID": "3",
                        "DirectorGroup": "1",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": "97"
                    },
                    {
                        "id": "244",
                        "Name": "李健豪",
                        "Act": "20130508",
                        "NickName": "健豪",
                        "Dep": "04",
                        "level": "05001",
                        "Slevel": "023",
                        "DirectorLevelID": "6",
                        "DirectorGroup": "1",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": "95"
                    }
                ]
            }
        }
    },
    {
        "Name": "財務部",
        "Dept": "06",
        "Group": {
            "001": {
                "id": "001",
                "Name": "早",
                "staff": [
                    {
                        "id": "836",
                        "Name": "張郁婕",
                        "Act": "19890207",
                        "NickName": "郁婕",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "045",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "832",
                        "Name": "蔡佩育",
                        "Act": "19890914",
                        "NickName": "Alice",
                        "Dep": "06",
                        "level": "01001",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "840",
                        "Name": "謝釉萱",
                        "Act": "19891027",
                        "NickName": "釉萱",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "045",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "841",
                        "Name": "朱學純",
                        "Act": "19940624",
                        "NickName": "Sharon",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "045",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "847",
                        "Name": "張乃心",
                        "Act": "19920307",
                        "NickName": "乃心",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "046",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "830",
                        "Name": "紀翔瀠",
                        "Act": "19861017",
                        "NickName": "翔瀠",
                        "Dep": "06",
                        "level": "01001",
                        "Slevel": "045",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "828",
                        "Name": "阮千紋",
                        "Act": "19841122",
                        "NickName": "千紋",
                        "Dep": "06",
                        "level": "02001",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "818",
                        "Name": "程唯雅",
                        "Act": "19891029",
                        "NickName": "唯雅",
                        "Dep": "06",
                        "level": "03001",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "817",
                        "Name": "黃雅梅",
                        "Act": "19830704",
                        "NickName": "小May",
                        "Dep": "06",
                        "level": "02001",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "822",
                        "Name": "陳思蓉",
                        "Act": "19831106",
                        "NickName": "小豬",
                        "Dep": "06",
                        "level": "02001",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "824",
                        "Name": "鄧椀如",
                        "Act": "19830801",
                        "NickName": "Mango",
                        "Dep": "06",
                        "level": "05001",
                        "Slevel": "043",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "825",
                        "Name": "黃琦芸",
                        "Act": "19760920",
                        "NickName": "小芸",
                        "Dep": "06",
                        "level": "01001",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "816",
                        "Name": "蕭文欣",
                        "Act": "19900804",
                        "NickName": "Unique",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "045",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "002": {
                "id": "002",
                "Name": "中",
                "staff": [
                    {
                        "id": "839",
                        "Name": "林玉燕",
                        "Act": "19880414",
                        "NickName": "燕燕",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "045",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "842",
                        "Name": "范育宜",
                        "Act": "19931024",
                        "NickName": "育宜",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "046",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "845",
                        "Name": "黃菲虹",
                        "Act": "19930514",
                        "NickName": "菲虹",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "046",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "846",
                        "Name": "梁韻儀",
                        "Act": "19940721",
                        "NickName": "米粒",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "838",
                        "Name": "賴信潓",
                        "Act": "19900128",
                        "NickName": "信潓",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "028",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "837",
                        "Name": "劉姿君",
                        "Act": "19891105",
                        "NickName": "花花",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "045",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "819",
                        "Name": "鐘雅姿",
                        "Act": "19890114",
                        "NickName": "雅姿",
                        "Dep": "06",
                        "level": "02001",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "821",
                        "Name": "周凡",
                        "Act": "19840110",
                        "NickName": "周凡",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "045",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "827",
                        "Name": "林莉方",
                        "Act": "19900817",
                        "NickName": "Lilian",
                        "Dep": "06",
                        "level": "03001",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "834",
                        "Name": "林筱晴",
                        "Act": "19860830",
                        "NickName": "Emily",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "028",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "814",
                        "Name": "葉冠廷",
                        "Act": "19881111",
                        "NickName": "Yeh",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    }
                ]
            },
            "003": {
                "id": "003",
                "Name": "晚",
                "staff": [
                    {
                        "id": "843",
                        "Name": "彭僈婷",
                        "Act": "19850117",
                        "NickName": "僈婷",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "844",
                        "Name": "詹雅涵",
                        "Act": "19940225",
                        "NickName": "Polly",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "848",
                        "Name": "黃浤豈",
                        "Act": "19831124",
                        "NickName": "浤豈",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "045",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "835",
                        "Name": "葉昱伶",
                        "Act": "19920126",
                        "NickName": "Lili",
                        "Dep": "06",
                        "level": "01000",
                        "Slevel": "020",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "833",
                        "Name": "阮名山",
                        "Act": "19930914",
                        "NickName": "名山",
                        "Dep": "06",
                        "level": "01001",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "829",
                        "Name": "陳翰文",
                        "Act": "19820914",
                        "NickName": "小胖",
                        "Dep": "06",
                        "level": "04000",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "831",
                        "Name": "黃薪友",
                        "Act": "19871211",
                        "NickName": "薪友",
                        "Dep": "06",
                        "level": "01001",
                        "Slevel": "045",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "826",
                        "Name": "陳怡帆",
                        "Act": "19871021",
                        "NickName": "Yvonne",
                        "Dep": "06",
                        "level": "02001",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "003",
                        "LevelSq": 0
                    }
                ]
            },
            "InCharge": {
                "id": "InCharge",
                "Name": "中階主管以上及特別人物",
                "staff": [
                    {
                        "id": "813",
                        "Name": "沈淑萍",
                        "Act": "19760621",
                        "NickName": "Apple",
                        "Dep": "06",
                        "level": "07001",
                        "Slevel": "038",
                        "DirectorLevelID": "4",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": "97"
                    },
                    {
                        "id": "823",
                        "Name": "王雅虹",
                        "Act": "19861102",
                        "NickName": "雅虹",
                        "Dep": "06",
                        "level": "05001",
                        "Slevel": "000",
                        "DirectorLevelID": "7",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": "95"
                    }
                ]
            }
        }
    },
    {
        "Name": "行銷部",
        "Dept": "03",
        "Group": {
            "1": {
                "id": "1",
                "Name": "行銷推廣組",
                "staff": [
                    {
                        "id": "256",
                        "Name": "蔡雅竹",
                        "Act": "20130805",
                        "NickName": "Lita",
                        "Dep": "03",
                        "level": "03001",
                        "Slevel": "017",
                        "DirectorLevelID": "20",
                        "DirectorGroup": "0",
                        "GroupID": "1",
                        "palmkID": "005",
                        "LevelSq": "93"
                    },
                    {
                        "id": "693",
                        "Name": "葉松蒲",
                        "Act": "20170415",
                        "NickName": "Ray",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "077",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "1",
                        "palmkID": "004",
                        "LevelSq": 0
                    },
                    {
                        "id": "84",
                        "Name": "王湘鈴",
                        "Act": "20120201",
                        "NickName": "Kiki",
                        "Dep": "03",
                        "level": "02001",
                        "Slevel": "007",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "1",
                        "palmkID": "004",
                        "LevelSq": 0
                    }
                ]
            },
            "2": {
                "id": "2",
                "Name": "創意企劃組",
                "staff": [
                    {
                        "id": "59",
                        "Name": "林筠雅",
                        "Act": "20110703",
                        "NickName": "Yaya",
                        "Dep": "03",
                        "level": "03001",
                        "Slevel": "017",
                        "DirectorLevelID": "21",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": "93"
                    },
                    {
                        "id": "687",
                        "Name": "江美",
                        "Act": "20170409",
                        "NickName": "Katie",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "019",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "681",
                        "Name": "陳鈺芬",
                        "Act": "20170403",
                        "NickName": "Aurora",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "019",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "674",
                        "Name": "王瑜雯",
                        "Act": "20170315",
                        "NickName": "小雯",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "019",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "699",
                        "Name": "羅友慈",
                        "Act": "20170421",
                        "NickName": "友慈",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "019",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "712",
                        "Name": "陳裔喬",
                        "Act": "20170513",
                        "NickName": "裔喬",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "080",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "870",
                        "Name": "陳首安",
                        "Act": "20171202",
                        "NickName": "Andy",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "018",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "760",
                        "Name": "鄭翔澤",
                        "Act": "20170805",
                        "NickName": "Mark",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "080",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "758",
                        "Name": "彭哲暄",
                        "Act": "20170803",
                        "NickName": "哲暄",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "011",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "746",
                        "Name": "胡子卬",
                        "Act": "20170719",
                        "NickName": "子卬",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "019",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "675",
                        "Name": "余欣穎",
                        "Act": "20170316",
                        "NickName": "Mio",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "018",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "639",
                        "Name": "譚釉昀",
                        "Act": "20161201",
                        "NickName": "Uri",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "011",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "350",
                        "Name": "王健安",
                        "Act": "20140706",
                        "NickName": "健安",
                        "Dep": "03",
                        "level": "01001",
                        "Slevel": "018",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "318",
                        "Name": "阮德瓊",
                        "Act": "20140506",
                        "NickName": "德瓊(Eric)",
                        "Dep": "03",
                        "level": "01001",
                        "Slevel": "018",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "302",
                        "Name": "廖胤雯",
                        "Act": "20140301",
                        "NickName": "框框",
                        "Dep": "03",
                        "level": "01001",
                        "Slevel": "018",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "437",
                        "Name": "歐孟姿",
                        "Act": "20150704",
                        "NickName": "Masaki",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "018",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "476",
                        "Name": "林威成",
                        "Act": "20151004",
                        "NickName": "阿登",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "018",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "574",
                        "Name": "王依婷",
                        "Act": "20160712",
                        "NickName": "Nikki",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "065",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "560",
                        "Name": "高嵩",
                        "Act": "20160606",
                        "NickName": "高嵩",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "011",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "481",
                        "Name": "陳妍菲",
                        "Act": "20151104",
                        "NickName": "Grace",
                        "Dep": "03",
                        "level": "04001",
                        "Slevel": "016",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "602",
                        "Name": "劉庭妤",
                        "Act": "20160902",
                        "NickName": "小飄",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "019",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "2",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "10": {
                "id": "10",
                "Name": "美術設計組",
                "staff": [
                    {
                        "id": "596",
                        "Name": "梁芝萍",
                        "Act": "20160817",
                        "NickName": "Phyllis",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "051",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "10",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "698",
                        "Name": "王韻茹",
                        "Act": "20170420",
                        "NickName": "Dora",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "052",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "10",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "533",
                        "Name": "陳孟婷",
                        "Act": "20160406",
                        "NickName": "鳥妹",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "051",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "10",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "518",
                        "Name": "姚長志",
                        "Act": "20160310",
                        "NickName": "阿志",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "051",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "10",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "493",
                        "Name": "洪耀德",
                        "Act": "20160105",
                        "NickName": "阿德",
                        "Dep": "03",
                        "level": "03001",
                        "Slevel": "051",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "10",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "626",
                        "Name": "潘祖寧",
                        "Act": "20161009",
                        "NickName": "祖寧",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "052",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "10",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "11": {
                "id": "11",
                "Name": "社群推廣組",
                "staff": [
                    {
                        "id": "1",
                        "Name": "李佳蕙",
                        "Act": "20110311",
                        "NickName": "佳蕙",
                        "Dep": "03",
                        "level": "03001",
                        "Slevel": "026",
                        "DirectorLevelID": "22",
                        "DirectorGroup": "0",
                        "GroupID": "11",
                        "palmkID": "008",
                        "LevelSq": "93"
                    },
                    {
                        "id": "686",
                        "Name": "宋寀綺",
                        "Act": "20170408",
                        "NickName": "Ula",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "078",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "11",
                        "palmkID": "004",
                        "LevelSq": 0
                    },
                    {
                        "id": "694",
                        "Name": "林季蓁",
                        "Act": "20170416",
                        "NickName": "Sunnie",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "078",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "11",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "657",
                        "Name": "陳萱淇",
                        "Act": "20170208",
                        "NickName": "Chichi",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "029",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "11",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "370",
                        "Name": "陳玟樺",
                        "Act": "20141003",
                        "NickName": "小桃",
                        "Dep": "03",
                        "level": "01001",
                        "Slevel": "028",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "11",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "301",
                        "Name": "石睿旻",
                        "Act": "20140207",
                        "NickName": "石石",
                        "Dep": "03",
                        "level": "01001",
                        "Slevel": "062",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "11",
                        "palmkID": "008",
                        "LevelSq": 0
                    },
                    {
                        "id": "335",
                        "Name": "鍾毓真",
                        "Act": "20140608",
                        "NickName": "兔兔",
                        "Dep": "03",
                        "level": "01001",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "11",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "608",
                        "Name": "王小芳",
                        "Act": "20160908",
                        "NickName": "小丸子",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "11",
                        "palmkID": "004",
                        "LevelSq": 0
                    }
                ]
            },
            "12": {
                "id": "12",
                "Name": "富博企劃組",
                "staff": [
                    {
                        "id": "665",
                        "Name": "蔡若喬",
                        "Act": "20170306",
                        "NickName": "Olivia",
                        "Dep": "03",
                        "level": "03001",
                        "Slevel": "018",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "12",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "733",
                        "Name": "簡子揚",
                        "Act": "20170706",
                        "NickName": "Young",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "009",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "12",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "747",
                        "Name": "劉孟翰",
                        "Act": "20170720",
                        "NickName": "Jacky",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "082",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "12",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "648",
                        "Name": "曾俊凱",
                        "Act": "20170103",
                        "NickName": "Marcus",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "018",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "12",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "627",
                        "Name": "李思緯",
                        "Act": "20161101",
                        "NickName": "Wayne",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "018",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "12",
                        "palmkID": "004",
                        "LevelSq": 0
                    },
                    {
                        "id": "515",
                        "Name": "鄒萬祥",
                        "Act": "20160307",
                        "NickName": "Bruce",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "018",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "12",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "556",
                        "Name": "林國暉",
                        "Act": "20160602",
                        "NickName": "馬修",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "018",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "12",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "417",
                        "Name": "鄭婉萍",
                        "Act": "20150505",
                        "NickName": "Vin",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "018",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "12",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "001": {
                "id": "001",
                "Name": "早",
                "staff": [
                    {
                        "id": "873",
                        "Name": "潘越海",
                        "Act": "20180101",
                        "NickName": "越海",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "079",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "776",
                        "Name": "林冠穎",
                        "Act": "20170906",
                        "NickName": "冠穎",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "082",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "761",
                        "Name": "劉健麟",
                        "Act": "20170806",
                        "NickName": "Allen(健麟)",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "082",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "002": {
                "id": "002",
                "Name": "中",
                "staff": [
                    {
                        "id": "871",
                        "Name": "賴鴻旻",
                        "Act": "20171203",
                        "NickName": "阿旻",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "078",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "872",
                        "Name": "李昱奇",
                        "Act": "20171204",
                        "NickName": "高能",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "078",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "791",
                        "Name": "余昌育",
                        "Act": "20171004",
                        "NickName": "昌育",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "077",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "782",
                        "Name": "魏宇鴻",
                        "Act": "20170912",
                        "NickName": "宇鴻",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "077",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "767",
                        "Name": "許鈞皓",
                        "Act": "20170812",
                        "NickName": "Ferris",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "077",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "777",
                        "Name": "蕭奕祺",
                        "Act": "20170907",
                        "NickName": "阿祺",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "077",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "723",
                        "Name": "孫佩雯",
                        "Act": "20170609",
                        "NickName": "佩雯",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "078",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "002",
                        "LevelSq": 0
                    }
                ]
            },
            "004": {
                "id": "004",
                "Name": "早-10",
                "staff": [
                    {
                        "id": "869",
                        "Name": "盧育聖",
                        "Act": "20171201",
                        "NickName": "Luyson",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "077",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "004",
                        "LevelSq": 0
                    },
                    {
                        "id": "866",
                        "Name": "卓世昕",
                        "Act": "20171118",
                        "NickName": "Steven",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "077",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "004",
                        "LevelSq": 0
                    },
                    {
                        "id": "855",
                        "Name": "陳志安",
                        "Act": "20171107",
                        "NickName": "Joe",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "077",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "004",
                        "LevelSq": 0
                    },
                    {
                        "id": "850",
                        "Name": "曾智良",
                        "Act": "20171102",
                        "NickName": "藍鵲",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "077",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "004",
                        "LevelSq": 0
                    },
                    {
                        "id": "749",
                        "Name": "詹凱婷",
                        "Act": "20170722",
                        "NickName": "Kai",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "077",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "004",
                        "LevelSq": 0
                    }
                ]
            },
            "005": {
                "id": "005",
                "Name": "中-13",
                "staff": [
                    {
                        "id": "706",
                        "Name": "黃軍豪",
                        "Act": "20170507",
                        "NickName": "軍豪",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "072",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "005",
                        "LevelSq": 0
                    },
                    {
                        "id": "525",
                        "Name": "陳彥廷",
                        "Act": "20160317",
                        "NickName": "彥廷",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "005",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "005",
                        "LevelSq": 0
                    }
                ]
            },
            "008": {
                "id": "008",
                "Name": "中-14",
                "staff": [
                    {
                        "id": "704",
                        "Name": "陳穎倫",
                        "Act": "20170505",
                        "NickName": "Mandy",
                        "Dep": "03",
                        "level": "01000",
                        "Slevel": "078",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "008",
                        "LevelSq": 0
                    }
                ]
            },
            "InCharge": {
                "id": "InCharge",
                "Name": "中階主管以上及特別人物",
                "staff": [
                    {
                        "id": "252",
                        "Name": "蘇彥榮",
                        "Act": "20130802",
                        "NickName": "Kevin",
                        "Dep": "03",
                        "level": "05001",
                        "Slevel": "071",
                        "DirectorLevelID": "8",
                        "DirectorGroup": "1",
                        "GroupID": "0",
                        "palmkID": "005",
                        "LevelSq": "95"
                    }
                ]
            }
        }
    },
    {
        "Name": "資訊部",
        "Dept": "08",
        "Group": {
            "4": {
                "id": "4",
                "Name": "MIS組",
                "staff": [
                    {
                        "id": "207",
                        "Name": "王逸豐",
                        "Act": "20130701",
                        "NickName": "Jerry",
                        "Dep": "08",
                        "level": "04000",
                        "Slevel": "055",
                        "DirectorLevelID": "15",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "004",
                        "LevelSq": "94"
                    },
                    {
                        "id": "796",
                        "Name": "賴姵伃",
                        "Act": "20171009",
                        "NickName": "姵姵",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "073",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "774",
                        "Name": "徐子皓",
                        "Act": "20170904",
                        "NickName": "Harry",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "765",
                        "Name": "傅義軒",
                        "Act": "20170810",
                        "NickName": "小軒",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "809",
                        "Name": "張智麒",
                        "Act": "20171021",
                        "NickName": "智麒",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "073",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "851",
                        "Name": "陳佳煒",
                        "Act": "20171103",
                        "NickName": "佳煒",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "073",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "875",
                        "Name": "黃為偉",
                        "Act": "20180103",
                        "NickName": "Hugo",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "057",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "862",
                        "Name": "曾子軒",
                        "Act": "20171114",
                        "NickName": "Charel",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "073",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "861",
                        "Name": "呂宛妮",
                        "Act": "20171113",
                        "NickName": "Annie",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "073",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "852",
                        "Name": "楊詠霖",
                        "Act": "20171104",
                        "NickName": "詠霖",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "073",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "002",
                        "LevelSq": 0
                    },
                    {
                        "id": "762",
                        "Name": "陳宏軒",
                        "Act": "20170807",
                        "NickName": "小陳",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "702",
                        "Name": "林佐展",
                        "Act": "20170503",
                        "NickName": "佐佐",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "523",
                        "Name": "蔡依宏",
                        "Act": "20160315",
                        "NickName": "依宏",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "520",
                        "Name": "許修綸",
                        "Act": "20160312",
                        "NickName": "Paul",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "463",
                        "Name": "潘震東",
                        "Act": "20150812",
                        "NickName": "震東",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "057",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "306",
                        "Name": "許杏如",
                        "Act": "20140305",
                        "NickName": "杏如",
                        "Dep": "08",
                        "level": "01001",
                        "Slevel": "073",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "589",
                        "Name": "吳浲氶",
                        "Act": "20160810",
                        "NickName": "浲氶",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "630",
                        "Name": "林昆慶",
                        "Act": "20161104",
                        "NickName": "Nivek",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "691",
                        "Name": "張忠和",
                        "Act": "20170413",
                        "NickName": "忠和",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "056",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "656",
                        "Name": "吳振霆",
                        "Act": "20170207",
                        "NickName": "振霆",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "003",
                        "LevelSq": 0
                    },
                    {
                        "id": "652",
                        "Name": "羅仕賢",
                        "Act": "20170203",
                        "NickName": "仕賢",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "741",
                        "Name": "王聖元",
                        "Act": "20170714",
                        "NickName": "聖元",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "4",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "5": {
                "id": "5",
                "Name": "內部系統組",
                "staff": [
                    {
                        "id": "766",
                        "Name": "林呈儒",
                        "Act": "20170811",
                        "NickName": "Abel",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "5",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "772",
                        "Name": "李泳霖",
                        "Act": "20170902",
                        "NickName": "Louis",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "5",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "787",
                        "Name": "吳苑瑜",
                        "Act": "20170917",
                        "NickName": "Sues",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "5",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "789",
                        "Name": "曾建樺",
                        "Act": "20171002",
                        "NickName": "建樺",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "5",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "730",
                        "Name": "李怡佳",
                        "Act": "20170703",
                        "NickName": "怡佳",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "5",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "729",
                        "Name": "林暐茞",
                        "Act": "20170702",
                        "NickName": "Wilson",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "5",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "448",
                        "Name": "顏士傑",
                        "Act": "20150715",
                        "NickName": "士傑",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "5",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "474",
                        "Name": "王上仁",
                        "Act": "20151002",
                        "NickName": "上仁",
                        "Dep": "08",
                        "level": "03001",
                        "Slevel": "056",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "5",
                        "palmkID": "004",
                        "LevelSq": 0
                    },
                    {
                        "id": "509",
                        "Name": "陳彥彬",
                        "Act": "20160301",
                        "NickName": "彥彬",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "057",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "5",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "715",
                        "Name": "賴怡安",
                        "Act": "20170601",
                        "NickName": "Owen",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "5",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "447",
                        "Name": "張乃予",
                        "Act": "20150714",
                        "NickName": "乃予",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "5",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "6": {
                "id": "6",
                "Name": "平台開發組",
                "staff": [
                    {
                        "id": "727",
                        "Name": "賴秉霖",
                        "Act": "20170613",
                        "NickName": "秉霖",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "6",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "732",
                        "Name": "黃政傑",
                        "Act": "20170705",
                        "NickName": "政傑",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "6",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "622",
                        "Name": "王呈佑",
                        "Act": "20161005",
                        "NickName": "CK",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "057",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "6",
                        "palmkID": "004",
                        "LevelSq": 0
                    },
                    {
                        "id": "597",
                        "Name": "倪端廷",
                        "Act": "20160818",
                        "NickName": "Yoz",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "6",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "585",
                        "Name": "林岡蓁",
                        "Act": "20160806",
                        "NickName": "Jenny",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "6",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "393",
                        "Name": "董怡君",
                        "Act": "20150307",
                        "NickName": "阿倫",
                        "Dep": "08",
                        "level": "03001",
                        "Slevel": "056",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "6",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "20": {
                "id": "20",
                "Name": "前端組",
                "staff": [
                    {
                        "id": "700",
                        "Name": "陳明發",
                        "Act": "20170501",
                        "NickName": "Roy",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "20",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "710",
                        "Name": "洪承泓",
                        "Act": "20170511",
                        "NickName": "承泓",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "20",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "784",
                        "Name": "林淳嫺",
                        "Act": "20170914",
                        "NickName": "小嫺",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "074",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "20",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "682",
                        "Name": "傅建璋",
                        "Act": "20170404",
                        "NickName": "Rex",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "052",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "20",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "643",
                        "Name": "朱美雯",
                        "Act": "20161205",
                        "NickName": "Demon",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "051",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "20",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "436",
                        "Name": "楊依倫",
                        "Act": "20150703",
                        "NickName": "依倫",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "074",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "20",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "521",
                        "Name": "許菱芷",
                        "Act": "20160313",
                        "NickName": "OV",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "074",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "20",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "435",
                        "Name": "許佳修",
                        "Act": "20150702",
                        "NickName": "佳修",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "074",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "20",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "21": {
                "id": "21",
                "Name": "彩票遊戲開發組",
                "staff": [
                    {
                        "id": "731",
                        "Name": "陳玉靈",
                        "Act": "20170704",
                        "NickName": "玉靈",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "21",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "728",
                        "Name": "呂逸婷",
                        "Act": "20170701",
                        "NickName": "兔紙",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "21",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "701",
                        "Name": "余杰勳",
                        "Act": "20170502",
                        "NickName": "大大",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "21",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "584",
                        "Name": "許睿芫",
                        "Act": "20160805",
                        "NickName": "肉圓",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "21",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "359",
                        "Name": "羅文鉦",
                        "Act": "20140901",
                        "NickName": "文鉦",
                        "Dep": "08",
                        "level": "03001",
                        "Slevel": "056",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "21",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "22": {
                "id": "22",
                "Name": "遊戲開發組",
                "staff": [
                    {
                        "id": "205",
                        "Name": "徐協群",
                        "Act": "20130506",
                        "NickName": "Arthur",
                        "Dep": "08",
                        "level": "04001",
                        "Slevel": "055",
                        "DirectorLevelID": "16",
                        "DirectorGroup": "0",
                        "GroupID": "22",
                        "palmkID": "004",
                        "LevelSq": "94"
                    },
                    {
                        "id": "788",
                        "Name": "林承德",
                        "Act": "20171001",
                        "NickName": "大K",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "22",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "779",
                        "Name": "楊謦維",
                        "Act": "20170909",
                        "NickName": "大維",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "22",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "742",
                        "Name": "黃文奇",
                        "Act": "20170715",
                        "NickName": "文奇",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "22",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "722",
                        "Name": "吳家陞",
                        "Act": "20170608",
                        "NickName": "家陞",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "22",
                        "palmkID": "004",
                        "LevelSq": 0
                    }
                ]
            },
            "23": {
                "id": "23",
                "Name": "測試組",
                "staff": [
                    {
                        "id": "31",
                        "Name": "林侑立",
                        "Act": "20110204",
                        "NickName": "侑立",
                        "Dep": "08",
                        "level": "04001",
                        "Slevel": "055",
                        "DirectorLevelID": "17",
                        "DirectorGroup": "0",
                        "GroupID": "23",
                        "palmkID": "001",
                        "LevelSq": "94"
                    },
                    {
                        "id": "794",
                        "Name": "邱義煜",
                        "Act": "20171007",
                        "NickName": "義煜",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "23",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "795",
                        "Name": "張凱雁",
                        "Act": "20171008",
                        "NickName": "凱雁",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "23",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "756",
                        "Name": "胡祐禎",
                        "Act": "20170801",
                        "NickName": "Vania",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "018",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "23",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "692",
                        "Name": "李雅芸",
                        "Act": "20170414",
                        "NickName": "雅芸",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "073",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "23",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "264",
                        "Name": "陳思涵",
                        "Act": "20130810",
                        "NickName": "Angela",
                        "Dep": "08",
                        "level": "03001",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "23",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "685",
                        "Name": "陳紫婕",
                        "Act": "20170407",
                        "NickName": "紫婕",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "073",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "23",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "748",
                        "Name": "陳珮瑜",
                        "Act": "20170721",
                        "NickName": "珮瑜",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "23",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "24": {
                "id": "24",
                "Name": "系統客服組",
                "staff": [
                    {
                        "id": "661",
                        "Name": "陳惠旻",
                        "Act": "20170302",
                        "NickName": "Mira",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "073",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "24",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "272",
                        "Name": "陳婉婷",
                        "Act": "20130905",
                        "NickName": "Celvia",
                        "Dep": "08",
                        "level": "02001",
                        "Slevel": "073",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "24",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "001": {
                "id": "001",
                "Name": "早",
                "staff": [
                    {
                        "id": "876",
                        "Name": "陳俊嘉",
                        "Act": "20180104",
                        "NickName": "Chris",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "083",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "864",
                        "Name": "陀濟瑞",
                        "Act": "20171116",
                        "NickName": "濟瑞",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "058",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "854",
                        "Name": "張正宇",
                        "Act": "20171106",
                        "NickName": "Jupiter",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "057",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "849",
                        "Name": "陳仲成",
                        "Act": "20171101",
                        "NickName": "阿成",
                        "Dep": "08",
                        "level": "01000",
                        "Slevel": "051",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "10",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "InCharge": {
                "id": "InCharge",
                "Name": "中階主管以上及特別人物",
                "staff": [
                    {
                        "id": "50",
                        "Name": "邱鈺婷",
                        "Act": "20110508",
                        "NickName": "Ivy",
                        "Dep": "08",
                        "level": "05001",
                        "Slevel": "069",
                        "DirectorLevelID": "9",
                        "DirectorGroup": "1",
                        "GroupID": "24",
                        "palmkID": "001",
                        "LevelSq": "95"
                    }
                ]
            }
        }
    },
    {
        "Name": "人資部",
        "Dept": "05",
        "Group": {
            "25": {
                "id": "25",
                "Name": "活動組",
                "staff": [
                    {
                        "id": "647",
                        "Name": "賴昊恩",
                        "Act": "20170102",
                        "NickName": "Ace",
                        "Dep": "05",
                        "level": "01000",
                        "Slevel": "011",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "25",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "001": {
                "id": "001",
                "Name": "早",
                "staff": [
                    {
                        "id": "793",
                        "Name": "杜咸沁",
                        "Act": "20171006",
                        "NickName": "Cheryl",
                        "Dep": "05",
                        "level": "01000",
                        "Slevel": "037",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "618",
                        "Name": "陳思伃",
                        "Act": "20161001",
                        "NickName": "Elsa",
                        "Dep": "05",
                        "level": "01000",
                        "Slevel": "036",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "601",
                        "Name": "李欣芮",
                        "Act": "20160901",
                        "NickName": "Vivi",
                        "Dep": "05",
                        "level": "01000",
                        "Slevel": "037",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "453",
                        "Name": "何依潔",
                        "Act": "20150803",
                        "NickName": "Nora",
                        "Dep": "05",
                        "level": "01000",
                        "Slevel": "036",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "InCharge": {
                "id": "InCharge",
                "Name": "中階主管以上及特別人物",
                "staff": [
                    {
                        "id": "49",
                        "Name": "王淑慧",
                        "Act": "20110505",
                        "NickName": "Sandy",
                        "Dep": "05",
                        "level": "05001",
                        "Slevel": "031",
                        "DirectorLevelID": "12",
                        "DirectorGroup": "1",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": "95"
                    }
                ]
            }
        }
    },
    {
        "Name": "總務組",
        "Dept": "09",
        "Group": {
            "001": {
                "id": "001",
                "Name": "早",
                "staff": [
                    {
                        "id": "860",
                        "Name": "張芸慈",
                        "Act": "20171112",
                        "NickName": "小慈",
                        "Dep": "09",
                        "level": "01000",
                        "Slevel": "061",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "624",
                        "Name": "寇嘉麟",
                        "Act": "20161007",
                        "NickName": "Nina",
                        "Dep": "09",
                        "level": "01000",
                        "Slevel": "061",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "485",
                        "Name": "藍巧玲",
                        "Act": "20151203",
                        "NickName": "巧玲",
                        "Dep": "09",
                        "level": "01000",
                        "Slevel": "061",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "480",
                        "Name": "吳彤",
                        "Act": "20151103",
                        "NickName": "瑞瑞",
                        "Dep": "09",
                        "level": "01000",
                        "Slevel": "061",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "444",
                        "Name": "顏翎育",
                        "Act": "20150711",
                        "NickName": "小米",
                        "Dep": "09",
                        "level": "01000",
                        "Slevel": "061",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            }
        }
    },
    {
        "Name": "秘書部",
        "Dept": "02",
        "Group": {
            "001": {
                "id": "001",
                "Name": "早",
                "staff": [
                    {
                        "id": "22",
                        "Name": "黃昭銓",
                        "Act": "20101101",
                        "NickName": "阿銓",
                        "Dep": "02",
                        "level": "03001",
                        "Slevel": "005",
                        "DirectorLevelID": "18",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": "93"
                    },
                    {
                        "id": "780",
                        "Name": "林銘傑",
                        "Act": "20170910",
                        "NickName": "銘傑",
                        "Dep": "02",
                        "level": "01000",
                        "Slevel": "005",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            },
            "InCharge": {
                "id": "InCharge",
                "Name": "中階主管以上及特別人物",
                "staff": [
                    {
                        "id": "3",
                        "Name": "張福舜",
                        "Act": "20100103",
                        "NickName": "Billy+",
                        "Dep": "02",
                        "level": "05001",
                        "Slevel": "004",
                        "DirectorLevelID": "5",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "004",
                        "LevelSq": "97"
                    }
                ]
            }
        }
    },
    {
        "Name": "大陸推廣組",
        "Dept": "16",
        "Group": {
            "001": {
                "id": "001",
                "Name": "早",
                "staff": [
                    {
                        "id": "867",
                        "Name": "游紘裕",
                        "Act": "20171119",
                        "NickName": "紘裕",
                        "Dep": "16",
                        "level": "01000",
                        "Slevel": "011",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "868",
                        "Name": "張逸",
                        "Act": "20171120",
                        "NickName": "張逸",
                        "Dep": "16",
                        "level": "01000",
                        "Slevel": "011",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "859",
                        "Name": "張薷均",
                        "Act": "20171111",
                        "NickName": "小珍",
                        "Dep": "16",
                        "level": "01000",
                        "Slevel": "011",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "856",
                        "Name": "林秀柔",
                        "Act": "20171108",
                        "NickName": "秀柔",
                        "Dep": "16",
                        "level": "01000",
                        "Slevel": "078",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "707",
                        "Name": "李宗潔",
                        "Act": "20170508",
                        "NickName": "宗潔",
                        "Dep": "16",
                        "level": "01000",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "805",
                        "Name": "葉鴻文",
                        "Act": "20171018",
                        "NickName": "鴻文",
                        "Dep": "16",
                        "level": "01000",
                        "Slevel": "000",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    },
                    {
                        "id": "531",
                        "Name": "張鳳瓊",
                        "Act": "20160404",
                        "NickName": "張靜",
                        "Dep": "16",
                        "level": "01000",
                        "Slevel": "011",
                        "DirectorLevelID": "0",
                        "DirectorGroup": "0",
                        "GroupID": "0",
                        "palmkID": "001",
                        "LevelSq": 0
                    }
                ]
            }
        }
    }
]
