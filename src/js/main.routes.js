/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

﻿function defaultRoute()
{
	return {
        'default': {
            component: function (resolve, reject) {
                common.loadComponent('/components/default/default.js').then(resolve, reject);
            }
        }
    }
}

module.exports = defaultRoute;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

﻿function businessRoutes() {
    return {
        //营id =42  路由名称 =swResourceBusiness 页面URL =/Business/NewResources/BusinessIndex 表=PP_SW_Resources_Business
        'swResourceBusiness': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Business/resourceBusiness.js').then(resolve, reject);
            }
        },
        //营id =43  路由名称 =resourceMember 页面URL =/Business/NewResources/MemberIndex 表=PP_SW_Resources_Member
        'resourceMember': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Business/resourceMember.js').then(resolve, reject);
            }
        },
        //营id =44  路由名称 =resourceBuilding 页面URL =/Business/NewResources/RealEstateView 表=PP_SW_Resources_Houses
        'resourceBuilding': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Business/resourceBuilding.js').then(resolve, reject);
            }
        },


        //营id =45 路由名称 =resourceCustomer 页面URL =/Business/Tourists/CustomerIndex 表=PP_SW_Tourists_Customer
        'resourceCustomer': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Business/resourceCustomer.js').then(resolve, reject);
            }
        },
        //营id =46 路由名称 =resourceTouristsMember 页面URL =/Business/Tourists/MemberIndex 表=PP_SW_Tourists_Member
        'resourceTouristsMember': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Business/resourceTouristsMember.js').then(resolve, reject);
            }
        },
        //营id =125 路由名称 =resourceProject 页面URL =/Business/Tourists/ProjectIndex 表=PP_SW_Tourists_Project
        'resourceProject': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Business/resourceProject.js').then(resolve, reject);
            }
        },


        //营id =132 路由名称 =resourceOnlinePlatform 页面URL =/OnlineRetailers/Index/PlatformIndex 表=PP_SW_OnlineRetailers_Platform
        'resourceOnlinePlatform': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Business/resourceOnlinePlatform.js').then(resolve, reject);
            }
        },
        //营id =48 路由名称 =resourceOnlineExtension 页面URL =/OnlineRetailers/Index/ExtensionIndex 表=PP_SW_OnlineRetailers_Extension
        'resourceOnlineExtension': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Business/resourceOnlineExtension.js').then(resolve, reject);
            }
        },
        //营id =47 路由名称 =resourceOnlineBusiness 页面URL =/OnlineRetailers/Index/BusinessIndex 表=PP_SW_OnlineRetailers_Business
        'resourceOnlineBusiness': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Business/resourceOnlineBusiness.js').then(resolve, reject);
            }
        }
    }
};

module.exports = businessRoutes;



/***/ }),
/* 2 */
/***/ (function(module, exports) {

﻿function designJsRoutes() {
    return {
        //接单-5团
        //营 id=51 , 路由名称 ：personnelBusiness    页面url:/Design/Negotiate/OrderIndex
        'personnelBusiness': {
            component: function (resolve, reject) { 
                common.loadComponent('/components/Design/personnelBusiness.js').then(resolve, reject);
            }
        },
        //洽谈-5团
        //营 id=52 , 路由名称 ：personnelTalk    页面url:/Design/Negotiate/NegotiateIndex
        'personnelTalk': { 
            component: function (resolve, reject) { 
                common.loadComponent('/components/Design/personnelTalk.js').then(resolve, reject);
            }
        },
        //会员-5团
        //营 id=53 , 路由名称 ：xmMember    页面url:/Design/Negotiate/MemberIndex
        'xmMember': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Design/xmMemberJS.js').then(resolve, reject);
            }
        },
         
        //方案-6团
        //营 id=54 , 路由名称 ：za_Zab_Program    页面url:/Design/Program/Index
        'za_Zab_Program': { 
            component: function (resolve, reject) {
                common.loadComponent('/components/Design/Zab_ProgramJs.js').then(resolve, reject);
            }
        },
        //标书提案-6团
        //营 id=55 , 路由名称 ：za_Zab_Tender    页面url:/Design/Program/Tender
        'za_Zab_Tender': { 
            component: function (resolve, reject) {
                common.loadComponent('/components/Design/Zab_TenderJs.js').then(resolve, reject);
            }
        },
        //设计院-6团
        //营 id=56 , 路由名称 ：za_Zab_Design    页面url:/Design/Program/Design
        'za_Zab_Design': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Design/Zab_DesignJs.js').then(resolve, reject);
            }
        },
        //预算工作室-7团
        //营 id=57 , 路由名称 ：za_BudgetProject    页面url:/Design/Budget/BudgetIndex
        'za_BudgetProject': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Design/BudgetProject.js').then(resolve, reject);
            }
        },
        //预算-预算-7团
        //营 id=58 , 路由名称 ：za_BudgetBudproject    页面url:/Design/Budget/StudioIndex
        'za_BudgetBudproject': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Design/BudgetBudproject.js').then(resolve, reject);
            }
        },
        //已签-8团
        //营 id=59 , 路由名称 ：za_ContractSign    页面url:/Design/NewContract/SignIndex
        'za_ContractSign': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Design/ContractSignJs.js').then(resolve, reject);
            }
        },
        //未签-8团
        //营 id=60 , 路由名称 ：za_NoSign    页面url:/Design/NewContract/NoSignIndex
        'za_NoSign': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Design/NoSignJs.js').then(resolve, reject);
            }
        },
        //竣工-8团
        //营 id=61 , 路由名称 ：za_ContractCompletion    页面url:/Design/NewContract/CompletionIndex
        'za_ContractCompletion': {
            component: function (resolve, reject) { 
                common.loadComponent('/components/Design/ContractCompletionJs.js').then(resolve, reject);
            }
        },
        //设计师店铺-9团
        //营 id=62 , 路由名称 ：za_DesignerShop    页面url:/Design/Winters/DesigneStore
        'za_DesignerShop': {
            component: function (resolve, reject) { 
                common.loadComponent('/components/Design/DesignerShop.js').then(resolve, reject);
            }
        },
        //人物专访-9团
        //营 id=133 , 路由名称 ：za_Interview    页面url:/Design/Winters/Interview
        'za_Interview': {
            component: function (resolve, reject)
            {
                common.loadComponent('/components/Design/Interview.js').then(resolve, reject);
            }
        },
        //设计-9团
        //营 id=134 , 路由名称 ：za_design    页面url:/Design/Winters/design
        'za_design': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Design/design.js').then(resolve, reject);
            }
        },
        //施工-9团
        //营 id=135 , 路由名称 ：za_construction    页面url:/Design/Winters/construction
        'za_construction': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Design/construction.js').then(resolve, reject);
            }
        },
        //作品-9团
        //营 id=136 , 路由名称 ：za_work   页面url:/Design/Winters/work
        'za_work': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Design/work.js').then(resolve, reject);
            }
        },
        //行业专题-9团
        //营 id=137 , 路由名称 ：Industry_Topics   页面url:/Design/Winters/Industry_Topics
        'za_Industry_Topics': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Design/Industry_Topics.js').then(resolve, reject);
            }
        },
        //设计专题-9团
        //营 id=138 , 路由名称 ：Design_topics   页面url:/Design/Winters/Design_topics
        'za_Design_topics': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Design/Design_topics.js').then(resolve, reject);
            }
        }

    }
}

module.exports = designJsRoutes;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

﻿var engineeringRoutes = function () {
    return {
        //营id =65  路由名称 =gcAuditManage 页面URL =/Engineering/Cost/AuditIndex ,表 PP_GC_ManufacturingCost_Audit
        'gcAuditManage': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Engineering/AuditManage.js').then(resolve, reject);
            }
        },
        //营id =66  路由名称 =gcCostBackstage 页面URL =/Engineering/Cost/CostBackstageIndex,表PP_GC_ManufacturingCost_CostBackstage
        'gcCostBackstage': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Engineering/CostBackstage.js').then(resolve, reject);
            }
        },
        //营id =67  路由名称 =gcSupervisorJs 页面URL =/Engineering/Supervisor/Index,表PP_GC_Engineering_Supervisor
        'gcSupervisorJs': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Engineering/SupervisorJs.js').then(resolve, reject);
            }
        },
        //营id =79  路由名称 =gcEngineeringFinance 页面URL =/Engineering/Invest/FinanceIndex,表 PP_GC_ProjectInvestment_Finance
        'gcEngineeringFinance': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Engineering/EngineeringFinance.js').then(resolve, reject);
            }
        },
        //营id =78  路由名称 =InternalPersonnel 页面URL =/Engineering/Invest/PersonIndex,表 PP_GC_ProjectInvestment_Personnel
        'gcInternalPersonnel': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Engineering/InternalPersonnel.js').then(resolve, reject);
            }
        },
        //营id =71  路由名称 =gcPersonnelManage 页面URL =/Engineering/Project/PersonnelManage,表PP_GC_Engineering_PersonnelManage
        'gcPersonnelManage': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Engineering/PersonnelManage.js').then(resolve, reject);
            }
        },
        //营id =72  路由名称 =gcProjectManage 页面URL =/Engineering/Project/ProjectManage,表 PP_GC_Engineering_ProjectManage
        'gcProjectManage': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Engineering/ProjectManage.js').then(resolve, reject);
            }
        },
        //营id =70  路由名称 =gcCustomerServiceJs 页面URL =/Engineering/CustomerService/Index,表PP_GC_Engineering_CustomerService
        'gcCustomerServiceJs': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Engineering/CustomerServiceJs.js').then(resolve, reject);
            }
        },
        //营id =74  路由名称 =gcMaterial_Bussiness 页面URL =/Engineering/Material/BusinessIndex,表 PP_GC_Material_Business
        'gcMaterial_Bussiness': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Engineering/Material_Bussiness.js').then(resolve, reject); 
            }
        },
        //营id =76  路由名称 =gcMaterial_Hr 页面URL =/Engineering/Material/PersonnelIndex,表PP_GC_Material_Personnel
        'gcMaterial_Hr': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Engineering/Material_Hr.js').then(resolve, reject);
            }
        },
        //营id =75  路由名称 =gcMaterial_Platform 页面URL =/Engineering/Material/PlateIndex ,表PP_GC_Material_Plate
        'gcMaterial_Platform': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Engineering/Material_Platform.js').then(resolve, reject);
            }
        },
        //营id =68  路由名称 =gcPMJs 页面URL =/Engineering/PM/Index,表 PP_GC_Engineering_PM
        'gcPMJs': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Engineering/PMJs.js').then(resolve, reject);
            }
        } 
    }
};

module.exports = engineeringRoutes;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

﻿function jjfurnitureRoutes() {
    return {
        //家具-17团-家具-业务经理
        //营 id=81   路由名称=jjbusinessManager   页面URL= /Furniture/FurnitureBusiness/BusinessManagerIndex
        'jjbusinessManager': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Furniture/BusinessManagerIndex.js').then(resolve, reject);
            }
            //家具-17团-家具-报价
            //营 id=80    路由名称=jjquote   页面URL= /Furniture/FurnitureBusiness/QuoteIndex
        }, 'jjquote': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Furniture/QuoteIndex.js').then(resolve, reject);
            }
        }
        //家具-18团-生产-商城
        //营 id=82   路由名称=jjMall   页面URL= /Furniture/FurnitureProduce/MallIndex
        , 'jjMall': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Furniture/MallIndex.js').then(resolve, reject);
            }
        }
        //家具-18团-生产-生产
        //营 id=84   路由名称=jjProduce   页面URL= /Furniture/FurnitureProduce/ProduceIndex
        , 'jjProduce': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Furniture/ProduceIndex.js').then(resolve, reject);
            }
        }
        //家具-18团-生产-渠道
        //营 id=83   路由名称=jjChannel   页面URL= /Furniture/FurnitureProduce/ChannelIndex
        , 'jjChannel': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Furniture/ChannelIndex.js').then(resolve, reject);
            }
        }
    }
}
module.exports = jjfurnitureRoutes;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

﻿function rdfurnitureRoutes() {
    return {
        //-20团-弱电-业务经理
        //营 id=88   路由名称=rdbusinessManager   页面URL= /Weak/WeakcurrentBusiness/BusinessManagerIndex
        'rdbusinessManager': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Weak/BusinessManagerIndex.js').then(resolve, reject);
            }
            //-20团-弱电-报价
            //营 id=87   路由名称=rdquote   页面URL= /Weak/WeakcurrentBusiness/QuoteIndex
        }, 'rdquote': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Weak/QuoteIndex.js').then(resolve, reject);
            }
        }
        //弱电-21团-集成-商城
        //营 id=89   路由名称=rdMall   页面URL= /Weak/WeakcurrentProduce/MallIndex
        , 'rdMall': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Weak/MallIndex.js').then(resolve, reject);
            }
        }
        //弱电-21团-集成-生产
        //营 id=91   路由名称=rdProduce   页面URL= /Weak/WeakcurrentProduce/ProduceIndex
        , 'rdProduce': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Weak/ProduceIndex.js').then(resolve, reject);
            }
        }
        //弱电-21团-生产-渠道
        //营 id=90   路由名称=rdChannel   页面URL= /Weak/WeakcurrentProduce/ChannelIndex
        , 'rdChannel': {
            component: function (resolve, reject) {
                common.loadComponent('/components/Weak/ChannelIndex.js').then(resolve, reject);
            }
        }
    }
}
module.exports = rdfurnitureRoutes;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
module.exports = __webpack_require__(5);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

﻿router = __webpack_require__(0);
businessRouter = __webpack_require__(1);
designRouter = __webpack_require__(2);
engineeringRouter = __webpack_require__(3);
jjfurnitureRoutes = __webpack_require__(4);
WeakJs = __webpack_require__(5);

Routes = Object.assign(router(), businessRouter(), designRouter(), engineeringRouter(), jjfurnitureRoutes(), WeakJs());

/***/ })
/******/ ]);