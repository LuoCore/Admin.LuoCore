import{O as s}from"./index-2aad6dfc.js";function o(){return s.get("/api/Basic/GetComboBoxTreeMenuInfos")}function r(){return s.get("/api/Basic/GetTreeTableMenuInfos")}function i(e){return s.put("/api/Basic/EditMenuInfo",e)}function a(e){return s.delete("/api/Basic/DeleteMenuInfoByMenuId",{params:{menuId:e}})}function c(e){return s.patch("/api/Basic/UserResetPassword",void 0,{params:{userId:e}})}function u(e){return s.put("/api/Basic/EditUserInfo",e)}function f(e){return s.delete("/api/Basic/DeleteUserByUserId",{params:{userId:e}})}function I(e){return s.post("/api/Basic/GetUserInfoPageList",e)}function l(){return s.get("/api/Basic/GetComboBoxUserInfo")}function p(e){return s.post("/api/Basic/GetRoleInfoList",e)}function B(e){return s.put("/api/Basic/EditRoleInfo",e)}function d(e){return s.delete("/api/Basic/DeleteRoleInfoByRoleId",{params:{roleId:e}})}function m(e){return s.patch("/api/Basic/UpdateRoleMenuByRoleId",e)}function y(){return s.get("/api/Basic/GetRoleInfos")}function G(e){return s.put("/api/Basic/EditSystemClientInfo",e)}function C(e){return s.delete("/api/Basic/DeleteSystemClientInfoBySystemClientId",{params:{systemClientId:e}})}function R(e){return s.post("/api/Basic/GetSystemClientInfoList",e)}function U(){return s.get("/api/Basic/GetComboBoxSystemClientInfos")}export{C as D,G as E,R as G,m as U,l as a,U as b,o as c,i as d,r as e,a as f,B as g,p as h,d as i,y as j,u as k,I as l,f as m,c as n};
