__ADTECH_CODE__ = "";
__theDocument = document;
__theWindow = window;
__bCodeFlushed = false;

function __flushCode() {
	if (!__bCodeFlushed) {
		var span = parent.document.createElement("SPAN");
		span.innerHTML = __ADTECH_CODE__;
		window.frameElement.parentNode.appendChild(span);
		__bCodeFlushed = true;
	}
}

if (typeof inFIF != "undefined") {
	document.write = function(str) {
		__ADTECH_CODE__ += str;
	};
	
	document.writeln = function(str) { document.write(str + "\n"); };

	__theDocument = parent.document;
	__theWindow = parent;
}
document.write("\n");
function VBGetSwfVer_1183419(i) {
var sVersion_1183419 = "on error resume next\r\n"+
"Dim swControl_, swVersion_\r\n"+
"swVersion_ = 0\r\n"+
"set swControl_ = CreateObject(\"ShockwaveFlash.ShockwaveFlash.\" + CStr("+i+"))\r\n"+
"if (IsObject(swControl_)) then\r\n"+
"swVersion_ = swControl_.GetVariable(\"$version\")\r\n"+
"end if";
window.execScript(sVersion_1183419, "VBScript");
return swVersion_;
}
var AT_MULTICLICK=new Array;
var AT_MULTICOUNT=new Array;
var AT_CLICKVAR=new Array;
var AT_CLICK = "www.InterSystems.com/ddjrosobjectsql7_336x280/index.html";
var AT_IMGCLICK="";
var AT_TARGET="_blank";
var AT_MICROSITE=""; // width=xxx height=yyy
AT_MULTICLICK[1]="";
AT_MULTICLICK[2]="";
AT_MULTICLICK[3]="";
AT_MULTICLICK[4]="";
AT_MULTICLICK[5]="";
AT_MULTICLICK[6]="";
AT_MULTICLICK[7]="";
AT_MULTICLICK[8]="";
AT_MULTICLICK[9]="";
AT_CLICKVAR[0]="clickTag";
AT_CLICKVAR[1]="clickTAG1";
AT_CLICKVAR[2]="clickTAG2";
AT_CLICKVAR[3]="clickTAG3";
AT_CLICKVAR[4]="clickTAG4";
AT_CLICKVAR[5]="clickTAG5";
AT_CLICKVAR[6]="clickTAG6";
AT_CLICKVAR[7]="clickTAG7";
AT_CLICKVAR[8]="clickTAG8";
AT_CLICKVAR[9]="clickTAG9";
AT_MULTICOUNT[1]="";
var AT_WIDTH_HEIGHT="width=336 height=280";
var AT_FLASH="http://aka-cdn-ns.adtechus.com/apps/90/Ad1035866St3Sz171Sq1443388V0Id1/ObjectSQL-H7_336x280.swf";
var AT_TRANSPARENT=false;
var AT_FLASHVERSION=8;
var AT_FLASH_BGCOLOR="";
var AT_FlaQual="autohigh";
var AT_FlashClick=false;
var AT_LAYERMANUALRESIZE = false;
var AT_BASE="http://aka-cdn-ns.adtechus.com/apps/90/Ad1035866St3Sz171Sq1443388V0Id1/"; // Nachladepfad fuer Flash Filme (http://.../)
var AT_IMAGE="http://aka-cdn-ns.adtechus.com/apps/90/Ad1035866St3Sz171Sq1443388V0Id1/H7-ObjectSQL-336x280.jpg";
var AT_TEXT="";
var AT_ALTIMAGEWIDTH  = "336";
var AT_ALTIMAGEHEIGHT = "280";
var AT_ZINDEX         = "0";
var AT_WMODE          = "opaque";
var AT_EXPANDABLE="false"; // width:100px;height:70px; Zus?tzlich Fakepopup an position 0x0 machen
var AT_FAKEPOPUP=false;
var AT_FAKEPOPUP_left=100;
var AT_FAKEPOPUP_top=100;
var AT_FAKEPOPUP_autoclose='';
var AT_FAKEPOPUP_start_opened=true;
var AT_CURRENTDOMAIN= window.location.host;
var AT_VARSTRING;
//make variable names unique on page
var AT_MULTICLICK1183419=AT_MULTICLICK;
var AT_CLICK1183419=AT_CLICK;
var AT_TARGET1183419=AT_TARGET;
var AT_IMGCLICK1183419=AT_IMGCLICK;
AT_CLICKVAR[0]=AT_CLICKVAR[0]?AT_CLICKVAR[0]:"clickTAG";
var AT_MULTICLICKSTR="?"+AT_CLICKVAR[0]+"=" + escape("http://adserver.adtechus.com/adlink/5242/1183419/0/171/AdId=1035866;BnId=1;itime=894441828;key=184406281+/184406281;nodecode=yes;link=") + escape(AT_CLICK);
var AT_FLASHVARSSTR= "";
// if use microsite, dont add the first parameter
if (AT_MICROSITE=="") AT_FLASHVARSSTR = AT_CLICKVAR[0]+"=" + escape("http://adserver.adtechus.com/adlink/5242/1183419/0/171/AdId=1035866;BnId=1;itime=894441828;key=184406281+/184406281;nodecode=yes;link=") +escape(AT_CLICK);
//------------------------------------------------------------------------------------------------
// Flash detect
function JSGetSwfVer1183419(){
if (navigator.plugins != null && navigator.plugins.length > 0) {
if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
flashVer = flashDescription.split(" ")[2].split(".")[0];
} else {flashVer = -1;}
}
else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
else flashVer = -1;
return flashVer;
}
var AT_DETECT_FLASHVERSION = 0;
if (AT_FLASH)
{
if (AT_FlashClick) {FlashClick = AT_ClickFn1183419;}
var ShockMode = 0;
var versionStr = 0;
if (navigator.appVersion.indexOf("MSIE") != -1 && navigator.appVersion.toLowerCase().indexOf("win") != -1 && !(navigator.userAgent.indexOf("Opera") != -1))
{
for (i=25;i>0;i--) {
versionVB = VBGetSwfVer_1183419(i);
if (typeof versionVB != "undefined") {
if (versionVB != 0){
versionStr = versionVB.split(" ")[1].split(",")[0];
if (versionStr>=AT_FLASHVERSION) {i=0;}
}
}
}
}
else {
versionStr = JSGetSwfVer1183419();
}
if (versionStr >= AT_FLASHVERSION) { ShockMode = 1;}
AT_DETECT_FLASHVERSION = versionStr;
}
if ('1183419'!='_ADFC'+'_CUID_'){
if (AT_FLASH && (AT_FLASH.search(/\w+\:\/\//)!=0)) {AT_FLASH='http://aka-cdn-ns.adtechus.com/apps/90/Ad1035866St3Sz171Sq1443388V0Id1/'+AT_FLASH;}
if (AT_IMAGE && (AT_IMAGE.search(/\w+\:\/\//)!=0)) {AT_IMAGE='http://aka-cdn-ns.adtechus.com/apps/90/Ad1035866St3Sz171Sq1443388V0Id1/'+AT_IMAGE;}
}
AT_MULTICOUNT[0]="";	//Support for ViewCount
for (var i_adtech=0;i_adtech<AT_MULTICLICK.length;i_adtech++){
if (AT_MULTICLICK[i_adtech]) {
if (!AT_CLICKVAR[i_adtech]) {
AT_CLICKVAR[i_adtech]="clickTAG"+i_adtech;
}
if (AT_MULTICLICK[i_adtech].substr(0,11)=='javascript:') {
AT_MULTICLICKSTR += "&" + AT_CLICKVAR[i_adtech] + "=" + escape(AT_MULTICLICK[i_adtech]);
AT_FLASHVARSSTR += "&" + AT_CLICKVAR[i_adtech] + "=" + escape(AT_MULTICLICK[i_adtech]);
} else {
AT_MULTICLICKSTR += "&" + AT_CLICKVAR[i_adtech] + "=" + escape("http://adserver.adtechus.com/adlink/5242/1183419/0/171/AdId=1035866;BnId=1;itime=894441828;key=184406281+/184406281;nodecode=yes;link=") + escape(AT_MULTICLICK[i_adtech]);
AT_FLASHVARSSTR  += "&" + AT_CLICKVAR[i_adtech] + "=" + escape("http://adserver.adtechus.com/adlink/5242/1183419/0/171/AdId=1035866;BnId=1;itime=894441828;key=184406281+/184406281;nodecode=yes;link=") + escape(AT_MULTICLICK[i_adtech]);
}
}
}
//## if AT_FLASHVERSION > 5 use FLASHVARS
if (AT_FLASHVERSION >5) {
AT_VARSTRING ="?targetTAG="+AT_TARGET1183419+"&clickTarget="+escape(AT_TARGET1183419);
AT_VARSTRING += "&pathTAG="+escape(AT_BASE);
} else {
AT_VARSTRING = AT_MULTICLICKSTR;
AT_VARSTRING +="&targetTAG="+AT_TARGET1183419+"&clickTarget="+escape(AT_TARGET1183419);
AT_VARSTRING += "&pathTAG="+escape(AT_BASE);
AT_FLASHVARSSTR="";
}
//if (AT_FAKEPOPUP) {
AT_VARSTRING += "&closeTAG=" + escape("javascript:closeAdLayer1183419()")
//}
//if (AT_FAKEPOPUP_start_opened) {
AT_VARSTRING += "&openTAG=" + escape("javascript:openAdLayer1183419()")
//}
AT_VARSTRING += "&expandTAG=" + escape("javascript:expand1183419()");
AT_VARSTRING += "&collapseTAG=" + escape("javascript:collapse1183419()");
AT_VARSTRING += "&clicktarget=_blank&clickTarget=_blank&clickTARGET=_blank";
var AT_MULTICOUNTARR=new Array;
for (var i_adtech=0;i_adtech<AT_MULTICOUNT.length;i_adtech++)
if (AT_MULTICOUNT[i_adtech])
{ AT_MULTICOUNTARR[i_adtech]=new Image;
AT_MULTICOUNTARR[i_adtech].src=""+AT_MULTICOUNT[i_adtech];
}
AT_WIDTH_HEIGHT=(AT_WIDTH_HEIGHT)?(' '+AT_WIDTH_HEIGHT+' '):'width="336" height="280"';
if (AT_WIDTH_HEIGHT.length<19 && "1183419"=="12345") //only on test server
{ alert('Error: AT_WIDTH_HEIGHT must be set for\n1x1 Content Units in the Template config!');}
if (!AT_IMGCLICK) {AT_IMGCLICK=AT_CLICK;};
if (!AT_TEXT) {AT_TEXT="click here";};
if (!AT_BASE) {AT_BASE="http://aka-cdn-ns.adtechus.com/apps/90/Ad1035866St3Sz171Sq1443388V0Id1/"}
if (AT_EXPANDABLE && AT_EXPANDABLE != 'false'){
AT_FAKEPOPUP=true;
AT_FAKEPOPUP_left=-0;
AT_FAKEPOPUP_top=-0;
}
if (AT_MICROSITE!=""){
var AT_MICROSITE1183419="toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,"+AT_MICROSITE.replace(/ height=/,",height=");
}
if (AT_FlashClick || AT_MICROSITE!="")
{	AT_COUNT=''
if ('1183419'!='_ADFC'+'_CUID_') AT_COUNT=escape('http://adserver.adtechus.com/adlink/5242/1183419/0/171/AdId=1035866;BnId=1;itime=894441828;key=184406281+/184406281;nodecode=yes;link=')
AT_VARSTRING="?cli"+"ckTAG=javascript:void(win"+"dow.open('"+AT_COUNT+AT_CLICK+"','','"+AT_MICROSITE1183419+"'))";
AT_TARGET1183419="_self";
}
window.AT_ClickFn1183419= function (click)
{	click=(isNaN(click)?click:AT_MULTICLICK1183419[click]);
if(!click) click="";
click=(click!="")?click:AT_CLICK1183419;
if (AT_TARGET1183419=="_top") top.location.href="http://adserver.adtechus.com/adlink/5242/1183419/0/171/AdId=1035866;BnId=1;itime=894441828;key=184406281+/184406281;nodecode=yes;link="+click;
else if (AT_TARGET1183419=="_self") location.href="http://adserver.adtechus.com/adlink/5242/1183419/0/171/AdId=1035866;BnId=1;itime=894441828;key=184406281+/184406281;nodecode=yes;link="+click;
else window.open("http://adserver.adtechus.com/adlink/5242/1183419/0/171/AdId=1035866;BnId=1;itime=894441828;key=184406281+/184406281;nodecode=yes;link="+click,"",AT_MICROSITE1183419?AT_MICROSITE1183419:"");
};
if (navigator.userAgent.indexOf('MSIE')>0 && navigator.userAgent.indexOf('Opera')<0) {
var sv_ADFC_CUID = 'Sub AT_FLASHO1183419_FSCommand(ByVal command, ByVal args)\r\n'+
'call AT_FLASHO1183419_DoFSCommand(command, args)\r\n'+
'end sub';
if (typeof inFIF != "undefined") {
parent.window.execScript(sv_ADFC_CUID, "VBScript");
}
else {	window.execScript(sv_ADFC_CUID, "VBScript");
}
}
//### BROWSER CHECK ###
var AT_agent = navigator.userAgent.toLowerCase();
var AT_major = parseInt(navigator.appVersion);
// ####### Different browser types
// ####### Different browser types
var AT_is_nav  = ((AT_agent.indexOf('mozilla')!=-1) && (AT_agent.indexOf('spoofer')==-1) && (AT_agent.indexOf('compatible') == -1) && (AT_agent.indexOf('opera')==-1) && (AT_agent.indexOf('webtv')==-1));
var AT_is_ie=(AT_agent.indexOf("msie") != -1) || (AT_is_nav && AT_major >= 5);
var AT_IS_FIREFOX = AT_agent.indexOf('firefox')!=-1;
var AT_IS_OPERA = AT_agent.indexOf('opera')!=-1;
if (AT_IS_OPERA) AT_is_ie = false;
if (AT_is_nav) AT_is_ie = false;
if (AT_IS_FIREFOX) AT_is_ie = false;
// ## END
adtech_flashinc="";
if (AT_EXPANDABLE && AT_EXPANDABLE != 'false')
adtech_flashinc+='<div id="AT_ANCHOR_DIV1183419" style="overflow:hidden;position:relative;width:336px;height:280px;z-index:' + AT_ZINDEX + ';">';
if (AT_FAKEPOPUP) {
adtech_flashinc+='<div id="AT_DIV1183419" ' ;
if ( AT_EXPANDABLE && AT_EXPANDABLE != 'false' && !AT_LAYERMANUALRESIZE ) {
adtech_flashinc+=' onmouseout="collapse1183419()" onmouseover="expand1183419()"';
}
adtech_flashinc+=' style="width:336px;height:280px;z-index:' + AT_ZINDEX + ';position:absolute;top:'+AT_FAKEPOPUP_top+'px;left:'+AT_FAKEPOPUP_left+'px;'+(!AT_FAKEPOPUP_start_opened?"display:none;":"")+'">';
}
if (ShockMode && AT_FLASH){
if (AT_EXPANDABLE && AT_EXPANDABLE !='false') AT_WIDTH_HEIGHT = "width=336 height=280";
adtech_flashinc+='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://active.macromedia.com/flash2/cabs/swflash.cab#version=5,0,0,0" id="AT_FLASHO1183419" name="AT_FLASHO1183419" '+AT_WIDTH_HEIGHT+'>';
adtech_flashinc+='<param name=movie va'+'lue="'+AT_FLASH+ AT_VARSTRING +'&CURRENTDOMAIN='+AT_CURRENTDOMAIN+ '">';
adtech_flashinc+='<param name=quality value=' + AT_FlaQual + '>';
adtech_flashinc+='<param name="base" value="'+AT_BASE+'">';
if (AT_FLASHVERSION > 5)
adtech_flashinc+='<param name="flashvars" value="'+AT_FLASHVARSSTR+'">';
adtech_flashinc+='<param name="allowscriptaccess" value="always">';
if (AT_FLASH_BGCOLOR) {adtech_flashinc+='<param name="bgcolor" value="'+AT_FLASH_BGCOLOR+'">';}
adtech_flashinc+='<param name="swLiveConnect" value="true">';
adtech_flashinc+='<param name="wmode" value="' + AT_WMODE + '">';
adtech_flashinc+='<embed sr'+'c="'+AT_FLASH+AT_VARSTRING+ '&CURRENTDOMAIN='+AT_CURRENTDOMAIN+ '" id="AT_FLASHO1183419"';
if (AT_FLASH_BGCOLOR) {adtech_flashinc+=' bgcolor="'+AT_FLASH_BGCOLOR+'"'}
adtech_flashinc+=' name="AT_FLASHO1183419" base="' + AT_BASE + '" quality="' + AT_FlaQual + '"';
if (AT_FLASHVERSION > 5)
adtech_flashinc+=' flashvars="'+AT_FLASHVARSSTR+'"';
adtech_flashinc+=' allowScriptAccess="always" swLiveConnect=true '+AT_WIDTH_HEIGHT;
adtech_flashinc+=' wmode="' + AT_WMODE + '"';
adtech_flashinc+=' type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">';
adtech_flashinc+='</embed>';
adtech_flashinc+='</object>';
} else {
if (AT_MICROSITE) {
adtech_flashinc+='<a hr'+'ef="javascript:AT_ClickFn1183419(\''+AT_IMGCLICK+'\')" target="_self">';
} else {
adtech_flashinc+='<a href="'+'http://adserver.adtechus.com/adlink/5242/1183419/0/171/AdId=1035866;BnId=1;itime=894441828;key=184406281+/184406281;nodecode=yes;link='+AT_IMGCLICK+'" target="'+AT_TARGET1183419+'">';
}
if (AT_IMAGE) {
adtech_flashinc+='<img s'+'rc="'+AT_IMAGE+'" WIDTH="' + AT_ALTIMAGEWIDTH + '" HEIGHT="' + AT_ALTIMAGEHEIGHT + '" alt="'+AT_TEXT+'" title="'+AT_TEXT+'" border="0">';
}
adtech_flashinc+='</a>';
}
if (AT_FAKEPOPUP) {
adtech_flashinc+='</div>' ;
if (AT_is_ie) {
var _zindex = AT_ZINDEX-1;
if (AT_EXPANDABLE && AT_EXPANDABLE != 'false') {_zindex= -4000;}
adtech_flashinc+='<div id="HID_IFRAME_1183419" style="'+(!AT_FAKEPOPUP_start_opened?"display:none;":"")+'width:336px;height:280px;position:absolute;top:'+AT_FAKEPOPUP_top+'px;left:'+AT_FAKEPOPUP_left+'px;Z-INDEX:'+ _zindex +'">';
adtech_flashinc+='<iframe id="HIDDER" style="FILTER: alpha (opacity=0);" width="336px" height="280px" src="about:blank"></iframe>';
adtech_flashinc+='</div>';
}
}
if (AT_EXPANDABLE && AT_EXPANDABLE != 'false' )
{
adtech_flashinc+='</div>';
}
if (typeof AD_vars != 'undefined')
document.write('<scr'+'ipt type="text/javascript" src="http://aka-cdn-ns.adtechus.com/apps/90/Ad1035866St3Sz171Sq1443388V0Id1/adtech_flashinc.js"></scr'+'ipt>');
else
document.write(adtech_flashinc);
if (AT_FAKEPOPUP&&AT_FAKEPOPUP_autoclose) window.setTimeout ("closeAdLayer1183419()",AT_FAKEPOPUP_autoclose);
if (AT_FAKEPOPUP) {
window.closeAdLayer1183419=function(){__theDocument.getElementById("AT_DIV1183419").style.display = "none";
if (AT_is_ie) {
var iframediv = __theDocument.getElementById('HID_IFRAME_1183419');
iframediv.style.display = "none";
}
}
window.openAdLayer1183419=function() {__theDocument.getElementById("AT_DIV1183419").style.display = "";
if (AT_is_ie) {
var iframediv = __theDocument.getElementById('HID_IFRAME_1183419');
iframediv.style.display = "";
}
}
}
window.expand1183419=function() {
var thediv = __theDocument.getElementById('AT_DIV1183419');
var thediv2 = __theDocument.getElementById('AT_ANCHOR_DIV1183419');
if (AT_is_ie) {
var iframediv = __theDocument.getElementById('HID_IFRAME_1183419');
iframediv.style.display = "";
}
thediv.style.width = "336px";
thediv.style.height = "280px";
thediv2.style.overflow = "";
}
window.expand_width1183419 = function(value) {
var thediv = __theDocument.getElementById('AT_DIV1183419');
var thediv2 = __theDocument.getElementById('AT_ANCHOR_DIV1183419');
if (AT_is_ie) {
var iframediv = __theDocument.getElementById('HID_IFRAME_1183419');
iframediv.style.display = "";
}
thediv.style.width = value+"px";
thediv2.style.overflow = "";
}
window.expand_height1183419 = function(value) {
var thediv  = __theDocument.getElementById('AT_DIV1183419');
var thediv2 = __theDocument.getElementById('AT_ANCHOR_DIV1183419');
thediv.style.height = value+"px";
thediv2.style.overflow = "";
if (AT_is_ie) {
var iframediv = __theDocument.getElementById('HID_IFRAME_1183419');
iframediv.style.display = "";
}
}
window.collapse1183419 =function() {
var thediv  = __theDocument.getElementById('AT_DIV1183419');
var thediv2 = __theDocument.getElementById('AT_ANCHOR_DIV1183419');
thediv.style.width = "336px";
thediv.style.height = "280px";
thediv2.style.overflow = "hidden";
if (AT_is_ie) {
var iframediv = __theDocument.getElementById('HID_IFRAME_1183419');
iframediv.style.display = "";
}
}
window.restartMovie1183419=function(){movie=__theDocument.getElementById("AT_FLASHO1183419");movie.REWIND();movie.PLAY()}
window.stopMovie1183419=function()	{__theDocument.getElementById("AT_FLASHO1183419").STOP();}
window.AT_FLASHO1183419_DoFSCommand=function(command,value){
if (command.search(/(click|link|url)/i)>=0){
AT_ClickFn1183419(command.replace(/[^0-9]/g,''));
} else if (command.search(/(hide|close|stop|halt|done|quit)/i)>-1) {
closeAdLayer1183419();
} else if (command.search(/(show|open|start|spawn|launch)/i)>-1) {
if(command != "showmenu")
openAdLayer1183419();
}else if (command == "expand") {
expand1183419();
} else if (command == "collapse") {
collapse1183419();
} else if (command == "expandwidth") {
expand_width1183419(value);
} else if (command == "expandheight") {
expand_height1183419(value);
} else if (command == "redirectToPage") {
window.open("http://adserver.adtechus.com/adlink/5242/1183419/0/171/AdId=1035866;BnId=1;itime=894441828;key=184406281+/184406281;nodecode=yes;link="+value, "redirectwin", "");
}
}
var restartMovie=restartMovie1183419;
var stopMovie=stopMovie1183419;
if (AT_FAKEPOPUP) {
var closeAdLayer=closeAdLayer1183419;
var adlayerhider=closeAdLayer;
var openAdLayer=openAdLayer1183419;
}
function cleanUp() {
	if (typeof __parent.swappedRefs == "undefined") {
		__parent.swappedRefs = new Array();
	}
		
	while (__parent.swappedRefs.length > 0) {
		var ref = __parent.swappedRefs.pop();
		if (ref != "swappedRefs") {
			__parent[ref] = null;
		}
	}
}

if (typeof inFIF != "undefined" && inFIF == true) {
	__parent = window.parent;
	window.onunload = cleanUp;
	cleanUp();

	
	for (var ref in window) {
		if ((typeof __parent[ref] == "undefined" || __parent[ref] == null) 
					&& ref != "frameElement" && ref != "event" && ref != "swappedRefs" && ref != "onunload") {
			try {__parent[ref] = window[ref]; __parent.swappedRefs.push(ref);} catch (e) {}
		}
	}	
}	




if (typeof inFIF != "undefined" && inFIF) {
	__flushCode();
}

if (typeof inFIF != "undefined" && inFIF == true) {
try {parent.write = write;
} catch (e) {}try {parent.writeln = writeln;
} catch (e) {}try {parent.AT_ClickFn1183419 = AT_ClickFn1183419;
} catch (e) {}try {parent.closeAdLayer1183419 = closeAdLayer1183419;
} catch (e) {}try {parent.openAdLayer1183419 = openAdLayer1183419;
} catch (e) {}try {parent.expand1183419 = expand1183419;
} catch (e) {}try {parent.expand_width1183419 = expand_width1183419;
} catch (e) {}try {parent.expand_height1183419 = expand_height1183419;
} catch (e) {}try {parent.collapse1183419 = collapse1183419;
} catch (e) {}try {parent.restartMovie1183419 = restartMovie1183419;
} catch (e) {}try {parent.stopMovie1183419 = stopMovie1183419;
} catch (e) {}try {parent.AT_FLASHO1183419_DoFSCommand = AT_FLASHO1183419_DoFSCommand;
} catch (e) {}try {parent.__flushCode = __flushCode;
} catch (e) {}try {parent.VBGetSwfVer_1183419 = VBGetSwfVer_1183419;
} catch (e) {}try {parent.JSGetSwfVer1183419 = JSGetSwfVer1183419;
} catch (e) {}}

