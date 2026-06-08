((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={QY:function QY(d,e,f,g,h){var _=this
_.C=d
_.V=null
_.X=e
_.K$=f
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
_.dx=$},aUS:function aUS(d){this.a=d},arj:function arj(){},Ad:function Ad(d,e,f){this.e=d
this.c=e
this.a=f},
cgr(){var x=new B.bI(new Float64Array(16))
x.eA()
return new A.agy(x,$.aH())},
agy:function agy(d,e){var _=this
_.a=d
_.N$=0
_.Z$=e
_.aD$=_.al$=0},
EK:function EK(d,e){this.a=d
this.b=e},
b3x:function b3x(){},
azK:function azK(){},
caL(d){var x=new B.bI(new Float64Array(16))
if(x.jJ(d)===0)throw B.k(B.fe(d,"other","Matrix cannot be inverted"))
return x},
aci:function aci(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
coy(d){switch(d.a){case 0:return C.xD
case 2:return C.Z4
case 1:return C.Z3
case 3:return D.bkY
case 4:return C.Z5}},
bD4(d,e){var x=0,w=B.E(y.e),v,u
var $async$bD4=B.A(function(f,g){if(f===1)return B.B(g,w)
for(;;)switch(x){case 0:if(e===D.aeQ||e===D.aeR)u=!(d.gdQ()==="https"||d.gdQ()==="http")
else u=!1
if(u)throw B.k(B.fe(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.bQO().DI(d.j(0),new B.a83(A.coy(e),new B.a7E(!0,!0,C.a5),null))
x=1
break
case 1:return B.C(v,w)}})
return B.D($async$bD4,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[19]
A.QY.prototype={
sb2w(d){if(this.C===d)return
this.C=d
this.ae()},
ca(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.au(C.bT,d,x.gcp()):x.au(C.cc,d,x.gcv())},
c4(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.au(C.c3,d,x.gcr()):x.au(C.c2,d,x.gcs())},
c5(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.au(C.cc,d,x.gcv()):x.au(C.bT,d,x.gcp())},
c3(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.au(C.c2,d,x.gcs()):x.au(C.c3,d,x.gcr())},
dq(d){var x,w,v=this.K$
if(v==null)return new B.V(B.a3(0,d.a,d.b),B.a3(0,d.c,d.d))
x=(this.C&1)===1?d.gKQ():d
w=v.au(C.aX,x,v.gda())
return(this.C&1)===1?new B.V(w.b,w.a):w},
cn(){var x,w,v=this
v.V=null
x=v.K$
if(x!=null){w=y.a
x.dr((v.C&1)===1?w.a(B.Z.prototype.gab.call(v)).gKQ():w.a(B.Z.prototype.gab.call(v)),!0)
x=v.C
w=v.K$
v.fy=(x&1)===1?new B.V(w.gF(0).b,v.K$.gF(0).a):w.gF(0)
x=new B.bI(new Float64Array(16))
x.eA()
x.en(v.gF(0).a/2,v.gF(0).b/2,0,1)
x.Ei(1.5707963267948966*C.t.aE(v.C,4))
x.en(-v.K$.gF(0).a/2,-v.K$.gF(0).b/2,0,1)
v.V=x}else{x=y.a.a(B.Z.prototype.gab.call(v))
v.fy=new B.V(B.a3(0,x.a,x.b),B.a3(0,x.c,x.d))}},
e4(d,e){var x=this
if(x.K$==null||x.V==null)return!1
return d.Ja(new A.aUS(x),e,x.V)},
aIM(d,e){var x=this.K$
x.toString
d.f1(x,e)},
b2(d,e){var x,w,v=this,u=v.X
if(v.K$!=null){x=v.cx
x===$&&B.b()
w=v.V
w.toString
u.sbb(0,d.zj(x,e,w,v.gaIL(),u.a))}else u.sbb(0,null)},
m(){this.X.sbb(0,null)
this.hD()},
eY(d,e){var x=this.V
if(x!=null)e.fm(0,x)
this.a_v(d,e)}}
A.arj.prototype={
b4(d){var x
this.fs(d)
x=this.K$
if(x!=null)x.b4(d)},
aH(d){var x
this.fh(0)
x=this.K$
if(x!=null)x.aH(0)}}
A.Ad.prototype={
bk(d){var x=new A.QY(this.e,B.b3(y.i),null,new B.bv(),B.b3(y.d))
x.bj()
x.sbU(null)
return x},
bx(d,e){e.sb2w(this.e)}}
A.agy.prototype={}
A.EK.prototype={
J(){return"LaunchMode."+this.b}}
A.b3x.prototype={}
A.azK.prototype={}
A.aci.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.aci&&x.d.k(0,e.d)&&x.c.k(0,e.c)&&x.b.k(0,e.b)&&x.a.k(0,e.a)},
gE(d){var x=this
return B.am(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["W(W)","~(rH,l)"])
A.aUS.prototype={
$2(d,e){return this.a.K$.dK(d,e)},
$S:39};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.QY.prototype,"gcv","ca",0)
x(v,"gcs","c4",0)
x(v,"gcp","c5",0)
x(v,"gcr","c3",0)
w(v,"gaIL","aIM",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.arj,B.a2)
w(A.QY,A.arj)
w(A.aUS,B.m9)
w(A.Ad,B.bL)
w(A.agy,B.cS)
w(A.EK,B.tD)
v(B.P,[A.b3x,A.azK,A.aci])
x(A.arj,B.by)})()
B.lV(b.typeUniverse,JSON.parse('{"QY":{"a2":[],"by":["a2"],"Z":[],"i":[],"b6":[]},"Ad":{"bL":[],"ba":[],"e":[],"i":[]},"agy":{"cS":["bI"],"aw":[]}}'))
var y={a:B.a8("aB"),d:B.a8("ha"),i:B.a8("wr"),e:B.a8("M")};(function constants(){D.bCQ=new A.azK()
D.bCY=new A.b3x()
D.bDe=new A.EK(0,"platformDefault")
D.aeQ=new A.EK(1,"inAppWebView")
D.aeR=new A.EK(2,"inAppBrowserView")
D.Dk=new A.EK(3,"externalApplication")
D.bkY=new B.A1(3,"externalApplication")})()};
(a=>{a["W54zPMCmfqRr7cbSkw7eC1RfLcc="]=a.current})($__dart_deferred_initializers__);