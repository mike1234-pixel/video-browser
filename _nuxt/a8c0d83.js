(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{208:function(e,t,d){"use strict";d.r(t);var o={name:"videoDetail",props:["video"],computed:{videoUrl:function(){var e=this.video.id.videoId;return"https://www.youtube.com/embed/".concat(e)}}},c=d(22),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,d=e._self._c||t;return e.video?d("div",{staticClass:"bg-red-500 m-8 p-6 max-w-6xl mx-auto rounded-xl shadow-md flex items-center space-x-4 text-m font-medium text-black"},[d("div",[d("iframe",{attrs:{src:e.videoUrl}})]),e._v(" "),d("div",{staticClass:"details"},[d("h4",{staticClass:"font-black"},[e._v(e._s(e.video.snippet.title))]),e._v(" "),d("p",{staticClass:"video-description"},[e._v(e._s(e.video.snippet.description))])])]):e._e()}),[],!1,null,"6cd42ca8",null);t.default=component.exports}}]);