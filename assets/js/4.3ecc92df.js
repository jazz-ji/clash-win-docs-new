(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7],{237:function(s,t,a){},238:function(s,t,a){"use strict";a(237)},254:function(s,t,a){},261:function(s,t,a){"use strict";a.r(t);const i=Symbol(),e=Symbol(),n=Symbol();var r={props:["src"],data:()=>({status:i}),computed:{isDefault(){return this.status===i},isLoaded(){return this.status===e},isFailed(){return this.status===n}},methods:{imgLoaded(){this.status=e},imgFailed(){this.status=n}}},l=(a(238),a(10)),d=Object(l.a)(r,(function(){var s=this,t=s._self._c;return t("div",{staticClass:"lazy-img"},[t("div",{directives:[{name:"show",rawName:"v-show",value:s.isDefault,expression:"isDefault"}],staticClass:"card pending"},[t("div",[s._v("Clash for Windows")])]),s._v(" "),t("img",{directives:[{name:"show",rawName:"v-show",value:s.isLoaded,expression:"isLoaded"}],staticClass:"img",attrs:{src:s.src},on:{load:s.imgLoaded,error:s.imgFailed,click:function(t){return s.$emit("click")}}}),s._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:s.isFailed,expression:"isFailed"}],staticClass:"card failed"},[t("div",[s._v("image 404")])])])}),[],!1,null,"9b81c2a8",null);t.default=d.exports},296:function(s,t,a){"use strict";a(254)},305:function(s,t,a){"use strict";a.r(t);var i={components:{LazyImg:a(261).default},data:()=>({ads:[{url:"https://fastlink.so/auth/register?code=clashw",img:"https://download.fastlink.digital/fastlink_banner.jpg"},{url:"https://speedcat-aff.com/auth/register?code=gYgD",img:"https://speedcat.co/speedcat-banner.jpg"}]}),methods:{handleAdClick({url:s}){s&&window.open(s)}}},e=(a(296),a(10)),n=Object(e.a)(i,(function(){var s=this,t=s._self._c;return t("div",{staticClass:"list"},s._l(s.ads,(function(a,i){return t("div",{key:a.url},[t("lazy-img",{staticClass:"item",attrs:{src:a.img},on:{click:function(t){return s.handleAdClick(a)}}}),s._v(" "),i<s.ads.length-1?t("div",{staticClass:"saperator"}):s._e()],1)})),0)}),[],!1,null,"0258f072",null);t.default=n.exports}}]);