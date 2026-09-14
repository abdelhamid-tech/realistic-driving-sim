import{j as F}from"./framer-motion-W8YWNWhL.js";import{r as Ht,L as pr}from"./react-vendor-KyPt3PYb.js";import{c as la,d as vr,e as Nm,u as Dm,f as Um,b as qh,a as Fm,t as Lr,X as Xf,B as ss}from"./index-CqYT112c.js";import{e as Om,f as Bm,g as zm,h as km,i as Hm,j as Vm,k as Gm,S as Wm}from"./radix-ui-DcFaH5bZ.js";import{a as ls,G as Fo,r as Yh,P as Ks,M as Xm,b as qm,U as Ym,V as qf,C as Km,f as jm,D as $m}from"./carmodels-C0RZZTt9.js";import{G as Zm,Z as Yf}from"./zap-BpVevBuX.js";import"./charts-CZfnbeC7.js";const Jm=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Qm=la("arrow-left",Jm);const e0=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],t0=la("cloud",e0);const n0=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],i0=la("rotate-ccw",n0);const s0=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],r0=la("settings-2",s0);const o0=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ac=la("sun",o0);function Kh({className:s,defaultValue:e,value:t,min:n=0,max:i=100,...r}){const o=Ht.useMemo(()=>Array.isArray(t)?t:Array.isArray(e)?e:[n,i],[t,e,n,i]);return F.jsxs(Om,{"data-slot":"slider",defaultValue:e,value:t,min:n,max:i,className:vr("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",s),...r,children:[F.jsx(Bm,{"data-slot":"slider-track",className:vr("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),children:F.jsx(zm,{"data-slot":"slider-range",className:vr("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")})}),Array.from({length:o.length},(a,c)=>F.jsx(km,{"data-slot":"slider-thumb",className:"border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"},c))]})}function a0({className:s,...e}){return F.jsx(Hm,{"data-slot":"switch",className:vr("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",s),...e,children:F.jsx(Vm,{"data-slot":"switch-thumb",className:vr("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")})})}function jh({className:s,...e}){return F.jsx(Gm,{"data-slot":"label",className:vr("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",s),...e})}const c0=Nm("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function $h({className:s,variant:e,asChild:t=!1,...n}){const i=t?Wm:"span";return F.jsx(i,{"data-slot":"badge",className:vr(c0({variant:e}),s),...n})}const Xu="186",l0=0,Zh=1,u0=2,cc=1,Kf=2,Oo=3,$s=0,pi=1,Ti=2,Ps=0,Vo=1,Jh=2,Qh=3,ed=4,h0=5,Kr=100,d0=101,f0=102,p0=103,m0=104,g0=200,x0=201,_0=202,v0=203,jf=204,$f=205,y0=206,M0=207,S0=208,b0=209,w0=210,T0=211,E0=212,A0=213,R0=214,Xl=0,ql=1,Yl=2,Ko=3,Kl=4,jl=5,$l=6,Zl=7,Zf=0,C0=1,P0=2,us=0,Jf=1,Qf=2,ep=3,qu=4,tp=5,np=6,ip=7,td="attached",L0="detached",sp=300,yr=301,no=302,tl=303,nl=304,Ac=306,Zs=1e3,as=1001,_c=1002,jn=1003,rp=1004,Bo=1005,$n=1006,lc=1007,Rs=1008,Ei=1009,op=1010,ap=1011,jo=1012,Yu=1013,ds=1014,Ni=1015,fs=1016,Ku=1017,ju=1018,$o=1020,cp=35902,lp=35899,up=1021,hp=1022,Di=1023,Is=1026,gr=1027,$u=1028,Zu=1029,Mr=1030,Ju=1031,Qu=1033,uc=33776,hc=33777,dc=33778,fc=33779,Jl=35840,Ql=35841,eu=35842,tu=35843,nu=36196,iu=37492,su=37496,ru=37488,ou=37489,vc=37490,au=37491,cu=37808,lu=37809,uu=37810,hu=37811,du=37812,fu=37813,pu=37814,mu=37815,gu=37816,xu=37817,_u=37818,vu=37819,yu=37820,Mu=37821,Su=36492,bu=36494,wu=36495,Tu=36283,Eu=36284,yc=36285,Au=36286,Zo=2300,Jo=2301,il=2302,nd=2303,id=2400,sd=2401,rd=2402,I0=2500,N0=0,dp=1,Ru=2,D0=3200,Cu=0,U0=1,qs="",In="srgb",Mi="srgb-linear",Mc="linear",gn="srgb",sl=7680,F0=519,O0=512,B0=513,z0=514,eh=515,k0=516,H0=517,th=518,V0=519,fp=35044,od="300 es",cs=2e3,Qo=2001;function G0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function W0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ea(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function X0(){const s=ea("canvas");return s.style.display="block",s}const ad={};function Sc(...s){const e="THREE."+s.shift();console.log(e,...s)}function pp(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function vt(...s){s=pp(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Dt(...s){s=pp(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Qr(...s){const e=s.join(" ");e in ad||(ad[e]=!0,vt(...s))}function q0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Y0={[Xl]:ql,[Yl]:$l,[Kl]:Zl,[Ko]:jl,[ql]:Xl,[$l]:Yl,[Zl]:Kl,[jl]:Ko};class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cd=1234567;const Go=Math.PI/180,io=180/Math.PI;function Ui(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(li[s&255]+li[s>>8&255]+li[s>>16&255]+li[s>>24&255]+"-"+li[e&255]+li[e>>8&255]+"-"+li[e>>16&15|64]+li[e>>24&255]+"-"+li[t&63|128]+li[t>>8&255]+"-"+li[t>>16&255]+li[t>>24&255]+li[n&255]+li[n>>8&255]+li[n>>16&255]+li[n>>24&255]).toLowerCase()}function qt(s,e,t){return Math.max(e,Math.min(t,s))}function nh(s,e){return(s%e+e)%e}function K0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function j0(s,e,t){return s!==e?(t-s)/(e-s):0}function Wo(s,e,t){return(1-t)*s+t*e}function $0(s,e,t,n){return Wo(s,e,1-Math.exp(-t*n))}function Z0(s,e=1){return e-Math.abs(nh(s,e*2)-e)}function J0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Q0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function eg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function tg(s,e){return s+Math.random()*(e-s)}function ng(s){return s*(.5-Math.random())}function ig(s){s!==void 0&&(cd=s);let e=cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sg(s){return s*Go}function rg(s){return s*io}function og(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function ag(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lg(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),d=r((e-n)/2),h=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*d,c*h,a*l);break;case"YZY":s.set(c*h,a*u,c*d,a*l);break;case"ZXZ":s.set(c*d,c*h,a*u,a*l);break;case"XZX":s.set(a*u,c*p,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*p,a*l);break;case"ZYZ":s.set(c*p,c*f,a*u,a*l);break;default:vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ki(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ug={DEG2RAD:Go,RAD2DEG:io,generateUUID:Ui,clamp:qt,euclideanModulo:nh,mapLinear:K0,inverseLerp:j0,lerp:Wo,damp:$0,pingpong:Z0,smoothstep:J0,smootherstep:Q0,randInt:eg,randFloat:tg,randFloatSpread:ng,seededRandom:ig,degToRad:sg,radToDeg:rg,isPowerOfTwo:og,ceilPowerOfTwo:ag,floorPowerOfTwo:cg,setQuaternionFromProperEuler:lg,normalize:xn,denormalize:Ki};class Ge{static{Ge.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qt(this.x,e.x,t.x),this.y=qt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qt(this.x,e,t),this.y=qt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3],h=r[o+0],f=r[o+1],p=r[o+2],v=r[o+3];if(d!==v||c!==h||l!==f||u!==p){let g=c*h+l*f+u*p+d*v;g<0&&(h=-h,f=-f,p=-p,v=-v,g=-g);let m=1-a;if(g<.9995){const w=Math.acos(g),R=Math.sin(w);m=Math.sin(m*w)/R,a=Math.sin(a*w)/R,c=c*m+h*a,l=l*m+f*a,u=u*m+p*a,d=d*m+v*a}else{c=c*m+h*a,l=l*m+f*a,u=u*m+p*a,d=d*m+v*a;const w=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=w,l*=w,u*=w,d*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=r[o],h=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*d+c*f-l*h,e[t+1]=c*p+u*h+l*d-a*f,e[t+2]=l*p+u*f+a*h-c*d,e[t+3]=u*p-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),d=a(r/2),h=c(n/2),f=c(i/2),p=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"YXZ":this._x=h*u*d+l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"ZXY":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d-h*f*p;break;case"ZYX":this._x=h*u*d-l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d+h*f*p;break;case"YZX":this._x=h*u*d+l*f*p,this._y=l*f*d+h*u*p,this._z=l*u*p-h*f*d,this._w=l*u*d-h*f*p;break;case"XZY":this._x=h*u*d-l*f*p,this._y=l*f*d-h*u*p,this._z=l*u*p+h*f*d,this._w=l*u*d+h*f*p;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{static{B.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ld.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ld.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),d=2*(r*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-r*d,this.z=i+c*d+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qt(this.x,e.x,t.x),this.y=qt(this.y,e.y,t.y),this.z=qt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qt(this.x,e,t),this.y=qt(this.y,e,t),this.z=qt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rl=new B,ld=new Wn;class Ot{static{Ot.prototype.isMatrix3=!0}constructor(e,t,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],p=n[8],v=i[0],g=i[3],m=i[6],w=i[1],R=i[4],x=i[7],b=i[2],T=i[5],L=i[8];return r[0]=o*v+a*w+c*b,r[3]=o*g+a*R+c*T,r[6]=o*m+a*x+c*L,r[1]=l*v+u*w+d*b,r[4]=l*g+u*R+d*T,r[7]=l*m+u*x+d*L,r[2]=h*v+f*w+p*b,r[5]=h*g+f*R+p*T,r[8]=h*m+f*x+p*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,p=t*d+n*h+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=d*v,e[1]=(i*l-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=h*v,e[4]=(u*t-i*c)*v,e[5]=(i*r-a*t)*v,e[6]=f*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ol.makeScale(e,t)),this}rotate(e){return Qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ol.makeRotation(-e)),this}translate(e,t){return Qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ol.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ol=new Ot,ud=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hd=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hg(){const s={enabled:!0,workingColorSpace:Mi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gn&&(i.r=Ls(i.r),i.g=Ls(i.g),i.b=Ls(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gn&&(i.r=eo(i.r),i.g=eo(i.g),i.b=eo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qs?Mc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Qr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Qr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Mi]:{primaries:e,whitePoint:n,transfer:Mc,toXYZ:ud,fromXYZ:hd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:n,transfer:gn,toXYZ:ud,fromXYZ:hd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),s}const Kt=hg();function Ls(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function eo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ir;class dg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=ea("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ls(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ls(t[n]/255)*255):t[n]=Ls(t[n]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fg=0;class ih{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(al(i[o].image)):r.push(al(i[o]))}else r=al(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function al(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let pg=0;const cl=new B;class Zn extends br{constructor(e=Zn.DEFAULT_IMAGE,t=Zn.DEFAULT_MAPPING,n=as,i=as,r=$n,o=Rs,a=Di,c=Ei,l=Zn.DEFAULT_ANISOTROPY,u=qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=Ui(),this.name="",this.source=new ih(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cl).x}get height(){return this.source.getSize(cl).y}get depth(){return this.source.getSize(cl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case _c:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case _c:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=sp;Zn.DEFAULT_ANISOTROPY=1;class yn{static{yn.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],p=c[9],v=c[2],g=c[6],m=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(p+g)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const R=(l+1)/2,x=(f+1)/2,b=(m+1)/2,T=(u+h)/4,L=(d+v)/4,_=(p+g)/4;return R>x&&R>b?R<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(R),i=T/n,r=L/n):x>b?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=T/i,r=_/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=L/r,i=_/r),this.set(n,i,r,t),this}let w=Math.sqrt((g-p)*(g-p)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(g-p)/w,this.y=(d-v)/w,this.z=(h-u)/w,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qt(this.x,e.x,t.x),this.y=qt(this.y,e.y,t.y),this.z=qt(this.z,e.z,t.z),this.w=qt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qt(this.x,e,t),this.y=qt(this.y,e,t),this.z=qt(this.z,e,t),this.w=qt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mg extends br{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new yn(0,0,e,t),this.scissorTest=!1,this.viewport=new yn(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new Zn(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new ih(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends mg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class mp extends Zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jn,this.minFilter=jn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gg extends Zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jn,this.minFilter=jn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class Ft{static{Ft.prototype.isMatrix4=!0}constructor(e,t,n,i,r,o,a,c,l,u,d,h,f,p,v,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,d,h,f,p,v,g)}set(e,t,n,i,r,o,a,c,l,u,d,h,f,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Nr.setFromMatrixColumn(e,0).length(),r=1/Nr.setFromMatrixColumn(e,1).length(),o=1/Nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const h=o*u,f=o*d,p=a*u,v=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+p*l,t[5]=h-v*l,t[9]=-a*c,t[2]=v-h*l,t[6]=p+f*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,f=c*d,p=l*u,v=l*d;t[0]=h+v*a,t[4]=p*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=v+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,f=c*d,p=l*u,v=l*d;t[0]=h-v*a,t[4]=-o*d,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,f=o*d,p=a*u,v=a*d;t[0]=c*u,t[4]=p*l-f,t[8]=h*l+v,t[1]=c*d,t[5]=v*l+h,t[9]=f*l-p,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,f=o*l,p=a*c,v=a*l;t[0]=c*u,t[4]=v-h*d,t[8]=p*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+p,t[10]=h-v*d}else if(e.order==="XZY"){const h=o*c,f=o*l,p=a*c,v=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+v,t[5]=o*u,t[9]=f*d-p,t[2]=p*d-f,t[6]=a*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xg,e,_g)}lookAt(e,t,n){const i=this.elements;return bi.subVectors(e,t),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Bs.crossVectors(n,bi),Bs.lengthSq()===0&&(Math.abs(n.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Bs.crossVectors(n,bi)),Bs.normalize(),Ra.crossVectors(bi,Bs),i[0]=Bs.x,i[4]=Ra.x,i[8]=bi.x,i[1]=Bs.y,i[5]=Ra.y,i[9]=bi.y,i[2]=Bs.z,i[6]=Ra.z,i[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],w=n[3],R=n[7],x=n[11],b=n[15],T=i[0],L=i[4],_=i[8],C=i[12],D=i[1],O=i[5],V=i[9],$=i[13],H=i[2],j=i[6],ie=i[10],ne=i[14],we=i[3],re=i[7],le=i[11],ye=i[15];return r[0]=o*T+a*D+c*H+l*we,r[4]=o*L+a*O+c*j+l*re,r[8]=o*_+a*V+c*ie+l*le,r[12]=o*C+a*$+c*ne+l*ye,r[1]=u*T+d*D+h*H+f*we,r[5]=u*L+d*O+h*j+f*re,r[9]=u*_+d*V+h*ie+f*le,r[13]=u*C+d*$+h*ne+f*ye,r[2]=p*T+v*D+g*H+m*we,r[6]=p*L+v*O+g*j+m*re,r[10]=p*_+v*V+g*ie+m*le,r[14]=p*C+v*$+g*ne+m*ye,r[3]=w*T+R*D+x*H+b*we,r[7]=w*L+R*O+x*j+b*re,r[11]=w*_+R*V+x*ie+b*le,r[15]=w*C+R*$+x*ne+b*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15],w=c*f-l*h,R=a*f-l*d,x=a*h-c*d,b=o*f-l*u,T=o*h-c*u,L=o*d-a*u;return t*(v*w-g*R+m*x)-n*(p*w-g*b+m*T)+i*(p*R-v*b+m*L)-r*(p*x-v*T+g*L)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-n*(r*u-a*c)+i*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],w=t*a-n*o,R=t*c-i*o,x=t*l-r*o,b=n*c-i*a,T=n*l-r*a,L=i*l-r*c,_=u*v-d*p,C=u*g-h*p,D=u*m-f*p,O=d*g-h*v,V=d*m-f*v,$=h*m-f*g,H=w*$-R*V+x*O+b*D-T*C+L*_;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/H;return e[0]=(a*$-c*V+l*O)*j,e[1]=(i*V-n*$-r*O)*j,e[2]=(v*L-g*T+m*b)*j,e[3]=(h*T-d*L-f*b)*j,e[4]=(c*D-o*$-l*C)*j,e[5]=(t*$-i*D+r*C)*j,e[6]=(g*x-p*L-m*R)*j,e[7]=(u*L-h*x+f*R)*j,e[8]=(o*V-a*D+l*_)*j,e[9]=(n*D-t*V-r*_)*j,e[10]=(p*T-v*x+m*w)*j,e[11]=(d*x-u*T-f*w)*j,e[12]=(a*C-o*O-c*_)*j,e[13]=(t*O-n*C+i*_)*j,e[14]=(v*R-p*b-g*w)*j,e[15]=(u*b-d*R+h*w)*j,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,p=r*d,v=o*u,g=o*d,m=a*d,w=c*l,R=c*u,x=c*d,b=n.x,T=n.y,L=n.z;return i[0]=(1-(v+m))*b,i[1]=(f+x)*b,i[2]=(p-R)*b,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(h+m))*T,i[6]=(g+w)*T,i[7]=0,i[8]=(p+R)*L,i[9]=(g-w)*L,i[10]=(1-(h+v))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Nr.set(i[0],i[1],i[2]).length();const a=Nr.set(i[4],i[5],i[6]).length(),c=Nr.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Wi.copy(this);const l=1/o,u=1/a,d=1/c;return Wi.elements[0]*=l,Wi.elements[1]*=l,Wi.elements[2]*=l,Wi.elements[4]*=u,Wi.elements[5]*=u,Wi.elements[6]*=u,Wi.elements[8]*=d,Wi.elements[9]*=d,Wi.elements[10]*=d,t.setFromRotationMatrix(Wi),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,r,o,a=cs,c=!1){const l=this.elements,u=2*r/(t-e),d=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let p,v;if(c)p=r/(o-r),v=o*r/(o-r);else if(a===cs)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===Qo)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=cs,c=!1){const l=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let p,v;if(c)p=1/(o-r),v=o/(o-r);else if(a===cs)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===Qo)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Nr=new B,Wi=new Ft,xg=new B(0,0,0),_g=new B(1,1,1),Bs=new B,Ra=new B,bi=new B,dd=new Ft,fd=new Wn;class ps{constructor(e=0,t=0,n=0,i=ps.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fd.setFromEuler(this),this.setFromQuaternion(fd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ps.DEFAULT_ORDER="XYZ";class gp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vg=0;const pd=new B,Dr=new Wn,Ss=new Ft,Ca=new B,bo=new B,yg=new B,Mg=new Wn,md=new B(1,0,0),gd=new B(0,1,0),xd=new B(0,0,1),_d={type:"added"},Sg={type:"removed"},Ur={type:"childadded",child:null},ll={type:"childremoved",child:null};class An extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new B,t=new ps,n=new Wn,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Ot}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(md,e)}rotateY(e){return this.rotateOnAxis(gd,e)}rotateZ(e){return this.rotateOnAxis(xd,e)}translateOnAxis(e,t){return pd.copy(e).applyQuaternion(this.quaternion),this.position.add(pd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(md,e)}translateY(e){return this.translateOnAxis(gd,e)}translateZ(e){return this.translateOnAxis(xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ss.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ss.lookAt(bo,Ca,this.up):Ss.lookAt(Ca,bo,this.up),this.quaternion.setFromRotationMatrix(Ss),i&&(Ss.extractRotation(i.matrixWorld),Dr.setFromRotationMatrix(Ss),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_d),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sg),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ss.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ss.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ss),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_d),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,yg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,Mg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}An.DEFAULT_UP=new B(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let Pn=class extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}};const bg={type:"move"};class ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(l,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,p=.005;l.inputState.pinching&&h>f+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zs={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function hl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class nt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Kt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Kt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Kt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Kt.workingColorSpace){if(e=nh(e,1),t=qt(t,0,1),n=qt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=hl(o,r,e+1/3),this.g=hl(o,r,e),this.b=hl(o,r,e-1/3)}return Kt.colorSpaceToWorking(this,i),this}setStyle(e,t=In){function n(r){r!==void 0&&parseFloat(r)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const n=xp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Kt.workingToColorSpace(ui.copy(this),e),Math.round(qt(ui.r*255,0,255))*65536+Math.round(qt(ui.g*255,0,255))*256+Math.round(qt(ui.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Kt.workingColorSpace){Kt.workingToColorSpace(ui.copy(this),t);const n=ui.r,i=ui.g,r=ui.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Kt.workingColorSpace){return Kt.workingToColorSpace(ui.copy(this),t),e.r=ui.r,e.g=ui.g,e.b=ui.b,e}getStyle(e=In){Kt.workingToColorSpace(ui.copy(this),e);const t=ui.r,n=ui.g,i=ui.b;return e!==In?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(zs),this.setHSL(zs.h+e,zs.s+t,zs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zs),e.getHSL(Pa);const n=Wo(zs.h,Pa.h,t),i=Wo(zs.s,Pa.s,t),r=Wo(zs.l,Pa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ui=new nt;nt.NAMES=xp;class sh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new nt(e),this.near=t,this.far=n}clone(){return new sh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class vd extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ps,this.environmentIntensity=1,this.environmentRotation=new ps,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xi=new B,bs=new B,dl=new B,ws=new B,Fr=new B,Or=new B,yd=new B,fl=new B,pl=new B,ml=new B,gl=new yn,xl=new yn,_l=new yn;class ji{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xi.subVectors(e,t),i.cross(Xi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Xi.subVectors(i,t),bs.subVectors(n,t),dl.subVectors(e,t);const o=Xi.dot(Xi),a=Xi.dot(bs),c=Xi.dot(dl),l=bs.dot(bs),u=bs.dot(dl),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,p=(o*u-a*c)*h;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ws)===null?!1:ws.x>=0&&ws.y>=0&&ws.x+ws.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,ws)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ws.x),c.addScaledVector(o,ws.y),c.addScaledVector(a,ws.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return gl.setScalar(0),xl.setScalar(0),_l.setScalar(0),gl.fromBufferAttribute(e,t),xl.fromBufferAttribute(e,n),_l.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(gl,r.x),o.addScaledVector(xl,r.y),o.addScaledVector(_l,r.z),o}static isFrontFacing(e,t,n,i){return Xi.subVectors(n,t),bs.subVectors(e,t),Xi.cross(bs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),bs.subVectors(this.a,this.b),Xi.cross(bs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ji.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return ji.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Fr.subVectors(i,n),Or.subVectors(r,n),fl.subVectors(e,n);const c=Fr.dot(fl),l=Or.dot(fl);if(c<=0&&l<=0)return t.copy(n);pl.subVectors(e,i);const u=Fr.dot(pl),d=Or.dot(pl);if(u>=0&&d<=u)return t.copy(i);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Fr,o);ml.subVectors(e,r);const f=Fr.dot(ml),p=Or.dot(ml);if(p>=0&&f<=p)return t.copy(r);const v=f*l-c*p;if(v<=0&&l>=0&&p<=0)return a=l/(l-p),t.copy(n).addScaledVector(Or,a);const g=u*p-f*d;if(g<=0&&d-u>=0&&f-p>=0)return yd.subVectors(r,i),a=(d-u)/(d-u+(f-p)),t.copy(i).addScaledVector(yd,a);const m=1/(g+v+h);return o=v*m,a=h*m,t.copy(n).addScaledVector(Fr,o).addScaledVector(Or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Fi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qi):qi.fromBufferAttribute(r,o),qi.applyMatrix4(e.matrixWorld),this.expandByPoint(qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),La.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),La.copy(n.boundingBox)),La.applyMatrix4(e.matrixWorld),this.union(La)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qi),qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),Ia.subVectors(this.max,wo),Br.subVectors(e.a,wo),zr.subVectors(e.b,wo),kr.subVectors(e.c,wo),ks.subVectors(zr,Br),Hs.subVectors(kr,zr),or.subVectors(Br,kr);let t=[0,-ks.z,ks.y,0,-Hs.z,Hs.y,0,-or.z,or.y,ks.z,0,-ks.x,Hs.z,0,-Hs.x,or.z,0,-or.x,-ks.y,ks.x,0,-Hs.y,Hs.x,0,-or.y,or.x,0];return!vl(t,Br,zr,kr,Ia)||(t=[1,0,0,0,1,0,0,0,1],!vl(t,Br,zr,kr,Ia))?!1:(Na.crossVectors(ks,Hs),t=[Na.x,Na.y,Na.z],vl(t,Br,zr,kr,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ts=[new B,new B,new B,new B,new B,new B,new B,new B],qi=new B,La=new Fi,Br=new B,zr=new B,kr=new B,ks=new B,Hs=new B,or=new B,wo=new B,Ia=new B,Na=new B,ar=new B;function vl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ar.fromArray(s,r);const a=i.x*Math.abs(ar.x)+i.y*Math.abs(ar.y)+i.z*Math.abs(ar.z),c=e.dot(ar),l=t.dot(ar),u=n.dot(ar);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Gn=new B,Da=new Ge;let wg=0;class En extends br{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fp,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix3(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyMatrix4(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.applyNormalMatrix(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gn.fromBufferAttribute(this,t),Gn.transformDirection(e),this.setXYZ(t,Gn.x,Gn.y,Gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class _p extends En{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vp extends En{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Qt extends En{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Tg=new Fi,To=new B,yl=new B;class ms{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const t=To.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(To,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(yl)),this.expandByPoint(To.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Eg=0;const Pi=new Ft,Ml=new An,Hr=new B,wi=new Fi,Eo=new Fi,ti=new B;class vn extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G0(e)?vp:_p)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,n){return Pi.makeTranslation(e,t,n),this.applyMatrix4(Pi),this}scale(e,t,n){return Pi.makeScale(e,t,n),this.applyMatrix4(Pi),this}lookAt(e){return Ml.lookAt(e),Ml.updateMatrix(),this.applyMatrix4(Ml.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Qt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];wi.setFromBufferAttribute(r),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(wi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Eo.setFromBufferAttribute(a),this.morphTargetsRelative?(ti.addVectors(wi.min,Eo.min),wi.expandByPoint(ti),ti.addVectors(wi.max,Eo.max),wi.expandByPoint(ti)):(wi.expandByPoint(Eo.min),wi.expandByPoint(Eo.max))}wi.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)ti.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ti));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ti.fromBufferAttribute(a,l),c&&(Hr.fromBufferAttribute(e,l),ti.add(Hr)),i=Math.max(i,n.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new En(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new B,c[_]=new B;const l=new B,u=new B,d=new B,h=new Ge,f=new Ge,p=new Ge,v=new B,g=new B;function m(_,C,D){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,D),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,D),u.sub(l),d.sub(l),f.sub(h),p.sub(h);const O=1/(f.x*p.y-p.x*f.y);isFinite(O)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(O),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(O),a[_].add(v),a[C].add(v),a[D].add(v),c[_].add(g),c[C].add(g),c[D].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let _=0,C=w.length;_<C;++_){const D=w[_],O=D.start,V=D.count;for(let $=O,H=O+V;$<H;$+=3)m(e.getX($+0),e.getX($+1),e.getX($+2))}const R=new B,x=new B,b=new B,T=new B;function L(_){b.fromBufferAttribute(i,_),T.copy(b);const C=a[_];R.copy(C),R.sub(b.multiplyScalar(b.dot(C))).normalize(),x.crossVectors(T,C);const O=x.dot(c[_])<0?-1:1;o.setXYZW(_,R.x,R.y,R.z,O)}for(let _=0,C=w.length;_<C;++_){const D=w[_],O=D.start,V=D.count;for(let $=O,H=O+V;$<H;$+=3)L(e.getX($+0)),L(e.getX($+1)),L(e.getX($+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new B,r=new B,o=new B,a=new B,c=new B,l=new B,u=new B,d=new B;if(e)for(let h=0,f=e.count;h<f;h+=3){const p=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),a.fromBufferAttribute(n,p),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),d.subVectors(i,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ti.fromBufferAttribute(e,t),ti.normalize(),e.setXYZ(t,ti.x,ti.y,ti.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,p=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*u;for(let m=0;m<u;m++)h[p++]=l[f++]}return new En(h,u,d)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=fp,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const hi=new B;class Rc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.applyMatrix4(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.applyNormalMatrix(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hi.fromBufferAttribute(this,t),hi.transformDirection(e),this.setXYZ(t,hi.x,hi.y,hi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xn(t,this.array),n=xn(n,this.array),i=xn(i,this.array),r=xn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Sc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new En(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Sc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Sl=new B,Ag=new B,Rg=new Ot;class Ws{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sl.subVectors(n,t).cross(Ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Sl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rg.getNormalMatrix(e),i=this.coplanarPoint(Sl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Cg=0;class hs extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Vo,this.side=$s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jf,this.blendDst=$f,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ko,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sl,this.stencilZFail=sl,this.stencilZPass=sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new nt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ws().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ge().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ge().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Es=new B,bl=new B,Ua=new B,Fa=new B;class Cc{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Es)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Es.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Es.copy(this.origin).addScaledVector(this.direction,t),Es.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){bl.copy(e).add(t).multiplyScalar(.5),Ua.copy(t).sub(e).normalize(),Fa.copy(this.origin).sub(bl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ua),a=Fa.dot(this.direction),c=-Fa.dot(Ua),l=Fa.lengthSq(),u=Math.abs(1-o*o);let d,h,f,p;if(u>0)if(d=o*c-a,h=o*a-c,p=r*u,d>=0)if(h>=-p)if(h<=p){const v=1/u;d*=v,h*=v,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-p?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=p?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(bl).addScaledVector(Ua,h),f}intersectSphere(e,t){if(e.radius<0)return null;Es.subVectors(e.center,this.origin);const n=Es.dot(this.direction),i=Es.dot(Es)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Es)!==null}intersectTriangle(e,t,n,i,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,d=e.x-o.x,h=e.y-o.y,f=e.z-o.z,p=t.x-o.x,v=t.y-o.y,g=t.z-o.z,m=n.x-o.x,w=n.y-o.y,R=n.z-o.z,x=Math.abs(c),b=Math.abs(l),T=Math.abs(u);let L,_,C,D,O,V,$,H,j,ie,ne,we;if(x>=b&&x>=T?(C=c,V=d,j=p,we=m,c>=0?(L=l,_=u,D=h,O=f,$=v,H=g,ie=w,ne=R):(L=u,_=l,D=f,O=h,$=g,H=v,ie=R,ne=w)):b>=T?(C=l,V=h,j=v,we=w,l>=0?(L=u,_=c,D=f,O=d,$=g,H=p,ie=R,ne=m):(L=c,_=u,D=d,O=f,$=p,H=g,ie=m,ne=R)):(C=u,V=f,j=g,we=R,u>=0?(L=c,_=l,D=d,O=h,$=p,H=v,ie=m,ne=w):(L=l,_=c,D=h,O=d,$=v,H=p,ie=w,ne=m)),C===0)return null;const re=L/C,le=_/C,ye=1/C,Qe=D-re*V,$e=O-le*V,At=$-re*j,Tt=H-le*j,Bt=ie-re*we,oe=ne-le*we,_e=Bt*Tt-oe*At,We=Qe*oe-$e*Bt,lt=At*$e-Tt*Qe;if(i){if(_e<0||We<0||lt<0)return null}else if((_e<0||We<0||lt<0)&&(_e>0||We>0||lt>0))return null;const qe=_e+We+lt;if(qe===0)return null;const xt=ye*(_e*V+We*j+lt*we);return(qe>0?xt<0:xt>0)?null:this.at(xt/qe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yi extends hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.combine=Zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Md=new Ft,cr=new Cc,Oa=new ms,Sd=new B,Ba=new B,za=new B,ka=new B,wl=new B,Ha=new B,bd=new B,Va=new B;class It extends An{constructor(e=new vn,t=new yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Ha.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&(wl.fromBufferAttribute(d,e),o?Ha.addScaledVector(wl,u):Ha.addScaledVector(wl.sub(t),u))}t.add(Ha)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(r),cr.copy(e.ray).recast(e.near),!(Oa.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Oa,Sd)===null||cr.origin.distanceToSquared(Sd)>(e.far-e.near)**2))&&(Md.copy(r).invert(),cr.copy(e.ray).applyMatrix4(Md),!(n.boundingBox!==null&&cr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=o[g.materialIndex],w=Math.max(g.start,f.start),R=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=w,b=R;x<b;x+=3){const T=a.getX(x),L=a.getX(x+1),_=a.getX(x+2);i=Ga(this,m,e,n,l,u,d,T,L,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const w=a.getX(g),R=a.getX(g+1),x=a.getX(g+2);i=Ga(this,o,e,n,l,u,d,w,R,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=o[g.materialIndex],w=Math.max(g.start,f.start),R=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=w,b=R;x<b;x+=3){const T=x,L=x+1,_=x+2;i=Ga(this,m,e,n,l,u,d,T,L,_),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const w=g,R=g+1,x=g+2;i=Ga(this,o,e,n,l,u,d,w,R,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function Pg(s,e,t,n,i,r,o,a){let c;if(e.side===pi?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===$s,a),c===null)return null;Va.copy(a),Va.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Va);return l<t.near||l>t.far?null:{distance:l,point:Va.clone(),object:s}}function Ga(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Ba),s.getVertexPosition(c,za),s.getVertexPosition(l,ka);const u=Pg(s,e,t,n,Ba,za,ka,bd);if(u){const d=new B;ji.getBarycoord(bd,Ba,za,ka,d),i&&(u.uv=ji.getInterpolatedAttribute(i,a,c,l,d,new Ge)),r&&(u.uv1=ji.getInterpolatedAttribute(r,a,c,l,d,new Ge)),o&&(u.normal=ji.getInterpolatedAttribute(o,a,c,l,d,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new B,materialIndex:0};ji.getNormal(Ba,za,ka,h.normal),u.face=h,u.barycoord=d}return u}const Ao=new yn,wd=new yn,Td=new yn,Lg=new yn,Ed=new Ft,Wa=new B,Tl=new ms,Ad=new Ft,El=new Cc;class Ig extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=td,this.bindMatrix=new Ft,this.bindMatrixInverse=new Ft,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wa),this.boundingBox.expandByPoint(Wa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ms),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Wa),this.boundingSphere.expandByPoint(Wa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(i),e.ray.intersectsSphere(Tl)!==!1&&(Ad.copy(i).invert(),El.copy(e.ray).applyMatrix4(Ad),!(this.boundingBox!==null&&El.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,El)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new yn,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===td?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===L0?this.bindMatrixInverse.copy(this.bindMatrix).invert():vt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;wd.fromBufferAttribute(i.attributes.skinIndex,e),Td.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Ao.copy(t),t.set(0,0,0,0)):(Ao.set(...t,1),t.set(0,0,0)),Ao.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=Td.getComponent(r);if(o!==0){const a=wd.getComponent(r);Ed.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Lg.copy(Ao).applyMatrix4(Ed),o)}}return t.isVector4&&(t.w=Ao.w),t.applyMatrix4(this.bindMatrixInverse)}}class Mp extends An{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rh extends Zn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=jn,u=jn,d,h){super(null,o,a,c,l,u,i,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rd=new Ft,Ng=new Ft;class oh{constructor(e=[],t=[]){this.uuid=Ui(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){vt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ft)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ft;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Ng;Rd.multiplyMatrices(a,t[r]),Rd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new oh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new rh(t,e,e,Di,Ni);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(vt("Skeleton: No bone found with UUID:",r),o=new Mp),this.bones.push(o),this.boneInverses.push(new Ft().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class ta extends En{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vr=new Ft,Cd=new Ft,Xa=[],Pd=new Fi,Dg=new Ft,Ro=new It,Co=new ms;class xr extends It{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ta(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),Pd.copy(e.boundingBox).applyMatrix4(Vr),this.boundingBox.union(Pd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ms),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),Co.copy(e.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(Co)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ro.geometry=this.geometry,Ro.material=this.material,Ro.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(n),e.ray.intersectsSphere(Co)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Vr),Cd.multiplyMatrices(n,Vr),Ro.matrixWorld=Cd,Ro.raycast(e,Xa);for(let o=0,a=Xa.length;o<a;o++){const c=Xa[o];c.instanceId=r,c.object=this,t.push(c)}Xa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ta(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new rh(new Float32Array(i*this.count),i,this.count,$u,Ni));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const lr=new ms,Ug=new Ge(.5,.5),qa=new B;class ah{constructor(e=new Ws,t=new Ws,n=new Ws,i=new Ws,r=new Ws,o=new Ws){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cs,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],p=r[8],v=r[9],g=r[10],m=r[11],w=r[12],R=r[13],x=r[14],b=r[15];if(i[0].setComponents(l-o,f-u,m-p,b-w).normalize(),i[1].setComponents(l+o,f+u,m+p,b+w).normalize(),i[2].setComponents(l+a,f+d,m+v,b+R).normalize(),i[3].setComponents(l-a,f-d,m-v,b-R).normalize(),n)i[4].setComponents(c,h,g,x).normalize(),i[5].setComponents(l-c,f-h,m-g,b-x).normalize();else if(i[4].setComponents(l-c,f-h,m-g,b-x).normalize(),t===cs)i[5].setComponents(l+c,f+h,m+g,b+x).normalize();else if(t===Qo)i[5].setComponents(c,h,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){lr.center.set(0,0,0);const t=Ug.distanceTo(e.center);return lr.radius=.7071067811865476+t,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qa.x=i.normal.x>0?e.max.x:e.min.x,qa.y=i.normal.y>0?e.max.y:e.min.y,qa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ch extends hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bc=new B,wc=new B,Ld=new Ft,Po=new Cc,Ya=new ms,Al=new B,Id=new B;class lh extends An{constructor(e=new vn,t=new ch){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)bc.fromBufferAttribute(t,i-1),wc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=bc.distanceTo(wc);e.setAttribute("lineDistance",new Qt(n,1))}else vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ya.copy(n.boundingSphere),Ya.applyMatrix4(i),Ya.radius+=r,e.ray.intersectsSphere(Ya)===!1)return;Ld.copy(i).invert(),Po.copy(e.ray).applyMatrix4(Ld);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=l){const m=u.getX(v),w=u.getX(v+1),R=Ka(this,e,Po,c,m,w,v);R&&t.push(R)}if(this.isLineLoop){const v=u.getX(p-1),g=u.getX(f),m=Ka(this,e,Po,c,v,g,p-1);m&&t.push(m)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,g=p-1;v<g;v+=l){const m=Ka(this,e,Po,c,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=Ka(this,e,Po,c,p-1,f,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ka(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(bc.fromBufferAttribute(a,i),wc.fromBufferAttribute(a,r),t.distanceSqToSegment(bc,wc,Al,Id)>n)return;Al.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Al);if(!(l<e.near||l>e.far))return{distance:l,point:Id.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Nd=new B,Dd=new B;class Sp extends lh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Nd.fromBufferAttribute(t,i),Dd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Nd.distanceTo(Dd);e.setAttribute("lineDistance",new Qt(n,1))}else vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fg extends lh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class bp extends hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ud=new Ft,Pu=new Cc,ja=new ms,$a=new B;class wp extends An{constructor(e=new vn,t=new bp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ja.copy(n.boundingSphere),ja.applyMatrix4(i),ja.radius+=r,e.ray.intersectsSphere(ja)===!1)return;Ud.copy(i).invert(),Pu.copy(e.ray).applyMatrix4(Ud);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let p=h,v=f;p<v;p++){const g=l.getX(p);$a.fromBufferAttribute(d,g),Fd($a,g,c,i,e,t,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=h,v=f;p<v;p++)$a.fromBufferAttribute(d,p),Fd($a,p,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fd(s,e,t,n,i,r,o){const a=Pu.distanceSqToPoint(s);if(a<t){const c=new B;Pu.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Tp extends Zn{constructor(e=[],t=yr,n,i,r,o,a,c,l,u){super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lu extends Zn{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class na extends Zn{constructor(e,t,n=ds,i,r,o,a=jn,c=jn,l,u=Is,d=1){if(u!==Is&&u!==gr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ih(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Og extends na{constructor(e,t=ds,n=yr,i,r,o=jn,a=jn,c,l=Is){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ep extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ai extends vn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,i,o,2),p("x","z","y",1,-1,e,n,-t,i,o,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2));function p(v,g,m,w,R,x,b,T,L,_,C){const D=x/L,O=b/_,V=x/2,$=b/2,H=T/2,j=L+1,ie=_+1;let ne=0,we=0;const re=new B;for(let le=0;le<ie;le++){const ye=le*O-$;for(let Qe=0;Qe<j;Qe++){const $e=Qe*D-V;re[v]=$e*w,re[g]=ye*R,re[m]=H,l.push(re.x,re.y,re.z),re[v]=0,re[g]=0,re[m]=T>0?1:-1,u.push(re.x,re.y,re.z),d.push(Qe/L),d.push(1-le/_),ne+=1}}for(let le=0;le<_;le++)for(let ye=0;ye<L;ye++){const Qe=h+ye+j*le,$e=h+ye+j*(le+1),At=h+(ye+1)+j*(le+1),Tt=h+(ye+1)+j*le;c.push(Qe,$e,Tt),c.push($e,At,Tt),we+=6}a.addGroup(f,we,C),f+=we,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pc extends vn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new B,u=new Ge;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(a,3)),this.setAttribute("uv",new Qt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vi extends vn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],h=[],f=[];let p=0;const v=[],g=n/2;let m=0;w(),o===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(h,3)),this.setAttribute("uv",new Qt(f,2));function w(){const x=new B,b=new B;let T=0;const L=(t-e)/n;for(let _=0;_<=r;_++){const C=[],D=_/r,O=D*(t-e)+e;for(let V=0;V<=i;V++){const $=V/i,H=$*c+a,j=Math.sin(H),ie=Math.cos(H);b.x=O*j,b.y=-D*n+g,b.z=O*ie,d.push(b.x,b.y,b.z),x.set(j,L,ie).normalize(),h.push(x.x,x.y,x.z),f.push($,1-D),C.push(p++)}v.push(C)}for(let _=0;_<i;_++)for(let C=0;C<r;C++){const D=v[C][_],O=v[C+1][_],V=v[C+1][_+1],$=v[C][_+1];(e>0||C!==0)&&(u.push(D,O,$),T+=3),(t>0||C!==r-1)&&(u.push(O,V,$),T+=3)}l.addGroup(m,T,0),m+=T}function R(x){const b=p,T=new Ge,L=new B;let _=0;const C=x===!0?e:t,D=x===!0?1:-1;for(let V=1;V<=i;V++)d.push(0,g*D,0),h.push(0,D,0),f.push(.5,.5),p++;const O=p;for(let V=0;V<=i;V++){const H=V/i*c+a,j=Math.cos(H),ie=Math.sin(H);L.x=C*ie,L.y=g*D,L.z=C*j,d.push(L.x,L.y,L.z),h.push(0,D,0),T.x=j*.5+.5,T.y=ie*.5*D+.5,f.push(T.x,T.y),p++}for(let V=0;V<i;V++){const $=b+V,H=O+V;x===!0?u.push(H,H+1,$):u.push(H+1,H,$),_+=3}l.addGroup(m,_,x===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ia extends vi{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ia(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uh extends vn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new Qt(r,3)),this.setAttribute("normal",new Qt(r.slice(),3)),this.setAttribute("uv",new Qt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const R=new B,x=new B,b=new B;for(let T=0;T<t.length;T+=3)f(t[T+0],R),f(t[T+1],x),f(t[T+2],b),c(R,x,b,w)}function c(w,R,x,b){const T=b+1,L=[];for(let _=0;_<=T;_++){L[_]=[];const C=w.clone().lerp(x,_/T),D=R.clone().lerp(x,_/T),O=T-_;for(let V=0;V<=O;V++)V===0&&_===T?L[_][V]=C:L[_][V]=C.clone().lerp(D,V/O)}for(let _=0;_<T;_++)for(let C=0;C<2*(T-_)-1;C++){const D=Math.floor(C/2);C%2===0?(h(L[_][D+1]),h(L[_+1][D]),h(L[_][D])):(h(L[_][D+1]),h(L[_+1][D+1]),h(L[_+1][D]))}}function l(w){const R=new B;for(let x=0;x<r.length;x+=3)R.x=r[x+0],R.y=r[x+1],R.z=r[x+2],R.normalize().multiplyScalar(w),r[x+0]=R.x,r[x+1]=R.y,r[x+2]=R.z}function u(){const w=new B;for(let R=0;R<r.length;R+=3){w.x=r[R+0],w.y=r[R+1],w.z=r[R+2];const x=g(w)/2/Math.PI+.5,b=m(w)/Math.PI+.5;o.push(x,1-b)}p(),d()}function d(){for(let w=0;w<o.length;w+=6){const R=o[w+0],x=o[w+2],b=o[w+4],T=Math.max(R,x,b),L=Math.min(R,x,b);T>.9&&L<.1&&(R<.2&&(o[w+0]+=1),x<.2&&(o[w+2]+=1),b<.2&&(o[w+4]+=1))}}function h(w){r.push(w.x,w.y,w.z)}function f(w,R){const x=w*3;R.x=e[x+0],R.y=e[x+1],R.z=e[x+2]}function p(){const w=new B,R=new B,x=new B,b=new B,T=new Ge,L=new Ge,_=new Ge;for(let C=0,D=0;C<r.length;C+=9,D+=6){w.set(r[C+0],r[C+1],r[C+2]),R.set(r[C+3],r[C+4],r[C+5]),x.set(r[C+6],r[C+7],r[C+8]),T.set(o[D+0],o[D+1]),L.set(o[D+2],o[D+3]),_.set(o[D+4],o[D+5]),b.copy(w).add(R).add(x).divideScalar(3);const O=g(b);v(T,D+0,w,O),v(L,D+2,R,O),v(_,D+4,x,O)}}function v(w,R,x,b){b<0&&w.x===1&&(o[R]=w.x-1),x.x===0&&x.z===0&&(o[R]=b/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uh(e.vertices,e.indices,e.radius,e.detail)}}class gs{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){vt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new Ge:new B);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new B,i=[],r=[],o=[],a=new B,c=new Ft;for(let f=0;f<=e;f++){const p=f/e;i[f]=this.getTangentAt(p,new B)}r[0]=new B,o[0]=new B;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(qt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(qt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hh extends gs{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ge){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Bg extends hh{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function dh(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,d){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+d)+(c-a)/d;h*=u,f*=u,i(o,a,h,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Od=new B,Bd=new B,Rl=new dh,Cl=new dh,Pl=new dh;class Ap extends gs{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new B){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(Bd.subVectors(i[0],i[1]).add(i[0]),l=Bd);const d=i[a%r],h=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Od.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Od),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(l.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),Rl.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,p,v,g),Cl.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,p,v,g),Pl.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(Rl.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Cl.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Pl.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return n.set(Rl.calc(c),Cl.calc(c),Pl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new B().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function zd(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function zg(s,e){const t=1-s;return t*t*e}function kg(s,e){return 2*(1-s)*s*e}function Hg(s,e){return s*s*e}function Xo(s,e,t,n){return zg(s,e)+kg(s,t)+Hg(s,n)}function Vg(s,e){const t=1-s;return t*t*t*e}function Gg(s,e){const t=1-s;return 3*t*t*s*e}function Wg(s,e){return 3*(1-s)*s*s*e}function Xg(s,e){return s*s*s*e}function qo(s,e,t,n,i){return Vg(s,e)+Gg(s,t)+Wg(s,n)+Xg(s,i)}class Rp extends gs{constructor(e=new Ge,t=new Ge,n=new Ge,i=new Ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ge){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qo(e,i.x,r.x,o.x,a.x),qo(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qg extends gs{constructor(e=new B,t=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new B){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(qo(e,i.x,r.x,o.x,a.x),qo(e,i.y,r.y,o.y,a.y),qo(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cp extends gs{constructor(e=new Ge,t=new Ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ge){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yg extends gs{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pp extends gs{constructor(e=new Ge,t=new Ge,n=new Ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ge){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Xo(e,i.x,r.x,o.x),Xo(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kg extends gs{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Xo(e,i.x,r.x,o.x),Xo(e,i.y,r.y,o.y),Xo(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lp extends gs{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ge){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(zd(a,c.x,l.x,u.x,d.x),zd(a,c.y,l.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ge().fromArray(i))}return this}}var Iu=Object.freeze({__proto__:null,ArcCurve:Bg,CatmullRomCurve3:Ap,CubicBezierCurve:Rp,CubicBezierCurve3:qg,EllipseCurve:hh,LineCurve:Cp,LineCurve3:Yg,QuadraticBezierCurve:Pp,QuadraticBezierCurve3:Kg,SplineCurve:Lp});class jg extends gs{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Iu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Iu[i.type]().fromJSON(i))}return this}}class kd extends jg{constructor(e){super(),this.type="Path",this.currentPoint=new Ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Cp(this.currentPoint.clone(),new Ge(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Pp(this.currentPoint.clone(),new Ge(e,t),new Ge(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Rp(this.currentPoint.clone(),new Ge(e,t),new Ge(n,i),new Ge(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Lp(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new hh(e,t,n,i,r,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ip extends kd{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new kd().fromJSON(i))}return this}}function $g(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Np(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=tx(s,e,r,t)),s.length>80*t){a=s[0],c=s[1];let u=a,d=c;for(let h=t;h<i;h+=t){const f=s[h],p=s[h+1];f<a&&(a=f),p<c&&(c=p),f>u&&(u=f),p>d&&(d=p)}l=Math.max(u-a,d-c),l=l!==0?32767/l:0}return sa(r,o,t,a,c,l,0),o}function Np(s,e,t,n,i){let r;if(i===dx(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Hd(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Hd(o/n|0,s[o],s[o+1],r);return r&&so(r,r.next)&&(oa(r),r=r.next),r}function Sr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(so(t,t.next)||Nn(t.prev,t,t.next)===0)){if(oa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function sa(s,e,t,n,i,r,o){if(!s)return;!o&&r&&ox(s,n,i,r);let a=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?Jg(s,n,i,r):Zg(s)){e.push(c.i,s.i,l.i),oa(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Qg(Sr(s),e),sa(s,e,t,n,i,r,2)):o===2&&ex(s,e,t,n,i,r):sa(Sr(s),e,t,n,i,r,1);break}}}function Zg(s){const e=s.prev,t=s,n=s.next;if(Nn(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(i,r,o),d=Math.min(a,c,l),h=Math.max(i,r,o),f=Math.max(a,c,l);let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=d&&p.y<=f&&zo(i,a,r,c,o,l,p.x,p.y)&&Nn(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Jg(s,e,t,n){const i=s.prev,r=s,o=s.next;if(Nn(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,u=i.y,d=r.y,h=o.y,f=Math.min(a,c,l),p=Math.min(u,d,h),v=Math.max(a,c,l),g=Math.max(u,d,h),m=Nu(f,p,e,t,n),w=Nu(v,g,e,t,n);let R=s.prevZ,x=s.nextZ;for(;R&&R.z>=m&&x&&x.z<=w;){if(R.x>=f&&R.x<=v&&R.y>=p&&R.y<=g&&R!==i&&R!==o&&zo(a,u,c,d,l,h,R.x,R.y)&&Nn(R.prev,R,R.next)>=0||(R=R.prevZ,x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&zo(a,u,c,d,l,h,x.x,x.y)&&Nn(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;R&&R.z>=m;){if(R.x>=f&&R.x<=v&&R.y>=p&&R.y<=g&&R!==i&&R!==o&&zo(a,u,c,d,l,h,R.x,R.y)&&Nn(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;x&&x.z<=w;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&zo(a,u,c,d,l,h,x.x,x.y)&&Nn(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Qg(s,e){let t=s;do{const n=t.prev,i=t.next.next;!so(n,i)&&Up(n,t,t.next,i)&&ra(n,i)&&ra(i,n)&&(e.push(n.i,t.i,i.i),oa(t),oa(t.next),t=s=i),t=t.next}while(t!==s);return Sr(t)}function ex(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lx(o,a)){let c=Fp(o,a);o=Sr(o,o.next),c=Sr(c,c.next),sa(o,e,t,n,i,r,0),sa(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function tx(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Np(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(cx(l))}i.sort(nx);for(let r=0;r<i.length;r++)t=ix(i[r],t);return t}function nx(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function ix(s,e){const t=sx(s,e);if(!t)return e;const n=Fp(t,s);return Sr(n,n.next),Sr(t,t.next)}function sx(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(so(s,t))return t;do{if(so(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,o=t.x<t.next.x?t:t.next,d===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Dp(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);ra(t,s)&&(d<u||d===u&&(t.x>o.x||t.x===o.x&&rx(o,t)))&&(o=t,u=d)}t=t.next}while(t!==a);return o}function rx(s,e){return Nn(s.prev,s,e.prev)<0&&Nn(e.next,s,s.next)<0}function ox(s,e,t,n){let i=s;do i.z===0&&(i.z=Nu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ax(i)}function ax(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Nu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function cx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Dp(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function zo(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Dp(s,e,t,n,i,r,o,a)}function lx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ux(s,e)&&(ra(s,e)&&ra(e,s)&&hx(s,e)&&(Nn(s.prev,s,e.prev)||Nn(s,e.prev,e))||so(s,e)&&Nn(s.prev,s,s.next)>0&&Nn(e.prev,e,e.next)>0)}function Nn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function so(s,e){return s.x===e.x&&s.y===e.y}function Up(s,e,t,n){const i=Ja(Nn(s,e,t)),r=Ja(Nn(s,e,n)),o=Ja(Nn(t,n,s)),a=Ja(Nn(t,n,e));return!!(i!==r&&o!==a||i===0&&Za(s,t,e)||r===0&&Za(s,n,e)||o===0&&Za(t,s,n)||a===0&&Za(t,e,n))}function Za(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Ja(s){return s>0?1:s<0?-1:0}function ux(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Up(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ra(s,e){return Nn(s.prev,s,s.next)<0?Nn(s,e,s.next)>=0&&Nn(s,s.prev,e)>=0:Nn(s,e,s.prev)<0||Nn(s,s.next,e)<0}function hx(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Fp(s,e){const t=Du(s.i,s.x,s.y),n=Du(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Hd(s,e,t,n){const i=Du(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function oa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Du(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dx(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class fx{static triangulate(e,t,n=2){return $g(e,t,n)}}class $r{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return $r.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Vd(e),Gd(n,e);let o=e.length;t.forEach(Vd);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,Gd(n,t[c]);const a=fx.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Vd(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Gd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class fh extends vn{constructor(e=new Ip([new Ge(.5,.5),new Ge(-.5,.5),new Ge(-.5,-.5),new Ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new Qt(i,3)),this.setAttribute("uv",new Qt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:px;let R,x=!1,b,T,L,_;if(m){R=m.getSpacedPoints(u),x=!0,h=!1;const ve=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(u,ve),T=new B,L=new B,_=new B}h||(g=0,f=0,p=0,v=0);const C=a.extractPoints(l);let D=C.shape;const O=C.holes;if(!$r.isClockWise(D)){D=D.reverse();for(let ve=0,Ee=O.length;ve<Ee;ve++){const Re=O[ve];$r.isClockWise(Re)&&(O[ve]=Re.reverse())}}function $(ve){const Re=10000000000000001e-36;let Ce=ve[0];for(let Oe=1;Oe<=ve.length;Oe++){const mt=Oe%ve.length,at=ve[mt],yt=at.x-Ce.x,ee=at.y-Ce.y,N=yt*yt+ee*ee,ft=Math.max(Math.abs(at.x),Math.abs(at.y),Math.abs(Ce.x),Math.abs(Ce.y)),St=Re*ft*ft;if(N<=St){ve.splice(mt,1),Oe--;continue}Ce=at}}$(D),O.forEach($);const H=O.length,j=D;for(let ve=0;ve<H;ve++){const Ee=O[ve];D=D.concat(Ee)}function ie(ve,Ee,Re){return Ee||Dt("ExtrudeGeometry: vec does not exist"),ve.clone().addScaledVector(Ee,Re)}const ne=D.length;function we(ve,Ee,Re){let Ce,Oe,mt;const at=ve.x-Ee.x,yt=ve.y-Ee.y,ee=Re.x-ve.x,N=Re.y-ve.y,ft=at*at+yt*yt,St=at*N-yt*ee;if(Math.abs(St)>Number.EPSILON){const I=Math.sqrt(ft),y=Math.sqrt(ee*ee+N*N),X=Ee.x-yt/I,Q=Ee.y+at/I,ce=Re.x-N/y,Le=Re.y+ee/y,Be=((ce-X)*N-(Le-Q)*ee)/(at*N-yt*ee);Ce=X+at*Be-ve.x,Oe=Q+yt*Be-ve.y;const de=Ce*Ce+Oe*Oe;if(de<=2)return new Ge(Ce,Oe);mt=Math.sqrt(de/2)}else{let I=!1;at>Number.EPSILON?ee>Number.EPSILON&&(I=!0):at<-Number.EPSILON?ee<-Number.EPSILON&&(I=!0):Math.sign(yt)===Math.sign(N)&&(I=!0),I?(Ce=-yt,Oe=at,mt=Math.sqrt(ft)):(Ce=at,Oe=yt,mt=Math.sqrt(ft/2))}return new Ge(Ce/mt,Oe/mt)}const re=[];for(let ve=0,Ee=j.length,Re=Ee-1,Ce=ve+1;ve<Ee;ve++,Re++,Ce++)Re===Ee&&(Re=0),Ce===Ee&&(Ce=0),re[ve]=we(j[ve],j[Re],j[Ce]);const le=[];let ye,Qe=re.concat();for(let ve=0,Ee=H;ve<Ee;ve++){const Re=O[ve];ye=[];for(let Ce=0,Oe=Re.length,mt=Oe-1,at=Ce+1;Ce<Oe;Ce++,mt++,at++)mt===Oe&&(mt=0),at===Oe&&(at=0),ye[Ce]=we(Re[Ce],Re[mt],Re[at]);le.push(ye),Qe=Qe.concat(ye)}let $e;if(g===0)$e=$r.triangulateShape(j,O);else{const ve=[],Ee=[];for(let Re=0;Re<g;Re++){const Ce=Re/g,Oe=f*Math.cos(Ce*Math.PI/2),mt=p*Math.sin(Ce*Math.PI/2)+v;for(let at=0,yt=j.length;at<yt;at++){const ee=ie(j[at],re[at],mt);We(ee.x,ee.y,-Oe),Ce===0&&ve.push(ee)}for(let at=0,yt=H;at<yt;at++){const ee=O[at];ye=le[at];const N=[];for(let ft=0,St=ee.length;ft<St;ft++){const I=ie(ee[ft],ye[ft],mt);We(I.x,I.y,-Oe),Ce===0&&N.push(I)}Ce===0&&Ee.push(N)}}$e=$r.triangulateShape(ve,Ee)}const At=$e.length,Tt=p+v;for(let ve=0;ve<ne;ve++){const Ee=h?ie(D[ve],Qe[ve],Tt):D[ve];x?(L.copy(b.normals[0]).multiplyScalar(Ee.x),T.copy(b.binormals[0]).multiplyScalar(Ee.y),_.copy(R[0]).add(L).add(T),We(_.x,_.y,_.z)):We(Ee.x,Ee.y,0)}for(let ve=1;ve<=u;ve++)for(let Ee=0;Ee<ne;Ee++){const Re=h?ie(D[Ee],Qe[Ee],Tt):D[Ee];x?(L.copy(b.normals[ve]).multiplyScalar(Re.x),T.copy(b.binormals[ve]).multiplyScalar(Re.y),_.copy(R[ve]).add(L).add(T),We(_.x,_.y,_.z)):We(Re.x,Re.y,d/u*ve)}for(let ve=g-1;ve>=0;ve--){const Ee=ve/g,Re=f*Math.cos(Ee*Math.PI/2),Ce=p*Math.sin(Ee*Math.PI/2)+v;for(let Oe=0,mt=j.length;Oe<mt;Oe++){const at=ie(j[Oe],re[Oe],Ce);We(at.x,at.y,d+Re)}for(let Oe=0,mt=O.length;Oe<mt;Oe++){const at=O[Oe];ye=le[Oe];for(let yt=0,ee=at.length;yt<ee;yt++){const N=ie(at[yt],ye[yt],Ce);x?We(N.x,N.y+R[u-1].y,R[u-1].x+Re):We(N.x,N.y,d+Re)}}}Bt(),oe();function Bt(){const ve=i.length/3;if(h){let Ee=0,Re=ne*Ee;for(let Ce=0;Ce<At;Ce++){const Oe=$e[Ce];lt(Oe[2]+Re,Oe[1]+Re,Oe[0]+Re)}Ee=u+g*2,Re=ne*Ee;for(let Ce=0;Ce<At;Ce++){const Oe=$e[Ce];lt(Oe[0]+Re,Oe[1]+Re,Oe[2]+Re)}}else{for(let Ee=0;Ee<At;Ee++){const Re=$e[Ee];lt(Re[2],Re[1],Re[0])}for(let Ee=0;Ee<At;Ee++){const Re=$e[Ee];lt(Re[0]+ne*u,Re[1]+ne*u,Re[2]+ne*u)}}n.addGroup(ve,i.length/3-ve,0)}function oe(){const ve=i.length/3;let Ee=0;_e(j,Ee),Ee+=j.length;for(let Re=0,Ce=O.length;Re<Ce;Re++){const Oe=O[Re];_e(Oe,Ee),Ee+=Oe.length}n.addGroup(ve,i.length/3-ve,1)}function _e(ve,Ee){let Re=ve.length;for(;--Re>=0;){const Ce=Re;let Oe=Re-1;Oe<0&&(Oe=ve.length-1);for(let mt=0,at=u+g*2;mt<at;mt++){const yt=ne*mt,ee=ne*(mt+1),N=Ee+Ce+yt,ft=Ee+Oe+yt,St=Ee+Oe+ee,I=Ee+Ce+ee;qe(N,ft,St,I)}}}function We(ve,Ee,Re){c.push(ve),c.push(Ee),c.push(Re)}function lt(ve,Ee,Re){xt(ve),xt(Ee),xt(Re);const Ce=i.length/3,Oe=w.generateTopUV(n,i,Ce-3,Ce-2,Ce-1);Yt(Oe[0]),Yt(Oe[1]),Yt(Oe[2])}function qe(ve,Ee,Re,Ce){xt(ve),xt(Ee),xt(Ce),xt(Ee),xt(Re),xt(Ce);const Oe=i.length/3,mt=w.generateSideWallUV(n,i,Oe-6,Oe-3,Oe-2,Oe-1);Yt(mt[0]),Yt(mt[1]),Yt(mt[3]),Yt(mt[1]),Yt(mt[2]),Yt(mt[3])}function xt(ve){i.push(c[ve*3+0]),i.push(c[ve*3+1]),i.push(c[ve*3+2])}function Yt(ve){r.push(ve.x),r.push(ve.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return mx(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Iu[i.type]().fromJSON(i)),new fh(n,e.options)}}const px={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new Ge(r,o),new Ge(a,c),new Ge(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[i*3],f=e[i*3+1],p=e[i*3+2],v=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Ge(o,1-c),new Ge(l,1-d),new Ge(h,1-p),new Ge(v,1-m)]:[new Ge(a,1-c),new Ge(u,1-d),new Ge(f,1-p),new Ge(g,1-m)]}};function mx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Lc extends uh{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Lc(e.radius,e.detail)}}class ci extends vn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,d=e/a,h=t/c,f=[],p=[],v=[],g=[];for(let m=0;m<u;m++){const w=m*h-o;for(let R=0;R<l;R++){const x=R*d-r;p.push(x,-w,0),v.push(0,0,1),g.push(R/a),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<a;w++){const R=w+l*m,x=w+l*(m+1),b=w+1+l*(m+1),T=w+1+l*m;f.push(R,x,T),f.push(x,b,T)}this.setIndex(f),this.setAttribute("position",new Qt(p,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.width,e.height,e.widthSegments,e.heightSegments)}}class ph extends vn{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let d=e;const h=(t-e)/i,f=new B,p=new Ge;for(let v=0;v<=i;v++){for(let g=0;g<=n;g++){const m=r+g/n*o;f.x=d*Math.cos(m),f.y=d*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}d+=h}for(let v=0;v<i;v++){const g=v*(n+1);for(let m=0;m<n;m++){const w=m+g,R=w,x=w+n+1,b=w+n+2,T=w+1;a.push(R,x,T),a.push(x,b,T)}}this.setIndex(a),this.setAttribute("position",new Qt(c,3)),this.setAttribute("normal",new Qt(l,3)),this.setAttribute("uv",new Qt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Yo extends vn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new B,h=new B,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const w=[],R=m/n,x=o+R*a,b=e*Math.cos(x),T=Math.sqrt(e*e-b*b);let L=0;m===0&&o===0?L=.5/t:m===n&&c===Math.PI&&(L=-.5/t);for(let _=0;_<=t;_++){const C=_/t,D=i+C*r;d.x=-T*Math.cos(D),d.y=b,d.z=T*Math.sin(D),p.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),g.push(C+L,1-R),w.push(l++)}u.push(w)}for(let m=0;m<n;m++)for(let w=0;w<t;w++){const R=u[m][w+1],x=u[m][w],b=u[m+1][w],T=u[m+1][w+1];(m!==0||o>0)&&f.push(R,x,T),(m!==n-1||c<Math.PI)&&f.push(x,b,T)}this.setIndex(f),this.setAttribute("position",new Qt(p,3)),this.setAttribute("normal",new Qt(v,3)),this.setAttribute("uv",new Qt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ua extends vn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],u=[],d=[],h=new B,f=new B,p=new B;for(let v=0;v<=n;v++){const g=o+v/n*a;for(let m=0;m<=i;m++){const w=m/i*r;f.x=(e+t*Math.cos(g))*Math.cos(w),f.y=(e+t*Math.cos(g))*Math.sin(w),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),h.x=e*Math.cos(w),h.y=e*Math.sin(w),p.subVectors(f,h).normalize(),u.push(p.x,p.y,p.z),d.push(m/i),d.push(v/n)}}for(let v=1;v<=n;v++)for(let g=1;g<=i;g++){const m=(i+1)*v+g-1,w=(i+1)*(v-1)+g-1,R=(i+1)*(v-1)+g,x=(i+1)*v+g;c.push(m,w,x),c.push(w,R,x)}this.setIndex(c),this.setAttribute("position",new Qt(l,3)),this.setAttribute("normal",new Qt(u,3)),this.setAttribute("uv",new Qt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ro(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(Wd(i))i.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Wd(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function di(s){const e={};for(let t=0;t<s.length;t++){const n=ro(s[t]);for(const i in n)e[i]=n[i]}return e}function Wd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function gx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Op(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Kt.workingColorSpace}const xx={clone:ro,merge:di};var _x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_x,this.fragmentShader=vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=gx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new nt().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ge().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new yn().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ft().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class yx extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ct extends hs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cu,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ps,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Oi extends ct{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ge(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new nt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new nt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new nt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Mx extends hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sx extends hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Xs(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function pc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function bx(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Xd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function wx(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class oo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Tx extends oo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:id,endingEnd:id}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case sd:r=e,a=2*t-n;break;case rd:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sd:o=e,c=2*n-t;break;case rd:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,p=(n-t)/(i-t),v=p*p,g=v*p,m=-h*g+2*h*v-h*p,w=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*p+1,R=(-1-f)*g+(1.5+f)*v+.5*p,x=f*g-f*v;for(let b=0;b!==a;++b)r[b]=m*o[u+b]+w*o[l+b]+R*o[c+b]+x*o[d+b];return r}}class Ex extends oo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),d=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*d+o[c+h]*u;return r}}class Ax extends oo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rx extends oo{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,d=this.outTangents;if(!u||!d){const p=(n-t)/(i-t),v=1-p;for(let g=0;g!==a;++g)r[g]=o[l+g]*v+o[c+g]*p;return r}const h=a*2,f=e-1;for(let p=0;p!==a;++p){const v=o[l+p],g=o[c+p],m=f*h+p*2,w=d[m],R=d[m+1],x=e*h+p*2,b=u[x],T=u[x+1],L=Px(n,t,w,b,i);r[p]=Bp(L,v,R,T,g)}return r}}function Bp(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Cx(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Px(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){const a=Bp(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;const c=Cx(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}class Zi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xs(t,this.TimeBufferType),this.values=Xs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xs(e.times,Array),values:Xs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),pc(e.settings)&&(n.settings={inTangents:Xs(e.settings.inTangents,Array),outTangents:Xs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ax(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ex(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Rx(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Zo:t=this.InterpolantFactoryMethodDiscrete;break;case Jo:t=this.InterpolantFactoryMethodLinear;break;case il:t=this.InterpolantFactoryMethodSmooth;break;case nd:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return vt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zo;case this.InterpolantFactoryMethodLinear:return Jo;case this.InterpolantFactoryMethodSmooth:return il;case this.InterpolantFactoryMethodBezier:return nd}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;pc(this.settings)&&(qd(this.settings.inTangents,e),qd(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Dt("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Dt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){Dt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){Dt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&W0(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){Dt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===il,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const d=a*n,h=d-n,f=d+n;for(let p=0;p!==n;++p){const v=t[d+p];if(v!==t[h+p]||v!==t[f+p]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,pc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function qd(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Zi.prototype.ValueTypeName="";Zi.prototype.TimeBufferType=Float32Array;Zi.prototype.ValueBufferType=Float32Array;Zi.prototype.DefaultInterpolation=Jo;class ao extends Zi{constructor(e,t,n){super(e,t,n)}}ao.prototype.ValueTypeName="bool";ao.prototype.ValueBufferType=Array;ao.prototype.DefaultInterpolation=Zo;ao.prototype.InterpolantFactoryMethodLinear=void 0;ao.prototype.InterpolantFactoryMethodSmooth=void 0;class zp extends Zi{constructor(e,t,n,i){super(e,t,n,i)}}zp.prototype.ValueTypeName="color";class aa extends Zi{constructor(e,t,n,i){super(e,t,n,i)}}aa.prototype.ValueTypeName="number";class Lx extends oo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Wn.slerpFlat(r,0,o,l-a,o,l,c);return r}}class ca extends Zi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Lx(this.times,this.values,this.getValueSize(),e)}}ca.prototype.ValueTypeName="quaternion";ca.prototype.InterpolantFactoryMethodSmooth=void 0;class co extends Zi{constructor(e,t,n){super(e,t,n)}}co.prototype.ValueTypeName="string";co.prototype.ValueBufferType=Array;co.prototype.DefaultInterpolation=Zo;co.prototype.InterpolantFactoryMethodLinear=void 0;co.prototype.InterpolantFactoryMethodSmooth=void 0;class Tc extends Zi{constructor(e,t,n,i){super(e,t,n,i)}}Tc.prototype.ValueTypeName="vector";class Ix{constructor(e="",t=-1,n=[],i=I0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ui(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Dx(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Zi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=bx(c);c=Xd(c,1,u),l=Xd(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new aa(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const d=u[1];let h=i[d];h||(i[d]=h=[]),h.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Nx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return aa;case"vector":case"vector2":case"vector3":case"vector4":return Tc;case"color":return zp;case"quaternion":return ca;case"bool":case"boolean":return ao;case"string":return co}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Dx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Nx(s.type);if(s.times===void 0){const n=[],i=[];wx(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),pc(s.settings)&&(t.settings={inTangents:Xs(s.settings.inTangents,Float32Array),outTangents:Xs(s.settings.outTangents,Float32Array)}),t}const Cs={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Yd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Yd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Yd(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Ux{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],p=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Fx=new Ux;class wr{constructor(e){this.manager=e!==void 0?e:Fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}wr.DEFAULT_MATERIAL_NAME="__DEFAULT";const As={};class Ox extends Error{constructor(e,t){super(e),this.response=t}}class Ec extends wr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Cs.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(As[e]!==void 0){As[e].push({onLoad:t,onProgress:n,onError:i});return}As[e]=[],As[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&vt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=As[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,p=f!==0;let v=0;const g=new ReadableStream({start(m){w();function w(){d.read().then(({done:R,value:x})=>{if(R)m.close();else{v+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let T=0,L=u.length;T<L;T++){const _=u[T];_.onProgress&&_.onProgress(b)}m.enqueue(x),w()}},R=>{m.error(R)})}}});return new Response(g)}else throw new Ox(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(p=>f.decode(p))}}}).then(l=>{Cs.add(`file:${e}`,l);const u=As[e];delete As[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=As[e];if(u===void 0)throw this.manager.itemError(e),l;delete As[e];for(let d=0,h=u.length;d<h;d++){const f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Gr=new WeakMap;class Bx extends wr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Cs.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let d=Gr.get(o);d===void 0&&(d=[],Gr.set(o,d)),d.push({onLoad:t,onError:i})}return o}const a=ea("img");function c(){u(),t&&t(this);const d=Gr.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Gr.delete(this),r.manager.itemEnd(e)}function l(d){u(),i&&i(d),Cs.remove(`image:${e}`);const h=Gr.get(this)||[];for(let f=0;f<h.length;f++){const p=h[f];p.onError&&p.onError(d)}Gr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Cs.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class zx extends wr{constructor(e){super(e)}load(e,t,n,i){const r=new Zn,o=new Bx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Ic extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class kx extends Ic{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ll=new Ft,Kd=new B,jd=new B;class mh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.mapType=Ei,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ah,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new yn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kd),jd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Ll.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Ll,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===Qo||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Ll)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Qa=new B,ec=new Wn,ts=new B;class kp extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=cs,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Qa,ec,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,ec,ts.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Qa,ec,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Qa,ec,ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vs=new B,$d=new Ge,Zd=new Ge;class fi extends kp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return io*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vs.x,Vs.y).multiplyScalar(-e/Vs.z),Vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vs.x,Vs.y).multiplyScalar(-e/Vs.z)}getViewSize(e,t){return this.getViewBounds(e,$d,Zd),t.subVectors(Zd,$d)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Go*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Hx extends mh{constructor(){super(new fi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=io*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Uu extends Ic{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Hx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Vx extends mh{constructor(){super(new fi(90,1,.5,500)),this.isPointLightShadow=!0}}class mc extends Ic{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Nc extends kp{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gx extends mh{constructor(){super(new Nc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hp extends Ic{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.shadow=new Gx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class js{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Il=new WeakMap;class Wx extends wr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&vt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&vt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Cs.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Il.has(o)===!0?(i&&i(Il.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Cs.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Il.set(c,l),Cs.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Cs.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Wr=-90,Xr=1;class Xx extends An{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new fi(Wr,Xr,e,t);i.layers=this.layers,this.add(i);const r=new fi(Wr,Xr,e,t);r.layers=this.layers,this.add(r);const o=new fi(Wr,Xr,e,t);o.layers=this.layers,this.add(o);const a=new fi(Wr,Xr,e,t);a.layers=this.layers,this.add(a);const c=new fi(Wr,Xr,e,t);c.layers=this.layers,this.add(c);const l=new fi(Wr,Xr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===cs)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class qx extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const gh="\\[\\]\\.:\\/",Yx=new RegExp("["+gh+"]","g"),xh="[^"+gh+"]",Kx="[^"+gh.replace("\\.","")+"]",jx=/((?:WC+[\/:])*)/.source.replace("WC",xh),$x=/(WCOD+)?/.source.replace("WCOD",Kx),Zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xh),Jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xh),Qx=new RegExp("^"+jx+$x+Zx+Jx+"$"),e_=["material","materials","bones","map"];class t_{constructor(e,t,n){const i=n||_n.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class _n{constructor(e,t,n){this.path=t,this.parsedPath=n||_n.parseTrackName(t),this.node=_n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new _n.Composite(e,t,n):new _n(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yx,"")}static parseTrackName(e){const t=Qx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);e_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=_n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Dt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Dt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Dt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Dt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Dt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Dt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;Dt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Dt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}_n.Composite=t_;_n.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_n.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_n.prototype.GetterByBindingType=[_n.prototype._getValue_direct,_n.prototype._getValue_array,_n.prototype._getValue_arrayElement,_n.prototype._getValue_toArray];_n.prototype.SetterByBindingTypeAndVersioning=[[_n.prototype._setValue_direct,_n.prototype._setValue_direct_setNeedsUpdate,_n.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_array,_n.prototype._setValue_array_setNeedsUpdate,_n.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_arrayElement,_n.prototype._setValue_arrayElement_setNeedsUpdate,_n.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_n.prototype._setValue_fromArray,_n.prototype._setValue_fromArray_setNeedsUpdate,_n.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Vp{static{Vp.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}function Jd(s,e,t,n){const i=n_(n);switch(t){case up:return s*e;case $u:return s*e/i.components*i.byteLength;case Zu:return s*e/i.components*i.byteLength;case Mr:return s*e*2/i.components*i.byteLength;case Ju:return s*e*2/i.components*i.byteLength;case hp:return s*e*3/i.components*i.byteLength;case Di:return s*e*4/i.components*i.byteLength;case Qu:return s*e*4/i.components*i.byteLength;case uc:case hc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case dc:case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ql:case tu:return Math.max(s,16)*Math.max(e,8)/4;case Jl:case eu:return Math.max(s,8)*Math.max(e,8)/2;case nu:case iu:case ru:case ou:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case su:case vc:case au:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case lu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case uu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case hu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case du:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case mu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case xu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case _u:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case vu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case yu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Mu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Su:case bu:case wu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Tu:case Eu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case yc:case Au:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function n_(s){switch(s){case Ei:case op:return{byteLength:1,components:1};case jo:case ap:case fs:return{byteLength:2,components:1};case Ku:case ju:return{byteLength:2,components:4};case ds:case Yu:case Ni:return{byteLength:4,components:1};case cp:case lp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xu}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xu);function Gp(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function i_(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){const u=c.array,d=c.updateRanges;if(s.bindBuffer(l,a),d.length===0)s.bufferSubData(l,0,u);else{d.sort((f,p)=>f.start-p.start);let h=0;for(let f=1;f<d.length;f++){const p=d[h],v=d[f];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,d[h]=v)}d.length=h+1;for(let f=0,p=d.length;f<p;f++){const v=d[f];s.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var s_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,h_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,d_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,f_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,x_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,__=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,w_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,T_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,E_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,A_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,P_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D_="gl_FragColor = linearToOutputTexel( gl_FragColor );",U_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,O_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,B_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ov=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Av=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ey=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ty=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ry=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ay=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ly=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,my=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_y=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,My=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,by=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ty=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ey=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ay=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Py=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ly=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Oy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:s_,alphahash_pars_fragment:r_,alphamap_fragment:o_,alphamap_pars_fragment:a_,alphatest_fragment:c_,alphatest_pars_fragment:l_,aomap_fragment:u_,aomap_pars_fragment:h_,batching_pars_vertex:d_,batching_vertex:f_,begin_vertex:p_,beginnormal_vertex:m_,bsdfs:g_,iridescence_fragment:x_,bumpmap_pars_fragment:__,clipping_planes_fragment:v_,clipping_planes_pars_fragment:y_,clipping_planes_pars_vertex:M_,clipping_planes_vertex:S_,color_fragment:b_,color_pars_fragment:w_,color_pars_vertex:T_,color_vertex:E_,common:A_,cube_uv_reflection_fragment:R_,defaultnormal_vertex:C_,displacementmap_pars_vertex:P_,displacementmap_vertex:L_,emissivemap_fragment:I_,emissivemap_pars_fragment:N_,colorspace_fragment:D_,colorspace_pars_fragment:U_,envmap_fragment:F_,envmap_common_pars_fragment:O_,envmap_pars_fragment:B_,envmap_pars_vertex:z_,envmap_physical_pars_fragment:$_,envmap_vertex:k_,fog_vertex:H_,fog_pars_vertex:V_,fog_fragment:G_,fog_pars_fragment:W_,gradientmap_pars_fragment:X_,lightmap_pars_fragment:q_,lights_lambert_fragment:Y_,lights_lambert_pars_fragment:K_,lights_pars_begin:j_,lights_toon_fragment:Z_,lights_toon_pars_fragment:J_,lights_phong_fragment:Q_,lights_phong_pars_fragment:ev,lights_physical_fragment:tv,lights_physical_pars_fragment:nv,lights_fragment_begin:iv,lights_fragment_maps:sv,lights_fragment_end:rv,lightprobes_pars_fragment:ov,logdepthbuf_fragment:av,logdepthbuf_pars_fragment:cv,logdepthbuf_pars_vertex:lv,logdepthbuf_vertex:uv,map_fragment:hv,map_pars_fragment:dv,map_particle_fragment:fv,map_particle_pars_fragment:pv,metalnessmap_fragment:mv,metalnessmap_pars_fragment:gv,morphinstance_vertex:xv,morphcolor_vertex:_v,morphnormal_vertex:vv,morphtarget_pars_vertex:yv,morphtarget_vertex:Mv,normal_fragment_begin:Sv,normal_fragment_maps:bv,normal_pars_fragment:wv,normal_pars_vertex:Tv,normal_vertex:Ev,normalmap_pars_fragment:Av,clearcoat_normal_fragment_begin:Rv,clearcoat_normal_fragment_maps:Cv,clearcoat_pars_fragment:Pv,iridescence_pars_fragment:Lv,opaque_fragment:Iv,packing:Nv,premultiplied_alpha_fragment:Dv,project_vertex:Uv,dithering_fragment:Fv,dithering_pars_fragment:Ov,roughnessmap_fragment:Bv,roughnessmap_pars_fragment:zv,shadowmap_pars_fragment:kv,shadowmap_pars_vertex:Hv,shadowmap_vertex:Vv,shadowmask_pars_fragment:Gv,skinbase_vertex:Wv,skinning_pars_vertex:Xv,skinning_vertex:qv,skinnormal_vertex:Yv,specularmap_fragment:Kv,specularmap_pars_fragment:jv,tonemapping_fragment:$v,tonemapping_pars_fragment:Zv,transmission_fragment:Jv,transmission_pars_fragment:Qv,uv_pars_fragment:ey,uv_pars_vertex:ty,uv_vertex:ny,worldpos_vertex:iy,background_vert:sy,background_frag:ry,backgroundCube_vert:oy,backgroundCube_frag:ay,cube_vert:cy,cube_frag:ly,depth_vert:uy,depth_frag:hy,distance_vert:dy,distance_frag:fy,equirect_vert:py,equirect_frag:my,linedashed_vert:gy,linedashed_frag:xy,meshbasic_vert:_y,meshbasic_frag:vy,meshlambert_vert:yy,meshlambert_frag:My,meshmatcap_vert:Sy,meshmatcap_frag:by,meshnormal_vert:wy,meshnormal_frag:Ty,meshphong_vert:Ey,meshphong_frag:Ay,meshphysical_vert:Ry,meshphysical_frag:Cy,meshtoon_vert:Py,meshtoon_frag:Ly,points_vert:Iy,points_frag:Ny,shadow_vert:Dy,shadow_frag:Uy,sprite_vert:Fy,sprite_frag:Oy},Ze={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},os={basic:{uniforms:di([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:di([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new nt(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:di([Ze.common,Ze.specularmap,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,Ze.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:di([Ze.common,Ze.envmap,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.roughnessmap,Ze.metalnessmap,Ze.fog,Ze.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:di([Ze.common,Ze.aomap,Ze.lightmap,Ze.emissivemap,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.gradientmap,Ze.fog,Ze.lights,{emissive:{value:new nt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:di([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,Ze.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:di([Ze.points,Ze.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:di([Ze.common,Ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:di([Ze.common,Ze.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:di([Ze.common,Ze.bumpmap,Ze.normalmap,Ze.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:di([Ze.sprite,Ze.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:di([Ze.common,Ze.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:di([Ze.lights,Ze.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};os.physical={uniforms:di([os.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const tc={r:0,b:0,g:0},By=new Ft,Wp=new Ot;Wp.set(-1,0,0,0,1,0,0,0,1);function zy(s,e,t,n,i,r){const o=new nt(0);let a=i===!0?0:1,c,l,u=null,d=0,h=null;function f(w){let R=w.isScene===!0?w.background:null;if(R&&R.isTexture){const x=w.backgroundBlurriness>0;R=e.get(R,x)}return R}function p(w){let R=!1;const x=f(w);x===null?g(o,a):x&&x.isColor&&(g(x,1),R=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(w,R){const x=f(R);x&&(x.isCubeTexture||x.mapping===Ac)?(l===void 0&&(l=new It(new Ai(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:ro(os.backgroundCube.uniforms),vertexShader:os.backgroundCube.vertexShader,fragmentShader:os.backgroundCube.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(By.makeRotationFromEuler(R.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Wp),l.material.toneMapped=Kt.getTransfer(x.colorSpace)!==gn,(u!==x||d!==x.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=s.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new It(new ci(2,2),new Ri({name:"BackgroundMaterial",uniforms:ro(os.background.uniforms),vertexShader:os.background.vertexShader,fragmentShader:os.background.fragmentShader,side:$s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(x.colorSpace)!==gn,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,R){w.getRGB(tc,Op(s)),t.buffers.color.setClear(tc.r,tc.g,tc.b,R,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,R=1){o.set(w),a=R,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,g(o,a)},render:p,addToRenderList:v,dispose:m}}function ky(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,o=!1;function a(O,V,$,H,j){let ie=!1;const ne=d(O,H,$,V);r!==ne&&(r=ne,l(r.object)),ie=f(O,H,$,j),ie&&p(O,H,$,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(ie||o)&&(o=!1,x(O,V,$,H),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return s.createVertexArray()}function l(O){return s.bindVertexArray(O)}function u(O){return s.deleteVertexArray(O)}function d(O,V,$,H){const j=H.wireframe===!0;let ie=n[V.id];ie===void 0&&(ie={},n[V.id]=ie);const ne=O.isInstancedMesh===!0?O.id:0;let we=ie[ne];we===void 0&&(we={},ie[ne]=we);let re=we[$.id];re===void 0&&(re={},we[$.id]=re);let le=re[j];return le===void 0&&(le=h(c()),re[j]=le),le}function h(O){const V=[],$=[],H=[];for(let j=0;j<t;j++)V[j]=0,$[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:H,object:O,attributes:{},index:null}}function f(O,V,$,H){const j=r.attributes,ie=V.attributes;let ne=0;const we=$.getAttributes();for(const re in we)if(we[re].location>=0){const ye=j[re];let Qe=ie[re];if(Qe===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(Qe=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(Qe=O.instanceColor)),ye===void 0||ye.attribute!==Qe||Qe&&ye.data!==Qe.data)return!0;ne++}return r.attributesNum!==ne||r.index!==H}function p(O,V,$,H){const j={},ie=V.attributes;let ne=0;const we=$.getAttributes();for(const re in we)if(we[re].location>=0){let ye=ie[re];ye===void 0&&(re==="instanceMatrix"&&O.instanceMatrix&&(ye=O.instanceMatrix),re==="instanceColor"&&O.instanceColor&&(ye=O.instanceColor));const Qe={};Qe.attribute=ye,ye&&ye.data&&(Qe.data=ye.data),j[re]=Qe,ne++}r.attributes=j,r.attributesNum=ne,r.index=H}function v(){const O=r.newAttributes;for(let V=0,$=O.length;V<$;V++)O[V]=0}function g(O){m(O,0)}function m(O,V){const $=r.newAttributes,H=r.enabledAttributes,j=r.attributeDivisors;$[O]=1,H[O]===0&&(s.enableVertexAttribArray(O),H[O]=1),j[O]!==V&&(s.vertexAttribDivisor(O,V),j[O]=V)}function w(){const O=r.newAttributes,V=r.enabledAttributes;for(let $=0,H=V.length;$<H;$++)V[$]!==O[$]&&(s.disableVertexAttribArray($),V[$]=0)}function R(O,V,$,H,j,ie,ne){ne===!0?s.vertexAttribIPointer(O,V,$,j,ie):s.vertexAttribPointer(O,V,$,H,j,ie)}function x(O,V,$,H){v();const j=H.attributes,ie=$.getAttributes(),ne=V.defaultAttributeValues;for(const we in ie){const re=ie[we];if(re.location>=0){let le=j[we];if(le===void 0&&(we==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),we==="instanceColor"&&O.instanceColor&&(le=O.instanceColor)),le!==void 0){const ye=le.normalized,Qe=le.itemSize,$e=e.get(le);if($e===void 0)continue;const At=$e.buffer,Tt=$e.type,Bt=$e.bytesPerElement,oe=Tt===s.INT||Tt===s.UNSIGNED_INT||le.gpuType===Yu;if(le.isInterleavedBufferAttribute){const _e=le.data,We=_e.stride,lt=le.offset;if(_e.isInstancedInterleavedBuffer){for(let qe=0;qe<re.locationSize;qe++)m(re.location+qe,_e.meshPerAttribute);O.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let qe=0;qe<re.locationSize;qe++)g(re.location+qe);s.bindBuffer(s.ARRAY_BUFFER,At);for(let qe=0;qe<re.locationSize;qe++)R(re.location+qe,Qe/re.locationSize,Tt,ye,We*Bt,(lt+Qe/re.locationSize*qe)*Bt,oe)}else{if(le.isInstancedBufferAttribute){for(let _e=0;_e<re.locationSize;_e++)m(re.location+_e,le.meshPerAttribute);O.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<re.locationSize;_e++)g(re.location+_e);s.bindBuffer(s.ARRAY_BUFFER,At);for(let _e=0;_e<re.locationSize;_e++)R(re.location+_e,Qe/re.locationSize,Tt,ye,Qe*Bt,Qe/re.locationSize*_e*Bt,oe)}}else if(ne!==void 0){const ye=ne[we];if(ye!==void 0)switch(ye.length){case 2:s.vertexAttrib2fv(re.location,ye);break;case 3:s.vertexAttrib3fv(re.location,ye);break;case 4:s.vertexAttrib4fv(re.location,ye);break;default:s.vertexAttrib1fv(re.location,ye)}}}}w()}function b(){C();for(const O in n){const V=n[O];for(const $ in V){const H=V[$];for(const j in H){const ie=H[j];for(const ne in ie)u(ie[ne].object),delete ie[ne];delete H[j]}}delete n[O]}}function T(O){if(n[O.id]===void 0)return;const V=n[O.id];for(const $ in V){const H=V[$];for(const j in H){const ie=H[j];for(const ne in ie)u(ie[ne].object),delete ie[ne];delete H[j]}}delete n[O.id]}function L(O){for(const V in n){const $=n[V];for(const H in $){const j=$[H];if(j[O.id]===void 0)continue;const ie=j[O.id];for(const ne in ie)u(ie[ne].object),delete ie[ne];delete j[O.id]}}}function _(O){for(const V in n){const $=n[V],H=O.isInstancedMesh===!0?O.id:0,j=$[H];if(j!==void 0){for(const ie in j){const ne=j[ie];for(const we in ne)u(ne[we].object),delete ne[we];delete j[ie]}delete $[H],Object.keys($).length===0&&delete n[V]}}}function C(){D(),o=!0,r!==i&&(r=i,l(r.object))}function D(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:g,disableUnusedAttributes:w}}function Hy(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(s.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];t.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Vy(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(L){return!(L!==Di&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const _=L===fs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ei&&L!==Ni&&!_&&n.convert(L)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(vt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),R=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:R,maxFragmentUniforms:x,maxSamples:b,samples:T}}function Gy(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Ws,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const p=d.clippingPlanes,v=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?u(null):l();else{const w=r?0:n,R=w*4;let x=m.clippingState||null;c.value=x,x=u(p,h,R,f);for(let b=0;b!==R;++b)x[b]=t[b];m.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,p){const v=d!==null?d.length:0;let g=null;if(v!==0){if(g=c.value,p!==!0||g===null){const m=f+v*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let R=0,x=f;R!==v;++R,x+=4)o.copy(d[R]).applyMatrix4(w,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const Zr=4,Wy=6,Xy=20,qy=256,Lo=new Nc,Qd=new nt;let Nl=null,Dl=0,Ul=0,Fl=!1;const Yy=new B,ur=new B;class Fu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=Yy}=r;Nl=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nl,Dl,Ul),this._renderer.xr.enabled=Fl,e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nl=this._renderer.getRenderTarget(),Dl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:fs,format:Di,colorSpace:Mi,depthBuffer:!1},i=ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ky(r)),this._blurMaterial=$y(r,e,t),this._ggxMaterial=jy(r,e,t)}return i}_compileMaterial(e){const t=new It(new vn,e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,n,i,r){const c=new fi(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Qd),d.toneMapping=us,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new Ai,new yi({name:"PMREM.Background",side:pi,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let m=!1;const w=e.background;w?w.isColor&&(g.color.copy(w),e.background=null,m=!0):(g.color.copy(Qd),m=!0);for(let R=0;R<6;R++){const x=R%3;x===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[R],r.y,r.z)):x===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[R]));const b=this._cubeSize;qr(i,x*b,R>2?b:0,b,b),d.setRenderTarget(i),m&&d.render(v,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===yr||e.mapping===no;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;qr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Lo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:p}=this,v=this._sizeLods[n],g=3*v*(n>p-Zr?n-p+Zr:0),m=4*(this._cubeSize-v);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=p-t,qr(r,g,m,3*v,2*v),i.setRenderTarget(r),i.render(a,Lo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=p-n,qr(e,g,m,3*v,2*v),i.setRenderTarget(e),i.render(a,Lo)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,i,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[i];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const u=this._sizeLods[i],d=3*u*(i>this._lodMax-Zr?i-this._lodMax+Zr:0),h=4*(this._cubeSize-u);qr(t,d,h,3*u,2*u),o.setRenderTarget(t),o.render(c,Lo)}}function Ky(s){const e=[],t=[];let n=s;const i=s-Zr+1+Wy;for(let r=0;r<i;r++){const o=Math.pow(2,n);e.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,p=new Float32Array(f*h*d),v=new Float32Array(f*h*d);for(let m=0;m<d;m++){const w=m%3*2/3-1,R=m>2?0:-1,x=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];p.set(x,f*h*m);for(let b=0;b<h;b++){const T=u[b*2]*2-1,L=u[b*2+1]*2-1;m===0?ur.set(1,L,T):m===1?ur.set(-T,1,-L):m===2?ur.set(-T,L,1):m===3?ur.set(-1,L,-T):m===4?ur.set(-T,-1,L):ur.set(T,L,-1),ur.toArray(v,(m*h+b)*f)}}const g=new vn;g.setAttribute("position",new En(p,f)),g.setAttribute("outputDirection",new En(v,f)),t.push(new It(g,null)),n>Zr&&n--}return{lodMeshes:t,sizeLods:e}}function ef(s,e,t){const n=new $i(s,e,t);return n.texture.mapping=Ac,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function jy(s,e,t){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function $y(s,e,t){return new Ri({name:"SphericalGaussianBlur",defines:{SAMPLES:Xy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function tf(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function nf(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ps,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Xp extends $i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Tp(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ai(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:ro(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pi,blending:Ps});r.uniforms.tEquirect.value=t;const o=new It(i,r),a=t.minFilter;return t.minFilter===Rs&&(t.minFilter=$n),new Xx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}function Zy(s){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===tl||f===nl)if(e.has(h)){const p=e.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const v=new Xp(p.height);return v.fromEquirectangularTexture(s,h),e.set(h,v),h.addEventListener("dispose",l),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,p=f===tl||f===nl,v=f===yr||f===no;if(p||v){let g=t.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new Fu(s)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const w=h.image;return p&&w&&w.height>0||v&&w&&c(w)?(n===null&&(n=new Fu(s)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,f){return f===tl?h.mapping=yr:f===nl&&(h.mapping=no),h}function c(h){let f=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&f++;return f===p}function l(h){const f=h.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Jy(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Qr("WebGLRenderer: "+n+" extension not supported."),i}}}function Qy(s,e,t,n){const i={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete i[h.id];const f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)e.update(h[f],s.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,p=d.attributes.position;let v=0;if(p===void 0)return;if(f!==null){const w=f.array;v=f.version;for(let R=0,x=w.length;R<x;R+=3){const b=w[R+0],T=w[R+1],L=w[R+2];h.push(b,T,T,L,L,b)}}else{const w=p.array;v=p.version;for(let R=0,x=w.length/3-1;R<x;R+=3){const b=R+0,T=R+1,L=R+2;h.push(b,T,T,L,L,b)}}const g=new(p.count>=65535?vp:_p)(h,1);g.version=v;const m=r.get(d);m&&e.remove(m),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function eM(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){s.drawElements(n,h,r,d*o),t.update(h,n,1)}function l(d,h,f){f!==0&&(s.drawElementsInstanced(n,h,r,d*o,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let v=0;for(let g=0;g<f;g++)v+=h[g];t.update(v,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function tM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:Dt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function nM(s,e,t){const n=new WeakMap,i=new yn;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let C=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let R=0;f===!0&&(R=1),p===!0&&(R=2),v===!0&&(R=3);let x=a.attributes.position.count*R,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const T=new Float32Array(x*b*4*d),L=new mp(T,x,b,d);L.type=Ni,L.needsUpdate=!0;const _=R*4;for(let D=0;D<d;D++){const O=g[D],V=m[D],$=w[D],H=x*b*4*D;for(let j=0;j<O.count;j++){const ie=j*_;f===!0&&(i.fromBufferAttribute(O,j),T[H+ie+0]=i.x,T[H+ie+1]=i.y,T[H+ie+2]=i.z,T[H+ie+3]=0),p===!0&&(i.fromBufferAttribute(V,j),T[H+ie+4]=i.x,T[H+ie+5]=i.y,T[H+ie+6]=i.z,T[H+ie+7]=0),v===!0&&(i.fromBufferAttribute($,j),T[H+ie+8]=i.x,T[H+ie+9]=i.y,T[H+ie+10]=i.z,T[H+ie+11]=$.itemSize===4?i.w:1)}}h={count:d,texture:L,size:new Ge(x,b)},n.set(a,h),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const p=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function iM(s,e,t,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const sM={[Jf]:"LINEAR_TONE_MAPPING",[Qf]:"REINHARD_TONE_MAPPING",[ep]:"CINEON_TONE_MAPPING",[qu]:"ACES_FILMIC_TONE_MAPPING",[np]:"AGX_TONE_MAPPING",[ip]:"NEUTRAL_TONE_MAPPING",[tp]:"CUSTOM_TONE_MAPPING"};function rM(s,e,t,n,i,r){const o=new $i(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new vn;l.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const u=new yx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new It(l,u),h=new Nc(-1,1,1,-1,0,1);let f=null,p=null,v=!1,g,m=null,w=[],R=!1;this.setSize=function(x,b){o.setSize(x,b),a!==null&&a.setSize(x,b),c!==null&&c.setSize(x,b);for(let T=0;T<w.length;T++){const L=w[T];L.setSize&&L.setSize(x,b)}},this.setEffects=function(x){w=x,R=w.length>0&&w[0].isRenderPass===!0;const b=o.width,T=o.height;w.length>0&&a===null&&(a=new $i(b,T,{type:fs,depthBuffer:!1,stencilBuffer:!1}),c=new $i(b,T,{type:fs,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<w.length;L++){const _=w[L];_.setSize&&_.setSize(b,T)}},this.begin=function(x,b){if(v||x.toneMapping===us&&w.length===0)return!1;if(m=b,b!==null){const T=b.width,L=b.height;(o.width!==T||o.height!==L)&&this.setSize(T,L)}return R===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=us,!0},this.hasRenderPass=function(){return R},this.end=function(x,b){x.toneMapping=g,v=!0;let T=o,L=a;for(let _=0;_<w.length;_++){const C=w[_];C.enabled!==!1&&(C.render(x,L,T,b),C.needsSwap!==!1&&(T=L,L=L===a?c:a))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,u.defines={},Kt.getTransfer(f)===gn&&(u.defines.SRGB_TRANSFER="");const _=sM[p];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(m),x.render(d,h),m=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const qp=new Zn,Ou=new na(1,1),Yp=new mp,Kp=new gg,jp=new Tp,sf=[],rf=[],of=new Float32Array(16),af=new Float32Array(9),cf=new Float32Array(4);function lo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=sf[i];if(r===void 0&&(r=new Float32Array(i),sf[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function Jn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Qn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Uc(s,e){let t=rf[e];t===void 0&&(t=new Int32Array(e),rf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function oM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function aM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jn(t,e))return;s.uniform2fv(this.addr,e),Qn(t,e)}}function cM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jn(t,e))return;s.uniform3fv(this.addr,e),Qn(t,e)}}function lM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jn(t,e))return;s.uniform4fv(this.addr,e),Qn(t,e)}}function uM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qn(t,e)}else{if(Jn(t,n))return;cf.set(n),s.uniformMatrix2fv(this.addr,!1,cf),Qn(t,n)}}function hM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qn(t,e)}else{if(Jn(t,n))return;af.set(n),s.uniformMatrix3fv(this.addr,!1,af),Qn(t,n)}}function dM(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Jn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qn(t,e)}else{if(Jn(t,n))return;of.set(n),s.uniformMatrix4fv(this.addr,!1,of),Qn(t,n)}}function fM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jn(t,e))return;s.uniform2iv(this.addr,e),Qn(t,e)}}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jn(t,e))return;s.uniform3iv(this.addr,e),Qn(t,e)}}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jn(t,e))return;s.uniform4iv(this.addr,e),Qn(t,e)}}function xM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function _M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jn(t,e))return;s.uniform2uiv(this.addr,e),Qn(t,e)}}function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jn(t,e))return;s.uniform3uiv(this.addr,e),Qn(t,e)}}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jn(t,e))return;s.uniform4uiv(this.addr,e),Qn(t,e)}}function MM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ou.compareFunction=t.isReversedDepthBuffer()?th:eh,r=Ou):r=qp,t.setTexture2D(e||r,i)}function SM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Kp,i)}function bM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||jp,i)}function wM(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Yp,i)}function TM(s){switch(s){case 5126:return oM;case 35664:return aM;case 35665:return cM;case 35666:return lM;case 35674:return uM;case 35675:return hM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return pM;case 35668:case 35672:return mM;case 35669:case 35673:return gM;case 5125:return xM;case 36294:return _M;case 36295:return vM;case 36296:return yM;case 35678:case 36198:case 36298:case 36306:case 35682:return MM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return wM}}function EM(s,e){s.uniform1fv(this.addr,e)}function AM(s,e){const t=lo(e,this.size,2);s.uniform2fv(this.addr,t)}function RM(s,e){const t=lo(e,this.size,3);s.uniform3fv(this.addr,t)}function CM(s,e){const t=lo(e,this.size,4);s.uniform4fv(this.addr,t)}function PM(s,e){const t=lo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function LM(s,e){const t=lo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function IM(s,e){const t=lo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function NM(s,e){s.uniform1iv(this.addr,e)}function DM(s,e){s.uniform2iv(this.addr,e)}function UM(s,e){s.uniform3iv(this.addr,e)}function FM(s,e){s.uniform4iv(this.addr,e)}function OM(s,e){s.uniform1uiv(this.addr,e)}function BM(s,e){s.uniform2uiv(this.addr,e)}function zM(s,e){s.uniform3uiv(this.addr,e)}function kM(s,e){s.uniform4uiv(this.addr,e)}function HM(s,e,t){const n=this.cache,i=e.length,r=Uc(t,i);Jn(n,r)||(s.uniform1iv(this.addr,r),Qn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Ou:o=qp;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function VM(s,e,t){const n=this.cache,i=e.length,r=Uc(t,i);Jn(n,r)||(s.uniform1iv(this.addr,r),Qn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Kp,r[o])}function GM(s,e,t){const n=this.cache,i=e.length,r=Uc(t,i);Jn(n,r)||(s.uniform1iv(this.addr,r),Qn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||jp,r[o])}function WM(s,e,t){const n=this.cache,i=e.length,r=Uc(t,i);Jn(n,r)||(s.uniform1iv(this.addr,r),Qn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Yp,r[o])}function XM(s){switch(s){case 5126:return EM;case 35664:return AM;case 35665:return RM;case 35666:return CM;case 35674:return PM;case 35675:return LM;case 35676:return IM;case 5124:case 35670:return NM;case 35667:case 35671:return DM;case 35668:case 35672:return UM;case 35669:case 35673:return FM;case 5125:return OM;case 36294:return BM;case 36295:return zM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return GM;case 36289:case 36303:case 36311:case 36292:return WM}}class qM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=TM(t.type)}}class YM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=XM(t.type)}}class KM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Ol=/(\w+)(\])?(\[|\.)?/g;function lf(s,e){s.seq.push(e),s.map[e.id]=e}function jM(s,e,t){const n=s.name,i=n.length;for(Ol.lastIndex=0;;){const r=Ol.exec(n),o=Ol.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){lf(t,l===void 0?new qM(a,s,e):new YM(a,s,e));break}else{let d=t.map[a];d===void 0&&(d=new KM(a),lf(t,d)),t=d}}}class gc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);jM(a,c,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function uf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const $M=37297;let ZM=0;function JM(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const hf=new Ot;function QM(s){Kt._getMatrix(hf,Kt.workingColorSpace,s);const e=`mat3( ${hf.elements.map(t=>t.toFixed(4))} )`;switch(Kt.getTransfer(s)){case Mc:return[e,"LinearTransferOETF"];case gn:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function df(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+JM(s.getShaderSource(e),a)}else return r}function eS(s,e){const t=QM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const tS={[Jf]:"Linear",[Qf]:"Reinhard",[ep]:"Cineon",[qu]:"ACESFilmic",[np]:"AgX",[ip]:"Neutral",[tp]:"Custom"};function nS(s,e){const t=tS[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new B;function iS(){Kt.getLuminanceCoefficients(nc);const s=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function rS(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oS(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ko(s){return s!==""}function ff(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bu(s){return s.replace(aS,lS)}const cS=new Map;function lS(s,e){let t=Wt[e];if(t===void 0){const n=cS.get(e);if(n!==void 0)t=Wt[n],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bu(t)}const uS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mf(s){return s.replace(uS,hS)}function hS(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function gf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const dS={[cc]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};function fS(s){return dS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const pS={[yr]:"ENVMAP_TYPE_CUBE",[no]:"ENVMAP_TYPE_CUBE",[Ac]:"ENVMAP_TYPE_CUBE_UV"};function mS(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":pS[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const gS={[no]:"ENVMAP_MODE_REFRACTION"};function xS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":gS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _S={[Zf]:"ENVMAP_BLENDING_MULTIPLY",[C0]:"ENVMAP_BLENDING_MIX",[P0]:"ENVMAP_BLENDING_ADD"};function vS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":_S[s.combine]||"ENVMAP_BLENDING_NONE"}function yS(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function MS(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=fS(t),l=mS(t),u=xS(t),d=vS(t),h=yS(t),f=sS(t),p=rS(r),v=i.createProgram();let g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ko).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(ko).join(`
`),m.length>0&&(m+=`
`)):(g=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),m=[gf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==us?"#define TONE_MAPPING":"",t.toneMapping!==us?Wt.tonemapping_pars_fragment:"",t.toneMapping!==us?nS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,eS("linearToOutputTexel",t.outputColorSpace),iS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ko).join(`
`)),o=Bu(o),o=ff(o,t),o=pf(o,t),a=Bu(a),a=ff(a,t),a=pf(a,t),o=mf(o),a=mf(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===od?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const R=w+g+o,x=w+m+a,b=uf(i,i.VERTEX_SHADER,R),T=uf(i,i.FRAGMENT_SHADER,x);i.attachShader(v,b),i.attachShader(v,T),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function L(O){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(v)||"",$=i.getShaderInfoLog(b)||"",H=i.getShaderInfoLog(T)||"",j=V.trim(),ie=$.trim(),ne=H.trim();let we=!0,re=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(we=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,b,T);else{const le=df(i,b,"vertex"),ye=df(i,T,"fragment");Dt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+j+`
`+le+`
`+ye)}else j!==""?vt("WebGLProgram: Program Info Log:",j):(ie===""||ne==="")&&(re=!1);re&&(O.diagnostics={runnable:we,programLog:j,vertexShader:{log:ie,prefix:g},fragmentShader:{log:ne,prefix:m}})}i.deleteShader(b),i.deleteShader(T),_=new gc(i,v),C=oS(i,v)}let _;this.getUniforms=function(){return _===void 0&&L(this),_};let C;this.getAttributes=function(){return C===void 0&&L(this),C};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=i.getProgramParameter(v,$M)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=T,this}let SS=0;class bS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wS(e),t.set(e,n)),n}}class wS{constructor(e){this.id=SS++,this.code=e,this.usedTimes=0}}function TS(s){return s===Mr||s===vc||s===yc}function ES(s,e,t,n,i,r){const o=new gp,a=new bS,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,C,D,O,V,$){const H=O.fog,j=V.geometry,ie=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?O.environment:null,ne=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,we=e.get(_.envMap||ie,ne),re=we&&we.mapping===Ac?we.image.height:null,le=f[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&vt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const ye=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Qe=ye!==void 0?ye.length:0;let $e=0;j.morphAttributes.position!==void 0&&($e=1),j.morphAttributes.normal!==void 0&&($e=2),j.morphAttributes.color!==void 0&&($e=3);let At,Tt,Bt,oe;if(le){const tn=os[le];At=tn.vertexShader,Tt=tn.fragmentShader}else{At=_.vertexShader,Tt=_.fragmentShader;const tn=a.getVertexShaderStage(_),zt=a.getFragmentShaderStage(_);a.update(_,tn,zt),Bt=tn.id,oe=zt.id}const _e=s.getRenderTarget(),We=s.state.buffers.depth.getReversed(),lt=V.isInstancedMesh===!0,qe=V.isBatchedMesh===!0,xt=!!_.map,Yt=!!_.matcap,ve=!!we,Ee=!!_.aoMap,Re=!!_.lightMap,Ce=!!_.bumpMap&&_.wireframe===!1,Oe=!!_.normalMap,mt=!!_.displacementMap,at=!!_.emissiveMap,yt=!!_.metalnessMap,ee=!!_.roughnessMap,N=_.anisotropy>0,ft=_.clearcoat>0,St=_.dispersion>0,I=_.retroreflectivity>0,y=_.iridescence>0,X=_.sheen>0,Q=_.transmission>0,ce=N&&!!_.anisotropyMap,Le=ft&&!!_.clearcoatMap,Be=ft&&!!_.clearcoatNormalMap,de=ft&&!!_.clearcoatRoughnessMap,ue=y&&!!_.iridescenceMap,Te=y&&!!_.iridescenceThicknessMap,ot=X&&!!_.sheenColorMap,Ve=X&&!!_.sheenRoughnessMap,Ne=!!_.specularMap,rt=!!_.specularColorMap,gt=!!_.specularIntensityMap,dt=Q&&!!_.transmissionMap,W=Q&&!!_.thicknessMap,Ie=!!_.gradientMap,ge=!!_.alphaMap,Xe=_.alphaTest>0,Ye=!!_.alphaHash,Se=!!_.extensions;let ut=us;_.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(ut=s.toneMapping);const it={shaderID:le,shaderType:_.type,shaderName:_.name,vertexShader:At,fragmentShader:Tt,defines:_.defines,customVertexShaderID:Bt,customFragmentShaderID:oe,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:qe,batchingColor:qe&&V._colorsTexture!==null,instancing:lt,instancingColor:lt&&V.instanceColor!==null,instancingMorph:lt&&V.morphTexture!==null,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:xt,matcap:Yt,envMap:ve,envMapMode:ve&&we.mapping,envMapCubeUVHeight:re,aoMap:Ee,lightMap:Re,bumpMap:Ce,normalMap:Oe,displacementMap:mt,emissiveMap:at,normalMapObjectSpace:Oe&&_.normalMapType===U0,normalMapTangentSpace:Oe&&_.normalMapType===Cu,packedNormalMap:Oe&&_.normalMapType===Cu&&TS(_.normalMap.format),metalnessMap:yt,roughnessMap:ee,anisotropy:N,anisotropyMap:ce,clearcoat:ft,clearcoatMap:Le,clearcoatNormalMap:Be,clearcoatRoughnessMap:de,dispersion:St,retroreflection:I,iridescence:y,iridescenceMap:ue,iridescenceThicknessMap:Te,sheen:X,sheenColorMap:ot,sheenRoughnessMap:Ve,specularMap:Ne,specularColorMap:rt,specularIntensityMap:gt,transmission:Q,transmissionMap:dt,thicknessMap:W,gradientMap:Ie,opaque:_.transparent===!1&&_.blending===Vo&&_.alphaToCoverage===!1,alphaMap:ge,alphaTest:Xe,alphaHash:Ye,combine:_.combine,mapUv:xt&&p(_.map.channel),aoMapUv:Ee&&p(_.aoMap.channel),lightMapUv:Re&&p(_.lightMap.channel),bumpMapUv:Ce&&p(_.bumpMap.channel),normalMapUv:Oe&&p(_.normalMap.channel),displacementMapUv:mt&&p(_.displacementMap.channel),emissiveMapUv:at&&p(_.emissiveMap.channel),metalnessMapUv:yt&&p(_.metalnessMap.channel),roughnessMapUv:ee&&p(_.roughnessMap.channel),anisotropyMapUv:ce&&p(_.anisotropyMap.channel),clearcoatMapUv:Le&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Be&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:de&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&p(_.sheenRoughnessMap.channel),specularMapUv:Ne&&p(_.specularMap.channel),specularColorMapUv:rt&&p(_.specularColorMap.channel),specularIntensityMapUv:gt&&p(_.specularIntensityMap.channel),transmissionMapUv:dt&&p(_.transmissionMap.channel),thicknessMapUv:W&&p(_.thicknessMap.channel),alphaMapUv:ge&&p(_.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Oe||N),vertexNormals:!!j.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(xt||ge),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||j.attributes.normal===void 0&&Oe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:We,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Qe,morphTextureStride:$e,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:xt&&_.map.isVideoTexture===!0&&Kt.getTransfer(_.map.colorSpace)===gn,decodeVideoTextureEmissive:at&&_.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(_.emissiveMap.colorSpace)===gn,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ti,flipSided:_.side===pi,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Se&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&_.extensions.multiDraw===!0||qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function g(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)C.push(D),C.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(C,_),w(C,_),C.push(s.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function m(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numSunLights),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numSunLightShadows),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function w(_,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function R(_){const C=f[_.type];let D;if(C){const O=os[C];D=xx.clone(O.uniforms)}else D=_.uniforms;return D}function x(_,C){let D=u.get(C);return D!==void 0?++D.usedTimes:(D=new MS(s,C,_,i),l.push(D),u.set(C,D)),D}function b(_){if(--_.usedTimes===0){const C=l.indexOf(_);l[C]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function L(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:R,acquireProgram:x,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:L}}function AS(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function RS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function xf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _f(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,p,v,g,m){let w=s[e];return w===void 0?(w={id:h.id,object:h,geometry:f,material:p,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},s[e]=w):(w.id=h.id,w.object=h,w.geometry=f,w.material=p,w.materialVariant=o(h),w.groupOrder=v,w.renderOrder=h.renderOrder,w.z=g,w.group=m),e++,w}function c(h,f,p,v,g,m,w){w.reversedDepth===!0&&(g=-g);const R=a(h,f,p,v,g,m);p.transmission>0?n.push(R):p.transparent===!0?i.push(R):t.push(R)}function l(h,f,p,v,g,m){const w=a(h,f,p,v,g,m);p.transmission>0?n.unshift(w):p.transparent===!0?i.unshift(w):t.unshift(w)}function u(h,f){t.length>1&&t.sort(h||RS),n.length>1&&n.sort(f||xf),i.length>1&&i.sort(f||xf)}function d(){for(let h=e,f=s.length;h<f;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:u}}function CS(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new _f,s.set(n,[o])):i>=r.length?(o=new _f,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function PS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new nt};break;case"SpotLight":t={position:new B,direction:new B,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function LS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let IS=0;function NS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function DS(s){const e=new PS,t=LS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);const i=new B,r=new Ft,o=new Ft;function a(l){let u=0,d=0,h=0;for(let V=0;V<9;V++)n.probe[V].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,w=0,R=0,x=0,b=0,T=0,L=0,_=0,C=0,D=0;l.sort(NS);for(let V=0,$=l.length;V<$;V++){const H=l[V],j=H.color,ie=H.intensity,ne=H.distance;let we=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Mr?we=H.shadow.map.texture:we=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)u+=j.r*ie,d+=j.g*ie,h+=j.b*ie;else if(H.isLightProbe){for(let re=0;re<9;re++)n.probe[re].addScaledVector(H.sh.coefficients[re],ie);D++}else if(H.isSunLight){const re=e.get(H);if(re.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const le=H.shadow,ye=t.get(H);ye.shadowIntensity=le.intensity,ye.shadowBias=le.bias,ye.shadowNormalBias=le.normalBias,ye.shadowRadius=le.radius,ye.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),n.sunShadow[p]=ye,n.sunShadowMap[p]=we;const Qe=le.getViewportCount();for(let $e=0;$e<Qe;$e++)n.sunShadowMatrix[v+$e]=le.getMatrix($e),n.sunShadowCascade[v+$e]=le._cascadeData[$e];v+=Qe,p++}n.sun[f]=re,f++}else if(H.isDirectionalLight){const re=e.get(H);if(re.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const le=H.shadow,ye=t.get(H);ye.shadowIntensity=le.intensity,ye.shadowBias=le.bias,ye.shadowNormalBias=le.normalBias,ye.shadowRadius=le.radius,ye.shadowMapSize=le.mapSize,n.directionalShadow[g]=ye,n.directionalShadowMap[g]=we,n.directionalShadowMatrix[g]=H.shadow.matrix,b++}n.directional[g]=re,g++}else if(H.isSpotLight){const re=e.get(H);re.position.setFromMatrixPosition(H.matrixWorld),re.color.copy(j).multiplyScalar(ie),re.distance=ne,re.coneCos=Math.cos(H.angle),re.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),re.decay=H.decay,n.spot[w]=re;const le=H.shadow;if(H.map&&(n.spotLightMap[_]=H.map,_++,le.updateMatrices(H),H.castShadow&&C++),n.spotLightMatrix[w]=le.matrix,H.castShadow){const ye=t.get(H);ye.shadowIntensity=le.intensity,ye.shadowBias=le.bias,ye.shadowNormalBias=le.normalBias,ye.shadowRadius=le.radius,ye.shadowMapSize=le.mapSize,n.spotShadow[w]=ye,n.spotShadowMap[w]=we,L++}w++}else if(H.isRectAreaLight){const re=e.get(H);re.color.copy(j).multiplyScalar(ie),re.halfWidth.set(H.width*.5,0,0),re.halfHeight.set(0,H.height*.5,0),n.rectArea[R]=re,R++}else if(H.isPointLight){const re=e.get(H);if(re.color.copy(H.color).multiplyScalar(H.intensity),re.distance=H.distance,re.decay=H.decay,H.castShadow){const le=H.shadow,ye=t.get(H);ye.shadowIntensity=le.intensity,ye.shadowBias=le.bias,ye.shadowNormalBias=le.normalBias,ye.shadowRadius=le.radius,ye.shadowMapSize=le.mapSize,ye.shadowCameraNear=le.camera.near,ye.shadowCameraFar=le.camera.far,n.pointShadow[m]=ye,n.pointShadowMap[m]=we,n.pointShadowMatrix[m]=H.shadow.matrix,T++}n.point[m]=re,m++}else if(H.isHemisphereLight){const re=e.get(H);re.skyColor.copy(H.color).multiplyScalar(ie),re.groundColor.copy(H.groundColor).multiplyScalar(ie),n.hemi[x]=re,x++}}R>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ze.LTC_FLOAT_1,n.rectAreaLTC2=Ze.LTC_FLOAT_2):(n.rectAreaLTC1=Ze.LTC_HALF_1,n.rectAreaLTC2=Ze.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const O=n.hash;(O.sunLength!==f||O.directionalLength!==g||O.pointLength!==m||O.spotLength!==w||O.rectAreaLength!==R||O.hemiLength!==x||O.numSunShadows!==p||O.numDirectionalShadows!==b||O.numPointShadows!==T||O.numSpotShadows!==L||O.numSpotMaps!==_||O.numLightProbes!==D)&&(n.sun.length=f,n.directional.length=g,n.spot.length=w,n.rectArea.length=R,n.point.length=m,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+_-C,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,O.sunLength=f,O.directionalLength=g,O.pointLength=m,O.spotLength=w,O.rectAreaLength=R,O.hemiLength=x,O.numSunShadows=p,O.numDirectionalShadows=b,O.numPointShadows=T,O.numSpotShadows=L,O.numSpotMaps=_,O.numLightProbes=D,n.version=IS++)}function c(l,u){let d=0,h=0,f=0,p=0,v=0,g=0;const m=u.matrixWorldInverse;for(let w=0,R=l.length;w<R;w++){const x=l[w];if(x.isSunLight){const b=n.sun[d];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),d++}else if(x.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),h++}else if(x.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const b=n.rectArea[v];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const b=n.hemi[g];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function vf(s){const e=new DS(s),t=[],n=[],i=[];function r(h){d.camera=h,t.length=0,n.length=0,i.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function c(h){i.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function US(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new vf(s),e.set(i,[a])):r>=o.length?(a=new vf(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const FS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BS=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],zS=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],yf=new Ft,Io=new B,Bl=new B;function kS(s,e,t){let n=new ah;const i=new Ge,r=new Ge,o=new yn,a=new Mx,c=new Sx,l={},u=t.maxTextureSize,d={[$s]:pi,[pi]:$s,[Ti]:Ti},h=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:FS,fragmentShader:OS}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const p=new vn;p.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new It(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cc;let m=this.type;this.render=function(T,L,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Kf&&(vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=cc);const C=s.getRenderTarget(),D=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),V=s.state;V.setBlending(Ps),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const $=m!==this.type;$&&L.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(j=>j.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,j=T.length;H<j;H++){const ie=T[H],ne=ie.shadow;if(ne===void 0){vt("WebGLShadowMap:",ie,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;i.copy(ne.mapSize);const we=ne.getFrameExtents();i.multiply(we),r.copy(ne.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/we.x),i.x=r.x*we.x,ne.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/we.y),i.y=r.y*we.y,ne.mapSize.y=r.y));const re=s.state.buffers.depth.getReversed();if(ne.camera._reversedDepth=re,ne.map===null||$===!0){if(ne.map!==null&&(ne.map.depthTexture!==null&&(ne.map.depthTexture.dispose(),ne.map.depthTexture=null),ne.map.dispose()),this.type===Oo){if(ie.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ne.map=new $i(i.x,i.y,{format:Mr,type:fs,minFilter:$n,magFilter:$n,generateMipmaps:!1}),ne.map.texture.name=ie.name+".shadowMap",ne.map.depthTexture=new na(i.x,i.y,Ni),ne.map.depthTexture.name=ie.name+".shadowMapDepth",ne.map.depthTexture.format=Is,ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=jn,ne.map.depthTexture.magFilter=jn}else ie.isPointLight?(ne.map=new Xp(i.x),ne.map.depthTexture=new Og(i.x,ds)):(ne.map=new $i(i.x,i.y),ne.map.depthTexture=new na(i.x,i.y,ds)),ne.map.depthTexture.name=ie.name+".shadowMap",ne.map.depthTexture.format=Is,this.type===cc?(ne.map.depthTexture.compareFunction=re?th:eh,ne.map.depthTexture.minFilter=$n,ne.map.depthTexture.magFilter=$n):(ne.map.depthTexture.compareFunction=null,ne.map.depthTexture.minFilter=jn,ne.map.depthTexture.magFilter=jn);ne.camera.updateProjectionMatrix()}ne.map.isWebGLCubeRenderTarget!==!0&&(ne.map.width!==i.x||ne.map.height!==i.y)&&ne.map.setSize(i.x,i.y);const le=ne.map.isWebGLCubeRenderTarget?6:ne.getViewportCount();ie.isPointLight!==!0&&ne.updateMatrices(ie,_);for(let ye=0;ye<le;ye++){const Qe=ne.getCamera(ye);if(ie.isPointLight){const $e=ne.camera,At=ne.matrix,Tt=ie.distance||$e.far;Tt!==$e.far&&($e.far=Tt,$e.updateProjectionMatrix()),Io.setFromMatrixPosition(ie.matrixWorld),$e.position.copy(Io),Bl.copy($e.position),Bl.add(BS[ye]),$e.up.copy(zS[ye]),$e.lookAt(Bl),$e.updateMatrixWorld(),At.makeTranslation(-Io.x,-Io.y,-Io.z),yf.multiplyMatrices($e.projectionMatrix,$e.matrixWorldInverse),ne._frustum.setFromProjectionMatrix(yf,$e.coordinateSystem,$e.reversedDepth)}if(ne.map.isWebGLCubeRenderTarget)s.setRenderTarget(ne.map,ye),s.clear();else{ye===0&&(s.setRenderTarget(ne.map),s.clear());const $e=ne.getViewport(ye);o.set(r.x*$e.x,r.y*$e.y,r.x*$e.z,r.y*$e.w),V.viewport(o)}n=ne.getFrustum(ye),x(L,_,Qe,ie,this.type)}ne.isPointLightShadow!==!0&&this.type===Oo&&w(ne,_),ne.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(C,D,O)};function w(T,L){const _=e.update(v);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new $i(i.x,i.y,{format:Mr,type:fs}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(L,null,_,h,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(L,null,_,f,v,null)}function R(T,L,_,C){let D=null;const O=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)D=O;else if(D=_.isPointLight===!0?c:a,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const V=D.uuid,$=L.uuid;let H=l[V];H===void 0&&(H={},l[V]=H);let j=H[$];j===void 0&&(j=D.clone(),H[$]=j,L.addEventListener("dispose",b)),D=j}if(D.visible=L.visible,D.wireframe=L.wireframe,C===Oo?D.side=L.shadowSide!==null?L.shadowSide:L.side:D.side=L.shadowSide!==null?L.shadowSide:d[L.side],D.alphaMap=L.alphaMap,D.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,D.map=L.map,D.clipShadows=L.clipShadows,D.clippingPlanes=L.clippingPlanes,D.clipIntersection=L.clipIntersection,D.displacementMap=L.displacementMap,D.displacementScale=L.displacementScale,D.displacementBias=L.displacementBias,D.wireframeLinewidth=L.wireframeLinewidth,D.linewidth=L.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const V=s.properties.get(D);V.light=_}return D}function x(T,L,_,C,D){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===Oo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const $=e.update(T),H=T.material;if(Array.isArray(H)){const j=$.groups;for(let ie=0,ne=j.length;ie<ne;ie++){const we=j[ie],re=H[we.materialIndex];if(re&&re.visible){const le=R(T,re,C,D);T.onBeforeShadow(s,T,L,_,$,le,we),s.renderBufferDirect(_,null,$,le,T,we),T.onAfterShadow(s,T,L,_,$,le,we)}}}else if(H.visible){const j=R(T,H,C,D);T.onBeforeShadow(s,T,L,_,$,j,null),s.renderBufferDirect(_,null,$,j,T,null),T.onAfterShadow(s,T,L,_,$,j,null)}}const V=T.children;for(let $=0,H=V.length;$<H;$++)x(V[$],L,_,C,D)}function b(T){T.target.removeEventListener("dispose",b);for(const _ in l){const C=l[_],D=T.target.uuid;D in C&&(C[D].dispose(),delete C[D])}}}function HS(s,e){function t(){let W=!1;const Ie=new yn;let ge=null;const Xe=new yn(0,0,0,0);return{setMask:function(Ye){ge!==Ye&&!W&&(s.colorMask(Ye,Ye,Ye,Ye),ge=Ye)},setLocked:function(Ye){W=Ye},setClear:function(Ye,Se,ut,it,tn){tn===!0&&(Ye*=it,Se*=it,ut*=it),Ie.set(Ye,Se,ut,it),Xe.equals(Ie)===!1&&(s.clearColor(Ye,Se,ut,it),Xe.copy(Ie))},reset:function(){W=!1,ge=null,Xe.set(-1,0,0,0)}}}function n(){let W=!1,Ie=!1,ge=null,Xe=null,Ye=null;return{setReversed:function(Se){if(Ie!==Se){const ut=e.get("EXT_clip_control");Se?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),Ie=Se;const it=Ye;Ye=null,this.setClear(it)}},getReversed:function(){return Ie},setTest:function(Se){Se?_e(s.DEPTH_TEST):We(s.DEPTH_TEST)},setMask:function(Se){ge!==Se&&!W&&(s.depthMask(Se),ge=Se)},setFunc:function(Se){if(Ie&&(Se=Y0[Se]),Xe!==Se){switch(Se){case Xl:s.depthFunc(s.NEVER);break;case ql:s.depthFunc(s.ALWAYS);break;case Yl:s.depthFunc(s.LESS);break;case Ko:s.depthFunc(s.LEQUAL);break;case Kl:s.depthFunc(s.EQUAL);break;case jl:s.depthFunc(s.GEQUAL);break;case $l:s.depthFunc(s.GREATER);break;case Zl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Xe=Se}},setLocked:function(Se){W=Se},setClear:function(Se){Ye!==Se&&(Ye=Se,Ie&&(Se=1-Se),s.clearDepth(Se))},reset:function(){W=!1,ge=null,Xe=null,Ye=null,Ie=!1}}}function i(){let W=!1,Ie=null,ge=null,Xe=null,Ye=null,Se=null,ut=null,it=null,tn=null;return{setTest:function(zt){W||(zt?_e(s.STENCIL_TEST):We(s.STENCIL_TEST))},setMask:function(zt){Ie!==zt&&!W&&(s.stencilMask(zt),Ie=zt)},setFunc:function(zt,ni,mi){(ge!==zt||Xe!==ni||Ye!==mi)&&(s.stencilFunc(zt,ni,mi),ge=zt,Xe=ni,Ye=mi)},setOp:function(zt,ni,mi){(Se!==zt||ut!==ni||it!==mi)&&(s.stencilOp(zt,ni,mi),Se=zt,ut=ni,it=mi)},setLocked:function(zt){W=zt},setClear:function(zt){tn!==zt&&(s.clearStencil(zt),tn=zt)},reset:function(){W=!1,Ie=null,ge=null,Xe=null,Ye=null,Se=null,ut=null,it=null,tn=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,p=[],v=null,g=!1,m=null,w=null,R=null,x=null,b=null,T=null,L=null,_=new nt(0,0,0),C=0,D=!1,O=null,V=null,$=null,H=null,j=null;const ie=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,we=0;const re=s.getParameter(s.VERSION);re.indexOf("WebGL")!==-1?(we=parseFloat(/^WebGL (\d)/.exec(re)[1]),ne=we>=1):re.indexOf("OpenGL ES")!==-1&&(we=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ne=we>=2);let le=null,ye={};const Qe=s.getParameter(s.SCISSOR_BOX),$e=s.getParameter(s.VIEWPORT),At=new yn().fromArray(Qe),Tt=new yn().fromArray($e);function Bt(W,Ie,ge,Xe){const Ye=new Uint8Array(4),Se=s.createTexture();s.bindTexture(W,Se),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ut=0;ut<ge;ut++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ie,0,s.RGBA,1,1,Xe,0,s.RGBA,s.UNSIGNED_BYTE,Ye):s.texImage2D(Ie+ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ye);return Se}const oe={};oe[s.TEXTURE_2D]=Bt(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=Bt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=Bt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=Bt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),_e(s.DEPTH_TEST),o.setFunc(Ko),Ce(!1),Oe(Zh),_e(s.CULL_FACE),Ee(Ps);function _e(W){u[W]!==!0&&(s.enable(W),u[W]=!0)}function We(W){u[W]!==!1&&(s.disable(W),u[W]=!1)}function lt(W,Ie){return h[W]!==Ie?(s.bindFramebuffer(W,Ie),h[W]=Ie,W===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Ie),W===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Ie),!0):!1}function qe(W,Ie){let ge=p,Xe=!1;if(W){ge=f.get(Ie),ge===void 0&&(ge=[],f.set(Ie,ge));const Ye=W.textures;if(ge.length!==Ye.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,ut=Ye.length;Se<ut;Se++)ge[Se]=s.COLOR_ATTACHMENT0+Se;ge.length=Ye.length,Xe=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Xe=!0);Xe&&s.drawBuffers(ge)}function xt(W){return v!==W?(s.useProgram(W),v=W,!0):!1}const Yt={[Kr]:s.FUNC_ADD,[d0]:s.FUNC_SUBTRACT,[f0]:s.FUNC_REVERSE_SUBTRACT};Yt[p0]=s.MIN,Yt[m0]=s.MAX;const ve={[g0]:s.ZERO,[x0]:s.ONE,[_0]:s.SRC_COLOR,[jf]:s.SRC_ALPHA,[w0]:s.SRC_ALPHA_SATURATE,[S0]:s.DST_COLOR,[y0]:s.DST_ALPHA,[v0]:s.ONE_MINUS_SRC_COLOR,[$f]:s.ONE_MINUS_SRC_ALPHA,[b0]:s.ONE_MINUS_DST_COLOR,[M0]:s.ONE_MINUS_DST_ALPHA,[T0]:s.CONSTANT_COLOR,[E0]:s.ONE_MINUS_CONSTANT_COLOR,[A0]:s.CONSTANT_ALPHA,[R0]:s.ONE_MINUS_CONSTANT_ALPHA};function Ee(W,Ie,ge,Xe,Ye,Se,ut,it,tn,zt){if(W===Ps){g===!0&&(We(s.BLEND),g=!1);return}if(g===!1&&(_e(s.BLEND),g=!0),W!==h0){if(W!==m||zt!==D){if((w!==Kr||b!==Kr)&&(s.blendEquation(s.FUNC_ADD),w=Kr,b=Kr),zt)switch(W){case Vo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jh:s.blendFunc(s.ONE,s.ONE);break;case Qh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ed:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Dt("WebGLState: Invalid blending: ",W);break}else switch(W){case Vo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qh:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ed:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",W);break}R=null,x=null,T=null,L=null,_.set(0,0,0),C=0,m=W,D=zt}return}Ye=Ye||Ie,Se=Se||ge,ut=ut||Xe,(Ie!==w||Ye!==b)&&(s.blendEquationSeparate(Yt[Ie],Yt[Ye]),w=Ie,b=Ye),(ge!==R||Xe!==x||Se!==T||ut!==L)&&(s.blendFuncSeparate(ve[ge],ve[Xe],ve[Se],ve[ut]),R=ge,x=Xe,T=Se,L=ut),(it.equals(_)===!1||tn!==C)&&(s.blendColor(it.r,it.g,it.b,tn),_.copy(it),C=tn),m=W,D=!1}function Re(W,Ie){W.side===Ti?We(s.CULL_FACE):_e(s.CULL_FACE);let ge=W.side===pi;Ie&&(ge=!ge),Ce(ge),W.blending===Vo&&W.transparent===!1?Ee(Ps):Ee(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const Xe=W.stencilWrite;a.setTest(Xe),Xe&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),at(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):We(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(W){O!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),O=W)}function Oe(W){W!==l0?(_e(s.CULL_FACE),W!==V&&(W===Zh?s.cullFace(s.BACK):W===u0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):We(s.CULL_FACE),V=W}function mt(W){W!==$&&(ne&&s.lineWidth(W),$=W)}function at(W,Ie,ge){W?(_e(s.POLYGON_OFFSET_FILL),(H!==Ie||j!==ge)&&(H=Ie,j=ge,o.getReversed()&&(Ie=-Ie),s.polygonOffset(Ie,ge))):We(s.POLYGON_OFFSET_FILL)}function yt(W){W?_e(s.SCISSOR_TEST):We(s.SCISSOR_TEST)}function ee(W){W===void 0&&(W=s.TEXTURE0+ie-1),le!==W&&(s.activeTexture(W),le=W)}function N(W,Ie,ge){ge===void 0&&(le===null?ge=s.TEXTURE0+ie-1:ge=le);let Xe=ye[ge];Xe===void 0&&(Xe={type:void 0,texture:void 0},ye[ge]=Xe),(Xe.type!==W||Xe.texture!==Ie)&&(le!==ge&&(s.activeTexture(ge),le=ge),s.bindTexture(W,Ie||oe[W]),Xe.type=W,Xe.texture=Ie)}function ft(){const W=ye[le];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function St(){try{s.compressedTexImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function y(){try{s.texSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function X(){try{s.texSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Q(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ce(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Le(){try{s.texStorage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Be(){try{s.texStorage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function de(){try{s.texImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ue(){try{s.texImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Te(W){return d[W]!==void 0?d[W]:s.getParameter(W)}function ot(W,Ie){d[W]!==Ie&&(s.pixelStorei(W,Ie),d[W]=Ie)}function Ve(W){At.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),At.copy(W))}function Ne(W){Tt.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Tt.copy(W))}function rt(W,Ie){let ge=l.get(Ie);ge===void 0&&(ge=new WeakMap,l.set(Ie,ge));let Xe=ge.get(W);Xe===void 0&&(Xe=s.getUniformBlockIndex(Ie,W.name),ge.set(W,Xe))}function gt(W,Ie){const Xe=l.get(Ie).get(W);c.get(Ie)!==Xe&&(s.uniformBlockBinding(Ie,Xe,W.__bindingPointIndex),c.set(Ie,Xe))}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},d={},le=null,ye={},h={},f=new WeakMap,p=[],v=null,g=!1,m=null,w=null,R=null,x=null,b=null,T=null,L=null,_=new nt(0,0,0),C=0,D=!1,O=null,V=null,$=null,H=null,j=null,At.set(0,0,s.canvas.width,s.canvas.height),Tt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:_e,disable:We,bindFramebuffer:lt,drawBuffers:qe,useProgram:xt,setBlending:Ee,setMaterial:Re,setFlipSided:Ce,setCullFace:Oe,setLineWidth:mt,setPolygonOffset:at,setScissorTest:yt,activeTexture:ee,bindTexture:N,unbindTexture:ft,compressedTexImage2D:St,compressedTexImage3D:I,texImage2D:de,texImage3D:ue,pixelStorei:ot,getParameter:Te,updateUBOMapping:rt,uniformBlockBinding:gt,texStorage2D:Le,texStorage3D:Be,texSubImage2D:y,texSubImage3D:X,compressedTexSubImage2D:Q,compressedTexSubImage3D:ce,scissor:Ve,viewport:Ne,reset:dt}}function VS(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,y){return p?new OffscreenCanvas(I,y):ea("canvas")}function g(I,y,X){let Q=1;const ce=St(I);if((ce.width>X||ce.height>X)&&(Q=X/Math.max(ce.width,ce.height)),Q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Le=Math.floor(Q*ce.width),Be=Math.floor(Q*ce.height);h===void 0&&(h=v(Le,Be));const de=y?v(Le,Be):h;return de.width=Le,de.height=Be,de.getContext("2d").drawImage(I,0,0,Le,Be),vt("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Le+"x"+Be+")."),de}else return"data"in I&&vt("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),I;return I}function m(I){return I.generateMipmaps}function w(I){s.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(I,y,X,Q,ce,Le=!1){if(I!==null){if(s[I]!==void 0)return s[I];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Be;Q&&(Be=e.get("EXT_texture_norm16"),Be||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=y;if(y===s.RED&&(X===s.FLOAT&&(de=s.R32F),X===s.HALF_FLOAT&&(de=s.R16F),X===s.UNSIGNED_BYTE&&(de=s.R8),X===s.UNSIGNED_SHORT&&Be&&(de=Be.R16_EXT),X===s.SHORT&&Be&&(de=Be.R16_SNORM_EXT)),y===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(de=s.R8UI),X===s.UNSIGNED_SHORT&&(de=s.R16UI),X===s.UNSIGNED_INT&&(de=s.R32UI),X===s.BYTE&&(de=s.R8I),X===s.SHORT&&(de=s.R16I),X===s.INT&&(de=s.R32I)),y===s.RG&&(X===s.FLOAT&&(de=s.RG32F),X===s.HALF_FLOAT&&(de=s.RG16F),X===s.UNSIGNED_BYTE&&(de=s.RG8),X===s.UNSIGNED_SHORT&&Be&&(de=Be.RG16_EXT),X===s.SHORT&&Be&&(de=Be.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(de=s.RG8UI),X===s.UNSIGNED_SHORT&&(de=s.RG16UI),X===s.UNSIGNED_INT&&(de=s.RG32UI),X===s.BYTE&&(de=s.RG8I),X===s.SHORT&&(de=s.RG16I),X===s.INT&&(de=s.RG32I)),y===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(de=s.RGB8UI),X===s.UNSIGNED_SHORT&&(de=s.RGB16UI),X===s.UNSIGNED_INT&&(de=s.RGB32UI),X===s.BYTE&&(de=s.RGB8I),X===s.SHORT&&(de=s.RGB16I),X===s.INT&&(de=s.RGB32I)),y===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),X===s.UNSIGNED_INT&&(de=s.RGBA32UI),X===s.BYTE&&(de=s.RGBA8I),X===s.SHORT&&(de=s.RGBA16I),X===s.INT&&(de=s.RGBA32I)),y===s.RGB&&(X===s.UNSIGNED_SHORT&&Be&&(de=Be.RGB16_EXT),X===s.SHORT&&Be&&(de=Be.RGB16_SNORM_EXT),X===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),y===s.RGBA){const ue=Le?Mc:Kt.getTransfer(ce);X===s.FLOAT&&(de=s.RGBA32F),X===s.HALF_FLOAT&&(de=s.RGBA16F),X===s.UNSIGNED_BYTE&&(de=ue===gn?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT&&Be&&(de=Be.RGBA16_EXT),X===s.SHORT&&Be&&(de=Be.RGBA16_SNORM_EXT),X===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function b(I,y){let X;return I?y===null||y===ds||y===$o?X=s.DEPTH24_STENCIL8:y===Ni?X=s.DEPTH32F_STENCIL8:y===jo&&(X=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ds||y===$o?X=s.DEPTH_COMPONENT24:y===Ni?X=s.DEPTH_COMPONENT32F:y===jo&&(X=s.DEPTH_COMPONENT16),X}function T(I,y){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==jn&&I.minFilter!==$n?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function L(I){const y=I.target;y.removeEventListener("dispose",L),C(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&d.delete(y)}function _(I){const y=I.target;y.removeEventListener("dispose",_),O(y)}function C(I){const y=n.get(I);if(y.__webglInit===void 0)return;const X=I.source,Q=f.get(X);if(Q){const ce=Q[y.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&D(I),Object.keys(Q).length===0&&f.delete(X)}n.remove(I)}function D(I){const y=n.get(I);s.deleteTexture(y.__webglTexture);const X=I.source,Q=f.get(X);delete Q[y.__cacheKey],o.memory.textures--}function O(I){const y=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let ce=0;ce<y.__webglFramebuffer[Q].length;ce++)s.deleteFramebuffer(y.__webglFramebuffer[Q][ce]);else s.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)s.deleteFramebuffer(y.__webglFramebuffer[Q]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const X=I.textures;for(let Q=0,ce=X.length;Q<ce;Q++){const Le=n.get(X[Q]);Le.__webglTexture&&(s.deleteTexture(Le.__webglTexture),o.memory.textures--),n.remove(X[Q])}n.remove(I)}let V=0;function $(){V=0}function H(){return V}function j(I){V=I}function ie(){const I=V;return I>=i.maxTextures&&vt("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+i.maxTextures),V+=1,I}function ne(I){const y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function we(I,y){const X=n.get(I);if(I.isVideoTexture&&N(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){const Q=I.image;if(Q===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{We(X,I,y);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+y)}function re(I,y){const X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){We(X,I,y);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+y)}function le(I,y){const X=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){We(X,I,y);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+y)}function ye(I,y){const X=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&X.__version!==I.version){lt(X,I,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+y)}const Qe={[Zs]:s.REPEAT,[as]:s.CLAMP_TO_EDGE,[_c]:s.MIRRORED_REPEAT},$e={[jn]:s.NEAREST,[rp]:s.NEAREST_MIPMAP_NEAREST,[Bo]:s.NEAREST_MIPMAP_LINEAR,[$n]:s.LINEAR,[lc]:s.LINEAR_MIPMAP_NEAREST,[Rs]:s.LINEAR_MIPMAP_LINEAR},At={[O0]:s.NEVER,[V0]:s.ALWAYS,[B0]:s.LESS,[eh]:s.LEQUAL,[z0]:s.EQUAL,[th]:s.GEQUAL,[k0]:s.GREATER,[H0]:s.NOTEQUAL};function Tt(I,y){if(y.type===Ni&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===$n||y.magFilter===lc||y.magFilter===Bo||y.magFilter===Rs||y.minFilter===$n||y.minFilter===lc||y.minFilter===Bo||y.minFilter===Rs)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Qe[y.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Qe[y.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Qe[y.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,$e[y.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,$e[y.minFilter]),y.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,At[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===jn||y.minFilter!==Bo&&y.minFilter!==Rs||y.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Bt(I,y){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",L));const Q=y.source;let ce=f.get(Q);ce===void 0&&(ce={},f.set(Q,ce));const Le=ne(y);if(Le!==I.__cacheKey){ce[Le]===void 0&&(ce[Le]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ce[Le].usedTimes++;const Be=ce[I.__cacheKey];Be!==void 0&&(ce[I.__cacheKey].usedTimes--,Be.usedTimes===0&&D(y)),I.__cacheKey=Le,I.__webglTexture=ce[Le].texture}return X}function oe(I,y,X){return Math.floor(Math.floor(I/X)/y)}function _e(I,y,X,Q){const Le=I.updateRanges;if(Le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,X,Q,y.data);else{Le.sort((ot,Ve)=>ot.start-Ve.start);let Be=0;for(let ot=1;ot<Le.length;ot++){const Ve=Le[Be],Ne=Le[ot],rt=Ve.start+Ve.count,gt=oe(Ne.start,y.width,4),dt=oe(Ve.start,y.width,4);Ne.start<=rt+1&&gt===dt&&oe(Ne.start+Ne.count-1,y.width,4)===gt?Ve.count=Math.max(Ve.count,Ne.start+Ne.count-Ve.start):(++Be,Le[Be]=Ne)}Le.length=Be+1;const de=t.getParameter(s.UNPACK_ROW_LENGTH),ue=t.getParameter(s.UNPACK_SKIP_PIXELS),Te=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let ot=0,Ve=Le.length;ot<Ve;ot++){const Ne=Le[ot],rt=Math.floor(Ne.start/4),gt=Math.ceil(Ne.count/4),dt=rt%y.width,W=Math.floor(rt/y.width),Ie=gt,ge=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,dt),t.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,dt,W,Ie,ge,X,Q,y.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,de),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ue),t.pixelStorei(s.UNPACK_SKIP_ROWS,Te)}}function We(I,y,X){let Q=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=s.TEXTURE_3D);const ce=Bt(I,y),Le=y.source;t.bindTexture(Q,I.__webglTexture,s.TEXTURE0+X);const Be=n.get(Le);if(Le.version!==Be.__version||ce===!0){if(t.activeTexture(s.TEXTURE0+X),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ge=Kt.getPrimaries(Kt.workingColorSpace),Xe=y.colorSpace===qs?null:Kt.getPrimaries(y.colorSpace),Ye=y.colorSpace===qs||ge===Xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let ue=g(y.image,!1,i.maxTextureSize);ue=ft(y,ue);const Te=r.convert(y.format,y.colorSpace),ot=r.convert(y.type);let Ve=x(y.internalFormat,Te,ot,y.normalized,y.colorSpace,y.isVideoTexture);Tt(Q,y);let Ne;const rt=y.mipmaps,gt=y.isVideoTexture!==!0,dt=Be.__version===void 0||ce===!0,W=Le.dataReady,Ie=T(y,ue);if(y.isDepthTexture)Ve=b(y.format===gr,y.type),dt&&(gt?t.texStorage2D(s.TEXTURE_2D,1,Ve,ue.width,ue.height):t.texImage2D(s.TEXTURE_2D,0,Ve,ue.width,ue.height,0,Te,ot,null));else if(y.isDataTexture)if(rt.length>0){gt&&dt&&t.texStorage2D(s.TEXTURE_2D,Ie,Ve,rt[0].width,rt[0].height);for(let ge=0,Xe=rt.length;ge<Xe;ge++)Ne=rt[ge],gt?W&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Ne.width,Ne.height,Te,ot,Ne.data):t.texImage2D(s.TEXTURE_2D,ge,Ve,Ne.width,Ne.height,0,Te,ot,Ne.data);y.generateMipmaps=!1}else gt?(dt&&t.texStorage2D(s.TEXTURE_2D,Ie,Ve,ue.width,ue.height),W&&_e(y,ue,Te,ot)):t.texImage2D(s.TEXTURE_2D,0,Ve,ue.width,ue.height,0,Te,ot,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){gt&&dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ve,rt[0].width,rt[0].height,ue.depth);for(let ge=0,Xe=rt.length;ge<Xe;ge++)if(Ne=rt[ge],y.format!==Di)if(Te!==null)if(gt){if(W)if(y.layerUpdates.size>0){const Ye=Jd(Ne.width,Ne.height,y.format,y.type);for(const Se of y.layerUpdates){const ut=Ne.data.subarray(Se*Ye/Ne.data.BYTES_PER_ELEMENT,(Se+1)*Ye/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,Se,Ne.width,Ne.height,1,Te,ut)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Ne.width,Ne.height,ue.depth,Te,Ne.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Ve,Ne.width,Ne.height,ue.depth,0,Ne.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Ne.width,Ne.height,ue.depth,Te,ot,Ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ge,Ve,Ne.width,Ne.height,ue.depth,0,Te,ot,Ne.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{gt&&dt&&t.texStorage2D(s.TEXTURE_2D,Ie,Ve,rt[0].width,rt[0].height);for(let ge=0,Xe=rt.length;ge<Xe;ge++)Ne=rt[ge],y.format!==Di?Te!==null?gt?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Ne.width,Ne.height,Te,Ne.data):t.compressedTexImage2D(s.TEXTURE_2D,ge,Ve,Ne.width,Ne.height,0,Ne.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?W&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Ne.width,Ne.height,Te,ot,Ne.data):t.texImage2D(s.TEXTURE_2D,ge,Ve,Ne.width,Ne.height,0,Te,ot,Ne.data)}else if(y.isDataArrayTexture)if(gt){if(dt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ve,ue.width,ue.height,ue.depth),W)if(y.layerUpdates.size>0){const ge=Jd(ue.width,ue.height,y.format,y.type);for(const Xe of y.layerUpdates){const Ye=ue.data.subarray(Xe*ge/ue.data.BYTES_PER_ELEMENT,(Xe+1)*ge/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Xe,ue.width,ue.height,1,Te,ot,Ye)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Te,ot,ue.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ve,ue.width,ue.height,ue.depth,0,Te,ot,ue.data);else if(y.isData3DTexture)gt?(dt&&t.texStorage3D(s.TEXTURE_3D,Ie,Ve,ue.width,ue.height,ue.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Te,ot,ue.data)):t.texImage3D(s.TEXTURE_3D,0,Ve,ue.width,ue.height,ue.depth,0,Te,ot,ue.data);else if(y.isFramebufferTexture){if(dt)if(gt)t.texStorage2D(s.TEXTURE_2D,Ie,Ve,ue.width,ue.height);else{let ge=ue.width,Xe=ue.height;for(let Ye=0;Ye<Ie;Ye++)t.texImage2D(s.TEXTURE_2D,Ye,Ve,ge,Xe,0,Te,ot,null),ge>>=1,Xe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),ue.parentNode!==ge){ge.appendChild(ue),d.add(y),ge.onpaint=Xe=>{const Ye=Xe.changedElements;for(const Se of d)Ye.includes(Se.image)&&(Se.needsUpdate=!0)},ge.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ue);else{const Ye=s.RGBA,Se=s.RGBA,ut=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ye,Se,ut,ue)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(rt.length>0){if(gt&&dt){const ge=St(rt[0]);t.texStorage2D(s.TEXTURE_2D,Ie,Ve,ge.width,ge.height)}for(let ge=0,Xe=rt.length;ge<Xe;ge++)Ne=rt[ge],gt?W&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Te,ot,Ne):t.texImage2D(s.TEXTURE_2D,ge,Ve,Te,ot,Ne);y.generateMipmaps=!1}else if(gt){if(dt){const ge=St(ue);t.texStorage2D(s.TEXTURE_2D,Ie,Ve,ge.width,ge.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Te,ot,ue)}else t.texImage2D(s.TEXTURE_2D,0,Ve,Te,ot,ue);m(y)&&w(Q),Be.__version=Le.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function lt(I,y,X){if(y.image.length!==6)return;const Q=Bt(I,y),ce=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+X);const Le=n.get(ce);if(ce.version!==Le.__version||Q===!0){t.activeTexture(s.TEXTURE0+X);const Be=Kt.getPrimaries(Kt.workingColorSpace),de=y.colorSpace===qs?null:Kt.getPrimaries(y.colorSpace),ue=y.colorSpace===qs||Be===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Te=y.isCompressedTexture||y.image[0].isCompressedTexture,ot=y.image[0]&&y.image[0].isDataTexture,Ve=[];for(let Se=0;Se<6;Se++)!Te&&!ot?Ve[Se]=g(y.image[Se],!0,i.maxCubemapSize):Ve[Se]=ot?y.image[Se].image:y.image[Se],Ve[Se]=ft(y,Ve[Se]);const Ne=Ve[0],rt=r.convert(y.format,y.colorSpace),gt=r.convert(y.type),dt=x(y.internalFormat,rt,gt,y.normalized,y.colorSpace),W=y.isVideoTexture!==!0,Ie=Le.__version===void 0||Q===!0,ge=ce.dataReady;let Xe=T(y,Ne);Tt(s.TEXTURE_CUBE_MAP,y);let Ye;if(Te){W&&Ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,dt,Ne.width,Ne.height);for(let Se=0;Se<6;Se++){Ye=Ve[Se].mipmaps;for(let ut=0;ut<Ye.length;ut++){const it=Ye[ut];y.format!==Di?rt!==null?W?ge&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut,0,0,it.width,it.height,rt,it.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut,dt,it.width,it.height,0,it.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut,0,0,it.width,it.height,rt,gt,it.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut,dt,it.width,it.height,0,rt,gt,it.data)}}}else{if(Ye=y.mipmaps,W&&Ie){Ye.length>0&&Xe++;const Se=St(Ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Xe,dt,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(ot){W?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ve[Se].width,Ve[Se].height,rt,gt,Ve[Se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,dt,Ve[Se].width,Ve[Se].height,0,rt,gt,Ve[Se].data);for(let ut=0;ut<Ye.length;ut++){const tn=Ye[ut].image[Se].image;W?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut+1,0,0,tn.width,tn.height,rt,gt,tn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut+1,dt,tn.width,tn.height,0,rt,gt,tn.data)}}else{W?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,rt,gt,Ve[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,dt,rt,gt,Ve[Se]);for(let ut=0;ut<Ye.length;ut++){const it=Ye[ut];W?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut+1,0,0,rt,gt,it.image[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ut+1,dt,rt,gt,it.image[Se])}}}m(y)&&w(s.TEXTURE_CUBE_MAP),Le.__version=ce.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function qe(I,y,X,Q,ce,Le){const Be=r.convert(X.format,X.colorSpace),de=r.convert(X.type),ue=x(X.internalFormat,Be,de,X.normalized,X.colorSpace),Te=n.get(y),ot=n.get(X);if(ot.__renderTarget=y,!Te.__hasExternalTextures){const Ve=Math.max(1,y.width>>Le),Ne=Math.max(1,y.height>>Le);ce===s.TEXTURE_3D||ce===s.TEXTURE_2D_ARRAY?t.texImage3D(ce,Le,ue,Ve,Ne,y.depth,0,Be,de,null):t.texImage2D(ce,Le,ue,Ve,Ne,0,Be,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),ee(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,ce,ot.__webglTexture,0,yt(y)):(ce===s.TEXTURE_2D||ce>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,ce,ot.__webglTexture,Le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xt(I,y,X){if(s.bindRenderbuffer(s.RENDERBUFFER,I),y.depthBuffer){const Q=y.depthTexture,ce=Q&&Q.isDepthTexture?Q.type:null,Le=b(y.stencilBuffer,ce),Be=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ee(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt(y),Le,y.width,y.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt(y),Le,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Le,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Be,s.RENDERBUFFER,I)}else{const Q=y.textures;for(let ce=0;ce<Q.length;ce++){const Le=Q[ce],Be=r.convert(Le.format,Le.colorSpace),de=r.convert(Le.type),ue=x(Le.internalFormat,Be,de,Le.normalized,Le.colorSpace);ee(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt(y),ue,y.width,y.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt(y),ue,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ue,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Yt(I,y,X){const Q=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ce=n.get(y.depthTexture);if(ce.__renderTarget=y,(!ce.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,y.depthTexture.addEventListener("dispose",L)),ce.__webglTexture===void 0){ce.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,y.depthTexture);const Te=r.convert(y.depthTexture.format),ot=r.convert(y.depthTexture.type);let Ve;y.depthTexture.format===Is?Ve=s.DEPTH_COMPONENT24:y.depthTexture.format===gr&&(Ve=s.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ve,y.width,y.height,0,Te,ot,null)}}else we(y.depthTexture,0);const Le=ce.__webglTexture,Be=yt(y),de=Q?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,ue=y.depthTexture.format===gr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Is)ee(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,de,Le,0,Be):s.framebufferTexture2D(s.FRAMEBUFFER,ue,de,Le,0);else if(y.depthTexture.format===gr)ee(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,de,Le,0,Be):s.framebufferTexture2D(s.FRAMEBUFFER,ue,de,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ve(I){const y=n.get(I),X=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){const Q=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const ce=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",ce)};Q.addEventListener("dispose",ce),y.__depthDisposeCallback=ce}y.__boundDepthTexture=Q}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(X)for(let Q=0;Q<6;Q++)Yt(y.__webglFramebuffer[Q],I,Q);else{const Q=I.texture.mipmaps;Q&&Q.length>0?Yt(y.__webglFramebuffer[0],I,0):Yt(y.__webglFramebuffer,I,0)}else if(X){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=s.createRenderbuffer(),xt(y.__webglDepthbuffer[Q],I,!1);else{const ce=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=y.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,Le)}}else{const Q=I.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),xt(y.__webglDepthbuffer,I,!1);else{const ce=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,ce,s.RENDERBUFFER,Le)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(I,y,X){const Q=n.get(I);y!==void 0&&qe(Q.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&ve(I)}function Re(I){const y=I.texture,X=n.get(I),Q=n.get(y);I.addEventListener("dispose",_);const ce=I.textures,Le=I.isWebGLCubeRenderTarget===!0,Be=ce.length>1;if(Be||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=y.version,o.memory.textures++),Le){X.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[de]=[];for(let ue=0;ue<y.mipmaps.length;ue++)X.__webglFramebuffer[de][ue]=s.createFramebuffer()}else X.__webglFramebuffer[de]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)X.__webglFramebuffer[de]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Be)for(let de=0,ue=ce.length;de<ue;de++){const Te=n.get(ce[de]);Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture(),o.memory.textures++)}if(I.samples>0&&ee(I)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let de=0;de<ce.length;de++){const ue=ce[de];X.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[de]);const Te=r.convert(ue.format,ue.colorSpace),ot=r.convert(ue.type),Ve=x(ue.internalFormat,Te,ot,ue.normalized,ue.colorSpace,I.isXRRenderTarget===!0),Ne=yt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,Ve,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,X.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),xt(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Le){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Tt(s.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)qe(X.__webglFramebuffer[de][ue],I,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ue);else qe(X.__webglFramebuffer[de],I,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(y)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let de=0,ue=ce.length;de<ue;de++){const Te=ce[de],ot=n.get(Te);let Ve=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ve=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ve,ot.__webglTexture),Tt(Ve,Te),qe(X.__webglFramebuffer,I,Te,s.COLOR_ATTACHMENT0+de,Ve,0),m(Te)&&w(Ve)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(de=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,Q.__webglTexture),Tt(de,y),y.mipmaps&&y.mipmaps.length>0)for(let ue=0;ue<y.mipmaps.length;ue++)qe(X.__webglFramebuffer[ue],I,y,s.COLOR_ATTACHMENT0,de,ue);else qe(X.__webglFramebuffer,I,y,s.COLOR_ATTACHMENT0,de,0);m(y)&&w(de),t.unbindTexture()}I.depthBuffer&&ve(I)}function Ce(I){const y=I.textures;for(let X=0,Q=y.length;X<Q;X++){const ce=y[X];if(m(ce)){const Le=R(I),Be=n.get(ce).__webglTexture;t.bindTexture(Le,Be),w(Le),t.unbindTexture()}}}const Oe=[],mt=[];function at(I){if(I.samples>0){if(ee(I)===!1){const y=I.textures,X=I.width,Q=I.height;let ce=s.COLOR_BUFFER_BIT;const Le=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=n.get(I),de=y.length>1;if(de)for(let Te=0;Te<y.length;Te++)t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const ue=I.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Te=0;Te<y.length;Te++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ce|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ce|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Te]);const ot=n.get(y[Te]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ot,0)}s.blitFramebuffer(0,0,X,Q,0,0,X,Q,ce,s.NEAREST),c===!0&&(Oe.length=0,mt.length=0,Oe.push(s.COLOR_ATTACHMENT0+Te),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Oe.push(Le),mt.push(Le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,mt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let Te=0;Te<y.length;Te++){t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,Be.__webglColorRenderbuffer[Te]);const ot=n.get(y[Te]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.TEXTURE_2D,ot,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){const y=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function yt(I){return Math.min(i.maxSamples,I.samples)}function ee(I){const y=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function N(I){const y=o.render.frame;u.get(I)!==y&&(u.set(I,y),I.update())}function ft(I,y){const X=I.colorSpace,Q=I.format,ce=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==Mi&&X!==qs&&(Kt.getTransfer(X)===gn?(Q!==Di||ce!==Ei)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",X)),y}function St(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=ie,this.resetTextureUnits=$,this.getTextureUnits=H,this.setTextureUnits=j,this.setTexture2D=we,this.setTexture2DArray=re,this.setTexture3D=le,this.setTextureCube=ye,this.rebindTextures=Ee,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=qe,this.useMultisampledRTT=ee,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function GS(s,e){function t(n,i=qs){let r;const o=Kt.getTransfer(i);if(n===Ei)return s.UNSIGNED_BYTE;if(n===Ku)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ju)return s.UNSIGNED_SHORT_5_5_5_1;if(n===cp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===lp)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===op)return s.BYTE;if(n===ap)return s.SHORT;if(n===jo)return s.UNSIGNED_SHORT;if(n===Yu)return s.INT;if(n===ds)return s.UNSIGNED_INT;if(n===Ni)return s.FLOAT;if(n===fs)return s.HALF_FLOAT;if(n===up)return s.ALPHA;if(n===hp)return s.RGB;if(n===Di)return s.RGBA;if(n===Is)return s.DEPTH_COMPONENT;if(n===gr)return s.DEPTH_STENCIL;if(n===$u)return s.RED;if(n===Zu)return s.RED_INTEGER;if(n===Mr)return s.RG;if(n===Ju)return s.RG_INTEGER;if(n===Qu)return s.RGBA_INTEGER;if(n===uc||n===hc||n===dc||n===fc)if(o===gn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===uc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===uc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jl||n===Ql||n===eu||n===tu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nu||n===iu||n===su||n===ru||n===ou||n===vc||n===au)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nu||n===iu)return o===gn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===su)return o===gn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ru)return r.COMPRESSED_R11_EAC;if(n===ou)return r.COMPRESSED_SIGNED_R11_EAC;if(n===vc)return r.COMPRESSED_RG11_EAC;if(n===au)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===cu||n===lu||n===uu||n===hu||n===du||n===fu||n===pu||n===mu||n===gu||n===xu||n===_u||n===vu||n===yu||n===Mu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cu)return o===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lu)return o===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uu)return o===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hu)return o===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===du)return o===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fu)return o===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pu)return o===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mu)return o===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gu)return o===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xu)return o===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_u)return o===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vu)return o===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yu)return o===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mu)return o===gn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Su||n===bu||n===wu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Su)return o===gn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tu||n===Eu||n===yc||n===Au)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Tu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Eu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Au)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$o?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const WS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class qS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ep(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ri({vertexShader:WS,fragmentShader:XS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YS extends br{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,p=null;const v=typeof XRWebGLBinding<"u",g=new qS,m={},w=t.getContextAttributes();let R=null,x=null;const b=[],T=[],L=new Ge;let _=null,C=null;const D=new fi;D.viewport=new yn;const O=new fi;O.viewport=new yn;const V=[D,O],$=new qx;let H=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let _e=b[oe];return _e===void 0&&(_e=new ul,b[oe]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(oe){let _e=b[oe];return _e===void 0&&(_e=new ul,b[oe]=_e),_e.getGripSpace()},this.getHand=function(oe){let _e=b[oe];return _e===void 0&&(_e=new ul,b[oe]=_e),_e.getHandSpace()};function ie(oe){const _e=T.indexOf(oe.inputSource);if(_e===-1)return;const We=b[_e];We!==void 0&&(We.update(oe.inputSource,oe.frame,l||o),We.dispatchEvent({type:oe.type,data:oe.inputSource}))}function ne(){i.removeEventListener("select",ie),i.removeEventListener("selectstart",ie),i.removeEventListener("selectend",ie),i.removeEventListener("squeeze",ie),i.removeEventListener("squeezestart",ie),i.removeEventListener("squeezeend",ie),i.removeEventListener("end",ne),i.removeEventListener("inputsourceschange",we);for(let oe=0;oe<b.length;oe++){const _e=T[oe];_e!==null&&(T[oe]=null,b[oe].disconnect(_e))}H=null,j=null,g.reset();for(const oe in m)delete m[oe];if(e.setRenderTarget(R),f=null,h=null,d=null,i=null,x=null,Bt.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(L.width,L.height,!1),C!==null){const oe=C.camera;oe.fov=C.fov,oe.zoom=C.zoom,oe.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){r=oe,n.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){a=oe,n.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(oe){l=oe},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(oe){if(i=oe,i!==null){if(R=e.getRenderTarget(),i.addEventListener("select",ie),i.addEventListener("selectstart",ie),i.addEventListener("selectend",ie),i.addEventListener("squeeze",ie),i.addEventListener("squeezestart",ie),i.addEventListener("squeezeend",ie),i.addEventListener("end",ne),i.addEventListener("inputsourceschange",we),w.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let We=null,lt=null,qe=null;w.depth&&(qe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,We=w.stencil?gr:Is,lt=w.stencil?$o:ds);const xt={colorFormat:t.RGBA8,depthFormat:qe,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(xt),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),x=new $i(h.textureWidth,h.textureHeight,{format:Di,type:Ei,depthTexture:new na(h.textureWidth,h.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,We),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const We={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,We),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new $i(f.framebufferWidth,f.framebufferHeight,{format:Di,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Bt.setContext(i),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function we(oe){for(let _e=0;_e<oe.removed.length;_e++){const We=oe.removed[_e],lt=T.indexOf(We);lt>=0&&(T[lt]=null,b[lt].disconnect(We))}for(let _e=0;_e<oe.added.length;_e++){const We=oe.added[_e];let lt=T.indexOf(We);if(lt===-1){for(let xt=0;xt<b.length;xt++)if(xt>=T.length){T.push(We),lt=xt;break}else if(T[xt]===null){T[xt]=We,lt=xt;break}if(lt===-1)break}const qe=b[lt];qe&&qe.connect(We)}}const re=new B,le=new B;function ye(oe,_e,We){re.setFromMatrixPosition(_e.matrixWorld),le.setFromMatrixPosition(We.matrixWorld);const lt=re.distanceTo(le),qe=_e.projectionMatrix.elements,xt=We.projectionMatrix.elements,Yt=qe[14]/(qe[10]-1),ve=qe[14]/(qe[10]+1),Ee=(qe[9]+1)/qe[5],Re=(qe[9]-1)/qe[5],Ce=(qe[8]-1)/qe[0],Oe=(xt[8]+1)/xt[0],mt=Yt*Ce,at=Yt*Oe,yt=lt/(-Ce+Oe),ee=yt*-Ce;if(_e.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(ee),oe.translateZ(yt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),qe[10]===-1)oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const N=Yt+yt,ft=ve+yt,St=mt-ee,I=at+(lt-ee),y=Ee*ve/ft*N,X=Re*ve/ft*N;oe.projectionMatrix.makePerspective(St,I,y,X,N,ft),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function Qe(oe,_e){_e===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(_e.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(i===null)return;let _e=oe.near,We=oe.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(We=g.depthFar)),$.near=O.near=D.near=_e,$.far=O.far=D.far=We,(H!==$.near||j!==$.far)&&(i.updateRenderState({depthNear:$.near,depthFar:$.far}),H=$.near,j=$.far),$.layers.mask=oe.layers.mask|6,D.layers.mask=$.layers.mask&-5,O.layers.mask=$.layers.mask&-3;const lt=oe.parent,qe=$.cameras;Qe($,lt);for(let xt=0;xt<qe.length;xt++)Qe(qe[xt],lt);qe.length===2?ye($,D,O):$.projectionMatrix.copy(D.projectionMatrix),C===null&&oe.isPerspectiveCamera&&(C={camera:oe,fov:oe.fov,zoom:oe.zoom}),$e(oe,$,lt)};function $e(oe,_e,We){We===null?oe.matrix.copy(_e.matrixWorld):(oe.matrix.copy(We.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(_e.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(_e.projectionMatrix),oe.projectionMatrixInverse.copy(_e.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=io*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(oe){c=oe,h!==null&&(h.fixedFoveation=oe),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=oe)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh($)},this.getCameraTexture=function(oe){return m[oe]};let At=null;function Tt(oe,_e){if(u=_e.getViewerPose(l||o),p=_e,u!==null){const We=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let lt=!1;We.length!==$.cameras.length&&($.cameras.length=0,lt=!0);for(let ve=0;ve<We.length;ve++){const Ee=We[ve];let Re=null;if(f!==null)Re=f.getViewport(Ee);else{const Oe=d.getViewSubImage(h,Ee);Re=Oe.viewport,ve===0&&(e.setRenderTargetTextures(x,Oe.colorTexture,Oe.depthStencilTexture),e.setRenderTarget(x))}let Ce=V[ve];Ce===void 0&&(Ce=new fi,Ce.layers.enable(ve),Ce.viewport=new yn,V[ve]=Ce),Ce.matrix.fromArray(Ee.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ee.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Re.x,Re.y,Re.width,Re.height),ve===0&&($.matrix.copy(Ce.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),lt===!0&&$.cameras.push(Ce)}const qe=i.enabledFeatures;if(qe&&qe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const ve=d.getDepthInformation(We[0]);ve&&ve.isValid&&ve.texture&&g.init(ve,i.renderState)}if(qe&&qe.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let ve=0;ve<We.length;ve++){const Ee=We[ve].camera;if(Ee){let Re=m[Ee];Re||(Re=new Ep,m[Ee]=Re);const Ce=d.getCameraImage(Ee);Re.sourceTexture=Ce}}}}for(let We=0;We<b.length;We++){const lt=T[We],qe=b[We];lt!==null&&qe!==void 0&&qe.update(lt,_e,l||o)}At&&At(oe,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),p=null}const Bt=new Gp;Bt.setAnimationLoop(Tt),this.setAnimationLoop=function(oe){At=oe},this.dispose=function(){}}}const KS=new Ft,$p=new Ot;$p.set(-1,0,0,0,1,0,0,0,1);function jS(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Op(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,w,R,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?c(g,m,w,R):m.isSpriteMaterial?l(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===pi&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===pi&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const w=e.get(m),R=w.envMap,x=w.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(KS.makeRotationFromEuler(x)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply($p),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,w,R){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=R*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function l(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pi&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $S(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,b){const T=b.program;n.uniformBlockBinding(x,T)}function l(x,b){let T=i[x.id];T===void 0&&(g(x),T=u(x),i[x.id]=T,x.addEventListener("dispose",w));const L=b.program;n.updateUBOMapping(x,L);const _=e.render.frame;r[x.id]!==_&&(h(x),r[x.id]=_)}function u(x){const b=d();x.__bindingPointIndex=b;const T=s.createBuffer(),L=x.__size,_=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,L,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,T),T}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const b=i[x.id],T=x.uniforms,L=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let _=0,C=T.length;_<C;_++){const D=T[_];if(Array.isArray(D))for(let O=0,V=D.length;O<V;O++)f(D[O],_,O,L);else f(D,_,0,L)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,b,T,L){if(v(x,b,T,L)===!0){const _=x.__offset,C=x.value;if(Array.isArray(C)){let D=0;for(let O=0;O<C.length;O++){const V=C[O],$=m(V);p(V,x.__data,D),typeof V!="number"&&typeof V!="boolean"&&!V.isMatrix3&&!ArrayBuffer.isView(V)&&(D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(C,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,x.__data)}}function p(x,b,T){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,T)}function v(x,b,T,L){const _=x.value,C=b+"_"+T;if(L[C]===void 0)return typeof _=="number"||typeof _=="boolean"?L[C]=_:ArrayBuffer.isView(_)?L[C]=_.slice():L[C]=_.clone(),!0;{const D=L[C];if(typeof _=="number"||typeof _=="boolean"){if(D!==_)return L[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(D.equals(_)===!1)return D.copy(_),!0}}return!1}function g(x){const b=x.uniforms;let T=0;const L=16;for(let C=0,D=b.length;C<D;C++){const O=Array.isArray(b[C])?b[C]:[b[C]];for(let V=0,$=O.length;V<$;V++){const H=O[V],j=Array.isArray(H.value)?H.value:[H.value];for(let ie=0,ne=j.length;ie<ne;ie++){const we=j[ie],re=m(we),le=T%L,ye=le%re.boundary,Qe=le+ye;T+=ye,Qe!==0&&L-Qe<re.storage&&(T+=L-Qe),H.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=re.storage}}}const _=T%L;return _>0&&(T+=L-_),x.__size=T,x.__cache={},this}function m(x){const b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",x),b}function w(x){const b=x.target;b.removeEventListener("dispose",w);const T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function R(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:c,update:l,dispose:R}}const ZS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ns=null;function JS(){return ns===null&&(ns=new rh(ZS,16,16,Mr,fs),ns.name="DFG_LUT",ns.minFilter=$n,ns.magFilter=$n,ns.wrapS=as,ns.wrapT=as,ns.generateMipmaps=!1,ns.needsUpdate=!0),ns}class QS{constructor(e={}){const{canvas:t=X0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Ei}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=f,g=new Set([Qu,Ju,Zu]),m=new Set([Ei,ds,jo,$o,Ku,ju]),w=new Uint32Array(4),R=new Int32Array(4),x=new B;let b=null,T=null;const L=[],_=[];let C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=us,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let O=!1,V=null,$=null,H=null,j=null;this._outputColorSpace=In;let ie=0,ne=0,we=null,re=-1,le=null;const ye=new yn,Qe=new yn;let $e=null;const At=new nt(0);let Tt=0,Bt=t.width,oe=t.height,_e=1,We=null,lt=null;const qe=new yn(0,0,Bt,oe),xt=new yn(0,0,Bt,oe);let Yt=!1;const ve=new ah;let Ee=!1,Re=!1;const Ce=new Ft,Oe=new B,mt=new yn,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function ee(){return we===null?_e:1}let N=n;function ft(E,G){return t.getContext(E,G)}let St,I,y,X,Q,ce,Le,Be,de,ue,Te,ot,Ve,Ne,rt,gt,dt,W,Ie,ge,Xe,Ye,Se;try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xu}`),t.addEventListener("webglcontextlost",tn,!1),t.addEventListener("webglcontextrestored",zt,!1),t.addEventListener("webglcontextcreationerror",ni,!1),N===null){const G="webgl2";if(N=ft(G,E),N===null)throw ft(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ut()}catch(E){throw t.removeEventListener("webglcontextlost",tn,!1),t.removeEventListener("webglcontextrestored",zt,!1),t.removeEventListener("webglcontextcreationerror",ni,!1),Dt("WebGLRenderer: "+E.message),E}function ut(){St=new Jy(N),St.init(),Xe=new GS(N,St),I=new Vy(N,St,e,Xe),y=new HS(N,St),I.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),$=N.createFramebuffer(),H=N.createFramebuffer(),j=N.createFramebuffer(),X=new tM(N),Q=new AS,ce=new VS(N,St,y,Q,I,Xe,X),Le=new Zy(D),Be=new i_(N),Ye=new ky(N,Be),de=new Qy(N,Be,X,Ye),ue=new iM(N,de,Be,Ye,X),W=new nM(N,I,ce),rt=new Gy(Q),Te=new ES(D,Le,St,I,Ye,rt),ot=new jS(D,Q),Ve=new CS,Ne=new US(St),dt=new zy(D,Le,y,ue,p,c),gt=new kS(D,ue,I),Se=new $S(N,X,I,y),Ie=new Hy(N,St,X),ge=new eM(N,St,X),X.programs=Te.programs,D.capabilities=I,D.extensions=St,D.properties=Q,D.renderLists=Ve,D.shadowMap=gt,D.state=y,D.info=X}v!==Ei&&(C=new rM(v,t.width,t.height,a,i,r));const it=new YS(D,N);this.xr=it,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=St.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=St.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(E){E!==void 0&&(_e=E,this.setSize(Bt,oe,!1))},this.getSize=function(E){return E.set(Bt,oe)},this.setSize=function(E,G,te=!0){if(it.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}Bt=E,oe=G,t.width=Math.floor(E*_e),t.height=Math.floor(G*_e),te===!0&&(t.style.width=E+"px",t.style.height=G+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(Bt*_e,oe*_e).floor()},this.setDrawingBufferSize=function(E,G,te){Bt=E,oe=G,_e=te,t.width=Math.floor(E*te),t.height=Math.floor(G*te),this.setViewport(0,0,E,G)},this.setEffects=function(E){if(v===Ei){Dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let G=0;G<E.length;G++)if(E[G].isOutputPass===!0){vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(ye)},this.getViewport=function(E){return E.copy(qe)},this.setViewport=function(E,G,te,K){E.isVector4?qe.set(E.x,E.y,E.z,E.w):qe.set(E,G,te,K),y.viewport(ye.copy(qe).multiplyScalar(_e).round())},this.getScissor=function(E){return E.copy(xt)},this.setScissor=function(E,G,te,K){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,G,te,K),y.scissor(Qe.copy(xt).multiplyScalar(_e).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(E){y.setScissorTest(Yt=E)},this.setOpaqueSort=function(E){We=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(E=!0,G=!0,te=!0){let K=0;if(E){let J=!1;if(we!==null){const Ue=we.texture.format;J=g.has(Ue)}if(J){const Ue=we.texture.type,Je=m.has(Ue),ze=dt.getClearColor(),Ke=dt.getClearAlpha(),tt=ze.r,Et=ze.g,Ct=ze.b;Je?(w[0]=tt,w[1]=Et,w[2]=Ct,w[3]=Ke,N.clearBufferuiv(N.COLOR,0,w)):(R[0]=tt,R[1]=Et,R[2]=Ct,R[3]=Ke,N.clearBufferiv(N.COLOR,0,R))}else K|=N.COLOR_BUFFER_BIT}G&&(K|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),V=E},this.dispose=function(){t.removeEventListener("webglcontextlost",tn,!1),t.removeEventListener("webglcontextrestored",zt,!1),t.removeEventListener("webglcontextcreationerror",ni,!1),dt.dispose(),Ve.dispose(),Ne.dispose(),Q.dispose(),Le.dispose(),ue.dispose(),Ye.dispose(),Se.dispose(),Te.dispose(),it.dispose(),it.removeEventListener("sessionstart",Ci),it.removeEventListener("sessionend",Fn),qn.stop()};function tn(E){E.preventDefault(),Sc("WebGLRenderer: Context Lost."),O=!0}function zt(){Sc("WebGLRenderer: Context Restored."),O=!1;const E=X.autoReset,G=gt.enabled,te=gt.autoUpdate,K=gt.needsUpdate,J=gt.type;ut(),X.autoReset=E,gt.enabled=G,gt.autoUpdate=te,gt.needsUpdate=K,gt.type=J}function ni(E){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function mi(E){const G=E.target;G.removeEventListener("dispose",mi),Mt(G)}function Mt(E){Xn(E),Q.remove(E)}function Xn(E){const G=Q.get(E).programs;G!==void 0&&(G.forEach(function(te){Te.releaseProgram(te)}),E.isShaderMaterial&&Te.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,te,K,J,Ue){G===null&&(G=at);const Je=J.isMesh&&J.matrixWorld.determinantAffine()<0,ze=Dn(E,G,te,K,J);y.setMaterial(K,Je);let Ke=te.index,tt=1;if(K.wireframe===!0){if(Ke=de.getWireframeAttribute(te),Ke===void 0)return;tt=2}const Et=te.drawRange,Ct=te.attributes.position;let et=Et.start*tt,$t=(Et.start+Et.count)*tt;Ue!==null&&(et=Math.max(et,Ue.start*tt),$t=Math.min($t,(Ue.start+Ue.count)*tt)),Ke!==null?(et=Math.max(et,0),$t=Math.min($t,Ke.count)):Ct!=null&&(et=Math.max(et,0),$t=Math.min($t,Ct.count));const fn=$t-et;if(fn<0||fn===1/0)return;Ye.setup(J,K,ze,te,Ke);let on,nn=Ie;if(Ke!==null&&(on=Be.get(Ke),nn=ge,nn.setIndex(on)),J.isMesh)K.wireframe===!0?(y.setLineWidth(K.wireframeLinewidth*ee()),nn.setMode(N.LINES)):nn.setMode(N.TRIANGLES);else if(J.isLine){let Ut=K.linewidth;Ut===void 0&&(Ut=1),y.setLineWidth(Ut*ee()),J.isLineSegments?nn.setMode(N.LINES):J.isLineLoop?nn.setMode(N.LINE_LOOP):nn.setMode(N.LINE_STRIP)}else J.isPoints?nn.setMode(N.POINTS):J.isSprite&&nn.setMode(N.TRIANGLES);if(J.isBatchedMesh)if(St.get("WEBGL_multi_draw"))nn.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Ut=J._multiDrawStarts,Me=J._multiDrawCounts,Vt=J._multiDrawCount,A=Ke?Be.get(Ke).bytesPerElement:1,Z=Q.get(K).currentProgram.getUniforms();for(let q=0;q<Vt;q++)Z.setValue(N,"_gl_DrawID",q),nn.render(Ut[q]/A,Me[q])}else if(J.isInstancedMesh)nn.renderInstances(et,fn,J.count);else if(te.isInstancedBufferGeometry){const Ut=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Me=Math.min(te.instanceCount,Ut);nn.renderInstances(et,fn,Me)}else nn.render(et,fn)};function xs(E,G,te,K){V!==null&&E.isNodeMaterial&&V.setObject(K,E),Ee===!0&&rt.setState(E,te,!1),E.transparent===!0&&E.side===Ti&&E.forceSinglePass===!1?(E.side=pi,E.needsUpdate=!0,On(E,G,K),E.side=$s,E.needsUpdate=!0,On(E,G,K),E.side=Ti):On(E,G,K)}this.compile=function(E,G,te=null){te===null&&(te=E),V!==null&&V.renderStart(E,G,te),T=Ne.get(te),T.init(G),_.push(T),te.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),E!==te&&E.traverseVisible(function(J){J.isLight&&J.layers.test(G.layers)&&(T.pushLight(J),J.castShadow&&T.pushShadow(J))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),Re=this.localClippingEnabled,Ee=rt.init(this.clippingPlanes,Re),Ee===!0&&rt.setGlobalState(this.clippingPlanes,G),V!==null&&gt.render(T.state.shadowsArray,te,G);const K=new Set;return E.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ue=J.material;if(Ue)if(Array.isArray(Ue))for(let Je=0;Je<Ue.length;Je++){const ze=Ue[Je];xs(ze,te,G,J),K.add(ze)}else xs(Ue,te,G,J),K.add(Ue)}),T=_.pop(),V!==null&&V.renderEnd(),K},this.compileAsync=function(E,G,te=null){const K=this.compile(E,G,te);return new Promise(J=>{function Ue(){if(K.forEach(function(Je){const Ke=Q.get(Je).currentProgram;(Ke===void 0||Ke.isReady())&&K.delete(Je)}),K.size===0){J(E);return}setTimeout(Ue,10)}St.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let _s=null;function Js(E){_s&&_s(E)}function Ci(){qn.stop()}function Fn(){qn.start()}const qn=new Gp;qn.setAnimationLoop(Js),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(E){_s=E,it.setAnimationLoop(E),E===null?qn.stop():qn.start()},it.addEventListener("sessionstart",Ci),it.addEventListener("sessionend",Fn),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;V!==null&&V.renderStart(E,G);const te=it.enabled===!0&&it.isPresenting===!0,K=C!==null&&(we===null||te)&&C.begin(D,we);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(G),G=it.getCamera()),E.isScene===!0&&E.onBeforeRender(D,E,G,we),T=Ne.get(E,_.length),T.init(G),T.state.textureUnits=ce.getTextureUnits(),_.push(T),Ce.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ve.setFromProjectionMatrix(Ce,cs,G.reversedDepth),Re=this.localClippingEnabled,Ee=rt.init(this.clippingPlanes,Re),b=Ve.get(E,L.length),b.init(),L.push(b),it.enabled===!0&&it.isPresenting===!0){const Je=D.xr.getDepthSensingMesh();Je!==null&&gi(Je,G,-1/0,D.sortObjects)}gi(E,G,0,D.sortObjects),b.finish(),V!==null&&V.updateLights(T.state.lightsArray),D.sortObjects===!0&&b.sort(We,lt),yt=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,yt&&dt.addToRenderList(b,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&rt.beginShadows();const J=T.state.shadowsArray;if(gt.render(J,E,G),Ee===!0&&rt.endShadows(),(K&&C.hasRenderPass())===!1){const Je=b.opaque,ze=b.transmissive;if(T.setupLights(),G.isArrayCamera){const Ke=G.cameras;if(ze.length>0)for(let tt=0,Et=Ke.length;tt<Et;tt++){const Ct=Ke[tt];Ns(Je,ze,E,Ct)}yt&&dt.render(E);for(let tt=0,Et=Ke.length;tt<Et;tt++){const Ct=Ke[tt];vs(b,E,Ct,Ct.viewport)}}else ze.length>0&&Ns(Je,ze,E,G),yt&&dt.render(E),vs(b,E,G)}we!==null&&ne===0&&(ce.updateMultisampleRenderTarget(we),ce.updateRenderTargetMipmap(we)),K&&C.end(D),E.isScene===!0&&E.onAfterRender(D,E,G),Ye.resetDefaultState(),re=-1,le=null,_.pop(),_.length>0?(T=_[_.length-1],ce.setTextureUnits(T.state.textureUnits),Ee===!0&&rt.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,L.pop(),L.length>0?b=L[L.length-1]:b=null,V!==null&&V.renderEnd()};function gi(E,G,te,K){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)te=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(ve)){K&&mt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ce);const Je=ue.update(E),ze=E.material;ze.visible&&b.push(E,Je,ze,te,mt.z,null,G)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(ve))){const Je=ue.update(E),ze=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),mt.copy(E.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),mt.copy(Je.boundingSphere.center)),mt.applyMatrix4(E.matrixWorld).applyMatrix4(Ce)),Array.isArray(ze)){const Ke=Je.groups;for(let tt=0,Et=Ke.length;tt<Et;tt++){const Ct=Ke[tt],et=ze[Ct.materialIndex];et&&et.visible&&b.push(E,Je,et,te,mt.z,Ct,G)}}else ze.visible&&b.push(E,Je,ze,te,mt.z,null,G)}}const Ue=E.children;for(let Je=0,ze=Ue.length;Je<ze;Je++)gi(Ue[Je],G,te,K)}function vs(E,G,te,K){const{opaque:J,transmissive:Ue,transparent:Je}=E;T.setupLightsView(te),Ee===!0&&rt.setGlobalState(D.clippingPlanes,te),K&&y.viewport(ye.copy(K)),J.length>0&&Bi(J,G,te),Ue.length>0&&Bi(Ue,G,te),Je.length>0&&Bi(Je,G,te),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Ns(E,G,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[K.id]===void 0){const et=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[K.id]=new $i(1,1,{generateMipmaps:!0,type:et?fs:Ei,minFilter:Rs,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}const Ue=T.state.transmissionRenderTarget[K.id],Je=K.viewport||ye;Ue.setSize(Je.z*D.transmissionResolutionScale,Je.w*D.transmissionResolutionScale);const ze=D.getRenderTarget(),Ke=D.getActiveCubeFace(),tt=D.getActiveMipmapLevel();D.setRenderTarget(Ue),D.getClearColor(At),Tt=D.getClearAlpha(),Tt<1&&D.setClearColor(16777215,.5),D.clear(),yt&&dt.render(te);const Et=D.toneMapping;D.toneMapping=us;const Ct=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),T.setupLightsView(K),Ee===!0&&rt.setGlobalState(D.clippingPlanes,K),Bi(E,te,K),ce.updateMultisampleRenderTarget(Ue),ce.updateRenderTargetMipmap(Ue),St.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let $t=0,fn=G.length;$t<fn;$t++){const on=G[$t],{object:nn,geometry:Ut,material:Me,group:Vt}=on;if(Me.side===Ti&&nn.layers.test(K.layers)){const A=Me.side;Me.side=pi,Me.needsUpdate=!0,zi(nn,te,K,Ut,Me,Vt),Me.side=A,Me.needsUpdate=!0,et=!0}}et===!0&&(ce.updateMultisampleRenderTarget(Ue),ce.updateRenderTargetMipmap(Ue))}D.setRenderTarget(ze,Ke,tt),D.setClearColor(At,Tt),Ct!==void 0&&(K.viewport=Ct),D.toneMapping=Et}function Bi(E,G,te){const K=G.isScene===!0?G.overrideMaterial:null;for(let J=0,Ue=E.length;J<Ue;J++){const Je=E[J],{object:ze,geometry:Ke,group:tt}=Je;let Et=Je.material;Et.allowOverride===!0&&K!==null&&(Et=K),ze.layers.test(te.layers)&&zi(ze,G,te,Ke,Et,tt)}}function zi(E,G,te,K,J,Ue){V!==null&&J.isNodeMaterial&&V.setObject(E,J),E.onBeforeRender(D,G,te,K,J,Ue),E.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(D,G,te,K,E,Ue),J.transparent===!0&&J.side===Ti&&J.forceSinglePass===!1?(J.side=pi,J.needsUpdate=!0,D.renderBufferDirect(te,G,K,J,E,Ue),J.side=$s,J.needsUpdate=!0,D.renderBufferDirect(te,G,K,J,E,Ue),J.side=Ti):D.renderBufferDirect(te,G,K,J,E,Ue),E.onAfterRender(D,G,te,K,J,Ue)}function On(E,G,te){G.isScene!==!0&&(G=at);const K=Q.get(E),J=T.state.lights,Ue=T.state.shadowsArray,Je=J.state.version,ze=Te.getParameters(E,J.state,Ue,G,te,T.state.lightProbeGridArray),Ke=Te.getProgramCacheKey(ze);let tt=K.programs;K.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?G.environment:null,K.fog=G.fog;const Et=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;K.envMap=Le.get(E.envMap||K.environment,Et),K.envMapRotation=K.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,tt===void 0&&(E.addEventListener("dispose",mi),tt=new Map,K.programs=tt);let Ct=tt.get(Ke);if(Ct!==void 0){if(K.currentProgram===Ct&&K.lightsStateVersion===Je)return Qs(E,ze),Ct}else ze.uniforms=Te.getUniforms(E),V!==null&&E.isNodeMaterial&&V.build(E,te,ze),E.onBeforeCompile(ze,D),Ct=Te.acquireProgram(ze,Ke),tt.set(Ke,Ct),K.uniforms=ze.uniforms;const et=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(et.clippingPlanes=rt.uniform),Qs(E,ze),K.needsLights=Ds(E),K.lightsStateVersion=Je,K.needsLights&&(et.ambientLightColor.value=J.state.ambient,et.lightProbe.value=J.state.probe,et.sunLights.value=J.state.sun,et.sunLightShadows.value=J.state.sunShadow,et.directionalLights.value=J.state.directional,et.directionalLightShadows.value=J.state.directionalShadow,et.spotLights.value=J.state.spot,et.spotLightShadows.value=J.state.spotShadow,et.rectAreaLights.value=J.state.rectArea,et.ltc_1.value=J.state.rectAreaLTC1,et.ltc_2.value=J.state.rectAreaLTC2,et.pointLights.value=J.state.point,et.pointLightShadows.value=J.state.pointShadow,et.hemisphereLights.value=J.state.hemi,et.sunShadowMatrix.value=J.state.sunShadowMatrix,et.sunShadowCascade.value=J.state.sunShadowCascade,et.directionalShadowMatrix.value=J.state.directionalShadowMatrix,et.spotLightMatrix.value=J.state.spotLightMatrix,et.spotLightMap.value=J.state.spotLightMap,et.pointShadowMatrix.value=J.state.pointShadowMatrix),K.lightProbeGrid=T.state.lightProbeGridArray.length>0,K.currentProgram=Ct,K.uniformsList=null,Ct}function ys(E){if(E.uniformsList===null){const G=E.currentProgram.getUniforms();E.uniformsList=gc.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function Qs(E,G){const te=Q.get(E);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function Tr(E,G){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;x.setFromMatrixPosition(G.matrixWorld);for(let te=0,K=E.length;te<K;te++){const J=E[te];if(J.texture!==null&&J.boundingBox.containsPoint(x))return J}return null}function Dn(E,G,te,K,J){G.isScene!==!0&&(G=at),ce.resetTextureUnits();const Ue=G.fog,Je=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?G.environment:null,ze=we===null?D.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Kt.workingColorSpace,Ke=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,tt=Le.get(K.envMap||Je,Ke),Et=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ct=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),et=!!te.morphAttributes.position,$t=!!te.morphAttributes.normal,fn=!!te.morphAttributes.color;let on=us;K.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(on=D.toneMapping);const nn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ut=nn!==void 0?nn.length:0,Me=Q.get(K),Vt=T.state.lights;if(Ee===!0&&(Re===!0||E!==le)){const st=E===le&&K.id===re;rt.setState(K,E,st)}let A=!1;K.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Vt.state.version||Me.outputColorSpace!==ze||J.isBatchedMesh&&Me.batching===!1||!J.isBatchedMesh&&Me.batching===!0||J.isBatchedMesh&&Me.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Me.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Me.instancing===!1||!J.isInstancedMesh&&Me.instancing===!0||J.isSkinnedMesh&&Me.skinning===!1||!J.isSkinnedMesh&&Me.skinning===!0||J.isInstancedMesh&&Me.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Me.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Me.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Me.instancingMorph===!1&&J.morphTexture!==null||Me.envMap!==tt||K.fog===!0&&Me.fog!==Ue||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==rt.numPlanes||Me.numIntersection!==rt.numIntersection)||Me.vertexAlphas!==Et||Me.vertexTangents!==Ct||Me.morphTargets!==et||Me.morphNormals!==$t||Me.morphColors!==fn||Me.toneMapping!==on||Me.morphTargetsCount!==Ut||!!Me.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(A=!0):(A=!0,Me.__version=K.version);let Z=Me.currentProgram;A===!0&&(Z=On(K,G,J),V&&K.isNodeMaterial&&V.onUpdateProgram(K,Z,Me));let q=!1,xe=!1,pe=!1;const fe=Z.getUniforms(),Pe=Me.uniforms;if(y.useProgram(Z.program)&&(q=!0,xe=!0,pe=!0),K.id!==re&&(re=K.id,xe=!0),Me.needsLights){const st=Tr(T.state.lightProbeGridArray,J);Me.lightProbeGrid!==st&&(Me.lightProbeGrid=st,xe=!0)}if(q||le!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),fe.setValue(N,"projectionMatrix",E.projectionMatrix),fe.setValue(N,"viewMatrix",E.matrixWorldInverse);const be=fe.map.cameraPosition;be!==void 0&&be.setValue(N,Oe.setFromMatrixPosition(E.matrixWorld)),I.logarithmicDepthBuffer&&fe.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&fe.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),le!==E&&(le=E,xe=!0,pe=!0)}if(Me.needsLights&&(Vt.state.sunShadowMap.length>0&&fe.setValue(N,"sunShadowMap",Vt.state.sunShadowMap,ce),Vt.state.directionalShadowMap.length>0&&fe.setValue(N,"directionalShadowMap",Vt.state.directionalShadowMap,ce),Vt.state.spotShadowMap.length>0&&fe.setValue(N,"spotShadowMap",Vt.state.spotShadowMap,ce),Vt.state.pointShadowMap.length>0&&fe.setValue(N,"pointShadowMap",Vt.state.pointShadowMap,ce)),J.isSkinnedMesh){fe.setOptional(N,J,"bindMatrix"),fe.setOptional(N,J,"bindMatrixInverse");const st=J.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),fe.setValue(N,"boneTexture",st.boneTexture,ce))}J.isBatchedMesh&&(fe.setOptional(N,J,"batchingTexture"),fe.setValue(N,"batchingTexture",J._matricesTexture,ce),fe.setOptional(N,J,"batchingIdTexture"),fe.setValue(N,"batchingIdTexture",J._indirectTexture,ce),fe.setOptional(N,J,"batchingColorTexture"),J._colorsTexture!==null&&fe.setValue(N,"batchingColorTexture",J._colorsTexture,ce));const De=te.morphAttributes;if((De.position!==void 0||De.normal!==void 0||De.color!==void 0)&&W.update(J,te,Z),(xe||Me.receiveShadow!==J.receiveShadow)&&(Me.receiveShadow=J.receiveShadow,fe.setValue(N,"receiveShadow",J.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&G.environment!==null&&(Pe.envMapIntensity.value=G.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=JS()),xe){if(fe.setValue(N,"toneMappingExposure",D.toneMappingExposure),Me.needsLights&&ki(Pe,pe),Ue&&K.fog===!0&&ot.refreshFogUniforms(Pe,Ue),ot.refreshMaterialUniforms(Pe,K,_e,oe,T.state.transmissionRenderTarget[E.id]),Me.needsLights&&Me.lightProbeGrid){const st=Me.lightProbeGrid;Pe.probesSH.value=st.texture,Pe.probesMin.value.copy(st.boundingBox.min),Pe.probesMax.value.copy(st.boundingBox.max),Pe.probesResolution.value.copy(st.resolution)}gc.upload(N,ys(Me),Pe,ce)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(gc.upload(N,ys(Me),Pe,ce),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&fe.setValue(N,"center",J.center),fe.setValue(N,"modelViewMatrix",J.modelViewMatrix),fe.setValue(N,"normalMatrix",J.normalMatrix),fe.setValue(N,"modelMatrix",J.matrixWorld),K.uniformsGroups!==void 0){const st=K.uniformsGroups;for(let be=0,Bn=st.length;be<Bn;be++){const Vn=st[be];Se.update(Vn,Z),Se.bind(Vn,Z)}}return Z}function ki(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.sunLights.needsUpdate=G,E.sunLightShadows.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Ds(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return we},this.setRenderTargetTextures=function(E,G,te){const K=Q.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Q.get(E.texture).__webglTexture=G,Q.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:te,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,G){const te=Q.get(E);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,te=0){we=E,ie=G,ne=te;let K=null,J=!1,Ue=!1;if(E){const ze=Q.get(E);if(ze.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(N.FRAMEBUFFER,ze.__webglFramebuffer),ye.copy(E.viewport),Qe.copy(E.scissor),$e=E.scissorTest,y.viewport(ye),y.scissor(Qe),y.setScissorTest($e),re=-1;return}else if(ze.__webglFramebuffer===void 0)ce.setupRenderTarget(E);else if(ze.__hasExternalTextures)ce.rebindTextures(E,Q.get(E.texture).__webglTexture,Q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Et=E.depthTexture;if(ze.__boundDepthTexture!==Et){if(Et!==null&&Q.has(Et)&&(E.width!==Et.image.width||E.height!==Et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(E)}}const Ke=E.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ue=!0);const tt=Q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(tt[G])?K=tt[G][te]:K=tt[G],J=!0):E.samples>0&&ce.useMultisampledRTT(E)===!1?K=Q.get(E).__webglMultisampledFramebuffer:Array.isArray(tt)?K=tt[te]:K=tt,ye.copy(E.viewport),Qe.copy(E.scissor),$e=E.scissorTest}else ye.copy(qe).multiplyScalar(_e).floor(),Qe.copy(xt).multiplyScalar(_e).floor(),$e=Yt;if(te!==0&&(K=$),y.bindFramebuffer(N.FRAMEBUFFER,K)&&y.drawBuffers(E,K),y.viewport(ye),y.scissor(Qe),y.setScissorTest($e),J){const ze=Q.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,ze.__webglTexture,te)}else if(Ue){const ze=G;for(let Ke=0;Ke<E.textures.length;Ke++){const tt=Q.get(E.textures[Ke]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ke,tt.__webglTexture,te,ze)}}else if(E!==null&&te!==0){const ze=Q.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ze.__webglTexture,te)}re=-1};function Us(E){const G=Q.get(E);return(G.__readFormat!==E.format||G.__readType!==E.type)&&(G.__readFormat=E.format,G.__readType=E.type,G.__formatReadable=I.textureFormatReadable(E.format),G.__typeReadable=I.textureTypeReadable(E.type)),G}this.readRenderTargetPixels=function(E,G,te,K,J,Ue,Je,ze=0){if(!(E&&E.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=Q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Je!==void 0&&(Ke=Ke[Je]),Ke){y.bindFramebuffer(N.FRAMEBUFFER,Ke);try{const tt=E.textures[ze],Et=tt.format,Ct=tt.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ze);const et=Us(tt);if(et.__formatReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-K&&te>=0&&te<=E.height-J&&N.readPixels(G,te,K,J,Xe.convert(Et),Xe.convert(Ct),Ue)}finally{const tt=we!==null?Q.get(we).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(E,G,te,K,J,Ue,Je,ze=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=Q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Je!==void 0&&(Ke=Ke[Je]),Ke)if(G>=0&&G<=E.width-K&&te>=0&&te<=E.height-J){y.bindFramebuffer(N.FRAMEBUFFER,Ke);const tt=E.textures[ze],Et=tt.format,Ct=tt.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ze);const et=Us(tt);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.bufferData(N.PIXEL_PACK_BUFFER,Ue.byteLength,N.STREAM_READ),N.readPixels(G,te,K,J,Xe.convert(Et),Xe.convert(Ct),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const fn=we!==null?Q.get(we).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,fn);const on=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await q0(N,on,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,$t),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ue),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer($t),N.deleteSync(on),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,G=null,te=0){const K=Math.pow(2,-te),J=Math.floor(E.image.width*K),Ue=Math.floor(E.image.height*K),Je=G!==null?G.x:0,ze=G!==null?G.y:0;ce.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,te,0,0,Je,ze,J,Ue),y.unbindTexture()},this.copyTextureToTexture=function(E,G,te=null,K=null,J=0,Ue=0){let Je,ze,Ke,tt,Et,Ct,et,$t,fn;const on=E.isCompressedTexture?E.mipmaps[Ue]:E.image;if(te!==null)Je=te.max.x-te.min.x,ze=te.max.y-te.min.y,Ke=te.isBox3?te.max.z-te.min.z:1,tt=te.min.x,Et=te.min.y,Ct=te.isBox3?te.min.z:0;else{const Pe=Math.pow(2,-J);Je=Math.floor(on.width*Pe),ze=Math.floor(on.height*Pe),E.isDataArrayTexture?Ke=on.depth:E.isData3DTexture?Ke=Math.floor(on.depth*Pe):Ke=1,tt=0,Et=0,Ct=0}K!==null?(et=K.x,$t=K.y,fn=K.z):(et=0,$t=0,fn=0);const nn=Xe.convert(G.format),Ut=Xe.convert(G.type);let Me;G.isData3DTexture?(ce.setTexture3D(G,0),Me=N.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ce.setTexture2DArray(G,0),Me=N.TEXTURE_2D_ARRAY):(ce.setTexture2D(G,0),Me=N.TEXTURE_2D),y.activeTexture(N.TEXTURE0),y.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),y.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),y.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);const Vt=y.getParameter(N.UNPACK_ROW_LENGTH),A=y.getParameter(N.UNPACK_IMAGE_HEIGHT),Z=y.getParameter(N.UNPACK_SKIP_PIXELS),q=y.getParameter(N.UNPACK_SKIP_ROWS),xe=y.getParameter(N.UNPACK_SKIP_IMAGES);y.pixelStorei(N.UNPACK_ROW_LENGTH,on.width),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,on.height),y.pixelStorei(N.UNPACK_SKIP_PIXELS,tt),y.pixelStorei(N.UNPACK_SKIP_ROWS,Et),y.pixelStorei(N.UNPACK_SKIP_IMAGES,Ct);const pe=E.isDataArrayTexture||E.isData3DTexture,fe=G.isDataArrayTexture||G.isData3DTexture;if(E.isDepthTexture){const Pe=Q.get(E),De=Q.get(G),st=Q.get(Pe.__renderTarget),be=Q.get(De.__renderTarget);y.bindFramebuffer(N.READ_FRAMEBUFFER,st.__webglFramebuffer),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Bn=0;Bn<Ke;Bn++)pe&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Q.get(E).__webglTexture,J,Ct+Bn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Q.get(G).__webglTexture,Ue,fn+Bn)),N.blitFramebuffer(tt,Et,Je,ze,et,$t,Je,ze,N.DEPTH_BUFFER_BIT,N.NEAREST);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(J!==0||E.isRenderTargetTexture||Q.has(E)){const Pe=Q.get(E),De=Q.get(G);y.bindFramebuffer(N.READ_FRAMEBUFFER,H),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,j);for(let st=0;st<Ke;st++)pe?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.__webglTexture,J,Ct+st):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Pe.__webglTexture,J),fe?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,De.__webglTexture,Ue,fn+st):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,De.__webglTexture,Ue),J!==0?N.blitFramebuffer(tt,Et,Je,ze,et,$t,Je,ze,N.COLOR_BUFFER_BIT,N.NEAREST):fe?N.copyTexSubImage3D(Me,Ue,et,$t,fn+st,tt,Et,Je,ze):N.copyTexSubImage2D(Me,Ue,et,$t,tt,Et,Je,ze);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else fe?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Me,Ue,et,$t,fn,Je,ze,Ke,nn,Ut,on.data):G.isCompressedArrayTexture?N.compressedTexSubImage3D(Me,Ue,et,$t,fn,Je,ze,Ke,nn,on.data):N.texSubImage3D(Me,Ue,et,$t,fn,Je,ze,Ke,nn,Ut,on):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ue,et,$t,Je,ze,nn,Ut,on.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ue,et,$t,on.width,on.height,nn,on.data):N.texSubImage2D(N.TEXTURE_2D,Ue,et,$t,Je,ze,nn,Ut,on);y.pixelStorei(N.UNPACK_ROW_LENGTH,Vt),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,A),y.pixelStorei(N.UNPACK_SKIP_PIXELS,Z),y.pixelStorei(N.UNPACK_SKIP_ROWS,q),y.pixelStorei(N.UNPACK_SKIP_IMAGES,xe),Ue===0&&G.generateMipmaps&&N.generateMipmap(Me),y.unbindTexture()},this.initRenderTarget=function(E){Q.get(E).__webglFramebuffer===void 0&&ce.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ce.setTextureCube(E,0):E.isData3DTexture?ce.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ce.setTexture2DArray(E,0):ce.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){ie=0,ne=0,we=null,y.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Kt._getUnpackColorSpace()}}function eb(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new vn;let l=0;for(let u=0;u<s.length;++u){const d=s[u];let h=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0;const d=[];for(let h=0;h<s.length;++h){const f=s[h].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+u);u+=s[h].attributes.position.count}c.setIndex(d)}for(const u in r){const d=Mf(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,d)}for(const u in o){const d=o[u][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<d;++h){const f=[];for(let v=0;v<o[u].length;++v)f.push(o[u][v][h]);const p=Mf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(p)}}}return c}function Mf(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const u=s[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new En(o,t,n);let c=0;for(let l=0;l<s.length;++l){const u=s[l];if(u.isInterleavedBufferAttribute){const d=c/t;for(let h=0,f=u.count;h<f;h++)for(let p=0;p<t;p++){const v=u.getComponent(h,p);a.setComponent(h+d,p,v)}}else o.set(u.array,c);c+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function Sf(s,e){if(e===N0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ru||e===dp){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Ru)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function tb(s){const e=new Map,t=new Map,n=s.clone();return Zp(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Zp(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Zp(s.children[n],e.children[n],t)}class nb extends wr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ab(t)}),this.register(function(t){return new cb(t)}),this.register(function(t){return new xb(t)}),this.register(function(t){return new _b(t)}),this.register(function(t){return new vb(t)}),this.register(function(t){return new ub(t)}),this.register(function(t){return new hb(t)}),this.register(function(t){return new db(t)}),this.register(function(t){return new fb(t)}),this.register(function(t){return new ob(t)}),this.register(function(t){return new pb(t)}),this.register(function(t){return new lb(t)}),this.register(function(t){return new gb(t)}),this.register(function(t){return new mb(t)}),this.register(function(t){return new sb(t)}),this.register(function(t){return new bf(t,jt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new bf(t,jt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new yb(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=js.extractUrlBase(e);o=js.resolveURL(l,this.path)}else o=js.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ec(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Jp){try{o[jt.KHR_BINARY_GLTF]=new Mb(e)}catch(d){i&&i(d);return}r=JSON.parse(o[jt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Db(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[d.name]=d,o[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case jt.KHR_MATERIALS_UNLIT:o[d]=new rb;break;case jt.KHR_DRACO_MESH_COMPRESSION:o[d]=new Sb(r,this.dracoLoader);break;case jt.KHR_TEXTURE_TRANSFORM:o[d]=new bb;break;case jt.KHR_MESH_QUANTIZATION:o[d]=new wb;break;default:h.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function ib(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Hn(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const jt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sb{constructor(e){this.parser=e,this.name=jt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new nt(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Mi);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Hp(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new mc(u),l.distance=d;break;case"spot":l=new Uu(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),rs(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class rb{constructor(){this.name=jt.KHR_MATERIALS_UNLIT}getMaterialType(){return yi}extendParams(e,t,n){const i=[];e.color=new nt(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Mi),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,In))}return Promise.all(i)}}class ob{constructor(e){this.parser=e,this.name=jt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=Hn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class ab{constructor(e){this.parser=e,this.name=jt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Hn(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const n=Hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ge(r,r)}return Promise.all(i)}}class cb{constructor(e){this.parser=e,this.name=jt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Hn(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const n=Hn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class lb{constructor(e){this.parser=e,this.name=jt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Hn(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const n=Hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class ub{constructor(e){this.parser=e,this.name=jt.KHR_MATERIALS_SHEEN}getMaterialType(e){return Hn(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const n=Hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new nt(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Mi)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,In)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class hb{constructor(e){this.parser=e,this.name=jt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Hn(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const n=Hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class db{constructor(e){this.parser=e,this.name=jt.KHR_MATERIALS_VOLUME}getMaterialType(e){return Hn(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const n=Hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new nt().setRGB(r[0],r[1],r[2],Mi),Promise.all(i)}}class fb{constructor(e){this.parser=e,this.name=jt.KHR_MATERIALS_IOR}getMaterialType(e){return Hn(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const n=Hn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class pb{constructor(e){this.parser=e,this.name=jt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Hn(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const n=Hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new nt().setRGB(r[0],r[1],r[2],Mi),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,In)),Promise.all(i)}}class mb{constructor(e){this.parser=e,this.name=jt.EXT_MATERIALS_BUMP}getMaterialType(e){return Hn(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const n=Hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class gb{constructor(e){this.parser=e,this.name=jt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Hn(this.parser,e,this.name)!==null?Oi:null}extendMaterialParams(e,t){const n=Hn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class xb{constructor(e){this.parser=e,this.name=jt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class _b{constructor(e){this.parser=e,this.name=jt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class vb{constructor(e){this.parser=e,this.name=jt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class bf{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,d=i.byteStride,h=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,d,h,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(u*d);return o.decodeGltfBuffer(new Uint8Array(f),u,d,h,i.mode,i.filter),f})})}else return null}}class yb{constructor(e){this.name=jt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Ii.TRIANGLES&&l.mode!==Ii.TRIANGLE_STRIP&&l.mode!==Ii.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),d=u.isGroup?u.children:[u],h=l[0].count,f=[];for(const p of d){const v=new Ft,g=new B,m=new Wn,w=new B(1,1,1),R=new xr(p.geometry,p.material,h);for(let b=0;b<h;b++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,b),c.SCALE&&w.fromBufferAttribute(c.SCALE,b),R.setMatrixAt(b,v.compose(g,m,w));let x=null;for(const b in c)if(b==="_COLOR_0"){const T=c[b];R.instanceColor=new ta(T.array,T.itemSize,T.normalized)}else if(b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"){if(x===null){const L=R.geometry;x=new vn,x.name=L.name;for(const _ in L.attributes)x.setAttribute(_,L.attributes[_]);for(const _ in L.morphAttributes)x.morphAttributes[_]=L.morphAttributes[_];L.index!==null&&x.setIndex(L.index),x.morphTargetsRelative=L.morphTargetsRelative;for(const _ of L.groups)x.addGroup(_.start,_.count,_.materialIndex);L.boundingBox!==null&&(x.boundingBox=L.boundingBox.clone()),L.boundingSphere!==null&&(x.boundingSphere=L.boundingSphere.clone()),x.drawRange.start=L.drawRange.start,x.drawRange.count=L.drawRange.count,x.userData=Object.assign({},L.userData),R.geometry=x}const T=c[b];x.setAttribute(b,new ta(T.array,T.itemSize,T.normalized))}An.prototype.copy.call(R,p),this.parser.assignFinalMaterial(R),f.push(R)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Jp="glTF",No=12,wf={JSON:1313821514,BIN:5130562};class Mb{constructor(e){this.name=jt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,No),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Jp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-No,r=new DataView(e,No);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===wf.JSON){const l=new Uint8Array(e,No+o,a);this.content=n.decode(l)}else if(c===wf.BIN){const l=No+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Sb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=jt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const d=zu[u]||u.toLowerCase();a[d]=o[u]}for(const u in e.attributes){const d=zu[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],f=to[h.componentType];l[d]=f.name,c[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){i.decodeDracoFile(u,function(f){for(const p in f.attributes){const v=f.attributes[p],g=c[p];g!==void 0&&(v.normalized=g)}d(f)},a,l,Mi,h)})})}}class bb{constructor(){this.name=jt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class wb{constructor(){this.name=jt.KHR_MESH_QUANTIZATION}}class Qp extends oo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,d=(n-t)/u,h=d*d,f=h*d,p=e*l,v=p-l,g=-2*f+3*h,m=f-h,w=1-g,R=m-h+d;for(let x=0;x!==a;x++){const b=o[v+x+a],T=o[v+x+c]*u,L=o[p+x+a],_=o[p+x]*u;r[x]=w*b+R*T+g*L+m*_}return r}}const Tb=new Wn;class Eb extends Qp{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Tb.fromArray(r).normalize().toArray(r),r}}const Ii={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},to={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Tf={9728:jn,9729:$n,9984:rp,9985:lc,9986:Bo,9987:Rs},Ef={33071:as,33648:_c,10497:Zs},zl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ab={CUBICSPLINE:void 0,LINEAR:Jo,STEP:Zo},kl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Rb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ct({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$s})),s.DefaultMaterial}function hr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function rs(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Cb(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];if(n){const h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):s.attributes.position;o.push(h)}if(i){const h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):s.attributes.normal;a.push(h)}if(r){const h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):s.attributes.color;c.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],d=l[1],h=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=d),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function Pb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Lb(s){let e;const t=s.extensions&&s.extensions[jt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Hl(t.attributes):e=s.indices+":"+Hl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Hl(s.targets[n]);return e}function Hl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function ku(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ib(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Nb=new Ft;class Db{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ib,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new zx(this.options.manager):this.textureLoader=new Wx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ec(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return hr(r,a,i),rs(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[jt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(js.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=zl[i.type],a=to[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new En(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=zl[i.type],l=to[i.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,h=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let v,g;if(f&&f!==d){const m=Math.floor(h/f),w="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let R=t.cache.get(w);R||(v=new l(a,m*f,i.count*f/u),R=new yp(v,f/u),t.cache.add(w,R)),g=new Rc(R,c,h%f/u,p)}else a===null?v=new l(i.count*c):v=new l(a,h,i.count*c),g=new En(v,c,p);if(i.sparse!==void 0){const m=zl.SCALAR,w=to[i.sparse.indices.componentType],R=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,b=new w(o[1],R,i.sparse.count*m),T=new l(o[2],x,i.sparse.count*c);a!==null&&(g=new En(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let L=0,_=b.length;L<_;L++){const C=b[L];if(g.setX(C,T[L*c]),c>=2&&g.setY(C,T[L*c+1]),c>=3&&g.setZ(C,T[L*c+2]),c>=4&&g.setW(C,T[L*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=p}return g})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Tf[h.magFilter]||$n,u.minFilter=Tf[h.minFilter]||Rs,u.wrapS=Ef[h.wrapS]||Zs,u.wrapT=Ef[h.wrapT]||Zs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==jn&&u.minFilter!==$n,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(d){l=!0;const h=new Blob([d],{type:o.mimeType});return c=a.createObjectURL(h),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(d){return new Promise(function(h,f){let p=h;t.isImageBitmapLoader===!0&&(p=function(v){const g=new Zn(v);g.needsUpdate=!0,h(g)}),t.load(js.resolveURL(d,r.path),p,void 0,f)})}).then(function(d){return l===!0&&a.revokeObjectURL(c),rs(d,o),d.userData.mimeType=o.mimeType||Ib(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[jt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[jt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[jt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new bp,hs.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new ch,hs.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ct}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[jt.KHR_MATERIALS_UNLIT]){const d=i[jt.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),l.push(d.extendParams(a,r,t))}else{const d=r.pbrMetallicRoughness||{};if(a.color=new nt(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){const h=d.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Mi),a.opacity=h[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,In)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ti);const u=r.alphaMode||kl.OPAQUE;if(u===kl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===kl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==yi&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ge(1,1),r.normalTexture.scale!==void 0)){const d=r.normalTexture.scale;a.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&o!==yi&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==yi){const d=r.emissiveFactor;a.emissive=new nt().setRGB(d[0],d[1],d[2],Mi)}return r.emissiveTexture!==void 0&&o!==yi&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,In)),Promise.all(l).then(function(){const d=new o(a);return r.name&&(d.name=r.name),rs(d,r),t.associations.set(d,{materials:e}),r.extensions&&hr(i,d,r),d})}createUniqueName(e){const t=_n.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[jt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Af(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=Lb(l),d=i[u];if(d)o.push(d.promise);else{let h;l.extensions&&l.extensions[jt.KHR_DRACO_MESH_COMPRESSION]?h=r(l):h=Af(new vn,l,t),l.mode===Ii.TRIANGLE_STRIP?h=h.then(f=>Sf(f,dp)):l.mode===Ii.TRIANGLE_FAN&&(h=h.then(f=>Sf(f,Ru))),i[u]={primitive:l,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Rb(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let f=0,p=u.length;f<p;f++){const v=u[f],g=o[f];let m;const w=l[f];if(g.mode===Ii.TRIANGLES||g.mode===Ii.TRIANGLE_STRIP||g.mode===Ii.TRIANGLE_FAN||g.mode===void 0){const R=r.isSkinnedMesh===!0,x=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");R&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),m=R&&x?new Ig(v,w):new It(v,w),m.isSkinnedMesh===!0&&m.normalizeSkinWeights()}else if(g.mode===Ii.LINES)m=new Sp(v,w);else if(g.mode===Ii.LINE_STRIP)m=new lh(v,w);else if(g.mode===Ii.LINE_LOOP)m=new Fg(v,w);else if(g.mode===Ii.POINTS)m=new wp(v,w);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&Pb(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),rs(m,r),g.extensions&&hr(i,m,g),t.assignFinalMaterial(m),d.push(m)}for(let f=0,p=d.length;f<p;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&hr(i,d[0],r),d[0];const h=new Pn;r.extensions&&hr(i,h,r),t.associations.set(h,{meshes:e});for(let f=0,p=d.length;f<p;f++)h.add(d[f]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new fi(ug.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Nc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),rs(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const d=o[l];if(d){a.push(d);const h=new Ft;r!==null&&h.fromArray(r.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new oh(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let d=0,h=i.channels.length;d<h;d++){const f=i.channels[d],p=i.samplers[f.sampler],v=f.target,g=v.node,m=i.parameters!==void 0?i.parameters[p.input]:p.input,w=i.parameters!==void 0?i.parameters[p.output]:p.output;v.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",w)),l.push(p),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){const h=d[0],f=d[1],p=d[2],v=d[3],g=d[4],m=[];for(let R=0,x=h.length;R<x;R++){const b=h[R],T=f[R],L=p[R],_=v[R],C=g[R];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const D=n._createAnimationTracks(b,T,L,_,C);if(D)for(let O=0;O<D.length;O++)m.push(D[O])}const w=new Ix(r,void 0,m);return rs(w,i),w})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],d=l[1],h=l[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,Nb)});for(let f=0,p=d.length;f<p;f++)u.add(d[f]);if(u.userData.pivot!==void 0&&d.length>0){const f=u.userData.pivot,p=d[0];u.pivot=new B().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Mp:l.length>1?u=new Pn:l.length===1?u=l[0]:u=new An,u!==l[0])for(let d=0,h=l.length;d<h;d++)u.add(l[d]);if(r.name&&(u.userData.name=r.name,u.name=o),rs(u,r),r.extensions&&hr(n,u,r),r.matrix!==void 0){const d=new Ft;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const d=i.associations.get(u);i.associations.set(u,{...d})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Pn;n.name&&(r.name=i.createUniqueName(n.name)),rs(r,n),n.extensions&&hr(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,d=c.length;u<d;u++){const h=c[u];h.parent!==null?r.add(tb(h)):r.add(h)}const l=u=>{const d=new Map;for(const[h,f]of i.associations)(h instanceof hs||h instanceof Zn)&&d.set(h,f);return u.traverse(h=>{const f=i.associations.get(h);f!=null&&d.set(h,f)}),d};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Gs[r.path]===Gs.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let u;switch(Gs[r.path]){case Gs.weights:u=aa;break;case Gs.rotation:u=ca;break;case Gs.translation:case Gs.scale:u=Tc;break;default:n.itemSize===1?u=aa:u=Tc;break}const d=i.interpolation!==void 0?Ab[i.interpolation]:Jo,h=this._getArrayFromAccessor(n);for(let f=0,p=c.length;f<p;f++){const v=new u(c[f]+"."+Gs[r.path],t.array,h,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),o.push(v)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ku(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ca?Eb:Qp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ub(s,e,t){const n=e.attributes,i=new Fi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new B(c[0],c[1],c[2]),new B(l[0],l[1],l[2])),a.normalized){const u=ku(to[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new B,c=new B;for(let l=0,u=r.length;l<u;l++){const d=r[l];if(d.POSITION!==void 0){const h=t.json.accessors[d.POSITION],f=h.min,p=h.max;if(f!==void 0&&p!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),h.normalized){const v=ku(to[h.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new ms;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Af(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=zu[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Kt.workingColorSpace!==Mi&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Kt.workingColorSpace}" not supported.`),rs(s,e),Ub(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Cb(s,e.targets,t):s})}const Vl=new WeakMap,Fb=new URL("/assets/draco_decoder-C32yEggz.wasm",import.meta.url).toString(),Ob=new URL("/assets/draco_wasm_wrapper-DxJM36Ib.js",import.meta.url).toString(),Bb=new URL("/assets/draco_decoder-fzg4nYZr.js",import.meta.url).toString();new URL("/assets/draco_wasm_wrapper-fZCQGLGb.js",import.meta.url).toString(),new URL("/assets/draco_decoder-Z1_iN-Ht.wasm",import.meta.url).toString();class zb extends wr{constructor(e){super(e),this.decoderPaths={js:Ob,wasm:Fb,dep_js:Bb},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){const{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=js.resolveURL("draco_wasm_wrapper.js",e),t.wasm=js.resolveURL("draco_decoder.wasm",e),t.dep_js=js.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Ec(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,In,n).catch(n)}decodeDracoFile(e,t,n,i,r=Mi,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Vl.has(e)){const c=Vl.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(i=c,new Promise((l,u)=>{i._callbacks[r]={resolve:l,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Vl.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new vn;e.index&&t.setIndex(new En(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const{name:i,array:r,itemSize:o,stride:a,vertexColorSpace:c}=e.attributes[n];let l;if(o===a)l=new En(r,o);else{const u=new yp(r,a);l=new Rc(u,o,0)}i==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(r instanceof Float32Array)),t.setAttribute(i,l)}return t}_assignVertexColorSpace(e,t){if(t!==In)return;const n=new nt;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),Kt.colorSpaceToWorking(n,In),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Ec(this.manager);return n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(i=>{const r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const o=kb.toString(),a=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function kb(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(d){u({draco:d})},DracoDecoderModule(s)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(u=>{const d=u.draco,h=new d.Decoder;try{const f=t(d,h,new Int8Array(c),l),p=f.attributes.map(v=>v.array.buffer);f.index&&p.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},p)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{d.destroy(h)}});break}};function t(o,a,c,l){const u=l.attributeIDs,d=l.attributeTypes;let h,f;const p=a.GetEncodedGeometryType(c);if(p===o.TRIANGULAR_MESH)h=new o.Mesh,f=a.DecodeArrayToMesh(c,c.byteLength,h);else if(p===o.POINT_CLOUD)h=new o.PointCloud,f=a.DecodeArrayToPointCloud(c,c.byteLength,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const v={index:null,attributes:[]};for(const g in u){const m=self[d[g]];let w,R;if(l.useUniqueIDs)R=u[g],w=a.GetAttributeByUniqueId(h,R);else{if(R=a.GetAttributeId(h,o[u[g]]),R===-1)continue;w=a.GetAttribute(h,R)}const x=i(o,a,h,g,m,w);g==="color"&&(x.vertexColorSpace=l.vertexColorSpace),v.attributes.push(x)}return p===o.TRIANGULAR_MESH&&(v.index=n(o,a,h)),o.destroy(h),v}function n(o,a,c){const u=c.num_faces()*3,d=u*4,h=o._malloc(d);a.GetTrianglesUInt32Array(c,d,h);const f=new Uint32Array(o.HEAPF32.buffer,h,u).slice();return o._free(h),{array:f,itemSize:1}}function i(o,a,c,l,u,d){const h=c.num_points(),f=d.num_components(),p=r(o,u),v=f*u.BYTES_PER_ELEMENT,g=Math.ceil(v/4)*4,m=g/u.BYTES_PER_ELEMENT,w=h*v,R=h*g,x=o._malloc(w);a.GetAttributeDataArrayForAllPoints(c,d,p,w,x);const b=new u(o.HEAPF32.buffer,x,w/u.BYTES_PER_ELEMENT);let T;if(v===g)T=b.slice();else{T=new u(R/u.BYTES_PER_ELEMENT);let L=0;for(let _=0,C=b.length;_<C;_++){for(let D=0;D<f;D++)T[L+D]=b[_*f+D];L+=m}}return o._free(x),{name:l,count:h,itemSize:f,array:T,stride:m}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function Li(s,e){return s.userData.role=e,s}function Hb(s,e=.72,t=.04){return Li(new ct({color:s,roughness:e,metalness:t,envMapIntensity:.45}),"plastic")}function Rf(s,e=.22,t=.9){return Li(new ct({color:s,roughness:e,metalness:t,envMapIntensity:1.1}),"metal")}function em(s,e){const t=e?new Oi({color:s,metalness:.62,roughness:.29,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.15}):new ct({color:s,metalness:.55,roughness:.34,envMapIntensity:1});return{paint:Li(t,"paint"),glass:Li(new Oi({color:659220,metalness:.55,roughness:.07,envMapIntensity:1.35,clearcoat:1,clearcoatRoughness:.05}),"metal"),trim:Hb(1645342,.78),chrome:Rf(14080477,.16,.96),tyre:Li(new ct({color:1184534,roughness:.95,envMapIntensity:.12}),"plastic"),rim:Rf(12172996,.24,.92),caliper:Li(new ct({color:12730639,roughness:.45,metalness:.3,envMapIntensity:.6}),"plastic"),head:Li(new ct({color:14542058,emissive:16773844,emissiveIntensity:.12,roughness:.15,metalness:.4}),"head"),tail:Li(new ct({color:3410442,emissive:16720392,emissiveIntensity:.5,roughness:.22,metalness:.3}),"tail"),brake:Li(new ct({color:3999752,emissive:16718342,emissiveIntensity:.55,roughness:.25,metalness:.3}),"tail"),reverse:Li(new ct({color:3816768,emissive:15265007,emissiveIntensity:0,roughness:.3}),"reverse"),plate:Li(new ct({color:15329247,roughness:.6}),"plastic"),cabin:Li(new ct({color:1316378,roughness:.85,envMapIntensity:.25}),"plastic")}}const Yi={gt:{body:[[-2.27,.14],[-2.38,.42],[-2.3,.74],[-1.15,.8],[1.1,.82],[2.05,.7],[2.3,.42],[2.24,.14]],cabin:[[-1.72,.78],[-1.02,1.16],[-.05,1.2],[.62,.92],[.98,.8]],cabinWidth:1.52,roof:{z:[-1.35,.05],y:1.19},exhaust:{z:-2.34,y:.32,n:2},spoiler:{z:-2.14,y:.9,w:1.5,wing:!0},head:{z:2.26,y:.62,half:.6},tail:{z:-2.34,y:.64,half:.58},wheelStyle:"sport",skirt:.2},muscle:{body:[[-2.42,.16],[-2.54,.46],[-2.46,.86],[-1.6,.92],[1.25,.94],[2.22,.84],[2.5,.48],[2.4,.16]],cabin:[[-1.86,.9],[-1.28,1.36],[.05,1.39],[.62,.96],[.85,.9]],cabinWidth:1.54,roof:{z:[-1.2,-.2],y:1.375},exhaust:{z:-2.5,y:.34,n:2},spoiler:{z:-2.32,y:.96,w:1.55,wing:!0},scoop:{z:1.35,y:.98},head:{z:2.44,y:.66,half:.62},tail:{z:-2.5,y:.72,half:.6},wheelStyle:"mesh",skirt:.22},sedan:{body:[[-2.34,.14],[-2.46,.44],[-2.38,.88],[-1.5,.94],[1,.94],[2.12,.86],[2.38,.46],[2.3,.14]],cabin:[[-1.62,.92],[-1.3,1.44],[-.42,1.47],[.55,1.02],[1.05,.92]],cabinWidth:1.46,roof:{z:[-1.25,-.35],y:1.455},exhaust:{z:-2.44,y:.3,n:1},head:{z:2.36,y:.68,half:.58},tail:{z:-2.42,y:.72,half:.56},wheelStyle:"mesh",skirt:.2},hatch:{body:[[-1.92,.14],[-2.02,.44],[-1.95,.82],[-1.1,.88],[.9,.88],[1.72,.8],[1.92,.46],[1.86,.14]],cabin:[[-1.8,.86],[-1.72,1.4],[-.35,1.44],[.55,.98],[.95,.88]],cabinWidth:1.4,roof:{z:[-1.6,-.1],y:1.425},exhaust:{z:-1.98,y:.28,n:1},spoiler:{z:-1.9,y:1.14,w:1.3,wing:!0},head:{z:1.92,y:.62,half:.54},tail:{z:-2,y:.76,half:.5},wheelStyle:"sport",skirt:.2},suv:{body:[[-2.36,.24],[-2.48,.6],[-2.4,1.1],[-1.4,1.16],[1.45,1.16],[2.28,1.06],[2.48,.62],[2.38,.24]],cabin:[[-1.72,1.14],[-1.5,1.72],[-.3,1.75],[.72,1.22],[1.1,1.14]],cabinWidth:1.62,roof:{z:[-1.45,-.42],y:1.735},rails:{z:[-1.35,-.35],y:1.79},exhaust:{z:-2.44,y:.4,n:1},head:{z:2.44,y:.9,half:.6},tail:{z:-2.44,y:.96,half:.6},wheelStyle:"mesh",skirt:.3},pickup:{body:[[-2.55,.32],[-2.62,.58],[-2.56,1.14],[-1.42,1.5],[.75,1.5],[2.28,1.24],[2.62,.62],[2.52,.32]],cabin:[[-1.4,1.48],[-1.28,1.92],[.3,1.94],[.62,1.55],[.75,1.48]],cabinWidth:1.72,roof:{z:[-1.2,-.05],y:1.93},bed:{z:[-2.58,-1.45],y:1.12,h:.42},exhaust:{z:-2.6,y:.42,n:1},head:{z:2.56,y:1,half:.62},tail:{z:-2.6,y:1,half:.58},wheelStyle:"steel",skirt:.34},van:{body:[[-2.66,.28],[-2.76,.66],[-2.72,2.18],[-1.6,2.26],[1.5,2.16],[2.42,1.86],[2.58,.66],[2.48,.28]],windshield:{z:2.42,y:1.5,h:.62,lean:.5},windows:{z:[1,2],y:[1.42,1.98]},exhaust:{z:-2.7,y:.38,n:1},head:{z:2.5,y:.82,half:.6},tail:{z:-2.72,y:1,half:.55},wheelStyle:"steel",skirt:.28},bus:{body:[[-5.7,.42],[-5.8,.9],[-5.78,3.1],[-3,3.26],[2.6,3.26],[5.55,3.06],[5.7,1.5],[5.62,.42]],windshield:{z:5.52,y:1.6,h:1.35,lean:.22},windows:{z:[-5.4,4.6],y:[1.72,2.78]},sign:{z:5.62,y:3.05,w:2,h:.42},door:{z:4,y:1.5},head:{z:5.66,y:.9,half:.9},tail:{z:-5.78,y:1.15,half:.85},wheelStyle:"steel",skirt:.5}};function Cf(s,e,t,n){const i=new Ip;i.moveTo(s[0][0],s[0][1]);for(let a=1;a<s.length;a++)i.lineTo(s[a][0],s[a][1]);i.autoClose=!0;const r=new fh(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:2,steps:1,curveSegments:4});r.rotateY(-Math.PI/2),r.translate(e/2,0,0);const o=new It(r,n);return o.castShadow=!0,o}function pn(s,e,t,n,i,r,o,a){const c=new It(new Ai(s,e,t),o);return c.position.set(n,i,r),c.castShadow=!0,a.add(c),c}function Vb(s,e,t,n,i,r,o,a,c,l="z"){const u=new It(new vi(s,e,t,n),a);return l==="x"?u.rotation.z=Math.PI/2:l==="z"&&(u.rotation.x=Math.PI/2),u.position.set(i,r,o),u.castShadow=!0,c.add(u),u}function Gb(s,e,t,n,i){const r=new Pn;r.userData.wheelSpin=!0;const o=i==="high"?36:18,a=Math.min(i==="high"?.095:.085,e*.34),c=new It(new ua(s-a,a,i==="high"?14:8,o),n.tyre);c.rotation.y=Math.PI/2,c.castShadow=!0,r.add(c);const l=new It(new vi(s,s,e-a*.7,o,1,!0),n.tyre);if(l.rotation.z=Math.PI/2,l.castShadow=!0,r.add(l),t==="steel"){const m=new It(new vi(s-a-.015,s-a-.015,e*.72,o),n.rim);m.rotation.z=Math.PI/2,r.add(m);const w=new It(new vi(.07,.07,e*.8,12),new ct({color:2829874,roughness:.5,metalness:.6}));return w.rotation.z=Math.PI/2,r.add(w),r}const u=s-a-.012,d=new It(new vi(u-.012,u-.012,.028,o),new ct({color:9409947,roughness:.35,metalness:.95,envMapIntensity:1}));d.rotation.z=Math.PI/2,r.add(d);const h=t==="mesh"?10:5,f=new Ai(Math.max(.035,e*.5),u*1.86,t==="mesh"?.022:.032);for(let m=0;m<h;m++){const w=new Pn,R=new It(f,n.rim);R.position.x=e*.24,w.add(R),w.rotation.x=m*Math.PI*2/h,r.add(w)}const p=new It(new vi(u,u,Math.max(.03,e-.1),o,1,!0),n.rim);p.rotation.z=Math.PI/2,r.add(p);const v=new It(new vi(.055,.062,Math.max(.05,e-.06),12),n.chrome);v.rotation.z=Math.PI/2,r.add(v);const g=new It(new Ai(Math.max(.045,e*.4),.16,.06),n.caliper);return g.position.set(0,s*.34,-.05),r.add(g),r}function tm(s,e){const t=ls[s],n=Yi[s],i=e.materials,r=new Pn;r.name="vehicle:"+s,t.width/2;const o=t.width*.96;if(r.add(Cf(n.body,o,.055,i.paint)),n.cabin){const x=n.cabinWidth??t.width*.8,b=Cf(n.cabin,x,.035,i.glass);if(r.add(b),n.roof){const[T,L]=n.roof.z;pn(x*.94,.06,Math.abs(L-T),0,n.roof.y,(T+L)/2,i.paint,r)}}if(n.windows){const[x,b]=n.windows.z,[T,L]=n.windows.y,_=Math.abs(b-x),C=(x+b)/2,D=(T+L)/2;for(const O of[1,-1])pn(.04,L-T,_,O*(o/2-.02),D,C,i.glass,r);pn(o*.94,L-T,.04,0,D,b,i.glass,r)}if(n.windshield){const x=n.windshield,b=pn(o*.9,x.h,.05,0,x.y,x.z,i.glass,r);b.rotation.x=-x.lean}if(n.bed){const[x,b]=n.bed.z,T=Math.abs(b-x),L=(x+b)/2;pn(o*.96,.08,T,0,n.bed.y,L,i.trim,r);for(const _ of[1,-1])pn(.08,n.bed.h,T,_*(o/2-.04),n.bed.y+n.bed.h/2,L,i.paint,r);pn(o*.96,n.bed.h,.08,0,n.bed.y+n.bed.h/2,x,i.paint,r)}const a=n.body.reduce((x,b)=>Math.max(x,b[0]),-99),c=n.body.reduce((x,b)=>Math.min(x,b[0]),99),l=n.skirt??.2;if(pn(o*.9,.14,.24,0,l,a-.06,i.trim,r),pn(o*.9,.14,.22,0,l,c+.06,i.trim,r),n.skirt!==void 0)for(const x of[1,-1])pn(.07,.1,t.length*.42,x*(o/2-.02),l+.02,0,i.trim,r);pn(o*.62,.16,.06,0,n.head.y-.1,a-.02,i.trim,r),pn(o*.7,.2,.05,0,n.tail.y-.06,c+.02,i.trim,r);const u=n.head.half;for(const x of[1,-1]){const b=pn(.34,.09,.1,x*u,n.head.y,n.head.z,i.head,r);b.rotation.x=.08,pn(.3,.14,.09,x*(n.tail.half+.06),n.tail.y,n.tail.z,i.tail,r)}pn(u*.9,.035,.06,0,n.tail.y,n.tail.z,i.brake,r);for(const x of[1,-1])pn(.14,.05,.05,x*u*.45,n.tail.y-.16,n.tail.z,i.reverse,r);pn(.42,.12,.03,0,l-.04,a-.02,i.plate,r),pn(.42,.12,.03,0,l+.02,c+.02,i.plate,r);const d=n.cabin?n.cabin[3][0]+.1:t.length*.12,h=n.cabin?n.cabin[3][1]+.02:n.windows?n.windows.y[1]-.06:1.2;for(const x of[1,-1])pn(.05,.045,.16,x*(o/2+.11),h,d,i.trim,r),pn(.09,.055,.06,x*(o/2+.02),h-.01,d,i.trim,r);if(n.exhaust){const x=n.exhaust.n;for(let b=0;b<x;b++)Vb(.055,.055,.22,10,x===1?.55:b===0?.42:-.42,n.exhaust.y,n.exhaust.z,i.chrome,r,"z")}if(n.spoiler){const x=n.spoiler;if(x.wing){pn(x.w,.05,.3,0,x.y,x.z,i.paint,r);for(const b of[1,-1])pn(.05,.24,.16,b*x.w*.4,x.y-.12,x.z+.02,i.trim,r)}else pn(x.w,.06,.16,0,x.y,x.z,i.paint,r)}if(n.scoop&&pn(o*.4,.08,.5,0,n.scoop.y,n.scoop.z,i.trim,r),n.rails)for(const x of[1,-1])pn(.05,.05,Math.abs(n.rails.z[1]-n.rails.z[0]),x*(o/2-.16),n.rails.y,(n.rails.z[0]+n.rails.z[1])/2,i.chrome,r);n.sign&&pn(n.sign.w,n.sign.h,.08,0,n.sign.y,n.sign.z,i.head,r),n.door&&pn(.04,1.95,.5,o/2+.01,n.door.y,n.door.z,i.trim,r);let f=null;if(e.interior){const x=n.cabin?n.cabin[3][1]+.02:1.05,b=n.cabin?n.cabin[3][0]+.25:.8;pn(o*.92,.16,.5,0,x,b,i.cabin,r),pn(o*.9,.1,.28,0,x+.12,b-.06,i.cabin,r);const T=new Pn;T.position.set(.38,x-.02,b-.24),T.rotation.x=-.35;const L=new It(new ua(.17,.022,8,20),i.cabin);T.add(L);for(let C=0;C<3;C++){const D=new It(new Ai(.03,.3,.02),i.chrome);D.rotation.z=C*Math.PI/3,T.add(D)}const _=new It(new vi(.05,.05,.04,10),i.cabin);_.rotation.x=Math.PI/2,T.add(_),r.add(T),f=T;for(const[C,D]of[[.34,-.35],[-.34,-.35],[.34,.55],[-.34,.55]])pn(.44,.55,.45,C,x-.42,D,i.cabin,r)}const p=[],v=t.wheelbase/2,g=-t.wheelbase/2,m=t.track/2*.985,w=t.track/2*1.01,R=[[m,v,!0],[-m,v,!0],[w,g,!1],[-w,g,!1]];for(const[x,b,T]of R){const L=new Pn;L.position.set(x,t.wheelR,b),L.userData.wheelRig=!0;const _=Gb(t.wheelR,t.wheelW,n.wheelStyle,i,e.detail);L.add(_),r.add(L),p.push({pivot:L,spin:_,front:T,x,z:b,radius:t.wheelR,width:t.wheelW})}return{root:r,rigs:p,steering:f,materials:i}}function Wb(s,e,t=!0){const n=ls[s],i=em(e,!0),r=tm(s,{detail:"high",interior:t,materials:i}),o=Yi[s].head.z,a=Yi[s].tail.z;return{root:r.root,rigs:r.rigs,steering:r.steering,materials:i,spec:n,gy:Fo+n.wheelR,headAnchors:[new B(Yi[s].head.half,Yi[s].head.y,o),new B(-Yi[s].head.half,Yi[s].head.y,o)],tailAnchors:[new B(Yi[s].tail.half+.06,Yi[s].tail.y,a),new B(-(Yi[s].tail.half+.06),Yi[s].tail.y,a)]}}const Xb=["paint","plastic","metal","head","tail","reverse"],Hu={paint:new ct({color:16777215,metalness:.6,roughness:.3,envMapIntensity:1.05,vertexColors:!0}),plastic:new ct({color:16777215,metalness:.1,roughness:.72,envMapIntensity:.5,vertexColors:!0}),metal:new ct({color:16777215,metalness:.85,roughness:.16,envMapIntensity:1.2,vertexColors:!0}),head:new ct({color:14542058,emissive:16773844,emissiveIntensity:.12,roughness:.2}),tail:new ct({color:3410442,emissive:16720392,emissiveIntensity:.5,roughness:.25}),reverse:new ct({color:3816768,emissive:15265007,emissiveIntensity:.05,roughness:.3})},qb=new ct({color:16777215,metalness:.5,roughness:.45,envMapIntensity:.7,vertexColors:!0});function Yb(s){return(Array.isArray(s)?s[0]:s)?.userData?.role??"plastic"}function Kb(s,e,t){let n=s.geometry.clone();n.index&&(n=n.toNonIndexed());for(const o of Object.keys(n.attributes))o!=="position"&&o!=="normal"&&o!=="uv"&&n.deleteAttribute(o);n.attributes.normal||n.computeVertexNormals(),n.attributes.uv||n.setAttribute("uv",new En(new Float32Array(n.attributes.position.count*2),2));const i=n.attributes.position.count,r=new Float32Array(i*3);for(let o=0;o<i;o++)r[o*3]=e.r,r[o*3+1]=e.g,r[o*3+2]=e.b;return n.setAttribute("color",new En(r,3)),n.applyMatrix4(t.clone().multiply(s.matrixWorld)),n}function nm(s,e,t){if(!s.length)return null;t.updateMatrixWorld(!0);const n=t.matrixWorld.clone().invert(),i=[];for(const o of s){o.updateMatrixWorld(!0);const a=Kb(o,e(o),n);a&&i.push(a)}if(!i.length)return null;if(i.length===1)return i[0];const r=eb(i,!1);return r||i[0]}function jb(s){s.updateMatrixWorld(!0);const e=[];s.traverse(i=>{i.isMesh&&e.push(i)});const t=nm(e,i=>{const r=i.material;return new nt(r.color)},s);if(!t)return;for(const i of e)i.parent?.remove(i),i.geometry.dispose();const n=new It(t,qb);n.castShadow=!0,s.add(n)}function $b(s,e){const t=ls[s],n=em(e,!1),i=tm(s,{detail:"low",interior:!1,materials:n}),r=new Pn;r.name="fleet:"+s,r.updateMatrixWorld(!0);const o={paint:[],plastic:[],metal:[],head:[],tail:[],reverse:[]},a=[];i.root.traverse(l=>{const u=l;if(!u.isMesh)return;let d=u;for(;d&&d!==i.root&&!d.userData.wheelRig;)d=d.parent;d===i.root&&o[Yb(u.material)].push(u)});for(const l of i.rigs){jb(l.spin),l.pivot.updateMatrixWorld(!0);const u=new Pn;u.userData.wheelRig=!0,u.position.copy(l.pivot.position);const d=l.spin;d.parent?.remove(d),u.add(d),r.add(u),a.push({...l,pivot:u})}let c=null;for(const l of Xb){const u=nm(o[l],h=>{const f=h.material;return l==="paint"?new nt(16777215):new nt(f.color)},r);if(!u)continue;const d=new It(u,Hu[l]);d.castShadow=l!=="head"&&l!=="tail"&&l!=="reverse",d.receiveShadow=!1,r.add(d),l==="paint"&&(c=d)}return{root:r,rigs:a,spec:t,paintMesh:c}}function Pf(s,e){const t=s.root.clone(!0);if(s.paintMesh){const n=Hu.paint.clone();n.color.setHex(e),t.traverse(i=>{const r=i;r.isMesh&&r.material===Hu.paint&&(r.material=n)})}return t}const Lf=["fl","fr","rl","rr"];function Zb(s){return s.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g,"$1 $2").replace(/[^A-Za-z0-9]+/g," ").trim().toLowerCase().split(/\s+/).map(e=>e.replace(/\d+$/,"")).filter(Boolean)}const Jb=["wheel","whl","tyre","tire","roue","wiel","pneu","reifen","koleso"],Qb=["rim","rad"],If=s=>Qb.includes(s)||Jb.some(e=>s.startsWith(e)),e1=/(steer|interior|dash|pedal|seat|mirror|wiper|door|handle|suspens|spring|shock|exhaust|grill|headlight|taillight|brakelight|caliper|hubcap|nut|bolt|logo|badge|trim|body|glass)/,t1=[[["front","fwd","fore","avant","vorne","delan","anter"],"f"],[["rear","back","arri","hint","post","tras"],"b"]],n1=[["f","f"],["vf","f"],["av","f"],["b","b"],["hr","b"],["ar","b"]],i1=[[["left","lhs","izq","links","gauche"],"l"],[["right","rhs","rechts","droite"],"r"]],s1=[["l","l"],["g","l"],["r","r"],["d","r"]],ic=s=>s==="f"?"f":s==="r"||s==="b"?"b":null,sc=s=>s==="l"?"l":s==="r"?"r":null;function Vu(s){const e=Zb(s);if(!e.length||!e.some(If)||e1.test(e.join("")))return null;let t=null,n=null;const i=[];for(const r of e){if(If(r))continue;const o=t1.find(([c])=>c.some(l=>r.startsWith(l)))?.[1]??n1.find(([c])=>c===r)?.[1];if(!t&&o){t=o;continue}const a=i1.find(([c])=>c.some(l=>r.startsWith(l)))?.[1]??s1.find(([c])=>c===r)?.[1];if(!n&&a){n=a;continue}i.push(r)}if(!t||!n)for(const r of i){if(r.length<2)continue;const[o,a]=[r[0],r[1]],c=[ic(o),sc(a)],l=[sc(o),ic(a)];if(c[0]&&c[1]?(t=t??c[0],n=n??c[1]):l[0]&&l[1]&&(n=n??l[0],t=t??l[1]),t&&n)break}if(!t||!n){for(const r of i)if(r.length===1&&(!t&&ic(r)?t=ic(r):!n&&sc(r)&&(n=sc(r)),t&&n))break}return!t&&!n?null:{side:n,axle:t}}const Gu=s=>s.length?s.reduce((e,t)=>e+t,0)/s.length:0,Kn=(s,e)=>Gu(s.map(t=>t[e]));function r1(s){if(!s.length)return null;const e=Kn(s,"x"),t=Kn(s,"z");let n=s[0],i=1/0;for(const r of s){const o=(r.x-e)**2+(r.z-t)**2;o<i&&(i=o,n=r)}return n}const o1=(s,e,t)=>s*Math.cos(t)+e*Math.sin(t);function a1(s,e){const t=Math.hypot(e.max[0]-e.min[0],e.max[1]-e.min[1],e.max[2]-e.min[2]);if(s.length<4||t<=0)return null;const n=Math.max(...s.map(_=>_.radius));if(s.length>4&&n>0){const _=s.filter(C=>C.radius>=n*.45);_.length>=4&&(s=_)}const i=_=>Vu(_.name),r=s.filter(_=>{const C=i(_);return!!C&&!!C.side&&!!C.axle});if(r.length>=4){const _=r.filter(V=>i(V)?.axle==="f"),C=r.filter(V=>i(V)?.axle==="b"),D=r.filter(V=>i(V)?.side==="l"),O=r.filter(V=>i(V)?.side==="r");if(_.length&&C.length&&D.length&&O.length){const V=Kn(_,"x")-Kn(C,"x"),$=Kn(_,"z")-Kn(C,"z"),H=Kn(O,"x")-Kn(D,"x"),j=Kn(O,"z")-Kn(D,"z"),ie=Math.hypot(V,$),ne=Math.hypot(H,j);if(ie>t*.18&&ne>t*.04){const we=-Math.atan2(V,$);return{slot:Lf.map(le=>{const ye=r.filter(Qe=>{const $e=i(Qe);return $e?.axle===(le[0]==="f"?"f":"b")&&$e?.side===(le[1]==="l"?"l":"r")});return r1(ye)?.id??null}),yaw:we,wheelbase:ie,track:ne,wheelR:Gu([..._,...C].map(le=>le.radius)),certain:!0}}}}const o=_=>Math.max(...s.map(C=>C[_]))-Math.min(...s.map(C=>C[_])),a=o("z")>=o("x")?"z":"x",c=a==="z"?"x":"z",l=[...s].sort((_,C)=>_[a]-C[a]),u=Math.max(2,Math.round(l.length/2)),d=l.slice(0,u),h=l.slice(l.length-u),f=Math.abs(Kn(h,a)-Kn(d,a)),p=Kn(s,c),v=Math.abs(Kn(s.filter(_=>_[c]<=p),c)-Kn(s.filter(_=>_[c]>p),c));if(f<=t*.18||v<=t*.04)return null;const g=Kn(d,a)-e.min[a==="x"?0:2],m=e.max[a==="x"?0:2]-Kn(h,a),w=g<m,R=w?d:h,x=w?h:d,b=Kn(R,a)-Kn(x,a),T=-Math.atan2(a==="x"?b:0,a==="z"?b:0);return{slot:Lf.map(_=>{const O=[...(_[0]==="f"?R:x).map($=>({s:$,x:o1($.x,$.z,T)}))].sort(($,H)=>H.x-$.x),V=_[1]==="l"?O.slice(0,Math.ceil(O.length/2)):O.slice(Math.ceil(O.length/2));return(V.length?V:O)[0]?.s.id??null}),yaw:T,wheelbase:f,track:v,wheelR:Gu(s.map(_=>_.radius)),certain:!1}}const Yr=(s,e,t)=>s<e?e:s>t?t:s;function c1(s){return{length:Yr(s.length,2.2,13),width:Yr(s.width,1.1,3.4),height:Yr(s.height,.7,4.6),wheelbase:Yr(s.wheelbase,1.3,9),track:Yr(s.track,.8,3.2),wheelR:Yr(s.wheelR,.16,.78)}}const Sn=[-550,-440,-330,-220,-110,110,220,330,440,550],Nf=7,Ln=610,je=.15,rc=64,jr=2.5,_r=[];for(let s=0;s<Sn.length-1;s++)_r.push([Sn[s]+9.5,Sn[s+1]-9.5]);const Ho=[],xc=[],Tn=(s=>()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296})(20260901),_t=(s,e)=>s+Tn()*(e-s),Do=s=>s[Tn()*s.length|0];for(let s=0;s<_r.length;s++){xc.push([]);for(let e=0;e<_r.length;e++){const t=_r[s],n=_r[e];if(t[0]<rc&&t[1]>-rc&&n[0]<rc&&n[1]>-rc){xc[s].push(null);continue}const i=(t[0]+t[1])/2,r=(n[0]+n[1])/2,o=Math.max(Math.abs(i),Math.abs(r)),a=o<250?"downtown":o<430?"midtown":"outer",c={x0:t[0],x1:t[1],z0:n[0],z1:n[1],cx:i,cz:r,w:t[1]-t[0],d:n[1]-n[0],type:a,i:s,j:e,blds:[]};xc[s].push(c),Ho.push(c)}}function Df(s){for(let e=0;e<_r.length;e++){const t=_r[e];if(s>=t[0]&&s<=t[1])return e}return-1}function Ys(s,e){const t=Df(s);if(t<0)return null;const n=Df(e);return n<0?null:xc[t][n]}function l1(s,e){if(Math.abs(s)<8&&Math.abs(e)>44&&Math.abs(e)<850)return!0;for(const t of Sn)if(Math.abs(s-t)<Nf&&Math.abs(e)<Ln||Math.abs(e-t)<Nf&&Math.abs(s)<Ln)return!0;return!1}function Gl(s,e){const t=Ln+jr;return s<-t||s>t||e<-t||e>t?0:Ys(s,e)||Ys(s-jr,e)||Ys(s+jr,e)||Ys(s,e-jr)||Ys(s,e+jr)?je:0}function Uf(s){let e=0,t=1/0;return Sn.forEach((n,i)=>{const r=Math.abs(n-s);r<t&&(t=r,e=i)}),e}const u1=(s,e)=>(s*3+e*5)%7*.9;function Ff(s,e,t){let n=(t+u1(s,e))%11;return n<0&&(n+=11),n<5?{ns:"g",ew:"r"}:n<6?{ns:"a",ew:"r"}:n<10?{ns:"r",ew:"g"}:{ns:"r",ew:"a"}}function mr(s,e,t,n=1,i=!0){const r=document.createElement("canvas");r.width=s,r.height=e,t(r.getContext("2d"),s,e);const o=new Lu(r);return o.wrapS=o.wrapT=Zs,o.anisotropy=n,i&&(o.colorSpace=In),o}const Jr=(s,e,t,n,i,r=!0)=>{for(let o=0;o<n;o++){const a=r?150+Math.random()*90:20+Math.random()*50;s.fillStyle=`rgba(${a},${a},${a},${i})`,s.fillRect(Math.random()*e,Math.random()*t,1+Math.random()*3,1+Math.random()*3)}},im={tile:{base:"#b9b0a2",frame:"#8f877b",sill:"#d6cec1",glass:"#2b3540"},concrete:{base:"#9d9a94",frame:"#84817c",sill:"#b5b2ac",glass:"#28313a"},brick:{base:"#8b5340",frame:"#e6e0d6",sill:"#efe9de",glass:"#232a30",mortar:"#9d6a54"},glass:{base:"#4b5a66",frame:"#2c343c",sill:"#5d6d7a",glass:"#4d6a80",accent:"#2f3a44"},panel:{base:"#a8aeb2",frame:"#7d8489",sill:"#bcc2c6",glass:"#313b45"},corrugated:{base:"#8d9296",frame:"#6f7478",sill:"#9aa0a4",glass:"#2f3841"}};function h1(s,e,t){const n=im[s],i=2,r=2,o=128,a=128,c=o*i,l=a*r,u=mr(c,l,(h,f,p)=>{if(h.fillStyle=n.base,h.fillRect(0,0,f,p),s==="brick")for(let v=0;v<p;v+=8){h.fillStyle="rgba(0,0,0,.14)",h.fillRect(0,v,f,1);const g=v/8%2?8:0;for(let m=-8;m<f;m+=16)h.fillStyle="rgba(0,0,0,.10)",h.fillRect(m+g,v,1,8),h.fillStyle="rgba(255,255,255,.05)",h.fillRect(m+g+1,v,1,8)}else if(s==="panel"||s==="corrugated")for(let v=0;v<f;v+=8)h.fillStyle=s==="corrugated"?"rgba(0,0,0,.16)":"rgba(0,0,0,.09)",h.fillRect(v,0,1,p),h.fillStyle="rgba(255,255,255,.07)",h.fillRect(v+1,0,1,p);else if(s==="tile"||s==="concrete"){Jr(h,f,p,4200,.05);for(let v=0;v<p;v+=a)h.fillStyle="rgba(0,0,0,.10)",h.fillRect(0,v,f,1)}Jr(h,f,p,2600,.03,!1);for(let v=0;v<r;v++)for(let g=0;g<i;g++){const m=g*o,w=v*a;if(s==="glass"){h.fillStyle=n.glass,h.fillRect(m+4,w+10,o-8,a-46),h.fillStyle="rgba(255,255,255,.16)",h.fillRect(m+4,w+10,o-8,10),h.fillStyle=n.accent??n.frame,h.fillRect(m+4,w+a-40,o-8,34),h.fillStyle="rgba(0,0,0,.28)",h.fillRect(m+4,w+a-8,o-8,4),h.fillStyle=n.frame,h.fillRect(m+o/2-1,w+10,2,a-46);continue}const R=s==="brick"?52:66,x=s==="concrete"||s==="tile"?66:58,b=m+(o-R)/2,T=w+34;h.fillStyle=n.frame,h.fillRect(b-5,T-5,R+10,x+10);const L=h.createLinearGradient(b,T,b+R,T+x);L.addColorStop(0,n.glass),L.addColorStop(.55,"#54626d"),L.addColorStop(1,n.glass),h.fillStyle=L,h.fillRect(b,T,R,x),h.fillStyle="rgba(255,255,255,.20)",h.fillRect(b,T,R,7),h.fillStyle="rgba(0,0,0,.35)",h.fillRect(b,T+x-6,R,6),h.fillStyle=n.frame,h.fillRect(b+R/2-1,T,2,x),h.fillStyle=n.sill,h.fillRect(b-7,T+x+4,R+14,7),s==="brick"&&(h.fillStyle="rgba(0,0,0,.18)",h.fillRect(b-6,T-8,R+12,4))}},2),d=mr(c,l,(h,f,p)=>{h.fillStyle="#000000",h.fillRect(0,0,f,p);for(let v=0;v<r;v++)for(let g=0;g<i;g++){if(Math.random()>(e?t:0))continue;const m=g*o,w=v*a,x=(e?Math.random()<.7:!1)?"rgba(255,214,150,":"rgba(206,228,255,",b=h.createRadialGradient(m+o/2,w+60,4,m+o/2,w+60,70);b.addColorStop(0,x+"0.95)"),b.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=b,s==="glass"?h.fillRect(m+4,w+10,o-8,a-46):h.fillRect(m+26,w+30,o-52,a-66)}},1);return{map:u,emissive:d}}const Of=new Ft,Bf=new Wn,zf=new ps,kf=new B,Hf=new B;function wt(s,e,t){return{geo:s,mat:e,list:[],shadow:t}}function Ae(s,e,t,n,i,r,o,a=0,c=0){kf.set(e,t,n),zf.set(c,a,0),Bf.setFromEuler(zf),Hf.set(i,r,o),Of.compose(kf,Bf,Hf),s.list.push(Of.clone())}function d1(s,e){for(const t of e){if(!t.list.length)continue;const n=new xr(t.geo,t.mat,t.list.length);t.list.forEach((i,r)=>n.setMatrixAt(r,i)),n.instanceMatrix.needsUpdate=!0,n.castShadow=t.shadow,n.receiveShadow=!0,n.frustumCulled=!1,s.add(n)}}function f1(s){const e=s.aniso,t=new Pn;t.name="apex-city";const n=[],i=[],r=[],o=[],a=[],c=new Ai(1,1,1);c.translate(0,.5,0);const l=new ci(1,1);l.rotateX(-Math.PI/2);const u=new vi(.5,.5,1,10);u.translate(0,.5,0);const d=new Pc(.5,14);d.rotateX(-Math.PI/2);const h=new ua(.5,.09,6,14,Math.PI/2);h.rotateX(-Math.PI/2),new ia(.5,1,8).translate(0,.5,0);const p=new Lc(.5,1),v=new ct({color:3356219,roughness:.98,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),g=new yi({color:1776928,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),m=new ct({color:14276300,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),w=new ct({color:13214010,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),R=new ct({color:3104670,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),x=new ct({color:3816769,roughness:.6,metalness:.5,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),b=new ct({color:14201407,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),T=new ct({color:16777215,roughness:.95,envMapIntensity:.3});T.map=mr(256,256,(A,Z,q)=>{A.fillStyle="#9c988e",A.fillRect(0,0,Z,q),Jr(A,Z,q,5200,.06),Jr(A,Z,q,2600,.04,!1);for(let xe=0;xe<4;xe++)A.fillStyle="rgba(0,0,0,.22)",A.fillRect(xe*64,0,2,q),A.fillRect(0,xe*64,Z,2);A.fillStyle="rgba(0,0,0,.10)",A.fillRect(0,0,Z,3)},e),T.map.repeat.set(.25,.25);const L=new ct({color:11776168,roughness:.9,envMapIntensity:.35}),_=new ct({color:9341828,roughness:.95,envMapIntensity:.3}),C=new ct({color:4869199,roughness:.97,envMapIntensity:.25});C.map=mr(128,128,(A,Z,q)=>{A.fillStyle="#4c4e51",A.fillRect(0,0,Z,q),Jr(A,Z,q,2600,.09),Jr(A,Z,q,900,.06,!1)},e),C.map.repeat.set(.12,.12);const D=new ct({color:5921886,roughness:1,envMapIntensity:.2}),O=new ct({color:9344153,roughness:.45,metalness:.7,envMapIntensity:.8}),V=new ct({color:3356218,roughness:.55,metalness:.6,envMapIntensity:.6}),$=new ct({color:10855067,roughness:.92,envMapIntensity:.35}),H=new ct({color:1844268,roughness:.12,metalness:.55,envMapIntensity:1.2,emissive:16764554,emissiveIntensity:.03}),j=new ct({color:1053206,roughness:.5,emissive:16777215,emissiveIntensity:.02}),ie=[],ne=new ct({color:7296567,roughness:.9,envMapIntensity:.25}),we=new ct({color:4020780,roughness:1,envMapIntensity:.25}),re=new ct({color:6056762,roughness:1,envMapIntensity:.25}),le=new ct({color:1316893,roughness:.06,metalness:.75,envMapIntensity:1.6,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-5}),ye=new ct({color:6975875,roughness:1,envMapIntensity:.4,fog:!0}),Qe={},$e={tile:.5,concrete:.42,brick:.55,glass:.62,panel:.38,corrugated:.18},At={tile:6.4,concrete:6.6,brick:6.2,glass:6.8,panel:6,corrugated:4},Tt={tile:7,concrete:7.2,brick:6.8,glass:7.4,panel:7,corrugated:6};for(const A of Object.keys(im))for(let Z=0;Z<2;Z++){const q=h1(A,Z===0,$e[A]),xe=new ct({map:q.map,emissiveMap:q.emissive,emissive:new nt(16767400),emissiveIntensity:.02,roughness:A==="glass"?.22:.82,metalness:A==="glass"?.62:.03,envMapIntensity:A==="glass"?1.1:.4}),pe=At[A],fe=Tt[A];xe.onBeforeCompile=Pe=>{Pe.uniforms.uBayW={value:pe},Pe.uniforms.uFloorH={value:fe},Pe.vertexShader=`uniform float uBayW;
uniform float uFloorH;
`+Pe.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
          #ifdef USE_INSTANCING
            vec3 iScale = vec3(
              length(instanceMatrix[0]), length(instanceMatrix[1]), length(instanceMatrix[2]));
            vec3 an = abs(normal);
            float uw = an.z * iScale.x + an.x * iScale.z;
            vec2 cityTile = vec2(
              (an.z * position.x + an.x * position.z) * uw, position.y * iScale.y
            ) / vec2(uBayW, uFloorH);
            #ifdef USE_MAP
              vMapUv = cityTile;
            #endif
            #ifdef USE_EMISSIVEMAP
              vEmissiveMapUv = cityTile;
            #endif
          #endif`)},Qe[`${A}${Z}`]={mat:xe,style:A}}const Bt=Object.values(Qe).map(A=>A.mat),oe={},_e=wt(c,C,!0),We=wt(l,D,!1),lt=wt(c,$,!0),qe=wt(c,$,!0),xt=wt(c,H,!1),Yt=wt(c,new ct({color:16777215,roughness:.8}),!1),ve=wt(c,j,!1),Ee=wt(c,$,!1),Re=wt(c,O,!1),Ce=wt(u,ne,!1),Oe=wt(c,V,!1),mt=wt(u,V,!1),at=[],yt=wt(c,V,!1),ee=wt(u,ne,!0),N=wt(p,we,!0),ft=wt(l,new ct({color:3879462,roughness:1}),!1),St=wt(c,ne,!1),I=wt(c,V,!1),y=wt(u,V,!1),X=wt(u,new ct({color:11023658,roughness:.6}),!1),Q=wt(u,V,!1),ce=wt(c,$,!1),Le=wt(p,we,!1),Be=wt(u,V,!1),de=wt(c,O,!1),ue=wt(u,O,!1),Te=[],ot=wt(c,V,!0),Ve=wt(c,H,!1),Ne=wt(u,V,!1),rt=wt(c,V,!1),gt=wt(c,V,!0),dt=wt(l,m,!1),W=wt(l,w,!1),Ie=wt(l,R,!1),ge=wt(l,b,!1),Xe=wt(l,v,!1),Ye=wt(l,g,!1),Se=wt(d,x,!1),ut=wt(d,le,!1),it=wt(c,L,!1),tn=wt(h,_,!1),zt=wt(c,T,!1),ni=wt(l,m,!1),mi=new yi({color:16777215,toneMapped:!1}),Mt=new yi({color:16777215,toneMapped:!1}),Xn=new yi({color:16777215,toneMapped:!1}),xs=new vi(.14,.14,.06,10);xs.rotateX(Math.PI/2);const _s=[],Js=[],Ci=[],Fn={r:new nt(1,.18,.12),a:new nt(1,.62,.1),g:new nt(.22,1,.35)},qn={r:new nt(.07,.015,.012),a:new nt(.07,.045,.01),g:new nt(.015,.07,.03)},gi=[],vs=new ct({color:14275778,emissive:16773320,emissiveIntensity:.05,roughness:.6}),Ns=wt(c,vs,!1),Bi=wt(p,new yi({color:16767392,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),!1);function zi(A,Z,q,xe){return mr(256,128,(pe,fe,Pe)=>{pe.fillStyle=Z,pe.fillRect(0,0,fe,Pe),xe&&(pe.fillStyle=xe,pe.fillRect(0,Pe-14,fe,14)),pe.strokeStyle=q,pe.lineWidth=4,pe.strokeRect(6,6,fe-12,Pe-12),pe.fillStyle=q,pe.textAlign="center",pe.textBaseline="middle";const De=A.length>1?40:52;pe.font=`700 ${De}px Rajdhani, system-ui, sans-serif`,A.forEach((st,be)=>{pe.fillText(st,fe/2,Pe/2+(be-(A.length-1)/2)*(De+2))})},e)}const On=[{tex:zi(["APEX TYRES"],"#14161a","#ff6a2a","#ff6a2a"),w:12,h:5},{tex:zi(["PIT LANE","CAFFE"],"#101418","#ece9e2","#7dc95e"),w:10,h:5.5},{tex:zi(["240 HZ","DYNAMICS"],"#0f1216","#8fb8cc","#8fb8cc"),w:11,h:5},{tex:zi(["GRID","MOTORS"],"#161413","#e8e2d6","#c9a13a"),w:12,h:4.5}];for(const A of On){const Z=new ct({map:A.tex,roughness:.6,emissiveMap:A.tex,emissive:16777215,emissiveIntensity:.02});ie.push(Z),at.push(wt(new ci(A.w,A.h),Z,!1))}const ys=new ct({map:mr(128,128,(A,Z,q)=>{A.fillStyle="#f2efe6",A.fillRect(0,0,Z,q),A.fillStyle="#c02a1e",A.beginPath(),A.arc(Z/2,q/2,Z/2-4,0,Math.PI*2),A.fill(),A.fillStyle="#f2efe6",A.beginPath(),A.arc(Z/2,q/2,Z/2-12,0,Math.PI*2),A.fill(),A.fillStyle="#14161a",A.font="700 56px Rajdhani, system-ui, sans-serif",A.textAlign="center",A.textBaseline="middle",A.fillText("50",Z/2,q/2+2)},e),roughness:.7});Te.push(wt(new ci(.7,.7),ys,!1));const Qs=new ct({map:mr(256,64,(A,Z,q)=>{A.fillStyle="#14161a",A.fillRect(0,0,Z,q),A.fillStyle="#ece9e2",A.fillRect(8,8,Z-16,q-16),A.fillStyle="#14161a",A.font="700 34px Rajdhani, system-ui, sans-serif",A.textAlign="center",A.textBaseline="middle",A.fillText("ONE WAY →",Z/2,q/2+2)},e),roughness:.7,side:Ti});Te.push(wt(new ci(1.6,.4),Qs,!1));const Tr=["CAFE","DELI","GARAGE","MOTORS","BOOKS","PIZZA","TYRES","BAR","PHARMACY","STUDIO","MARKET","DINER"];for(const A of Tr){const Z=zi([A],"#0d0f12",A.length>6?"#ffd08a":"#bfe6ff"),q=new ct({map:Z,emissiveMap:Z,emissive:16777215,emissiveIntensity:.02,roughness:.5,side:Ti});Vf.push({text:A,mat:q})}const Dn=.9;function ki(A,Z,q,xe,pe,fe,Pe,De){const st=`${fe}${Tn()<.5?0:1}`;let be=oe[st];if(!be){const Vn=Qe[st];be=wt(c,Vn.mat,!0),oe[st]=be,n.push(be)}Ae(be,A,je,Z,q,pe,xe),Pe.blds.push({x:A,z:Z,hx:q/2+.35,hz:xe/2+.35,top:je+pe}),Ae(_e,A,je+pe,Z,q+.25,.28,xe+.25),Ae(lt,A,je+pe+.1,Z,q+.5,.5,xe+.5),Ae(We,A,je+pe+.3,Z,q*.92,1,xe*.92);const Bn=Math.max(1,Math.round(q*xe/240));for(let Vn=0;Vn<Bn;Vn++){const Un=_t(-q/2+2,q/2-2),un=_t(-xe/2+2,xe/2-2);if(Tn()<.55)Ae(Re,A+Un,je+pe+.3,Z+un,_t(1.6,3),_t(1,1.8),_t(1.4,2.4));else if(pe>15&&Tn()<.5){const bn=_t(2.4,4);Ae(Ce,A+Un,je+pe+1.4,Z+un,2.6,bn,2.6);for(const Pt of[-.8,.8])for(const hn of[-.8,.8])Ae(Oe,A+Un+Pt,je+pe+.3,Z+un+hn,.16,1.2,.16)}else Ae(mt,A+Un,je+pe+.3,Z+un,.16,_t(3,8),.16)}if(De){Ae(qe,A,je,Z,q+.7,4.3,xe+.7);for(const[un,bn,Pt]of[[0,xe/2+.36,0],[0,-xe/2-.36,0]])Ae(xt,A+un,je+.5,Z+bn,q*.94,2.7,.1,Pt),Ae(ve,A+un,je+3.6,Z+bn+(bn>0?.06:-.06),q*.5,.62,.12,Pt);for(const[un,bn,Pt]of[[q/2+.36,0,Math.PI/2],[-q/2-.36,0,Math.PI/2]])Ae(xt,A+un,je+.5,Z+bn,xe*.94,2.7,.1,Pt),Ae(ve,A+un+(un>0?.06:-.06),je+3.6,Z+bn,xe*.5,.62,.12,Pt);const Un=Math.max(1,Math.floor(q/7));for(let un=0;un<Un;un++){if(Tn()<.35)continue;const bn=-q/2+q/Un*(un+.5),Pt=Math.min(5.4,q/Un*.86),hn=xe/2+1;for(const an of[1,-1])Ae(Yt,A+bn,je+3.2,Z+an*hn,Pt,.14,2,0,-.22*an)}}if(fe==="brick"&&pe>9){const Vn=Math.floor(pe/3.6)-1;for(let Un=1;Un<=Vn;Un++){const un=je+Un*3.6;if(un>je+pe-1.5)break;for(const bn of[1,-1])Ae(Ee,A+bn*(q/2+.5),un,Z+_t(-xe/2+1,xe/2-1),1.1,.2,2.2)}}}const Ds=[],Us=[];for(const A of Ho){const Z=Math.max(Math.abs(A.cx),Math.abs(A.cz));Z>300&&Ds.length<4&&Tn()<.14?(A.type="park",A.park=!0,Ds.push(A)):Z>300&&Us.length<4&&Tn()<.12&&(A.type="lot",Us.push(A));const q=jr;Ae(zt,A.cx,0,A.cz,A.w+2*q,je,A.d+2*q);const xe=.35,pe=q+xe/2;Ae(it,A.cx,0,A.z0-pe,A.w+2*q+xe,je+.03,xe),Ae(it,A.cx,0,A.z1+pe,A.w+2*q+xe,je+.03,xe),Ae(it,A.x0-pe,0,A.cz,xe,je+.03,A.d+2*q+xe),Ae(it,A.x1+pe,0,A.cz,xe,je+.03,A.d+2*q+xe);for(const[Pt,hn]of[[-1,-1],[1,-1],[-1,1],[1,1]])Ae(tn,A.cx+Pt*(A.w/2+q),0,A.cz+hn*(A.d/2+q),xe*2,je+.03,xe*2);if(A.type==="park"){Ae(We,A.cx,je+.02,A.cz,A.w-6,1,A.d-6);const Pt=wt(l,re,!1);Ae(Pt,A.cx,je+.03,A.cz,A.w-8,1,A.d-8),n.push(Pt);for(let an=0;an<16;an++)r.push([A.cx+_t(-A.w/2+6,A.w/2-6),A.cz+_t(-A.d/2+6,A.d/2-6)]);const hn=wt(l,T,!1);Ae(hn,A.cx,je+.04,A.cz,A.w-16,1,4),Ae(hn,A.cx,je+.04,A.cz,4,1,A.d-16),n.push(hn);for(let an=0;an<5;an++){const Xt=A.cx+_t(-A.w/2+8,A.w/2-8),mn=A.cz+_t(-A.d/2+8,A.d/2-8);Ae(St,Xt,je+.45,mn,1.8,.12,.5,_t(0,3.14)),Ae(I,Xt-.7,je+.2,mn,.12,.4,.45),Ae(I,Xt+.7,je+.2,mn,.12,.4,.45),Ae(y,Xt+1.6,je+.42,mn,.6,.8,.6)}continue}if(A.type==="lot"){const Pt=wt(l,v,!1);Ae(Pt,A.cx,je+.02,A.cz,A.w-8,1,A.d-8),n.push(Pt);const hn=wt(l,m,!1);let an=0;for(const Xt of[-13,13]){for(let mn=-5;mn<=5;mn++)Ae(hn,A.cx+mn*3,je+.05,A.cz+Xt,.1,1,5),mn<5&&Ae(hn,A.cx+mn*3+1.5,je+.05,A.cz+Xt+1.8,3,1,.1),an<22&&Math.abs(mn)<5&&Tn()<.72&&(o.push([A.cx+mn*3,A.cz+Xt+(Xt<0?-2.6:2.6),0]),an++);Ae(hn,A.cx,je+.05,A.cz+Xt+3.6,33,1,.12)}n.push(hn),ki(A.cx,A.cz,Math.min(26,A.w-30),Math.min(18,A.d-40),_t(7,11),"corrugated",A,!1);continue}const fe=A.type==="outer"?_t(10,14):_t(14,20),Pe=fe,De=fe,st=[],be=()=>A.type==="downtown"?Tn()<.55?"glass":"panel":A.type==="midtown"?Do(["tile","concrete","panel","glass"]):Do(["brick","brick","concrete","corrugated","panel"]),Bn=()=>A.type==="downtown"?Tn()<.25?_t(72,118):_t(34,62):A.type==="midtown"?_t(15,34):_t(7,16);for(const Pt of[1,-1]){const an=(Pt>0?A.z1-Dn:A.z0+Dn)-Pt*Pe/2;let Xt=A.x0+Dn;for(;Xt<A.x1-Dn-6;){const mn=Math.min(_t(9,20),A.x1-Dn-Xt);if(mn<6)break;const Hi=Bn();st.push({cx:Xt+mn/2,cz:an,w:mn-.6,d:Pe-.9,h:Hi,style:be(),podium:!0}),Xt+=mn+_t(.4,2.4)}}for(const Pt of[1,-1]){const an=(Pt>0?A.x1-Dn:A.x0+Dn)-Pt*De/2;let Xt=A.z0+Dn+1;for(;Xt<A.z1-Dn-Pe-4;){const mn=Math.min(_t(9,18),A.z1-Dn-Xt);if(mn<6)break;const Hi=Bn();st.push({cx:an,cz:Xt+mn/2,w:De-.9,d:mn-.6,h:Hi,style:be(),podium:!0}),Xt+=mn+_t(.4,2.4)}}const Vn=A.x0+Dn+De,Un=A.x1-Dn-De,un=A.z0+Dn+Pe,bn=A.z1-Dn-Pe;if(Un-Vn>16&&bn-un>16){const Pt=Un-Vn,hn=bn-un;if(A.type==="downtown"){const an=Pt>40?2:1,Xt=hn>40?2:1;for(let mn=0;mn<an;mn++)for(let Hi=0;Hi<Xt;Hi++){const uo=Pt/an-_t(2,6),Fs=hn/Xt-_t(2,6),er=Vn+Pt/an*(mn+.5),tr=un+hn/Xt*(Hi+.5);let kt=_t(60,128);ki(er,tr,uo,Fs,kt,Tn()<.6?"glass":"panel",A,!1),kt>80&&(kt=_t(14,30),ki(er,tr,uo*.62,Fs*.62,kt,"glass",A,!1))}}else{const an=(Vn+Un)/2,Xt=(un+bn)/2;ki(an,Xt,Pt-_t(2,6),hn-_t(2,6),Bn()*1.15,be(),A,A.type==="midtown")}}for(const Pt of st)ki(Pt.cx,Pt.cz,Pt.w,Pt.d,Pt.h,Pt.style,A,Pt.podium)}const E=A=>Sn.some(Z=>Math.abs(A-Z)<18);for(const A of Sn)for(let Z=-Ln+40;Z<=Ln-40;Z+=15){if(E(Z)||Tn()<.45)continue;const q=Tn()<.5?1:-1;o.push([A+q*5.2,Z,q>0?Math.PI:0]),o.push([Z,A+q*5.2,q>0?-Math.PI/2:Math.PI/2])}const G=Sn.length,te=A=>Sn.some(Z=>Math.abs(A-Z)<11);for(let A=0;A<G;A++){const Z=Sn[A];for(let q=0;q<G+1;q++){const xe=q===0?-Ln:Sn[q-1]+12,pe=q===G?Ln:Sn[q]-12;if(pe-xe<6)continue;const fe=pe-xe,Pe=(xe+pe)/2;for(const De of[1,-1])Ae(W,Z+De*.22,.05,Pe,.14,1,fe),Ae(dt,Z+De*4.7,.05,Pe,.12,1,fe),Ae(dt,Z+De*6.5,.05,Pe,.12,1,fe);for(const De of[1,-1])Ae(dt,Pe,.05,Z+De*.22,fe,1,.14),Ae(dt,Pe,.05,Z+De*4.7,fe,1,.12),Ae(dt,Pe,.05,Z+De*6.5,fe,1,.12)}for(let q=-Ln;q<Ln;q+=8)te(q)||(Ae(W,Z,.05,q+2,.12,1,3.2),Ae(W,Z,.05,q+2,.12,1,3.2),Ae(dt,q+2,.05,Z,3.2,1,.12))}for(let A=0;A<G;A++)for(let Z=0;Z<G;Z++){const q=Sn[A],xe=Sn[Z];gi.push({ix:A,iz:Z});for(const pe of[1,-1]){for(let fe=-3;fe<=3;fe++)Ae(dt,q+fe*1.7,.052,xe+pe*9.2,.6,1,2.8),Ae(dt,q+pe*9.2,.052,xe+fe*1.7,2.8,1,.6);Ae(dt,q-3.5,.053,xe-pe*11.6,6.4,1,.55),Ae(dt,q+3.5,.053,xe+pe*11.6,6.4,1,.55),Ae(dt,q+pe*11.6,.053,xe+3.5,.55,1,6.4),Ae(dt,q-pe*11.6,.053,xe-3.5,.55,1,6.4);for(const fe of[1,-1])Ae(ge,q+pe*10.2,je+.06,xe+fe*10.2,1.6,1,1.6),Ae(ge,q+pe*10.2,je+.06,xe+fe*11.4,1.6,1,.5),Ae(ge,q+pe*11.4,je+.06,xe+fe*10.2,.5,1,1.6);Ae(W,q+pe*2.4,.051,xe,.3,1,17,0),Ae(W,q,.051,xe+pe*2.4,17,1,.3,0)}}for(const A of[110,-110])Ae(Ie,A-5.6,.05,0,1.6,1,2*Ln-40,0),Ae(Ie,A+5.6,.05,0,1.6,1,2*Ln-40,0),Ae(Ie,0,.05,A-5.6,2*Ln-40,1,1.6,0),Ae(Ie,0,.05,A+5.6,2*Ln-40,1,1.6,0);for(const[A,Z,q]of[[0,46,Math.PI],[0,-46,0],[46,0,Math.PI/2],[-46,0,-Math.PI/2]])for(const xe of[[-3.5,0],[3.5,0]])Ae(ni,A+xe[0],.06,Z+xe[1],.5,1,2.4,q),Ae(ni,A+xe[0],.06,Z+xe[1]+1.6,3.2,1,.5,q);for(let A=0;A<260;A++){const Z=Tn()<.5,q=Do(Sn),xe=_t(-Ln+20,Ln-20),pe=Z?q+_t(-6,6):xe,fe=Z?xe:q+_t(-6,6);Tn()<.55?Ae(Xe,pe,.035,fe,_t(1.5,5),1,_t(1.5,6),_t(0,3.14)):Ae(Ye,pe,.036,fe,_t(.2,.35),1,_t(4,14),_t(0,3.14))}for(let A=0;A<170;A++){const Z=Tn()<.5,q=Do(Sn),xe=_t(-Ln+10,Ln-10),pe=Z?q+_t(-5,5):xe,fe=Z?xe:q+_t(-5,5);Ae(Se,pe,.055,fe,1.1,1,1.1)}for(let A=0;A<150;A++){const Z=Tn()<.5,q=Do(Sn),xe=_t(-Ln+30,Ln-30),pe=Z?q+_t(-6,0):xe,fe=Z?xe:q+_t(-6,0);Ae(ut,pe,.042,fe,_t(1.6,5),1,_t(1.6,4.5),_t(0,3.14))}const K=0;for(let A=0;A<gi.length;A++){const{ix:Z,iz:q}=gi[A],xe=Sn[Z],pe=Sn[q],fe=[{px:xe-10.6,pz:pe-10.6,armAxis:"x",armSign:1,armLen:7,faceYaw:Math.PI},{px:xe+10.6,pz:pe+10.6,armAxis:"x",armSign:-1,armLen:7,faceYaw:0},{px:xe-10.6,pz:pe+10.6,armAxis:"z",armSign:-1,armLen:7,faceYaw:Math.PI/2},{px:xe+10.6,pz:pe-10.6,armAxis:"z",armSign:1,armLen:7,faceYaw:-Math.PI/2}];for(let Pe=0;Pe<4;Pe++){const De=fe[Pe],st=6.2;Ae(Ne,De.px,K,De.pz,.24,st,.24),De.armAxis==="x"?Ae(rt,De.px+De.armSign*De.armLen/2,K+st-.15,De.pz,De.armLen,.16,.16):Ae(rt,De.px,K+st-.15,De.pz+De.armSign*De.armLen/2,.16,.16,De.armLen);const be=De.armAxis==="x"?De.px+De.armSign*(De.armLen-.6):De.px,Bn=De.armAxis==="z"?De.pz+De.armSign*(De.armLen-.6):De.pz;Ae(gt,be,K+st-1.5,Bn,.42,1.35,.36,De.faceYaw);const Vn=[K+st-.95,K+st-1.5,K+st-2.05],Un=be+Math.sin(De.faceYaw)*.22,un=Bn+Math.cos(De.faceYaw)*.22;for(let bn=0;bn<3;bn++){const Pt=new Ft,hn=new B(Un,Vn[bn],un),an=new Wn().setFromEuler(new ps(0,De.faceYaw,0));Pt.compose(hn,an,new B(1,1,1)),(bn===0?_s:bn===1?Js:Ci).push(Pt)}(A+Pe)%5===0?(Ae(ue,De.px,K,De.pz+.5,.1,3.2,.1),Ae(Te[0],De.px,K+3.4,De.pz+.5,1,1,1,De.faceYaw+Math.PI)):(A+Pe)%7===0&&(Ae(ue,De.px,K,De.pz+.5,.1,3,.1),Ae(Te[1],De.px,K+3.2,De.pz+.5,1,1,1,De.faceYaw+Math.PI))}}for(let A=0;A<G;A++){const Z=Sn[A];for(let q=-520;q<=520;q+=80){if(Sn.some(fe=>Math.abs(q-fe)<16))continue;for(const fe of[1,-1]){const Pe=Z+fe*8.2;Ae(Ne,Pe,je,q,.22,7,.22),Ae(rt,Pe-fe*.9,je+6.9,q,1.8,.12,.12),Ae(Ns,Pe-fe*1.7,je+6.82,q,.7,.14,.36),Ae(Bi,Pe-fe*1.7,je+6.7,q,2.6,1.1,2.6),i.push(new B(Pe-fe*1.7,je+6.8,q))}const xe=Z,pe=q;for(const fe of[1,-1])Ae(Ne,pe,je,xe+fe*8.2,.22,7,.22),Ae(rt,pe,je+6.9,xe+fe*8.2-fe*.9,.12,.12,1.8),Ae(Ns,pe,je+6.82,xe+fe*8.2-fe*1.7,.36,.14,.7),Ae(Bi,pe,je+6.7,xe+fe*8.2-fe*1.7,2.6,1.1,2.6),i.push(new B(pe,je+6.8,xe+fe*8.2-fe*1.7))}}const J=(A,Z)=>{for(let q=-Ln+30;q<Ln-30;q+=26){if(te(q))continue;const xe=Tn()<.5?1:-1,pe=Z?A+xe*8.4:q,fe=Z?q:A+xe*8.4,Pe=Z?Math.PI/2:0,De=Tn();if(De<.16?Ae(y,pe,je,fe,.6,.85,.6):De<.3?(Ae(X,pe,je,fe,.28,.7,.28),Ae(X,pe,je+.6,fe,.42,.2,.42)):De<.46?(Ae(Q,pe,je,fe,.16,.85,.16),Ae(Q,pe+(Z?0:1.3),je,fe+(Z?1.3:0),.16,.85,.16)):De<.6?(Ae(ce,pe,je,fe,1.6,.55,1.6),Ae(Le,pe,je+.75,fe,1.7,.9,1.7)):De<.78?(Ae(St,pe,je+.45,fe,1.9,.12,.5,Pe),Ae(I,pe-(Z?0:.7),je+.2,fe-(Z?.7:0),.14,.4,.45),Ae(I,pe+(Z?0:.7),je+.2,fe+(Z?.7:0),.14,.4,.45)):De<.9?(Ae(Be,pe,je,fe,.09,1.15,.09),Ae(de,pe,je+1.2,fe,.22,.36,.16,Pe)):(Ae(ue,pe,je,fe,.09,2.8,.09),Ae(Te[Tn()<.7?0:1],pe,je+3,fe,1,1,1,Pe+Math.PI/2)),Tn()<.34){const st=Z?A+xe*8:q+5,be=Z?q+5:A+xe*8;te(Z?be:st)||a.push({x:st,z:be,sc:_t(.85,1.15)})}}};for(const A of Sn)J(A,!0),J(A,!1);for(const A of a){const Z=2.6*A.sc;Ae(ee,A.x,je,A.z,.34,Z,.34),Ae(N,A.x,je+Z*.92,A.z,3.1*A.sc,2.5*A.sc,3.1*A.sc),Ae(N,A.x+.5*A.sc,je+Z*1.2,A.z-.4*A.sc,2.1*A.sc,1.9*A.sc,2.1*A.sc),Ae(ft,A.x,je+.03,A.z,1.5,1,1.5)}for(const A of[-220,-110,110,220])for(const Z of[-340,-120,120,340])for(const q of[!0,!1]){const pe=q?A+8.6:Z,fe=q?Z:A+1*8.6,Pe=q?Math.PI/2:0;Ae(ot,pe,je+2.6,fe,4.4,.16,1.9,Pe);for(const De of[-1.9,1.9])Ae(Ve,pe+(q?0:De),je+.2,fe+(q?De:0),q?.08:3.2,2.3,q?3.2:.08);Ae(St,pe-(q?0:.6),je+.5,fe-(q?.6:0),q?.5:3,.1,q?3:.5,Pe),Ae(Ne,pe+(q?0:2.6),je,fe+(q?2.6:0),.14,3.4,.14),Ae(Te[1],pe+(q?0:2.6),je+3.6,fe+(q?2.6:0),1,1,1,Pe+Math.PI/2)}const Ue=Ho.flatMap(A=>A.blds).filter(A=>A.top>30).sort((A,Z)=>Z.top-A.top);let Je=0;for(let A=0;A<Math.min(14,Ue.length);A+=2){const Z=Ue[A],q=On[Je++%On.length],xe=at[Je===0?0:(Je-1)%at.length],pe=Tn()<.5?0:Math.PI/2;pe===0&&Math.min(Z.hx*2,14);const fe=Math.min(1.4,Z.hx*2/12);Ae(xe,Z.x,Z.top-1.5,Z.z,fe,fe,1,pe),Ae(yt,Z.x,Z.top-1.5-q.h*fe/2-.2,Z.z,.25*fe,.4,.25*fe,pe)}const ze=wt(c,ye,!1);for(let A=0;A<90;A++){const Z=A/90*Math.PI*2+_t(-.02,.02),q=_t(760,1500),xe=Math.cos(Z)*q,pe=Math.sin(Z)*q,fe=q<1e3?_t(30,90):_t(60,200);Ae(ze,xe,0,pe,_t(20,60),fe,_t(20,60),_t(0,3.14))}n.push(ze),n.push(_e,We,lt,qe,xt,Yt,ve,Ee,Re,Ce,Oe,mt,yt,ee,N,ft,St,I,y,X,Q,ce,Le,Be,de,ue,ot,Ve,Ne,rt,gt,dt,W,Ie,ge,Xe,Ye,Se,ut,it,tn,zt,ni);for(const A of at)n.push(A);for(const A of Te)n.push(A);for(const A of Object.values(Vf)){const Z=wt(new ci(3.4,.6),A.mat,!1);n.push(Z),Gf.push(Z)}for(const A of Gf)for(let Z=0;Z<24;Z++){const q=Ho[Tn()*Ho.length|0];if(q.type==="park")continue;const xe=Tn()<.5?0:Math.PI/2,pe=xe===0?q.d/2+.5:q.w/2+.5;Ae(A,q.cx+(xe===0?_t(-q.w/2+6,q.w/2-6):pe),je+3.6,q.cz+(xe===0?pe:_t(-q.d/2+6,q.d/2-6)),1,1,1,xe)}function Ke(A,Z,q,xe){const pe=new xr(xs,Z,A.length);A.forEach((Pe,De)=>pe.setMatrixAt(De,Pe)),pe.instanceMatrix.needsUpdate=!0,pe.frustumCulled=!1;const fe=new Float32Array(A.length*3);for(let Pe=0;Pe<A.length;Pe++)fe[Pe*3]=xe.r,fe[Pe*3+1]=xe.g,fe[Pe*3+2]=xe.b;return pe.instanceColor=new ta(fe,3),pe.instanceColor.needsUpdate=!0,t.add(pe),pe}const tt=Ke(_s,mi,Fn.r,qn.r),Et=Ke(Js,Mt,Fn.a,qn.a),Ct=Ke(Ci,Xn,Fn.g,qn.g);d1(t,n);let et=Tn()*20,$t=0;const fn=gi.map(()=>"");let on=-1,nn=-1;function Ut(A,Z,q){const{ix:xe,iz:pe}=gi[A],fe=A*4;for(let Pe=0;Pe<4;Pe++){const De=Pe<2?Z:q,st=fe+Pe;Me(tt,st,De==="r"),Me(Et,st,De==="a"),Me(Ct,st,De==="g")}}function Me(A,Z,q){const xe=A.instanceColor;if(!xe)return;const pe=A===tt,fe=A===Et,Pe=q?pe?Fn.r:fe?Fn.a:Fn.g:pe?qn.r:fe?qn.a:qn.g;xe.setXYZ(Z,Pe.r,Pe.g,Pe.b),xe.needsUpdate=!0}return{root:t,lampPoints:i,parkSpots:r,parkedCarSpots:o,lampMaterial:vs,update(A,Z,q){if(et+=A,$t+=A,$t>.15){$t=0;for(let xe=0;xe<gi.length;xe++){const{ix:pe,iz:fe}=gi[xe],Pe=Ff(pe,fe,et),De=Pe.ns+Pe.ew;De!==fn[xe]&&(fn[xe]=De,Ut(xe,Pe.ns,Pe.ew))}}if(Math.abs(Z-on)>.05){on=Z;for(const pe of Bt)pe.emissiveIntensity=.02+1.15*Z;H.emissiveIntensity=.03+1.5*Z,j.emissiveIntensity=.02+2.4*Z;for(const pe of ie)pe.emissiveIntensity=.02+.5*Z;vs.emissiveIntensity=.05+1.9*Z;const xe=Bi.mat;xe.opacity=.22*Z,xe.visible=Z>.05}Math.abs(q-nn)>.015&&(nn=q,v.roughness=.98-.62*q,v.metalness=.04+.55*q,v.envMapIntensity=.3+1.1*q,T.roughness=.95-.35*q,T.metalness=.5*q,T.envMapIntensity=.3+.7*q,L.roughness=.9-.3*q,le.opacity=.15+.75*q,le.visible=q>.02)},lightBlocks(A,Z,q,xe,pe){const fe=q==="z"?Z:A;let Pe=null;for(const Pt of Sn)xe>0&&Pt>fe+3&&(Pe===null||Pt<Pe)&&(Pe=Pt),xe<0&&Pt<fe-3&&(Pe===null||Pt>Pe)&&(Pe=Pt);if(Pe===null)return!1;const De=Math.abs(Pe-fe),st=6+pe*pe/(2*3.4);if(De>Math.max(11,st*1.35))return!1;const be=Uf(q==="z"?A:Pe),Bn=Uf(q==="z"?Pe:Z),un=Ff(q==="z"?be:Bn,q==="z"?Bn:be,et);return(q==="z"?un.ns:un.ew)!=="g"}}}const Vf=[],Gf=[];function p1(s){const{canvas:e,cluster:t,gmeter:n}=s,i=s.onToast??(()=>{}),r=s.onTelemetry??(()=>{}),o=(M=0,S=0,U=0)=>new B(M,S,U),a=(M,S,U)=>M<S?S:M>U?U:M,c=(M,S,U)=>{const P=a((U-M)/(S-M),0,1);return P*P*(3-2*P)},l=(M,S)=>M+Math.random()*(S-M),u=Math.PI*2,d=new QS({canvas:e,antialias:!0,powerPreference:"high-performance"});let h=Math.min(window.devicePixelRatio||1,2);d.setPixelRatio(h),d.setSize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight,!1),d.shadowMap.enabled=!0,d.shadowMap.type=Kf,d.toneMapping=qu,d.toneMappingExposure=1;const f=new vd,p=new fi(62,16/9,.15,3200),v={time:s.initialTimeOfDay??15.2,weather:s.initialWeather??"clear",day:1,night:0,wet:0},g=o(.5,.7,-.4).normalize(),m={value:0},w={sunDir:{value:g.clone()},uDay:{value:1},uDusk:{value:0},uNight:{value:0},uOvercast:{value:0},uTime:m},R=new Ri({side:pi,depthWrite:!1,fog:!1,uniforms:w,vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      varying vec3 vP;
      uniform vec3 sunDir; uniform float uDay; uniform float uDusk; uniform float uNight;
      uniform float uOvercast; uniform float uTime;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y); }
      float fbm(vec2 p){ float v = 0.0, a = 0.5; for(int i=0;i<5;i++){ v += a*noise(p); p = p*2.02 + 13.7; a *= 0.5; } return v; }
      void main(){
        vec3 d = normalize(vP);
        float h = max(d.y, 0.0);
        vec3 zen = mix(vec3(0.012,0.022,0.045), vec3(0.20,0.40,0.68), uDay);
        vec3 mid = mix(vec3(0.030,0.045,0.080), vec3(0.62,0.72,0.84), uDay);
        vec3 hor = mix(vec3(0.055,0.065,0.095), vec3(0.90,0.87,0.78), uDay);
        vec3 c = mix(hor, mix(mid, zen, pow(h, 0.5)), smoothstep(0.0, 0.42, h));
        /* warm band at golden hour */
        c = mix(c, vec3(0.98, 0.50, 0.26), uDusk * pow(1.0 - h, 3.0) * 0.75);
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.80, 0.52) * (pow(s, 1200.0) * 4.0 + pow(s, 90.0) * 0.45 * uDay + pow(s, 8.0) * 0.18 * uDay);
        float mo = max(dot(d, -sunDir), 0.0);
        c += vec3(0.72, 0.78, 0.98) * pow(mo, 3000.0) * 4.5 * uNight;
        /* stars */
        if (uNight > 0.02 && d.y > 0.0) {
          vec3 sp = floor(normalize(vP) * 320.0);
          float hs = hash(sp.xy + sp.z * 21.7);
          float star = smoothstep(0.9972, 0.9995, hs);
          c += vec3(0.85, 0.90, 1.0) * star * uNight * smoothstep(0.0, 0.25, d.y) * 1.7;
        }
        /* clouds */
        if (d.y > 0.012) {
          vec2 cuv = d.xz / (d.y + 0.18);
          float t = uTime * 0.0055;
          float den = fbm(cuv * 0.5 + vec2(t, -t * 0.35));
          float cov = smoothstep(0.55 - uOvercast * 0.35, 0.80 - uOvercast * 0.25, den) * smoothstep(0.02, 0.18, d.y);
          vec3 cb = mix(vec3(0.96, 0.93, 0.90), vec3(0.42, 0.45, 0.52), smoothstep(0.5, 0.96, den));
          cb = mix(cb, vec3(0.55, 0.57, 0.62), uOvercast);
          cb *= mix(0.20, 1.0, uDay);
          cb = mix(cb, vec3(1.05, 0.90, 0.72), pow(s, 3.0) * 0.45 * uDay);
          c = mix(c, cb, cov * (0.85 - 0.25 * uOvercast));
        }
        /* distant ridge line */
        float ang = atan(d.z, d.x);
        vec2 md = vec2(cos(ang), sin(ang));
        float ridge = 0.028 + 0.075 * fbm(md * 2.6 + vec2(4.7, 1.3)) + 0.03 * fbm(md * 6.1);
        float mt = (1.0 - smoothstep(ridge - 0.012, ridge, d.y)) * smoothstep(-0.035, -0.006, d.y);
        if (mt > 0.001) {
          float t2 = clamp((ridge - d.y) / 0.09, 0.0, 1.0);
          vec3 rock = mix(vec3(0.42, 0.40, 0.39), hor, 0.42 + 0.45 * t2);
          c = mix(c, rock, mt * 0.9);
        }
        if (d.y < -0.035) c = hor;
        gl_FragColor = vec4(c, 1.0);
      }`}),x=new It(new Yo(2e3,32,20),R);x.frustumCulled=!1,f.add(x);const b=new sh(15128494,340,1500);f.fog=b;const T=new kx(12373990,7828812,.45);f.add(T);const L=new Hp(16769198,2.1);L.castShadow=!0,L.shadow.mapSize.set(2048,2048),L.shadow.camera.left=-60,L.shadow.camera.right=60,L.shadow.camera.top=60,L.shadow.camera.bottom=-60,L.shadow.camera.near=20,L.shadow.camera.far=460,L.shadow.bias=-6e-4,L.shadow.normalBias=.03,f.add(L),f.add(L.target);let _=null;const C=new Fu(d);function D(){const M=new vd;M.add(new It(new Yo(60,24,12),R));const S=new It(new Yo(4,12,12),new yi({color:new nt().setHSL(.09,.5,.35+.55*v.day)}));S.position.copy(g).multiplyScalar(45),M.add(S);const U=new It(new Pc(55,32),new yi({color:new nt().setHSL(.11,.18,.05+.16*v.day)}));U.rotation.x=-Math.PI/2,U.position.y=-3,M.add(U),_&&_.dispose(),_=C.fromScene(M,.04,.1,120).texture,f.environment=_}const O=d.capabilities.getMaxAnisotropy();function V(M,S,U,P=1,Y=1){const k=document.createElement("canvas");k.width=M,k.height=S,U(k.getContext("2d"),M,S);const z=new Lu(k);return z.wrapS=z.wrapT=Zs,z.repeat.set(P,Y),z.colorSpace=In,z.anisotropy=O,z}const $=V(256,256,(M,S,U)=>{M.fillStyle="#8f9164",M.fillRect(0,0,S,U);for(let P=0;P<26;P++){const Y=M.createRadialGradient(Math.random()*S,Math.random()*U,4,Math.random()*S,Math.random()*U,l(30,80)),k=Math.random()<.5;Y.addColorStop(0,k?"rgba(168,158,96,.35)":"rgba(110,134,74,.30)"),Y.addColorStop(1,"rgba(0,0,0,0)"),M.fillStyle=Y,M.fillRect(0,0,S,U)}for(let P=0;P<4200;P++){const Y=Math.random()*S,k=Math.random()*U,z=125+Math.random()*80|0;M.strokeStyle=`rgba(${z-10},${z},${z-45},${.5+Math.random()*.5})`,M.lineWidth=1,M.beginPath(),M.moveTo(Y,k),M.lineTo(Y+l(-1.5,1.5),k-l(2,5)),M.stroke()}},190,190),H=V(256,256,(M,S,U)=>{M.fillStyle="#41444a",M.fillRect(0,0,S,U);for(let P=0;P<3600;P++){const Y=52+Math.random()*34|0;M.fillStyle=`rgb(${Y},${Y+2},${Y+5})`,M.fillRect(Math.random()*S,Math.random()*U,1.4,1.4)}for(let P=0;P<10;P++){M.strokeStyle="rgba(25,27,30,.35)",M.beginPath();let Y=Math.random()*S,k=Math.random()*U;M.moveTo(Y,k);for(let z=0;z<5;z++)Y+=l(-30,30),k+=l(-30,30),M.lineTo(Y,k);M.stroke()}}),j=[];function ie(M,S){const U=H.clone();U.repeat.set(M,S),U.needsUpdate=!0;const P=new ct({map:U,roughness:.96,metalness:0,envMapIntensity:.35});return j.push(P),P}const ne=new ct({color:14473420,roughness:.9,envMapIntensity:.3,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});function we(M,S){const U=Math.floor(M),P=Math.floor(S),Y=M-U,k=S-P,z=(me,he)=>{const Fe=Math.sin(me*127.1+he*311.7)*43758.5453;return Fe-Math.floor(Fe)},ae=Y*Y*(3-2*Y),se=k*k*(3-2*k);return z(U,P)*(1-ae)*(1-se)+z(U+1,P)*ae*(1-se)+z(U,P+1)*(1-ae)*se+z(U+1,P+1)*ae*se}function re(M,S){let U=0,P=.5;for(let Y=0;Y<4;Y++)U+=P*we(M,S),M=M*2.13+7.31,S=S*2.11+3.77,P*=.5;return U}function le(M,S){const U=Math.sqrt(M*M+S*S),P=c(860,1150,U);return P<=0?0:P*(7+re(M*.004+3.7,S*.004+1.9)*15+Math.sin(M*.012)*Math.cos(S*.014)*4+Math.sin(M*.033+S*.021)*1.6)}const ye=[{x:-60,z:-8,yaw:-Math.PI/2,w:9,l:16,h1:2.3},{x:165,z:-110,yaw:Math.atan2(.6,.8),w:10,l:20,h1:4.6}].map(M=>{const S=Math.cos(M.yaw),U=Math.sin(M.yaw),P=Math.hypot(M.l,M.h1);return{...M,c:S,s:U,nx:M.l/P*U,ny:M.l/P,nz:M.l/P*S,px:M.x,py:M.h1/2,pz:M.z}});let Qe=null;function $e(M,S){return null}function At(M,S){const U=$e();if(U!==null){const P=Qe,Y=Math.min(Math.min(M-P.x0,P.x1-M),Math.min(S-P.z0,P.z1-S));if(Y>=20)return U;const k=le(M,S)+Gl(M,S);return k+(U-k)*(Y/20)}return le(M,S)+Gl(M,S)}const Tt={h:0,n:o()};function Bt(M,S){let U=-1,P=null;for(const Y of ye){const k=M-Y.x,z=S-Y.z,ae=k*Y.c-z*Y.s,se=k*Y.s+z*Y.c;if(Math.abs(ae)<=Y.w/2&&Math.abs(se)<=Y.l/2){const me=Y.h1*(se+Y.l/2)/Y.l;me>U&&(U=me,P=Y)}}return P?(Tt.h=U,Tt.n.set(P.nx,P.ny,P.nz),!0):!1}function oe(M,S){return(we(M*.5,S*.5)-.5)*.05}function _e(M,S){if($e()!==null||Math.abs(M)<104&&Math.abs(S)<104||l1(M,S))return"TARMAC";const U=Ys(M,S);return U?U.type==="park"?"GRASS":"TARMAC":Gl(M,S)>0||Ee(M,S)?"TARMAC":"GRASS"}function We(M,S){const U=At(M,S);return Bt(M,S)&&Tt.h>U||(Tt.n.set(At(M-1.2,S)-At(M+1.2,S),2*1.2,At(M,S-1.2)-At(M,S+1.2)).normalize(),Tt.h=U+(_e(M,S)==="GRASS"?oe(M,S):0)),Tt}function lt(M,S){let U=At(M,S);return Bt(M,S)&&Tt.h>U?U=Tt.h:_e(M,S)==="GRASS"&&(U+=oe(M,S)),U}{const M=new ci(1900,1900,150,150);M.rotateX(-Math.PI/2);const S=M.attributes.position,U=[];for(let Y=0;Y<S.count;Y++){const k=S.getX(Y),z=S.getZ(Y);S.setY(Y,le(k,z));const ae=re(k*.012,z*.012),se=re(k*.06+7.7,z*.06+2.3);let me=.7+.45*ae+.15*se,he=.68+.48*ae+.18*se,Fe=.58+.3*ae+.08*se;const ht=8,He=(Math.abs(le(k+ht,z)-le(k-ht,z))+Math.abs(le(k,z+ht)-le(k,z-ht)))/(2*ht),Lt=a((He-.3)*1.5,0,1);me+=Lt*.45,he+=Lt*.4,Fe+=Lt*.42;const bt=.88+.2*se;U.push(me*bt,he*bt,Fe*bt)}M.setAttribute("color",new Qt(U,3)),M.computeVertexNormals();const P=new It(M,new ct({color:9210462,map:$,roughness:1,vertexColors:!0,envMapIntensity:.3}));P.receiveShadow=!0,f.add(P)}let qe=[];function xt(M,S,U,P,Y,k){const z=new It(new ci(M,S),k);return z.rotation.x=-Math.PI/2,z.position.set(U,Y,P),z.receiveShadow=!0,f.add(z),z}xt(206,206,0,0,.02,ie(48,48)),xt(16,806,0,447,.045,ie(2,100)),xt(16,806,0,-447,.043,ie(2,100));{const M=[[560,36],[450,450],[110,690],[-335,650],[-690,335],[-725,-150],[-520,-560],[-110,-745],[355,-800],[670,-335]].map(Rt=>o(Rt[0],0,Rt[1])),S=new Ap(M,!0),U=460,P=[],Y=[],k=[];for(let Rt=0;Rt<=U;Rt++){const cn=Rt/U,en=S.getPointAt(cn),dn=S.getTangentAt(cn),Nt=-dn.z,wn=dn.x,Zt=Math.hypot(Nt,wn);if(P.push(en.x-Nt/Zt*5,.04,en.z-wn/Zt*5,en.x+Nt/Zt*5,.04,en.z+wn/Zt*5),Y.push(0,cn*44,10,cn*44),Rt<U){const sn=Rt*2;k.push(sn,sn+1,sn+2,sn+1,sn+3,sn+2)}}for(let Rt=0;Rt<=190;Rt++){const cn=S.getPointAt(Rt/190);qe.push(cn.x,cn.z)}const z=new vn;z.setAttribute("position",new Qt(P,3)),z.setAttribute("uv",new Qt(Y,2)),z.setIndex(k),z.computeVertexNormals();const ae=new It(z,ie(1,1));ae.receiveShadow=!0,f.add(ae);const se=(Rt,cn,en)=>{const dn=[],Nt=[];for(let Zt=0;Zt<=U;Zt++){const sn=Zt/U,ii=S.getPointAt(sn),Rn=S.getTangentAt(sn),Mn=-Rn.z,si=Rn.x,ri=Math.hypot(Mn,si);if(dn.push(ii.x+Mn/ri*Rt-cn/2*(Mn/ri),en,ii.z+si/ri*Rt-cn/2*(si/ri),ii.x+Mn/ri*Rt+cn/2*(Mn/ri),en,ii.z+si/ri*Rt+cn/2*(si/ri)),Zt<U){const Yn=Zt*2;Nt.push(Yn,Yn+1,Yn+2,Yn+1,Yn+3,Yn+2)}}const wn=new vn;wn.setAttribute("position",new Qt(dn,3)),wn.setIndex(Nt),wn.computeVertexNormals(),f.add(new It(wn,ne))};se(4.55,.14,.07),se(-4.55,.14,.07);const me=170,he=new xr(new ci(.16,1.8),ne,me),Fe=new Ft,ht=new Wn,He=o(1,1,1),Lt=o(),bt=o(0,1,0);for(let Rt=0;Rt<me;Rt++){const cn=Rt/me,en=S.getPointAt(cn),dn=S.getTangentAt(cn);ht.setFromAxisAngle(bt,Math.atan2(dn.x,dn.z)),Lt.set(en.x,.07,en.z),Fe.compose(Lt,ht,He),he.setMatrixAt(Rt,Fe)}he.instanceMatrix.needsUpdate=!0,f.add(he)}const Yt=new Map,ve=24;for(let M=0;M<qe.length;M+=2){const S=`${Math.floor(qe[M]/ve)},${Math.floor(qe[M+1]/ve)}`,U=Yt.get(S);U?U.push(M):Yt.set(S,[M])}function Ee(M,S){const U=Math.floor(M/ve),P=Math.floor(S/ve);for(let Y=-1;Y<=1;Y++)for(let k=-1;k<=1;k++){const z=Yt.get(`${U+Y},${P+k}`);if(z)for(const ae of z){const se=M-qe[ae],me=S-qe[ae+1];if(se*se+me*me<5.4*5.4)return!0}}return!1}const Re=f1({aniso:O}),Ce=Re.root,Oe=Re.parkSpots,mt=Re.parkedCarSpots,at=Re.lampPoints;f.add(Ce);{const M=ie(2,72);for(const S of Sn){const U=new It(new ci(14,2*Ln),M);U.rotation.x=-Math.PI/2,U.position.set(S,.03,0),U.receiveShadow=!0,Ce.add(U);const P=new It(new ci(2*Ln,14),M);P.rotation.x=-Math.PI/2,P.position.set(0,.032,S),P.receiveShadow=!0,Ce.add(P)}}{const M=new It(new ph(29.55,30.45,96),ne);M.rotation.x=-Math.PI/2,M.position.y=.06,f.add(M);const S=new It(new ci(.16,56),ne);S.rotation.x=-Math.PI/2,S.position.y=.06,f.add(S);const U=S.clone();U.rotation.z=Math.PI/2,f.add(U)}function yt(M,S,U){const P=document.createElement("canvas");P.width=M,P.height=S,U(P.getContext("2d"),M,S);const Y=new Lu(P);return Y.colorSpace=In,Y}document.fonts?.ready?.then(()=>{const M=new ct({color:2763823,roughness:.7,metalness:.3,envMapIntensity:.4});for(let k=1;k<=6;k++){const z=yt(256,128,(me,he,Fe)=>{me.fillStyle="#17181a",me.fillRect(0,0,he,Fe),me.strokeStyle="#ff6a2a",me.lineWidth=8,me.strokeRect(4,4,he-8,Fe-8),me.fillStyle="#ece9e2",me.font="700 62px Rajdhani, system-ui, sans-serif",me.textAlign="center",me.fillText(`${k*100} m`,he/2,Fe/2+22)}),ae=new Pn,se=new It(new ci(3.4,1.7),new ct({map:z,roughness:.8,envMapIntensity:.35}));se.rotation.y=-Math.PI/2,se.position.y=2.42,ae.add(se);for(const me of[-.7,.7]){const he=new It(new Ai(.12,2.4,.12),M);he.position.set(0,1.2,me),ae.add(he)}ae.position.set(11.2,je,90+k*100),Ce.add(ae)}const S=yt(1024,96,(k,z,ae)=>{k.fillStyle="#17181a",k.fillRect(0,0,z,ae),k.fillStyle="#ff6a2a",k.fillRect(0,ae-10,z,10),k.fillStyle="#ece9e2",k.font="600 46px Rajdhani, system-ui, sans-serif",k.textAlign="center",k.fillText("APEX CITY  ·  DRAG AVENUE",z/2,58)}),U=new Pn;U.position.set(0,0,90);for(const k of[-10.5,10.5]){const z=new It(new Ai(.55,6.4,.55),M);z.position.set(k,3.2,0),z.castShadow=!0,U.add(z)}const P=new It(new Ai(21.6,1.2,.7),M);P.position.y=6.2,P.castShadow=!0,U.add(P);const Y=new It(new ci(20,1.05),new ct({map:S,roughness:.8,envMapIntensity:.35}));Y.rotation.y=Math.PI,Y.position.set(0,6.2,-.37),U.add(Y),Ce.add(U)});{const M=new ct({color:10197651,roughness:.95,envMapIntensity:.3});for(const S of ye){const U=S.w/2,P=S.l/2,Y=S.h1,k=[-U,0,-P],z=[U,0,-P],ae=[U,0,P],se=[-U,0,P],me=[U,Y,P],he=[-U,Y,P],Fe=[k,he,me,k,me,z,se,ae,me,se,me,he,z,me,ae,k,se,he].flat(),ht=new vn;ht.setAttribute("position",new Qt(Fe,3)),ht.computeVertexNormals();const He=new It(ht,M);He.castShadow=!0,He.receiveShadow=!0,He.position.set(S.x,0,S.z),He.rotation.y=S.yaw,f.add(He)}}{const S=o(0,1,0),U=new vi(.12,.24,1,7).translate(0,.5,0),P=new ia(1,1,8).translate(0,.5,0),Y=new Lc(1,1),k=new ct({color:6967608,roughness:1,envMapIntensity:.2}),z=new ct({color:16777215,roughness:1,envMapIntensity:.25});z.onBeforeCompile=Nt=>{Nt.uniforms.uT=m,Nt.vertexShader=`uniform float uT;
`+Nt.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec4 wpo = instanceMatrix * vec4(0.0,0.0,0.0,1.0);
          float sw = sin(uT * 1.1 + wpo.x * 0.21 + wpo.z * 0.17);
          transformed.x += sw * 0.05 * max(position.y, 0.0);
          transformed.z += cos(uT * 0.9 + wpo.x * 0.13) * 0.04 * max(position.y, 0.0);
        #endif`)};const ae=new xr(U,k,190),se=[0,1,2].map(()=>new xr(P,z,190)),me=new xr(Y,z,380),he=new Ft,Fe=new Wn,ht=o(),He=o(),Lt=new nt,bt=[];for(const Nt of Oe)bt.push([Nt[0],Nt[1],.8]);let Rt=0;for(;bt.length<190&&Rt++<5e3;){const Nt=Math.random()*u,wn=l(730,900),Zt=Math.cos(Nt)*wn,sn=Math.sin(Nt)*wn;if(Ee(Zt,sn)||_e(Zt,sn)!=="GRASS")continue;let ii=!1;for(const Rn of ye)Math.hypot(Zt-Rn.x,sn-Rn.z)<30&&(ii=!0);ii||bt.push([Zt,sn,1])}let cn=0,en=0,dn=0;for(const[Nt,wn,Zt]of bt){const sn=le(Nt,wn);Fe.setFromAxisAngle(S,Math.random()*u);const ii=l(1.6,2.6)*Zt;if(He.set(Nt,sn-.1,wn),ht.set(l(.8,1.2),ii,l(.8,1.2)),he.compose(He,Fe,ht),ae.setMatrixAt(cn++,he),Math.random()<.68){const Rn=l(4.5,7.5)*Zt,Mn=l(1.7,2.6),si=sn+ii*.35,ri=[[0,.55,1],[.3,.42,.75],[.6,.34,.48]];for(let Yn=0;Yn<3;Yn++){const[Qi,ln,Jt]=ri[Yn];He.set(Nt,si+Rn*Qi,wn),ht.set(Mn*Jt,Rn*ln,Mn*Jt),he.compose(He,Fe,ht),se[Yn].setMatrixAt(en,he)}Lt.setHSL(.26+Math.random()*.05,.28+Math.random()*.12,.17+Math.random()*.07),se.forEach((Yn,Qi)=>Yn.setColorAt(en,Lt.clone().offsetHSL(0,0,Qi*.015))),en++}else{const Rn=l(1.6,2.6)*Zt,Mn=l(2.4,3.6);He.set(Nt,sn+ii+Mn*.45,wn),ht.set(Rn,Mn*.62,Rn),he.compose(He,Fe,ht),me.setMatrixAt(dn*2,he),He.set(Nt+l(-.9,.9),sn+ii+Mn*.85,wn+l(-.9,.9)),ht.set(Rn*.62,Mn*.45,Rn*.62),he.compose(He,Fe,ht),me.setMatrixAt(dn*2+1,he),Lt.setHSL(.21+Math.random()*.06,.35,.26+Math.random()*.08),me.setColorAt(dn*2,Lt),me.setColorAt(dn*2+1,Lt.clone().offsetHSL(0,0,.03)),dn++}}ae.count=cn,se.forEach(Nt=>Nt.count=en),me.count=dn*2,[ae,...se,me].forEach(Nt=>{Nt.castShadow=!0,Nt.receiveShadow=!0,f.add(Nt)})}const ee=[];{const M=new ia(.22,.55,10);M.translate(0,.275,0);const S=new ct({color:14701087,roughness:.6,envMapIntensity:.35}),U=(P,Y)=>{const k=new It(M,S);k.castShadow=!0,f.add(k),ee.push({mesh:k,home:o(P,lt(P,Y),Y),p:o(P,lt(P,Y),Y),v:o(),q:new Wn,cw:o(),cool:0})};for(let P=0;P<14;P++){const Y=P/14*u;U(Math.cos(Y)*30,Math.sin(Y)*30)}for(let P=0;P<8;P++)U(P%2?2.4:-2.4,120+P*18)}function N(){for(const M of ee)M.p.copy(M.home),M.v.set(0,0,0),M.q.identity(),M.cw.set(0,0,0),M.cool=0,M.mesh.position.copy(M.p),M.mesh.quaternion.copy(M.q)}const ft=new Map;function St(M){let S=ft.get(M);return S||(S=$b(M,16777215),ft.set(M,S)),S}const I=14,y=26,X=[],Q=[];function ce(M){const S=[];return M.traverse(U=>{U.userData?.wheelSpin&&S.push(U)}),S}function Le(){const M=Yh(),S=St(M),U=Pf(S,Ks[Math.random()*Ks.length|0]),P=Math.random()<.5?"z":"x",Y=Sn[Math.random()*Sn.length|0],k=Math.random()<.5?1:-1,z=P==="z"?-3.5*k:3.5*k,ae=l(-520,520),se={grp:U,axis:P,street:Y,dir:k,lane:z,speed:l(4,8),vmax:l(9,14),stopT:0,lastS:null,yaw:P==="z"?k>0?0:Math.PI:k>0?Math.PI/2:-Math.PI/2,x:P==="z"?Y+z:ae,z:P==="z"?ae:Y+z,spins:ce(U)};U.position.set(se.x,.03,se.z),U.rotation.y=se.yaw,f.add(U),X.push(se)}let Be=!1;function de(){if(!Be){Be=!0;let M=0;const S=mt.slice();for(let U=S.length-1;U>0;U--){const P=Math.random()*(U+1)|0,Y=S[U];S[U]=S[P],S[P]=Y}for(const U of S){if(M>=y)break;if(Math.random()<.35)continue;const P=Yh(),Y=St(P),k=Pf(Y,Ks[Math.random()*Ks.length|0]);k.position.set(U[0],je*.2+.03,U[1]),k.rotation.y=U[2],k.traverse(z=>{z.castShadow=!1,z.receiveShadow=!0}),Ce.add(k),Q.push({x:U[0],z:U[1],yaw:U[2]}),M++}}for(;X.length<I;)Le()}const ue=new Pn;f.add(ue);let Te=null,ot=s.initialPaint??14240282;const Ve=new Uu(16772811,0,110,.44,.55,1.6),Ne=new Uu(16772811,0,110,.44,.55,1.6),rt=new An,gt=new An;Ve.target=rt,Ne.target=gt,ue.add(Ve,Ne,rt,gt);const dt=new mc(16722448,0,8,2),W=new mc(16722448,0,8,2);ue.add(dt,W);let Ie=!1,ge=!0;const Xe=[{name:"NORMAL",muT:1.25,muG:.55,pkF:.115,pkR:.115,paF:.15,paR:.15,assist:!0,steerMax:.5,steerFade:26,coup:.9,upLo:2800,upHi:6400,shift:.22,suspK:1,suspD:1,dfd:.55,tcCap:.4},{name:"DRIFT",muT:1.22,muG:.6,pkF:.1,pkR:.128,paF:.18,paR:.11,assist:!1,steerMax:.68,steerFade:33,coup:1.15,upLo:3800,upHi:7300,shift:.1,suspK:1.06,suspD:1.1,dfd:.42,tcCap:0},{name:"RALLY",muT:1.02,muG:1,pkF:.105,pkR:.12,paF:.165,paR:.125,assist:!1,steerMax:.62,steerFade:30,coup:1.05,upLo:3400,upHi:6900,shift:.14,suspK:.72,suspD:.8,dfd:.45,tcCap:0},{name:"ARCADE",muT:1.6,muG:1.2,pkF:.13,pkR:.13,paF:.19,paR:.19,assist:!0,steerMax:.55,steerFade:29,coup:1.35,upLo:4200,upHi:7600,shift:.09,suspK:1.15,suspD:1.15,dfd:1.05,tcCap:.25}];let Ye=0;const Se=.3,ut=-.02,it=[[.88,-.3,2.3],[-.88,-.3,2.3],[.9,-.3,-2.28],[-.9,-.3,-2.28],[.62,.64,.9],[-.62,.64,.9],[.62,.64,-1],[-.62,.64,-1]];let tn=it.map(M=>o(M[0],M[1],M[2]));const zt=[[900,360],[2e3,480],[3200,545],[4500,570],[6200,570],[6800,545],[7400,515],[7900,470]];function ni(M){if(M<=zt[0][0])return zt[0][1];for(let S=1;S<zt.length;S++)if(M<=zt[S][0]){const U=zt[S-1],P=zt[S];return U[1]+(P[1]-U[1])*(M-U[0])/(P[0]-U[0])}return zt[zt.length-1][1]}const mi=M=>Math.sin(1.65*Math.atan(1.7*M));let Mt=ls[s.initialVehicle??"gt"],Xn=Mt.mass,xs=62e3,_s=5600,Js=7400,Ci=1.15,Fn=Mt.wheelR,qn=Fo+Fn;const gi=o(2600,3050,560);let vs=1,Ns=.4,Bi=1,zi=1,On=[],ys=2.68,Qs=1.34,Tr=-1.34,Dn=-.2666,ki=.98,Ds=2.26,Us=1.5;function E(){const M=Mt.wheelbase/2,S=-M,U=Mt.track/2*.985,P=Mt.track/2*1.01,Y=Xn/1350,k=1360*Y,z=620*Y,ae=2e4*Y,se=14500*Y,me=Mt.drivetrain,he=me==="fwd"?[.5,.5,0,0]:me==="awd"?[.27,.27,.23,.23]:[0,0,.5,.5],Fe=(ht,He,Lt,bt,Rt,cn)=>({x:ht,z:He,steer:Lt,driveW:bt,brake:Rt,arb:cn,driven:bt>0});return[Fe(U,M,1,he[0],k,ae),Fe(-U,M,1,he[1],k,ae),Fe(P,S,0,he[2],z,se),Fe(-P,S,0,he[3],z,se)]}function G(M){te(ls[M])}function te(M){Mt=M,Xn=Mt.mass;const S=Xn/1350;xs=62e3*S,_s=5600*S,Js=7400*S,Ci=1.15*Math.pow(Mt.wheelR/.33,2)*Math.pow(S,.35),Fn=Mt.wheelR,qn=Fo+Fn,gi.set(Xn*(Mt.width*Mt.width+Mt.height*Mt.height)/12,Xn*(Mt.length*Mt.length+Mt.width*Mt.width)/12,Xn*(Mt.length*Mt.length+Mt.height*Mt.height)/12);const U=Math.max(1,Mt.wheelbase/2.68);tn=it.map(P=>o(P[0]*(Mt.width/1.9),P[1]*Math.min(1.1,Mt.height/1.25),P[2]*U)),ki=Mt.width/2+.06,Ds=Mt.length/2+.06,Us=Mt.height*1.15,vs=Mt.torqueNm/570,Ns=Mt.drag,Bi=Mt.downforce,zi=Mt.grip,On=E(),ys=Mt.wheelbase,Qs=Mt.wheelbase/2,Tr=-Mt.wheelbase/2,Dn=ut-Se+K()}const K=()=>Xn*9.81/4/xs,J=o(),Ue={t:0,surf:"GRASS"};function Je(M,S,U){Ue.t=1/0,Ue.surf="GRASS";let P=!1;const Y=At(M.x,M.z)+(_e(M.x,M.z)==="GRASS"?oe(M.x,M.z):0);if(M.y<Y-.001)return J.set(0,1,0),Ue.t=.001,Ue.surf=_e(M.x,M.z),!0;if(S.y<-1e-4){let k=a(M.y/-S.y,0,U);for(let he=0;he<3;he++){const Fe=At(M.x+S.x*k,M.z+S.z*k);k=a((M.y-Fe)/-S.y,0,U)}const z=M.x+S.x*k,ae=M.z+S.z*k;let se=At(z,ae);const me=_e(z,ae);me==="GRASS"&&(se+=oe(z,ae)),M.y+S.y*k<=se+.001&&(J.set(At(z-1.2,ae)-At(z+1.2,ae),2*1.2,At(z,ae-1.2)-At(z,ae+1.2)).normalize(),Ue.t=a((M.y-se)/-S.y,0,U),Ue.surf=me,P=!0)}for(const k of ye){const z=S.x*k.nx+S.y*k.ny+S.z*k.nz;if(z>=-1e-4)continue;const ae=((k.px-M.x)*k.nx+(k.py-M.y)*k.ny+(k.pz-M.z)*k.nz)/z;if(ae>0&&ae<U&&ae<Ue.t){const se=M.x+S.x*ae,me=M.z+S.z*ae,he=se-k.x,Fe=me-k.z,ht=he*k.c-Fe*k.s,He=he*k.s+Fe*k.c;Math.abs(ht)<=k.w/2+.05&&Math.abs(He)<=k.l/2&&(J.set(k.nx,k.ny,k.nz),Ue.t=ae,Ue.surf="TARMAC",P=!0)}}return P}const ze=o(),Ke=o(),tt=o(),Et=o(),Ct=o(),et=o(),$t=o(),fn=o(),on=o(),nn=o(),Ut=o(),Me=o(),Vt=o(),A=o(),Z=o(),q=o(),xe=o(),pe=o(),fe=new Wn,Pe=o(0,1,0);function De(){return{comp:0,compV:0,contact:!1,cp:o(),hard:o(),n:o(),wR:o(),Fs:0,Fx:0,Fy:0,s:0,kappa:0,kF:0,aF:0,surf:"TARMAC"}}const st={},be={pos:o(0,qn,-12),quat:new Wn,vel:o(),w:o(),wSpin:[0,0,0,0],wAngle:[0,0,0,0],heat:[0,0,0,0],wc:[De(),De(),De(),De()],prevContact:[!1,!1,!1,!1],abs:[1,1,1,1],tcS:0,kickT:0,rpm:900,cutT:0,gear:1,mode:"D",shiftT:0,revT:0,steerVal:0,steerAngle:0,ack:[0,0],throttle:0,brakeIn:0,hand:!1,spd:0,reset(){const M=o(0,0,1).applyQuaternion(this.quat),S=Math.atan2(M.x,M.z);this.quat.setFromAxisAngle(Pe,S),this.pos.y=lt(this.pos.x,this.pos.z)+qn,this.vel.set(0,0,0),this.w.set(0,0,0),this.wSpin=[0,0,0,0],this.gear=1,this.mode="D",this.shiftT=0,this.cutT=0,this.rpm=900,this.tcS=0,this.kickT=0,this.heat=[0,0,0,0];for(const U of this.wc)U.kF=0,U.aF=0;this.abs=[1,1,1,1]},carOBB(M,S,U,P){let Y=!1;const k=Math.cos(U),z=Math.sin(U);for(const ae of tn){if(Me.copy(ae).applyQuaternion(this.quat).add(this.pos),Me.y>Us)continue;const se=Me.x-M,me=Me.z-S,he=se*k-me*z,Fe=se*z+me*k,ht=ki-Math.abs(he),He=Ds-Math.abs(Fe);if(ht<=0||He<=0)continue;let Lt=0,bt=0;ht<He?Lt=Math.sign(he)||1:bt=Math.sign(Fe)||1;const Rt=Lt*k+bt*z,cn=-Lt*z+bt*k;Vt.copy(Me).sub(this.pos),A.copy(this.vel).add(Z.crossVectors(this.w,Vt));const en=A.x*Rt+A.z*cn;let dn=Math.min(ht,He)*26e4+(en<0?-en*1e4:0);dn=Math.min(dn,28e4),Ut.set(Rt*dn,0,cn*dn);const Nt=A.x-en*Rt,wn=A.z-en*cn,Zt=Math.hypot(Nt,wn);if(Zt>.01){const sn=-Math.min(dn*.55,Zt*2400);Ut.x+=Nt/Zt*sn,Ut.z+=wn/Zt*sn}Et.add(Ut),Ct.add(q.crossVectors(Vt,Ut)),en<-3&&(Y=!0)}return Y&&P&&Bc(a(this.spd*.035,.15,.6)),Y},step(M){const S=Xe[Ye],U=this.quat;ze.set(0,1,0).applyQuaternion(U),Ke.set(0,0,1).applyQuaternion(U),tt.set(1,0,0).applyQuaternion(U);const P=this.vel.length(),Y=this.vel.dot(Ke),k=st.KeyW||st.ArrowUp?1:0,z=st.KeyS||st.ArrowDown?1:0;let ae=0,se=0;this.mode==="D"?(ae=k,se=z,Y<.8&&z>.5&&k<.1?(this.revT+=M,this.revT>.3&&(this.mode="R",this.revT=0,i("Gearbox · reverse"))):this.revT=0):k>.5?(ae=0,se=1,Y>-.8&&(this.mode="D",i("Gearbox · drive"))):(ae=z,se=0),this.mode==="R"&&Y<-3.2&&(ae=0),this.throttle+=a(ae-this.throttle,-M*8,M*5),this.brakeIn+=a(se-this.brakeIn,-M*10,M*7),this.hand=!!st.Space;const me=(st.KeyA||st.ArrowLeft?1:0)-(st.KeyD||st.ArrowRight?1:0),he=me!==0?3.2:4.6;this.steerVal+=a(me-this.steerVal,-he*M,he*M);const Fe=S.steerMax*Mt.steerFactor/(1+Math.pow(P/S.steerFade,1.5));this.steerAngle=this.steerVal*Fe;const ht=2*Math.abs(On[0].x);let He=this.steerAngle,Lt=this.steerAngle;if(Math.abs(this.steerAngle)>.004){const ke=ys/Math.tan(Math.abs(this.steerAngle)),rn=Math.atan(ys/Math.max(.5,ke-ht/2)),pt=Math.atan(ys/(ke+ht/2));this.steerAngle>0?(He=rn,Lt=pt):(He=-pt,Lt=-rn)}this.ack[0]=He,this.ack[1]=Lt;const bt=this.mode==="R"?-3.3:[3.55,2.24,1.55,1.21,1,.83][this.gear-1]*3.7,Rt=On.map((ke,rn)=>ke.driven?rn:-1).filter(ke=>ke>=0);let cn=0;for(const ke of Rt)cn+=this.wSpin[ke];const en=cn/Math.max(1,Rt.length),dn=Math.abs(en)*Math.abs(bt)*9.5493,Nt=900+this.throttle*2300,wn=P<6?Math.max(0,Nt-dn):0,Zt=a(Math.max(dn,900+wn*(.4+.6*this.throttle)),900,7900);if(this.rpm+=(Zt-this.rpm)*Math.min(1,M*8),this.kickT>0&&(this.kickT-=M),this.shiftT>0)this.shiftT-=M;else if(this.mode==="D"){const ke=S.upLo+(S.upHi-S.upLo)*this.throttle;this.rpm>ke&&this.gear<6?(this.gear++,this.shiftT=S.shift):this.rpm>7400&&this.gear<6?(this.gear++,this.shiftT=S.shift*.8):this.throttle>.85&&this.gear>1&&this.kickT<=0&&P>5?en*9.5493*[3.55,2.24,1.55,1.21,1,.83][this.gear-2]*3.7<6600&&(this.gear--,this.shiftT=S.shift*1.1,this.kickT=.8):this.rpm<1500&&this.gear>1&&(this.gear--,this.shiftT=S.shift*.9)}this.cutT>0&&(this.cutT-=M);let sn=ni(this.rpm)*this.throttle*S.coup*vs-(this.throttle<.05?30+this.rpm*.018:0);if(this.rpm>7700&&(this.cutT=.08),this.cutT>0&&(sn=0),Ye===1&&this.throttle>.3&&P>8&&Math.max(this.wc[2].kappa,this.wc[3].kappa)>.115*1.4&&(sn+=a((4600-this.rpm)*.12,-260,520)),this.brakeIn<.1&&P<1.8&&(sn+=26*(1-c(.5,1.8,Math.abs(Y)))),this.shiftT>0&&(sn*=.15+.85*(1-this.shiftT/Math.max(S.shift,.01))),S.assist&&S.tcCap>0&&this.mode==="D"){const ke=Math.max(this.wc[2].kappa,this.wc[3].kappa),rn=a((ke-S.pkR*1.5)/(S.pkR*2),0,1);this.tcS+=(rn-this.tcS)*Math.min(1,M*14),sn*=1-S.tcCap*this.tcS}else this.tcS*=Math.max(0,1-M*6);const ii=sn*bt*.9,Rn=Math.min(420*(Ye===1?1.25:1),60+Math.abs(ii)*.14),Mn=On.map(ke=>ii*ke.driveW);if(Mt.drivetrain!=="fwd"){const ke=a(26*(this.wSpin[2]-this.wSpin[3]),-Rn,Rn);Mn[2]-=ke,Mn[3]+=ke}if(Mt.drivetrain!=="rwd"){const ke=Rn*.6,rn=a(16*(this.wSpin[0]-this.wSpin[1]),-ke,ke);Mn[0]-=rn,Mn[1]+=rn}et.copy(ze).negate();const si=Se+Fn;for(let ke=0;ke<4;ke++){const rn=On[ke],pt=this.wc[ke];if(pt.hard.copy(this.pos).addScaledVector(tt,rn.x).addScaledVector(ze,ut).addScaledVector(Ke,rn.z),Je(pt.hard,et,si)){const oi=si-Ue.t;oi>0?(pt.contact=!0,pt.comp=Math.min(oi,Se),pt.cp.copy(pt.hard).addScaledVector(et,Ue.t),pt.n.copy(J),pt.surf=Ue.surf,Me.copy(pt.hard).sub(this.pos),$t.copy(this.vel).add(Vt.crossVectors(this.w,Me)),pt.compV=$t.dot(et)):(pt.contact=!1,pt.comp=0,pt.compV=0)}else pt.contact=!1,pt.comp=0,pt.compV=0}Et.set(0,-9.81*Xn,0),Ct.set(0,0,0);const ri=S.suspK,Yn=S.suspD;for(const[ke,rn]of[[0,1],[2,3]]){const pt=this.wc[ke],oi=this.wc[rn],_i=pt.comp-oi.comp,ai=[[pt,_i*On[ke].arb],[oi,-_i*On[rn].arb]];for(const[zn]of ai){let kn=zn.comp*(xs*ri+zn.comp*48e3*Math.min(2,Xn/1350));kn+=a((zn.compV>0?_s:Js)*Yn*zn.compV,-5600*Yn*(Xn/1350),6800*Yn*(Xn/1350)),zn.comp>.245&&(kn+=(zn.comp-.245)*17e4),kn=a(kn,0,32e3*Math.max(1,Xn/1350)),zn.Fs=kn,zn.contact&&(Ut.copy(ze).multiplyScalar(kn),Et.add(Ut),Me.copy(zn.hard).sub(this.pos),Ct.add(Vt.crossVectors(Me,Ut)))}}const Qi=this.brakeIn,ln=this.hand,Jt=1-.32*v.wet;for(let ke=0;ke<4;ke++){const rn=On[ke],pt=this.wc[ke],oi=rn.driven?S.pkR:S.pkF,_i=rn.driven?S.paR:S.paF;S.assist&&pt.contact&&Qi>.3&&P>4&&Math.abs(this.wSpin[ke])<.8?this.abs[ke]+=(.22-this.abs[ke])*Math.min(1,M*40):this.abs[ke]+=(1-this.abs[ke])*Math.min(1,M*10);const ai=rn.brake*Qi*this.abs[ke]+(ln&&rn.driven?2900*(Xn/1350):0);if(!pt.contact){this.wSpin[ke]+=Mn[ke]/Ci*M;const So=ai*M/Ci;Math.abs(this.wSpin[ke])<So?this.wSpin[ke]=0:this.wSpin[ke]-=Math.sign(this.wSpin[ke])*So,pt.Fx=0,pt.Fy=0,pt.s=0,this.heat[ke]=Math.max(0,this.heat[ke]-M*.05);continue}const zn=rn.steer?this.ack[ke]:0;fn.copy(Ke).multiplyScalar(Math.cos(zn)).addScaledVector(tt,Math.sin(zn)),fn.addScaledVector(pt.n,-fn.dot(pt.n)).normalize(),on.crossVectors(fn,pt.n).normalize(),pt.wR.copy(on),Me.copy(pt.cp).sub(this.pos),nn.copy(this.vel).add(Vt.crossVectors(this.w,Me));const kn=nn.dot(fn),Cr=nn.dot(on),sr=Math.max(Math.abs(kn),2),Os=(this.wSpin[ke]*Fn-kn)/sr,Ta=Math.atan2(-Cr,Math.abs(kn)+.5),vo=Math.max(Math.abs(kn),2.2);pt.kF+=(Os-pt.kF)*a(vo*M/.12,0,1),pt.aF+=(Ta-pt.aF)*a(vo*M/.26,0,1);const rr=pt.kF/oi,yo=pt.aF/_i,Pr=Math.hypot(rr,yo);pt.s=Pr,pt.kappa=Os,this.heat[ke]=a(this.heat[ke]+Math.abs(Pr)*P*M*.012-M*.045,0,1);const Ea=pt.Fs,Gh=(pt.surf==="GRASS"?S.muG:S.muT)*zi*Jt*(.9+.1*this.heat[ke])*a(1-12e-6*(Ea-3200),.78,1.05);let Aa=0,el=0;if(Pr>1e-4){const So=Ea*Gh*mi(Pr);Aa=So*rr/Pr,el=So*yo/Pr}pt.Fx=Aa,pt.Fy=el,Aa+=(pt.surf==="GRASS"?-.055:-.011)*Ea*a(kn/3,-1,1),Ut.copy(fn).multiplyScalar(Aa).addScaledVector(on,el),Et.add(Ut),Ct.add(Vt.crossVectors(Me,Ut));const Im=Math.min(Gh*Ea*2.4*Fn/sr/oi,25e3),Wh=M*Fn*Fn*Im/Ci;let Mo=(this.wSpin[ke]*(1+Wh)+M*(Mn[ke]-pt.Fx*Fn)/Ci)/(1+Wh);const Xh=ai*M/Ci;Math.abs(Mo)<Xh?Mo=0:Mo-=Math.sign(Mo)*Xh,this.wSpin[ke]=Mo,!this.prevContact[ke]&&pt.compV>3.5&&Bc(a((pt.compV-3)/9,.12,1)*.7),this.prevContact[ke]=!0}for(const ke of tn){Me.copy(ke).applyQuaternion(U).add(this.pos);const rn=We(Me.x,Me.z),pt=rn.h-Me.y;if(pt>0){Vt.copy(Me).sub(this.pos),A.copy(this.vel).add(Z.crossVectors(this.w,Vt));const oi=A.dot(rn.n);let _i=pt*48e3+(oi<0?-oi*3800:0);_i=Math.min(_i,32e3*Math.max(1,Xn/1350)),Ut.copy(rn.n).multiplyScalar(_i),A.addScaledVector(rn.n,-oi);const ai=A.length();ai>.01&&(A.multiplyScalar(1/ai),Ut.addScaledVector(A,-Math.min(_i*.55,ai*2200))),Et.add(Ut),Ct.add(q.crossVectors(Vt,Ut))}}for(const ke of tn){Me.copy(ke).applyQuaternion(U).add(this.pos);const rn=Ys(Me.x,Me.z);if(!(!rn||!rn.blds.length))for(const pt of rn.blds){if(Me.y>pt.top)continue;const oi=Me.x-pt.x,_i=Me.z-pt.z,ai=pt.hx-Math.abs(oi),zn=pt.hz-Math.abs(_i);if(ai<=0||zn<=0)continue;Vt.copy(Me).sub(this.pos),A.copy(this.vel).add(Z.crossVectors(this.w,Vt));let kn=0,Cr=0;ai<zn?kn=Math.sign(oi)||1:Cr=Math.sign(_i)||1;const sr=A.x*kn+A.z*Cr;let Os=Math.min(ai,zn)*25e4+(sr<0?-sr*9e3:0);Os=Math.min(Os,3e5),Ut.set(kn*Os,0,Cr*Os);const Ta=A.x-sr*kn,vo=A.z-sr*Cr,rr=Math.hypot(Ta,vo);if(rr>.01){const yo=-Math.min(Os*.6,rr*2500);Ut.x+=Ta/rr*yo,Ut.z+=vo/rr*yo}Et.add(Ut),Ct.add(q.crossVectors(Vt,Ut))}}if(P>.4){for(const ke of X)Math.abs(ke.x-this.pos.x)>12||Math.abs(ke.z-this.pos.z)>12||this.carOBB(ke.x,ke.z,ke.yaw,ke)&&(ke.stopT=1.6);for(const ke of Q)Math.abs(ke.x-this.pos.x)>12||Math.abs(ke.z-this.pos.z)>12||this.carOBB(ke.x,ke.z,ke.yaw,null)}Ut.copy(this.vel).multiplyScalar(-Ns*P),Et.add(Ut);const Cn=S.dfd*Bi*P*P;if(Me.copy(this.pos).addScaledVector(Ke,Qs),Ut.copy(ze).multiplyScalar(-Cn*.42),Et.add(Ut),Ct.add(Vt.crossVectors(A.copy(Me).sub(this.pos),Ut)),Me.copy(this.pos).addScaledVector(Ke,Tr),Ut.copy(ze).multiplyScalar(-Cn*.58),Et.add(Ut),Ct.add(Vt.crossVectors(A.copy(Me).sub(this.pos),Ut)),this.vel.addScaledVector(Et,M/Xn),P<.5&&this.throttle<.05&&this.brakeIn<.05&&!this.hand&&this.vel.multiplyScalar(Math.max(0,1-5*M)),xe.set(Ct.dot(tt),Ct.dot(ze),Ct.dot(Ke)),pe.copy(xe).divide(gi),Me.set(0,0,0).addScaledVector(tt,pe.x).addScaledVector(ze,pe.y).addScaledVector(Ke,pe.z),this.w.addScaledVector(Me,M).multiplyScalar(Math.max(0,1-.05*M)),this.pos.addScaledVector(this.vel,M),this.pos.y<-50){this.reset();return}const es=.5*M;fe.set(this.w.x*es,this.w.y*es,this.w.z*es,0).multiply(U),U.x+=fe.x,U.y+=fe.y,U.z+=fe.z,U.w+=fe.w,U.normalize();for(let ke=0;ke<4;ke++)this.wAngle[ke]+=this.wSpin[ke]*M;this.spd=this.vel.length(),isFinite(this.pos.x)||this.reset()}},Bn=(()=>{const S=new Float32Array(50400),U=new Float32Array(4200*4),P=new Uint32Array(4200*6);for(let ae=0;ae<4200;ae++){const se=ae*4;P.set([se,se+1,se+2,se,se+2,se+3],ae*6)}const Y=new vn;Y.setAttribute("position",new En(S,3)),Y.setAttribute("aA",new En(U,1)),Y.setIndex(new En(P,1));const k=new It(Y,new Ri({transparent:!0,depthWrite:!1,side:Ti,vertexShader:"attribute float aA; varying float vA; void main(){ vA = aA; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying float vA; void main(){ gl_FragColor = vec4(0.045,0.045,0.05, vA * 0.72); }"}));k.frustumCulled=!1,k.renderOrder=3,f.add(k);let z=0;return{st:[0,1,2,3].map(()=>({on:!1,lastL:o(),lastR:o()})),add(ae,se,me,he,Fe){const ht=z*12,He=z*4;S.set([ae.x,ae.y,ae.z,se.x,se.y,se.z,he.x,he.y,he.z,me.x,me.y,me.z],ht),U[He]=U[He+1]=U[He+2]=U[He+3]=Fe,Y.attributes.position.needsUpdate=!0,Y.attributes.aA.needsUpdate=!0,z=(z+1)%4200}}})(),Vn=V(64,64,M=>{const S=M.createRadialGradient(32,32,2,32,32,30);S.addColorStop(0,"rgba(255,255,255,.9)"),S.addColorStop(1,"rgba(255,255,255,0)"),M.fillStyle=S,M.fillRect(0,0,64,64)});function Un(M,S,U){const P=new Float32Array(M*3).fill(-9999),Y=new Float32Array(M),k=new Float32Array(M),z=new Float32Array(M*3),ae=new Float32Array(M),se=new Float32Array(M),me=new vn;me.setAttribute("position",new En(P,3)),me.setAttribute("aSize",new En(Y,1)),me.setAttribute("aA",new En(k,1));const he=new Ri({transparent:!0,depthWrite:!1,uniforms:{uTex:{value:Vn},uColor:{value:new nt(S)},uAlpha:{value:U}},vertexShader:`attribute float aSize; attribute float aA; varying float vA;
        void main(){ vA = aA; vec4 mv = modelViewMatrix * vec4(position,1.0);
        gl_PointSize = aSize * (200.0 / max(1.0, -mv.z)); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D uTex; uniform vec3 uColor; uniform float uAlpha; varying float vA;
        void main(){ vec4 t = texture2D(uTex, gl_PointCoord); gl_FragColor = vec4(uColor, t.a * vA * uAlpha); }`}),Fe=new wp(me,he);Fe.frustumCulled=!1,Fe.renderOrder=4,f.add(Fe);let ht=0;return{spawn(He,Lt,bt){const Rt=ht;ht=(ht+1)%M,P[Rt*3]=He.x+l(-.2,.2),P[Rt*3+1]=He.y+.1,P[Rt*3+2]=He.z+l(-.2,.2),z[Rt*3]=Lt.x*.4+l(-1,1),z[Rt*3+1]=Lt.y*.3+l(.8,2),z[Rt*3+2]=Lt.z*.4+l(-1,1),ae[Rt]=0,se[Rt]=l(.9,1.7),Y[Rt]=.8*bt+.5},update(He){let Lt=!1;for(let bt=0;bt<M;bt++){if(ae[bt]>=se[bt])continue;if(Lt=!0,ae[bt]+=He,ae[bt]>=se[bt]){k[bt]=0,P[bt*3+1]=-9999;continue}P[bt*3]+=z[bt*3]*He,P[bt*3+1]+=z[bt*3+1]*He,P[bt*3+2]+=z[bt*3+2]*He;const Rt=Math.max(0,1-1.4*He);z[bt*3]*=Rt,z[bt*3+2]*=Rt,z[bt*3+1]=z[bt*3+1]*Rt+He;const cn=ae[bt]/se[bt];k[bt]=(1-cn)*.38,Y[bt]+=He*2.6}Lt&&(me.attributes.position.needsUpdate=!0,me.attributes.aSize.needsUpdate=!0,me.attributes.aA.needsUpdate=!0)}}}const un=Un(320,14210253,1),bn=Un(260,14674418,.8),Pt=1300,hn=new Float32Array(Pt*2*3),an=new Float32Array(Pt*3),Xt=26,mn=16;for(let M=0;M<Pt;M++)an[M*3]=l(-Xt,Xt),an[M*3+1]=l(0,mn),an[M*3+2]=l(-Xt,Xt);const Hi=new vn;Hi.setAttribute("position",new En(hn,3));const uo=new ch({color:12374240,transparent:!0,opacity:.32,depthWrite:!1}),Fs=new Sp(Hi,uo);Fs.frustumCulled=!1,Fs.visible=!1,f.add(Fs);const er=[];for(let M=0;M<4;M++){const S=new mc(16766874,0,34,1.8);S.visible=!1,f.add(S),er.push(S)}const tr=[];let kt=null,Fc=null,Si=null,Er=null,Oc=null,ha=null,nr=!1,da=0;function _h(){if(!kt)try{kt=new AudioContext,Si=kt.createGain(),Si.gain.value=.5;const M=kt.createDynamicsCompressor();Si.connect(M),M.connect(kt.destination);const S=kt.createBuffer(1,kt.sampleRate*2,kt.sampleRate),U=S.getChannelData(0);for(let He=0;He<U.length;He++)U[He]=Math.random()*2-1;Fc=S;const P=kt.createOscillator();P.type="sawtooth";const Y=kt.createOscillator();Y.type="square";const k=kt.createGain();k.gain.value=0;const z=kt.createBiquadFilter();z.type="lowpass",z.frequency.value=600,z.Q.value=1.5,P.connect(z),Y.connect(z),z.connect(k),k.connect(Si),P.start(),Y.start(),Er={o1:P,o2:Y,og:k,of:z};const ae=kt.createBufferSource();ae.buffer=S,ae.loop=!0;const se=kt.createBiquadFilter();se.type="bandpass",se.frequency.value=480,se.Q.value=.5;const me=kt.createGain();me.gain.value=0,ae.connect(se),se.connect(me),me.connect(Si),ae.start(),Oc={wg:me,wf:se};const he=kt.createBufferSource();he.buffer=S,he.loop=!0;const Fe=kt.createBiquadFilter();Fe.type="bandpass",Fe.frequency.value=1100,Fe.Q.value=1.4;const ht=kt.createGain();ht.gain.value=0,he.connect(Fe),Fe.connect(ht),ht.connect(Si),he.start(),ha={sg:ht,sf:Fe}}catch{kt=null}}function Bc(M){if(!kt||nr||!Si)return;const S=kt.currentTime,U=kt.createOscillator();U.type="triangle",U.frequency.setValueAtTime(140,S),U.frequency.exponentialRampToValueAtTime(40,S+.14);const P=kt.createGain();if(P.gain.setValueAtTime(Math.min(.9,M),S),P.gain.exponentialRampToValueAtTime(.001,S+.22),U.connect(P),P.connect(Si),U.start(S),U.stop(S+.25),!Fc)return;const Y=kt.createBufferSource();Y.buffer=Fc;const k=kt.createBiquadFilter();k.type="lowpass",k.frequency.value=900;const z=kt.createGain();z.gain.setValueAtTime(Math.min(.7,M*.8),S),z.gain.exponentialRampToValueAtTime(.001,S+.18),Y.connect(k),k.connect(z),z.connect(Si),Y.start(S)}function om(){if(!kt||!Er||!Oc||!ha||!Si)return;const M=kt.currentTime,S=nr||go,U=be.rpm/8e3;Er.o1.frequency.setTargetAtTime(38+U*205,M,.04),Er.o2.frequency.setTargetAtTime(19+U*102,M,.04),Er.of.frequency.setTargetAtTime(240+U*2500,M,.06),Er.og.gain.setTargetAtTime(S?0:.04+be.throttle*.07+U*.045,M,.09),Oc.wg.gain.setTargetAtTime(S?0:Math.min(.16,be.spd*.0032),M,.15),ha.sg.gain.setTargetAtTime(S?0:da*.16,M,.06),ha.sf.frequency.setTargetAtTime(800+be.spd*14,M,.1),Si.gain.setTargetAtTime(nr?0:.5,M,.1)}function zc(M){const S=(v.time-6)/12*Math.PI,U=1.15;g.set(Math.cos(U)*Math.cos(S),Math.sin(S),Math.sin(U)*Math.cos(S)).normalize();const P=c(-.04,.22,g.y),Y=1-P,k=Math.exp(-Math.pow((g.y-.03)/.11,2)),z=v.weather==="overcast"?1:v.weather==="rain"?.85:0;v.day=P,v.night=Y,v.wet=v.weather==="rain"?1:v.weather==="overcast"?.22:0,w.sunDir.value.copy(g),w.uDay.value=P,w.uDusk.value=k*(1-z*.7),w.uNight.value=Y,w.uOvercast.value=z,L.position.copy(be.pos).addScaledVector(g,210),L.target.position.copy(be.pos),L.intensity=2.15*P*(1-.6*z)+.16*Y;const ae=new nt;g.y>.18?ae.setHex(16773855):ae.setHex(16757361),ae.lerp(new nt(10466520),Y),L.color.copy(ae),T.intensity=.16+.42*P,T.color.setHex(12373990).lerp(new nt(2240586),Y),T.groundColor.setHex(7828812).lerp(new nt(1316380),Y);const se=new nt;se.setHex(15128494).lerp(new nt(724502),Y),k>.2&&se.lerp(new nt(14715466),k*.6*(1-z)),z>0&&se.lerp(new nt(10133670).multiplyScalar(.25+.75*P),z*.75),b.color.copy(se);const me=v.weather==="rain"?110:v.weather==="overcast"?170:340,he=v.weather==="rain"?720:v.weather==="overcast"?1e3:1600;b.near=me*(.55+.45*P),b.far=he*(.6+.4*P),d.toneMappingExposure=.95+.35*Y;for(const Fe of j)Fe.roughness=.96-.5*v.wet,Fe.metalness=.14*v.wet,Fe.envMapIntensity=.35+.85*v.wet;Fs.visible=v.weather==="rain",uo.opacity=.3,ge&&(Ie=g.y<.06||v.weather!=="clear"),vh(),am()}let fa=0;function am(){fa&&window.clearTimeout(fa),fa=window.setTimeout(()=>{fa=0,D()},160)}function vh(){const M=v.night*90;if(M<1){for(const S of er)S.visible=!1;return}tr.length=0;for(const S of at){const U=(S.x-be.pos.x)**2+(S.z-be.pos.z)**2;U<3600&&tr.push({p:S,d:U})}tr.sort((S,U)=>S.d-U.d);for(let S=0;S<er.length;S++){const U=er[S],P=tr[S];if(!P){U.visible=!1;continue}U.visible=!0,U.position.set(P.p.x,P.p.y,P.p.z),U.intensity=M}}function yh(M){if(Ma=null,_o=[],Te){ue.remove(Te.root);for(const z of Te.rigs)ue.remove(z.pivot);Te.root.traverse(z=>{const ae=z;ae.isMesh&&ae.geometry.dispose()})}const S=Wb(M,ot,!0);Te=S,ue.add(S.root),S.root.position.y=-S.gy,S.rigs.forEach(z=>{z.pivot.parent?.remove(z.pivot),z.pivot.position.set(z.x,Dn,z.z),ue.add(z.pivot)});const[U,P]=S.headAnchors;Ve.position.set(U.x,U.y-S.gy,U.z-.1),Ne.position.set(P.x,P.y-S.gy,P.z-.1),rt.position.set(U.x,U.y-S.gy,U.z+34),gt.position.set(P.x,P.y-S.gy,P.z+34);const[Y,k]=S.tailAnchors;dt.position.set(Y.x,Y.y-S.gy,Y.z),W.position.set(k.x,k.y-S.gy,k.z)}function cm(M){G(M),yh(M),be.reset(),s.onReady?.(Mt)}function lm(M){ot=M,Te&&Te.materials.paint.color.setHex(M);for(const S of _o)S.color.setHex(M)}const pa=["Chase","Cockpit","Hood","Bumper","Cinema","Orbit"];let Vi=0,ho=.6,ma=.35,kc=9,fo=!1,Hc=0,Vc=0;const Gi=o(0,2.6,-8),ir=o(0,.8,0),Mh=o(),Gc=o();function um(M){const S=ze.set(0,1,0).applyQuaternion(be.quat),U=Ke.set(0,0,1).applyQuaternion(be.quat),P=be.spd,Y=a((P-26)/60,0,1)*.05,k=Te?Te.gy:Fo+Fn;if(Vi===0){Me.copy(U).multiplyScalar(-(6.6+P*.06)),Vt.copy(S).multiplyScalar(2.5+P*.012),A.copy(be.pos).add(Me).add(Vt),Gi.lerp(A,1-Math.exp(-M*5));const z=lt(Gi.x,Gi.z)+.6;Gi.y<z&&(Gi.y=z),p.position.copy(Gi),Y>0&&(p.position.x+=(Math.random()-.5)*Y,p.position.y+=(Math.random()-.5)*Y*.5,p.position.z+=(Math.random()-.5)*Y),Me.copy(be.pos).addScaledVector(S,1).addScaledVector(U,2.4),ir.lerp(Me,1-Math.exp(-M*10)),p.lookAt(ir),p.fov=62+a(P-18,0,50)*.22,p.updateProjectionMatrix()}else if(Vi===1){const z=Mt.height*.78-k;p.position.copy(be.pos).addScaledVector(S,z).addScaledVector(tt.set(1,0,0).applyQuaternion(be.quat),.36*(Mt.width/1.9)),p.position.addScaledVector(U,.12),Me.copy(be.pos).addScaledVector(U,22).addScaledVector(S,z+.1),p.lookAt(Me),p.fov=74,p.updateProjectionMatrix(),Gi.copy(p.position),ir.copy(Me)}else if(Vi===2)p.position.copy(be.pos).addScaledVector(S,Mt.height*.52-k).addScaledVector(U,Mt.length*.18),Y>0&&(p.position.y+=(Math.random()-.5)*Y*.6,p.position.x+=(Math.random()-.5)*Y*.4),Me.copy(be.pos).addScaledVector(U,14).addScaledVector(S,Mt.height*.5-k),p.lookAt(Me),p.fov=70,p.updateProjectionMatrix(),Gi.copy(p.position),ir.copy(Me);else if(Vi===3)p.position.copy(be.pos).addScaledVector(S,.42-k).addScaledVector(U,Mt.length/2-.05),Me.copy(be.pos).addScaledVector(U,16).addScaledVector(S,.42-k),p.lookAt(Me),p.fov=68,p.updateProjectionMatrix(),Gi.copy(p.position),ir.copy(Me);else if(Vi===4){const z=ho+m.value*.22,ae=Math.max(8,Mt.length*1.7),se=Math.cos(.32);Me.set(Math.sin(z)*se,.32,Math.cos(z)*se).multiplyScalar(ae),p.position.copy(be.pos).add(Me).addScaledVector(S,.5);const me=lt(p.position.x,p.position.z)+.45;p.position.y<me&&(p.position.y=me),p.lookAt(Vt.copy(be.pos).addScaledVector(S,.5)),p.fov=50,p.updateProjectionMatrix(),Gi.copy(p.position),ir.copy(be.pos)}else{fo||(ho+=M*.08);const z=Math.cos(ma),ae=Math.sin(ma);Me.set(Math.sin(ho)*z,ae,Math.cos(ho)*z).multiplyScalar(kc),p.position.copy(be.pos).add(Me).addScaledVector(S,.4);const se=lt(p.position.x,p.position.z)+.4;p.position.y<se&&(p.position.y=se),p.lookAt(Vt.copy(be.pos).addScaledVector(S,.6)),p.fov=55,p.updateProjectionMatrix(),Gi.copy(p.position),ir.copy(be.pos)}}const Gt=t.getContext("2d");t.width=232,t.height=132;const ei=n.getContext("2d");n.width=118,n.height=118;const Ar=[];let po=0,mo=0,Rr=0,Wc=0,Sh="TARMAC";function hm(){Gt.clearRect(0,0,232,132);const k=Math.PI*.78,z=Math.PI*2.22,ae=Fe=>k+(z-k)*a(Fe/8e3,0,1);Gt.lineWidth=7,Gt.strokeStyle="rgba(255,255,255,.10)",Gt.beginPath(),Gt.arc(116,126,104,k,z),Gt.stroke(),Gt.strokeStyle="#ff6a2a",Gt.beginPath(),Gt.arc(116,126,104,ae(7200),z),Gt.stroke(),Gt.font="600 9px 'IBM Plex Mono', ui-monospace, monospace",Gt.textAlign="center",Gt.textBaseline="middle";for(let Fe=0;Fe<=8;Fe++){const ht=ae(Fe*1e3),He=Math.cos(ht),Lt=Math.sin(ht);Gt.strokeStyle=Fe>=7?"#ff6a2a":"rgba(236,233,226,.75)",Gt.lineWidth=Fe%2?1:2,Gt.beginPath(),Gt.moveTo(116+He*99,126+Lt*99),Gt.lineTo(116+He*90,126+Lt*90),Gt.stroke(),Gt.fillStyle=Fe>=7?"#ff6a2a":"#96928a",Gt.fillText(String(Fe),116+He*79,126+Lt*79)}const se=ae(be.rpm),me=Math.cos(se),he=Math.sin(se);Gt.strokeStyle="#ece9e2",Gt.lineWidth=2.6,Gt.beginPath(),Gt.moveTo(116-me*10,126-he*10),Gt.lineTo(116+me*86,126+he*86),Gt.stroke(),Gt.fillStyle="#ff6a2a",Gt.beginPath(),Gt.arc(116,126,4,0,u),Gt.fill(),Gt.fillStyle="#ece9e2",Gt.font="700 32px Rajdhani, system-ui, sans-serif",Gt.fillText(String(Math.round(be.spd*3.6)),116,92),Gt.fillStyle="#96928a",Gt.font="500 9px 'IBM Plex Mono', ui-monospace, monospace",Gt.fillText("KM/H",116,111),Gt.fillStyle="#ff6a2a",Gt.font="700 16px Rajdhani, system-ui, sans-serif",Gt.fillText(be.mode==="R"?"R":`D${be.gear}`,116,128)}function dm(){ei.clearRect(0,0,118,118),ei.strokeStyle="rgba(255,255,255,.12)",ei.lineWidth=1;for(const Y of[.5,1,1.5])ei.beginPath(),ei.arc(59,59,Y*40,0,u),ei.stroke();ei.beginPath(),ei.moveTo(55,59),ei.lineTo(63,59),ei.moveTo(59,55),ei.lineTo(59,63),ei.stroke(),Ar.push([po,mo]),Ar.length>45&&Ar.shift();for(let Y=0;Y<Ar.length;Y++){const[k,z]=Ar[Y];ei.fillStyle=`rgba(143,184,204,${Y/Ar.length*.5})`,ei.fillRect(59+k*40-1,59-z*40-1,2,2)}ei.fillStyle="#ff6a2a",ei.beginPath(),ei.arc(59+a(po,-1.6,1.6)*40,59-a(mo,-1.6,1.6)*40,3.4,0,u),ei.fill()}let go=!1,bh=!1,ga=60,xa=0,_a=null,Xc=0,wh=0,va=0,qc=0,Yc=0,Th=ot,Kc=.5;function Eh(){const M=document.activeElement;if(!M)return!1;const S=M.tagName;return S==="INPUT"||S==="TEXTAREA"||S==="SELECT"||M.isContentEditable}function Ah(M){if(_h(),kt&&kt.state==="suspended"&&kt.resume(),!Eh()){if(M.code==="Digit1")return xo(0);if(M.code==="Digit2")return xo(1);if(M.code==="Digit3")return xo(2);if(M.code==="Digit4")return xo(3);if(M.code==="KeyN"){ge=!1,Ie=!Ie,i(Ie?"Headlights on":"Headlights off");return}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(M.code)&&M.preventDefault(),st[M.code]=!0,M.code==="KeyC"&&(Vi=(Vi+1)%pa.length,i(`Camera · ${pa[Vi]}`)),M.code==="KeyR"&&(be.reset(),N(),i("Reset to start line")),M.code==="KeyM"&&(nr=!nr,i(nr?"Sound off":"Sound on")),M.code==="KeyP"&&Uh(!go)}}function Rh(M){st[M.code]=!1}function Ch(){for(const M of Object.keys(st))st[M]=!1;fo=!1}function Ph(M){_h(),kt&&kt.state==="suspended"&&kt.resume(),!Eh()&&(fo=!0,Hc=M.clientX,Vc=M.clientY)}function Lh(M){fo&&(ho-=(M.clientX-Hc)*.006,ma=a(ma+(M.clientY-Vc)*.005,-.15,1.25),Hc=M.clientX,Vc=M.clientY)}function Ih(){fo=!1}function Nh(M){kc=a(kc+M.deltaY*.008,4.5,26)}function jc(){const M=e.clientWidth||window.innerWidth,S=e.clientHeight||window.innerHeight;p.aspect=M/S,p.updateProjectionMatrix(),d.setSize(M,S,!1)}function Dh(M){M.preventDefault()}window.addEventListener("keydown",Ah,{capture:!0}),window.addEventListener("keyup",Rh),window.addEventListener("blur",Ch),window.addEventListener("pointerdown",Ph,{capture:!0}),window.addEventListener("pointermove",Lh),window.addEventListener("pointerup",Ih),window.addEventListener("wheel",Nh,{passive:!0}),window.addEventListener("resize",jc),e.addEventListener("webglcontextlost",Dh,{passive:!1});function xo(M){Ye=a(M|0,0,3);const S=Xe[Ye];S.assist,i(`Mode · ${S.name} · grip ${(S.muT*Mt.grip).toFixed(2)}`)}function Uh(M){go=M;for(const S of Object.keys(st))st[S]=!1;i(M?"Paused":"Back on the road")}function fm(M){v.weather=M,zc(),i(M==="rain"?"Rain · grip reduced":M==="overcast"?"Overcast sky":"Clear sky")}function pm(M){v.time=(M%24+24)%24,zc()}const mm=o(0,1,0);let ya=null;function Fh(){if(!ya){const M=new zb;M.setDecoderPath(new URL("draco/gltf/",document.baseURI).href),ya=new nb,ya.setDRACOLoader(M)}return ya}let Ma=null,_o=[],$c=0;const gm=/paint|body_?colou?r|shell|exterior|koerper|carroceria/i,xm=/glass|window|chrome|trim|light|lamp|brake|tire|tyre|rim|interior|leather|seat|mirror|plate|panel|badge|logo|grill|wiper|exhaust|carpet|fabric|rubber|metal/i,_m=/headlight|head_?lamp|projector|front_?light|lights?_front/i,vm=/tail_?light|tail_?lamp|rear_?light|lights?_rear/i,ym=/brake_?light|stop_?lamp/i,Mm=/reverse|backup/i,Ji=(M,S=0,U=0)=>new ct({color:M,emissive:S,emissiveIntensity:U});function Sm(M){const S=new Map;return M.traverse(U=>{const P=U;if(!P.isMesh)return;const Y=Array.isArray(P.material)?P.material:[P.material];for(const k of Y){const z=k;if(!z||!z.name)continue;const ae=z.name.toLowerCase();S.has(ae)||S.set(ae,z)}}),S}const Ms=(M,S)=>{for(const[U,P]of M)if(S.test(U))return P;return null};function Oh(M){const S=["map","normalMap","roughnessMap","metalnessMap","emissiveMap","aoMap","alphaMap","clearcoatMap","clearcoatNormalMap","clearcoatRoughnessMap","sheenColorMap","sheenRoughnessMap","specularMap","specularColorMap","iridescenceMap","transmissionMap","thicknessMap","lightMap"];M.traverse(U=>{const P=U;if(!P.isMesh)return;P.geometry?.dispose();const Y=Array.isArray(P.material)?P.material:[P.material];for(const k of Y){const z=k;if(z){for(const ae of S){const se=z[ae];se&&se.isTexture&&se.dispose()}z.dispose?.()}}})}function Bh(){const M=Ma;if(!M)return;const S=M.scale,U=M.yaw+$c,P=Math.cos(U),Y=Math.sin(U),k=(he,Fe)=>he*P+Fe*Y,z=(he,Fe)=>-he*Y+Fe*P;M.holder.rotation.y=U,M.holder.scale.setScalar(S);const ae=M.centre.x*S,se=M.centre.z*S;M.holder.position.set(-k(ae,se),Dn-M.yRef*S,-z(ae,se));const me=new Wn().setFromAxisAngle(mm,U);M.joints.forEach((he,Fe)=>{const ht=he.x*S,He=he.z*S;he.pivot.position.set(k(ht,He),Dn,z(ht,He)),he.orient.quaternion.copy(me).multiply(he.quat),he.orient.scale.copy(he.scale).multiplyScalar(S);const Lt=Te?.rigs[Fe];Lt&&(Lt.x=he.pivot.position.x,Lt.z=he.pivot.position.z)})}function bm(){const M=Ma,S=Te;if(!M||!S||M.joints.length<4)return;$c+=Math.PI;const U=[2,3,0,1],P=U.map(k=>S.rigs[k]).filter(Boolean),Y=U.map(k=>M.joints[k]).filter(Boolean);P.length===4&&(P.forEach((k,z)=>{k.front=z<2}),S.rigs=P,M.joints=Y,Bh(),i("Model turned around"))}function zh(M,S,U){const P=new Pn;P.add(M);const Y=new Pn;Y.add(P),Y.updateMatrixWorld(!0);const k=new Fi().setFromObject(P);if(k.isEmpty()||!isFinite(k.min.x))throw new Error("Model has no geometry");const z=k.getSize(o()),ae=[];P.traverse(ln=>{if(!(!ln.name||!Vu(ln.name))){for(let Jt=ln.parent;Jt&&Jt!==P;Jt=Jt.parent)if(Jt.name&&Vu(Jt.name))return;ae.push(ln)}});const se=[],me=[];for(const ln of ae){const Jt=new Fi().setFromObject(ln),Cn=Jt.getCenter(o());se.push({id:se.length,name:ln.name,x:Cn.x,y:Cn.y,z:Cn.z,radius:Math.max(.002,(Jt.max.y-Jt.min.y)/2)}),me.push(Jt)}const he=se.length>=4?a1(se,{min:[k.min.x,k.min.y,k.min.z],max:[k.max.x,k.max.y,k.max.z]}):null,Fe=ls[U],ht=Math.max(z.x,z.z);let He=he&&he.wheelbase>.01?Fe.wheelbase/he.wheelbase:Fe.length/Math.max(.001,ht);(!isFinite(He)||He<=0)&&(He=Fe.length/Math.max(.001,ht)),He=a(He,.001,400);const Lt=he?he.yaw:0,bt=new Pn;bt.rotation.y=Lt,bt.scale.setScalar(He),bt.add(P),bt.updateMatrixWorld(!0);const cn=new Fi().setFromObject(P).getSize(o()),en=[],dn=[];for(let ln=0;ln<4;ln++){const Jt=he?he.slot[ln]:null;if(Jt===null||!ae[Jt])continue;const Cn=ae[Jt],es=se[Jt],ke=me[Jt],rn=new Wn,pt=o(),oi=o();Cn.updateWorldMatrix(!0,!1),Cn.matrixWorld.decompose(oi,rn,pt);const _i=ke.getCenter(o()).applyMatrix4(Cn.matrixWorld.clone().invert()).negate(),ai=new Pn;ai.userData.wheelRig=!0;const zn=new Pn;zn.userData.wheelSpin=!0;const kn=new Pn;ai.add(zn),zn.add(kn),kn.add(Cn),Cn.position.copy(_i),Cn.quaternion.identity(),Cn.scale.set(1,1,1),en.push({pivot:ai,orient:kn,x:es.x,y:es.y,z:es.z,quat:rn,scale:pt.clone()}),dn.push({pivot:ai,spin:zn,front:ln<2,x:es.x*He,z:es.z*He,radius:es.radius*He,width:Math.max(.05,Math.min(ke.max.x-ke.min.x,ke.max.z-ke.min.z)*.5*He)})}const Nt=c1({length:cn.z,width:cn.x,height:cn.y,wheelbase:he?he.wheelbase*He:Fe.wheelbase,track:he?he.track*He:Fe.track,wheelR:he?he.wheelR*He:Fe.wheelR}),wn={...Fe,name:S,length:Nt.length,width:Nt.width,height:Nt.height,wheelbase:Nt.wheelbase,track:Nt.track,wheelR:Nt.wheelR};te(wn);const Zt=Sm(M);_o=[];for(const[ln,Jt]of Zt)if(!(!gm.test(ln)||xm.test(ln))&&(_o.push(Jt),Jt.color.setHex(ot),"clearcoat"in Jt)){const Cn=Jt;Cn.clearcoat=Math.max(.55,Cn.clearcoat??0),Cn.clearcoatRoughness=Math.min(.14,Cn.clearcoatRoughness??.1)}const sn=(ln,Jt)=>{const Cn=Ms(Zt,ln);return Cn?(Cn.emissive.setHex(Jt),Cn.emissiveIntensity=.12,Cn):Ji(1447964,Jt,0)},ii={paint:_o[0]??Ji(ot),glass:Ms(Zt,/glass|window/i)??Ji(2240572),trim:Ms(Zt,/trim|plastic|rubber|rubberised/i)??Ji(2763824),chrome:Ms(Zt,/chrome|metal/i)??Ji(12173510),tyre:Ms(Zt,/tire|tyre/i)??Ji(1316378),rim:Ms(Zt,/rim|alloy/i)??Ji(10134184),caliper:Ms(Zt,/caliper|disc|brake/i)??Ji(11023658),head:sn(_m,16774368),tail:sn(vm,16722448),brake:sn(ym,16722448),reverse:sn(Mm,16775408),plate:Ms(Zt,/plate|licen/i)??Ji(15262936),cabin:Ms(Zt,/interior|leather|carpet|dash|seat/i)??Ji(1908516)};if(Te){ue.remove(Te.root),Oh(Te.root);for(const ln of Te.rigs)ue.remove(ln.pivot),Oh(ln.pivot)}ue.add(P);for(const ln of dn)ue.add(ln.pivot);const Rn=Nt.length/2-.12,Mn=Nt.track*.36,si=Dn+Nt.wheelR*.8;Ve.position.set(Mn,si,Rn-.05),Ne.position.set(-Mn,si,Rn-.05),rt.position.set(Mn,si,Rn+32),gt.position.set(-Mn,si,Rn+32),dt.position.set(Mn,si,-Rn),W.position.set(-Mn,si,-Rn),$c=0;const ri=o();he&&en.length?ri.set(en.reduce((ln,Jt)=>ln+Jt.x,0)/en.length,0,en.reduce((ln,Jt)=>ln+Jt.z,0)/en.length):(k.getCenter(ri),ri.y=0);const Yn=he&&en.length?en.reduce((ln,Jt)=>ln+Jt.y,0)/en.length:k.min.y+Nt.wheelR/He;Te={root:P,rigs:dn,steering:null,materials:ii,spec:wn,gy:Fo+Nt.wheelR,headAnchors:[Ve.position.clone(),Ne.position.clone()],tailAnchors:[dt.position.clone(),W.position.clone()]},Ma={holder:P,label:S,base:U,yaw:Lt,scale:He,centre:ri,yRef:Yn,joints:en,measured:Nt},Bh(),be.reset(),s.onReady?.(wn);const Qi=`${Nt.length.toFixed(2)} × ${Nt.width.toFixed(2)} m`;return dn.length===4?`Rigged 4 wheels · ${Nt.wheelbase.toFixed(2)} m wheelbase · ${Qi}`:dn.length?`Rigged ${dn.length} wheels · ${Qi}`:`Loaded rigid · no wheel nodes found · ${Qi}`}async function wm(M,S,U){if(!M)throw new Error("No model URL");i(`Downloading ${S}…`);let P;try{const z=await fetch(M,{mode:"cors",credentials:"omit"});if(!z.ok)throw new Error(`HTTP ${z.status}`);const ae=Number(z.headers.get("content-length")??0);if(z.body&&ae>15e5){const se=z.body.getReader(),me=[];let he=0,Fe=-1;for(;;){const{done:Lt,value:bt}=await se.read();if(Lt)break;if(bt){me.push(bt),he+=bt.length;const Rt=Math.round(he/ae*100);Rt!==Fe&&(Fe=Rt,i(`${S} · ${Rt}%`))}}const ht=new Uint8Array(he);let He=0;for(const Lt of me)ht.set(Lt,He),He+=Lt.length;P=ht.buffer}else P=await z.arrayBuffer()}catch(z){throw new Error(`Download failed: ${z instanceof Error?z.message:String(z)}`)}const Y=await new Promise((z,ae)=>{Fh().parse(P,"",se=>z(se.scene),ae)}),k=zh(Y,S,U);return i(k),k}async function Tm(M){if(!M)return"No file";const S=(M.name.split(".").pop()||"").toLowerCase();if(S!=="glb"&&S!=="gltf")throw new Error(`Unsupported format .${S} (use .glb)`);if(M.size>180*1024*1024)throw new Error("File larger than 180 MB");const U=S==="glb"?await M.arrayBuffer():await M.text(),P=await new Promise((z,ae)=>{Fh().parse(U,"",se=>z(se.scene),ae)}),Y=M.name.replace(/\.[^.]+$/,"").slice(0,28),k=zh(P,Y,Mt.kind);return i(k),k}const Sa=1/240;let Zc=0,kh=performance.now(),Jc=0;function Em(M){if(!X.length)return;const S=be.pos.x,U=be.pos.z;for(const P of X){let Y=!1;Re.lightBlocks(P.x,P.z,P.axis,P.dir,P.speed)&&(Y=!0);{const me=S-P.x,he=U-P.z,Fe=P.axis==="z"?he*P.dir:me*P.dir,ht=P.axis==="z"?me:he;Fe>0&&Fe<16&&Math.abs(ht)<3.4&&(Y=!0)}if(!Y)for(const me of X){if(me===P||me.axis!==P.axis||me.street!==P.street||me.dir!==P.dir)continue;const he=P.axis==="z"?(me.z-P.z)*P.dir:(me.x-P.x)*P.dir,Fe=P.axis==="z"?me.x-P.x:me.z-P.z;if(he>0&&he<9&&Math.abs(Fe)<2.6){Y=!0;break}}P.stopT>0?(P.stopT-=M,P.speed=Math.max(0,P.speed-9*M)):P.speed+=a((Y?0:P.vmax)-P.speed,-7*M,3*M),P.axis==="z"?(P.z+=P.dir*P.speed*M,P.x=P.street+P.lane):(P.x+=P.dir*P.speed*M,P.z=P.street+P.lane);const k=P.axis==="z"?P.z:P.x;if(Math.abs(k)>584&&(P.dir*=-1,P.lane=-P.lane),P.speed>1){const me=P.axis==="z"?P.z:P.x;for(const he of Sn)if(Math.abs(me-he)<.9&&P.lastS!==he){P.lastS=he,Math.random()<.3&&(P.axis=P.axis==="z"?"x":"z",P.street=he,P.dir=Math.random()<.5?1:-1,P.lane=P.axis==="z"?-3.5*P.dir:3.5*P.dir,P.axis==="z"?(P.x=he+P.lane,P.z=he):(P.z=he+P.lane,P.x=he));break}else Math.abs(me-he)>6&&P.lastS===he&&(P.lastS=null)}let ae=(P.axis==="z"?P.dir>0?0:Math.PI:P.dir>0?Math.PI/2:-Math.PI/2)-P.yaw;for(;ae>Math.PI;)ae-=u;for(;ae<-Math.PI;)ae+=u;P.yaw+=ae*Math.min(1,M*4),P.grp.position.set(P.x,.03,P.z),P.grp.rotation.y=P.yaw;const se=P.speed/Fn*M;for(const me of P.spins)me.rotation.x+=se}}const Qc=new Wn,xi=o(),ba=o(),Hh=o(),Am=new Wn;function Rm(M){for(const S of ee){if(S.cool-=M,S.v.y-=9.81*M,Hh.copy(S.v).multiplyScalar(M),S.p.add(Hh),S.cw.lengthSq()>1e-4){const k=S.cw.length()*M;ba.copy(S.cw).multiplyScalar(1/S.cw.length()),Qc.setFromAxisAngle(ba,k),S.q.premultiply(Qc).normalize(),S.cw.multiplyScalar(Math.max(0,1-.8*M))}xi.copy(S.p).sub(be.pos),xi.applyQuaternion(Qc.copy(be.quat).conjugate());const U=ki,P=Ds;if(xi.y>-.6&&xi.y<.9&&Math.abs(xi.x)<U&&Math.abs(xi.z)<P){const k=U-Math.abs(xi.x),z=P-Math.abs(xi.z);let ae=0,se=0;k<z?(ae=Math.sign(xi.x)||1,xi.x=ae*U):(se=Math.sign(xi.z)||1,xi.z=se*P),ba.set(ae,0,se).applyQuaternion(be.quat),xi.applyQuaternion(be.quat).add(be.pos),S.p.copy(xi);const me=be.vel.length();me>1&&S.cool<=0&&(S.v.copy(be.vel).multiplyScalar(.75).addScaledVector(ba,1.5+me*.15),S.v.y+=l(1.5,3.5),S.cw.set(l(-1,1),l(-1,1),l(-1,1)).multiplyScalar(Math.min(me*1.2,9)),S.cool=.35,Bc(a(me*.03,.08,.35)))}const Y=lt(S.p.x,S.p.z);if(S.p.y<Y){S.p.y=Y,S.v.y<0&&(S.v.y*=-.3);const k=Math.max(0,1-4*M);S.v.x*=k,S.v.z*=k,S.cw.multiplyScalar(Math.max(0,1-4*M)),S.v.lengthSq()<.3&&S.q.slerp(Am,Math.min(1,M*2.5))}{const k=Ys(S.p.x,S.p.z);if(k)for(const z of k.blds){const ae=S.p.x-z.x,se=S.p.z-z.z,me=z.hx-Math.abs(ae),he=z.hz-Math.abs(se);me>0&&he>0&&S.p.y<z.top&&(me<he?(S.p.x=z.x+(Math.sign(ae)||1)*z.hx,S.v.x*=-.25):(S.p.z=z.z+(Math.sign(se)||1)*z.hz,S.v.z*=-.25))}}S.mesh.position.copy(S.p),S.mesh.quaternion.copy(S.q)}}const wa=[0,0,0,0];function Cm(M){if(ue.position.copy(be.pos),ue.quaternion.copy(be.quat),Te){for(let he=0;he<Math.min(4,Te.rigs.length);he++){const Fe=Te.rigs[he],ht=be.wc[he],He=ut-(Se-(ht.contact?Math.min(ht.comp,Se):Se));Fe.pivot.position.y=He,Fe.pivot.rotation.y=On[he].steer?be.ack[he]:0,Fe.spin.rotation.x=be.wAngle[he]}Te.steering&&(Te.steering.rotation.z=-be.steerAngle*3.1);const se=Te.materials,me=be.brakeIn>.1||be.hand;se.brake.emissiveIntensity=me?3.2:.55,se.tail.emissiveIntensity=v.night>.4||me?.9:.5,se.head.emissiveIntensity=Ie?2.6:.12,se.reverse.emissiveIntensity=be.mode==="R"?1.7:0,Ve.intensity=Ne.intensity=Ie?110:0,dt.intensity=W.intensity=me?6*(.4+.6*v.night):0}L.position.copy(be.pos).addScaledVector(g,210),L.target.position.copy(be.pos),x.position.copy(p.position),da=0;const S=be.spd;for(let se=0;se<4;se++){const me=be.wc[se],he=Bn.st[se];if(me.contact&&S>3){if((me.s>.95||be.hand&&On[se].driven&&S>3)&&me.surf==="TARMAC"){const Lt=On[se].driven?.15:.12;Me.copy(me.cp).addScaledVector(me.wR,-Lt),Vt.copy(me.cp).addScaledVector(me.wR,Lt),he.on?he.lastL.distanceToSquared(Me)>.07&&(Bn.add(he.lastL,he.lastR,Me,Vt,a(.12+(me.s-.95)*.22,.12,.55)),he.lastL.copy(Me),he.lastR.copy(Vt)):(he.on=!0,he.lastL.copy(Me),he.lastR.copy(Vt))}else he.on=!1;const ht=a((me.s-1)/1.5,0,1);ht>da&&(da=ht);let He=0;for(me.s>1.05&&S>4&&(He=Math.min(22,(me.s-1)*9)),be.hand&&On[se].driven&&S>4&&(He=Math.max(He,10)),me.surf==="GRASS"&&S>6&&(He=Math.max(He,S*.18)),wa[se]+=M*He;wa[se]>=1;)wa[se]-=1,un.spawn(me.cp,be.vel,S*.055);if(v.wet>.5&&S>12){const Lt=Math.min(30,S*.35);Math.random()<M*Lt&&bn.spawn(me.cp,be.vel,.06+S*.004)}}else he.on=!1,wa[se]=0}Gc.copy(be.vel).sub(Mh).divideScalar(Math.max(M,.001));const U=tt.set(1,0,0).applyQuaternion(be.quat),P=Ke.set(0,0,1).applyQuaternion(be.quat),Y=Gc.dot(U)/9.81,k=Gc.dot(P)/9.81;po+=(Y-po)*.25,mo+=(k-mo)*.25;const z=be.vel.dot(U),ae=be.vel.dot(P);Rr=S>4?Math.abs(Math.atan2(z,Math.abs(ae)))*57.3:0;for(let se=0;se<4;se++)be.wc[se].contact&&(Sh=be.wc[se].surf);Rr>12&&S>6&&(Wc+=Rr*M*8*(1+Rr/40))}function Pm(M){if(!Fs.visible)return;const S=be.pos.x,U=be.pos.z,P=be.pos.y;for(let Y=0;Y<Pt;Y++){let k=an[Y*3],z=an[Y*3+1],ae=an[Y*3+2];z-=M*24,k+=M*3.2,z<P-8&&(z+=mn),k>S+Xt&&(k-=Xt*2),k<S-Xt&&(k+=Xt*2),ae>U+Xt&&(ae-=Xt*2),ae<U-Xt&&(ae+=Xt*2),an[Y*3]=k,an[Y*3+1]=z,an[Y*3+2]=ae;const se=Y*6;hn[se]=k,hn[se+1]=z,hn[se+2]=ae,hn[se+3]=k+.06,hn[se+4]=z-.9,hn[se+5]=ae}Hi.attributes.position.needsUpdate=!0}function Lm(){const M=be.wc.map(P=>P.s),S=be.wc.map(P=>P.Fs),U={speedKph:be.spd*3.6,rpm:be.rpm,gear:be.mode==="R"?"R":`D${be.gear}`,modeIndex:Ye,surface:Sh,driftDeg:Rr,driftPoints:Wc,combo:1+Rr/40,gLat:po,gLon:mo,heat:be.heat.slice(),slip:M,load:S,fps:ga,headlights:Ie,camera:Vi,weather:v.weather,timeOfDay:v.time,wet:v.wet,kind:Mt.kind,paint:Th,traffic:X.length,topSpeedKph:xa*3.6,best0to100:_a,distanceKm:Xc/1e3,physicsHz:240};r(U)}function Vh(M){if(bh)return;Jc=requestAnimationFrame(Vh);const S=Math.min(.05,(M-kh)/1e3);if(kh=M,S>0&&(ga+=(1/S-ga)*.02),m.value=M*.001,Mh.copy(be.vel),!go){Re.update(S,v.night,v.wet),Em(S),Zc+=S;let U=0;for(;Zc>=Sa&&U++<12;)be.step(Sa),Rm(Sa),Zc-=Sa;wh+=S,Xc+=be.spd*S,be.spd>xa&&(xa=be.spd);const P=be.spd*3.6;if(P<2?(qc+=S,qc>.6&&(va=0)):(qc=0,va+=S,_a===null&&P>=100&&va<20&&(_a=va)),ga<25&&X.length>6&&M%15e3<20){const Y=Math.ceil(X.length/3);for(let k=0;k<Y;k++){const z=X.pop();z&&f.remove(z.grp)}i("Performance mode · traffic reduced")}}Cm(S),um(S),Pm(S),un.update(S),bn.update(S),!go&&v.night>.05&&Math.random()<.06&&vh(),hm(),dm(),om(),Yc+=S,Yc>.1&&(Yc=0,Th=ot,Lm()),d.render(f,p)}return G(Mt.kind),yh(Mt.kind),be.pos.set(0,qn,-12),be.reset(),zc(),D(),de(),jc(),Jc=requestAnimationFrame(Vh),s.onReady?.(Mt),{destroy(){bh=!0,cancelAnimationFrame(Jc),window.removeEventListener("keydown",Ah,{capture:!0}),window.removeEventListener("keyup",Rh),window.removeEventListener("blur",Ch),window.removeEventListener("pointerdown",Ph,{capture:!0}),window.removeEventListener("pointermove",Lh),window.removeEventListener("pointerup",Ih),window.removeEventListener("wheel",Nh),window.removeEventListener("resize",jc),e.removeEventListener("webglcontextlost",Dh);try{kt?.close()}catch{}C.dispose(),d.dispose()},setVehicle:cm,setMode:xo,setCamera(M){Vi=a(M|0,0,pa.length-1),i(`Camera · ${pa[Vi]}`)},setTimeOfDay:pm,setWeather:fm,setPaint:lm,setHeadlights(M){ge=!1,Ie=M},setPaused:Uh,reset(){be.reset(),N()},importCar:Tm,loadCarModel:wm,flipImportedModel:bm,setVolume(M){Kc=a(M,0,1),nr=Kc<=.01,Si&&kt&&Si.gain.setTargetAtTime(Kc,kt.currentTime,.1)},sessionStats(){return{topSpeedKph:xa*3.6,best0to100:_a,distanceKm:Xc/1e3,driftPoints:Wc,kind:Mt.kind,seconds:wh}}}}const Wu={clear:"Clear",overcast:"Overcast",rain:"Rain"},m1=["Chase","Cockpit","Hood","Bumper","Cinema","Orbit"],g1=["NORMAL","DRIFT","RALLY","ARCADE"],sm=[{label:"Dawn",hour:6.4,icon:ac},{label:"Noon",hour:12.5,icon:ac},{label:"Dusk",hour:18.6,icon:ac},{label:"Night",hour:22.5,icon:Xm}],rm=[{key:"clear",icon:ac},{key:"overcast",icon:t0},{key:"rain",icon:qm}];function is(s,e){window.dispatchEvent(new KeyboardEvent(e?"keydown":"keyup",{code:s,bubbles:!0}))}function E1(){const s=Ht.useRef(null),e=Ht.useRef(null),t=Ht.useRef(null),n=Ht.useRef(null),[i,r]=Ht.useState(null),[o,a]=Ht.useState(!1),[c,l]=Ht.useState(!1),[u,d]=Ht.useState("none"),[h,f]=Ht.useState(!1),[p,v]=Ht.useState(null),[g,m]=Ht.useState(null),[w,R]=Ht.useState("gt"),[x,b]=Ht.useState(null),[T,L]=Ht.useState(null),[_,C]=Ht.useState(null),[D,O]=Ht.useState(Ks[4]),[V,$]=Ht.useState("clear"),[H,j]=Ht.useState(16.2),[ie,ne]=Ht.useState(0),[we,re]=Ht.useState(.5),[le,ye]=Ht.useState(!1),{isAuthenticated:Qe}=Dm(),$e=Um(qh.driverStats.submitRun),At=Fm(qh.driverStats.myStats,Qe?{}:"skip"),Tt=ls[w],Bt=Ht.useCallback(ee=>{m(ee),window.clearTimeout(Bt.t),Bt.t=window.setTimeout(()=>m(null),2400)},[]);Ht.useEffect(()=>{const ee=s.current;if(!ee||!e.current||!t.current)return;const N=document.createElement("canvas");N.className="absolute inset-0 h-full w-full block",ee.appendChild(N);let ft=null;try{ft=p1({canvas:N,cluster:e.current,gmeter:t.current,onTelemetry:r,onToast:Bt,onError:St=>v(St),initialVehicle:"gt",initialWeather:"clear",initialTimeOfDay:16.2,initialPaint:Ks[4]}),n.current=ft,ft.setPaused(!0),f(!0)}catch(St){v(St instanceof Error?St.message:String(St))}return()=>{ft?.destroy(),n.current=null,N.remove()}},[Bt]),Ht.useEffect(()=>{if(h)return;const ee=window.setTimeout(()=>{n.current||v(N=>N??"The renderer took too long to start.")},12e3);return()=>window.clearTimeout(ee)},[h]);const oe=Ht.useCallback(()=>{a(!0),l(!1),n.current?.setPaused(!1)},[]),_e=Ht.useRef(!1),We=Ht.useRef(null);Ht.useEffect(()=>{const ee=N=>{const ft=document.activeElement;if(!(ft&&(ft.tagName==="INPUT"||ft.tagName==="TEXTAREA"))){if(!_e.current){["Enter","Space","KeyW","ArrowUp"].includes(N.code)&&(N.preventDefault(),We.current?.());return}N.key==="Escape"&&d(St=>St==="none"?"settings":"none")}};return window.addEventListener("keydown",ee),()=>window.removeEventListener("keydown",ee)},[]);const lt=Ht.useCallback(()=>{l(ee=>(n.current?.setPaused(!ee),!ee))},[]),qe=Ht.useCallback(ee=>{R(ee),b(null),L(null),n.current?.setVehicle(ee)},[]),xt=Ht.useCallback(async ee=>{const N=n.current;if(!(!N||_)){C(ee.id);try{const ft=await N.loadCarModel(ee.url,ee.name,ee.base);b(ee),L(null),Lr.success(ft,{description:`${ee.author} · ${ee.license}`})}catch(ft){Lr.error("Could not load "+ee.name,{description:ft instanceof Error?ft.message:String(ft)})}finally{C(null)}}},[_]),Yt=Ht.useCallback(()=>{n.current?.flipImportedModel()},[]),ve=Ht.useCallback(ee=>{O(ee),n.current?.setPaint(ee)},[]),Ee=Ht.useCallback(ee=>{$(ee),n.current?.setWeather(ee)},[]),Re=Ht.useCallback(ee=>{j(ee),n.current?.setTimeOfDay(ee)},[]),Ce=Ht.useCallback(ee=>{ne(ee),n.current?.setCamera(ee)},[]),Oe=Ht.useCallback(async ee=>{if(!(!ee||!n.current))try{const N=await n.current.importCar(ee);b(null),L(ee.name),Lr.success(N,{description:ee.name})}catch(N){Lr.error("Import failed",{description:N instanceof Error?N.message:String(N)})}},[]),mt=Ht.useCallback(async()=>{const ee=n.current?.sessionStats();if(ee)try{await $e({topSpeedKph:Number(ee.topSpeedKph.toFixed(1)),best0to100:ee.best0to100===null?void 0:Number(ee.best0to100.toFixed(2)),distanceKm:Number(ee.distanceKm.toFixed(2)),driftPoints:Math.round(ee.driftPoints),car:ls[ee.kind].name,seconds:Math.round(ee.seconds)}),Lr.success("Run saved to your garage",{description:`${Math.round(ee.driftPoints)} drift pts · ${ee.topSpeedKph.toFixed(0)} km/h top`})}catch(N){Lr.error("Could not save run",{description:N instanceof Error?N.message:String(N)})}},[$e]);Ht.useEffect(()=>{_e.current=o},[o]),Ht.useEffect(()=>{We.current=oe},[oe]);const at=i?i.heat.reduce((ee,N)=>ee+N,0)/4:0,yt=Ht.useMemo(()=>at<.25?{label:"COLD",className:"text-muted-foreground"}:at<.65?{label:"WARM",className:"text-emerald-400"}:{label:"HOT",className:"text-signal"},[at]);return F.jsxs("div",{className:"relative h-[100dvh] w-full overflow-hidden bg-carbon text-chalk select-none",children:[F.jsx("div",{ref:s,className:"absolute inset-0"}),F.jsx("div",{className:"pointer-events-none absolute inset-0 z-[2]",style:{background:"radial-gradient(ellipse at center, transparent 52%, rgba(4,5,8,.55) 100%)"}}),F.jsxs("div",{className:`pointer-events-none absolute inset-0 z-[3] transition-opacity duration-500 ${o?"opacity-100":"opacity-0"}`,children:[F.jsxs("div",{className:"absolute left-4 top-4 sm:left-6 sm:top-5",children:[F.jsx("div",{className:"font-mono text-[10px] tracking-[0.34em] text-signal",children:"APEX CITY · DRIVE"}),F.jsx("div",{className:"font-display text-xl leading-tight font-bold tracking-tight sm:text-2xl",children:Tt.name}),F.jsxs("div",{className:"font-mono text-[10px] tracking-[0.14em] text-muted-foreground",children:[Tt.klass," · ",Tt.drivetrain.toUpperCase()," · ",Tt.mass," KG"]})]}),F.jsx("div",{className:"pointer-events-auto absolute left-4 top-24 flex flex-wrap gap-1.5 sm:left-6 sm:top-28",children:g1.map((ee,N)=>F.jsxs("button",{type:"button",onClick:()=>n.current?.setMode(N),className:`cursor-pointer border px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] transition-colors ${i?.modeIndex===N?"border-signal bg-signal text-carbon font-semibold":"border-white/15 bg-black/45 text-muted-foreground hover:border-signal/60 hover:text-chalk"}`,children:[N+1,"·",ee]},ee))}),F.jsxs("div",{className:"absolute bottom-4 right-4 w-[212px] border border-white/12 bg-black/60 p-3 backdrop-blur-sm sm:bottom-6 sm:right-6",children:[F.jsx("div",{className:"mb-2 font-mono text-[9px] tracking-[0.3em] text-muted-foreground",children:"TELEMETRY"}),F.jsx("canvas",{ref:t,className:"mx-auto block",width:118,height:118}),F.jsx(dr,{label:"SPEED",value:i?`${Math.round(i.speedKph)} km/h`:"—"}),F.jsx(dr,{label:"RPM",value:i?Math.round(i.rpm).toString():"—"}),F.jsx(dr,{label:"SURFACE",value:i?.surface??"TARMAC"}),F.jsx(dr,{label:"DRIFT",value:i?`${Math.round(Math.min(i.driftDeg,120))}°`:"0°"}),F.jsx(dr,{label:"DRIFT PTS",value:i?Math.round(i.driftPoints).toLocaleString():"0",hot:(i?.driftDeg??0)>12}),F.jsx(dr,{label:"LOAD",value:i?`${Math.hypot(i.gLat,i.gLon).toFixed(2)} g`:"0.00 g"}),F.jsx(dr,{label:"TYRES",value:yt.label,valueClass:yt.className}),F.jsx("div",{className:"mt-2 flex items-end justify-between gap-2",children:["FL","FR","RL","RR"].map((ee,N)=>{const ft=i?i.slip[N]??0:0,St=Math.min(ft,1.5)/1.5;return F.jsxs("div",{className:"flex flex-1 flex-col items-center gap-1",children:[F.jsx("div",{className:"relative h-11 w-full overflow-hidden bg-white/8",children:F.jsx("div",{className:`absolute bottom-0 left-0 right-0 transition-[height] duration-100 ${ft>.9?"bg-signal":"bg-emerald-400/80"}`,style:{height:`${St*100}%`}})}),F.jsx("span",{className:"font-mono text-[8px] tracking-[0.1em] text-muted-foreground",children:ee})]},ee)})}),F.jsxs("div",{className:"mt-2 flex justify-between font-mono text-[9px] text-muted-foreground",children:[F.jsx("span",{children:i?.fps?`${Math.round(i.fps)} FPS`:"—"}),F.jsxs("span",{children:[i?.physicsHz??240," HZ PHYSICS"]}),F.jsxs("span",{children:[i?.traffic??0," CARS"]})]})]}),F.jsxs("div",{className:"absolute bottom-4 left-4 border border-white/12 bg-black/60 p-2 backdrop-blur-sm sm:bottom-6 sm:left-6",children:[F.jsx("canvas",{ref:e,className:"block",width:232,height:132}),F.jsxs("div",{className:"px-1 pb-0.5 font-mono text-[8px] tracking-[0.2em] text-muted-foreground",children:[i?.gear??"D1"," · ",Wu[V].toUpperCase()," · ",i?Math.floor(i.timeOfDay).toString().padStart(2,"0"):"16",":",i?Math.floor(i.timeOfDay%1*60).toString().padStart(2,"0"):"12",le?" · LIGHTS":""]})]}),F.jsxs("div",{className:"absolute right-4 top-4 hidden border border-white/12 bg-black/60 p-3 font-mono text-[10px] leading-relaxed text-muted-foreground backdrop-blur-sm lg:block",children:[F.jsx("div",{className:"mb-1 tracking-[0.2em] text-chalk",children:"CONTROLS"}),F.jsxs("div",{children:[F.jsx("kbd",{className:"text-signal",children:"W"}),"/",F.jsx("kbd",{className:"text-signal",children:"S"})," throttle · brake"]}),F.jsxs("div",{children:[F.jsx("kbd",{className:"text-signal",children:"A"}),"/",F.jsx("kbd",{className:"text-signal",children:"D"})," steer · ",F.jsx("kbd",{className:"text-signal",children:"SPACE"})," handbrake"]}),F.jsxs("div",{children:[F.jsx("kbd",{className:"text-signal",children:"1-4"})," drive modes · ",F.jsx("kbd",{className:"text-signal",children:"C"})," camera"]}),F.jsxs("div",{children:[F.jsx("kbd",{className:"text-signal",children:"N"})," lights · ",F.jsx("kbd",{className:"text-signal",children:"R"})," reset · ",F.jsx("kbd",{className:"text-signal",children:"M"})," mute"]}),F.jsxs("div",{children:[F.jsx("kbd",{className:"text-signal",children:"P"})," pause · ",F.jsx("kbd",{className:"text-signal",children:"ESC"})," settings"]})]})]}),F.jsxs("div",{className:`absolute right-4 top-4 z-[5] flex gap-2 transition-opacity duration-500 lg:top-auto lg:bottom-[268px] ${o?"opacity-100":"opacity-0"}`,children:[F.jsx(Wl,{label:"Garage",onClick:()=>d(u==="car"?"none":"car"),children:F.jsx(Zm,{className:"size-4"})}),F.jsx(Wl,{label:"Settings",onClick:()=>d(u==="settings"?"none":"settings"),children:F.jsx(r0,{className:"size-4"})}),F.jsx(Wl,{label:c?"Resume":"Pause",onClick:lt,children:c?F.jsx(Yf,{className:"size-4"}):F.jsx(Xf,{className:"size-4"})})]}),o&&F.jsxs("div",{className:"absolute inset-x-0 bottom-3 z-[5] flex items-end justify-between px-3 lg:hidden",children:[F.jsxs("div",{className:"flex gap-2",children:[F.jsx(Uo,{code:"KeyA",onPointerDown:()=>is("KeyA",!0),onPointerUp:()=>is("KeyA",!1),children:"◀"}),F.jsx(Uo,{code:"KeyD",onPointerDown:()=>is("KeyD",!0),onPointerUp:()=>is("KeyD",!1),children:"▶"})]}),F.jsxs("div",{className:"flex gap-2",children:[F.jsx(Uo,{code:"Space",onPointerDown:()=>is("Space",!0),onPointerUp:()=>is("Space",!1),children:"HB"}),F.jsx(Uo,{code:"KeyS",onPointerDown:()=>is("KeyS",!0),onPointerUp:()=>is("KeyS",!1),children:"BRK"}),F.jsx(Uo,{code:"KeyW",onPointerDown:()=>is("KeyW",!0),onPointerUp:()=>is("KeyW",!1),children:"GAS"})]})]}),F.jsx("div",{className:`pointer-events-none absolute left-1/2 z-[6] -translate-x-1/2 border border-white/12 bg-black/70 px-4 py-1.5 font-mono text-[11px] tracking-[0.18em] backdrop-blur-sm transition-all duration-300 ${g?"bottom-28 opacity-100":"bottom-24 opacity-0"}`,children:g}),!h&&!p&&F.jsx("div",{className:"absolute inset-0 z-[8] flex items-center justify-center bg-carbon",children:F.jsxs("div",{className:"text-center",children:[F.jsx("div",{className:"mx-auto mb-3 size-8 animate-spin rounded-full border-2 border-signal border-t-transparent"}),F.jsx("div",{className:"font-mono text-[11px] tracking-[0.24em] text-muted-foreground",children:"BUILDING APEX CITY…"})]})}),p&&F.jsx("div",{className:"absolute inset-0 z-[8] flex items-center justify-center bg-carbon/95 p-6",children:F.jsxs("div",{className:"max-w-md border border-destructive/50 bg-black/60 p-6 text-center",children:[F.jsx("div",{className:"font-display text-xl font-bold tracking-tight",children:"WebGL could not start"}),F.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:p}),F.jsx(ss,{asChild:!0,className:"mt-4 cursor-pointer",variant:"outline",children:F.jsx(pr,{to:"/",children:"Back to home"})})]})}),h&&!o&&F.jsx(x1,{car:w,spec:Tt,onChooseCar:qe,onStart:oe,paint:D,onPaint:ve,weather:V,onWeather:Ee,hour:H,onHour:Re,isAuthenticated:Qe}),o&&c&&F.jsx("div",{className:"absolute inset-0 z-[7] flex items-center justify-center bg-black/70 backdrop-blur-sm",children:F.jsxs("div",{className:"w-[min(92vw,420px)] border border-white/12 bg-carbon p-6 text-center",children:[F.jsx("div",{className:"font-mono text-[10px] tracking-[0.3em] text-signal",children:"PAUSED"}),F.jsx("div",{className:"mt-1 font-display text-2xl font-bold tracking-tight",children:"Engine idling"}),F.jsxs("div",{className:"mt-4 grid gap-2",children:[F.jsx(ss,{className:"cursor-pointer",onClick:lt,children:"Resume driving"}),F.jsx(ss,{variant:"outline",className:"cursor-pointer",onClick:()=>d("car"),children:"Open garage"}),Qe?F.jsx(ss,{variant:"outline",className:"cursor-pointer",onClick:mt,children:"Save run to garage"}):F.jsx(ss,{variant:"outline",asChild:!0,className:"cursor-pointer",children:F.jsx(pr,{to:"/auth?returnTo=%2Fdrive",children:"Sign in to save runs"})}),F.jsx(ss,{variant:"ghost",asChild:!0,className:"cursor-pointer",children:F.jsx(pr,{to:"/",children:"Leave the city"})})]})]})}),o&&u==="settings"&&F.jsxs(Wf,{title:"Settings",onClose:()=>d("none"),children:[F.jsxs(fr,{label:"Time of day",children:[F.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:sm.map(ee=>F.jsxs("button",{type:"button",onClick:()=>Re(ee.hour),className:`cursor-pointer border px-2 py-2 font-mono text-[10px] tracking-[0.1em] transition-colors ${Math.abs(H-ee.hour)<.2?"border-signal bg-signal/15 text-signal":"border-white/12 text-muted-foreground hover:border-signal/50 hover:text-chalk"}`,children:[F.jsx(ee.icon,{className:"mx-auto mb-1 size-3.5"}),ee.label]},ee.label))}),F.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[F.jsx("span",{className:"font-mono text-[10px] text-muted-foreground",children:"00"}),F.jsx(Kh,{value:[H],min:0,max:24,step:.25,onValueChange:ee=>Re(ee[0]??12),className:"cursor-pointer"}),F.jsx("span",{className:"w-10 text-right font-mono text-[10px] text-chalk",children:H.toFixed(1).padStart(4,"0")})]})]}),F.jsxs(fr,{label:"Weather",children:[F.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:rm.map(ee=>{const N=ee.icon;return F.jsxs("button",{type:"button",onClick:()=>Ee(ee.key),className:`cursor-pointer border px-2 py-2 font-mono text-[10px] tracking-[0.1em] transition-colors ${V===ee.key?"border-signal bg-signal/15 text-signal":"border-white/12 text-muted-foreground hover:border-signal/50 hover:text-chalk"}`,children:[F.jsx(N,{className:"mx-auto mb-1 size-3.5"}),Wu[ee.key].toUpperCase()]},ee.key)})}),F.jsx("p",{className:"mt-2 text-[11px] leading-relaxed text-muted-foreground",children:"Rain and overcast skies cut tyre grip and switch the headlights on automatically."})]}),F.jsx(fr,{label:"Camera",children:F.jsx("div",{className:"flex flex-wrap gap-1.5",children:m1.map((ee,N)=>F.jsx("button",{type:"button",onClick:()=>Ce(N),className:`cursor-pointer border px-2.5 py-1.5 font-mono text-[10px] tracking-[0.12em] transition-colors ${ie===N?"border-signal bg-signal text-carbon font-semibold":"border-white/12 text-muted-foreground hover:border-signal/50 hover:text-chalk"}`,children:ee.toUpperCase()},ee))})}),F.jsxs(fr,{label:"Assists",children:[F.jsxs("div",{className:"flex items-center justify-between",children:[F.jsxs("div",{children:[F.jsx(jh,{className:"text-xs",children:"Headlights"}),F.jsx("p",{className:"text-[11px] text-muted-foreground",children:"Override the automatic dusk switch."})]}),F.jsx(a0,{checked:le,className:"cursor-pointer",onCheckedChange:ee=>{ye(ee),n.current?.setHeadlights(ee)}})]}),F.jsxs("div",{className:"mt-4 flex items-center gap-3",children:[F.jsx(jh,{className:"text-xs",children:"Volume"}),F.jsx(Kh,{value:[we*100],min:0,max:100,step:5,className:"cursor-pointer",onValueChange:ee=>{const N=(ee[0]??50)/100;re(N),n.current?.setVolume(N)}})]})]}),F.jsxs("div",{className:"grid gap-2",children:[F.jsx(ss,{variant:"outline",className:"cursor-pointer",onClick:()=>n.current?.reset(),children:"Reset to the start line"}),F.jsxs("label",{className:"cursor-pointer",children:[F.jsx("input",{type:"file",accept:".glb,.gltf",className:"hidden",onChange:ee=>{Oe(ee.target.files?.[0]),ee.target.value=""}}),F.jsxs("span",{className:"flex items-center justify-center gap-2 border border-white/12 px-3 py-2 font-mono text-[11px] tracking-[0.14em] text-muted-foreground transition-colors hover:border-signal/60 hover:text-chalk",children:[F.jsx(Ym,{className:"size-3.5"})," IMPORT .GLB CAR"]})]})]})]}),u==="car"&&F.jsxs(Wf,{title:"Garage",onClose:()=>d("none"),children:[F.jsx("div",{className:"space-y-2",children:qf.map(ee=>{const N=ls[ee],ft=w===ee;return F.jsxs("button",{type:"button",onClick:()=>qe(ee),className:`w-full cursor-pointer border p-3 text-left transition-colors ${ft?"border-signal bg-signal/10":"border-white/12 hover:border-signal/50"}`,children:[F.jsxs("div",{className:"flex items-baseline justify-between gap-2",children:[F.jsx("span",{className:"font-display text-sm font-bold tracking-tight",children:N.name}),F.jsx("span",{className:"font-mono text-[10px] text-muted-foreground",children:N.klass})]}),F.jsxs("div",{className:"mt-1 flex flex-wrap gap-x-3 gap-y-0.5 font-mono text-[10px] text-muted-foreground",children:[F.jsxs("span",{children:[N.powerKw," kW"]}),F.jsxs("span",{children:[N.torqueNm," Nm"]}),F.jsxs("span",{children:[N.mass," kg"]}),F.jsx("span",{className:"uppercase",children:N.drivetrain}),F.jsxs("span",{children:["0-100 ",N.zeroTo100,"s"]})]})]},ee)})}),F.jsxs(fr,{label:"Model library",children:[F.jsx("p",{className:"mb-2 font-mono text-[10px] leading-relaxed text-muted-foreground",children:"Real car models fetched straight from public CDNs — no account, no API key. The wheels, size and driving spec are read off the model itself."}),F.jsx("div",{className:"space-y-2",children:Km.map(ee=>{const N=x?.id===ee.id,ft=_===ee.id;return F.jsxs("button",{type:"button",disabled:ft,onClick:()=>{xt(ee)},className:`w-full border p-3 text-left transition-colors ${N?"border-signal bg-signal/10":"border-white/12 hover:border-signal/50"} ${ft?"cursor-wait opacity-70":"cursor-pointer"}`,children:[F.jsxs("div",{className:"flex items-baseline justify-between gap-2",children:[F.jsx("span",{className:"font-display text-sm font-bold tracking-tight",children:ee.name}),F.jsxs("span",{className:"flex items-center gap-1 font-mono text-[10px] text-muted-foreground",children:[ft?"DOWNLOADING…":jm(ee.bytes),ft?null:F.jsx($m,{className:"size-3"})]})]}),F.jsxs("div",{className:"mt-1 font-mono text-[10px] leading-relaxed text-muted-foreground",children:[ee.detail,F.jsx("br",{}),ee.license," · ",ee.author]})]},ee.id)})}),x||T?F.jsxs("div",{className:"mt-2 flex items-center justify-between gap-2 border border-white/12 p-2",children:[F.jsx("span",{className:"truncate font-mono text-[10px] text-muted-foreground",children:x?.name??T}),F.jsxs("button",{type:"button",onClick:Yt,className:"flex shrink-0 cursor-pointer items-center gap-1 font-mono text-[10px] tracking-[0.14em] text-muted-foreground transition-colors hover:text-chalk",children:[F.jsx(i0,{className:"size-3"})," TURN AROUND"]})]}):null]}),F.jsx(fr,{label:"Paint",children:F.jsx("div",{className:"flex flex-wrap gap-2",children:Ks.map(ee=>F.jsx("button",{type:"button","aria-label":"paint",onClick:()=>ve(ee),className:`size-7 cursor-pointer border transition-transform hover:scale-110 ${D===ee?"border-signal":"border-white/20"}`,style:{backgroundColor:`#${ee.toString(16).padStart(6,"0")}`}},ee))})}),F.jsxs(fr,{label:"This run",children:[F.jsxs("div",{className:"grid grid-cols-2 gap-2 font-mono text-[11px]",children:[F.jsx(oc,{label:"TOP SPEED",value:i?`${i.topSpeedKph.toFixed(0)} km/h`:"—"}),F.jsx(oc,{label:"0-100 KM/H",value:i?.best0to100?`${i.best0to100.toFixed(2)} s`:"—"}),F.jsx(oc,{label:"DISTANCE",value:i?`${i.distanceKm.toFixed(2)} km`:"—"}),F.jsx(oc,{label:"DRIFT PTS",value:i?Math.round(i.driftPoints).toLocaleString():"0"})]}),Qe?F.jsx(ss,{className:"mt-3 w-full cursor-pointer",onClick:mt,children:"Save run to garage"}):F.jsx(ss,{variant:"outline",asChild:!0,className:"mt-3 w-full cursor-pointer",children:F.jsx(pr,{to:"/auth?returnTo=%2Fdrive",children:"Sign in to save runs"})}),At?F.jsxs("p",{className:"mt-3 font-mono text-[10px] leading-relaxed text-muted-foreground",children:["GARAGE RECORD · ",At.topSpeedKph.toFixed(0)," km/h · ",Math.round(At.bestDriftScore).toLocaleString()," drift pts",At.best0to100?` · 0-100 ${At.best0to100.toFixed(2)} s`:""]}):null]})]}),F.jsxs(pr,{to:"/",className:`absolute left-4 top-4 z-[6] hidden items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground transition-opacity hover:text-chalk ${o?"":"pointer-events-none opacity-0"}`,children:[F.jsx(Qm,{className:"size-3"})," EXIT"]})]})}function dr({label:s,value:e,hot:t,valueClass:n}){return F.jsxs("div",{className:"mt-1 flex items-baseline justify-between gap-2",children:[F.jsx("span",{className:"font-mono text-[10px] tracking-[0.1em] text-muted-foreground",children:s}),F.jsx("span",{className:`font-mono text-[11px] font-medium ${t?"text-signal":n??"text-chalk"}`,children:e})]})}function oc({label:s,value:e}){return F.jsxs("div",{className:"border border-white/10 bg-white/4 p-2",children:[F.jsx("div",{className:"text-[9px] tracking-[0.16em] text-muted-foreground",children:s}),F.jsx("div",{className:"mt-0.5 text-xs text-chalk",children:e})]})}function fr({label:s,children:e}){return F.jsxs("div",{className:"border-t border-white/10 pt-4",children:[F.jsx("div",{className:"mb-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground",children:s.toUpperCase()}),e]})}function Wl({label:s,onClick:e,children:t}){return F.jsx("button",{type:"button",title:s,onClick:e,className:"pointer-events-auto flex size-9 cursor-pointer items-center justify-center border border-white/12 bg-black/60 text-muted-foreground backdrop-blur-sm transition-colors hover:border-signal/60 hover:text-chalk",children:t})}function Uo({code:s,onPointerDown:e,onPointerUp:t,children:n}){return F.jsx("button",{type:"button","data-code":s,onPointerDown:i=>{i.preventDefault(),e()},onPointerUp:t,onPointerLeave:t,onTouchStart:i=>{i.preventDefault(),e()},onTouchEnd:t,className:"size-14 cursor-pointer touch-none border border-white/15 bg-black/55 font-mono text-[11px] tracking-[0.1em] text-chalk/80 backdrop-blur-sm active:border-signal active:bg-signal/25",children:n})}function Wf({title:s,onClose:e,children:t}){return F.jsxs("div",{className:"absolute right-0 top-0 z-[8] flex h-full w-[min(92vw,360px)] flex-col border-l border-white/12 bg-carbon/95 backdrop-blur-md",children:[F.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 px-4 py-3",children:[F.jsx("span",{className:"font-mono text-[11px] tracking-[0.28em] text-chalk",children:s.toUpperCase()}),F.jsx("button",{type:"button",onClick:e,className:"cursor-pointer text-muted-foreground hover:text-chalk",children:F.jsx(Xf,{className:"size-4"})})]}),F.jsx("div",{className:"flex-1 space-y-5 overflow-y-auto px-4 py-4",children:t})]})}function x1({car:s,spec:e,onChooseCar:t,onStart:n,paint:i,onPaint:r,weather:o,onWeather:a,hour:c,onHour:l,isAuthenticated:u}){return F.jsx("div",{className:"absolute inset-0 z-[8] flex items-center justify-center bg-gradient-to-b from-carbon/95 via-carbon/85 to-carbon/95 p-4 backdrop-blur-[3px]",children:F.jsxs("div",{className:"max-h-full w-[min(94vw,760px)] overflow-y-auto border border-white/12 bg-black/55 p-5 sm:p-7",children:[F.jsx("div",{className:"font-mono text-[10px] tracking-[0.34em] text-signal",children:"OPEN CITY · LIVE TRAFFIC · 240 HZ VEHICLE DYNAMICS"}),F.jsx("h1",{className:"mt-1 font-display text-4xl leading-none font-bold tracking-tight sm:text-5xl",children:"APEX CITY"}),F.jsxs("p",{className:"mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground",children:["Eight driveable vehicles on one 240 Hz physics core — Pacejka tyre slip, live suspension load, tyre thermics, weather grip and a city that wakes up at dusk. Pick your car, set the sky, then hold"," ",F.jsx("span",{className:"text-chalk",children:"W"}),"."]}),F.jsxs("div",{className:"mt-5 grid gap-3 sm:grid-cols-[1.4fr_1fr]",children:[F.jsxs("div",{children:[F.jsx("div",{className:"mb-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground",children:"CHOOSE YOUR CAR"}),F.jsx("div",{className:"grid max-h-[240px] gap-1.5 overflow-y-auto pr-1",children:qf.map(d=>{const h=ls[d],f=s===d;return F.jsxs("button",{type:"button",onClick:()=>t(d),className:`flex cursor-pointer items-center justify-between gap-3 border px-3 py-2 text-left transition-colors ${f?"border-signal bg-signal/10":"border-white/12 hover:border-signal/50"}`,children:[F.jsxs("span",{className:"min-w-0",children:[F.jsx("span",{className:"block font-display text-sm font-bold tracking-tight",children:h.name}),F.jsx("span",{className:"block truncate font-mono text-[10px] text-muted-foreground",children:h.klass})]}),F.jsxs("span",{className:"shrink-0 font-mono text-[10px] text-muted-foreground",children:[h.powerKw," kW · ",h.mass," kg"]})]},d)})})]}),F.jsxs("div",{className:"space-y-4",children:[F.jsxs("div",{children:[F.jsx("div",{className:"mb-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground",children:"PAINT"}),F.jsx("div",{className:"flex flex-wrap gap-1.5",children:Ks.slice(0,9).map(d=>F.jsx("button",{type:"button","aria-label":"paint",onClick:()=>r(d),className:`size-6 cursor-pointer border transition-transform hover:scale-110 ${i===d?"border-signal":"border-white/20"}`,style:{backgroundColor:`#${d.toString(16).padStart(6,"0")}`}},d))})]}),F.jsxs("div",{children:[F.jsx("div",{className:"mb-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground",children:"SKY"}),F.jsx("div",{className:"grid grid-cols-4 gap-1",children:sm.map(d=>F.jsx("button",{type:"button",onClick:()=>l(d.hour),className:`cursor-pointer border py-2 font-mono text-[9px] tracking-[0.08em] ${Math.abs(c-d.hour)<.2?"border-signal text-signal":"border-white/12 text-muted-foreground"}`,children:d.label.toUpperCase()},d.label))}),F.jsx("div",{className:"mt-1.5 grid grid-cols-3 gap-1",children:rm.map(d=>F.jsx("button",{type:"button",onClick:()=>a(d.key),className:`cursor-pointer border py-2 font-mono text-[9px] tracking-[0.08em] ${o===d.key?"border-signal text-signal":"border-white/12 text-muted-foreground"}`,children:Wu[d.key].toUpperCase()},d.key))})]}),F.jsxs("div",{className:"border border-white/10 bg-white/4 p-2 font-mono text-[10px] leading-relaxed text-muted-foreground",children:[e.length.toFixed(2)," m · ",e.mass," kg · ",e.torqueNm," Nm · ",e.drivetrain.toUpperCase(),F.jsx("br",{}),"grip ",e.grip.toFixed(2)," · drag ",e.drag.toFixed(2)," · ",e.zeroTo100,"s 0-100"]})]})]}),F.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-3",children:[F.jsxs(ss,{className:"cursor-pointer gap-2 font-mono text-[11px] tracking-[0.2em]",size:"lg",onClick:n,children:[F.jsx(Yf,{className:"size-4"})," START ENGINE"]}),F.jsx("span",{className:"font-mono text-[10px] tracking-[0.16em] text-muted-foreground",children:"W · A · S · D to drive — SPACE handbrake"}),F.jsxs("span",{className:"ml-auto flex items-center gap-2",children:[F.jsx($h,{variant:"outline",className:"font-mono text-[9px] tracking-[0.16em] text-muted-foreground",children:"240 HZ"}),F.jsx($h,{variant:"outline",className:"font-mono text-[9px] tracking-[0.16em] text-muted-foreground",children:"PACEJKA"}),u?F.jsx(pr,{to:"/dashboard",className:"font-mono text-[10px] tracking-[0.16em] text-signal hover:underline",children:"MY GARAGE"}):F.jsx(pr,{to:"/auth?returnTo=%2Fdashboard",className:"font-mono text-[10px] tracking-[0.16em] text-signal hover:underline",children:"SIGN IN"})]})]})]})})}export{E1 as default};
