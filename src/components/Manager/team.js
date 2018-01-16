var components = {
    groupSearch: function () {
        return {
            template: '<div class="daily_title >\
                        <ul class="clearfix" style="margin-top: 25px;">\
                            <li class="title_cur" @click="search(0,$event)">全</li>\
                            <li @click="search(2,$event)">S</li>\
                            <li @click="search(3,$event)">Z</li>\
                            <li @click="search(4,$event)">G</li>\
                            <li @click="search(5,$event)">J</li>\
                            <li @click="search(6,$event)">R</li>\
                            <li @click="search(7,$event)">J</li>\
                            <li @click="search(8,$event)" class="daily_liLast">D</li>\
                        </ul>\
                    </div>',
            methods: {
                search: function (val, event) {
                    this.$emit('search', val);
                    $(event.currentTarget).addClass("title_cur").siblings().removeClass("title_cur");
                }
            }
        }
    }, //全
    
    systemList: function () {
        return {
            template: '<div>\
                            <div class="uiTab1condiv_header">\
                               <table class="uiTable">\
                                   <thead>\
                                       <tr>\
                                           <th width="20%" class="relative">团号</th>\
                                           <th width="30%" class="relative">团</th>\
                                           <th width="30%" class="relative">团长</th>\
                                           <th width="20%" class="relative">回访</th>\
                                       </tr>\
                                   </thead>\
                               </table>\
                           </div>\
                           <div class="uiTab1condiv_tbody uiTab7ConScroll scroll-content">\
                               <table class="uiTable">\
                                   <tbody>\
                                       <tr @click="clickTr(index,item.tid)" v-for="(index,item) of list" :class="{tractive:curr==index}">\
                                           <td width="20%">{{item.tnum}}</td>\
                                           <td width="30%">{{{item.tname}}}</td>\
                                           <td width="30%">{{{item.xingming}}}</td>\
                                           <td width="20%">{{item.visit}}</td>\
                                       </tr>\
                                       <tr v-if="list.length==0"><td colsapn="4">无数据</td></tr>\
                                   </tbody>\
                               </table>\
                           </div>\
                            <div class="j_outerHeight clearfix tj_bottom">\
                                <p class="col-md-3" style="cursor: pointer;">{{list.length}}</p>\
                                <p class="col-md-3 cGreen" style="cursor: pointer;">0</p>\
                                <p class="col-md-3 cOrange" style="cursor: pointer;">0</p>\
                                <p class="col-md-3 cRed" style="cursor: pointer;">0</p>\
                            </div>\
                        </div>',
            props: ["random", 'em_system', 'type', 'searchid'],
            watch: {
                random: function () {
                    this.loadList();
                    this.curr = 0;
                },
                searchid: function () {
                    this.loadList();
                }
            },
            data: function () {
                return {
                    list: [],
                    curr: 0,
                }
            },
            ready: function () {
                this.loadList();
            },
            methods: {
                loadList: function () {
                    var obj = { em_system: this.em_system, searchVal: this.searchid };
                    this.$http.get('http://d.p.rx/Manager/team/GetOneList', { params: obj }).then(function (res) {
                        this.list = res.body;
                        if (this.list.length > 0) {
                            this.$emit('clicktr', this.list[0].yid);
                        }
                        $(".uiTab1condiv_tbody").height($("body").height() - $(".topnav").height() - $(".uiTab1condiv_header").height() - 155);
                    });
                },
                clickTr: function (index, yid) {
                    this.curr = index;
                    this.$emit('clicktr', yid);
                }
            }
        }
    },  //一段列表
    middleView: function () {
        return {
            template: '<div class="defaultblock">\
                        <ul class="clearfix uiTab9 j_uiTab9">\
                            <li @click="show(0,$event)" class="uiTab9-active">状态</li>\
                            <li @click="show(1,$event)">标签一</li>\
                        </ul>\
                        <div id="j-tc-center-content" class="pr10">\
                            <div class="uiTab9Con">\
                                <div class="analyItem">\
                                    <p class="analyItemTit tx-center">状态</p>\
                                    <div class="analyItemCon"></div>\
                                </div>\
                                <div class="analyItem">\
                                    <p class="analyItemTit tx-center">回访</p>\
                                    <div class="analyItemCon">\
						    	        <div class="clearfix">\
                                            <div class="col-md-4 lh28">\
                                                <span class="c999999">应回</span>\
                                                <span class="c666666 fz14">10</span>\
                                            </div>\
                                            <div class="col-md-4 lh28">\
                                                <span class="c999999">实回</span>\
                                                <span class="c666666 fz14">5</span>\
                                            </div>\
                                            <evaluation-view :text="差"></evaluation-view>\
                                        </div>\
                                    </div >\
                                </div>\
                                <div class="analyItem">\
                                    <p class="analyItemTit tx-center">任务</p>\
                                    <div class="analyItemCon">\
						    	        <div class="clearfix">\
                                            <div class="col-md-4 lh28">\
                                                <span class="c999999">共计</span>\
                                                <span class="c666666 fz14">5</span>\
                                            </div>\
                                            <div class="col-md-4 lh28">\
                                                <span class="c999999">超时</span>\
                                                <span class="c666666 fz14">2</span>\
                                            </div>\
                                            <evaluation-view :text="差"></evaluation-view>\
                                        </div>\
                                    </div >\
                                </div>\
                                <div class="analyItem">\
                                    <p class="analyItemTit tx-center">周总结</p>\
                                    <div class="analyItemCon">\
						    	        <div class="clearfix">\
                                            <div class="col-md-4 lh28">\
                                                <span class="c999999">近五周</span>\
                                                <span class="c666666 fz14">5</span>\
                                            </div>\
                                            <div class="col-md-4 lh28">\
                                                <span class="c999999">未写</span>\
                                                <span class="c666666 fz14">2</span>\
                                            </div>\
                                            <evaluation-view :text="差"></evaluation-view>\
                                        </div>\
                                    </div >\
                                </div>\
                                <div class="analyItem">\
                                    <p class="analyItemTit tx-center">评价</p>\
                                    <div class="analyItemCon">\
						    	        <div class="clearfix">\
                                            <div class="col-md-4 lh28">\
                                                <span class="c999999">共计</span>\
                                                <span class="c666666 fz14">20</span>\
                                            </div>\
                                            <div class="col-md-4 lh28">\
                                                <span class="c999999">军端</span>\
                                                <span class="c666666 fz14">优1良3中5差3</span>\
                                            </div>\
                                            <div class="col-md-4 lh28">\
                                                <span class="c999999">师端</span>\
                                                <span class="c666666 fz14">优3良2中1差</span>\
                                            </div>\
                                            <evaluation-view :text="差"></evaluation-view>\
                                        </div>\
                                    </div >\
                                </div>\
                            </div>\
                            <div class="uiTab9Con dis-none">\
                                <div class="analyItem">\
                                    <p class="analyItemTit tx-center">状态</p>\
                                    <div class="analyItemCon"></div>\
                                </div>\
                            </div >\
                        </div>\
                    </div>',
            props: [],
            data: function () {
                return {

                }
            },
            methods: {
                show: function (index, event) {//中间页-切换显示
                    $(event.currentTarget).addClass("uiTab9-active").siblings().removeClass("uiTab9-active");
                    $("#j-tc-center-content .uiTab9Con").hide().eq(index).show();
                },
            },
            
            components: {
					
            }
        }
    },//中间页 视图

    visitRecord: function () {
        return {
            template: '<div class="dailyrgt_VisitDiv" v-ref="visit">\
                            <template v-for="item of list">\
                                <div class="noteslist plr5" v-if="item.pp_flag==1">\
                                    <div class="fl noteslist-lft">\
                                        <span class="noteslist-span">{{item.pp_flagString}}</span>\
                                    </div>\
                                    <div style="margin-bottom: 5px;margin-right: 50px;" class="noteslist-rgt" :class="{dotted_lineR:item.dottedLine==true}">\
                                        <p class="fl mr10 c999999">{{item.addName}}</p>\
                                        <p class="noteslist-time">{{item.CreateTimeText}}</p>\
                                        <p style="margin: 0;" class="pt5 visi-listtxt">{{item.EOMS}}{{{item.pp_Describe}}}</p>\
                                    </div>\
                                </div>\
                                <div class="noteslist plr5 relative" v-if="item.pp_flag>1">\
                                    <div style="margin-left: 30px;margin-bottom: 5px;" class="group-lftD tx-right" :class="{dotted_lineL:item.dottedLine==true}">\
                                        <p class="noteslist-time">{{item.CreateTimeText}}</p>\
                                        <p style="margin: 0;" class="pt5 visi-listtxt {{item.color}}">{{{item.pp_Describe}}}</p>\
                                    </div>\
                                    <div class="group-rgtD">\
                                        <span class="noteslist-span">{{item.stageString}}</span>\
                                        <span class="noteslist-span">{{item.pp_flagString}}</span>\
                                    </div>\
                                </div>\
                            </template>\
                       </div>',
            props: ['yid', 'type', 'random'],
            data: function () {
                return {
                    list: []
                }
            },
            watch: {
                yid: function () {
                    this.loadList();
                },
                random: function () {
                    this.loadList();
                }
            },
            methods: {
                loadList: function () {
                    var url = '/Manager/Index/GetVisitList';
                    this.$http.get(url, { params: { yid: this.yid, type: this.type } }).then(function (res) {
                        this.list = res.body;
                        this.$nextTick(function () {
                            $(".uiTab7ConScroll").slimScroll({ height: "100%", borderRadius: "6px" });
                            $('.dailyrgt_VisitDiv').scrollTop($('.dailyrgt_VisitDiv')[0].scrollHeight);
                        })
                    });
                }
            }
        }
    },//回访记录
    addVisitView: function () {
        return {
            template: '<div class="dailyrgt-bottom relative pa10">\
                        <div class="dailyrgt-bottomL relative">\
                            <ul class="clearfix">\
                                <li v-for="item of typeList">\
                                    <span class="daily_span" @click="clickType(item.val,$event)">{{item.title}}</span>\
                                </li>\
                            </ul>\
                            <div class="dailyrgt-divZi" style="padding-top:5px" v-show="divZi">\
                                <div class="pl20">\
                                    一级员工什么都没做什么都写不出来；<br />二级员工做得都是琐碎的事情写的也是琐事的问题；<br />三级员工能看出真正的问题但不能解决问题，所以写得更详细汇报问题；<br />四级员工能发现问题也能解决问题；<br />五级员工能分析出问题还能解决问题同时反思还能提出管理意见；<br />六级员工能发现问题解决问题，能提出管理意见，还能升级系统标准\
                                 </div>\
                            </div>\
                            <div class="dailyrgt-botradio" v-show="botradioShow">\
                                <div class="mb10">\
                                    <label class="uiRadio12 cGreen"><input v-model="p_tag" value="1" type="radio" name="a"  @click="radioClick(1)" class="uiRadio12-input">优</label>\
                                    <label class="uiRadio12 clightGreen"><input v-model="p_tag" value="2" type="radio" name="a" @click="radioClick(2)" class="uiRadio12-input">良</label>\
                                    <label class="uiRadio12 cOrange"><input v-model="p_tag" value="3" type="radio" name="a" @click="radioClick(3)" class="uiRadio12-input">中</label>\
                                    <label class="uiRadio12 cRed"><input v-model="p_tag" value="4" type="radio" name="a" @click="radioClick(4)" class="uiRadio12-input">差</label>\
                                </div>\
                            </div>\
                            <div class="dailyrgt-bottext" v-show="bottextShow">\
                                <textarea v-model="t_Describe" style="height:130px;" placeholder="请输入回访内容" class="textareaVistis"></textarea>\
                                <div class="tx-center">\
                                    <div class="dis_il_block">\
                                        <div class="relative">\
                                            <input type="button" value="提交" @click="send" class="uiBtn-submitBtn dailyrgt-tijiao">\
                                            <i class="submit_icom"></i>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>',
            props: ['yid', 'em_system', 'type'],
            data: function () {
                var typeList = [
                    { title: '正常', val: 1 }, { title: '异常', val: 2 }, { title: '问题', val: 3 }
                ];
                return {
                    typeList: typeList,
                    divZi: true,
                    bottextShow: false,
                    botradioShow: false,
                    p_tag: 0,
                    t_VistFlag: 0,
                    t_Describe: '',
                }
            },
            watch: {
                id: function () {
                    this.divZi = true;
                    this.bottextShow = false;
                    this.botradioShow = false;
                }
            },
            methods: {
                clickType: function (val, event) {
                    this.t_VistFlag = val;
                    this.t_Describe = '';
                    this.bottextShow = false;
                    this.botradioShow = true;
                    this.divZi = false;
                },
                radioClick: function (val) {
                    this.botradioShow = false;
                    this.bottextShow = true;
                    this.p_tag = val;
                },
                send: function () {
                    debugger
                    var obj = {
                        campId: this.yid,
                        em_system: this.em_system,
                        visitContent: this.t_Describe,
                        p_type: 1,
                        p_tag: this.p_tag,
                        visitFlag: this.t_VistFlag,
                        stage: this.type,
                        taskId: ''
                    };
                    if (this.t_Describe.trim() == '') {
                        alert('请输入回访内容');
                        return;
                    }
                    if (!obj.campId) {
                        alert('参数非法');
                        return;
                    }
                    this.$http.post('/Manager/Index/AddVisit', obj).then(function (res) {
                        if (res.body.status == 0) {
                            this.t_Describe = '';
                            this.botradioShow = false;
                            this.bottextShow = false;
                            this.divZi = true;
                            this.p_tag = 0;
                            this.$emit('send');
                        }
                        else {
                            alert(res.body.msg);
                        }
                    });
                },
                event: function (dom) {
                    this.$emit('show-event-demo', dom);
                }
            }
        }
    },//添加回访视图

}