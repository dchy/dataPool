common = {
    uploadFile: function (elementId, queueID, fileTypeExts, url, multi, obj, fn1, fn2) {
        $('#' + elementId).uploadify({
            //服务器端处理地址
            uploader: url,
            formData: obj,
            //上传使用的 Flash
            swf: '/js/uploadify/uploadify.swf',
            //按钮的宽度
            width: 50,
            //按钮的高度
            height: 50,
            buttonImage: '/images/upload-bgZ.png?v=1.09',
            //按钮上的文字
            buttonText: '上传',
            //按钮的鼠标图标
            buttonCursor: 'hand',
            //滚动条 id
            queueID: queueID,
            //sizeLimit:  '100000',
            fileSizeLimit: '100Mb',
            //上传参数名称
            fileObjName: 'Filedata',
            //设置显示在上传进度条中的数据类型
            //可选项时百分比（percentage）或速度（speed）
            progressData: 'percentage',
            //设置上传完成后从上传队列中移除的时间（单位：秒）
            removeTimeout: '0',
            //上传完成后队列是否自动消失。默认：true
            removeCompleted: 'true',
            //上传完成的文件对象或返回的错误信息
            onUploadComplete: function (file) { },
            //回调函数
            onUploadSuccess: function (file, data, response) {
                fn1(file, data, response);
            },
            //向后台传递自定义参数,动态传参数
            onUploadStart: function (file) {
            },
            //允许上传的文件类型
            fileTypeExts: "" + fileTypeExts + "",
            //文件类型说明
            fileTypeDesc: "压缩包或图片文件",
            //选择之后，自动开始上传
            auto: true,
            //是否支持同时上传多个文件
            multi: multi == true ? true : false,
            //允许多文件上传时，同时上传文件的个数
            queueSizeLimit: 10
        });
    },
    imageZoom: function () {
        //多张图片放大需要加自定义属性data-msg（不是一组图片哦），单张图片放大不需要加
        $(".analyItem").each(function () {
            $(this).find(".analy_divImg li img").each(function (i) {
                $(this).click(function () {
                    var thisIndex = i;
                    var thisclick = this;
                    var thisId = "preview_" + i;
                    var curId = "CurImg_" + i;
                    var magName = $(this).attr("data-msg");
                    //图片放大
                    rxued.images.morePicLarge(thisclick, thisId, curId, thisIndex, magName, "img");
                    //more表示data-msg的值， img表示要放大的图片元素

                    //点击旋转按钮
                    rxued.images.rotateBtnClick(thisId, curId);
                    //关闭图片放大弹出层
                    rxued.images.closeImgAlert(thisId);
                    //1:1
                    rxued.images.oneToone(thisId, curId);
                })
            });
        })

        //多张图片放大需要加自定义属性data-msg（不是一组图片哦），单张图片放大不需要加
        $(".systemDiv_Right li img").each(function (i) {
            $(this).click(function () {
                var thisIndex = i;
                var thisclick = this;
                var thisId = "preview_" + i;
                var curId = "CurImg_" + i;
                //图片放大
                rxued.images.morePicLarge(thisclick, thisId, curId, thisIndex, "more1", "img");
                //more表示data-msg的值， img表示要放大的图片元素

                //点击旋转按钮
                rxued.images.rotateBtnClick(thisId, curId);
                //关闭图片放大弹出层
                rxued.images.closeImgAlert(thisId);
                //1:1
                rxued.images.oneToone(thisId, curId);
            })
        })
    },
    getRecordView: function (id) {
        //加载记录
        var url = '/CommonView/CommonView/GetTaskList?TaskId=' + id;
        $('.taskRecord').load(url, function () {
            countdaily();
        });
    },
    getProjectView: function (id, em_system, fn){
        var url = '/CommonView/CommonView/GetContentView?TaskId=' + id + "&em_system=" + em_system;
        $('.projectCommon').load(url, function () {
            countdaily();
            if (fn) {
                fn();
            }
        });
    },
    GetState: function (id,em_system) {
        //加载中间的状态信息
        var url = '/CommonView/CommonView/GetState?t_team=' + id;
        $.get(url, { em_system: em_system }, function (res) {
            var dom = $($($('.uiTab7Con')[0]).find('.analyItemCon')[0]);
            $(dom).children().remove();
            var str = '<div class="clearfix">';
            for (var i = 0; i < res.length; i++) {
                str += '<div class="col-md-3 lh30">';
                str += '<div class="clearfix">';
                str += '<span class="noteslist-spanF fl mr10 mt5">' + res[i].em_systemText + '</span>';
                if (res[i].t_VistFlag == 1) {
                    str += '<p class="fl cGreen">正常</p>';
                }
                else if (res[i].t_VistFlag == 2) {
                    str += '<p class="cOrange fl">异常</p>';
                } else if (res[i].t_VistFlag == 3) {
                    str += '<p class="cRed fl">问题</p>';
                } else {
                    str += '<p class="fl">暂无</p>';
                }
                str += '</div>';
                str += '</div>';
            }
            str += '</div>';
            $(dom).append(str);
        },'json')

    },
    getSystemView: function (id) {
        var url = '/CommonView/CommonView/GetFeedBack';
        var str = '';
        $.get(url, { id: id }, function (obj) {
            var res = obj.res;
            str += '<div class="analyItem nomargintop">';

            str += '<p class="analyItemTit tx-center">状态</p>';
            str += '<div class="analyItemCon">';
            str += '<div class="clearfix">';

            str += '<div class="lh30"><span class="c999999">反馈</span><span class="c666666 fz14 pl10">' + obj.rows + '</span></div>';
            str += '</div>';
            str += '</div>';
            str += '</div>';

            for (var i = 0; i < res.length; i++) {
                str += '<div class="analyItem">';
                str += '<p class="analyItemTit tx-center">' + res[i].year + '月' + res[i].month + '日</p>';
                str += '<div class="analyItemCon">';
                str += '<div class="clearfix">';
                str += '<p><span class="c666666">' + res[i].t_SystemDescribe + '</span></p>';
                str += '<div class="analy_divImg mt10">';
                str += '<ul class="clearfix">';
                for (var j = 0; j < res[i].url.length; j++) {
                    str += '<li>';

                    str += '<img src="' + res[i].url[j] + '" data-msg="morez' + i + '" data-src="' + res[i].url[j] + '" />';
                    str += '</li>';
                }
                str += '</ul>';
                str += '</div>';
                str += '</div>';
                str += '</div>';
                str += '</div>';
            }
            $('._uiTab7ConSystem').html(str);
            common.imageZoom();
        }, 'json');
    },
    insertAssessment: function (id,rb_plate, rb_Flag) {
        var par = {
            t_team: id,
            rb_plate: rb_plate,
            rb_Flag: rb_Flag
        };
        $.post('/CommonView/CommonView/InsetAssessment', par, function (res) {
            if (res.status == 1) {
               common.getAssessmentView(vm.id);
            }
        }, 'json');

    },

    getAssessmentView: function (id) {
        //$('.Assessment').show();
        //加载评估列表
        var url = '/CommonView/CommonView/GetAssessment?TaskId=' + id;
        $('._uiTab7ConAssessment').load(url, function () {
            countdaily();
        });
    },
    scollBar: function () {
        $(".uiTab7ConScroll,.solved_divHide").slimScroll({ height: "100%", borderRadius: "6px" });
        //$(".dailyrgt_VisitDiv").slimScroll({ height: "100%", borderRadius: "6px", start: "bottom" });
        $('.dailyrgt_VisitDiv').scrollTop($('.dailyrgt_VisitDiv')[0].scrollHeight);
        countdaily();
    },
    //flag:1为团长,0为个人,id:连级任务

    loadEventView: function (flag, id) {
        $('._eventcontainer').load('/CommonView/CommonView/GetEventInfor', { teamFlag: flag, temId: id });
    },
    closeWindow: function () {
        $('.uiPerson_daBtnDiv').hide();
        $(".Tempwages-click").removeClass("Tempwages-cur");
    },
    showWindow: function (str) {
        $('.uiPerson_daBtnDiv').html(str);
        $('.uiPerson_daBtnDiv').show();
        $(".BusinessHeight").slimScroll({ height: "100%", borderRadius: "6px" });
        $(".BusinessHeight").height($(".uiPerson_daBtnDiv").height() - 40);
        $(".BusinessHeight2").height($(".uiPerson_daBtnDiv").height() - 40);
    },
    loadComponent: function (path) {
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src = path;
            script.async = true;
            script.onload = function () {
                var component = Vue.component('currentView');
                if (component) {
                    resolve(component);
                } else {
                    reject();
                }
            };
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }
}