import{a as r}from"./axios-G2rPRu76.js";import{_ as l,r as i,o as d,c as _,a as n,b as o,w as a,d as c,F as p}from"./index-Z2iVc0QE.js";const h={},f={class:"aside nav flex-column"},k={class:"nav-item"},v={class:"nav-item"},x={class:"nav-item"};function $(s,e){const t=i("RouterLink");return d(),_("ul",f,[n("li",k,[o(t,{to:"/admin/my-products",class:"nav-link"},{default:a(()=>[c("產品列表")]),_:1})]),n("li",v,[o(t,{to:"/admin",class:"nav-link"},{default:a(()=>[c("訂單列表")]),_:1})]),n("li",x,[o(t,{to:"/",class:"nav-link"},{default:a(()=>[c("回到前台")]),_:1})])])}const A=l(h,[["render",$]]),V={components:{AsidebarComponent:A},methods:{checkAdmin(){r.post("https://vue3-course-api.hexschool.io/v2/api/user/check").then(()=>{}).catch(e=>{alert(e.response.data.message),this.$router.push("/login")})}},mounted(){var e;const s=(e=document.cookie.split("; ").find(t=>t.startsWith("hexToken=")))==null?void 0:e.split("=")[1];r.defaults.headers.common.Authorization=s,this.checkAdmin()}},w=n("h1",null,"這是後台頁面",-1);function C(s,e,t,b,R,g){const m=i("AsidebarComponent"),u=i("RouterView");return d(),_(p,null,[w,o(m),o(u)],64)}const F=l(V,[["render",C]]);export{F as default};
