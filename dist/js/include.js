!function(window,document,undefined){var Include=function(){};Include.prototype={forEach:function(e,t){for(var n=e.length,r=n-1;r>=0;r--)t.apply(e[r],[r])},getFilePath:function(){var e=window.document.location.href,t=window.document.location.pathname,n=e.substring(0,e.indexOf(t)),r=t.substring(0,t.substr(1).lastIndexOf("/")+1);return n+r},getFileContent:function(e){var t=navigator.userAgent.indexOf("MSIE")>0,n=t?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest;return n.open("get",e,!1),n.send(null),n.responseText},parseNode:function(e){var t=document.createElement("div");return t.innerHTML=e,t.childNodes},executeScript:function(content){for(var mac=/<script>([\s\S]*?)<\/script>/g,r="";r=mac.exec(content);)eval(r[1])},getHtml:function(e){var t=/<script>([\s\S]*?)<\/script>/g;return e.replace(t,""),e},getPrevCount:function(e){for(var t=/\.\.\//g,n=0;t.exec(e);)n++;return n},getRequestUrl:function(e,t){if(/http:\/\//g.test(t))return t;for(var n=this.getPrevCount(t);n--;)e=e.substring(0,e.substr(1).lastIndexOf("/")+1);return e+"/"+t.replace(/\.\.\//g,"")},replaceIncludeElements:function(){var e=this,t=e.getFilePath(),n=document.getElementsByTagName("include");this.forEach(n,function(){for(var n=this.getAttribute("src"),r=e.getFileContent(e.getRequestUrl(t,n)),o=this.parentNode,i=e.parseNode(e.getHtml(r)),c=i.length,u=0;u<c;u++)o.insertBefore(i[0],this);e.executeScript(r),o.removeChild(this)})}},window.onload=function(){(new Include).replaceIncludeElements()}}(window,document);
//# sourceMappingURL=include.js.map