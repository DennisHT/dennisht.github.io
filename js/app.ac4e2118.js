(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"07ca":function(t,e,a){"use strict";var s=a("08da"),n=a.n(s);n.a},"08da":function(t,e,a){},4230:function(t,e,a){},"4be1":function(t,e,a){"use strict";var s=a("4230"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("my-header"),a("v-content",[a("my-content")],1)],1)},i=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-app-bar",{attrs:{app:""}},[s("v-toolbar-title",[s("v-img",{staticClass:"mx-2",attrs:{src:a("b036"),"max-height":"100","max-width":"100",contain:""}})],1),s("v-toolbar-title",{staticClass:"ml-6 headline text-uppercase"},[t._v("Database Simulation")]),s("v-spacer"),s("router-link",{staticClass:"mr-2",attrs:{to:"/","active-class":"active",exact:""}},[s("v-btn",{attrs:{text:""}},[t._v("Pokedex")])],1),s("router-link",{staticClass:"mr-2",attrs:{to:"/mypokemon","active-class":"active"}},[s("v-btn",{attrs:{text:""}},[t._v("My Pokemon")])],1)],1)],1)},r=[],l={},c=l,u=(a("4be1"),a("2877")),d=a("6544"),p=a.n(d),m=a("40dc"),v=a("8336"),h=a("adda"),g=a("2fa4"),f=a("2a7f"),b=Object(u["a"])(c,o,r,!1,null,"057462a5",null),k=b.exports;p()(b,{VAppBar:m["a"],VBtn:v["a"],VImg:h["a"],VSpacer:g["a"],VToolbarTitle:f["a"]});var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"album text-muted"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row d-flex justify-content-center"},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{staticClass:"my-3 w-100"})],1)],1)])])},x=[],y={components:{}},C=y,V=(a("07ca"),Object(u["a"])(C,_,x,!1,null,null,null)),w=V.exports,j={name:"App",components:{MyHeader:k,MyContent:w},data:()=>({})},P=j,D=a("7496"),S=a("a75b"),M=Object(u["a"])(P,n,i,!1,null,null,null),L=M.exports;p()(M,{VApp:D["a"],VContent:S["a"]});var O=a("f309");s["a"].use(O["a"]);var T=new O["a"]({icons:{iconfont:"mdi"}}),I=a("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"text-uppercase"},[t._v("Pokedex")]),a("span",[t._v("Total Pokemon: "+t._s(t.myPokemon.length))]),a("v-container",{attrs:{fluid:""}},[a("div",{staticClass:"text-center my-3"},[a("v-pagination",{attrs:{length:t.paginationLength},on:{input:t.changePage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),a("v-row",{staticClass:"grey lighten-5",attrs:{align:"center",justify:"center"}},t._l(t.pokemonData.results,function(e,s){return a("v-card",{key:s,staticClass:"col-lg-2 col-md-3 col-sm-4 col-xs-6 mb-3 mr-1 ml-1",attrs:{tile:"",hover:""}},[a("v-card-title",{staticClass:"text-capitalize pr-0"},[t._v(t._s(e.name))]),a("v-card-text",[a("v-btn",{attrs:{to:t.getUrl(e.url)}},[t._v("View Detail")])],1)],1)}),1)],1)],1)},B=[],A=a("bc3a"),E=a.n(A);const z=[{name:"Bulbasaur",nickname:"Bulbasaur 1",img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",moves:["razor-wind","swords-dance","cut","bind"]}];var R={created(){E.a.get("https://pokeapi.co/api/v2/pokemon").then(t=>this.pokemonData=t.data)},data:()=>{return{pokemonData:[],page:1,myPokemon:z}},computed:{paginationLength(){return this.pokemonData.count?Math.ceil(this.pokemonData.count/20):1}},methods:{changePage(){E.a.get(`https://pokeapi.co/api/v2/pokemon?offset=${20*(this.page-1)}&limit=20`).then(t=>this.pokemonData=t.data)},getUrl(t){if(t){let e=t.split("/");return`/detail/${e[6]}`}return""}}},F=R,H=a("b0af"),J=a("99d9"),N=a("a523"),U=a("891e"),q=a("0fd9"),W=Object(u["a"])(F,$,B,!1,null,null,null),Y=W.exports;p()(W,{VBtn:v["a"],VCard:H["a"],VCardText:J["b"],VCardTitle:J["c"],VContainer:N["a"],VPagination:U["a"],VRow:q["a"]});var G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("h1",{staticClass:"text-uppercase"},[t._v("My Pokemon")]),a("v-subheader",{staticClass:"px-0 pb-6"},[t._v("Click the image to see pokemon's move set!")])],1),a("v-container",{staticClass:"w-100",attrs:{fluid:""}},[a("div",{staticClass:"text-center my-3"},[a("v-pagination",{attrs:{length:t.paginationLength},on:{input:t.reload},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}),a("br"),a("span",{staticClass:"test-danger"},[t._v(t._s(t.message))])],1),a("v-row",{staticClass:"grey lighten-5",attrs:{align:"center",justify:"center"}},t._l(t.shownList,function(e,s){return a("v-card",{key:s,staticClass:"col-lg-2 col-md-3 col-sm-4 col-xs-6 mb-3 mr-1 ml-1",staticStyle:{cursor:"default"},attrs:{tile:"",hover:""}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline text-capitalize"},[t._v(t._s(e.nickname))]),a("v-list-item-subtitle",{staticClass:"text-capitalize"},[t._v("Species: "+t._s(e.name))])],1)],1),a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(s){s.on;return[e.img?a("v-img",{staticStyle:{cursor:"pointer"},attrs:{height:"150",src:e.img},on:{click:function(e){t.dialog=!0}}}):t._e()]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("Move set")]),a("v-card-text",t._l(e.moves,function(e,s){return a("v-btn",{key:s,staticClass:"w-50 justify-content-start",staticStyle:{cursor:"default"},attrs:{text:""}},[t._v(t._s(e))])}),1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.close()}}},[t._v("Close")])],1)],1)],1),a("v-card-actions",{staticClass:"justify-content-center"},[a("v-btn",{attrs:{text:"",color:"deep-purple accent-4 w-100"},on:{click:function(e){return t.release(s)}}},[t._v("Release")])],1)],1)}),1)],1)],1)},K=[],Q={created(){this.reload()},data:()=>{return{lists:z,shownList:[],page:1,message:"",dialog:!1}},computed:{paginationLength(){return this.lists?Math.ceil(this.lists.length/10):1}},watch:{lists:()=>{(void 0).reload()}},methods:{reload(){let t=this.lists.length<10*this.page?this.lists.length:10*this.page,e=10*(this.page-1);this.shownList=this.lists.slice(e,t)},release(t){if(this.lists.length<=1)return void(this.message="You need to at least have 1 pokemon.");let e=10*(this.page-1)+t;this.lists.splice(e,1),this.shownList.splice(t,1),0===this.shownList.length&&this.page>1&&(this.page-=1,this.reload()),this.message=""},close(){this.dialog=!1}},mounted(){this.reload()}},X=Q,Z=a("169a"),tt=a("da13"),et=a("5d23"),at=a("e0c7"),st=Object(u["a"])(X,G,K,!1,null,null,null),nt=st.exports;p()(st,{VBtn:v["a"],VCard:H["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VContainer:N["a"],VDialog:Z["a"],VImg:h["a"],VListItem:tt["a"],VListItemContent:et["a"],VListItemSubtitle:et["b"],VListItemTitle:et["c"],VPagination:U["a"],VRow:q["a"],VSubheader:at["a"]});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Pokemon Detail")]),a("v-subheader",[a("router-link",{staticClass:"mr-2",attrs:{to:"/","active-class":"active",exact:"",tag:"a"}},[t._v("<< Back to Pokedex")])],1),a("v-container",{attrs:{fluid:""}},[a("v-row",{staticClass:"grey lighten-5",attrs:{align:"center",justify:"center"}},[a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"headline text-capitalize"},[t._v(t._s(t.pokemonData.name))]),a("v-list-item-subtitle",[t._v("Height: "+t._s(t.pokemonData.height)+" | Weight: "+t._s(t.pokemonData.weight))])],1)],1),t.front_default?a("v-img",{attrs:{src:t.front_default,height:"auto"}}):a("v-card-text",[t._v("No image available")]),a("v-card-text",[a("h5",[t._v("Moves")]),t._l(t.moves,function(e,s){return a("v-btn",{key:s,staticClass:"w-50 justify-content-start",staticStyle:{cursor:"default"},attrs:{text:""}},[t._v(t._s(e))])})],2),a("v-card-actions",{staticClass:"justify-content-center"},[a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){e.on;return[a("v-btn",{attrs:{text:"",color:"deep-purple accent-4 w-100"},on:{click:t.tryToCatch}},[t._v("Catch!")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-subheader",[t._v(t._s(t.message))]),a("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[t._v("Input a name (max 10 character)")]),a("v-card-text",[a("v-text-field",{attrs:{counter:10,label:"Nickname",required:""},model:{value:t.nickname,callback:function(e){t.nickname=e},expression:"nickname"}})],1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.addPokemon()}}},[t._v("Submit")])],1)],1)],1)],1),a("div",{staticClass:"d-flex justify-content-center"},["Catch Failed!"===t.message?a("span",{staticClass:"text-danger"},[t._v(t._s(t.message))]):t._e()])],1)],1)],1)],1)},ot=[],rt={created(){E.a.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(t=>{this.pokemonData=t.data,this.setMoves()})},data(){return{id:this.$route.params.id,pokemonData:{},moves:[],nickname:"",dialog:!1,message:""}},computed:{front_default(){return this.pokemonData?this.pokemonData.sprites.front_default:""}},methods:{addPokemon(){z.push({name:this.pokemonData.name,nickname:this.nickname,img:this.front_default,moves:this.moves}),this.dialog=!1,this.$router.push("/")},tryToCatch(){let t=Math.ceil(100*Math.random())<51;t?(this.message="Catch Success!",this.dialog=!0):this.message="Catch Failed!"},setMoves(){for(let t=0;t<4;t++){let t=Math.floor(Math.random()*this.pokemonData.moves.length);this.moves.push(this.pokemonData.moves[t].move.name),this.pokemonData.moves.splice(t,1)}}}},lt=rt,ct=a("8654"),ut=Object(u["a"])(lt,it,ot,!1,null,null,null),dt=ut.exports;p()(ut,{VBtn:v["a"],VCard:H["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VContainer:N["a"],VDialog:Z["a"],VImg:h["a"],VListItem:tt["a"],VListItemContent:et["a"],VListItemSubtitle:et["b"],VListItemTitle:et["c"],VRow:q["a"],VSubheader:at["a"],VTextField:ct["a"]});const pt=[{path:"/",component:Y},{path:"/mypokemon",component:nt},{path:"/detail/:id",component:dt}];a("4989"),a("ab8b");s["a"].config.productionTip=!1,s["a"].use(I["a"]);const mt=new I["a"]({routes:pt,mode:"history"});new s["a"]({vuetify:T,router:mt,render:t=>t(L)}).$mount("#app")},b036:function(t,e,a){t.exports=a.p+"img/pokemonlogo.49255cb2.png"}});
//# sourceMappingURL=app.ac4e2118.js.map