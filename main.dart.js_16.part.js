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
_.dx=$},aV7:function aV7(d){this.a=d},aru:function aru(){},w3:function w3(d,e,f){this.e=d
this.c=e
this.a=f},
cgW(){var x=new B.bI(new Float64Array(16))
x.eA()
return new A.agH(x,$.aH())},
agH:function agH(d,e){var _=this
_.a=d
_.N$=0
_.Z$=e
_.aD$=_.al$=0},
EW:function EW(d,e){this.a=d
this.b=e},
b43:function b43(){},
azX:function azX(){},
cbf(d){var x=new B.bI(new Float64Array(16))
if(x.jL(d)===0)throw B.k(B.fe(d,"other","Matrix cannot be inverted"))
return x},
acr:function acr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cp1(d){switch(d.a){case 0:return C.xG
case 2:return C.Zo
case 1:return C.Zn
case 3:return D.bla
case 4:return C.Zp}},
bDy(d,e){var x=0,w=B.E(y.e),v,u
var $async$bDy=B.A(function(f,g){if(f===1)return B.B(g,w)
for(;;)switch(x){case 0:if(e===D.afc||e===D.afd)u=!(d.gdQ()==="https"||d.gdQ()==="http")
else u=!1
if(u)throw B.k(B.fe(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.bRe().DM(d.j(0),new B.a8d(A.cp1(e),new B.a7O(!0,!0,C.a5),null))
x=1
break
case 1:return B.C(v,w)}})
return B.D($async$bDy,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[20]
A.R6.prototype={
sb3d(d){if(this.C===d)return
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
x=(this.C&1)===1?d.gL2():d
w=v.av(C.aX,x,v.gda())
return(this.C&1)===1?new B.V(w.b,w.a):w},
cn(){var x,w,v=this
v.V=null
x=v.K$
if(x!=null){w=y.a
x.dr((v.C&1)===1?w.a(B.Z.prototype.gab.call(v)).gL2():w.a(B.Z.prototype.gab.call(v)),!0)
x=v.C
w=v.K$
v.fy=(x&1)===1?new B.V(w.gF(0).b,v.K$.gF(0).a):w.gF(0)
x=new B.bI(new Float64Array(16))
x.eA()
x.en(v.gF(0).a/2,v.gF(0).b/2,0,1)
x.Eo(1.5707963267948966*C.t.aE(v.C,4))
x.en(-v.K$.gF(0).a/2,-v.K$.gF(0).b/2,0,1)
v.V=x}else{x=y.a.a(B.Z.prototype.gab.call(v))
v.fy=new B.V(B.a4(0,x.a,x.b),B.a4(0,x.c,x.d))}},
e4(d,e){var x=this
if(x.K$==null||x.V==null)return!1
return d.Jk(new A.aV7(x),e,x.V)},
aJp(d,e){var x=this.K$
x.toString
d.f1(x,e)},
b2(d,e){var x,w,v=this,u=v.Y
if(v.K$!=null){x=v.cx
x===$&&B.b()
w=v.V
w.toString
u.sbd(0,d.zl(x,e,w,v.gaJo(),u.a))}else u.sbd(0,null)},
m(){this.Y.sbd(0,null)
this.hD()},
eY(d,e){var x=this.V
if(x!=null)e.fm(0,x)
this.a_K(d,e)}}
A.aru.prototype={
b4(d){var x
this.fs(d)
x=this.K$
if(x!=null)x.b4(d)},
aH(d){var x
this.fh(0)
x=this.K$
if(x!=null)x.aH(0)}}
A.w3.prototype={
bl(d){var x=new A.R6(this.e,B.b3(y.i),null,new B.bv(),B.b3(y.d))
x.bj()
x.sbV(null)
return x},
bx(d,e){e.sb3d(this.e)}}
A.agH.prototype={}
A.EW.prototype={
J(){return"LaunchMode."+this.b}}
A.b43.prototype={}
A.azX.prototype={}
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
$S:41};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.R6.prototype,"gcz","ca",0)
x(v,"gcs","c4",0)
x(v,"gcp","c5",0)
x(v,"gcr","c3",0)
w(v,"gaJo","aJp",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.aru,B.a2)
w(A.R6,A.aru)
w(A.aV7,B.m9)
w(A.w3,B.bL)
w(A.agH,B.cT)
w(A.EW,B.tG)
v(B.P,[A.b43,A.azX,A.acr])
x(A.aru,B.by)})()
B.lV(b.typeUniverse,JSON.parse('{"R6":{"a2":[],"by":["a2"],"Z":[],"i":[],"b7":[]},"w3":{"bL":[],"b6":[],"e":[],"i":[]},"agH":{"cT":["bI"],"aw":[]}}'))
var y={a:B.a8("aA"),d:B.a8("ha"),i:B.a8("ww"),e:B.a8("M")};(function constants(){D.bD_=new A.azX()
D.bD7=new A.b43()
D.bDn=new A.EW(0,"platformDefault")
D.afc=new A.EW(1,"inAppWebView")
D.afd=new A.EW(2,"inAppBrowserView")
D.Dr=new A.EW(3,"externalApplication")
D.bla=new B.Aa(3,"externalApplication")})()};
(a=>{a["qMKjQg+SNna0scay9pimW5/h08M="]=a.current})($__dart_deferred_initializers__);