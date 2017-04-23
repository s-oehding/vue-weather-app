webpackJsonp([2,0],{0:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var n=s(138),o=a(n),r=s(136),i=a(r),l=s(137),c=a(l),d=s(126),u=a(d);o.default.use(i.default),o.default.use(c.default),o.default.http.options.xhr={withCredentials:!0};var f=[{path:"/",component:u.default}],m=new c.default({routes:f});new o.default({router:m}).$mount("#app")},117:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function n(t){return r.default.unix(t).format("HH:mm")}Object.defineProperty(e,"__esModule",{value:!0}),e.toTime=n;var o=s(1),r=a(o)},118:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(127),o=a(n),r=s(129),i=a(r),l=s(130),c=a(l);e.default={name:"app",components:{DarkSky:o.default,Gmap:i.default,Navbar:c.default},data:function(){return{gmapKey:"AIzaSyCZtDHCa5264C_wus713s_is44ACsEtqmY",location:{lat:null,lng:null},address:{},newAddress:"",zoom:10,ready:!1,reset:!1}},created:function(){this.getGeolocation()},methods:{getGeolocation:function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(t){this.location.lng=t.coords.longitude,this.location.lat=t.coords.latitude,console.log("GEOLOCATION",t.coords),this.ready=!0}.bind(this))},resetMap:function(){this.reset=!0,this.$nextTick(function(){this.reset=!1})},locationUpdate:function(t){this.location=t},addressUpdate:function(t){this.address=t}}}},119:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(128),o=a(n);e.default={name:"dark-sky",components:{LocalWeather:o.default},props:["address","lat","lng"],data:function(){return{forecast:{},apiUrl:"https://api.darksky.net/forecast/",apiKey:"0dd6813c8cbc198e1b52ec974f1caeea",ready:!1}},mounted:function(){this.getForecast()},methods:{getForecast:function(){this.$http.jsonp(this.apiUrl+this.apiKey+"/"+this.lat+","+this.lng+"?units=auto&lang=de").then(function(t){this.forecast=t.body,this.ready=!0},function(t){console.log(t),this.ready=!1}.bind(this))}},watch:{lat:{handler:function(t,e){this.getForecast()}},lng:{handler:function(t,e){this.getForecast()}}}}},120:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(117);e.default={name:"local-weather",props:["address","forecast"],data:function(){return{}},filters:{toTime:a.toTime}}},121:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(124),o=a(n);e.default={name:"gmap",props:["apiKey","location","address","newAddress","zoom","reset"],data:function(){return{map:{}}},created:function(){this.initMap()},methods:{initMap:function(){var t=this;o.default.KEY=this.apiKey,o.default.load(function(e){t.map=new e.maps.Map(document.getElementById("map"),{zoom:12,disableDefaultUI:!0,scrollwheel:!1,draggableCursor:"crosshair",center:t.location}),t.geocoder=new e.maps.Geocoder,t.geocodeCoords(),t.marker=new e.maps.Marker({position:t.location,animation:e.maps.Animation.DROP,map:t.map}),t.map.addListener("click",function(t){var e={lat:t.latLng.lat(),lng:t.latLng.lng()};this.$emit("locationUpdate",e)}.bind(t)),t.map.addListener("mousemove",function(t){this.displayCursorCoordinates(t)}.bind(t))})},displayCursorCoordinates:function(t){},geocodeAddress:function(t){this.geocoder.geocode({address:t},function(t,e){if("OK"===e){console.log(t);var s={lat:t[0].geometry.location.lat(),lng:t[0].geometry.location.lng()};this.$emit("locationUpdate",s)}else console.log("Geocode was not successful for the following reason: "+e)}.bind(this))},geocodeCoords:function(){this.geocoder.geocode({location:this.location},function(t,e){"OK"===e?this.$emit("addressUpdate",t):console.log("Geocode was not successful for the following reason: "+e)}.bind(this))},updateMap:function(){this.map.panTo(this.location),this.marker.setPosition(this.location),this.geocodeCoords()},resetMap:function(){this.map.panTo(this.marker.getPosition())}},watch:{location:{handler:function(t,e){this.updateMap()},deep:!0},newAddress:{handler:function(t,e){this.geocodeAddress(t)}},zoom:{handler:function(t,e){this.map.setZoom(parseFloat(this.zoom))}},reset:{handler:function(t,e){t===!0&&this.resetMap()}}},computed:{geolocation:function(){return console.log("Navigator initialised",navigator.geolocation),navigator.geolocation}}}},122:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"navbar",methods:{init:function(){console.log("Navbar init")},getGeoLocation:function(){this.$emit("getGeoLocation"),console.log("emitting getGeoLocationTrigger")},resetMap:function(){this.$emit("resetMap")}}}},123:function(t,e){},125:function(t,e,s){function a(t){return s(n(t))}function n(t){return o[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var o={"./af":2,"./af.js":2,"./ar":9,"./ar-dz":3,"./ar-dz.js":3,"./ar-kw":4,"./ar-kw.js":4,"./ar-ly":5,"./ar-ly.js":5,"./ar-ma":6,"./ar-ma.js":6,"./ar-sa":7,"./ar-sa.js":7,"./ar-tn":8,"./ar-tn.js":8,"./ar.js":9,"./az":10,"./az.js":10,"./be":11,"./be.js":11,"./bg":12,"./bg.js":12,"./bn":13,"./bn.js":13,"./bo":14,"./bo.js":14,"./br":15,"./br.js":15,"./bs":16,"./bs.js":16,"./ca":17,"./ca.js":17,"./cs":18,"./cs.js":18,"./cv":19,"./cv.js":19,"./cy":20,"./cy.js":20,"./da":21,"./da.js":21,"./de":24,"./de-at":22,"./de-at.js":22,"./de-ch":23,"./de-ch.js":23,"./de.js":24,"./dv":25,"./dv.js":25,"./el":26,"./el.js":26,"./en-au":27,"./en-au.js":27,"./en-ca":28,"./en-ca.js":28,"./en-gb":29,"./en-gb.js":29,"./en-ie":30,"./en-ie.js":30,"./en-nz":31,"./en-nz.js":31,"./eo":32,"./eo.js":32,"./es":34,"./es-do":33,"./es-do.js":33,"./es.js":34,"./et":35,"./et.js":35,"./eu":36,"./eu.js":36,"./fa":37,"./fa.js":37,"./fi":38,"./fi.js":38,"./fo":39,"./fo.js":39,"./fr":42,"./fr-ca":40,"./fr-ca.js":40,"./fr-ch":41,"./fr-ch.js":41,"./fr.js":42,"./fy":43,"./fy.js":43,"./gd":44,"./gd.js":44,"./gl":45,"./gl.js":45,"./gom-latn":46,"./gom-latn.js":46,"./he":47,"./he.js":47,"./hi":48,"./hi.js":48,"./hr":49,"./hr.js":49,"./hu":50,"./hu.js":50,"./hy-am":51,"./hy-am.js":51,"./id":52,"./id.js":52,"./is":53,"./is.js":53,"./it":54,"./it.js":54,"./ja":55,"./ja.js":55,"./jv":56,"./jv.js":56,"./ka":57,"./ka.js":57,"./kk":58,"./kk.js":58,"./km":59,"./km.js":59,"./kn":60,"./kn.js":60,"./ko":61,"./ko.js":61,"./ky":62,"./ky.js":62,"./lb":63,"./lb.js":63,"./lo":64,"./lo.js":64,"./lt":65,"./lt.js":65,"./lv":66,"./lv.js":66,"./me":67,"./me.js":67,"./mi":68,"./mi.js":68,"./mk":69,"./mk.js":69,"./ml":70,"./ml.js":70,"./mr":71,"./mr.js":71,"./ms":73,"./ms-my":72,"./ms-my.js":72,"./ms.js":73,"./my":74,"./my.js":74,"./nb":75,"./nb.js":75,"./ne":76,"./ne.js":76,"./nl":78,"./nl-be":77,"./nl-be.js":77,"./nl.js":78,"./nn":79,"./nn.js":79,"./pa-in":80,"./pa-in.js":80,"./pl":81,"./pl.js":81,"./pt":83,"./pt-br":82,"./pt-br.js":82,"./pt.js":83,"./ro":84,"./ro.js":84,"./ru":85,"./ru.js":85,"./sd":86,"./sd.js":86,"./se":87,"./se.js":87,"./si":88,"./si.js":88,"./sk":89,"./sk.js":89,"./sl":90,"./sl.js":90,"./sq":91,"./sq.js":91,"./sr":93,"./sr-cyrl":92,"./sr-cyrl.js":92,"./sr.js":93,"./ss":94,"./ss.js":94,"./sv":95,"./sv.js":95,"./sw":96,"./sw.js":96,"./ta":97,"./ta.js":97,"./te":98,"./te.js":98,"./tet":99,"./tet.js":99,"./th":100,"./th.js":100,"./tl-ph":101,"./tl-ph.js":101,"./tlh":102,"./tlh.js":102,"./tr":103,"./tr.js":103,"./tzl":104,"./tzl.js":104,"./tzm":106,"./tzm-latn":105,"./tzm-latn.js":105,"./tzm.js":106,"./uk":107,"./uk.js":107,"./ur":108,"./ur.js":108,"./uz":110,"./uz-latn":109,"./uz-latn.js":109,"./uz.js":110,"./vi":111,"./vi.js":111,"./x-pseudo":112,"./x-pseudo.js":112,"./yo":113,"./yo.js":113,"./zh-cn":114,"./zh-cn.js":114,"./zh-hk":115,"./zh-hk.js":115,"./zh-tw":116,"./zh-tw.js":116};a.keys=function(){return Object.keys(o)},a.resolve=n,t.exports=a,a.id=125},126:function(t,e,s){var a,n;s(123),a=s(118);var o=s(133);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=a},127:function(t,e,s){var a,n;a=s(119);var o=s(132);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=a},128:function(t,e,s){var a,n;a=s(120);var o=s(131);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=a},129:function(t,e,s){var a,n;a=s(121);var o=s(134);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=a},130:function(t,e,s){var a,n;a=s(122);var o=s(135);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=o.render,n.staticRenderFns=o.staticRenderFns,t.exports=a},131:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.forecast?s("div",{attrs:{id:"local-weather-wrapper"}},[s("h2",{staticClass:"city-name"},[t._v(t._s(t.address[1].formatted_address))]),t._v(" "),s("p",{staticClass:"weather-summary"},[t._v(t._s(t.forecast.currently.summary))]),t._v(" "),s("div",{staticClass:"weather-situation"},[s("div",{staticClass:"icon-wrapper"},[s("i",{staticClass:"wi",class:"wi-forecast-io-"+t.forecast.currently.icon})]),t._v(" "),s("span",[t._v(t._s(t.forecast.currently.apparentTemperature)+"° C")])]),t._v(" "),s("div",{staticClass:"wind-situation"},[s("div",{staticClass:"icon-wrapper"},[s("i",{staticClass:"wi wi-wind",class:"towards-"+t.forecast.currently.windBearing+"-deg",attrs:{title:t.forecast.currently.windBearing+"°"}})]),t._v(" "),s("span",[t._v(t._s(t.forecast.currently.windSpeed)+" m/s")])]),t._v(" "),s("table",{staticClass:"temp table table-condensed"},[t._m(0),t._v(" "),s("tbody",[s("tr",[s("td",[s("i",{staticClass:"wi wi-thermometer-exterior"}),t._v(" "+t._s(t.forecast.daily.data[0].apparentTemperatureMin)+"°C")]),t._v(" "),s("td",[s("i",{staticClass:"wi wi-thermometer"}),t._v(" "+t._s(t.forecast.daily.data[0].apparentTemperatureMax)+"°C")])])])]),t._v(" "),s("table",{staticClass:"temp table table-condensed"},[t._m(1),t._v(" "),s("tbody",[s("tr",[s("td",[s("i",{staticClass:"wi wi-sunrise"}),t._v(" "+t._s(t._f("toTime")(t.forecast.daily.data[0].sunriseTime)))]),t._v(" "),s("td",[s("i",{staticClass:"wi wi-sunset"}),t._v(" "+t._s(t._f("toTime")(t.forecast.daily.data[0].sunsetTime)))])])])]),t._v(" "),s("table",{staticClass:"weather-data table table-condensed"},[t._m(2),t._v(" "),s("tbody",[s("tr",[t._m(3),t._v(" "),s("td",{attrs:{id:"weather-widget-wind"}},[t._v(t._s(t.forecast.currently.windSpeed)+" m/s")])]),t._v(" "),s("tr",[t._m(4),t._v(" "),s("td",{attrs:{id:"weather-widget-cloudiness"}},[t._v(t._s(t.forecast.currently.cloudCover)+" %")])]),t._v(" "),s("tr",[t._m(5),t._v(" "),s("td",{attrs:{id:"weather-widget-pressure"}},[t._v(t._s(t.forecast.currently.pressure)+" hpa")])]),t._v(" "),s("tr",[t._m(6),t._v(" "),s("td",{attrs:{id:"weather-widget-humidity"}},[t._v(t._s(t.forecast.currently.humidity)+" %")])]),t._v(" "),s("tr",[t._m(7),t._v(" "),s("td",{attrs:{id:"weather-widget-sunrise"}},[t._v(t._s(t.forecast.currently.ozone))])])])])]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Temp min.")]),t._v(" "),s("th",[t._v("Temp max.")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Sunrise")]),t._v(" "),s("th",[t._v("Sunset")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Conditions")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("i",{staticClass:"wi wi-windy"}),t._v(" Wind")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("i",{staticClass:"wi wi-cloudy"}),t._v(" Cloudiness")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("i",{staticClass:"wi wi-barometer"}),t._v(" Pressure")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("i",{staticClass:"wi wi-humidity"}),t._v(" Humidity")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[s("i",{staticClass:"wi wi-sunny"}),t._v(" Ozone")])}]}},132:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.ready?s("local-weather",{attrs:{address:t.address,forecast:t.forecast}}):s("div",{staticClass:"preloader"},[s("div",{staticClass:"dot-loader"})])},staticRenderFns:[]}},133:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app-wrapper"}},[t.ready?s("div",[s("navbar",{on:{getGeolocation:t.getGeolocation,resetMap:t.resetMap}},[s("div",{slot:"inputs"},[s("form",{staticClass:"form-inline my-2 my-lg-0"},[s("label",{staticClass:"mr-sm-2"},[t._v("lat")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.location.lat,expression:"location.lat",modifiers:{lazy:!0}}],staticClass:"form-control mr-sm-2",attrs:{type:"number",step:"any",name:"lat",placeholder:"latitude"},domProps:{value:t.location.lat},on:{change:function(e){t.location.lat=e.target.value},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("label",{staticClass:"mr-sm-2"},[t._v("lng")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.location.lng,expression:"location.lng",modifiers:{lazy:!0}}],staticClass:"form-control mr-sm-2",attrs:{type:"number",step:"any",name:"lng",placeholder:"longitude"},domProps:{value:t.location.lng},on:{change:function(e){t.location.lng=e.target.value},blur:function(e){t.$forceUpdate()}}}),t._v(" "),s("label",{staticClass:"mr-sm-2"},[t._v("Search by address")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.lazy",value:t.newAddress,expression:"newAddress",modifiers:{lazy:!0}}],staticClass:"form-control mr-sm-2",attrs:{type:"text",name:"address",placeholder:"Hamburg DE"},domProps:{value:t.newAddress},on:{change:function(e){t.newAddress=e.target.value}}})])]),t._v(" "),s("div",{slot:"buttons"},[s("form",{staticClass:"form-inline my-2 my-lg-0"},[s("label",{staticClass:"mr-sm-2"},[t._v("Get Geolocation")]),t._v(" "),s("button",{staticClass:"btn btn-outline-success mr-sm-2",on:{click:function(e){t.getGeolocation()}}},[t._v("Get my Position")]),t._v(" "),s("label",{staticClass:"mr-sm-2"},[t._v("Reset map to marker")]),t._v(" "),s("button",{staticClass:"btn btn-outline-warning mr-sm-2",on:{click:function(e){t.resetMap()}}},[t._v("Center Map")])])])]),t._v(" "),s("div",{staticClass:"container-fluid no-pad"},[s("div",{staticClass:"col-sm-12 col-md-8 col-lg-9 map-wrapper no-pad"},[t.ready?s("gmap",{attrs:{"api-key":t.gmapKey,location:t.location,address:t.address,newAddress:t.newAddress,zoom:t.zoom,reset:t.reset},on:{locationUpdate:t.locationUpdate,addressUpdate:t.addressUpdate}}):t._e()],1),t._v(" "),s("div",{staticClass:"col-sm-12 col-md-4 col-lg-3 sidebar-wrapper"},[t.address[1]?s("dark-sky",{attrs:{address:t.address,lat:t.location.lat,lng:t.location.lng}}):t._e()],1)])],1):s("div",{attrs:{id:"preloader"}},[s("div",{staticClass:"preloader"})])])},staticRenderFns:[]}},134:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"map"}})},staticRenderFns:[]}},135:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-toggleable-md navbar-light bg-faded"},[t._m(0),t._v(" "),s("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("ML-weather")]),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[t._t("inputs"),t._v(" "),t._t("buttons")],2)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}]}},140:function(t,e){}});
//# sourceMappingURL=app.bbd791fd482e0937913f.js.map