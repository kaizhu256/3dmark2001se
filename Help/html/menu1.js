bName = navigator.appName;
bVersion = parseInt(navigator.appVersion);

var nom = 8; // Number of menus
var usePics = 1; // use pictures?  1 = yes, 0 = no

var ttls = new Array(); // An array for the title objects
var subs = new Array(); // An array for the submenu objects
var lastn;
var lastmove;

if (bName == "Netscape" && bVersion >= "5") {

visible = "visible";
hidden = "hidden";

for (var i = 1; i <= nom; i++) {
ttls[i] = ('title' + i);
subs[i] = ('submenu' +i);
}

function picopen(n) {
var title = ('title' + n);
var pic = ('pic' + n);

	if (document.getElementById('title1') && n==1)  {
		document.images[pic].src = "../images/n-introduction-b.gif";
	}
	else if (document.getElementById('title2') && n==2) {
		document.images[pic].src = "../images/n-quickstart-b.gif";
	}
	else if (document.getElementById('title3') && n==3) {
		document.images[pic].src = "../images/n-3dmarkusage-b.gif";
	}
	else if (document.getElementById('title4') && n==4) {
		document.images[pic].src = "../images/n-profeatures-b.gif";
	}
	else if (document.getElementById('title5') && n==5) {
		document.images[pic].src = "../images/n-thetests-b.gif";
	}
	else if (document.getElementById('title6') && n==6) {
		document.images[pic].src = "../images/n-onlineservices-b.gif";
	}
	else if (document.getElementById('title7') && n==7) {
		document.images[pic].src = "../images/n-support-b.gif";
	}
	else if (document.getElementById('title8') && n==8) {
		document.images[pic].src = "../images/n-about-b.gif";
	}
}

function picclose(n) {
title = ('title' + n);
pic = ('pic' + n);

	if (document.getElementById('title1') && n==1) {
		document.images[pic].src = "../images/n-introduction-a.gif";
	}
	else if (document.getElementById('title2') && n==2) {
		document.images[pic].src = "../images/n-quickstart-a.gif";
    }
	else if (document.getElementById('title3') && n==3) {
		document.images[pic].src = "../images/n-3dmarkusage-a.gif";
    }
	else if (document.getElementById('title4') && n==4) {
		document.images[pic].src = "../images/n-profeatures-a.gif";
    }
	else if (document.getElementById('title5') && n==5) {
		document.images[pic].src = "../images/n-thetests-a.gif";
    }
	else if (document.getElementById('title6') && n==6) {
		document.images[pic].src = "../images/n-onlineservices-a.gif";
    }
	else if (document.getElementById('title7') && n==7) {
		document.images[pic].src = "../images/n-support-a.gif";
    }
	else if (document.getElementById('title8') && n==8) {
		document.images[pic].src = "../images/n-about-a.gif";
    }
}

lastn = (nom + 1);
lastmove = 0;

function lasttoggle(n,move) {
	if (n <= nom) {
		menu = ('submenu' + n);
		if (document.getElementById) {
			submenu = document.getElementById(menu);
		}	
			if (submenu.style.visibility == visible) {
				submenu.style.visibility = hidden;
//				picclose(n); 
				for (var i = (n+1); i <= nom; i++) {
					if (document.getElementById) {
						t = parseInt(document.getElementById(ttls[i]).style.top);
						s = parseInt(document.getElementById(subs[i]).style.top);
						t = t - move;
						s = s - move;
						document.getElementById(ttls[i]).style.top = t + "px";
						document.getElementById(subs[i]).style.top = s + "px";
					}
					}
			}
      }
}

function toggle(n,move) {
	menu = ('submenu' + n);
	if (document.getElementById) {
		submenu = document.getElementById(menu);
	}
		if (submenu.style.visibility == visible) {
			submenu.style.visibility = hidden;
//			    if (usePics) {
//					picclose(n);
//				}
					for (var i = (n+1); i <= nom; i++) {
						if (document.getElementById) {
						t = parseInt(document.getElementById(ttls[i]).style.top);
						s = parseInt(document.getElementById(subs[i]).style.top);
						t = t - move;
						s = s - move;
						document.getElementById(ttls[i]).style.top = t + "px";
						document.getElementById(subs[i]).style.top = s + "px";
						}
					}
		}
		else {
			submenu.style.visibility = visible;
//			if (usePics) {
//				picopen(n);
//			}
				if (lastn != n) {
					lasttoggle(lastn,lastmove);
				}
				for (var i = (n+1); i <= nom; i++) {
				if (document.getElementById) {
					t = parseInt(document.getElementById(ttls[i]).style.top);
					s = parseInt(document.getElementById(subs[i]).style.top);
					t = t + move;
					s = s + move;
					document.getElementById(ttls[i]).style.top = t + "px";
					document.getElementById(subs[i]).style.top = s + "px";
				}
				}
		}
	
	lastmove = move;
}
}
else {
if (document.layers) {
visible = 'show';
hidden = 'hide';
}
else
if (document.all) {
visible = 'visible';
hidden = 'hidden';
}
for (var i = 1; i <= nom; i++) {
ttls[i] = ('title' + i);
subs[i] = ('submenu' +i);
}
function picopen(n) {
title = ('title' + n);
pic = ('pic' + n);

if (document.layers && n==1)  {
document.layers[title].document.images[pic].src = "../images/n-introduction-b.gif";
}
else if (document.all && n==1) {
document.all(pic).src = "../images/n-introduction-b.gif";
   }
if (document.layers && n==2) {
document.layers[title].document.images[pic].src = "../images/n-quickstart-b.gif";
}
else if (document.all && n==2) {
document.all(pic).src = "../images/n-quickstart-b.gif";
   }
if (document.layers && n==3) {
document.layers[title].document.images[pic].src = "../images/n-3dmarkusage-b.gif";
}
else if (document.all && n==3) {
document.all(pic).src = "../images/n-3dmarkusage-b.gif";
   }
if (document.layers && n==4) {
document.layers[title].document.images[pic].src = "../images/n-profeatures-b.gif";
}
else if (document.all && n==4) {
document.all(pic).src = "../images/n-profeatures-b.gif";
   }
if (document.layers && n==5) {
document.layers[title].document.images[pic].src = "../images/n-thetests-b.gif";
}
else if (document.all && n==5) {
document.all(pic).src = "../images/n-thetests-b.gif";
   }
if (document.layers && n==6) {
document.layers[title].document.images[pic].src = "../images/n-onlineservices-b.gif";
}
else if (document.all && n==6) {
document.all(pic).src = "../images/n-onlineservices-b.gif";
   }
if (document.layers && n==7) {
document.layers[title].document.images[pic].src = "../images/n-support-b.gif";
}
else if (document.all && n==7) {
document.all(pic).src = "../images/n-support-b.gif";
   }
if (document.layers && n==8) {
document.layers[title].document.images[pic].src = "../images/n-about-b.gif";
}
else if (document.all && n==8) {
document.all(pic).src = "../images/n-about-b.gif";
   }
}

function picclose(n) {
title = ('title' + n);
pic = ('pic' + n);
if (document.layers && n==1) {
document.layers[title].document.images[pic].src = "../images/n-introduction-a.gif";
}
else if (document.all && n==1) {
document.all(pic).src = "../images/n-introduction-a.gif";
   }
if (document.layers && n==2) {
document.layers[title].document.images[pic].src = "../images/n-quickstart-a.gif";
}
else if (document.all && n==2) {
document.all(pic).src = "../images/n-quickstart-a.gif";
   }
if (document.layers && n==3) {
document.layers[title].document.images[pic].src = "../images/n-3dmarkusage-a.gif";
}
else if (document.all && n==3) {
document.all(pic).src = "../images/n-3dmarkusage-a.gif";
   }
if (document.layers && n==4) {
document.layers[title].document.images[pic].src = "../images/n-profeatures-a.gif";
}
else if (document.all && n==4) {
document.all(pic).src = "../images/n-profeatures-a.gif";
   }
if (document.layers && n==5) {
document.layers[title].document.images[pic].src = "../images/n-thetests-a.gif";
}
else if (document.all && n==5) {
document.all(pic).src = "../images/n-thetests-a.gif";
   }
if (document.layers && n==6) {
document.layers[title].document.images[pic].src = "../images/n-onlineservices-a.gif";
}
else if (document.all && n==6) {
document.all(pic).src = "../images/n-onlineservices-a.gif";
   }
if (document.layers && n==7) {
document.layers[title].document.images[pic].src = "../images/n-support-a.gif";
}
else if (document.all && n==7) {
document.all(pic).src = "../images/n-support-a.gif";
   }
if (document.layers && n==8) {
document.layers[title].document.images[pic].src = "../images/n-about-a.gif";
}
else if (document.all && n==8) {
document.all(pic).src = "../images/n-about-a.gif";
   }
}

lastn = (nom + 1);
lastmove = 0;
function lasttoggle(n,move) {
if (n <= nom) {
menu = ('submenu' + n);
if (document.layers) {
submenu = document.layers[menu];
}
else if (document.all) {
submenu = document.all(menu).style;
}
if (submenu.visibility == visible) {
submenu.visibility = hidden;
picclose(n); // Remove this if you don't use pictures
for (var i = (n+1); i <= nom; i++) {
if (document.layers) {
document.layers[ttls[i]].top -= move;
document.layers[subs[i]].top -= move;
}
else if (document.all) {
document.all(ttls[i]).style.pixelTop -= move;
document.all(subs[i]).style.pixelTop -= move;
            }
         }
      }
   }
}
function toggle(n,move) {
menu = ('submenu' + n);
if (document.layers) {
submenu = document.layers[menu];
}
else if (document.all) {
submenu = document.all(menu).style;
}
if (submenu.visibility == visible) {
submenu.visibility = hidden;
if (usePics) picclose(n);
for (var i = (n+1); i <= nom; i++) {
if (document.layers) {
document.layers[ttls[i]].top -= move;
document.layers[subs[i]].top -= move;
}
else if (document.all) {
document.all(ttls[i]).style.pixelTop -= move;
document.all(subs[i]).style.pixelTop -= move;
      }
   }
}
else {
submenu.visibility = visible;
if (usePics) picopen(n);
if (lastn != n) {
lasttoggle(lastn,lastmove);
}
for (var i = (n+1); i <= nom; i++) {
if (document.layers) {
document.layers[ttls[i]].top += move;
document.layers[subs[i]].top += move;
}
if (document.all) {
document.all(ttls[i]).style.pixelTop += move;
document.all(subs[i]).style.pixelTop += move;
      }
   }
}

lastmove = move;
}
}
