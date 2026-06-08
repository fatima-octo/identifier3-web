((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={R4:function R4(d,e,f,g,h){var _=this
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
_.dx=$},aUY:function aUY(d){this.a=d},arn:function arn(){},w1:function w1(d,e,f){this.e=d
this.c=e
this.a=f},
cgN(){var x=new B.bI(new Float64Array(16))
x.eA()
return new A.agB(x,$.aH())},
agB:function agB(d,e){var _=this
_.a=d
_.N$=0
_.Z$=e
_.aD$=_.al$=0},
ET:function ET(d,e){this.a=d
this.b=e},
b3S:function b3S(){},
azP:function azP(){},
cb6(d){var x=new B.bI(new Float64Array(16))
if(x.jJ(d)===0)throw B.k(B.fe(d,"other","Matrix cannot be inverted"))
return x},
acm:function acm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
coU(d){switch(d.a){case 0:return C.xD
case 2:return C.Z6
case 1:return C.Z5
case 3:return D.bl4
case 4:return C.Z7}},
bDo(d,e){var x=0,w=B.E(y.e),v,u
var $async$bDo=B.z(function(f,g){if(f===1)return B.B(g,w)
for(;;)switch(x){case 0:if(e===D.aeV||e===D.aeW)u=!(d.gdQ()==="https"||d.gdQ()==="http")
else u=!1
if(u)throw B.k(B.fe(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.bR8().DM(d.j(0),new B.a88(A.coU(e),new B.a7J(!0,!0,C.a5),null))
x=1
break
case 1:return B.C(v,w)}})
return B.D($async$bDo,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[19]
A.R4.prototype={
sb2U(d){if(this.C===d)return
this.C=d
this.ae()},
ca(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.bU,d,x.gcp()):x.av(C.cc,d,x.gcw())},
c4(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.c3,d,x.gcr()):x.av(C.c2,d,x.gcs())},
c5(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.cc,d,x.gcw()):x.av(C.bU,d,x.gcp())},
c3(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.c2,d,x.gcs()):x.av(C.c3,d,x.gcr())},
dq(d){var x,w,v=this.K$
if(v==null)return new B.V(B.a3(0,d.a,d.b),B.a3(0,d.c,d.d))
x=(this.C&1)===1?d.gL_():d
w=v.av(C.aX,x,v.gda())
return(this.C&1)===1?new B.V(w.b,w.a):w},
cn(){var x,w,v=this
v.V=null
x=v.K$
if(x!=null){w=y.a
x.dr((v.C&1)===1?w.a(B.Z.prototype.gab.call(v)).gL_():w.a(B.Z.prototype.gab.call(v)),!0)
x=v.C
w=v.K$
v.fy=(x&1)===1?new B.V(w.gF(0).b,v.K$.gF(0).a):w.gF(0)
x=new B.bI(new Float64Array(16))
x.eA()
x.en(v.gF(0).a/2,v.gF(0).b/2,0,1)
x.Eo(1.5707963267948966*C.t.aE(v.C,4))
x.en(-v.K$.gF(0).a/2,-v.K$.gF(0).b/2,0,1)
v.V=x}else{x=y.a.a(B.Z.prototype.gab.call(v))
v.fy=new B.V(B.a3(0,x.a,x.b),B.a3(0,x.c,x.d))}},
e4(d,e){var x=this
if(x.K$==null||x.V==null)return!1
return d.Jj(new A.aUY(x),e,x.V)},
aJ7(d,e){var x=this.K$
x.toString
d.f1(x,e)},
b2(d,e){var x,w,v=this,u=v.Y
if(v.K$!=null){x=v.cx
x===$&&B.b()
w=v.V
w.toString
u.sbc(0,d.zk(x,e,w,v.gaJ6(),u.a))}else u.sbc(0,null)},
m(){this.Y.sbc(0,null)
this.hD()},
eY(d,e){var x=this.V
if(x!=null)e.fm(0,x)
this.a_E(d,e)}}
A.arn.prototype={
b4(d){var x
this.fs(d)
x=this.K$
if(x!=null)x.b4(d)},
aH(d){var x
this.fh(0)
x=this.K$
if(x!=null)x.aH(0)}}
A.w1.prototype={
bk(d){var x=new A.R4(this.e,B.b3(y.i),null,new B.bv(),B.b3(y.d))
x.bj()
x.sbU(null)
return x},
bx(d,e){e.sb2U(this.e)}}
A.agB.prototype={}
A.ET.prototype={
J(){return"LaunchMode."+this.b}}
A.b3S.prototype={}
A.azP.prototype={}
A.acm.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.acm&&x.d.k(0,e.d)&&x.c.k(0,e.c)&&x.b.k(0,e.b)&&x.a.k(0,e.a)},
gE(d){var x=this
return B.al(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["X(X)","~(rL,l)"])
A.aUY.prototype={
$2(d,e){return this.a.K$.dK(d,e)},
$S:40};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.R4.prototype,"gcw","ca",0)
x(v,"gcs","c4",0)
x(v,"gcp","c5",0)
x(v,"gcr","c3",0)
w(v,"gaJ6","aJ7",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.arn,B.a2)
w(A.R4,A.arn)
w(A.aUY,B.ma)
w(A.w1,B.bL)
w(A.agB,B.cT)
w(A.ET,B.tF)
v(B.P,[A.b3S,A.azP,A.acm])
x(A.arn,B.by)})()
B.lW(b.typeUniverse,JSON.parse('{"R4":{"a2":[],"by":["a2"],"Z":[],"i":[],"b6":[]},"w1":{"bL":[],"ba":[],"e":[],"i":[]},"agB":{"cT":["bI"],"aw":[]}}'))
var y={a:B.a8("aB"),d:B.a8("ha"),i:B.a8("wu"),e:B.a8("M")};(function constants(){D.bCX=new A.azP()
D.bD4=new A.b3S()
D.bDk=new A.ET(0,"platformDefault")
D.aeV=new A.ET(1,"inAppWebView")
D.aeW=new A.ET(2,"inAppBrowserView")
D.Dm=new A.ET(3,"externalApplication")
D.bl4=new B.A8(3,"externalApplication")})()};
(a=>{a["mABHX4Edo3qXfIjsvO8ISl/9Dok="]=a.current})($__dart_deferred_initializers__);