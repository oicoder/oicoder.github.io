import{n as a,M as o,a as r}from"./index-b89c2a7f.js";import"./vendor-2ac22ffe.js";const c=""+new URL("../png/like-63b04684.png",import.meta.url).href;const l={name:"About",components:{Markdown:o},data(){return{about:"",isLiked:"notLiked",likeTimes:0,loading:!0}},created(){localStorage.getItem("isLiked")==="undefined"?(localStorage.setItem("isLiked","notLiked"),this.isLiked="notLiked"):this.isLiked=localStorage.getItem("isLiked"),this.getAboutFn()},mounted(){this.queryLikeFn()},methods:{async getAboutFn(){const i=await this.$store.dispatch("github/getAboutAction").catch(n=>{throw this.$message({content:"获取关于内容失败",type:"error"}),new Error(n)}).finally(()=>{this.loading=!1}),t=(i==null?void 0:i.body)||"",s=await new r().parse(t).catch(n=>{throw this.$message({content:"解析 markdown 失败",type:"error"}),new Error(n)});this.about=s==null?void 0:s.content,this.appendBusuanzi(s==null?void 0:s.content)},async queryLikeFn(){const i=await this.$store.dispatch("leancloud/queryLikeAction","getTimes").catch(t=>{throw this.$message({content:"获取点赞次数失败",type:"error"}),new Error(t)});i!=="undefined"&&(this.likeTimes=i)},async likeClick(){if(this.isLiked==="isLiked"){this.$message({content:"您已经点过赞了哦~",type:"warning"});return}this.likeTimes=await this.$store.dispatch("leancloud/queryLikeAction").catch(i=>{throw this.$message({content:"点赞失败",type:"error"}),new Error(i)}),this.isLiked="isLiked",localStorage.setItem("isLiked","isLiked"),this.$message({content:"谢谢您的点赞~",type:"success"})},appendBusuanzi(i){if(!i)return;if(i.includes("busuanzi")){const e=document.querySelector('script[src*="busuanzi"]');e&&e.remove();const s=document.createElement("script");s.src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js",document.body.appendChild(s)}}}};var u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-wrap"},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"about"},[e("Markdown",{attrs:{content:t.about}}),e("div",{staticClass:"like"},[t._m(0),e("div",{staticClass:"info"},[e("h2",[t._v("喜欢就点赞 疼爱就打赏")]),e("p",[t._v("觉得博客不错的话，就点个赞吧")]),e("div",{staticClass:"like-btn",attrs:{"data-text":`已经有 ${t.likeTimes} 人点赞了~`},on:{click:t.likeClick}},[e("SvgIcon",{attrs:{name:"like"}})],1)]),e("figure",{staticClass:"alipay-qr"},[e("img",{attrs:{src:t.$config.alipay_qr,alt:"支付宝二维码"}})])])],1)])},d=[function(){var i=this,t=i._self._c;return t("figure",{staticClass:"like-img"},[t("img",{attrs:{src:c,alt:"like"}})])}],m=a(l,u,d,!1,null,"a94edc09",null,null);const _=m.exports;export{_ as default};
