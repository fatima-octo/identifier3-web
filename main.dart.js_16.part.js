((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={R6:function R6(d,e,f,g,h){var _=this
_.C=d
_.V=null
_.Y=e
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
_.dx=$},aV7:function aV7(d){this.a=d},art:function art(){},w2:function w2(d,e,f){this.e=d
this.c=e
this.a=f},
cgZ(){var x=new B.bI(new Float64Array(16))
x.ez()
return new A.agH(x,$.aH())},
agH:function agH(d,e){var _=this
_.a=d
_.N$=0
_.Z$=e
_.aD$=_.al$=0},
EU:function EU(d,e){this.a=d
this.b=e},
b43:function b43(){},
azW:function azW(){},
cbi(d){var x=new B.bI(new Float64Array(16))
if(x.jM(d)===0)throw B.k(B.fd(d,"other","Matrix cannot be inverted"))
return x},
acr:function acr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cp4(d){switch(d.a){case 0:return C.xF
case 2:return C.Zo
case 1:return C.Zn
case 3:return D.blb
case 4:return C.Zp}},
bDB(d,e){var x=0,w=B.E(y.e),v,u
var $async$bDB=B.A(function(f,g){if(f===1)return B.B(g,w)
for(;;)switch(x){case 0:if(e===D.afd||e===D.afe)u=!(d.gdQ()==="https"||d.gdQ()==="http")
else u=!1
if(u)throw B.k(B.fd(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.bRh().DO(d.j(0),new B.a8e(A.cp4(e),new B.a7P(!0,!0,C.a5),null))
x=1
break
case 1:return B.C(v,w)}})
return B.D($async$bDB,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[20]
A.R6.prototype={
sb3h(d){if(this.C===d)return
this.C=d
this.ae()},
ca(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.bU,d,x.gcp()):x.av(C.cc,d,x.gcz())},
c4(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.c3,d,x.gcr()):x.av(C.c2,d,x.gcs())},
c5(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.cc,d,x.gcz()):x.av(C.bU,d,x.gcp())},
c3(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.c2,d,x.gcs()):x.av(C.c3,d,x.gcr())},
dq(d){var x,w,v=this.K$
if(v==null)return new B.V(B.a4(0,d.a,d.b),B.a4(0,d.c,d.d))
x=(this.C&1)===1?d.gL4():d
w=v.av(C.aX,x,v.gda())
return(this.C&1)===1?new B.V(w.b,w.a):w},
cn(){var x,w,v=this
v.V=null
x=v.K$
if(x!=null){w=y.a
x.dr((v.C&1)===1?w.a(B.Z.prototype.gab.call(v)).gL4():w.a(B.Z.prototype.gab.call(v)),!0)
x=v.C
w=v.K$
v.fy=(x&1)===1?new B.V(w.gF(0).b,v.K$.gF(0).a):w.gF(0)
x=new B.bI(new Float64Array(16))
x.ez()
x.en(v.gF(0).a/2,v.gF(0).b/2,0,1)
x.Eq(1.5707963267948966*C.t.aE(v.C,4))
x.en(-v.K$.gF(0).a/2,-v.K$.gF(0).b/2,0,1)
v.V=x}else{x=y.a.a(B.Z.prototype.gab.call(v))
v.fy=new B.V(B.a4(0,x.a,x.b),B.a4(0,x.c,x.d))}},
e4(d,e){var x=this
if(x.K$==null||x.V==null)return!1
return d.Jm(new A.aV7(x),e,x.V)},
aJt(d,e){var x=this.K$
x.toString
d.f1(x,e)},
b2(d,e){var x,w,v=this,u=v.Y
if(v.K$!=null){x=v.cx
x===$&&B.b()
w=v.V
w.toString
u.sbd(0,d.zm(x,e,w,v.gaJs(),u.a))}else u.sbd(0,null)},
m(){this.Y.sbd(0,null)
this.hD()},
eY(d,e){var x=this.V
if(x!=null)e.fm(0,x)
this.a_K(d,e)}}
A.art.prototype={
b4(d){var x
this.fs(d)
x=this.K$
if(x!=null)x.b4(d)},
aH(d){var x
this.fh(0)
x=this.K$
if(x!=null)x.aH(0)}}
A.w2.prototype={
bl(d){var x=new A.R6(this.e,B.b3(y.i),null,new B.bv(),B.b3(y.d))
x.bj()
x.sbV(null)
return x},
bz(d,e){e.sb3h(this.e)}}
A.agH.prototype={}
A.EU.prototype={
J(){return"LaunchMode."+this.b}}
A.b43.prototype={}
A.azW.prototype={}
A.acr.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.acr&&x.d.k(0,e.d)&&x.c.k(0,e.c)&&x.b.k(0,e.b)&&x.a.k(0,e.a)},
gE(d){var x=this
return B.ak(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["X(X)","~(rM,l)"])
A.aV7.prototype={
$2(d,e){return this.a.K$.dK(d,e)},
$S:40};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.R6.prototype,"gcz","ca",0)
x(v,"gcs","c4",0)
x(v,"gcp","c5",0)
x(v,"gcr","c3",0)
w(v,"gaJs","aJt",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.art,B.a2)
w(A.R6,A.art)
w(A.aV7,B.m9)
w(A.w2,B.bM)
w(A.agH,B.cT)
w(A.EU,B.tG)
v(B.P,[A.b43,A.azW,A.acr])
x(A.art,B.by)})()
B.lV(b.typeUniverse,JSON.parse('{"R6":{"a2":[],"by":["a2"],"Z":[],"i":[],"b6":[]},"w2":{"bM":[],"b9":[],"e":[],"i":[]},"agH":{"cT":["bI"],"aw":[]}}'))
var y={a:B.a8("az"),d:B.a8("h9"),i:B.a8("wv"),e:B.a8("M")};(function constants(){D.bD0=new A.azW()
D.bD8=new A.b43()
D.bDo=new A.EU(0,"platformDefault")
D.afd=new A.EU(1,"inAppWebView")
D.afe=new A.EU(2,"inAppBrowserView")
D.Dr=new A.EU(3,"externalApplication")
D.blb=new B.A9(3,"externalApplication")})()};
(a=>{a["kowhbb/z5YWz3JT4TMiWlXi8cRk="]=a.current})($__dart_deferred_initializers__);