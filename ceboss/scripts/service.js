/**
 * 接口请求地址常量
 */
var API = window.API || {}

API.__HOST__ = 'http://bmadev.ceboss.cn:18080/SalesManager/'

API.getTopMenu = API.__HOST__ + 'interfaces/privilegeApi/getTopMenu.action';

/**
 * @{params} topMenuId 'ftree_saleMgr_saler'
 */
API.getSecondMenu = API.__HOST__ + 'interfaces/privilegeApi/getSecondMenu.action';




// http://bmadev.ceboss.cn:18080/SalesManager/interfaces/privilegeApi/getSecondMenu.action?topMenuId=ftree_saleMgr_saler