/*-----全域變數 calendar -----*/
var slideMove,  // 有觸發上方週滑動效過
    slideChk  = false,  // 有點選LI
    monthChk  = false,  // 月曆內點選日期時，判斷內容
    winLoad   = false,  // 頁面是否重新載入 預設false  
    dayClass,           // 點選到的日期 
    slider_num,         // 從上方下拉月曆選擇日期時，判斷變數
    clickNum,           // 抓取當天日期curr_num的值 對應滑動效果 cal_block.cal_content
    week_num,           // 判斷抓取的月份與日期 並把週顯示show該選擇的日期與週
    loadWeek_num,       // 第幾週
    nextYmd,            // 判斷是否是第一次載入
    // 抓取時間
    $time     = new Date(),
    $year     = $time.getFullYear(),
    $month    = $time.getMonth() + 1 < 10 ? '0' + ($time.getMonth() + 1) : $time.getMonth() + 1,
    $day      = $time.getDate(),
    yearDay   = $year + $month,
    ymd,                // 年月日
    slideType,          // 月曆內點選日期時，判斷內容
    thisDay,            //判斷點選日期
    noteType = true,    // 點選時，判斷是在條列式還是便利貼，並重新載入資料
    g_Year,
    g_minth,
    g_day,
    mv_year,
    mv_month;

// 日顯示選單切換
var btn_name;
var memberPage;


// 新增行程
var hasData       = false;
var s_time        = "10";
var e_time        = "12";
var roomName      = "A1-1";
var ov_dayObj     = "2018年 01月 21日";
var ov_roomObj    = "大會議室";
var ov_timeObj    = [];
var chk_repeat    = 'everyweek'; //點選重覆的值
var hasChk_repeat = false;    //有點選重覆
var repeat_status = true;
var re_loadInput;
var ov_s_time;
var ov_e_time;
var ov_room_name;

//搜尋 - 新增與會人員
var perName = [];  

//設定
var $all;

/*-----全域變數 calendar end-----*/

var curr_numObj = {
    "01": 1,
    "02": 2,
    "03": 3,
    "04": 4,
    "05": 5,
    "06": 6,
    "07": 7,

    "08": 1,
    "09": 2,
    "10": 3,
    "11": 4,
    "12": 5,
    "13": 6,
    "14": 7,

    "15": 1,
    "16": 2,
    "17": 3,
    "18": 4,
    "19": 5,
    "20": 6,
    "21": 7,

    "22": 1,
    "23": 2,
    "24": 3,
    "25": 4,
    "26": 5,
    "27": 6,
    "28": 7,

    "29": 1,
    "30": 2,
    "31": 3,
}
/* ---------------------------
          換頁區塊
-----------------------------*/
//側邊選單內容載入
var pageSlide = function () {
    var $this = this;
    this.goPage = function (page) {
        $.post(astraysoul.github.io/page/page + '.html', {}, function (pg) {
            $('.slideNav').html(pg);
        });
    }
    this.init = function () {
        $this.goPage('slideNav');
    }
    $this.init();
}
pageSlide();

// 頁面切換 - 存取瀏覽過的頁面資料
var pageHistory = [];
// 本機測試
var pageChange_locat = function () {
    var $this = this;
    var page;
    this.goPage = function (page) {
        pageHistory.push(page)
        $.post(page + '.html', {}, function (pg) {
            $('.page').html(pg);
        });
    }
    this.init = function () {
        $this.goPage('calendar');

        $('footer').on('click', 'button', function (event) {
            var clss_type = $(this).attr('class')
            //底部按鈕 判斷
            if( clss_type === 'calendarbtn active' ){
                $('.slide-nav-bg').fadeIn();
            }
            if( $(this).hasClass('calendarbtn active') ){
                //日選單條件show
                $('.slide-nav').fadeIn();
                $('.calendar-box').stop().animate({ 'bottom': 0 },500,'swing');
                return false;
            }    
            $(this).each(function(){
                if( $('footer button').hasClass('active') ){
                    $('footer button').removeClass('active') 
                    $(this).addClass('active');
                }
            });
            page = $(this).attr('id');
            $this.goPage(page);
        });

    }
    $this.init();
}
var pageCal = new pageChange_locat();

// 線上測試
// var pageChange_locat = function () {
//     var pageHistory = {};
//     var $this = this;
//     var page;
//     this.goPage = function (page) {
//         var burl = 'http://' + location.hostname + '/rex/calendar_mobile/';
//         $.post(burl + page + '.html', {}, function (pg) {
//             $('.page').html(pg);
//             var preHref = burl + '#' + page;
//             window.history.pushState({preHref: preHref}, 0, preHref);
//         });
//     }
//     this.init = function () {
//         //一開始要顯示的頁面
//         if (location.hash) {
//             hash = location.hash.slice(1);
//             $this.goPage(hash);
//         } else {
//         	$this.goPage('calendar');
//         }

//         $('footer').on('click', 'button', function (event) {
//             var clss_type = $(this).attr('class')
//             var page = $(this).attr('id');
//             //底部按鈕 判斷
//             if( clss_type === 'calendarbtn active' ){
//                 $('.slide-nav-bg').fadeIn();
//             }
//             if( $(this).hasClass('calendarbtn active') ){
//                 //日選單條件show
//                 $('.slide-nav').fadeIn();
//                 $('.calendar-box').stop().animate({ 'bottom': 0 },500,'swing');
//                 return false;
//             }    
//             $(this).each(function(){
//                 if( $('footer button').hasClass('active') ){
//                     $('footer button').removeClass('active') 
//                     $(this).addClass('active');
//                 }
//             });
//             $this.goPage(page);
//         });

//     }
//     $this.init();
// }
// var pageCal = new pageChange_locat();

// 日顯示條件點選時，重新抓取上方日期
var btn_cag = function(btn_name){           
    var Chk_D;
    $('.cal-block div').remove();
    $('.slidebox ul li.active').each(function(){
        Chk_D = $(this).attr('data-day');
    });
    // 判斷 點選按鈕
    if( btn_name === 'note-show'){ 
        noteType = true;
        stickyFn.sky_date(ymd = String($year + $month + Chk_D));

    }else if( btn_name === 'article-show'){
        noteType = false;
        stickyFn.at_date(ymd = String($year + $month + Chk_D));
    }
}
//add 側邊選單 resize
var addSlide = function(){
    var $this = this;
    this.slideAdd_h = function(){
        var slideAdd = $('.slide-add').height();
            slideAdd_con  = $('.slideadd-content');
            slideAdd_top  = $('.slideadd-top p').outerHeight();
            slideAdd_btn  = $('.slide-add-btn').outerHeight();
            contentHeight = slideAdd - slideAdd_top - slideAdd_btn - 11;
        slideAdd_con.css({'height':contentHeight});
    }
    $this.slideAdd_h();
}
addSlide();

/* ---------------------------
        resize 區塊
------------------------------*/
//resize for folder
var re_window = function(pgTarget){

    var $this = this;
    this.maxHeight = function (){
        var $height = $(window).height();
        var $header = Math.ceil($('.top-menu').outerHeight());
        var $topbar = Math.ceil($('.topBtn').outerHeight());
        var $footer = Math.ceil($('footer').outerHeight());
        var pageHeight = Math.ceil( $height - $header - $topbar - $footer);
        pgTarget.css({'height': pageHeight});

        $(window).resize(function(){
            var $re_height = $(window).height();
            var $re_header = Math.ceil($('.top-menu').outerHeight());
            var $re_topbar = Math.ceil($('.topBtn').outerHeight());
            var $re_footer = Math.ceil($('footer').outerHeight());
            var re_pageHeight = Math.ceil( $re_height - $re_header - $re_topbar - $re_footer);
            pgTarget.css({'height': re_pageHeight}) 
        });
    }
    $this.maxHeight();
}

//resize for other
var re_window_other = function(pgTarget){

    var $this = this;
    this.maxHeight = function (){
        var $height = $(window).height();
        var $header = Math.ceil($('.top-menu').outerHeight());
        var $footer = Math.ceil($('footer').outerHeight());
        var pageHeight = Math.ceil( $height - $header - $footer +5);
        pgTarget.css({'height': pageHeight})

        $(window).resize(function(){
            var $re_height = $(window).height();
            var $re_header = Math.ceil($('.top-menu').outerHeight());
            var $re_footer = Math.ceil($('footer').outerHeight());
            var re_pageHeight = Math.ceil( $re_height - $re_header - $re_footer +5);
            pgTarget.css({'height': re_pageHeight}) 
        });
    }
    $this.maxHeight();
}

//resize for addpage,roompage
var re_window_add = function(pgTarget){

    var $this = this;
    var attr = pgTarget.attr('class');

    this.maxHeight = function (){
        var $height = $(window).height();
        var $header = Math.ceil($('.top-menu').outerHeight());
        var $footer;
        
        if( attr === 'add-page'){
            $footer = Math.ceil($('.add-btn').outerHeight());
        }else if( attr === 'room-page' ){
            $footer = Math.ceil($('.room-btn').outerHeight());
        }
        
        var pageHeight = Math.ceil( $height - $header - $footer + 5);
        pgTarget.css({'height': pageHeight});

        $(window).resize(function(){
            var $re_height = $(window).height();
            var $re_header = Math.ceil($('.top-menu').outerHeight());
            var $re_footer;

            if( attr === 'add-page'){
                $re_footer = Math.ceil($('.add-btn').outerHeight());
            }else if( attr === 'room-page' ){
                $re_footer = Math.ceil($('.room-btn').outerHeight());
            }
            
            var re_pageHeight = Math.ceil( $re_height - $re_header - $re_footer + 5);
            pgTarget.css({'height': re_pageHeight}) 
        });
    }
    $this.maxHeight();
}

/*-- 搜尋 --*/
var searchFn = function () {
    var $this     = this,
        getData   = false,
        switchBtn = false;

    //計算content高度
    var wh      = $(window).height(),
        headH   = $('.gray_top').height(),
        resultH = $('.search_result').height(),
        conH;

    conH = wh - (headH + resultH);
    $('div.result_outside').css('height', conH);

    //一進來就秀之前搜尋的六筆歷史紀錄
    this.hisTd = function () {
        var sInput  = $('.ipt_box').find('input[name="cancel"]'),
            searchB = $('.keywrod'),
            LiNum;

        sInput.val(''); //關掉就清掉文字
        //產歷史紀錄
        for (i = 0; i < record_data.length; i++) {
            var _key  = record_data[i]["key"], //印出陣列key值
                _span = $('<span/>'),
                _Li   = $('<li/>'),
                _a    = $('<a href="javascript:void(0);"/>').attr('class', 'search_close');

            _span.append(_key);
            $(_a).append('X');
            _Li.append(_span).append(_a);
            $('.record_tab ul').append(_Li);
            //只秀出6筆資料
            record_data.length = 6;

            //預設打開page (恢復預設)
            $('.record_tab,.clear_line,.keywrod').show(); //加回來
            $('.result_tab,.search_result').hide();
            $('#next').hide();
        }

        // X按鈕刪除紀錄
        $('.record_tab ul li a').each(function (index, el) {

            $(this).on('click', function () {
                var LiNum = $('.record_tab ul li a').length;
                $(el).parent('li').remove();

                LiNum--; //每次都減掉1
                //判斷li是否為0
                if (LiNum == 0) {
                    $('.clear_line').hide();
                } else {
                    $('.clear_line').show();
                }
            });
        });
        //全部清除
        $('.clear_line a.clear').on('click', function () {
            $('.record_tab ul li').remove();
            $('.clear_line').hide();
        });
        //開啟搜尋紀錄page
        sInput.on('change', function (e) {
            hisAct();

            //原生鍵盤回縮
            // document.activeElement.blur();
            sInput.blur();
        });
    };
    this.hisAct = function () {
        //輸入文字後
        $('.record_tab').hide();
        $('.result_tab,.search_result').show();
    };
    this.scrollChk = function () {

        $('.result_outside').scroll(function () {
            var $this        = $(this),
                scrollTop    = $(this).scrollTop(),
                divH         = $(this).height(),
                nScrollHight = $(this)[0].scrollHeight, //滾動軸高度
                nScrollTop   = $(this)[0].scrollTop; //滾動軸到div頂部高度

            nScrollHight -= 80;

            //捲動到底部時
            if (nScrollTop + divH >= nScrollHight) {
                //load第一次資料後 把getData 改true
                if (getData) {
                    return
                }
                getData = true;

                $('#next').fadeOut().fadeIn(); //loading...
                infin(); //再送ajax糗資料
            }
        });
    };
    //搜尋後資料列表
    this.dataList = function (objData) {

        //動態塞入資料
        $.each(objData, function (index, el) {
            var _span       = el["type"],
                _date       = el["date"],
                _time       = el["time"],
                _topic      = el["topic"],
                _location   = el["location"],
                _collection = el["Collection"];

            var _tr1  = $('<tr/>'),
                _tr2  = $('<tr/>'),
                _tr3  = $('<tr/>'),
                _tr4  = $('<tr/>'),
                _td1  = $('<td/>').attr('colspan', '2').addClass('list_txt1').html(_date),
                _td2  = $('<td/>').attr('colspan', '2').addClass('list_txt2').html(_time),
                _td3  = $('<td/>').attr('colspan', '2').addClass('list_txt3').html(_topic),
                _td4  = $('<td/>').addClass('td_4').html('<span class="icon-loction"></span>' + _location),
                _td42 = $('<td/>').addClass('td_4_2').html(_collection);

            _tr1.append(_td1);
            _tr2.append(_td2);
            _tr3.append(_td3);
            _tr4.append(_td4).append(_td42);

            var rightDiv = $('<div/>').addClass('item_r'),
                _table = $('<table/>').attr('border', '0'),
                _tbody = $('<tbody/>');

            _tbody.append(_tr1).append(_tr2).append(_tr3).append(_tr4);
            _table.append(_tbody);
            rightDiv.append(_table);

            //左側 會議總類
            var sDiv = $('<div/>').addClass('search_list'),
                leftDiv = $('<div/>').addClass('item_l').html('<span>' + _span + '</span>');

            sDiv.append(leftDiv).append(rightDiv);
            $('section.search_bar .result_tab').append(sDiv);
        });
        getData = false;
    };
    //infinite scroll
    this.infin = function () {
        //取得搜尋後的資料物件
        $.ajax({
            type: 'POST',
            // url: 'http://fun.bobole.info/roy/calendar_mobile/assets/js/js.json',
            url: 'http://127.0.0.1/calendar_mobile/assets/js/js.json',
            success: function (data) {
                var objData = data; //接收json資料
                dataList(objData); //傳值給dataList()
            },
            error: function () {
                alert('沒有連上伺服器端');
            }
        }).always(function () {
            //沒有資料 開關=false
            switchBtn = false; //資料請求中 使其不能重複請求
        });

    };
    //初始化
    this.init = function () {
        $('.search_bar').fadeIn(300);

        $this.hisTd();
        $this.scrollChk();
        $this.infin();
        // $this.countH();
    }
    $this.init();
}

//與會人員
var chkPerson = function () {
    var that = this;
    var iptAll = $('input[id="selectAllGroup"]'),
        sChief = $('input[id="selectChief"]');

    this.addPer = function () {
        // 產資料表格
        for (var i in per) {
            var dept     = per[i]; //取得per所有物件資料
            var dataBox  = $('<div id="group"/>')
            //產表格
            var titleDiv = $('<div/>').attr('class', 'css_tr');
            var depDiv   = $('<div class="css_td td_title"/>');
            var _label   = $('<label class="ad_w"/>')
                                .append('<input type="checkbox" name="t3" class="groupBtn">')
                                .append('<i/>')
                            .append('<span>' + dept.Name + '</span>');

            titleDiv.append(depDiv.append(_label));
            dataBox.append(titleDiv)
            $('.person_box').append(dataBox);

            var chief = '<div class="css_tr">';
            chief += '<div class="css_td data_line incharge">';
            //產主管
            $.each(dept['Group'], function (index, el) {

                if (index == 'InCharge') {
                    $.each(el.staff, function (index, el) {
                        chief += '<label><input type="checkbox" name="" ><i></i><span>'+ el.NickName + '</span></label>';
                    });
                }
            });
            chief += '</div></div>';
            dataBox.append(chief)
            $('.person_box').append(dataBox);

            var team = '<div class="organize">';
            //產組員
            $.each(dept['Group'], function (index, el) {

                if (index != 'InCharge') {
                    //產組別
                    team += '<div class="data_group">';
                    team += '<div class="css_tr chief td_title">';
                    team += '<label class="add_w"><input type="checkbox" name=""><i></i><span>' + el.Name + '</span></label>';
                    team += '</div>';
                    team += '<div class="css_tr">';
                    team += '<div class="css_td data_line">';
                    $.each(el.staff, function (index, el) {
                        // console.log(el.NickName);
                        team += '<label><input type="checkbox" name=""><i></i><span>' + el.NickName + '</span></label>';
                    });
                    team += '</div></div></div>';
                }
            });
            team += '</div>';
            dataBox.append(team);
            $('.person_box').append(dataBox);
        }

        this.chkIpt = function () {
            var incharge = $('div.incharge input'),
                allChk = $('div.data_line input'),
                _group = $('div#group');

            //input chk全選所有人員
            iptAll.on('click', function () {
                var chk = $(this).prop('checked');
                if (chk) {
                    allChk.prop('checked', true);
                } else {
                    allChk.prop('checked', false);
                }
            });
            //選所有主管
            sChief.on('click', function () {
                var chiefChk = $(this).prop('checked');
                if (chiefChk) {
                    incharge.prop('checked', true);
                } else {
                    incharge.prop('checked', false);
                }
            });
            //選取各當下部門所有人員
            $.each(_group, function (index, elm) {
                // console.log(elm);
                var _thisIpt = $(elm).find('input[class="groupBtn"]');

                _thisIpt.on('click', function () {
                    var _input   = $(this).prop('checked'),
                        _thisPar = $(this).parents('#group');

                    if (_input) {
                        _thisPar.find('.incharge input').prop('checked', true);
                        _thisPar.find('.organize .data_line input').prop('checked', true);
                    } else {
                        _thisPar.find('.incharge input').prop('checked', false);
                        _thisPar.find('.organize .data_line input').prop('checked', false);
                    }
                });
                $.each($(elm), function (index, self) {
                    var organize = $(self).find('.organize .data_group');

                    $.each(organize, function (index, org) {
                        var dGroup = $(org).find('.chief label input');
                        dGroup.on('click', function () {

                            if (dGroup.prop('checked')) {
                                $(org).find('.data_line input').prop('checked', true);
                            } else {
                                $(org).find('.data_line input').prop('checked', false);
                            }
                        })
                    });
                });
            });
            //送出按鈕
            $('.sub_inner a:last-child').on('click', function () {
                var save = [];
                $.each(_group, function (index, chk) {
                    var thisChk  = $(chk).find('.incharge label');
                    var staffChk = $(chk).find('.data_group .data_line label');
                    //把選取中主管push array
                    $.each(thisChk, function (idx, elms) {
                        var thisElm = $(elms).find('input[type="checkbox"]:checked')
                        pName   = thisElm.parent('label').find('span').text(),
                        SchkBox = $(elms).find('input[type="checkbox"]');

                        if (SchkBox.prop('checked') == true) {
                            save.push(pName);
                        }
                    });
                    //把選取中員工push array
                    $.each(staffChk, function (idx, staff) {
                        var thisElm = $(staff).find('input[type="checkbox"]:checked')
                        pName   = thisElm.parent('label').find('span').text(),
                        SchkBox = $(staff).find('input[type="checkbox"]');

                        if (SchkBox.prop('checked') == true) {
                            save.push(pName);
                        }
                    });

                    $('.staff_page').fadeOut();
                    $('.people_in').text('共' + save.length + '人參與');
                });

                perName = save; //把資料傳給perName
                save = []; //送出後清掉array
            })
        }
    };
    function init() {

        that.addPer();
        that.chkIpt();
        $('.people-btn').on('click', function () {
            $('.staff_page').fadeIn();
        });
        $('.sub_inner a:first-child').on('click', function () {
            $('.staff_page').fadeOut();
        })
    }
    init();
};