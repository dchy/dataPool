var components = {
    groupSearch: function() {
        return {
            template: '<div class="daily_title">\
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
				search: function(val, event) {
					this.$emit('search', val);
					$(event.currentTarget).addClass("title_cur").siblings().removeClass("title_cur");
				}
			}
		}
	}, //全
//	  									<th width="25%">\
//	                                          <select class="theadselect" v-model="St_alias">\
//	                                              <option value="0" selected>营</option>\
//	                                              <option v-for="item in ddllist" :value="item.id" >{{item.St_name}}</option>\
//	                                          </select>\
//	                                      </th>\
//	                                      <th width="22%">\
//	                                          <select class="theadselect" v-model="selected"  @change="chooseMedicine()">\
//	                                              <option value="0" selected>管状</option>\
//	                                              <option  value="1">接</option>\
//	                                              <option  value="2">数</option>\
//	                                              <option  value="3">正</option>\
//	                                          </select>\
//	                                    </th>\
//	<th width="22%">管状</th>\
	systemList: function() {
		return {
			template: '<div>\
                            <div class="uiTab1condiv_header">\
                               <table class="uiTable">\
                                <thead>\
                                    <tr>\
                                        <th width="20%">\
                                            <span class="serial_number" title="团名">团</span>\
                                        </th>\
                                        <th width="25%" >营</th>\
                                        <th width="22%">\
	                                          <select class="theadselect" @change="chooseGuanzhuang" v-model="type">\
	                                              <option :value="0" selected>管状</option>\
	                                              <option v-for="item in ddllist" :value="item.type" >{{item.guanzhuang}}</option>\
	                                          </select>\
	                                    </th>\
                                        <th width="18%" >业状</th>\
                                        <th title="营回访">回访</th>\
                                    </tr>\
                                </thead>\
                               </table>\
                           </div>\
                           <div class="uiTab1condiv_tbody uiTab7ConScroll scroll-content">\
                               <table class="uiTable">\
                                   <tbody>\
                                       <tr @click="clickTr(index,item.tid)" v-for="(index,item) of list"  progress="progress{{{item.progress}}}" :class="{tractive:curr==index},">\
                                            <td width="20%" title="{{item.groupName}}">{{item.groupAlias}}</td>\
                                            <td width="25%">{{item.campName}}</td>\
                                            <td width="22%" :class="[{\'cPurple\': item.guangZhuang !=\'完\'},{\'cGreen\': item.guangZhuang==\'完\'}]">{{item.guangZhuang}}</td>\
                                            <td width="18%" :class="[{\'cRed\': item.yeZhuang==\'未\'},{\'cGreen\': item.yeZhuang==\'完\'}]">{{item.yeZhuang}}</td>\
                                            <td :class="{cRed:item.visit<0}">{{item.huiFang}}</td>\
                                       </tr>\
                                       <tr v-if="list.length==0"><td colsapn="5">无数据</td></tr>\
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
				random: function() {
					this.loadList();
					this.curr = 0;
				},
				searchid: function() {
					this.loadList();
				}
			},
			data: function() {
				return {
					ddllist: [],
					list: [],
					curr: 0,
					tid: 0,
				}
			},
			ready: function() {
				this.loadList();
				this.loadTlist();
			},
			methods: {
				loadTlist: function() {
//					this.$http.get('http://d.p.rx/Manager/Index/GetStructureList',{ params: { level: 2 } }).then(function (res) {params: {level: 3}}).then(function(res) {
//					this.$http.get('http://d.p.rx/Manager/Index/GetStructureList', { params: { level: 2 } }).then(function (res) {
//						this.ddllist = res.body;
//					});
					this.ddllist = [{"type":1, "guanzhuang":"接待"},
									{"type":2, "guanzhuang":"数待" },
									{"type":3, "guanzhuang":"正待" },
									{"type":4, "guanzhuang":"完" }
									];
				},

				loadList: function() {
					
					//var obj = { em_system: this.em_system, searchVal: this.searchid, tid: this.tid };
					var obj = { em_system: this.em_system, sid: this.searchid, tid: this.tid };
//					var obj = {sid: this.searchid};
					//this.$http.get('http://d.p.rx/Manager/Index/GetOneList', { params: obj }).then(function (res) {
//					this.$http.get('http://api.p.rx/api/hr/GetCampList', {
					this.$http.get('http://192.168.1.191:13201/command/campsInfo', {
//						this.$http.get('http://localhost:13201/command/campsInfo', {
						params: obj
					}).then(function(res) {
						this.list = res.body;
//						alert(this.list.length);
						$(".tj_bottom p").eq(0).text(this.list.length);
						
						if(this.list.length > 0) {
							this.$emit('clicktr', this.list[0].tid);
						}
						$(".theadselect option").removeAttr("selected");
						setTimeout(function() {
							$(".uiTab1condiv_tbody").height($("body").height() - $(".topnav").height() - $(".uiTab1condiv_header").height() - 155);
						}, 200);
					});
				},
				
				clickTr: function(index, tid) {
					$("tr").removeClass("tractive");
					$("tr").eq(index+1).addClass("tractive");
					this.curr = index;
					this.$emit('clicktr', tid);
					$(".cl-no").parents(".cen-slid").stop().animate({"left": "-100%","opacity": "0"}, 500);
					$(".analyItem").removeClass("anItemBor-active");
				},

				chooseGuanzhuang :function(){
					if(this.type == 0){
						$("tr[progress]").show();
						$(".tj_bottom p").eq(0).text($('tr').size()-1);
					}
					if(this.type == 1){
						$("tr[progress]").hide();
						$("tr[progress=progress1]").show();
						$(".tj_bottom p").eq(0).text($('tr[progress=progress1]').size());
					}
					if(this.type == 2){
						$("tr[progress]").hide();
						$("tr[progress=progress2]").show();
						$(".tj_bottom p").eq(0).text($('tr[progress=progress2]').size());
					}
					if(this.type == 3){
						$("tr[progress]").hide();
						$("tr[progress=progress3]").show();
						$(".tj_bottom p").eq(0).text($('tr[progress=progress3]').size());
					}
					if(this.type == 4){
						$("tr[progress]").hide();
						$("tr[progress=progress4]").show();
						$(".tj_bottom p").eq(0).text($('tr[progress=progress4]').size());
					}
				}
			}
		}
	}, //一段列表
	middleView: function() {
		return {
			template: '<div class="defaultblock">\
                        <ul class="clearfix uiTab9 j_uiTab9">\
                            <li v-bind:class="{\'uiTab9-active\':curr==1}" @click="curr=1">状态</li>\
                            <li v-bind:class="{\'uiTab9-active\':curr==2}" @click="curr=2">使命</li>\
                            <li v-bind:class="{\'uiTab9-active\':curr==3}" @click="curr=3">过程</li>\
                            <li v-bind:class="{\'uiTab9-active\':curr==4}" @click="curr=4">处理</li>\
                            <li v-bind:class="{\'uiTab9-active\':curr==5}" @click="curr=5">执行</li>\
                        </ul>\
                        <div id="j-tc-center-content" class="pr10">\
                            <div class="uiTab9Con" v-show="curr==1">\
                                <div class="analyItem">\
                                    <p class="analyItemTit tx-center">状态</p>\
                                    <div class="analyItemCon">\
                                        <p class="fl col-md-4">\
                                            <b class="col-md-4 cGreen fz14">正常</b>\
                                        </p>\
                                        <a href="javascript:" class="circlemark-red circlemark"><span class="span-a">2</span>未</a>\
                                    </div>\
                                </div>\
                                <div class="analyItem">\
                                    <p class="analyItemTit tx-center">过程</p>\
                                    <div class="analyItemCon">\
                                        <a href="javascript:" class="circlemark-red circlemark"><span class="span-a">1</span>未</a>\
                                    </div>\
                                </div>\
                                <div class="analyItem">\
                                    <p class="analyItemTit tx-center">处理</p>\
                                    <div class="analyItemCon">\
                                        <a href="javascript:" class="circlemark-red circlemark"><span class="span-a">1</span>未</a>\
                                    </div>\
                                </div>\
                                <div class="analyItem">\
                                    <p class="analyItemTit tx-center">执行</p>\
                                    <div class="analyItemCon">\
                                        <a href="javascript:" class="circlemark-red circlemark"><span class="span-a">1</span>未</a>\
                                    </div>\
                                </div>\
                            </div>\
                            <mission-view v-show="curr==2" v-bind:tid="tid"></mission-view>\
                            <process-view v-show="curr==3" v-bind:tid="tid"></process-view>\
                            <deal-view v-show="curr==4" v-bind:tid="tid"></deal-view>\
                        </div>\
                    </div>',
            props: ['tid'],
            data: function() {
                return {
                    //2段默认选中
                    curr: 3
                    // curr: 4
                }
            },
            components: {
                DealView : components.DealView(),
                ProcessView: components.ProcessView(),
                MissionView: components.MissionView()
            }
        }
    }, //中间页 视图

    //v-bind:class="['circlemark',{'circlemark-red':model.result=='未'},{'circlemark-green':model.result=='完'}]"
    //{{model.resultStay}}  {{model.result}}
    MissionView: function() {
        return {
            template: '<div class="uiTab9Con projectCommon">\
                       </div>',
			props: ['tid', 'em_system'],
			watch: {
				tid: function() {
					if(this.tid != 0) {
						this.loadList();
					}
				}
			},
			methods: {
				show: function(index, event) { //中间页-切换显示
					$(event.currentTarget).addClass("uiTab9-active").siblings().removeClass("uiTab9-active");
					$("#j-tc-center-content .uiTab9Con").hide().eq(index).show();
				},
				loadList: function() {
					var campId = this.tid;
					var url = 'http://p2.p.rx/CommonView/CommonView/GetContentView?cross=1&TaskId=' + this.tid + "&em_system=7";
					$('.projectCommon').load(url, function() {
						countdaily();
						$("#j-tc-center-content").children('div').eq(1).children('div').hide();
						$("#j-tc-center-content").children('div').eq(1).children('div').eq(0).show();
						$("#j-tc-center-content").children('div').eq(1).children('div').eq(0).attr('id', 'mission-id');
						//使命-池子信息加载
						misson(campId);
					});
				},//---
				
			}
		}

	}, //中间-使命
	//<p class="analyItemTit tx-center">{{item.campName}}</p>
//	<p class="fl col-md-4">
//      <b class="col-md-4 cRed fz14">{{model.proportion}}%</b>
//  </p>
	ProcessView: function() {
		return {
			template: `<div class="uiTab9Con">
                        <div class="analyItem">
                            <p class="analyItemTit tx-center">状态</p>
                            <div class="analyItemCon">
                                <p class="fl col-md-4">
                                    <b class="col-md-4 cGreen fz14">{{model.state}}</b>
                                </p>
                                
                                <a href="javascript:" v-bind:class="['circlemark',{'circlemark-red':model.result=='未'},{'circlemark-green':model.result=='合'}]"><span class="span-a">{{model.resultNum}}</span>{{model.result}}</a>
                            </div>
                        </div>
                        <div v-bind:class="['analyItem','anItemBor',{'anItemBor-active':curr==index+1}]" v-for="(index,item) of list" @click="show(item.markId,index)">
                            <p class="analyItemTit tx-center">{{item.name}}</p>
                            <div class="analyItemCon">
                                <div>
                                    <p class="fl col-md-3"><span class="cLightGray pr8">实际</span> <span class="cGreen">{{item.actual}}</span></p>
                                    <p class="fl col-md-3"><span class="cLightGray pr8">标准</span> <span class="cGreen">{{item.standard}}</span></p>
                                    <p class="fl col-md-3"><span class="cLightGray pr8">差额</span> <span class="cRed">{{item.difference}}</span></p>
                                    <p class="fl col-md-3"><span class="cRed">{{item.money}}元</span></p>
                                    <a href="javascript:" v-bind:class="['circlemark',{'circlemark-red':item.result=='未'},{'circlemark-green':item.result=='合'}]"><span class="span-a">{{item.resultNum}}</span>{{item.result}}</a>
                                </div>
                            </div>
                        </div>
                    </div>`,
            props: ['tid'],
            data: function() {
                return {
                    list: [],
                    model: null,
                    curr: 0
                }
            },
            watch: {
                tid: function() {
                    this.loadData();
                }
            },
            methods: {
                loadData: function() {
                    this.$http.get('http://192.168.1.191:13201/command/corpsTwoStageInfo', {
//					this.$http.get('http://localhost:13201/command/corpsTwoStageInfo', {
                        params: {
                            campId: this.tid
                        }
                    }).then(function(res) {
                        this.list = res.body.dataPoolCampMonthList;
                        this.model = res.body.dataPoolCampState;
                    });
                },
                show: function(markId, curr) {
                    this.curr = curr + 1;
                    this.$root.markId = markId;
                    changeUrl(3,markId);
                    $(".dailyrgt-right .cen-slid1").stop().animate({
                        "left": "0%",
                        "opacity": "1"
                    }, 500);
                }
            }
        }
    }, //中间-过程

    DealView: function() {
        return {
            template: `<div class="uiTab9Con">
                        <div class="analyItem">
                            <p class="analyItemTit tx-center">状态</p>
                            <div class="analyItemCon">
                                <p class="fl col-md-4">
                                    <b class="col-md-4 cGreen fz14">{{model}}</b>
                                </p>
                                <!--<p class="fl col-md-4">-->
                                    <!--<b class="col-md-4 cRed fz14"></b>-->
                                <!--</p>-->
                                <!--<a href="javascript:" v-bind:class="['circlemark',{'circlemark-red':model.result=='未'},{'circlemark-green':model.result=='合'}]"><span class="span-a">{{model.resultNum}}</span>{{model.result}}</a>-->
                            </div>
                        </div>
                        <div v-bind:class="['analyItem','anItemBor',{'anItemBor-active':curr==index+1}]" v-for="(index,item) of list" @click="show(item.markId,index)">
                            <p class="analyItemTit tx-center">处理</p>
                            <div class="analyItemCon">
                                <div>
                                    <p class="fl col-md-3"><span class="cLightGray pr8">个数</span> <span class="cGreen">{{item.dealCount}}</span></p>
                                    <p class="fl col-md-3"><span class="cLightGray pr8">单价</span> <span class="cGreen">{{item.price}}元</span></p>
                                    <!--<p class="fl col-md-3"><span class="cRed"></span></p>-->
                                    <p class="fl col-md-3"><span class="cLightGray pr8">金额 </span><span class="cRed">{{item.money}}元</span></p>
                                    <!--<a href="javascript:" v-bind:class="['circlemark',{'circlemark-red':item.result=='未'},{'circlemark-green':item.Result=='合'}]"><span class="span-a">{{item.resultNum}}</span>{{item.result}}</a>-->
                                </div>
                            </div>
                        </div>
                    </div>`,
            props: ['tid'],
            data: function() {
                return {
                    list: [],
                    model: null,
                    curr: 0
                }
            },
            watch: {
                tid: function() {
                    this.loadData();
                }
            },
            methods: {
                loadData: function() {
                    this.$http.get('http://api.idc.com/command/dealTwoInfo', {
                    // this.$http.get('http://192.168.1.191:13201/command/dealTwoInfo', {
                        params: {
                            campId: this.tid
                        }
                    }).then(function(res) {
                        this.list = res.body.dataPoolDealList;
                        this.model = res.body.status;
                    });
                },
                show: function(markId, curr) {
                    this.curr = curr + 1;
                    this.$root.markId = markId;

                    changeUrl(4,markId);
                    $(".dailyrgt-right .cen-slid1").stop().animate({
                        "left": "0%",
                        "opacity": "1"
                    }, 500);
                }
            }
        }
    }, //中间-处理


    visitRecordDevelop: function() {
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
            data: function() {
                return {
                    list: []
                }
            },
            watch: {
                yid: function() {
                    this.loadList();
                },
                random: function() {
                    this.loadList();
                }
            },
            methods: {
                loadList: function() {
                    var url = '/Manager/Index/GetDevelopVisitList';
                    this.$http.get(url, {
                        params: {
                            yid: this.yid,
                            type: this.type
                        }
                    }).then(function(res) {
                        this.list = res.body;
                    });
                    setTimeout(function() {
                        $(".dailyrgt-topR").scrollTop($(".dailyrgt_VisitDiv").height());
                    }, 50);
                }
            }
        }
    }, //回访记录
    addVisitView: function() {
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
			data: function() {
				var typeList = [{
					title: '正常',
					val: 1
				}, {
					title: '异常',
					val: 2
				}, {
					title: '问题',
					val: 3
				}];
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
				id: function() {
					this.divZi = true;
					this.bottextShow = false;
					this.botradioShow = false;
				}
			},
			methods: {
				clickType: function(val, event) {
					this.t_VistFlag = val;
					this.t_Describe = '';
					this.bottextShow = false;
					this.botradioShow = true;
					this.divZi = false;
				},
				radioClick: function(val) {
					this.botradioShow = false;
					this.bottextShow = true;
					this.p_tag = val;
				},
				send: function() {
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
					if(this.t_Describe.trim() == '') {
						alert('请输入回访内容');
						return;
					}
					if(!obj.campId) {
						alert('参数非法');
						return;
					}
					this.$http.post('/Manager/Index/AddVisit', obj).then(function(res) {
						if(res.body.status == 0) {
							this.t_Describe = '';
							this.botradioShow = false;
							this.bottextShow = false;
							this.divZi = true;
							this.p_tag = 0;
							this.$emit('send');
						} else {
							alert(res.body.msg);
						}
					});
				},
				event: function(dom) {
					this.$emit('show-event-demo', dom);
				}
			}
		}
	}, //添加回访视图

}
