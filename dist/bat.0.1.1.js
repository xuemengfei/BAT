!function(a){function b(a){this.target=a}var c=a.beacon,d=function(c){return this!==a&&d.blend(this,d),new b(c)};d.toString=function(){return"baishuiz@gmail.com"};var e={base:f,avatarCore:b.prototype,self:f,init:function(){var b=Object.freeze;a.beacon=d,e.merge(d,f),delete a.beacon.base,b&&b(d)},login:function(){a.beacon=d},logoff:function(){a.beacon=c}},f={base:e};a.beacon=f}(this),function(a){var b=a.base||{},c={merge:function(a){for(var b=arguments.length,c=0;b>c;c++){var d=arguments[c];for(var e in d)a[e]=d[e]}return a},blend:function(a,b,d){var e={cover:!0,mergePrototype:!1};d=d?c.merge(e,d):e,b=[].concat(b);for(var f=b.length,g=0;f>g;g++){var h=b[g];for(var i in h){var j=d.mergePrototype||h.hasOwnProperty(i),k=d.cover||!a[i];j&&k&&(a[i]=h[i])}}return a},isType:function(a,b){return"Null"===b&&null===a||"Undefined"===b&&void 0===a||"Number"===b&&isFinite(a)||Object.prototype.toString.call(a).slice(8,-1)===b},arrayIndexOf:function(a,b){return c.arrayIndexOf=Array.prototype.indexOf?function(a,b){return a=[].slice.call(a,0),a.indexOf(b)}:function(a,b){a=[].slice.call(a,0);for(var c=a.length;c>=0;c--)if(a[c]===b)return c;return c},c.arrayIndexOf(a,b)},each:function(a,b){if(a){a=[].concat(a);for(var c=a.length-1;c>=0;c--)b.call(a[c],c,a[c])}}};c.blend(b,c)}(beacon),function(a){var b=a.base,c=function(a){function c(a){var b=d(e,a);0>b&&(b=e.push(a)-1);var c="event_"+b,f=a.toString()===a?a:c;return f}var d=b.arrayIndexOf,e=[],f={dom:a,target:a,attachEvent:function(a,b){var d=c(a);e[d]=e[d]||[],e[d].push(b)},removeEvent:function(a,b){var f,g=a&&c(a),h=g&&e[g];if(a&&b){var i=d(h,b);f=e[g].splice(i,1)}else a&&!b?(f=e[g],e[g]=[]):a||b||(f=e,e=[]);return f},getEventList:function(a){var b=c(a),d=a?e[b]:e.slice(0);return d}};return f};b.EventStructure=c}(beacon),function(a){function b(a){var b=new j(a);return h.push(b),b}function c(a,c,d){var e=g(a)||b(a);e.attachEvent(c,d)}function d(a,b,d){var e=b.registEvent(d),f=b.getEventList();i.each(f,function(b){c(a,f[b],e)})}function e(a,b,c){var d=a?g(a)||[]:h;i.each(d,function(a,d){d.removeEvent(b,c)})}function f(a,b,c){var d=b.removeEvent(c);i.each(d,function(c){var f=d[c],g=b.getEventList();i.each(g,function(b,c){e(a,c,f)})})}function g(a){if(!a)return h.slice(0);for(var b=0;b<h.length;b++){var c=h[b];if(c.dom===a)return c}}var h=[],i=a.base,j=i.EventStructure,k={registEvent:c,registCombinationEvent:d,removeEvent:e,removeCombinationEvent:f,getEventList:g};i.eventStore=k}(beacon),function(a){function b(){if(this instanceof b)return this;var a=[],d=[],e=[].slice.call(arguments,0),f=e.slice(0),g=function(){function b(){return f=e.slice(0)}var g=function(b,e){var f=c.arrayIndexOf(a,b);0>f&&(a.push(b),d.push(e))},h=function(b){var e=c.arrayIndexOf(a,b),f=d[e];return b?f:d.slice(0)};this.resetEventList=b,this.getEventList=function(){return e.slice(0)},this.registEvent=function(a){var d=c.arrayIndexOf,f=e.slice(0),h=function(c,e){var g=this,h=d(f,c.eventType);h>=0&&f.splice(h,1),0===f.length&&(a.call(g,e),f=b())};return g(a,h),h},this.removeEvent=function(a){var b=[].concat(h(a));return b}};return g.prototype=new b,new g}var c=a.base;c.combinationalEvent=b}(beacon),function(a){var b=a.base,c=b.eventStore,d=c.registCombinationEvent,e=c.registEvent,f=c.removeCombinationEvent,g=c.removeEvent,h=c.getEventList,i={hostProxy:{},attachEvent:function(a,c){var f=this,g=a instanceof b.combinationalEvent?d:e;g(f,a,c)},fireEvent:function(a,c){var d=this,e=h(d),f=e.getEventList(a);b.each(f,function(b,e){var f={eventType:a};e.call(d,f,c)})},publicDispatchEvent:function(a,c){var d=h();b.each(d,function(b){var e=d[b].dom;i.fireEvent.call(e,a,c)})},removeEvent:function(a,c){var d=this,e=a instanceof b.combinationalEvent?f:g;e(d,a,c)}},j=function(){var a=function(){};return a.prototype=i,b.blend(a,i),a}();b.Event=j}(beacon),function(a){var b=a.base,c=function(){return this}(),d=b.EventStructure,e={structures:[],getStructure:function(a){for(var b,c=0;c<e.structures.length;c++)if(b=e.structures[c],b.dom===a)return b},add:function(a,b,c){var f=e.getStructure(a);f||(f=new d(a),e.structures.push(f)),f.attachEvent(b,c)},remove:function(a,b,c){var d=e.getStructure(a);return d.removeEvent(b,c)}},f={attachEvent:function(a,b){var d,e=this,g=function(a,b){var c=this;c.addEventListener(a,b,!1)},h=function(a,b){var c=this;c.attachEvent("on"+a,b)},i=function(a,b){var c=this,d=c["on"+a];c["on"+a]=function(){d.call(c),b.call(c)}};return c.addEventListener?(g.call(e,a,b),d=g):c.attachEvent?(h.call(e,a,b),d=h):(i.call(e,a,b),d=i),f.attachEvent=d},fireEvent:function(a,b){var c,d=this,e=function(a,b){var c=this;b=b||{bubbles:!0,cancelable:!0},b.ieHack=c.all&&c.all.toString(),b.ieHack=c.style;var d=document.createEvent("Event");d.initEvent(a,b.bubbles,b.cancelable),c.dispatchEvent(d)},f=function(a,b){var c=this;b=b||{bubbles:!0,cancelable:!0},b.ieHack=c.all&&c.all.toString(),b.ieHack=c.style,a="on"+a;var d=document.createEventObject();d.cancelBubble=b.cancelable,c.fireEvent(a,d)};return document.createEvent&&d.dispatchEvent?(e.call(d,a,b),c=e):document.createEventObject&&d.fireEvent&&(f.call(d,a,b),c=f),c},removeEvent:function(a,b){var c,d=this,e=function(a,b){var c=this;c.removeEventListener(a,b,!1)},g=function(a,b){var c=this;c.detachEvent("on"+a,b)};return d.removeEventListener?(e.call(d,a,b),c=e):d.detachEvent&&(g.call(d,a,b),c=g),f.removeEvent=c}},g={attachEvent:function(a,b){var c=this;e.add(c,a,b),f.attachEvent.call(c,a,b)},fireEvent:function(a,b){var c=this;g.fireEVent=f.fireEvent.call(c,a,b)},removeEvent:function(a,c){var d=this;if(a&&c)f.removeEvent.call(d,a,c);else if(a&&!c){var h=e.remove(d,a);h&&b.each(h,function(){var b=this;g.removeEvent.call(d,a,b)})}else if(!a&&!c){var i=e.remove(d);i&&b.each(i,function(){var a=this;a&&b.each(i[a],function(){var b=this;g.removeEvent.call(d,a,b)})})}},isHTMLElement:function(a){var b=a==document||a==window,c=function(a){var b=a&&a.nodeName;return b&&document.createElement(b).constructor===a.constructor};return b||c(a)},isEventSupported:function(a,b){if(!g.isHTMLElement(a))return!1;var c=!1;if(a===window||a===document){var d=document.createElement("iframe");d.style.display="none",document.body.appendChild(d);var e=a===window?d.contentWindow:d.contentDocument;g.attachEvent.call(e,b,function(){c=!0}),g.fireEvent.call(e,b),d.parentNode.removeChild(d)}else{var f=a.tagName,b="on"+b;a=document.createElement(f),c=b in a,c||(a.setAttribute(b,"return;"),c="function"==typeof a[b]),a=null}return c}};b.DOMEvent=g}(beacon),function(a){var b=a.base,c={on:function(){var b=a.base,c=b.isType,d=b.Event.hostProxy,e=b.Event.publicDispatchEvent,f=b.Event.attachEvent,g=function(a,b){var g=[].slice.call(arguments,0);b&&c(b,"Function")?f.apply(d,g):e.apply(d,g)};return g}(a),once:function(a,b){var d=function(){c.off(a,b)};c.on(a,b),c.on(a,d)},off:function(){var b=a.base,c=b.Event.hostProxy,d=function(){var a=[].slice.call(arguments,0);b.Event.removeEvent.apply(c,a)};return d}(),blend:b.blend,NS:b.NS,arrayIndexOf:b.ArrayIndexOf,isType:b.isType,Enum:b.Enum,loginGlobal:b.login,logoffGlobal:b.logoff,utility:b,createEvent:function(){var a,c=[].slice.call(arguments,0);return a=arguments.length>1?b.combinationalEvent.apply(this,c):{desc:c[0]}}},d={on:function(b,c){var d=[].slice.call(arguments,0),e=this.target,f=a.base,g=f.DOMEvent.isHTMLElement(e),h=f.DOMEvent.isEventSupported(e,b),i=g&&h?f.DOMEvent.fireEvent:f.Event.fireEvent,j=g&&h?f.DOMEvent.attachEvent:f.Event.attachEvent;c&&f.isType(c,"Function")?f.each(e,function(a,b){j.apply(b,d)}):f.each(e,function(a,b){i.apply(b,d)})},once:function(a,b){var c=this;d.on.call(c,a,b),d.on.call(c,a,function(){d.off.call(c,a,b)})},off:function(a,c,d){var e=this.target,f=b.DOMEvent.isHTMLElement(e),g=a&&b.DOMEvent.isEventSupported(e,a);f&&g?b.DOMEvent.removeEvent:b.Event.removeEvent,b.each(e,function(e,g){f&&b.DOMEvent.removeEvent.call(g,a,c,d),b.Event.removeEvent.call(g,a,c,d)})}};b.blend(b.avatarCore,d),b.blend(a,c),b.init()}(beacon);;;(function (global) {
    var bat  = function(){};
    bat.toString = function () { return "baishuiz@gmail.com"};

    var core = {
    	beacon : global.beacon,
        init: function () {
            var freeze = Object.freeze;

            global.bat.base.utility.merge(bat, preBat);
            //beacon.logoffGlobal();
            global.Bat = bat;
            //delete global.bat.base;
            freeze && freeze(bat);
        }
    };


    var preBat = {base:core};
    global.bat = preBat;
    console.log(global===window)

})(this);
;;(function (bat) {
    var base = bat.base;
    var events = {
      complete : beacon.createEvent('complete'),
      ooo : beacon.createEvent('ooo'),
      over : beacon.createEvent('over'),
      parseDone : beacon.createEvent('done')
    }

    base.events = events;
}) (bat);
;;(function (bat) {
    var base = bat.base;

    // 初始化跟數據
    var subTree = {
      data     : {title:"root", callBack: null},
      parent   : null,
      subNodes : []
    };

    var root = subTree;
    //caseLoad(root);

    function loadSub(nodes, context) {
      var activeCase = nodes.shift();
      if(activeCase){
        subTree = activeCase;

        beacon(context).once(bat.events.over, function(){
            loadSub(nodes, context);
        });

        lookAt();
        //activeCase.data && activeCase.data.callBack();
        activeCase.data && tyrRunCallBack(activeCase.data.callBack)
      } else {
        if(nodes.length==0 && context.data.title=="root"){
          sendResult(root.subNodes);
        } else {
          beacon(context.parent).on(bat.events.over);
        }

      }
    }

    function tyrRunCallBack(fn){
      var fnStr = fn.toString();
      if(/bat\.test/.test(fnStr)) {
        fn();
      }
    }

    function sendResult(result){
      console.log(result.length);
      for(var i =0, len= result.length; i<len; i++) {
          var activeItem = result[i];
        //  delete activeItem.parent;
          //console.log("activeItem.parent")
          if(activeItem.subNodes.length>0) {
          //  delete activeItem.data.callBack;
            sendResult(activeItem.subNodes);
          } else {
            activeItem.data.callBack = activeItem.data.callBack.toString().replace(/^function\s*\(\s*\)\s*\{([\w\W]+?)\}$/, "$1");
          }
      };
      if (result === root.subNodes) {
        //beacon.on(bat.events.ooo, JSON.stringify(root));
        beacon.on(bat.events.ooo, root);
      }
    }

    function caseLoad(context){
        var isOver = context.length===0;
        if(isOver) {
          beacon(context.parent).on(bat.events.over);
          return;
        }

        var nodes = context.subNodes.slice(0);
        loadSub(nodes, context);

    }

    function lookAt(){
      timing.started || timing();
      beacon(subTree).off(base.events.complete);
      beacon(subTree).once(base.events.complete, function(){
          var context = this;
          caseLoad(context);
      });
    }

    var timing = function(){
          timing.started = true;
          setTimeout(function(){
            timing.started = false;
            beacon(subTree).on(base.events.complete);
          },0);
    }


    var test = function (title, callBack){
      if(subTree == root){
          lookAt();
      }

      test = recordSubNode;
      recordSubNode(title, callBack);
    }

    function recordSubNode(title, callBack){
      subTree.subNodes.push({
        data     : {title: title, callBack: callBack},
        parent   : subTree,
        subNodes : []
      })
    }

    base.test = test;
}) (bat);
;;(function (bat) {
    var base = bat.base;

    function log(msg){
      console && console.log(msg);
      console.log('BAT::CASEDONE')
    }

    base.log = log;
}) (bat);
;;(function (bat) {
    var base = bat.base;

    function open(url){
      window.location = url;
    	console.log("BAT::WAITURL");
    }

    base.open = open;
}) (bat);
;;(function (bat) {
    var base = bat.base;

    var timeout = 20 * 1000
    function log(msg){
        alert(msg);
    }

    function dom(selector){

          function hasTarget(selector){
          	var target = document.querySelector(selector);
          	return target ;
          }

          function starWait(selector , then){
      	    var result;
              var start = new Date();

              function waitit() {

                  var target = hasTarget(selector);

                  if(target){
                      wait && stopWait(wait);
                      then && then(target);
                  }
                  return target
              }

      	    if(!waitit()){
      		    var wait = setInterval(function(){
      	            waitit();
      	            alert(".")
      	            var now = new Date();
      	            if(now - start >= timeout) {
      	            	clearInterval(wait);
      	            	log("超时！！！")
      	            }
      		    }, 200);
      		}
          }

          function stopWait(wait) {
          	clearInterval(wait);
          }



          var then = {
              on : function(eventName){
              	    starWait(selector, function(target){
              	    	log("事件执行" + eventName)
              	    	beacon(target).on(eventName);
              	    	// setTimeout(function(){
              	    	// 	alert('caseDone!')
              	    	// },1000)
              	    	//console.log('caseDone!')
              	    	console.log('BAT::CASEDONE')

              	    });
              },

              value : function(value){
                    starWait(selector, function(target){
                      log("填写value" + value)
                      target.value = value;
                      console.log('BAT::CASEDONE')

                    });
              },              

              content : function(txt) {
              	//log(txt)
          	    starWait(selector, function(target){
          	    	var content = target.innerText.replace(/^\s+|\s+$/ig,"");
          	    	var result =   content === txt;
          	    	//log("*****************")
          	    	log(content + " vs " + txt)
          	    	log(result)
          	    	log("*****************")

      				console.log('BAT::CASEDONE')
          	    });
              }
          }
          return then;
    }

    base.dom = dom;
}) (bat);
;
;(function (bat) {
    var base = bat.base;

    var wait = {
    	URLChange : function(timeout){
    		// 此处用 beacon.once 会丢失后续case
            beacon.on("url change", function(){
            	setTimeout(function(){
            		alert("BAT::CASEDONE!!");
            	},1000)

            });
    	}
    }

    base.wait = wait;
}) (bat);
;;(function (bat) {
    var base = bat.base;
    // var userCaseManage = new base.TaskManage();
    // var segmentManger  = new base.TaskManage();
    //var stage = new base.Page();


    var _historyPushState  =  history.pushState;
    window.history.pushState = function(json,title,url){
    //    beacon.on("url change");
     console.log("BAT::CASEDONE");
         alert("BAT URL Change to:" + url);
        //_historyPushState.apply(window, arguments)
        _historyPushState.call(window.history,json,title,url)
        //alert("BAT::URLCHANGED");
    }


    var openAPI = {

        config : function(config){

        },

        goto : function(uri){
            stage.src =   uri;
        },

        page : function(){
            // var api = {
            //     test : openAPI.test,
            //     wait : function(){
            //         base.wait();
            //         return api
            //     }
            // }
            //
            // return api;
        },

        get : function(selector){
          //  return stage.contentDocument.querySelector(selector);
        },

        the : function(target){
            //return new base.Assert(target);
        },

        userCase : function(desc, startPath, tcase){
            // var caseProxy = {
            //   desc    : desc,
            //   startPath   : startPath,
            //   tryDoCase : tcase
            // };
            // userCaseManage.set(caseProxy);
        },

        start : function(){
            // userCaseManage.run();
        },

        test : base.test,
        log : base.log,
        open : base.open,
        dom : base.dom,
        wait : base.wait,

        events : base.events,

        let : function(target) {
            return {
              on : function(event){
                    beacon(target).once(event);
              }
            }

        }


    };

    beacon.utility.blend(bat, openAPI);
    base.utility = beacon.utility;
    base.init();
})(bat);
