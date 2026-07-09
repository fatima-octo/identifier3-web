((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={TC:function TC(d,e,f,g,h){var _=this
_.E=d
_.Y=null
_.a0=e
_.L$=f
_.dy=g
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=h
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},b1o:function b1o(d){this.a=d},avI:function avI(){},xC:function xC(d,e,f){this.e=d
this.c=e
this.a=f},
czU(){var x=new B.c3(new Float64Array(16))
x.eM()
return new A.aki(x,$.aG())},
aki:function aki(d,e){var _=this
_.a=d
_.O$=0
_.X$=e
_.az$=_.ag$=0},
GV:function GV(d,e){this.a=d
this.b=e},
bbW:function bbW(){},
aF7:function aF7(){},
cug(d){var x=new B.c3(new Float64Array(16))
if(x.kr(d)===0)throw B.k(B.h1(d,"other","Matrix cannot be inverted"))
return x},
ag_:function ag_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cIL(d){switch(d.a){case 0:return C.yk
case 2:return C.a_n
case 1:return C.a_m
case 3:return D.bn4
case 4:return C.a_o}},
bPi(d,e){var x=0,w=B.E(y.e),v,u
var $async$bPi=B.y(function(f,g){if(f===1)return B.B(g,w)
for(;;)switch(x){case 0:if(e===D.agA||e===D.agB)u=!(d.gdT()==="https"||d.gdT()==="http")
else u=!1
if(u)throw B.k(B.h1(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.c7d().FP(d.j(0),new B.abK(A.cIL(e),new B.abj(!0,!0,C.a0),null))
x=1
break
case 1:return B.C(v,w)}})
return B.D($async$bPi,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[19]
A.TC.prototype={
sbab(d){if(this.E===d)return
this.E=d
this.ai()},
ck(d){var x=this.L$
if(x==null)return 0
return(this.E&1)===1?x.aC(C.c1,d,x.gcD()):x.aC(C.cg,d,x.gcJ())},
cc(d){var x=this.L$
if(x==null)return 0
return(this.E&1)===1?x.aC(C.c8,d,x.gcE()):x.aC(C.c7,d,x.gcF())},
cd(d){var x=this.L$
if(x==null)return 0
return(this.E&1)===1?x.aC(C.cg,d,x.gcJ()):x.aC(C.c1,d,x.gcD())},
cb(d){var x=this.L$
if(x==null)return 0
return(this.E&1)===1?x.aC(C.c7,d,x.gcF()):x.aC(C.c8,d,x.gcE())},
dv(d){var x,w,v=this.L$
if(v==null)return new B.Y(B.a9(0,d.a,d.b),B.a9(0,d.c,d.d))
x=(this.E&1)===1?d.gNt():d
w=v.aC(C.b3,x,v.gdi())
return(this.E&1)===1?new B.Y(w.b,w.a):w},
cB(){var x,w,v=this
v.Y=null
x=v.L$
if(x!=null){w=y.a
x.dA((v.E&1)===1?w.a(B.a3.prototype.gac.call(v)).gNt():w.a(B.a3.prototype.gac.call(v)),!0)
x=v.E
w=v.L$
v.fy=(x&1)===1?new B.Y(w.gG(0).b,v.L$.gG(0).a):w.gG(0)
x=new B.c3(new Float64Array(16))
x.eM()
x.eA(v.gG(0).a/2,v.gG(0).b/2,0,1)
x.Gs(1.5707963267948966*C.r.aD(v.E,4))
x.eA(-v.L$.gG(0).a/2,-v.L$.gG(0).b/2,0,1)
v.Y=x}else{x=y.a.a(B.a3.prototype.gac.call(v))
v.fy=new B.Y(B.a9(0,x.a,x.b),B.a9(0,x.c,x.d))}},
eg(d,e){var x=this
if(x.L$==null||x.Y==null)return!1
return d.LD(new A.b1o(x),e,x.Y)},
aOy(d,e){var x=this.L$
x.toString
d.fd(x,e)},
b9(d,e){var x,w,v=this,u=v.a0
if(v.L$!=null){x=v.cx
x===$&&B.b()
w=v.Y
w.toString
u.sbj(0,d.AX(x,e,w,v.gaOx(),u.a))}else u.sbj(0,null)},
m(){this.a0.sbj(0,null)
this.i7()},
f9(d,e){var x=this.Y
if(x!=null)e.fF(0,x)
this.a2P(d,e)}}
A.avI.prototype={
bc(d){var x
this.fL(d)
x=this.L$
if(x!=null)x.bc(d)},
aK(d){var x
this.fw(0)
x=this.L$
if(x!=null)x.aK(0)}}
A.xC.prototype={
bt(d){var x=new A.TC(this.e,B.b3(y.i),null,new B.bE(),B.b3(y.d))
x.bs()
x.sc1(null)
return x},
bH(d,e){e.sbab(this.e)}}
A.aki.prototype={}
A.GV.prototype={
K(){return"LaunchMode."+this.b}}
A.bbW.prototype={}
A.aF7.prototype={}
A.ag_.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.ag_&&x.d.k(0,e.d)&&x.c.k(0,e.c)&&x.b.k(0,e.b)&&x.a.k(0,e.a)},
gF(d){var x=this
return B.al(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["Z(Z)","~(u9,m)"])
A.b1o.prototype={
$2(d,e){return this.a.L$.dR(d,e)},
$S:47};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.TC.prototype,"gcJ","ck",0)
x(v,"gcF","cc",0)
x(v,"gcD","cd",0)
x(v,"gcE","cb",0)
w(v,"gaOx","aOy",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.avI,B.a6)
w(A.TC,A.avI)
w(A.b1o,B.n1)
w(A.xC,B.c9)
w(A.aki,B.d7)
w(A.GV,B.v5)
v(B.P,[A.bbW,A.aF7,A.ag_])
x(A.avI,B.bF)})()
B.nN(b.typeUniverse,JSON.parse('{"TC":{"a6":[],"bF":["a6"],"a3":[],"h":[],"b8":[]},"xC":{"c9":[],"bb":[],"e":[],"h":[]},"aki":{"d7":["c3"],"az":[]}}'))
var y={a:B.a2("aK"),d:B.a2("hE"),i:B.a2("y6"),e:B.a2("K")};(function constants(){D.bFg=new A.aF7()
D.bFo=new A.bbW()
D.bFD=new A.GV(0,"platformDefault")
D.agA=new A.GV(1,"inAppWebView")
D.agB=new A.GV(2,"inAppBrowserView")
D.E6=new A.GV(3,"externalApplication")
D.bn4=new B.BS(3,"externalApplication")})()};
(a=>{a["eKBEX08vWdNreDgObK1Nzx4Dwbk="]=a.current})($__dart_deferred_initializers__);