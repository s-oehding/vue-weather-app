webpackJsonp([2,0],{0:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=a(128),i=s(n),o=a(126),r=s(o),l=a(127),d=s(l),c=a(118),u=s(c);i.default.use(r.default),i.default.use(d.default),i.default.http.options.xhr={withCredentials:!0};var f=[{path:"/",component:u.default}],m=new d.default({routes:f});new i.default({router:m}).$mount("#app")},110:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function n(t){return o.default.unix(t).format("HH:mm")}Object.defineProperty(e,"__esModule",{value:!0}),e.toTime=n;var i=a(1),o=s(i)},111:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(120),i=s(n),o=a(119),r=s(o);e.default={name:"app",components:{WeatherData:i.default,Gmap:r.default},data:function(){return{gmapKey:"AIzaSyCZtDHCa5264C_wus713s_is44ACsEtqmY",location:{lat:null,lng:null},address:"",zoom:10,ready:!1}},mounted:function(){this.getGeolocation()},methods:{getGeolocation:function(){if("geolocation"in navigator){var t=navigator.geolocation;t.getCurrentPosition(function(t){this.location.lng=t.coords.longitude,this.location.lat=t.coords.latitude,this.ready=!0}.bind(this))}},setReady:function(){this.ready=!0},resetMap:function(){this.$emit("resetMap")}}}},112:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(116),i=s(n);e.default={name:"gmap",props:["apiKey","lat","lng","address","zoom"],data:function(){return{map:{}}},created:function(){this.initMap()},methods:{initMap:function(){var t=this;i.default.KEY=this.apiKey,i.default.load(function(e){var a={lat:parseFloat(t.lat),lng:parseFloat(t.lng)},s=document.body.clientWidth/100*10;t.map=new e.maps.Map(document.getElementById("map"),{zoom:12,disableDefaultUI:!0,scrollwheel:!1,center:a}),t.map.panBy(s,0),t.geocoder=new e.maps.Geocoder,t.marker=new e.maps.Marker({position:a,animation:e.maps.Animation.DROP,map:t.map}),t.map.addListener("click",function(t){this.$parent.location.lng=t.latLng.lng(),this.$parent.location.lat=t.latLng.lat()}.bind(t))})},geocodeAddress:function(){this.geocoder.geocode({address:this.address},function(t,e){"OK"===e?(this.$parent.location.lat=t[0].geometry.location.lat(),this.$parent.location.lng=t[0].geometry.location.lng()):console.log("Geocode was not successful for the following reason: "+e)}.bind(this))},updateMap:function(){var t={lat:parseFloat(this.lat),lng:parseFloat(this.lng)},e=document.body.clientWidth/100*10;this.map.setCenter(t),this.map.panBy(e,0),this.marker.setPosition(t)}},resetMap:function(){this.map.setCenter(this.marker.getPosition())},watch:{lat:{handler:function(t,e){this.updateMap()}},lng:{handler:function(t,e){this.updateMap()}},address:{handler:function(t,e){this.geocodeAddress()}},zoom:{handler:function(t,e){this.map.setZoom(parseFloat(this.zoom))}}},computed:{geolocation:function(){return console.log("Navigator initialised",navigator.geolocation),navigator.geolocation}}}},113:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(121),i=s(n);e.default={name:"weather-data",components:{LocalWeather:i.default},props:["lat","lng"],data:function(){return{forecast:{},apiUrl:"http://api.openweathermap.org/data/2.5/weather",apiKey:"0ae1ca667483d87c5e91da944d267f9e",ready:!1}},mounted:function(){this.getForecast()},methods:{getForecast:function(){this.$http.get(this.apiUrl+"?lat="+this.lat+"&lon="+this.lng+"&appid="+this.apiKey+"&units=metric").then(function(t){this.forecast=t.body,this.ready=!0},function(t){console.log(t),this.ready=!1})}},watch:{lat:{handler:function(t,e){this.getForecast()}},lng:{handler:function(t,e){this.getForecast()}}}}},114:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(110);e.default={name:"local-weather",props:["forecast"],data:function(){return{}},filters:{toTime:s.toTime}}},115:function(t,e){},117:function(t,e,a){function s(t){return a(n(t))}function n(t){return i[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var i={"./af":2,"./af.js":2,"./ar":8,"./ar-dz":3,"./ar-dz.js":3,"./ar-ly":4,"./ar-ly.js":4,"./ar-ma":5,"./ar-ma.js":5,"./ar-sa":6,"./ar-sa.js":6,"./ar-tn":7,"./ar-tn.js":7,"./ar.js":8,"./az":9,"./az.js":9,"./be":10,"./be.js":10,"./bg":11,"./bg.js":11,"./bn":12,"./bn.js":12,"./bo":13,"./bo.js":13,"./br":14,"./br.js":14,"./bs":15,"./bs.js":15,"./ca":16,"./ca.js":16,"./cs":17,"./cs.js":17,"./cv":18,"./cv.js":18,"./cy":19,"./cy.js":19,"./da":20,"./da.js":20,"./de":22,"./de-at":21,"./de-at.js":21,"./de.js":22,"./dv":23,"./dv.js":23,"./el":24,"./el.js":24,"./en-au":25,"./en-au.js":25,"./en-ca":26,"./en-ca.js":26,"./en-gb":27,"./en-gb.js":27,"./en-ie":28,"./en-ie.js":28,"./en-nz":29,"./en-nz.js":29,"./eo":30,"./eo.js":30,"./es":32,"./es-do":31,"./es-do.js":31,"./es.js":32,"./et":33,"./et.js":33,"./eu":34,"./eu.js":34,"./fa":35,"./fa.js":35,"./fi":36,"./fi.js":36,"./fo":37,"./fo.js":37,"./fr":40,"./fr-ca":38,"./fr-ca.js":38,"./fr-ch":39,"./fr-ch.js":39,"./fr.js":40,"./fy":41,"./fy.js":41,"./gd":42,"./gd.js":42,"./gl":43,"./gl.js":43,"./he":44,"./he.js":44,"./hi":45,"./hi.js":45,"./hr":46,"./hr.js":46,"./hu":47,"./hu.js":47,"./hy-am":48,"./hy-am.js":48,"./id":49,"./id.js":49,"./is":50,"./is.js":50,"./it":51,"./it.js":51,"./ja":52,"./ja.js":52,"./jv":53,"./jv.js":53,"./ka":54,"./ka.js":54,"./kk":55,"./kk.js":55,"./km":56,"./km.js":56,"./ko":57,"./ko.js":57,"./ky":58,"./ky.js":58,"./lb":59,"./lb.js":59,"./lo":60,"./lo.js":60,"./lt":61,"./lt.js":61,"./lv":62,"./lv.js":62,"./me":63,"./me.js":63,"./mi":64,"./mi.js":64,"./mk":65,"./mk.js":65,"./ml":66,"./ml.js":66,"./mr":67,"./mr.js":67,"./ms":69,"./ms-my":68,"./ms-my.js":68,"./ms.js":69,"./my":70,"./my.js":70,"./nb":71,"./nb.js":71,"./ne":72,"./ne.js":72,"./nl":74,"./nl-be":73,"./nl-be.js":73,"./nl.js":74,"./nn":75,"./nn.js":75,"./pa-in":76,"./pa-in.js":76,"./pl":77,"./pl.js":77,"./pt":79,"./pt-br":78,"./pt-br.js":78,"./pt.js":79,"./ro":80,"./ro.js":80,"./ru":81,"./ru.js":81,"./se":82,"./se.js":82,"./si":83,"./si.js":83,"./sk":84,"./sk.js":84,"./sl":85,"./sl.js":85,"./sq":86,"./sq.js":86,"./sr":88,"./sr-cyrl":87,"./sr-cyrl.js":87,"./sr.js":88,"./ss":89,"./ss.js":89,"./sv":90,"./sv.js":90,"./sw":91,"./sw.js":91,"./ta":92,"./ta.js":92,"./te":93,"./te.js":93,"./tet":94,"./tet.js":94,"./th":95,"./th.js":95,"./tl-ph":96,"./tl-ph.js":96,"./tlh":97,"./tlh.js":97,"./tr":98,"./tr.js":98,"./tzl":99,"./tzl.js":99,"./tzm":101,"./tzm-latn":100,"./tzm-latn.js":100,"./tzm.js":101,"./uk":102,"./uk.js":102,"./uz":103,"./uz.js":103,"./vi":104,"./vi.js":104,"./x-pseudo":105,"./x-pseudo.js":105,"./yo":106,"./yo.js":106,"./zh-cn":107,"./zh-cn.js":107,"./zh-hk":108,"./zh-hk.js":108,"./zh-tw":109,"./zh-tw.js":109};s.keys=function(){return Object.keys(i)},s.resolve=n,t.exports=s,s.id=117},118:function(t,e,a){var s,n;a(115),s=a(111);var i=a(122);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=s},119:function(t,e,a){var s,n;s=a(112);var i=a(124);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=s},120:function(t,e,a){var s,n;s=a(113);var i=a(125);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=s},121:function(t,e,a){var s,n;s=a(114);var i=a(123);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,t.exports=s},122:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"map-wrapper"},[t.ready?e("gmap",{attrs:{"api-key":t.gmapKey,lat:t.location.lat,lng:t.location.lng,address:t.address,zoom:t.zoom},on:{resetMap:function(e){t.resetMap()}}}):t._e()])," ",e("div",{staticClass:"controls-wrapper"},[e("nav",{staticClass:"navbar row"},[e("div",{staticClass:"col-2"},[e("label",{attrs:{for:"lat"}},["Latitude"])," ",e("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.location.lat,expression:"location.lat",modifiers:{lazy:!0}}],staticClass:"form-input",attrs:{type:"text",name:"lat",placeholder:"latitude"},domProps:{value:t._s(t.location.lat)},on:{change:function(e){t.location.lat=e.target.value}}})])," ",e("div",{staticClass:"col-2"},[e("label",{attrs:{for:"lng"}},["Longitude"])," ",e("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.location.lng,expression:"location.lng",modifiers:{lazy:!0}}],staticClass:"form-input",attrs:{type:"text",name:"lng",placeholder:"longitude"},domProps:{value:t._s(t.location.lng)},on:{change:function(e){t.location.lng=e.target.value}}})])," ",e("div",{staticClass:"col-2"},[e("label",{attrs:{for:"geolocation"}},["Geolocation"])," ",e("a",{staticClass:"btn",on:{click:function(e){t.getGeolocation()}}},["Get my Position"])])," ",e("div",{staticClass:"col-2"},[e("label",{attrs:{for:"address"}},["Geocode Address"])," ",e("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.address,expression:"address",modifiers:{lazy:!0}}],staticClass:"form-input",attrs:{type:"text",name:"address",placeholder:"Hamburg DE"},domProps:{value:t._s(t.address)},on:{change:function(e){t.address=e.target.value}}})])," ",e("div",{staticClass:"col-2"},[e("label",{attrs:{for:"zoom"}},["Zoom"])," ",e("input",{directives:[{name:"model",rawName:"v-model",value:t.zoom,expression:"zoom"}],staticClass:"form-input",attrs:{type:"range",id:"zoom",min:"3",max:"18",step:"1"},domProps:{value:t._s(t.zoom)},on:{input:function(e){t.zoom=e.target.value}}})])," ",e("div",{staticClass:"col-2"},[e("label",{attrs:{for:"lng"}},["Reset to Marker"])," ",e("a",{staticClass:"btn",on:{click:function(e){t.resetMap()}}},["Center Map"])])])])," ",e("div",{staticClass:"sidebar-wrapper"},[t.ready?e("weather-data",{attrs:{lat:t.location.lat,lng:t.location.lng}}):t._e()])])},staticRenderFns:[]}},123:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return t.forecast.weather[0]?e("div",{attrs:{id:"forecast-wrapper"}},[e("h2",{staticClass:"city-name"},[t._s(t.forecast.name)])," ",e("div",{staticClass:"weather-situation"},[e("i",{staticClass:"wi",class:"wi-owm-"+t.forecast.weather[0].id})," ",e("span",[t._s(t.forecast.main.temp)+"° C"])])," ",e("div",{staticClass:"wind-situation"},[e("div",{staticClass:"wrapper"},[t.forecast.wind.deg?e("i",{staticClass:"wi wi-wind",class:"towards-"+t.forecast.wind.deg+"-deg"}):t._e()])," ",e("span",[t._s(t.forecast.wind.speed)+" m/s"])])," ",e("p",{staticClass:"weather-widget situation",attrs:{id:"weather-widget-main"}},[t._s(t.forecast.weather[0].main)])," ",e("table",{staticClass:"table table-condensed"},[t._m(0)," ",e("tbody",[e("tr",[e("td",[e("i",{staticClass:"wi wi-thermometer-exterior"})," "+t._s(t.forecast.main.temp_min)+"°C"])," ",e("td",[e("i",{staticClass:"wi wi-thermometer"})," "+t._s(t.forecast.main.temp_max)+"°C"])])])])," ",e("table",{staticClass:"weather-data table table-condensed"},[t._m(1)," ",e("tbody",[e("tr",[t._m(2)," ",e("td",{attrs:{id:"weather-widget-wind"}},[t._s(t.forecast.wind.speed)+" m/s"])])," ",e("tr",[t._m(3)," ",e("td",{attrs:{id:"weather-widget-cloudiness"}},[t._s(t.forecast.clouds.all)+"%"])])," ",e("tr",[t._m(4)," ",e("td",{attrs:{id:"weather-widget-pressure"}},[t._s(t.forecast.main.pressure)+" hpa"])])," ",e("tr",[t._m(5)," ",e("td",{attrs:{id:"weather-widget-humidity"}},[t._s(t.forecast.main.humidity)+" %"])])," ",e("tr",[t._m(6)," ",e("td",{attrs:{id:"weather-widget-sunrise"}},[t._s(t._f("toTime")(t.forecast.sys.sunrise))])])," ",e("tr",[t._m(7)," ",e("td",{attrs:{id:"weather-widget-sunset"}},[t._s(t._f("toTime")(t.forecast.sys.sunset))])])])])]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement;return e("thead",[e("tr",[e("th",["Temp min."])," ",e("th",["Temp max."])])])},function(){var t=this,e=t.$createElement;return e("thead",[e("tr",[e("th",["Conditions"])])])},function(){var t=this,e=t.$createElement;return e("td",[e("i",{staticClass:"wi wi-windy"})," Wind"])},function(){var t=this,e=t.$createElement;return e("td",[e("i",{staticClass:"wi wi-cloudy"})," Cloudiness"])},function(){var t=this,e=t.$createElement;return e("td",[e("i",{staticClass:"wi wi-barometer"})," Pressure"])},function(){var t=this,e=t.$createElement;return e("td",[e("i",{staticClass:"wi wi-humidity"})," Humidity"])},function(){var t=this,e=t.$createElement;return e("td",[e("i",{staticClass:"wi wi-sunrise"})," Sunrise"])},function(){var t=this,e=t.$createElement;return e("td",[e("i",{staticClass:"wi wi-sunset"})," Sunset"])}]}},124:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return e("div",{attrs:{id:"map"}})},staticRenderFns:[]}},125:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return t.ready?e("local-weather",{attrs:{forecast:t.forecast}}):e("div",{staticClass:"preloader"},[e("div",{staticClass:"dot-loader"})])},staticRenderFns:[]}}});
//# sourceMappingURL=app.1d554230b311cca04bcb.js.map