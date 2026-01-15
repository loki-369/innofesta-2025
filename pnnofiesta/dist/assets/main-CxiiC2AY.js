(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const uh="182",l_=0,Qh=1,c_=2,il=1,u_=2,ya=3,br=0,Fn=1,Ci=2,tr=0,Kr=1,Vc=2,tf=3,ef=4,h_=5,Wr=100,f_=101,d_=102,p_=103,m_=104,__=200,g_=201,v_=202,x_=203,Gc=204,Hc=205,S_=206,M_=207,y_=208,E_=209,T_=210,b_=211,A_=212,w_=213,C_=214,Wc=0,Xc=1,Yc=2,$s=3,qc=4,$c=5,Zc=6,Jc=7,Wd=0,R_=1,P_=2,Ni=0,Xd=1,Yd=2,qd=3,$d=4,Zd=5,Jd=6,Kd=7,jd=300,ss=301,Zs=302,Kc=303,jc=304,Il=306,Qc=1e3,ji=1001,tu=1002,on=1003,D_=1004,_o=1005,gn=1006,Hl=1007,Yr=1008,jn=1009,Qd=1010,tp=1011,$a=1012,hh=1013,Bi=1014,Di=1015,rr=1016,fh=1017,dh=1018,Za=1020,ep=35902,np=35899,ip=1021,rp=1022,yi=1023,sr=1026,qr=1027,sp=1028,ph=1029,Js=1030,mh=1031,_h=1033,rl=33776,sl=33777,al=33778,ol=33779,eu=35840,nu=35841,iu=35842,ru=35843,su=36196,au=37492,ou=37496,lu=37488,cu=37489,uu=37490,hu=37491,fu=37808,du=37809,pu=37810,mu=37811,_u=37812,gu=37813,vu=37814,xu=37815,Su=37816,Mu=37817,yu=37818,Eu=37819,Tu=37820,bu=37821,Au=36492,wu=36494,Cu=36495,Ru=36283,Pu=36284,Du=36285,Lu=36286,L_=3200,ap=0,I_=1,mr="",ci="srgb",Ks="srgb-linear",vl="linear",xe="srgb",ps=7680,nf=519,U_=512,N_=513,F_=514,gh=515,O_=516,B_=517,vh=518,z_=519,Iu=35044,rf="300 es",Li=2e3,xl=2001;function op(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ja(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function k_(){const r=Ja("canvas");return r.style.display="block",r}const sf={};function Sl(...r){const t="THREE."+r.shift();console.log(t,...r)}function $t(...r){const t="THREE."+r.shift();console.warn(t,...r)}function ue(...r){const t="THREE."+r.shift();console.error(t,...r)}function Ka(...r){const t=r.join(" ");t in sf||(sf[t]=!0,$t(...r))}function V_(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}class oa{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wl=Math.PI/180,Uu=180/Math.PI;function er(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[t&255]+hn[t>>8&255]+"-"+hn[t>>16&15|64]+hn[t>>24&255]+"-"+hn[e&63|128]+hn[e>>8&255]+"-"+hn[e>>16&255]+hn[e>>24&255]+hn[n&255]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function se(r,t,e){return Math.max(t,Math.min(e,r))}function G_(r,t){return(r%t+t)%t}function Xl(r,t,e){return(1-e)*r+e*t}function Ri(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ye(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ho{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(o>=1){t[e+0]=d,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=l*d+c*f+u*_+h*g;m<0&&(d=-d,f=-f,_=-_,g=-g,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),M=Math.sin(y);p=Math.sin(p*y)/M,o=Math.sin(o*y)/M,l=l*p+d*o,c=c*p+f*o,u=u*p+_*o,h=h*p+g*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+_*o,h=h*p+g*o;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return t[e]=o*_+u*h+l*f-c*d,t[e+1]=l*_+u*d+c*h-o*f,t[e+2]=c*_+u*f+o*d-l*h,t[e+3]=u*_-o*h-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(se(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(af.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(af.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yl.copy(this).projectOnVector(t),this.sub(Yl)}reflect(t){return this.sub(Yl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yl=new B,af=new ho;class Kt{constructor(t,e,n,i,s,a,o,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],y=i[1],M=i[4],S=i[7],b=i[2],w=i[5],A=i[8];return s[0]=a*g+o*y+l*b,s[3]=a*m+o*M+l*w,s[6]=a*p+o*S+l*A,s[1]=c*g+u*y+h*b,s[4]=c*m+u*M+h*w,s[7]=c*p+u*S+h*A,s[2]=d*g+f*y+_*b,s[5]=d*m+f*M+_*w,s[8]=d*p+f*S+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,_=e*h+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ql.makeScale(t,e)),this}rotate(t){return this.premultiply(ql.makeRotation(-t)),this}translate(t,e){return this.premultiply(ql.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ql=new Kt,of=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lf=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function H_(){const r={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===xe&&(i.r=nr(i.r),i.g=nr(i.g),i.b=nr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(i.r=Vs(i.r),i.g=Vs(i.g),i.b=Vs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===mr?vl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ka("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ka("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ks]:{primaries:t,whitePoint:n,transfer:vl,toXYZ:of,fromXYZ:lf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:of,fromXYZ:lf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}}),r}const he=H_();function nr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ms;class W_{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ms===void 0&&(ms=Ja("canvas")),ms.width=t.width,ms.height=t.height;const i=ms.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ms}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ja("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=nr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(nr(e[n]/255)*255):e[n]=nr(e[n]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let X_=0;class xh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=er(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push($l(i[a].image)):s.push($l(i[a]))}else s=$l(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function $l(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?W_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}let Y_=0;const Zl=new B;class vn extends oa{constructor(t=vn.DEFAULT_IMAGE,e=vn.DEFAULT_MAPPING,n=ji,i=ji,s=gn,a=Yr,o=yi,l=jn,c=vn.DEFAULT_ANISOTROPY,u=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=er(),this.name="",this.source=new xh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qc:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case tu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qc:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case tu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=jd;vn.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,e=0,n=0,i=1){Be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,S=(f+1)/2,b=(p+1)/2,w=(u+d)/4,A=(h+g)/4,D=(_+m)/4;return M>S&&M>b?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=A/n):S>b?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=D/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=A/s,i=D/s),this.set(n,i,s,e),this}let y=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(h-g)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=se(this.x,t.x,e.x),this.y=se(this.y,t.y,e.y),this.z=se(this.z,t.z,e.z),this.w=se(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=se(this.x,t,e),this.y=se(this.y,t,e),this.z=se(this.z,t,e),this.w=se(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(se(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class q_ extends oa{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);const i={width:t,height:e,depth:n.depth},s=new vn(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new xh(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends q_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class lp extends vn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $_ extends vn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fo{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vi):vi.fromBufferAttribute(s,a),vi.applyMatrix4(t.matrixWorld),this.expandByPoint(vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),go.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),go.copy(n.boundingBox)),go.applyMatrix4(t.matrixWorld),this.union(go)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vi),vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ua),vo.subVectors(this.max,ua),_s.subVectors(t.a,ua),gs.subVectors(t.b,ua),vs.subVectors(t.c,ua),lr.subVectors(gs,_s),cr.subVectors(vs,gs),Lr.subVectors(_s,vs);let e=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Lr.z,Lr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Lr.z,0,-Lr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Lr.y,Lr.x,0];return!Jl(e,_s,gs,vs,vo)||(e=[1,0,0,0,1,0,0,0,1],!Jl(e,_s,gs,vs,vo))?!1:(xo.crossVectors(lr,cr),e=[xo.x,xo.y,xo.z],Jl(e,_s,gs,vs,vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Hi=[new B,new B,new B,new B,new B,new B,new B,new B],vi=new B,go=new fo,_s=new B,gs=new B,vs=new B,lr=new B,cr=new B,Lr=new B,ua=new B,vo=new B,xo=new B,Ir=new B;function Jl(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Ir.fromArray(r,s);const o=i.x*Math.abs(Ir.x)+i.y*Math.abs(Ir.y)+i.z*Math.abs(Ir.z),l=t.dot(Ir),c=e.dot(Ir),u=n.dot(Ir);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Z_=new fo,ha=new B,Kl=new B;class Ul{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Z_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ha.subVectors(t,this.center);const e=ha.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ha,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ha.copy(t.center).add(Kl)),this.expandByPoint(ha.copy(t.center).sub(Kl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Wi=new B,jl=new B,So=new B,ur=new B,Ql=new B,Mo=new B,tc=new B;class cp{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wi.copy(this.origin).addScaledVector(this.direction,e),Wi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){jl.copy(t).add(e).multiplyScalar(.5),So.copy(e).sub(t).normalize(),ur.copy(this.origin).sub(jl);const s=t.distanceTo(e)*.5,a=-this.direction.dot(So),o=ur.dot(this.direction),l=-ur.dot(So),c=ur.lengthSq(),u=Math.abs(1-a*a);let h,d,f,_;if(u>0)if(h=a*l-o,d=a*o-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(jl).addScaledVector(So,d),f}intersectSphere(t,e){Wi.subVectors(t.center,this.origin);const n=Wi.dot(this.direction),i=Wi.dot(Wi)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Wi)!==null}intersectTriangle(t,e,n,i,s){Ql.subVectors(e,t),Mo.subVectors(n,t),tc.crossVectors(Ql,Mo);let a=this.direction.dot(tc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ur.subVectors(this.origin,t);const l=o*this.direction.dot(Mo.crossVectors(ur,Mo));if(l<0)return null;const c=o*this.direction.dot(Ql.cross(ur));if(c<0||l+c>a)return null;const u=-o*ur.dot(tc);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(t,e,n,i,s,a,o,l,c,u,h,d,f,_,g,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,h,d,f,_,g,m)}set(t,e,n,i,s,a,o,l,c,u,h,d,f,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,i=1/xs.setFromMatrixColumn(t,0).length(),s=1/xs.setFromMatrixColumn(t,1).length(),a=1/xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=a*u,f=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=f+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+f*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,f=l*h,_=c*u,g=c*h;e[0]=d+g*o,e[4]=_*o-f,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,f=l*h,_=c*u,g=c*h;e[0]=d-g*o,e[4]=-a*h,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*u,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,f=a*h,_=o*u,g=o*h;e[0]=l*u,e[4]=_*c-f,e[8]=d*c+g,e[1]=l*h,e[5]=g*c+d,e[9]=f*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-d*h,e[8]=_*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*h+_,e[10]=d-g*h}else if(t.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+g,e[5]=a*u,e[9]=f*h-_,e[2]=_*h-f,e[6]=o*u,e[10]=g*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(J_,t,K_)}lookAt(t,e,n){const i=this.elements;return Yn.subVectors(t,e),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),hr.crossVectors(n,Yn),hr.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),hr.crossVectors(n,Yn)),hr.normalize(),yo.crossVectors(Yn,hr),i[0]=hr.x,i[4]=yo.x,i[8]=Yn.x,i[1]=hr.y,i[5]=yo.y,i[9]=Yn.y,i[2]=hr.z,i[6]=yo.z,i[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],y=n[3],M=n[7],S=n[11],b=n[15],w=i[0],A=i[4],D=i[8],v=i[12],E=i[1],P=i[5],U=i[9],z=i[13],V=i[2],k=i[6],G=i[10],F=i[14],q=i[3],tt=i[7],R=i[11],et=i[15];return s[0]=a*w+o*E+l*V+c*q,s[4]=a*A+o*P+l*k+c*tt,s[8]=a*D+o*U+l*G+c*R,s[12]=a*v+o*z+l*F+c*et,s[1]=u*w+h*E+d*V+f*q,s[5]=u*A+h*P+d*k+f*tt,s[9]=u*D+h*U+d*G+f*R,s[13]=u*v+h*z+d*F+f*et,s[2]=_*w+g*E+m*V+p*q,s[6]=_*A+g*P+m*k+p*tt,s[10]=_*D+g*U+m*G+p*R,s[14]=_*v+g*z+m*F+p*et,s[3]=y*w+M*E+S*V+b*q,s[7]=y*A+M*P+S*k+b*tt,s[11]=y*D+M*U+S*G+b*R,s[15]=y*v+M*z+S*F+b*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15],y=l*f-c*d,M=o*f-c*h,S=o*d-l*h,b=a*f-c*u,w=a*d-l*u,A=a*h-o*u;return e*(g*y-m*M+p*S)-n*(_*y-m*b+p*w)+i*(_*M-g*b+p*A)-s*(_*S-g*w+m*A)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],y=h*m*c-g*d*c+g*l*f-o*m*f-h*l*p+o*d*p,M=_*d*c-u*m*c-_*l*f+a*m*f+u*l*p-a*d*p,S=u*g*c-_*h*c+_*o*f-a*g*f-u*o*p+a*h*p,b=_*h*l-u*g*l-_*o*d+a*g*d+u*o*m-a*h*m,w=e*y+n*M+i*S+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=y*A,t[1]=(g*d*s-h*m*s-g*i*f+n*m*f+h*i*p-n*d*p)*A,t[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*A,t[3]=(h*l*s-o*d*s-h*i*c+n*d*c+o*i*f-n*l*f)*A,t[4]=M*A,t[5]=(u*m*s-_*d*s+_*i*f-e*m*f-u*i*p+e*d*p)*A,t[6]=(_*l*s-a*m*s-_*i*c+e*m*c+a*i*p-e*l*p)*A,t[7]=(a*d*s-u*l*s+u*i*c-e*d*c-a*i*f+e*l*f)*A,t[8]=S*A,t[9]=(_*h*s-u*g*s-_*n*f+e*g*f+u*n*p-e*h*p)*A,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*p+e*o*p)*A,t[11]=(u*o*s-a*h*s-u*n*c+e*h*c+a*n*f-e*o*f)*A,t[12]=b*A,t[13]=(u*g*i-_*h*i+_*n*d-e*g*d-u*n*m+e*h*m)*A,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*A,t[15]=(a*h*i-u*o*i+u*n*l-e*h*l-a*n*d+e*o*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,_=s*h,g=a*u,m=a*h,p=o*h,y=l*c,M=l*u,S=l*h,b=n.x,w=n.y,A=n.z;return i[0]=(1-(g+p))*b,i[1]=(f+S)*b,i[2]=(_-M)*b,i[3]=0,i[4]=(f-S)*w,i[5]=(1-(d+p))*w,i[6]=(m+y)*w,i[7]=0,i[8]=(_+M)*A,i[9]=(m-y)*A,i[10]=(1-(d+g))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=xs.set(i[0],i[1],i[2]).length();const a=xs.set(i[4],i[5],i[6]).length(),o=xs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),xi.copy(this);const c=1/s,u=1/a,h=1/o;return xi.elements[0]*=c,xi.elements[1]*=c,xi.elements[2]*=c,xi.elements[4]*=u,xi.elements[5]*=u,xi.elements[6]*=u,xi.elements[8]*=h,xi.elements[9]*=h,xi.elements[10]*=h,e.setFromRotationMatrix(xi),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Li,l=!1){const c=this.elements,u=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Li)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===xl)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Li,l=!1){const c=this.elements,u=2/(e-t),h=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Li)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===xl)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const xs=new B,xi=new Pe,J_=new B(0,0,0),K_=new B(1,1,1),hr=new B,yo=new B,Yn=new B,cf=new Pe,uf=new ho;class zi{constructor(t=0,e=0,n=0,i=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(se(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(se(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return cf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(cf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uf.setFromEuler(this),this.setFromQuaternion(uf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class up{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let j_=0;const hf=new B,Ss=new ho,Xi=new Pe,Eo=new B,fa=new B,Q_=new B,tg=new ho,ff=new B(1,0,0),df=new B(0,1,0),pf=new B(0,0,1),mf={type:"added"},eg={type:"removed"},Ms={type:"childadded",child:null},ec={type:"childremoved",child:null};class Ke extends oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new B,e=new zi,n=new ho,i=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Kt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new up,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(ff,t)}rotateY(t){return this.rotateOnAxis(df,t)}rotateZ(t){return this.rotateOnAxis(pf,t)}translateOnAxis(t,e){return hf.copy(t).applyQuaternion(this.quaternion),this.position.add(hf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ff,t)}translateY(t){return this.translateOnAxis(df,t)}translateZ(t){return this.translateOnAxis(pf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Eo.copy(t):Eo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(fa,Eo,this.up):Xi.lookAt(Eo,fa,this.up),this.quaternion.setFromRotationMatrix(Xi),i&&(Xi.extractRotation(i.matrixWorld),Ss.setFromRotationMatrix(Xi),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(mf),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(eg),ec.child=t,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(mf),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,t,Q_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,tg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ke.DEFAULT_UP=new B(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new B,Yi=new B,nc=new B,qi=new B,ys=new B,Es=new B,_f=new B,ic=new B,rc=new B,sc=new B,ac=new Be,oc=new Be,lc=new Be;class di{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Si.subVectors(t,e),i.cross(Si);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Si.subVectors(i,e),Yi.subVectors(n,e),nc.subVectors(t,e);const a=Si.dot(Si),o=Si.dot(Yi),l=Si.dot(nc),c=Yi.dot(Yi),u=Yi.dot(nc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qi.x),l.addScaledVector(a,qi.y),l.addScaledVector(o,qi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return ac.setScalar(0),oc.setScalar(0),lc.setScalar(0),ac.fromBufferAttribute(t,e),oc.fromBufferAttribute(t,n),lc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ac,s.x),a.addScaledVector(oc,s.y),a.addScaledVector(lc,s.z),a}static isFrontFacing(t,e,n,i){return Si.subVectors(n,e),Yi.subVectors(t,e),Si.cross(Yi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),Si.cross(Yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return di.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return di.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;ys.subVectors(i,n),Es.subVectors(s,n),ic.subVectors(t,n);const l=ys.dot(ic),c=Es.dot(ic);if(l<=0&&c<=0)return e.copy(n);rc.subVectors(t,i);const u=ys.dot(rc),h=Es.dot(rc);if(u>=0&&h<=u)return e.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ys,a);sc.subVectors(t,s);const f=ys.dot(sc),_=Es.dot(sc);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Es,o);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return _f.subVectors(s,i),o=(h-u)/(h-u+(f-_)),e.copy(i).addScaledVector(_f,o);const p=1/(m+g+d);return a=g*p,o=d*p,e.copy(n).addScaledVector(ys,a).addScaledVector(Es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},To={h:0,s:0,l:0};function cc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class le{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ci){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=G_(t,1),e=se(e,0,1),n=se(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=cc(a,s,t+1/3),this.g=cc(a,s,t),this.b=cc(a,s,t-1/3)}return he.colorSpaceToWorking(this,i),this}setStyle(t,e=ci){function n(s){s!==void 0&&parseFloat(s)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ci){const n=hp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=nr(t.r),this.g=nr(t.g),this.b=nr(t.b),this}copyLinearToSRGB(t){return this.r=Vs(t.r),this.g=Vs(t.g),this.b=Vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ci){return he.workingToColorSpace(fn.copy(this),t),Math.round(se(fn.r*255,0,255))*65536+Math.round(se(fn.g*255,0,255))*256+Math.round(se(fn.b*255,0,255))}getHexString(t=ci){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,s=fn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=ci){he.workingToColorSpace(fn.copy(this),t);const e=fn.r,n=fn.g,i=fn.b;return t!==ci?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(fr),this.setHSL(fr.h+t,fr.s+e,fr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fr),t.getHSL(To);const n=Xl(fr.h,To.h,e),i=Xl(fr.s,To.s,e),s=Xl(fr.l,To.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new le;le.NAMES=hp;let ng=0;class us extends oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ng++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Kr,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Hc,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ps,this.stencilZFail=ps,this.stencilZPass=ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Kr&&(n.blending=this.blending),this.side!==br&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==Hc&&(n.blendDst=this.blendDst),this.blendEquation!==Wr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ps&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ps&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ps&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fp extends us{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const We=new B,bo=new Ct;let ig=0;class Pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ig++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Iu,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bo.fromBufferAttribute(this,e),bo.applyMatrix3(t),this.setXY(e,bo.x,bo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ri(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ri(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ri(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ri(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Iu&&(t.usage=this.usage),t}}class dp extends Pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class pp extends Pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Dn extends Pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rg=0;const oi=new Pe,uc=new Ke,Ts=new B,qn=new fo,da=new fo,nn=new B;class Gn extends oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(op(t)?pp:dp)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,e,n){return oi.makeTranslation(t,e,n),this.applyMatrix4(oi),this}scale(t,e,n){return oi.makeScale(t,e,n),this.applyMatrix4(oi),this}lookAt(t){return uc.lookAt(t),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dn(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ul);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];da.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(qn.min,da.min),qn.expandByPoint(nn),nn.addVectors(qn.max,da.max),qn.expandByPoint(nn)):(qn.expandByPoint(da.min),qn.expandByPoint(da.max))}qn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)nn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(nn));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)nn.fromBufferAttribute(o,c),l&&(Ts.fromBufferAttribute(t,c),nn.add(Ts)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new B,l[D]=new B;const c=new B,u=new B,h=new B,d=new Ct,f=new Ct,_=new Ct,g=new B,m=new B;function p(D,v,E){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),d.fromBufferAttribute(s,D),f.fromBufferAttribute(s,v),_.fromBufferAttribute(s,E),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),o[D].add(g),o[v].add(g),o[E].add(g),l[D].add(m),l[v].add(m),l[E].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,v=y.length;D<v;++D){const E=y[D],P=E.start,U=E.count;for(let z=P,V=P+U;z<V;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const M=new B,S=new B,b=new B,w=new B;function A(D){b.fromBufferAttribute(i,D),w.copy(b);const v=o[D];M.copy(v),M.sub(b.multiplyScalar(b.dot(v))).normalize(),S.crossVectors(w,v);const P=S.dot(l[D])<0?-1:1;a.setXYZW(D,M.x,M.y,M.z,P)}for(let D=0,v=y.length;D<v;++D){const E=y[D],P=E.start,U=E.count;for(let z=P,V=P+U;z<V;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,h=new B;if(t)for(let d=0,f=t.count;d<f;d+=3){const _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new Pn(d,u,h)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Gn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=t(d,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gf=new Pe,Ur=new cp,Ao=new Ul,vf=new B,wo=new B,Co=new B,Ro=new B,hc=new B,Po=new B,xf=new B,Do=new B;class _i extends Ke{constructor(t=new Gn,e=new fp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(hc.fromBufferAttribute(h,t),a?Po.addScaledVector(hc,u):Po.addScaledVector(hc.sub(e),u))}e.add(Po)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ao.copy(n.boundingSphere),Ao.applyMatrix4(s),Ur.copy(t.ray).recast(t.near),!(Ao.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Ao,vf)===null||Ur.origin.distanceToSquared(vf)>(t.far-t.near)**2))&&(gf.copy(s).invert(),Ur.copy(t.ray).applyMatrix4(gf),!(n.boundingBox!==null&&Ur.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ur)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,b=M;S<b;S+=3){const w=o.getX(S),A=o.getX(S+1),D=o.getX(S+2);i=Lo(this,p,t,n,c,u,h,w,A,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const y=o.getX(m),M=o.getX(m+1),S=o.getX(m+2);i=Lo(this,a,t,n,c,u,h,y,M,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,b=M;S<b;S+=3){const w=S,A=S+1,D=S+2;i=Lo(this,p,t,n,c,u,h,w,A,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const y=m,M=m+1,S=m+2;i=Lo(this,a,t,n,c,u,h,y,M,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function sg(r,t,e,n,i,s,a,o){let l;if(t.side===Fn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===br,o),l===null)return null;Do.copy(o),Do.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Do);return c<e.near||c>e.far?null:{distance:c,point:Do.clone(),object:r}}function Lo(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,wo),r.getVertexPosition(l,Co),r.getVertexPosition(c,Ro);const u=sg(r,t,e,n,wo,Co,Ro,xf);if(u){const h=new B;di.getBarycoord(xf,wo,Co,Ro,h),i&&(u.uv=di.getInterpolatedAttribute(i,o,l,c,h,new Ct)),s&&(u.uv1=di.getInterpolatedAttribute(s,o,l,c,h,new Ct)),a&&(u.normal=di.getInterpolatedAttribute(a,o,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};di.getNormal(wo,Co,Ro,d.normal),u.face=d,u.barycoord=h}return u}class po extends Gn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(u,3)),this.setAttribute("uv",new Dn(h,2));function _(g,m,p,y,M,S,b,w,A,D,v){const E=S/A,P=b/D,U=S/2,z=b/2,V=w/2,k=A+1,G=D+1;let F=0,q=0;const tt=new B;for(let R=0;R<G;R++){const et=R*P-z;for(let Lt=0;Lt<k;Lt++){const Nt=Lt*E-U;tt[g]=Nt*y,tt[m]=et*M,tt[p]=V,c.push(tt.x,tt.y,tt.z),tt[g]=0,tt[m]=0,tt[p]=w>0?1:-1,u.push(tt.x,tt.y,tt.z),h.push(Lt/A),h.push(1-R/D),F+=1}}for(let R=0;R<D;R++)for(let et=0;et<A;et++){const Lt=d+et+k*R,Nt=d+et+k*(R+1),zt=d+(et+1)+k*(R+1),Yt=d+(et+1)+k*R;l.push(Lt,Nt,Yt),l.push(Nt,zt,Yt),q+=6}o.addGroup(f,q,v),f+=q,d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function js(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Tn(r){const t={};for(let e=0;e<r.length;e++){const n=js(r[e]);for(const i in n)t[i]=n[i]}return t}function ag(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function mp(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const og={clone:js,merge:Tn};var lg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends us{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lg,this.fragmentShader=cg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=js(t.uniforms),this.uniformsGroups=ag(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _p extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dr=new B,Sf=new Ct,Mf=new Ct;class ui extends _p{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Uu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Uu*2*Math.atan(Math.tan(Wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dr.x,dr.y).multiplyScalar(-t/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-t/dr.z)}getViewSize(t,e){return this.getViewBounds(t,Sf,Mf),e.subVectors(Mf,Sf)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Wl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const bs=-90,As=1;class ug extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ui(bs,As,t,e);i.layers=this.layers,this.add(i);const s=new ui(bs,As,t,e);s.layers=this.layers,this.add(s);const a=new ui(bs,As,t,e);a.layers=this.layers,this.add(a);const o=new ui(bs,As,t,e);o.layers=this.layers,this.add(o);const l=new ui(bs,As,t,e);l.layers=this.layers,this.add(l);const c=new ui(bs,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Li)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class gp extends vn{constructor(t=[],e=ss,n,i,s,a,o,l,c,u){super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class vp extends Fi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new gp(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new po(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:js(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:tr});s.uniforms.tEquirect.value=e;const a=new _i(i,s),o=e.minFilter;return e.minFilter===Yr&&(e.minFilter=gn),new ug(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}class $r extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hg={type:"move"};class fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $r;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class fg extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Iu,this.updateRanges=[],this.version=0,this.uuid=er()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=er()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mn=new B;class Ml{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyMatrix4(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.applyNormalMatrix(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Mn.fromBufferAttribute(this,e),Mn.transformDirection(t),this.setXYZ(e,Mn.x,Mn.y,Mn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ri(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ri(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ri(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ri(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array),s=ye(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Sl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new Pn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ml(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Sl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class xp extends us{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ws;const pa=new B,Cs=new B,Rs=new B,Ps=new Ct,ma=new Ct,Sp=new Pe,Io=new B,_a=new B,Uo=new B,yf=new Ct,dc=new Ct,Ef=new Ct;class pg extends Ke{constructor(t=new xp){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new Gn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new dg(e,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new Ml(n,3,0,!1)),ws.setAttribute("uv",new Ml(n,2,3,!1))}this.geometry=ws,this.material=t,this.center=new Ct(.5,.5),this.count=1}raycast(t,e){t.camera===null&&ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),Sp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Rs.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const a=this.center;No(Io.set(-.5,-.5,0),Rs,a,Cs,i,s),No(_a.set(.5,-.5,0),Rs,a,Cs,i,s),No(Uo.set(.5,.5,0),Rs,a,Cs,i,s),yf.set(0,0),dc.set(1,0),Ef.set(1,1);let o=t.ray.intersectTriangle(Io,_a,Uo,!1,pa);if(o===null&&(No(_a.set(-.5,.5,0),Rs,a,Cs,i,s),dc.set(0,1),o=t.ray.intersectTriangle(Io,Uo,_a,!1,pa),o===null))return;const l=t.ray.origin.distanceTo(pa);l<t.near||l>t.far||e.push({distance:l,point:pa.clone(),uv:di.getInterpolation(pa,Io,_a,Uo,yf,dc,Ef,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function No(r,t,e,n,i,s){Ps.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(ma.x=s*Ps.x-i*Ps.y,ma.y=i*Ps.x+s*Ps.y):ma.copy(Ps),r.copy(t),r.x+=ma.x,r.y+=ma.y,r.applyMatrix4(Sp)}class mg extends vn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=on,u=on,h,d){super(null,a,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pc=new B,_g=new B,gg=new Kt;class kr{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=pc.subVectors(n,e).cross(_g.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(pc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||gg.getNormalMatrix(t),i=this.coplanarPoint(pc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Ul,vg=new Ct(.5,.5),Fo=new B;class Sh{constructor(t=new kr,e=new kr,n=new kr,i=new kr,s=new kr,a=new kr){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Li,n=!1){const i=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],y=s[12],M=s[13],S=s[14],b=s[15];if(i[0].setComponents(c-a,f-u,p-_,b-y).normalize(),i[1].setComponents(c+a,f+u,p+_,b+y).normalize(),i[2].setComponents(c+o,f+h,p+g,b+M).normalize(),i[3].setComponents(c-o,f-h,p-g,b-M).normalize(),n)i[4].setComponents(l,d,m,S).normalize(),i[5].setComponents(c-l,f-d,p-m,b-S).normalize();else if(i[4].setComponents(c-l,f-d,p-m,b-S).normalize(),e===Li)i[5].setComponents(c+l,f+d,p+m,b+S).normalize();else if(e===xl)i[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(t){Nr.center.set(0,0,0);const e=vg.distanceTo(t.center);return Nr.radius=.7071067811865476+e,Nr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Fo.x=i.normal.x>0?t.max.x:t.min.x,Fo.y=i.normal.y>0?t.max.y:t.min.y,Fo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xg extends us{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Tf=new Pe,Nu=new cp,Oo=new Ul,Bo=new B;class Sg extends Ke{constructor(t=new Gn,e=new xg){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(i),Oo.radius+=s,t.ray.intersectsSphere(Oo)===!1)return;Tf.copy(i).invert(),Nu.copy(t.ray).applyMatrix4(Tf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);Bo.fromBufferAttribute(h,m),bf(Bo,m,l,i,t,e,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let _=d,g=f;_<g;_++)Bo.fromBufferAttribute(h,_),bf(Bo,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function bf(r,t,e,n,i,s,a){const o=Nu.distanceSqToPoint(r);if(o<e){const l=new B;Nu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class ja extends vn{constructor(t,e,n=Bi,i,s,a,o=on,l=on,c,u=sr,h=1){if(u!==sr&&u!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:h};super(d,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Mg extends ja{constructor(t,e=Bi,n=ss,i,s,a=on,o=on,l,c=sr){const u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,i,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Mp extends vn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Vi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new Ct:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new B,i=[],s=[],a=[],o=new B,l=new Pe;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new B)}s[0]=new B,a[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(se(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(se(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Mh extends Vi{constructor(t=0,e=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ct){const n=e,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yg extends Mh{constructor(t,e,n,i,s,a){super(t,e,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function yh(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const zo=new B,mc=new yh,_c=new yh,gc=new yh;class Eg extends Vi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new B){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(zo.subVectors(i[0],i[1]).add(i[0]),c=zo);const h=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(zo.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=zo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),mc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,_,g,m),_c.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,_,g,m),gc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,_,g,m)}else this.curveType==="catmullrom"&&(mc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),_c.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),gc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(mc.calc(l),_c.calc(l),gc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new B().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Af(r,t,e,n,i){const s=(n-t)*.5,a=(i-e)*.5,o=r*r,l=r*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*r+e}function Tg(r,t){const e=1-r;return e*e*t}function bg(r,t){return 2*(1-r)*r*t}function Ag(r,t){return r*r*t}function La(r,t,e,n){return Tg(r,t)+bg(r,e)+Ag(r,n)}function wg(r,t){const e=1-r;return e*e*e*t}function Cg(r,t){const e=1-r;return 3*e*e*r*t}function Rg(r,t){return 3*(1-r)*r*r*t}function Pg(r,t){return r*r*r*t}function Ia(r,t,e,n,i){return wg(r,t)+Cg(r,e)+Rg(r,n)+Pg(r,i)}class yp extends Vi{constructor(t=new Ct,e=new Ct,n=new Ct,i=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ct){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ia(t,i.x,s.x,a.x,o.x),Ia(t,i.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dg extends Vi{constructor(t=new B,e=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new B){const n=e,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ia(t,i.x,s.x,a.x,o.x),Ia(t,i.y,s.y,a.y,o.y),Ia(t,i.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ep extends Vi{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lg extends Vi{constructor(t=new B,e=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new B){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new B){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tp extends Vi{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(La(t,i.x,s.x,a.x),La(t,i.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ig extends Vi{constructor(t=new B,e=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new B){const n=e,i=this.v0,s=this.v1,a=this.v2;return n.set(La(t,i.x,s.x,a.x),La(t,i.y,s.y,a.y),La(t,i.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bp extends Vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){const n=e,i=this.points,s=(i.length-1)*t,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Af(o,l.x,c.x,u.x,h.x),Af(o,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Ct().fromArray(i))}return this}}var wf=Object.freeze({__proto__:null,ArcCurve:yg,CatmullRomCurve3:Eg,CubicBezierCurve:yp,CubicBezierCurve3:Dg,EllipseCurve:Mh,LineCurve:Ep,LineCurve3:Lg,QuadraticBezierCurve:Tp,QuadraticBezierCurve3:Ig,SplineCurve:bp});class Ug extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wf[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new wf[i.type]().fromJSON(i))}return this}}class Cf extends Ug{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ep(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Tp(this.currentPoint.clone(),new Ct(t,e),new Ct(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,a){const o=new yp(this.currentPoint.clone(),new Ct(t,e),new Ct(n,i),new Ct(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new bp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,a),this}absarc(t,e,n,i,s,a){return this.absellipse(t,e,n,n,i,s,a),this}ellipse(t,e,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,a,o,l),this}absellipse(t,e,n,i,s,a,o,l){const c=new Mh(t,e,n,i,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ap extends Cf{constructor(t){super(t),this.uuid=er(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Cf().fromJSON(i))}return this}}function Ng(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=wp(r,0,i,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=kg(r,t,s,e)),r.length>80*e){o=r[0],l=r[1];let u=o,h=l;for(let d=e;d<i;d+=e){const f=r[d],_=r[d+1];f<o&&(o=f),_<l&&(l=_),f>u&&(u=f),_>h&&(h=_)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return Qa(s,a,e,o,l,c,0),a}function wp(r,t,e,n,i){let s;if(i===Kg(r,t,e,n)>0)for(let a=t;a<e;a+=n)s=Rf(a/n|0,r[a],r[a+1],s);else for(let a=e-n;a>=t;a-=n)s=Rf(a/n|0,r[a],r[a+1],s);return s&&Qs(s,s.next)&&(eo(s),s=s.next),s}function as(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Qs(e,e.next)||Ue(e.prev,e,e.next)===0)){if(eo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Qa(r,t,e,n,i,s,a){if(!r)return;!a&&s&&Xg(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Og(r,n,i,s):Fg(r)){t.push(l.i,r.i,c.i),eo(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Bg(as(r),t),Qa(r,t,e,n,i,s,2)):a===2&&zg(r,t,e,n,i,s):Qa(as(r),t,e,n,i,s,1);break}}}function Fg(r){const t=r.prev,e=r,n=r.next;if(Ue(t,e,n)>=0)return!1;const i=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(i,s,a),h=Math.min(o,l,c),d=Math.max(i,s,a),f=Math.max(o,l,c);let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=d&&_.y>=h&&_.y<=f&&Ea(i,o,s,l,a,c,_.x,_.y)&&Ue(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Og(r,t,e,n){const i=r.prev,s=r,a=r.next;if(Ue(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,u=i.y,h=s.y,d=a.y,f=Math.min(o,l,c),_=Math.min(u,h,d),g=Math.max(o,l,c),m=Math.max(u,h,d),p=Fu(f,_,t,e,n),y=Fu(g,m,t,e,n);let M=r.prevZ,S=r.nextZ;for(;M&&M.z>=p&&S&&S.z<=y;){if(M.x>=f&&M.x<=g&&M.y>=_&&M.y<=m&&M!==i&&M!==a&&Ea(o,u,l,h,c,d,M.x,M.y)&&Ue(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=f&&S.x<=g&&S.y>=_&&S.y<=m&&S!==i&&S!==a&&Ea(o,u,l,h,c,d,S.x,S.y)&&Ue(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=g&&M.y>=_&&M.y<=m&&M!==i&&M!==a&&Ea(o,u,l,h,c,d,M.x,M.y)&&Ue(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=y;){if(S.x>=f&&S.x<=g&&S.y>=_&&S.y<=m&&S!==i&&S!==a&&Ea(o,u,l,h,c,d,S.x,S.y)&&Ue(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function Bg(r,t){let e=r;do{const n=e.prev,i=e.next.next;!Qs(n,i)&&Rp(n,e,e.next,i)&&to(n,i)&&to(i,n)&&(t.push(n.i,e.i,i.i),eo(e),eo(e.next),e=r=i),e=e.next}while(e!==r);return as(e)}function zg(r,t,e,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$g(a,o)){let l=Pp(a,o);a=as(a,a.next),l=as(l,l.next),Qa(a,t,e,n,i,s,0),Qa(l,t,e,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function kg(r,t,e,n){const i=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,l=s<a-1?t[s+1]*n:r.length,c=wp(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(qg(c))}i.sort(Vg);for(let s=0;s<i.length;s++)e=Gg(i[s],e);return e}function Vg(r,t){let e=r.x-t.x;if(e===0&&(e=r.y-t.y,e===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Gg(r,t){const e=Hg(r,t);if(!e)return t;const n=Pp(e,r);return as(n,n.next),as(e,e.next)}function Hg(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,a;if(Qs(r,e))return e;do{if(Qs(r,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const h=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,a=e.x<e.next.x?e:e.next,h===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Cp(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)){const h=Math.abs(i-e.y)/(n-e.x);to(e,r)&&(h<u||h===u&&(e.x>a.x||e.x===a.x&&Wg(a,e)))&&(a=e,u=h)}e=e.next}while(e!==o);return a}function Wg(r,t){return Ue(r.prev,r,t.prev)<0&&Ue(t.next,r,r.next)<0}function Xg(r,t,e,n){let i=r;do i.z===0&&(i.z=Fu(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Yg(i)}function Yg(r){let t,e=1;do{let n=r,i;r=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,e*=2}while(t>1);return r}function Fu(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function qg(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Cp(r,t,e,n,i,s,a,o){return(i-a)*(t-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(i-a)*(n-o)}function Ea(r,t,e,n,i,s,a,o){return!(r===a&&t===o)&&Cp(r,t,e,n,i,s,a,o)}function $g(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Zg(r,t)&&(to(r,t)&&to(t,r)&&Jg(r,t)&&(Ue(r.prev,r,t.prev)||Ue(r,t.prev,t))||Qs(r,t)&&Ue(r.prev,r,r.next)>0&&Ue(t.prev,t,t.next)>0)}function Ue(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Qs(r,t){return r.x===t.x&&r.y===t.y}function Rp(r,t,e,n){const i=Vo(Ue(r,t,e)),s=Vo(Ue(r,t,n)),a=Vo(Ue(e,n,r)),o=Vo(Ue(e,n,t));return!!(i!==s&&a!==o||i===0&&ko(r,e,t)||s===0&&ko(r,n,t)||a===0&&ko(e,r,n)||o===0&&ko(e,t,n))}function ko(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Vo(r){return r>0?1:r<0?-1:0}function Zg(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Rp(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function to(r,t){return Ue(r.prev,r,r.next)<0?Ue(r,t,r.next)>=0&&Ue(r,r.prev,t)>=0:Ue(r,t,r.prev)<0||Ue(r,r.next,t)<0}function Jg(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Pp(r,t){const e=Ou(r.i,r.x,r.y),n=Ou(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Rf(r,t,e,n){const i=Ou(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function eo(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ou(r,t,e){return{i:r,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Kg(r,t,e,n){let i=0;for(let s=t,a=e-n;s<e;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class jg{static triangulate(t,e,n=2){return Ng(t,e,n)}}class Ua{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return Ua.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Pf(t),Df(n,t);let a=t.length;e.forEach(Pf);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,Df(n,e[l]);const o=jg.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Pf(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Df(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Nl extends Gn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=t/o,d=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const y=p*d-a;for(let M=0;M<c;M++){const S=M*h-s;_.push(S,-y,0),g.push(0,0,1),m.push(M/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const M=y+c*p,S=y+c*(p+1),b=y+1+c*(p+1),w=y+1+c*p;f.push(M,S,w),f.push(S,b,w)}this.setIndex(f),this.setAttribute("position",new Dn(_,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Eh extends Gn{constructor(t=new Ap([new Ct(0,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Dn(i,3)),this.setAttribute("normal",new Dn(s,3)),this.setAttribute("uv",new Dn(a,2));function c(u){const h=i.length/3,d=u.extractPoints(e);let f=d.shape;const _=d.holes;Ua.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=_.length;m<p;m++){const y=_[m];Ua.isClockWise(y)===!0&&(_[m]=y.reverse())}const g=Ua.triangulateShape(f,_);for(let m=0,p=_.length;m<p;m++){const y=_[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){const y=f[m];i.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=g.length;m<p;m++){const y=g[m],M=y[0]+h,S=y[1]+h,b=y[2]+h;n.push(M,S,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Qg(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const a=e[t.shapes[i]];n.push(a)}return new Eh(n,t.curveSegments)}}function Qg(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class Th extends Gn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new B,d=new B,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const y=[],M=p/n;let S=0;p===0&&a===0?S=.5/e:p===n&&l===Math.PI&&(S=-.5/e);for(let b=0;b<=e;b++){const w=b/e;h.x=-t*Math.cos(i+w*s)*Math.sin(a+M*o),h.y=t*Math.cos(a+M*o),h.z=t*Math.sin(i+w*s)*Math.sin(a+M*o),_.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),m.push(w+S,1-M),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){const M=u[p][y+1],S=u[p][y],b=u[p+1][y],w=u[p+1][y+1];(p!==0||a>0)&&f.push(M,S,w),(p!==n-1||l<Math.PI)&&f.push(S,b,w)}this.setIndex(f),this.setAttribute("position",new Dn(_,3)),this.setAttribute("normal",new Dn(g,3)),this.setAttribute("uv",new Dn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Th(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class t0 extends Ei{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lf extends us{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ap,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class e0 extends us{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class n0 extends us{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vc={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class i0{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const r0=new i0;class bh{constructor(t){this.manager=t!==void 0?t:r0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}bh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ds=new WeakMap;class s0 extends bh{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=vc.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let h=Ds.get(a);h===void 0&&(h=[],Ds.set(a,h)),h.push({onLoad:e,onError:i})}return a}const o=Ja("img");function l(){u(),e&&e(this);const h=Ds.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Ds.delete(this),s.manager.itemEnd(t)}function c(h){u(),i&&i(h),vc.remove(`image:${t}`);const d=Ds.get(this)||[];for(let f=0;f<d.length;f++){const _=d[f];_.onError&&_.onError(h)}Ds.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),vc.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class If extends bh{constructor(t){super(t)}load(t,e,n,i){const s=new vn,a=new s0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Dp extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class a0 extends Dp{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const xc=new Pe,Uf=new B,Nf=new B;class o0{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=jn,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sh,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Uf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uf),Nf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nf),e.updateMatrixWorld(),xc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ah extends _p{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class l0 extends o0{constructor(){super(new Ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ff extends Dp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new l0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class c0 extends ui{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Of(r,t,e,n){const i=u0(n);switch(e){case ip:return r*t;case sp:return r*t/i.components*i.byteLength;case ph:return r*t/i.components*i.byteLength;case Js:return r*t*2/i.components*i.byteLength;case mh:return r*t*2/i.components*i.byteLength;case rp:return r*t*3/i.components*i.byteLength;case yi:return r*t*4/i.components*i.byteLength;case _h:return r*t*4/i.components*i.byteLength;case rl:case sl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case al:case ol:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nu:case ru:return Math.max(r,16)*Math.max(t,8)/4;case eu:case iu:return Math.max(r,8)*Math.max(t,8)/2;case su:case au:case lu:case cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ou:case uu:case hu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case fu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case du:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case pu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case mu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case _u:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case gu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case vu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case xu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Su:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Mu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case yu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Eu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Tu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case bu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Au:case wu:case Cu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ru:case Pu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Du:case Lu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function u0(r){switch(r){case jn:case Qd:return{byteLength:1,components:1};case $a:case tp:case rr:return{byteLength:2,components:1};case fh:case dh:return{byteLength:2,components:4};case Bi:case hh:case Di:return{byteLength:4,components:1};case ep:case np:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uh}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uh);function Lp(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function h0(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var f0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d0=`#ifdef USE_ALPHAHASH
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
#endif`,p0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v0=`#ifdef USE_AOMAP
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
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S0=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,M0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b0=`#ifdef USE_IRIDESCENCE
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
#endif`,A0=`#ifdef USE_BUMPMAP
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,U0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,N0=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,F0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,O0=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,B0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q0=`#ifdef USE_GRADIENTMAP
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
}`,tv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ev=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iv=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,rv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,sv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,av=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ov=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cv=`PhysicalMaterial material;
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
#endif`,uv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,hv=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mv=`#if defined( USE_POINTS_UV )
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
#endif`,yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ev=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wv=`#ifdef USE_MORPHTARGETS
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
#endif`,Cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Pv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uv=`#ifdef USE_NORMALMAP
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
#endif`,Nv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ov=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Zv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Jv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,Kv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jv=`#ifdef USE_SKINNING
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
#endif`,Qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tx=`#ifdef USE_SKINNING
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
#endif`,ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sx=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ax=`#ifdef USE_TRANSMISSION
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fx=`uniform sampler2D t2D;
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,px=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
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
}`,vx=`#if DEPTH_PACKING == 3200
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
}`,xx=`#define DISTANCE
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
}`,Sx=`#define DISTANCE
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
void main () {
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
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`uniform float scale;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,bx=`#include <common>
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
}`,Ax=`uniform vec3 diffuse;
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
}`,wx=`#define LAMBERT
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
}`,Cx=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Rx=`#define MATCAP
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
}`,Px=`#define MATCAP
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
}`,Dx=`#define NORMAL
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
}`,Lx=`#define NORMAL
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
}`,Ix=`#define PHONG
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
}`,Ux=`#define PHONG
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Nx=`#define STANDARD
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
}`,Fx=`#define STANDARD
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
}`,Ox=`#define TOON
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
}`,Bx=`#define TOON
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
}`,zx=`uniform float size;
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
}`,kx=`uniform vec3 diffuse;
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
}`,Vx=`#include <common>
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
}`,Gx=`uniform vec3 color;
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
}`,Hx=`uniform float rotation;
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
}`,Wx=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:f0,alphahash_pars_fragment:d0,alphamap_fragment:p0,alphamap_pars_fragment:m0,alphatest_fragment:_0,alphatest_pars_fragment:g0,aomap_fragment:v0,aomap_pars_fragment:x0,batching_pars_vertex:S0,batching_vertex:M0,begin_vertex:y0,beginnormal_vertex:E0,bsdfs:T0,iridescence_fragment:b0,bumpmap_pars_fragment:A0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:C0,clipping_planes_pars_vertex:R0,clipping_planes_vertex:P0,color_fragment:D0,color_pars_fragment:L0,color_pars_vertex:I0,color_vertex:U0,common:N0,cube_uv_reflection_fragment:F0,defaultnormal_vertex:O0,displacementmap_pars_vertex:B0,displacementmap_vertex:z0,emissivemap_fragment:k0,emissivemap_pars_fragment:V0,colorspace_fragment:G0,colorspace_pars_fragment:H0,envmap_fragment:W0,envmap_common_pars_fragment:X0,envmap_pars_fragment:Y0,envmap_pars_vertex:q0,envmap_physical_pars_fragment:rv,envmap_vertex:$0,fog_vertex:Z0,fog_pars_vertex:J0,fog_fragment:K0,fog_pars_fragment:j0,gradientmap_pars_fragment:Q0,lightmap_pars_fragment:tv,lights_lambert_fragment:ev,lights_lambert_pars_fragment:nv,lights_pars_begin:iv,lights_toon_fragment:sv,lights_toon_pars_fragment:av,lights_phong_fragment:ov,lights_phong_pars_fragment:lv,lights_physical_fragment:cv,lights_physical_pars_fragment:uv,lights_fragment_begin:hv,lights_fragment_maps:fv,lights_fragment_end:dv,logdepthbuf_fragment:pv,logdepthbuf_pars_fragment:mv,logdepthbuf_pars_vertex:_v,logdepthbuf_vertex:gv,map_fragment:vv,map_pars_fragment:xv,map_particle_fragment:Sv,map_particle_pars_fragment:Mv,metalnessmap_fragment:yv,metalnessmap_pars_fragment:Ev,morphinstance_vertex:Tv,morphcolor_vertex:bv,morphnormal_vertex:Av,morphtarget_pars_vertex:wv,morphtarget_vertex:Cv,normal_fragment_begin:Rv,normal_fragment_maps:Pv,normal_pars_fragment:Dv,normal_pars_vertex:Lv,normal_vertex:Iv,normalmap_pars_fragment:Uv,clearcoat_normal_fragment_begin:Nv,clearcoat_normal_fragment_maps:Fv,clearcoat_pars_fragment:Ov,iridescence_pars_fragment:Bv,opaque_fragment:zv,packing:kv,premultiplied_alpha_fragment:Vv,project_vertex:Gv,dithering_fragment:Hv,dithering_pars_fragment:Wv,roughnessmap_fragment:Xv,roughnessmap_pars_fragment:Yv,shadowmap_pars_fragment:qv,shadowmap_pars_vertex:$v,shadowmap_vertex:Zv,shadowmask_pars_fragment:Jv,skinbase_vertex:Kv,skinning_pars_vertex:jv,skinning_vertex:Qv,skinnormal_vertex:tx,specularmap_fragment:ex,specularmap_pars_fragment:nx,tonemapping_fragment:ix,tonemapping_pars_fragment:rx,transmission_fragment:sx,transmission_pars_fragment:ax,uv_pars_fragment:ox,uv_pars_vertex:lx,uv_vertex:cx,worldpos_vertex:ux,background_vert:hx,background_frag:fx,backgroundCube_vert:dx,backgroundCube_frag:px,cube_vert:mx,cube_frag:_x,depth_vert:gx,depth_frag:vx,distance_vert:xx,distance_frag:Sx,equirect_vert:Mx,equirect_frag:yx,linedashed_vert:Ex,linedashed_frag:Tx,meshbasic_vert:bx,meshbasic_frag:Ax,meshlambert_vert:wx,meshlambert_frag:Cx,meshmatcap_vert:Rx,meshmatcap_frag:Px,meshnormal_vert:Dx,meshnormal_frag:Lx,meshphong_vert:Ix,meshphong_frag:Ux,meshphysical_vert:Nx,meshphysical_frag:Fx,meshtoon_vert:Ox,meshtoon_frag:Bx,points_vert:zx,points_frag:kx,shadow_vert:Vx,shadow_frag:Gx,sprite_vert:Hx,sprite_frag:Wx},mt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},wi={basic:{uniforms:Tn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Tn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new le(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Tn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Tn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Tn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new le(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Tn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Tn([mt.points,mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Tn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Tn([mt.common,mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Tn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Tn([mt.sprite,mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:Tn([mt.common,mt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:Tn([mt.lights,mt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};wi.physical={uniforms:Tn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const Go={r:0,b:0,g:0},Fr=new zi,Xx=new Pe;function Yx(r,t,e,n,i,s,a){const o=new le(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function _(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function g(M){let S=!1;const b=_(M);b===null?p(o,l):b&&b.isColor&&(p(b,1),S=!0);const w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,S){const b=_(S);b&&(b.isCubeTexture||b.mapping===Il)?(u===void 0&&(u=new _i(new po(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:js(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Fr.copy(S.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xx.makeRotationFromEuler(Fr)),u.material.toneMapped=he.getTransfer(b.colorSpace)!==xe,(h!==b||d!==b.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,f=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new _i(new Nl(2,2),new Ei({name:"BackgroundMaterial",uniforms:js(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=he.getTransfer(b.colorSpace)!==xe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,f=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,S){M.getRGB(Go,mp(r)),n.buffers.color.setClear(Go.r,Go.g,Go.b,S,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),l=S,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:g,addToRenderList:m,dispose:y}}function qx(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(E,P,U,z,V){let k=!1;const G=h(z,U,P);s!==G&&(s=G,c(s.object)),k=f(E,z,U,V),k&&_(E,z,U,V),V!==null&&t.update(V,r.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,S(E,P,U,z),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return r.createVertexArray()}function c(E){return r.bindVertexArray(E)}function u(E){return r.deleteVertexArray(E)}function h(E,P,U){const z=U.wireframe===!0;let V=n[E.id];V===void 0&&(V={},n[E.id]=V);let k=V[P.id];k===void 0&&(k={},V[P.id]=k);let G=k[z];return G===void 0&&(G=d(l()),k[z]=G),G}function d(E){const P=[],U=[],z=[];for(let V=0;V<e;V++)P[V]=0,U[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:z,object:E,attributes:{},index:null}}function f(E,P,U,z){const V=s.attributes,k=P.attributes;let G=0;const F=U.getAttributes();for(const q in F)if(F[q].location>=0){const R=V[q];let et=k[q];if(et===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(et=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(et=E.instanceColor)),R===void 0||R.attribute!==et||et&&R.data!==et.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function _(E,P,U,z){const V={},k=P.attributes;let G=0;const F=U.getAttributes();for(const q in F)if(F[q].location>=0){let R=k[q];R===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(R=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(R=E.instanceColor));const et={};et.attribute=R,R&&R.data&&(et.data=R.data),V[q]=et,G++}s.attributes=V,s.attributesNum=G,s.index=z}function g(){const E=s.newAttributes;for(let P=0,U=E.length;P<U;P++)E[P]=0}function m(E){p(E,0)}function p(E,P){const U=s.newAttributes,z=s.enabledAttributes,V=s.attributeDivisors;U[E]=1,z[E]===0&&(r.enableVertexAttribArray(E),z[E]=1),V[E]!==P&&(r.vertexAttribDivisor(E,P),V[E]=P)}function y(){const E=s.newAttributes,P=s.enabledAttributes;for(let U=0,z=P.length;U<z;U++)P[U]!==E[U]&&(r.disableVertexAttribArray(U),P[U]=0)}function M(E,P,U,z,V,k,G){G===!0?r.vertexAttribIPointer(E,P,U,V,k):r.vertexAttribPointer(E,P,U,z,V,k)}function S(E,P,U,z){g();const V=z.attributes,k=U.getAttributes(),G=P.defaultAttributeValues;for(const F in k){const q=k[F];if(q.location>=0){let tt=V[F];if(tt===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(tt=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(tt=E.instanceColor)),tt!==void 0){const R=tt.normalized,et=tt.itemSize,Lt=t.get(tt);if(Lt===void 0)continue;const Nt=Lt.buffer,zt=Lt.type,Yt=Lt.bytesPerElement,J=zt===r.INT||zt===r.UNSIGNED_INT||tt.gpuType===hh;if(tt.isInterleavedBufferAttribute){const $=tt.data,st=$.stride,Rt=tt.offset;if($.isInstancedInterleavedBuffer){for(let xt=0;xt<q.locationSize;xt++)p(q.location+xt,$.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let xt=0;xt<q.locationSize;xt++)m(q.location+xt);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let xt=0;xt<q.locationSize;xt++)M(q.location+xt,et/q.locationSize,zt,R,st*Yt,(Rt+et/q.locationSize*xt)*Yt,J)}else{if(tt.isInstancedBufferAttribute){for(let $=0;$<q.locationSize;$++)p(q.location+$,tt.meshPerAttribute);E.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let $=0;$<q.locationSize;$++)m(q.location+$);r.bindBuffer(r.ARRAY_BUFFER,Nt);for(let $=0;$<q.locationSize;$++)M(q.location+$,et/q.locationSize,zt,R,et*Yt,et/q.locationSize*$*Yt,J)}}else if(G!==void 0){const R=G[F];if(R!==void 0)switch(R.length){case 2:r.vertexAttrib2fv(q.location,R);break;case 3:r.vertexAttrib3fv(q.location,R);break;case 4:r.vertexAttrib4fv(q.location,R);break;default:r.vertexAttrib1fv(q.location,R)}}}}y()}function b(){D();for(const E in n){const P=n[E];for(const U in P){const z=P[U];for(const V in z)u(z[V].object),delete z[V];delete P[U]}delete n[E]}}function w(E){if(n[E.id]===void 0)return;const P=n[E.id];for(const U in P){const z=P[U];for(const V in z)u(z[V].object),delete z[V];delete P[U]}delete n[E.id]}function A(E){for(const P in n){const U=n[P];if(U[E.id]===void 0)continue;const z=U[E.id];for(const V in z)u(z[V].object),delete z[V];delete U[E.id]}}function D(){v(),a=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:v,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:m,disableUnusedAttributes:y}}function $x(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function o(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];e.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Zx(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==yi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==jn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Di&&!D)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&($t("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:S,maxSamples:b,samples:w}}function Jx(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new kr,o=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const y=s?0:n,M=y*4;let S=p.clippingState||null;l.value=S,S=u(_,d,M,f);for(let b=0;b!==M;++b)S[b]=e[b];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,S=f;M!==g;++M,S+=4)a.copy(h[M]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Kx(r){let t=new WeakMap;function e(a,o){return o===Kc?a.mapping=ss:o===jc&&(a.mapping=Zs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Kc||o===jc)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new vp(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const _r=4,Bf=[.125,.215,.35,.446,.526,.582],Xr=20,jx=256,ga=new Ah,zf=new le;let Sc=null,Mc=0,yc=0,Ec=!1;const Qx=new B;class kf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){const{size:a=256,position:o=Qx}=s;Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Sc,Mc,yc),this._renderer.xr.enabled=Ec,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),yc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:rr,format:yi,colorSpace:Ks,depthBuffer:!1},i=Vf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vf(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tS(s)),this._blurMaterial=nS(s,t,e),this._ggxMaterial=eS(s,t,e)}return i}_compileMaterial(t){const e=new _i(new Gn,t);this._renderer.compile(e,ga)}_sceneToCubeUV(t,e,n,i,s){const l=new ui(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(zf),h.toneMapping=Ni,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new po,new fp({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let p=!1;const y=t.background;y?y.isColor&&(m.color.copy(y),t.background=null,p=!0):(m.color.copy(zf),p=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[M],s.y,s.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[M]));const b=this._cubeSize;Ls(i,S*b,M>2?b:0,b,b),h.setRenderTarget(i),p&&h.render(g,l),h.render(t,l)}h.toneMapping=f,h.autoClear=d,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ss||t.mapping===Zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gf());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Ls(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ga)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:_}=this,g=this._sizeLods[n],m=3*g*(n>_-_r?n-_+_r:0),p=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=_-e,Ls(s,m,p,3*g,2*g),i.setRenderTarget(s),i.render(o,ga),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Ls(t,m,p,3*g,2*g),i.setRenderTarget(t),i.render(o,ga)}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ue("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xr-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Xr;m>Xr&&$t(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xr}`);const p=[];let y=0;for(let A=0;A<Xr;++A){const D=A/g,v=Math.exp(-D*D/2);p.push(v),A===0?y+=v:A<m&&(y+=2*v)}for(let A=0;A<p.length;A++)p[A]=p[A]/y;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;const S=this._sizeLods[i],b=3*S*(i>M-_r?i-M+_r:0),w=4*(this._cubeSize-S);Ls(e,b,w,3*S,2*S),l.setRenderTarget(e),l.render(h,ga)}}function tS(r){const t=[],e=[],n=[];let i=r;const s=r-_r+1+Bf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-_r?l=Bf[a-r+_r-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,y=new Float32Array(g*_*f),M=new Float32Array(m*_*f),S=new Float32Array(p*_*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,D=w>2?0:-1,v=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];y.set(v,g*_*w),M.set(d,m*_*w);const E=[w,w,w,w,w,w];S.set(E,p*_*w)}const b=new Gn;b.setAttribute("position",new Pn(y,g)),b.setAttribute("uv",new Pn(M,m)),b.setAttribute("faceIndex",new Pn(S,p)),n.push(new _i(b,null)),i>_r&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Vf(r,t,e){const n=new Fi(r,t,e);return n.texture.mapping=Il,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function eS(r,t,e){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Fl(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function nS(r,t,e){const n=new Float32Array(Xr),i=new B(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Gf(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fl(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Hf(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iS(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Kc||l===jc,u=l===ss||l===Zs;if(c||u){let h=t.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new kf(r)),h=c?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new kf(r)),h=c?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function rS(r){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ka("WebGLRenderer: "+n+" extension not supported."),i}}}function sS(r,t,e,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let M=0,S=y.length;M<S;M+=3){const b=y[M+0],w=y[M+1],A=y[M+2];d.push(b,w,w,A,A,b)}}else if(_!==void 0){const y=_.array;g=_.version;for(let M=0,S=y.length/3-1;M<S;M+=3){const b=M+0,w=M+1,A=M+2;d.push(b,w,w,A,A,b)}}else return;const m=new(op(d)?pp:dp)(d,1);m.version=g;const p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function aS(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),e.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*a,_),e.update(f,n,_))}function u(d,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function h(d,f,_,g){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,_);let p=0;for(let y=0;y<_;y++)p+=f[y]*g[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function oS(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:ue("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function lS(r,t,e){const n=new WeakMap,i=new Be;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let E=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",E)};var f=E;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),m===!0&&(S=3);let b=o.attributes.position.count*S,w=1;b>t.maxTextureSize&&(w=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*w*4*h),D=new lp(A,b,w,h);D.type=Di,D.needsUpdate=!0;const v=S*4;for(let P=0;P<h;P++){const U=p[P],z=y[P],V=M[P],k=b*w*4*P;for(let G=0;G<U.count;G++){const F=G*v;_===!0&&(i.fromBufferAttribute(U,G),A[k+F+0]=i.x,A[k+F+1]=i.y,A[k+F+2]=i.z,A[k+F+3]=0),g===!0&&(i.fromBufferAttribute(z,G),A[k+F+4]=i.x,A[k+F+5]=i.y,A[k+F+6]=i.z,A[k+F+7]=0),m===!0&&(i.fromBufferAttribute(V,G),A[k+F+8]=i.x,A[k+F+9]=i.y,A[k+F+10]=i.z,A[k+F+11]=V.itemSize===4?i.w:1)}}d={count:h,texture:D,size:new Ct(b,w)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function cS(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const uS={[Xd]:"LINEAR_TONE_MAPPING",[Yd]:"REINHARD_TONE_MAPPING",[qd]:"CINEON_TONE_MAPPING",[$d]:"ACES_FILMIC_TONE_MAPPING",[Jd]:"AGX_TONE_MAPPING",[Kd]:"NEUTRAL_TONE_MAPPING",[Zd]:"CUSTOM_TONE_MAPPING"};function hS(r,t,e,n,i){const s=new Fi(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Fi(t,e,{type:rr,depthBuffer:!1,stencilBuffer:!1}),o=new Gn;o.setAttribute("position",new Dn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Dn([0,2,0,0,2,0],2));const l=new t0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new _i(o,l),u=new Ah(-1,1,1,-1,0,1);let h=null,d=null,f=!1,_,g=null,m=[],p=!1;this.setSize=function(y,M){s.setSize(y,M),a.setSize(y,M);for(let S=0;S<m.length;S++){const b=m[S];b.setSize&&b.setSize(y,M)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;const M=s.width,S=s.height;for(let b=0;b<m.length;b++){const w=m[b];w.setSize&&w.setSize(M,S)}},this.begin=function(y,M){if(f||y.toneMapping===Ni&&m.length===0)return!1;if(g=M,M!==null){const S=M.width,b=M.height;(s.width!==S||s.height!==b)&&this.setSize(S,b)}return p===!1&&y.setRenderTarget(s),_=y.toneMapping,y.toneMapping=Ni,!0},this.hasRenderPass=function(){return p},this.end=function(y,M){y.toneMapping=_,f=!0;let S=s,b=a;for(let w=0;w<m.length;w++){const A=m[w];if(A.enabled!==!1&&(A.render(y,b,S,M),A.needsSwap!==!1)){const D=S;S=b,b=D}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,l.defines={},he.getTransfer(h)===xe&&(l.defines.SRGB_TRANSFER="");const w=uS[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(g),y.render(c,u),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Ip=new vn,Bu=new ja(1,1),Up=new lp,Np=new $_,Fp=new gp,Wf=[],Xf=[],Yf=new Float32Array(16),qf=new Float32Array(9),$f=new Float32Array(4);function la(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Wf[i];if(s===void 0&&(s=new Float32Array(i),Wf[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function je(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Qe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ol(r,t){let e=Xf[t];e===void 0&&(e=new Int32Array(t),Xf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function fS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function dS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2fv(this.addr,t),Qe(e,t)}}function pS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;r.uniform3fv(this.addr,t),Qe(e,t)}}function mS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4fv(this.addr,t),Qe(e,t)}}function _S(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;$f.set(n),r.uniformMatrix2fv(this.addr,!1,$f),Qe(e,n)}}function gS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;qf.set(n),r.uniformMatrix3fv(this.addr,!1,qf),Qe(e,n)}}function vS(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Qe(e,t)}else{if(je(e,n))return;Yf.set(n),r.uniformMatrix4fv(this.addr,!1,Yf),Qe(e,n)}}function xS(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function SS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2iv(this.addr,t),Qe(e,t)}}function MS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;r.uniform3iv(this.addr,t),Qe(e,t)}}function yS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4iv(this.addr,t),Qe(e,t)}}function ES(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function TS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2uiv(this.addr,t),Qe(e,t)}}function bS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;r.uniform3uiv(this.addr,t),Qe(e,t)}}function AS(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4uiv(this.addr,t),Qe(e,t)}}function wS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Bu.compareFunction=e.isReversedDepthBuffer()?vh:gh,s=Bu):s=Ip,e.setTexture2D(t||s,i)}function CS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Np,i)}function RS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Fp,i)}function PS(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Up,i)}function DS(r){switch(r){case 5126:return fS;case 35664:return dS;case 35665:return pS;case 35666:return mS;case 35674:return _S;case 35675:return gS;case 35676:return vS;case 5124:case 35670:return xS;case 35667:case 35671:return SS;case 35668:case 35672:return MS;case 35669:case 35673:return yS;case 5125:return ES;case 36294:return TS;case 36295:return bS;case 36296:return AS;case 35678:case 36198:case 36298:case 36306:case 35682:return wS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return RS;case 36289:case 36303:case 36311:case 36292:return PS}}function LS(r,t){r.uniform1fv(this.addr,t)}function IS(r,t){const e=la(t,this.size,2);r.uniform2fv(this.addr,e)}function US(r,t){const e=la(t,this.size,3);r.uniform3fv(this.addr,e)}function NS(r,t){const e=la(t,this.size,4);r.uniform4fv(this.addr,e)}function FS(r,t){const e=la(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function OS(r,t){const e=la(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function BS(r,t){const e=la(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function zS(r,t){r.uniform1iv(this.addr,t)}function kS(r,t){r.uniform2iv(this.addr,t)}function VS(r,t){r.uniform3iv(this.addr,t)}function GS(r,t){r.uniform4iv(this.addr,t)}function HS(r,t){r.uniform1uiv(this.addr,t)}function WS(r,t){r.uniform2uiv(this.addr,t)}function XS(r,t){r.uniform3uiv(this.addr,t)}function YS(r,t){r.uniform4uiv(this.addr,t)}function qS(r,t,e){const n=this.cache,i=t.length,s=Ol(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Bu:a=Ip;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function $S(r,t,e){const n=this.cache,i=t.length,s=Ol(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Np,s[a])}function ZS(r,t,e){const n=this.cache,i=t.length,s=Ol(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Fp,s[a])}function JS(r,t,e){const n=this.cache,i=t.length,s=Ol(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Qe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Up,s[a])}function KS(r){switch(r){case 5126:return LS;case 35664:return IS;case 35665:return US;case 35666:return NS;case 35674:return FS;case 35675:return OS;case 35676:return BS;case 5124:case 35670:return zS;case 35667:case 35671:return kS;case 35668:case 35672:return VS;case 35669:case 35673:return GS;case 5125:return HS;case 36294:return WS;case 36295:return XS;case 36296:return YS;case 35678:case 36198:case 36298:case 36306:case 35682:return qS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return ZS;case 36289:case 36303:case 36311:case 36292:return JS}}class jS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=DS(e.type)}}class QS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=KS(e.type)}}class tM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function Zf(r,t){r.seq.push(t),r.map[t.id]=t}function eM(r,t,e){const n=r.name,i=n.length;for(Tc.lastIndex=0;;){const s=Tc.exec(n),a=Tc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Zf(e,c===void 0?new jS(o,r,t):new QS(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new tM(o),Zf(e,h)),e=h}}}class ll{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);eM(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Jf(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const nM=37297;let iM=0;function rM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Kf=new Kt;function sM(r){he._getMatrix(Kf,he.workingColorSpace,r);const t=`mat3( ${Kf.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case vl:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function jf(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+rM(r.getShaderSource(t),o)}else return s}function aM(r,t){const e=sM(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const oM={[Xd]:"Linear",[Yd]:"Reinhard",[qd]:"Cineon",[$d]:"ACESFilmic",[Jd]:"AgX",[Kd]:"Neutral",[Zd]:"Custom"};function lM(r,t){const e=oM[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ho=new B;function cM(){he.getLuminanceCoefficients(Ho);const r=Ho.x.toFixed(4),t=Ho.y.toFixed(4),e=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ta).join(`
`)}function hM(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fM(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Ta(r){return r!==""}function Qf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function td(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dM=/^[ \t]*#include +<([\w\d./]+)>/gm;function zu(r){return r.replace(dM,mM)}const pM=new Map;function mM(r,t){let e=jt[t];if(e===void 0){const n=pM.get(t);if(n!==void 0)e=jt[n],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return zu(e)}const _M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(r){return r.replace(_M,gM)}function gM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nd(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const vM={[il]:"SHADOWMAP_TYPE_PCF",[ya]:"SHADOWMAP_TYPE_VSM"};function xM(r){return vM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const SM={[ss]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[Il]:"ENVMAP_TYPE_CUBE_UV"};function MM(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":SM[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const yM={[Zs]:"ENVMAP_MODE_REFRACTION"};function EM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":yM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const TM={[Wd]:"ENVMAP_BLENDING_MULTIPLY",[R_]:"ENVMAP_BLENDING_MIX",[P_]:"ENVMAP_BLENDING_ADD"};function bM(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":TM[r.combine]||"ENVMAP_BLENDING_NONE"}function AM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function wM(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=xM(e),c=MM(e),u=EM(e),h=bM(e),d=AM(e),f=uM(e),_=hM(s),g=i.createProgram();let m,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ta).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Ta).join(`
`),p.length>0&&(p+=`
`)):(m=[nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ta).join(`
`),p=[nd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?jt.tonemapping_pars_fragment:"",e.toneMapping!==Ni?lM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,aM("linearToOutputTexel",e.outputColorSpace),cM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ta).join(`
`)),a=zu(a),a=Qf(a,e),a=td(a,e),o=zu(o),o=Qf(o,e),o=td(o,e),a=ed(a),o=ed(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===rf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+a,S=y+p+o,b=Jf(i,i.VERTEX_SHADER,M),w=Jf(i,i.FRAGMENT_SHADER,S);i.attachShader(g,b),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(P){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(g)||"",z=i.getShaderInfoLog(b)||"",V=i.getShaderInfoLog(w)||"",k=U.trim(),G=z.trim(),F=V.trim();let q=!0,tt=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,b,w);else{const R=jf(i,b,"vertex"),et=jf(i,w,"fragment");ue("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+R+`
`+et)}else k!==""?$t("WebGLProgram: Program Info Log:",k):(G===""||F==="")&&(tt=!1);tt&&(P.diagnostics={runnable:q,programLog:k,vertexShader:{log:G,prefix:m},fragmentShader:{log:F,prefix:p}})}i.deleteShader(b),i.deleteShader(w),D=new ll(i,g),v=fM(i,g)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let v;this.getAttributes=function(){return v===void 0&&A(this),v};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(g,nM)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=iM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=w,this}let CM=0;class RM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new PM(t),e.set(t,n)),n}}class PM{constructor(t){this.id=CM++,this.code=t,this.usedTimes=0}}function DM(r,t,e,n,i,s,a){const o=new up,l=new RM,c=new Set,u=[],h=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,E,P,U,z){const V=U.fog,k=z.geometry,G=v.isMeshStandardMaterial?U.environment:null,F=(v.isMeshStandardMaterial?e:t).get(v.envMap||G),q=F&&F.mapping===Il?F.image.height:null,tt=_[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&$t("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const R=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=R!==void 0?R.length:0;let Lt=0;k.morphAttributes.position!==void 0&&(Lt=1),k.morphAttributes.normal!==void 0&&(Lt=2),k.morphAttributes.color!==void 0&&(Lt=3);let Nt,zt,Yt,J;if(tt){const _t=wi[tt];Nt=_t.vertexShader,zt=_t.fragmentShader}else Nt=v.vertexShader,zt=v.fragmentShader,l.update(v),Yt=l.getVertexShaderID(v),J=l.getFragmentShaderID(v);const $=r.getRenderTarget(),st=r.state.buffers.depth.getReversed(),Rt=z.isInstancedMesh===!0,xt=z.isBatchedMesh===!0,Vt=!!v.map,oe=!!v.matcap,Tt=!!F,kt=!!v.aoMap,Zt=!!v.lightMap,Ft=!!v.bumpMap,W=!!v.normalMap,I=!!v.displacementMap,me=!!v.emissiveMap,Qt=!!v.metalnessMap,Gt=!!v.roughnessMap,Mt=v.anisotropy>0,C=v.clearcoat>0,x=v.dispersion>0,N=v.iridescence>0,K=v.sheen>0,j=v.transmission>0,Z=Mt&&!!v.anisotropyMap,St=C&&!!v.clearcoatMap,at=C&&!!v.clearcoatNormalMap,bt=C&&!!v.clearcoatRoughnessMap,Et=N&&!!v.iridescenceMap,rt=N&&!!v.iridescenceThicknessMap,ot=K&&!!v.sheenColorMap,yt=K&&!!v.sheenRoughnessMap,At=!!v.specularMap,lt=!!v.specularColorMap,Wt=!!v.specularIntensityMap,L=j&&!!v.transmissionMap,ht=j&&!!v.thicknessMap,it=!!v.gradientMap,ft=!!v.alphaMap,nt=v.alphaTest>0,Q=!!v.alphaHash,ut=!!v.extensions;let Ut=Ni;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const fe={shaderID:tt,shaderType:v.type,shaderName:v.name,vertexShader:Nt,fragmentShader:zt,defines:v.defines,customVertexShaderID:Yt,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:xt,batchingColor:xt&&z._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&z.instanceColor!==null,instancingMorph:Rt&&z.morphTexture!==null,outputColorSpace:$===null?r.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ks,alphaToCoverage:!!v.alphaToCoverage,map:Vt,matcap:oe,envMap:Tt,envMapMode:Tt&&F.mapping,envMapCubeUVHeight:q,aoMap:kt,lightMap:Zt,bumpMap:Ft,normalMap:W,displacementMap:I,emissiveMap:me,normalMapObjectSpace:W&&v.normalMapType===I_,normalMapTangentSpace:W&&v.normalMapType===ap,metalnessMap:Qt,roughnessMap:Gt,anisotropy:Mt,anisotropyMap:Z,clearcoat:C,clearcoatMap:St,clearcoatNormalMap:at,clearcoatRoughnessMap:bt,dispersion:x,iridescence:N,iridescenceMap:Et,iridescenceThicknessMap:rt,sheen:K,sheenColorMap:ot,sheenRoughnessMap:yt,specularMap:At,specularColorMap:lt,specularIntensityMap:Wt,transmission:j,transmissionMap:L,thicknessMap:ht,gradientMap:it,opaque:v.transparent===!1&&v.blending===Kr&&v.alphaToCoverage===!1,alphaMap:ft,alphaTest:nt,alphaHash:Q,combine:v.combine,mapUv:Vt&&g(v.map.channel),aoMapUv:kt&&g(v.aoMap.channel),lightMapUv:Zt&&g(v.lightMap.channel),bumpMapUv:Ft&&g(v.bumpMap.channel),normalMapUv:W&&g(v.normalMap.channel),displacementMapUv:I&&g(v.displacementMap.channel),emissiveMapUv:me&&g(v.emissiveMap.channel),metalnessMapUv:Qt&&g(v.metalnessMap.channel),roughnessMapUv:Gt&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:St&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Et&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:yt&&g(v.sheenRoughnessMap.channel),specularMapUv:At&&g(v.specularMap.channel),specularColorMapUv:lt&&g(v.specularColorMap.channel),specularIntensityMapUv:Wt&&g(v.specularIntensityMap.channel),transmissionMapUv:L&&g(v.transmissionMap.channel),thicknessMapUv:ht&&g(v.thicknessMap.channel),alphaMapUv:ft&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(W||Mt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!k.attributes.uv&&(Vt||ft),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:st,skinning:z.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Lt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Vt&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===xe,decodeVideoTextureEmissive:me&&v.emissiveMap.isVideoTexture===!0&&he.getTransfer(v.emissiveMap.colorSpace)===xe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ci,flipSided:v.side===Fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ut&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&v.extensions.multiDraw===!0||xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)E.push(P),E.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(y(E,v),M(E,v),E.push(r.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function y(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),v.push(o.mask)}function S(v){const E=_[v.type];let P;if(E){const U=wi[E];P=og.clone(U.uniforms)}else P=v.uniforms;return P}function b(v,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new wM(r,E,v,s),u.push(P),h.set(E,P)),P}function w(v){if(--v.usedTimes===0){const E=u.indexOf(v);u[E]=u[u.length-1],u.pop(),h.delete(v.cacheKey),v.destroy()}}function A(v){l.remove(v)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:b,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:D}}function LM(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function IM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function id(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function rd(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,d,f,_,g,m){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},r[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),t++,p}function o(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,d){e.length>1&&e.sort(h||IM),n.length>1&&n.sort(d||id),i.length>1&&i.sort(d||id)}function u(){for(let h=t,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function UM(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new rd,r.set(n,[a])):i>=s.length?(a=new rd,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function NM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new le};break;case"SpotLight":e={position:new B,direction:new B,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new B,halfWidth:new B,halfHeight:new B};break}return r[t.id]=e,e}}}function FM(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let OM=0;function BM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function zM(r){const t=new NM,e=FM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new Pe,a=new Pe;function o(c){let u=0,h=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,y=0,M=0,S=0,b=0,w=0,A=0;c.sort(BM);for(let v=0,E=c.length;v<E;v++){const P=c[v],U=P.color,z=P.intensity,V=P.distance;let k=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Js?k=P.shadow.map.texture:k=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=U.r*z,h+=U.g*z,d+=U.b*z;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],z);A++}else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const F=P.shadow,q=e.get(P);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=k,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=G,f++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(U).multiplyScalar(z),G.distance=V,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[g]=G;const F=P.shadow;if(P.map&&(n.spotLightMap[b]=P.map,b++,F.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=F.matrix,P.castShadow){const q=e.get(P);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,n.spotShadow[g]=q,n.spotShadowMap[g]=k,S++}g++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(U).multiplyScalar(z),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const F=P.shadow,q=e.get(P);q.shadowIntensity=F.intensity,q.shadowBias=F.bias,q.shadowNormalBias=F.normalBias,q.shadowRadius=F.radius,q.shadowMapSize=F.mapSize,q.shadowCameraNear=F.camera.near,q.shadowCameraFar=F.camera.far,n.pointShadow[_]=q,n.pointShadowMap[_]=k,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=G,_++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(z),G.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[p]=G,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==y||D.numPointShadows!==M||D.numSpotShadows!==S||D.numSpotMaps!==b||D.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+b-w,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,D.directionalLength=f,D.pointLength=_,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=y,D.numPointShadows=M,D.numSpotShadows=S,D.numSpotMaps=b,D.numLightProbes=A,n.version=OM++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),h++}else if(M.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function sd(r){const t=new zM(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function kM(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new sd(r),t.set(i,[o])):s>=a.length?(o=new sd(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const VM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GM=`uniform sampler2D shadow_pass;
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
}`,HM=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],WM=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],ad=new Pe,va=new B,bc=new B;function XM(r,t,e){let n=new Sh;const i=new Ct,s=new Ct,a=new Be,o=new e0,l=new n0,c={},u=e.maxTextureSize,h={[br]:Fn,[Fn]:br,[Ci]:Ci},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:VM,fragmentShader:GM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Gn;_.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new _i(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=il;let p=this.type;this.render=function(w,A,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;w.type===u_&&($t("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=il);const v=r.getRenderTarget(),E=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),U=r.state;U.setBlending(tr),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=p!==this.type;z&&A.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(k=>k.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,k=w.length;V<k;V++){const G=w[V],F=G.shadow;if(F===void 0){$t("WebGLShadowMap:",G,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);const q=F.getFrameExtents();if(i.multiply(q),s.copy(F.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,F.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,F.mapSize.y=s.y)),F.map===null||z===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ya){if(G.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Fi(i.x,i.y,{format:Js,type:rr,minFilter:gn,magFilter:gn,generateMipmaps:!1}),F.map.texture.name=G.name+".shadowMap",F.map.depthTexture=new ja(i.x,i.y,Di),F.map.depthTexture.name=G.name+".shadowMapDepth",F.map.depthTexture.format=sr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=on,F.map.depthTexture.magFilter=on}else{G.isPointLight?(F.map=new vp(i.x),F.map.depthTexture=new Mg(i.x,Bi)):(F.map=new Fi(i.x,i.y),F.map.depthTexture=new ja(i.x,i.y,Bi)),F.map.depthTexture.name=G.name+".shadowMap",F.map.depthTexture.format=sr;const R=r.state.buffers.depth.getReversed();this.type===il?(F.map.depthTexture.compareFunction=R?vh:gh,F.map.depthTexture.minFilter=gn,F.map.depthTexture.magFilter=gn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=on,F.map.depthTexture.magFilter=on)}F.camera.updateProjectionMatrix()}const tt=F.map.isWebGLCubeRenderTarget?6:1;for(let R=0;R<tt;R++){if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,R),r.clear();else{R===0&&(r.setRenderTarget(F.map),r.clear());const et=F.getViewport(R);a.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),U.viewport(a)}if(G.isPointLight){const et=F.camera,Lt=F.matrix,Nt=G.distance||et.far;Nt!==et.far&&(et.far=Nt,et.updateProjectionMatrix()),va.setFromMatrixPosition(G.matrixWorld),et.position.copy(va),bc.copy(et.position),bc.add(HM[R]),et.up.copy(WM[R]),et.lookAt(bc),et.updateMatrixWorld(),Lt.makeTranslation(-va.x,-va.y,-va.z),ad.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),F._frustum.setFromProjectionMatrix(ad,et.coordinateSystem,et.reversedDepth)}else F.updateMatrices(G);n=F.getFrustum(),S(A,D,F.camera,G,this.type)}F.isPointLightShadow!==!0&&this.type===ya&&y(F,D),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,E,P)};function y(w,A){const D=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fi(i.x,i.y,{format:Js,type:rr})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,D,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,D,f,g,null)}function M(w,A,D,v){let E=null;const P=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)E=P;else if(E=D.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const U=E.uuid,z=A.uuid;let V=c[U];V===void 0&&(V={},c[U]=V);let k=V[z];k===void 0&&(k=E.clone(),V[z]=k,A.addEventListener("dispose",b)),E=k}if(E.visible=A.visible,E.wireframe=A.wireframe,v===ya?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:h[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=r.properties.get(E);U.light=D}return E}function S(w,A,D,v,E){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===ya)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const z=t.update(w),V=w.material;if(Array.isArray(V)){const k=z.groups;for(let G=0,F=k.length;G<F;G++){const q=k[G],tt=V[q.materialIndex];if(tt&&tt.visible){const R=M(w,tt,v,E);w.onBeforeShadow(r,w,A,D,z,R,q),r.renderBufferDirect(D,null,z,R,w,q),w.onAfterShadow(r,w,A,D,z,R,q)}}}else if(V.visible){const k=M(w,V,v,E);w.onBeforeShadow(r,w,A,D,z,k,null),r.renderBufferDirect(D,null,z,k,w,null),w.onAfterShadow(r,w,A,D,z,k,null)}}const U=w.children;for(let z=0,V=U.length;z<V;z++)S(U[z],A,D,v,E)}function b(w){w.target.removeEventListener("dispose",b);for(const D in c){const v=c[D],E=w.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}const YM={[Wc]:Xc,[Yc]:Zc,[qc]:Jc,[$s]:$c,[Xc]:Wc,[Zc]:Yc,[Jc]:qc,[$c]:$s};function qM(r,t){function e(){let L=!1;const ht=new Be;let it=null;const ft=new Be(0,0,0,0);return{setMask:function(nt){it!==nt&&!L&&(r.colorMask(nt,nt,nt,nt),it=nt)},setLocked:function(nt){L=nt},setClear:function(nt,Q,ut,Ut,fe){fe===!0&&(nt*=Ut,Q*=Ut,ut*=Ut),ht.set(nt,Q,ut,Ut),ft.equals(ht)===!1&&(r.clearColor(nt,Q,ut,Ut),ft.copy(ht))},reset:function(){L=!1,it=null,ft.set(-1,0,0,0)}}}function n(){let L=!1,ht=!1,it=null,ft=null,nt=null;return{setReversed:function(Q){if(ht!==Q){const ut=t.get("EXT_clip_control");Q?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT),ht=Q;const Ut=nt;nt=null,this.setClear(Ut)}},getReversed:function(){return ht},setTest:function(Q){Q?$(r.DEPTH_TEST):st(r.DEPTH_TEST)},setMask:function(Q){it!==Q&&!L&&(r.depthMask(Q),it=Q)},setFunc:function(Q){if(ht&&(Q=YM[Q]),ft!==Q){switch(Q){case Wc:r.depthFunc(r.NEVER);break;case Xc:r.depthFunc(r.ALWAYS);break;case Yc:r.depthFunc(r.LESS);break;case $s:r.depthFunc(r.LEQUAL);break;case qc:r.depthFunc(r.EQUAL);break;case $c:r.depthFunc(r.GEQUAL);break;case Zc:r.depthFunc(r.GREATER);break;case Jc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ft=Q}},setLocked:function(Q){L=Q},setClear:function(Q){nt!==Q&&(ht&&(Q=1-Q),r.clearDepth(Q),nt=Q)},reset:function(){L=!1,it=null,ft=null,nt=null,ht=!1}}}function i(){let L=!1,ht=null,it=null,ft=null,nt=null,Q=null,ut=null,Ut=null,fe=null;return{setTest:function(_t){L||(_t?$(r.STENCIL_TEST):st(r.STENCIL_TEST))},setMask:function(_t){ht!==_t&&!L&&(r.stencilMask(_t),ht=_t)},setFunc:function(_t,Pt,Jt){(it!==_t||ft!==Pt||nt!==Jt)&&(r.stencilFunc(_t,Pt,Jt),it=_t,ft=Pt,nt=Jt)},setOp:function(_t,Pt,Jt){(Q!==_t||ut!==Pt||Ut!==Jt)&&(r.stencilOp(_t,Pt,Jt),Q=_t,ut=Pt,Ut=Jt)},setLocked:function(_t){L=_t},setClear:function(_t){fe!==_t&&(r.clearStencil(_t),fe=_t)},reset:function(){L=!1,ht=null,it=null,ft=null,nt=null,Q=null,ut=null,Ut=null,fe=null}}}const s=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,M=null,S=null,b=null,w=null,A=new le(0,0,0),D=0,v=!1,E=null,P=null,U=null,z=null,V=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,F=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=F>=1):q.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=F>=2);let tt=null,R={};const et=r.getParameter(r.SCISSOR_BOX),Lt=r.getParameter(r.VIEWPORT),Nt=new Be().fromArray(et),zt=new Be().fromArray(Lt);function Yt(L,ht,it,ft){const nt=new Uint8Array(4),Q=r.createTexture();r.bindTexture(L,Q),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ut=0;ut<it;ut++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ht,0,r.RGBA,1,1,ft,0,r.RGBA,r.UNSIGNED_BYTE,nt):r.texImage2D(ht+ut,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,nt);return Q}const J={};J[r.TEXTURE_2D]=Yt(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=Yt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=Yt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=Yt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(r.DEPTH_TEST),a.setFunc($s),Ft(!1),W(Qh),$(r.CULL_FACE),kt(tr);function $(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function st(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function Rt(L,ht){return h[L]!==ht?(r.bindFramebuffer(L,ht),h[L]=ht,L===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ht),L===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ht),!0):!1}function xt(L,ht){let it=f,ft=!1;if(L){it=d.get(ht),it===void 0&&(it=[],d.set(ht,it));const nt=L.textures;if(it.length!==nt.length||it[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,ut=nt.length;Q<ut;Q++)it[Q]=r.COLOR_ATTACHMENT0+Q;it.length=nt.length,ft=!0}}else it[0]!==r.BACK&&(it[0]=r.BACK,ft=!0);ft&&r.drawBuffers(it)}function Vt(L){return _!==L?(r.useProgram(L),_=L,!0):!1}const oe={[Wr]:r.FUNC_ADD,[f_]:r.FUNC_SUBTRACT,[d_]:r.FUNC_REVERSE_SUBTRACT};oe[p_]=r.MIN,oe[m_]=r.MAX;const Tt={[__]:r.ZERO,[g_]:r.ONE,[v_]:r.SRC_COLOR,[Gc]:r.SRC_ALPHA,[T_]:r.SRC_ALPHA_SATURATE,[y_]:r.DST_COLOR,[S_]:r.DST_ALPHA,[x_]:r.ONE_MINUS_SRC_COLOR,[Hc]:r.ONE_MINUS_SRC_ALPHA,[E_]:r.ONE_MINUS_DST_COLOR,[M_]:r.ONE_MINUS_DST_ALPHA,[b_]:r.CONSTANT_COLOR,[A_]:r.ONE_MINUS_CONSTANT_COLOR,[w_]:r.CONSTANT_ALPHA,[C_]:r.ONE_MINUS_CONSTANT_ALPHA};function kt(L,ht,it,ft,nt,Q,ut,Ut,fe,_t){if(L===tr){g===!0&&(st(r.BLEND),g=!1);return}if(g===!1&&($(r.BLEND),g=!0),L!==h_){if(L!==m||_t!==v){if((p!==Wr||S!==Wr)&&(r.blendEquation(r.FUNC_ADD),p=Wr,S=Wr),_t)switch(L){case Kr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vc:r.blendFunc(r.ONE,r.ONE);break;case tf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ef:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:ue("WebGLState: Invalid blending: ",L);break}else switch(L){case Kr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Vc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case tf:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ef:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",L);break}y=null,M=null,b=null,w=null,A.set(0,0,0),D=0,m=L,v=_t}return}nt=nt||ht,Q=Q||it,ut=ut||ft,(ht!==p||nt!==S)&&(r.blendEquationSeparate(oe[ht],oe[nt]),p=ht,S=nt),(it!==y||ft!==M||Q!==b||ut!==w)&&(r.blendFuncSeparate(Tt[it],Tt[ft],Tt[Q],Tt[ut]),y=it,M=ft,b=Q,w=ut),(Ut.equals(A)===!1||fe!==D)&&(r.blendColor(Ut.r,Ut.g,Ut.b,fe),A.copy(Ut),D=fe),m=L,v=!1}function Zt(L,ht){L.side===Ci?st(r.CULL_FACE):$(r.CULL_FACE);let it=L.side===Fn;ht&&(it=!it),Ft(it),L.blending===Kr&&L.transparent===!1?kt(tr):kt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ft=L.stencilWrite;o.setTest(ft),ft&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(r.SAMPLE_ALPHA_TO_COVERAGE):st(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(L){E!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),E=L)}function W(L){L!==l_?($(r.CULL_FACE),L!==P&&(L===Qh?r.cullFace(r.BACK):L===c_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):st(r.CULL_FACE),P=L}function I(L){L!==U&&(G&&r.lineWidth(L),U=L)}function me(L,ht,it){L?($(r.POLYGON_OFFSET_FILL),(z!==ht||V!==it)&&(r.polygonOffset(ht,it),z=ht,V=it)):st(r.POLYGON_OFFSET_FILL)}function Qt(L){L?$(r.SCISSOR_TEST):st(r.SCISSOR_TEST)}function Gt(L){L===void 0&&(L=r.TEXTURE0+k-1),tt!==L&&(r.activeTexture(L),tt=L)}function Mt(L,ht,it){it===void 0&&(tt===null?it=r.TEXTURE0+k-1:it=tt);let ft=R[it];ft===void 0&&(ft={type:void 0,texture:void 0},R[it]=ft),(ft.type!==L||ft.texture!==ht)&&(tt!==it&&(r.activeTexture(it),tt=it),r.bindTexture(L,ht||J[L]),ft.type=L,ft.texture=ht)}function C(){const L=R[tt];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(L){ue("WebGLState:",L)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(L){ue("WebGLState:",L)}}function K(){try{r.texSubImage2D(...arguments)}catch(L){ue("WebGLState:",L)}}function j(){try{r.texSubImage3D(...arguments)}catch(L){ue("WebGLState:",L)}}function Z(){try{r.compressedTexSubImage2D(...arguments)}catch(L){ue("WebGLState:",L)}}function St(){try{r.compressedTexSubImage3D(...arguments)}catch(L){ue("WebGLState:",L)}}function at(){try{r.texStorage2D(...arguments)}catch(L){ue("WebGLState:",L)}}function bt(){try{r.texStorage3D(...arguments)}catch(L){ue("WebGLState:",L)}}function Et(){try{r.texImage2D(...arguments)}catch(L){ue("WebGLState:",L)}}function rt(){try{r.texImage3D(...arguments)}catch(L){ue("WebGLState:",L)}}function ot(L){Nt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Nt.copy(L))}function yt(L){zt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),zt.copy(L))}function At(L,ht){let it=c.get(ht);it===void 0&&(it=new WeakMap,c.set(ht,it));let ft=it.get(L);ft===void 0&&(ft=r.getUniformBlockIndex(ht,L.name),it.set(L,ft))}function lt(L,ht){const ft=c.get(ht).get(L);l.get(ht)!==ft&&(r.uniformBlockBinding(ht,ft,L.__bindingPointIndex),l.set(ht,ft))}function Wt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},tt=null,R={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,y=null,M=null,S=null,b=null,w=null,A=new le(0,0,0),D=0,v=!1,E=null,P=null,U=null,z=null,V=null,Nt.set(0,0,r.canvas.width,r.canvas.height),zt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:st,bindFramebuffer:Rt,drawBuffers:xt,useProgram:Vt,setBlending:kt,setMaterial:Zt,setFlipSided:Ft,setCullFace:W,setLineWidth:I,setPolygonOffset:me,setScissorTest:Qt,activeTexture:Gt,bindTexture:Mt,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Et,texImage3D:rt,updateUBOMapping:At,uniformBlockBinding:lt,texStorage2D:at,texStorage3D:bt,texSubImage2D:K,texSubImage3D:j,compressedTexSubImage2D:Z,compressedTexSubImage3D:St,scissor:ot,viewport:yt,reset:Wt}}function $M(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,x){return f?new OffscreenCanvas(C,x):Ja("canvas")}function g(C,x,N){let K=1;const j=Mt(C);if((j.width>N||j.height>N)&&(K=N/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(K*j.width),St=Math.floor(K*j.height);h===void 0&&(h=_(Z,St));const at=x?_(Z,St):h;return at.width=Z,at.height=St,at.getContext("2d").drawImage(C,0,0,Z,St),$t("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Z+"x"+St+")."),at}else return"data"in C&&$t("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,x,N,K,j=!1){if(C!==null){if(r[C]!==void 0)return r[C];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=x;if(x===r.RED&&(N===r.FLOAT&&(Z=r.R32F),N===r.HALF_FLOAT&&(Z=r.R16F),N===r.UNSIGNED_BYTE&&(Z=r.R8)),x===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(Z=r.R8UI),N===r.UNSIGNED_SHORT&&(Z=r.R16UI),N===r.UNSIGNED_INT&&(Z=r.R32UI),N===r.BYTE&&(Z=r.R8I),N===r.SHORT&&(Z=r.R16I),N===r.INT&&(Z=r.R32I)),x===r.RG&&(N===r.FLOAT&&(Z=r.RG32F),N===r.HALF_FLOAT&&(Z=r.RG16F),N===r.UNSIGNED_BYTE&&(Z=r.RG8)),x===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&(Z=r.RG8UI),N===r.UNSIGNED_SHORT&&(Z=r.RG16UI),N===r.UNSIGNED_INT&&(Z=r.RG32UI),N===r.BYTE&&(Z=r.RG8I),N===r.SHORT&&(Z=r.RG16I),N===r.INT&&(Z=r.RG32I)),x===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),N===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),N===r.UNSIGNED_INT&&(Z=r.RGB32UI),N===r.BYTE&&(Z=r.RGB8I),N===r.SHORT&&(Z=r.RGB16I),N===r.INT&&(Z=r.RGB32I)),x===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),N===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),N===r.UNSIGNED_INT&&(Z=r.RGBA32UI),N===r.BYTE&&(Z=r.RGBA8I),N===r.SHORT&&(Z=r.RGBA16I),N===r.INT&&(Z=r.RGBA32I)),x===r.RGB&&(N===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&(Z=r.R11F_G11F_B10F)),x===r.RGBA){const St=j?vl:he.getTransfer(K);N===r.FLOAT&&(Z=r.RGBA32F),N===r.HALF_FLOAT&&(Z=r.RGBA16F),N===r.UNSIGNED_BYTE&&(Z=St===xe?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function S(C,x){let N;return C?x===null||x===Bi||x===Za?N=r.DEPTH24_STENCIL8:x===Di?N=r.DEPTH32F_STENCIL8:x===$a&&(N=r.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Bi||x===Za?N=r.DEPTH_COMPONENT24:x===Di?N=r.DEPTH_COMPONENT32F:x===$a&&(N=r.DEPTH_COMPONENT16),N}function b(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==on&&C.minFilter!==gn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function w(C){const x=C.target;x.removeEventListener("dispose",w),D(x),x.isVideoTexture&&u.delete(x)}function A(C){const x=C.target;x.removeEventListener("dispose",A),E(x)}function D(C){const x=n.get(C);if(x.__webglInit===void 0)return;const N=C.source,K=d.get(N);if(K){const j=K[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(C),Object.keys(K).length===0&&d.delete(N)}n.remove(C)}function v(C){const x=n.get(C);r.deleteTexture(x.__webglTexture);const N=C.source,K=d.get(N);delete K[x.__cacheKey],a.memory.textures--}function E(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let j=0;j<x.__webglFramebuffer[K].length;j++)r.deleteFramebuffer(x.__webglFramebuffer[K][j]);else r.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)r.deleteFramebuffer(x.__webglFramebuffer[K]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=C.textures;for(let K=0,j=N.length;K<j;K++){const Z=n.get(N[K]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(N[K])}n.remove(C)}let P=0;function U(){P=0}function z(){const C=P;return C>=i.maxTextures&&$t("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function V(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function k(C,x){const N=n.get(C);if(C.isVideoTexture&&Qt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const K=C.image;if(K===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{J(N,C,x);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+x)}function G(C,x){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){J(N,C,x);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+x)}function F(C,x){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){J(N,C,x);return}e.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+x)}function q(C,x){const N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){$(N,C,x);return}e.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+x)}const tt={[Qc]:r.REPEAT,[ji]:r.CLAMP_TO_EDGE,[tu]:r.MIRRORED_REPEAT},R={[on]:r.NEAREST,[D_]:r.NEAREST_MIPMAP_NEAREST,[_o]:r.NEAREST_MIPMAP_LINEAR,[gn]:r.LINEAR,[Hl]:r.LINEAR_MIPMAP_NEAREST,[Yr]:r.LINEAR_MIPMAP_LINEAR},et={[U_]:r.NEVER,[z_]:r.ALWAYS,[N_]:r.LESS,[gh]:r.LEQUAL,[F_]:r.EQUAL,[vh]:r.GEQUAL,[O_]:r.GREATER,[B_]:r.NOTEQUAL};function Lt(C,x){if(x.type===Di&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===gn||x.magFilter===Hl||x.magFilter===_o||x.magFilter===Yr||x.minFilter===gn||x.minFilter===Hl||x.minFilter===_o||x.minFilter===Yr)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,tt[x.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,tt[x.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,tt[x.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,R[x.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,R[x.minFilter]),x.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,et[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===on||x.minFilter!==_o&&x.minFilter!==Yr||x.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Nt(C,x){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",w));const K=x.source;let j=d.get(K);j===void 0&&(j={},d.set(K,j));const Z=V(x);if(Z!==C.__cacheKey){j[Z]===void 0&&(j[Z]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),j[Z].usedTimes++;const St=j[C.__cacheKey];St!==void 0&&(j[C.__cacheKey].usedTimes--,St.usedTimes===0&&v(x)),C.__cacheKey=Z,C.__webglTexture=j[Z].texture}return N}function zt(C,x,N){return Math.floor(Math.floor(C/N)/x)}function Yt(C,x,N,K){const Z=C.updateRanges;if(Z.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,N,K,x.data);else{Z.sort((rt,ot)=>rt.start-ot.start);let St=0;for(let rt=1;rt<Z.length;rt++){const ot=Z[St],yt=Z[rt],At=ot.start+ot.count,lt=zt(yt.start,x.width,4),Wt=zt(ot.start,x.width,4);yt.start<=At+1&&lt===Wt&&zt(yt.start+yt.count-1,x.width,4)===lt?ot.count=Math.max(ot.count,yt.start+yt.count-ot.start):(++St,Z[St]=yt)}Z.length=St+1;const at=r.getParameter(r.UNPACK_ROW_LENGTH),bt=r.getParameter(r.UNPACK_SKIP_PIXELS),Et=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let rt=0,ot=Z.length;rt<ot;rt++){const yt=Z[rt],At=Math.floor(yt.start/4),lt=Math.ceil(yt.count/4),Wt=At%x.width,L=Math.floor(At/x.width),ht=lt,it=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Wt),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),e.texSubImage2D(r.TEXTURE_2D,0,Wt,L,ht,it,N,K,x.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,at),r.pixelStorei(r.UNPACK_SKIP_PIXELS,bt),r.pixelStorei(r.UNPACK_SKIP_ROWS,Et)}}function J(C,x,N){let K=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=r.TEXTURE_3D);const j=Nt(C,x),Z=x.source;e.bindTexture(K,C.__webglTexture,r.TEXTURE0+N);const St=n.get(Z);if(Z.version!==St.__version||j===!0){e.activeTexture(r.TEXTURE0+N);const at=he.getPrimaries(he.workingColorSpace),bt=x.colorSpace===mr?null:he.getPrimaries(x.colorSpace),Et=x.colorSpace===mr||at===bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let rt=g(x.image,!1,i.maxTextureSize);rt=Gt(x,rt);const ot=s.convert(x.format,x.colorSpace),yt=s.convert(x.type);let At=M(x.internalFormat,ot,yt,x.colorSpace,x.isVideoTexture);Lt(K,x);let lt;const Wt=x.mipmaps,L=x.isVideoTexture!==!0,ht=St.__version===void 0||j===!0,it=Z.dataReady,ft=b(x,rt);if(x.isDepthTexture)At=S(x.format===qr,x.type),ht&&(L?e.texStorage2D(r.TEXTURE_2D,1,At,rt.width,rt.height):e.texImage2D(r.TEXTURE_2D,0,At,rt.width,rt.height,0,ot,yt,null));else if(x.isDataTexture)if(Wt.length>0){L&&ht&&e.texStorage2D(r.TEXTURE_2D,ft,At,Wt[0].width,Wt[0].height);for(let nt=0,Q=Wt.length;nt<Q;nt++)lt=Wt[nt],L?it&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,lt.width,lt.height,ot,yt,lt.data):e.texImage2D(r.TEXTURE_2D,nt,At,lt.width,lt.height,0,ot,yt,lt.data);x.generateMipmaps=!1}else L?(ht&&e.texStorage2D(r.TEXTURE_2D,ft,At,rt.width,rt.height),it&&Yt(x,rt,ot,yt)):e.texImage2D(r.TEXTURE_2D,0,At,rt.width,rt.height,0,ot,yt,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&ht&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,At,Wt[0].width,Wt[0].height,rt.depth);for(let nt=0,Q=Wt.length;nt<Q;nt++)if(lt=Wt[nt],x.format!==yi)if(ot!==null)if(L){if(it)if(x.layerUpdates.size>0){const ut=Of(lt.width,lt.height,x.format,x.type);for(const Ut of x.layerUpdates){const fe=lt.data.subarray(Ut*ut/lt.data.BYTES_PER_ELEMENT,(Ut+1)*ut/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,Ut,lt.width,lt.height,1,ot,fe)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,lt.width,lt.height,rt.depth,ot,lt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,At,lt.width,lt.height,rt.depth,0,lt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?it&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,lt.width,lt.height,rt.depth,ot,yt,lt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,At,lt.width,lt.height,rt.depth,0,ot,yt,lt.data)}else{L&&ht&&e.texStorage2D(r.TEXTURE_2D,ft,At,Wt[0].width,Wt[0].height);for(let nt=0,Q=Wt.length;nt<Q;nt++)lt=Wt[nt],x.format!==yi?ot!==null?L?it&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,lt.width,lt.height,ot,lt.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,At,lt.width,lt.height,0,lt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?it&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,lt.width,lt.height,ot,yt,lt.data):e.texImage2D(r.TEXTURE_2D,nt,At,lt.width,lt.height,0,ot,yt,lt.data)}else if(x.isDataArrayTexture)if(L){if(ht&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ft,At,rt.width,rt.height,rt.depth),it)if(x.layerUpdates.size>0){const nt=Of(rt.width,rt.height,x.format,x.type);for(const Q of x.layerUpdates){const ut=rt.data.subarray(Q*nt/rt.data.BYTES_PER_ELEMENT,(Q+1)*nt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,ot,yt,ut)}x.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ot,yt,rt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,At,rt.width,rt.height,rt.depth,0,ot,yt,rt.data);else if(x.isData3DTexture)L?(ht&&e.texStorage3D(r.TEXTURE_3D,ft,At,rt.width,rt.height,rt.depth),it&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ot,yt,rt.data)):e.texImage3D(r.TEXTURE_3D,0,At,rt.width,rt.height,rt.depth,0,ot,yt,rt.data);else if(x.isFramebufferTexture){if(ht)if(L)e.texStorage2D(r.TEXTURE_2D,ft,At,rt.width,rt.height);else{let nt=rt.width,Q=rt.height;for(let ut=0;ut<ft;ut++)e.texImage2D(r.TEXTURE_2D,ut,At,nt,Q,0,ot,yt,null),nt>>=1,Q>>=1}}else if(Wt.length>0){if(L&&ht){const nt=Mt(Wt[0]);e.texStorage2D(r.TEXTURE_2D,ft,At,nt.width,nt.height)}for(let nt=0,Q=Wt.length;nt<Q;nt++)lt=Wt[nt],L?it&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ot,yt,lt):e.texImage2D(r.TEXTURE_2D,nt,At,ot,yt,lt);x.generateMipmaps=!1}else if(L){if(ht){const nt=Mt(rt);e.texStorage2D(r.TEXTURE_2D,ft,At,nt.width,nt.height)}it&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,yt,rt)}else e.texImage2D(r.TEXTURE_2D,0,At,ot,yt,rt);m(x)&&p(K),St.__version=Z.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function $(C,x,N){if(x.image.length!==6)return;const K=Nt(C,x),j=x.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+N);const Z=n.get(j);if(j.version!==Z.__version||K===!0){e.activeTexture(r.TEXTURE0+N);const St=he.getPrimaries(he.workingColorSpace),at=x.colorSpace===mr?null:he.getPrimaries(x.colorSpace),bt=x.colorSpace===mr||St===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Et=x.isCompressedTexture||x.image[0].isCompressedTexture,rt=x.image[0]&&x.image[0].isDataTexture,ot=[];for(let Q=0;Q<6;Q++)!Et&&!rt?ot[Q]=g(x.image[Q],!0,i.maxCubemapSize):ot[Q]=rt?x.image[Q].image:x.image[Q],ot[Q]=Gt(x,ot[Q]);const yt=ot[0],At=s.convert(x.format,x.colorSpace),lt=s.convert(x.type),Wt=M(x.internalFormat,At,lt,x.colorSpace),L=x.isVideoTexture!==!0,ht=Z.__version===void 0||K===!0,it=j.dataReady;let ft=b(x,yt);Lt(r.TEXTURE_CUBE_MAP,x);let nt;if(Et){L&&ht&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Wt,yt.width,yt.height);for(let Q=0;Q<6;Q++){nt=ot[Q].mipmaps;for(let ut=0;ut<nt.length;ut++){const Ut=nt[ut];x.format!==yi?At!==null?L?it&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut,0,0,Ut.width,Ut.height,At,Ut.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut,Wt,Ut.width,Ut.height,0,Ut.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut,0,0,Ut.width,Ut.height,At,lt,Ut.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut,Wt,Ut.width,Ut.height,0,At,lt,Ut.data)}}}else{if(nt=x.mipmaps,L&&ht){nt.length>0&&ft++;const Q=Mt(ot[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ft,Wt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){L?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ot[Q].width,ot[Q].height,At,lt,ot[Q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,ot[Q].width,ot[Q].height,0,At,lt,ot[Q].data);for(let ut=0;ut<nt.length;ut++){const fe=nt[ut].image[Q].image;L?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut+1,0,0,fe.width,fe.height,At,lt,fe.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut+1,Wt,fe.width,fe.height,0,At,lt,fe.data)}}else{L?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,At,lt,ot[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Wt,At,lt,ot[Q]);for(let ut=0;ut<nt.length;ut++){const Ut=nt[ut];L?it&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut+1,0,0,At,lt,Ut.image[Q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ut+1,Wt,At,lt,Ut.image[Q])}}}m(x)&&p(r.TEXTURE_CUBE_MAP),Z.__version=j.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function st(C,x,N,K,j,Z){const St=s.convert(N.format,N.colorSpace),at=s.convert(N.type),bt=M(N.internalFormat,St,at,N.colorSpace),Et=n.get(x),rt=n.get(N);if(rt.__renderTarget=x,!Et.__hasExternalTextures){const ot=Math.max(1,x.width>>Z),yt=Math.max(1,x.height>>Z);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,bt,ot,yt,x.depth,0,St,at,null):e.texImage2D(j,Z,bt,ot,yt,0,St,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),me(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,K,j,rt.__webglTexture,0,I(x)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,K,j,rt.__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(C,x,N){if(r.bindRenderbuffer(r.RENDERBUFFER,C),x.depthBuffer){const K=x.depthTexture,j=K&&K.isDepthTexture?K.type:null,Z=S(x.stencilBuffer,j),St=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;me(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(x),Z,x.width,x.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(x),Z,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Z,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,C)}else{const K=x.textures;for(let j=0;j<K.length;j++){const Z=K[j],St=s.convert(Z.format,Z.colorSpace),at=s.convert(Z.type),bt=M(Z.internalFormat,St,at,Z.colorSpace);me(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I(x),bt,x.width,x.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,I(x),bt,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,bt,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xt(C,x,N){const K=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(x.depthTexture);if(j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(j.__webglInit===void 0&&(j.__webglInit=!0,x.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Lt(r.TEXTURE_CUBE_MAP,x.depthTexture);const Et=s.convert(x.depthTexture.format),rt=s.convert(x.depthTexture.type);let ot;x.depthTexture.format===sr?ot=r.DEPTH_COMPONENT24:x.depthTexture.format===qr&&(ot=r.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ot,x.width,x.height,0,Et,rt,null)}}else k(x.depthTexture,0);const Z=j.__webglTexture,St=I(x),at=K?r.TEXTURE_CUBE_MAP_POSITIVE_X+N:r.TEXTURE_2D,bt=x.depthTexture.format===qr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===sr)me(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,bt,at,Z,0,St):r.framebufferTexture2D(r.FRAMEBUFFER,bt,at,Z,0);else if(x.depthTexture.format===qr)me(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,bt,at,Z,0,St):r.framebufferTexture2D(r.FRAMEBUFFER,bt,at,Z,0);else throw new Error("Unknown depthTexture format")}function Vt(C){const x=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=K}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let K=0;K<6;K++)xt(x.__webglFramebuffer[K],C,K);else{const K=C.texture.mipmaps;K&&K.length>0?xt(x.__webglFramebuffer[0],C,0):xt(x.__webglFramebuffer,C,0)}else if(N){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=r.createRenderbuffer(),Rt(x.__webglDepthbuffer[K],C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[K];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,Z)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),Rt(x.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,Z)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(C,x,N){const K=n.get(C);x!==void 0&&st(K.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&Vt(C)}function Tt(C){const x=C.texture,N=n.get(C),K=n.get(x);C.addEventListener("dispose",A);const j=C.textures,Z=C.isWebGLCubeRenderTarget===!0,St=j.length>1;if(St||(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=x.version,a.memory.textures++),Z){N.__webglFramebuffer=[];for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[at]=[];for(let bt=0;bt<x.mipmaps.length;bt++)N.__webglFramebuffer[at][bt]=r.createFramebuffer()}else N.__webglFramebuffer[at]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)N.__webglFramebuffer[at]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(St)for(let at=0,bt=j.length;at<bt;at++){const Et=n.get(j[at]);Et.__webglTexture===void 0&&(Et.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&me(C)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let at=0;at<j.length;at++){const bt=j[at];N.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[at]);const Et=s.convert(bt.format,bt.colorSpace),rt=s.convert(bt.type),ot=M(bt.internalFormat,Et,rt,bt.colorSpace,C.isXRRenderTarget===!0),yt=I(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,yt,ot,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,N.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),Rt(N.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Lt(r.TEXTURE_CUBE_MAP,x);for(let at=0;at<6;at++)if(x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)st(N.__webglFramebuffer[at][bt],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,bt);else st(N.__webglFramebuffer[at],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(x)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let at=0,bt=j.length;at<bt;at++){const Et=j[at],rt=n.get(Et);let ot=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ot=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,rt.__webglTexture),Lt(ot,Et),st(N.__webglFramebuffer,C,Et,r.COLOR_ATTACHMENT0+at,ot,0),m(Et)&&p(ot)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,K.__webglTexture),Lt(at,x),x.mipmaps&&x.mipmaps.length>0)for(let bt=0;bt<x.mipmaps.length;bt++)st(N.__webglFramebuffer[bt],C,x,r.COLOR_ATTACHMENT0,at,bt);else st(N.__webglFramebuffer,C,x,r.COLOR_ATTACHMENT0,at,0);m(x)&&p(at),e.unbindTexture()}C.depthBuffer&&Vt(C)}function kt(C){const x=C.textures;for(let N=0,K=x.length;N<K;N++){const j=x[N];if(m(j)){const Z=y(C),St=n.get(j).__webglTexture;e.bindTexture(Z,St),p(Z),e.unbindTexture()}}}const Zt=[],Ft=[];function W(C){if(C.samples>0){if(me(C)===!1){const x=C.textures,N=C.width,K=C.height;let j=r.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=n.get(C),at=x.length>1;if(at)for(let Et=0;Et<x.length;Et++)e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const bt=C.texture.mipmaps;bt&&bt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Et=0;Et<x.length;Et++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,St.__webglColorRenderbuffer[Et]);const rt=n.get(x[Et]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,rt,0)}r.blitFramebuffer(0,0,N,K,0,0,N,K,j,r.NEAREST),l===!0&&(Zt.length=0,Ft.length=0,Zt.push(r.COLOR_ATTACHMENT0+Et),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Zt.push(Z),Ft.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ft)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Zt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let Et=0;Et<x.length;Et++){e.bindFramebuffer(r.FRAMEBUFFER,St.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,St.__webglColorRenderbuffer[Et]);const rt=n.get(x[Et]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,St.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,rt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function I(C){return Math.min(i.maxSamples,C.samples)}function me(C){const x=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Qt(C){const x=a.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function Gt(C,x){const N=C.colorSpace,K=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==Ks&&N!==mr&&(he.getTransfer(N)===xe?(K!==yi||j!==jn)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",N)),x}function Mt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=F,this.setTextureCube=q,this.rebindTextures=oe,this.setupRenderTarget=Tt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ZM(r,t){function e(n,i=mr){let s;const a=he.getTransfer(i);if(n===jn)return r.UNSIGNED_BYTE;if(n===fh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===dh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===ep)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===np)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Qd)return r.BYTE;if(n===tp)return r.SHORT;if(n===$a)return r.UNSIGNED_SHORT;if(n===hh)return r.INT;if(n===Bi)return r.UNSIGNED_INT;if(n===Di)return r.FLOAT;if(n===rr)return r.HALF_FLOAT;if(n===ip)return r.ALPHA;if(n===rp)return r.RGB;if(n===yi)return r.RGBA;if(n===sr)return r.DEPTH_COMPONENT;if(n===qr)return r.DEPTH_STENCIL;if(n===sp)return r.RED;if(n===ph)return r.RED_INTEGER;if(n===Js)return r.RG;if(n===mh)return r.RG_INTEGER;if(n===_h)return r.RGBA_INTEGER;if(n===rl||n===sl||n===al||n===ol)if(a===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===rl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===rl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ol)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===eu||n===nu||n===iu||n===ru)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===eu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===iu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ru)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===su||n===au||n===ou||n===lu||n===cu||n===uu||n===hu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===su||n===au)return a===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ou)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===lu)return s.COMPRESSED_R11_EAC;if(n===cu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===uu)return s.COMPRESSED_RG11_EAC;if(n===hu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===Su||n===Mu||n===yu||n===Eu||n===Tu||n===bu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===du)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_u)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Su)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bu)return a===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Au||n===wu||n===Cu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Au)return a===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ru||n===Pu||n===Du||n===Lu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ru)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Pu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Du)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Lu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Za?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}const JM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KM=`
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

}`;class jM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Mp(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ei({vertexShader:JM,fragmentShader:KM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _i(new Nl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QM extends oa{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const g=typeof XRWebGLBinding<"u",m=new jM,p={},y=e.getContextAttributes();let M=null,S=null;const b=[],w=[],A=new Ct;let D=null;const v=new ui;v.viewport=new Be;const E=new ui;E.viewport=new Be;const P=[v,E],U=new c0;let z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let $=b[J];return $===void 0&&($=new fc,b[J]=$),$.getTargetRaySpace()},this.getControllerGrip=function(J){let $=b[J];return $===void 0&&($=new fc,b[J]=$),$.getGripSpace()},this.getHand=function(J){let $=b[J];return $===void 0&&($=new fc,b[J]=$),$.getHandSpace()};function k(J){const $=w.indexOf(J.inputSource);if($===-1)return;const st=b[$];st!==void 0&&(st.update(J.inputSource,J.frame,c||a),st.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",F);for(let J=0;J<b.length;J++){const $=w[J];$!==null&&(w[J]=null,b[J].disconnect($))}z=null,V=null,m.reset();for(const J in p)delete p[J];t.setRenderTarget(M),f=null,d=null,h=null,i=null,S=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,e)),h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",G),i.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,Rt=null,xt=null;y.depth&&(xt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=y.stencil?qr:sr,Rt=y.stencil?Za:Bi);const Vt={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Vt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Fi(d.textureWidth,d.textureHeight,{format:yi,type:jn,depthTexture:new ja(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const st={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Fi(f.framebufferWidth,f.framebufferHeight,{format:yi,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(J){for(let $=0;$<J.removed.length;$++){const st=J.removed[$],Rt=w.indexOf(st);Rt>=0&&(w[Rt]=null,b[Rt].disconnect(st))}for(let $=0;$<J.added.length;$++){const st=J.added[$];let Rt=w.indexOf(st);if(Rt===-1){for(let Vt=0;Vt<b.length;Vt++)if(Vt>=w.length){w.push(st),Rt=Vt;break}else if(w[Vt]===null){w[Vt]=st,Rt=Vt;break}if(Rt===-1)break}const xt=b[Rt];xt&&xt.connect(st)}}const q=new B,tt=new B;function R(J,$,st){q.setFromMatrixPosition($.matrixWorld),tt.setFromMatrixPosition(st.matrixWorld);const Rt=q.distanceTo(tt),xt=$.projectionMatrix.elements,Vt=st.projectionMatrix.elements,oe=xt[14]/(xt[10]-1),Tt=xt[14]/(xt[10]+1),kt=(xt[9]+1)/xt[5],Zt=(xt[9]-1)/xt[5],Ft=(xt[8]-1)/xt[0],W=(Vt[8]+1)/Vt[0],I=oe*Ft,me=oe*W,Qt=Rt/(-Ft+W),Gt=Qt*-Ft;if($.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Gt),J.translateZ(Qt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),xt[10]===-1)J.projectionMatrix.copy($.projectionMatrix),J.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Mt=oe+Qt,C=Tt+Qt,x=I-Gt,N=me+(Rt-Gt),K=kt*Tt/C*Mt,j=Zt*Tt/C*Mt;J.projectionMatrix.makePerspective(x,N,K,j,Mt,C),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function et(J,$){$===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices($.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let $=J.near,st=J.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(st=m.depthFar)),U.near=E.near=v.near=$,U.far=E.far=v.far=st,(z!==U.near||V!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,V=U.far),U.layers.mask=J.layers.mask|6,v.layers.mask=U.layers.mask&3,E.layers.mask=U.layers.mask&5;const Rt=J.parent,xt=U.cameras;et(U,Rt);for(let Vt=0;Vt<xt.length;Vt++)et(xt[Vt],Rt);xt.length===2?R(U,v,E):U.projectionMatrix.copy(v.projectionMatrix),Lt(J,U,Rt)};function Lt(J,$,st){st===null?J.matrix.copy($.matrixWorld):(J.matrix.copy(st.matrixWorld),J.matrix.invert(),J.matrix.multiply($.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy($.projectionMatrix),J.projectionMatrixInverse.copy($.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Uu*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(J){return p[J]};let Nt=null;function zt(J,$){if(u=$.getViewerPose(c||a),_=$,u!==null){const st=u.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Rt=!1;st.length!==U.cameras.length&&(U.cameras.length=0,Rt=!0);for(let Tt=0;Tt<st.length;Tt++){const kt=st[Tt];let Zt=null;if(f!==null)Zt=f.getViewport(kt);else{const W=h.getViewSubImage(d,kt);Zt=W.viewport,Tt===0&&(t.setRenderTargetTextures(S,W.colorTexture,W.depthStencilTexture),t.setRenderTarget(S))}let Ft=P[Tt];Ft===void 0&&(Ft=new ui,Ft.layers.enable(Tt),Ft.viewport=new Be,P[Tt]=Ft),Ft.matrix.fromArray(kt.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(kt.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Tt===0&&(U.matrix.copy(Ft.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Rt===!0&&U.cameras.push(Ft)}const xt=i.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const Tt=h.getDepthInformation(st[0]);Tt&&Tt.isValid&&Tt.texture&&m.init(Tt,i.renderState)}if(xt&&xt.includes("camera-access")&&g){t.state.unbindTexture(),h=n.getBinding();for(let Tt=0;Tt<st.length;Tt++){const kt=st[Tt].camera;if(kt){let Zt=p[kt];Zt||(Zt=new Mp,p[kt]=Zt);const Ft=h.getCameraImage(kt);Zt.sourceTexture=Ft}}}}for(let st=0;st<b.length;st++){const Rt=w[st],xt=b[st];Rt!==null&&xt!==void 0&&xt.update(Rt,$,c||a)}Nt&&Nt(J,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}const Yt=new Lp;Yt.setAnimationLoop(zt),this.setAnimationLoop=function(J){Nt=J},this.dispose=function(){}}}const Or=new zi,ty=new Pe;function ey(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mp(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,M,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=t.get(p),M=y.envMap,S=y.envMapRotation;M&&(m.envMap.value=M,Or.copy(S),Or.x*=-1,Or.y*=-1,Or.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),m.envMapRotation.value.setFromMatrix4(ty.makeRotationFromEuler(Or)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const y=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ny(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const S=M.program;n.uniformBlockBinding(y,S)}function c(y,M){let S=i[y.id];S===void 0&&(_(y),S=u(y),i[y.id]=S,y.addEventListener("dispose",m));const b=M.program;n.updateUBOMapping(y,b);const w=t.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function u(y){const M=h();y.__bindingPointIndex=M;const S=r.createBuffer(),b=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,b,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,S),S}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=i[y.id],S=y.uniforms,b=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,A=S.length;w<A;w++){const D=Array.isArray(S[w])?S[w]:[S[w]];for(let v=0,E=D.length;v<E;v++){const P=D[v];if(f(P,w,v,b)===!0){const U=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let k=0;k<z.length;k++){const G=z[k],F=g(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,U+V,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,V),V+=F.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,M,S,b){const w=y.value,A=M+"_"+S;if(b[A]===void 0)return typeof w=="number"||typeof w=="boolean"?b[A]=w:b[A]=w.clone(),!0;{const D=b[A];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return b[A]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function _(y){const M=y.uniforms;let S=0;const b=16;for(let A=0,D=M.length;A<D;A++){const v=Array.isArray(M[A])?M[A]:[M[A]];for(let E=0,P=v.length;E<P;E++){const U=v[E],z=Array.isArray(U.value)?U.value:[U.value];for(let V=0,k=z.length;V<k;V++){const G=z[V],F=g(G),q=S%b,tt=q%F.boundary,R=q+tt;S+=tt,R!==0&&b-R<F.storage&&(S+=b-R),U.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=F.storage}}}const w=S%b;return w>0&&(S+=b-w),y.__size=S,y.__cache={},this}function g(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$t("WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}const iy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function ry(){return Ti===null&&(Ti=new mg(iy,16,16,Js,rr),Ti.name="DFG_LUT",Ti.minFilter=gn,Ti.magFilter=gn,Ti.wrapS=ji,Ti.wrapT=ji,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class sy{constructor(t={}){const{canvas:e=k_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=jn}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=f,m=new Set([_h,mh,ph]),p=new Set([jn,Bi,$a,Za,fh,dh]),y=new Uint32Array(4),M=new Int32Array(4);let S=null,b=null;const w=[],A=[];let D=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=ci;let P=0,U=0,z=null,V=-1,k=null;const G=new Be,F=new Be;let q=null;const tt=new le(0);let R=0,et=e.width,Lt=e.height,Nt=1,zt=null,Yt=null;const J=new Be(0,0,et,Lt),$=new Be(0,0,et,Lt);let st=!1;const Rt=new Sh;let xt=!1,Vt=!1;const oe=new Pe,Tt=new B,kt=new Be,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function W(){return z===null?Nt:1}let I=n;function me(T,O){return e.getContext(T,O)}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uh}`),e.addEventListener("webglcontextlost",Ut,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",_t,!1),I===null){const O="webgl2";if(I=me(O,T),I===null)throw me(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw ue("WebGLRenderer: "+T.message),T}let Qt,Gt,Mt,C,x,N,K,j,Z,St,at,bt,Et,rt,ot,yt,At,lt,Wt,L,ht,it,ft,nt;function Q(){Qt=new rS(I),Qt.init(),it=new ZM(I,Qt),Gt=new Zx(I,Qt,t,it),Mt=new qM(I,Qt),Gt.reversedDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),C=new oS(I),x=new LM,N=new $M(I,Qt,Mt,x,Gt,it,C),K=new Kx(v),j=new iS(v),Z=new h0(I),ft=new qx(I,Z),St=new sS(I,Z,C,ft),at=new cS(I,St,Z,C),Wt=new lS(I,Gt,N),yt=new Jx(x),bt=new DM(v,K,j,Qt,Gt,ft,yt),Et=new ey(v,x),rt=new UM,ot=new kM(Qt),lt=new Yx(v,K,j,Mt,at,_,l),At=new XM(v,at,Gt),nt=new ny(I,C,Gt,Mt),L=new $x(I,Qt,C),ht=new aS(I,Qt,C),C.programs=bt.programs,v.capabilities=Gt,v.extensions=Qt,v.properties=x,v.renderLists=rt,v.shadowMap=At,v.state=Mt,v.info=C}Q(),g!==jn&&(D=new hS(g,e.width,e.height,i,s));const ut=new QM(v,I);this.xr=ut,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=Qt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Qt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Nt},this.setPixelRatio=function(T){T!==void 0&&(Nt=T,this.setSize(et,Lt,!1))},this.getSize=function(T){return T.set(et,Lt)},this.setSize=function(T,O,Y=!0){if(ut.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}et=T,Lt=O,e.width=Math.floor(T*Nt),e.height=Math.floor(O*Nt),Y===!0&&(e.style.width=T+"px",e.style.height=O+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(et*Nt,Lt*Nt).floor()},this.setDrawingBufferSize=function(T,O,Y){et=T,Lt=O,Nt=Y,e.width=Math.floor(T*Y),e.height=Math.floor(O*Y),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(g===jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(G)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,O,Y,X){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,O,Y,X),Mt.viewport(G.copy(J).multiplyScalar(Nt).round())},this.getScissor=function(T){return T.copy($)},this.setScissor=function(T,O,Y,X){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,O,Y,X),Mt.scissor(F.copy($).multiplyScalar(Nt).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(T){Mt.setScissorTest(st=T)},this.setOpaqueSort=function(T){zt=T},this.setTransparentSort=function(T){Yt=T},this.getClearColor=function(T){return T.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,Y=!0){let X=0;if(T){let H=!1;if(z!==null){const ct=z.texture.format;H=m.has(ct)}if(H){const ct=z.texture.type,gt=p.has(ct),dt=lt.getClearColor(),vt=lt.getClearAlpha(),Dt=dt.r,Ht=dt.g,Ot=dt.b;gt?(y[0]=Dt,y[1]=Ht,y[2]=Ot,y[3]=vt,I.clearBufferuiv(I.COLOR,0,y)):(M[0]=Dt,M[1]=Ht,M[2]=Ot,M[3]=vt,I.clearBufferiv(I.COLOR,0,M))}else X|=I.COLOR_BUFFER_BIT}O&&(X|=I.DEPTH_BUFFER_BIT),Y&&(X|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ut,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),lt.dispose(),rt.dispose(),ot.dispose(),x.dispose(),K.dispose(),j.dispose(),at.dispose(),ft.dispose(),nt.dispose(),bt.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ke),ut.removeEventListener("sessionend",ee),ge.stop()};function Ut(T){T.preventDefault(),Sl("WebGLRenderer: Context Lost."),E=!0}function fe(){Sl("WebGLRenderer: Context Restored."),E=!1;const T=C.autoReset,O=At.enabled,Y=At.autoUpdate,X=At.needsUpdate,H=At.type;Q(),C.autoReset=T,At.enabled=O,At.autoUpdate=Y,At.needsUpdate=X,At.type=H}function _t(T){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pt(T){const O=T.target;O.removeEventListener("dispose",Pt),Jt(O)}function Jt(T){pt(T),x.remove(T)}function pt(T){const O=x.get(T).programs;O!==void 0&&(O.forEach(function(Y){bt.releaseProgram(Y)}),T.isShaderMaterial&&bt.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,Y,X,H,ct){O===null&&(O=Zt);const gt=H.isMesh&&H.matrixWorld.determinant()<0,dt=qe(T,O,Y,X,H);Mt.setMaterial(X,gt);let vt=Y.index,Dt=1;if(X.wireframe===!0){if(vt=St.getWireframeAttribute(Y),vt===void 0)return;Dt=2}const Ht=Y.drawRange,Ot=Y.attributes.position;let ne=Ht.start*Dt,Me=(Ht.start+Ht.count)*Dt;ct!==null&&(ne=Math.max(ne,ct.start*Dt),Me=Math.min(Me,(ct.start+ct.count)*Dt)),vt!==null?(ne=Math.max(ne,0),Me=Math.min(Me,vt.count)):Ot!=null&&(ne=Math.max(ne,0),Me=Math.min(Me,Ot.count));const Fe=Me-ne;if(Fe<0||Fe===1/0)return;ft.setup(H,X,dt,Y,vt);let Oe,Te=L;if(vt!==null&&(Oe=Z.get(vt),Te=ht,Te.setIndex(Oe)),H.isMesh)X.wireframe===!0?(Mt.setLineWidth(X.wireframeLinewidth*W()),Te.setMode(I.LINES)):Te.setMode(I.TRIANGLES);else if(H.isLine){let Bt=X.linewidth;Bt===void 0&&(Bt=1),Mt.setLineWidth(Bt*W()),H.isLineSegments?Te.setMode(I.LINES):H.isLineLoop?Te.setMode(I.LINE_LOOP):Te.setMode(I.LINE_STRIP)}else H.isPoints?Te.setMode(I.POINTS):H.isSprite&&Te.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Ka("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Te.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))Te.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Bt=H._multiDrawStarts,ve=H._multiDrawCounts,pe=H._multiDrawCount,Wn=vt?Z.get(vt).bytesPerElement:1,ds=x.get(X).currentProgram.getUniforms();for(let Xn=0;Xn<pe;Xn++)ds.setValue(I,"_gl_DrawID",Xn),Te.render(Bt[Xn]/Wn,ve[Xn])}else if(H.isInstancedMesh)Te.renderInstances(ne,Fe,H.count);else if(Y.isInstancedBufferGeometry){const Bt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ve=Math.min(Y.instanceCount,Bt);Te.renderInstances(ne,Fe,ve)}else Te.render(ne,Fe)};function Xt(T,O,Y){T.transparent===!0&&T.side===Ci&&T.forceSinglePass===!1?(T.side=Fn,T.needsUpdate=!0,Se(T,O,Y),T.side=br,T.needsUpdate=!0,Se(T,O,Y),T.side=Ci):Se(T,O,Y)}this.compile=function(T,O,Y=null){Y===null&&(Y=T),b=ot.get(Y),b.init(O),A.push(b),Y.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),T!==Y&&T.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(b.pushLight(H),H.castShadow&&b.pushShadow(H))}),b.setupLights();const X=new Set;return T.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ct=H.material;if(ct)if(Array.isArray(ct))for(let gt=0;gt<ct.length;gt++){const dt=ct[gt];Xt(dt,Y,H),X.add(dt)}else Xt(ct,Y,H),X.add(ct)}),b=A.pop(),X},this.compileAsync=function(T,O,Y=null){const X=this.compile(T,O,Y);return new Promise(H=>{function ct(){if(X.forEach(function(gt){x.get(gt).currentProgram.isReady()&&X.delete(gt)}),X.size===0){H(T);return}setTimeout(ct,10)}Qt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let It=null;function qt(T){It&&It(T)}function ke(){ge.stop()}function ee(){ge.start()}const ge=new Lp;ge.setAnimationLoop(qt),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(T){It=T,ut.setAnimationLoop(T),T===null?ge.stop():ge.start()},ut.addEventListener("sessionstart",ke),ut.addEventListener("sessionend",ee),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const Y=ut.enabled===!0&&ut.isPresenting===!0,X=D!==null&&(z===null||Y)&&D.begin(v,z);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(O),O=ut.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,z),b=ot.get(T,A.length),b.init(O),A.push(b),oe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Rt.setFromProjectionMatrix(oe,Li,O.reversedDepth),Vt=this.localClippingEnabled,xt=yt.init(this.clippingPlanes,Vt),S=rt.get(T,w.length),S.init(),w.push(S),ut.enabled===!0&&ut.isPresenting===!0){const gt=v.xr.getDepthSensingMesh();gt!==null&&He(gt,O,-1/0,v.sortObjects)}He(T,O,0,v.sortObjects),S.finish(),v.sortObjects===!0&&S.sort(zt,Yt),Ft=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Ft&&lt.addToRenderList(S,T),this.info.render.frame++,xt===!0&&yt.beginShadows();const H=b.state.shadowsArray;if(At.render(H,T,O),xt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&D.hasRenderPass())===!1){const gt=S.opaque,dt=S.transmissive;if(b.setupLights(),O.isArrayCamera){const vt=O.cameras;if(dt.length>0)for(let Dt=0,Ht=vt.length;Dt<Ht;Dt++){const Ot=vt[Dt];Ee(gt,dt,T,Ot)}Ft&&lt.render(T);for(let Dt=0,Ht=vt.length;Dt<Ht;Dt++){const Ot=vt[Dt];Re(S,T,Ot,Ot.viewport)}}else dt.length>0&&Ee(gt,dt,T,O),Ft&&lt.render(T),Re(S,T,O)}z!==null&&U===0&&(N.updateMultisampleRenderTarget(z),N.updateRenderTargetMipmap(z)),X&&D.end(v),T.isScene===!0&&T.onAfterRender(v,T,O),ft.resetDefaultState(),V=-1,k=null,A.pop(),A.length>0?(b=A[A.length-1],xt===!0&&yt.setGlobalState(v.clippingPlanes,b.state.camera)):b=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function He(T,O,Y,X){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Rt.intersectsSprite(T)){X&&kt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(oe);const gt=at.update(T),dt=T.material;dt.visible&&S.push(T,gt,dt,Y,kt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Rt.intersectsObject(T))){const gt=at.update(T),dt=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),kt.copy(T.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),kt.copy(gt.boundingSphere.center)),kt.applyMatrix4(T.matrixWorld).applyMatrix4(oe)),Array.isArray(dt)){const vt=gt.groups;for(let Dt=0,Ht=vt.length;Dt<Ht;Dt++){const Ot=vt[Dt],ne=dt[Ot.materialIndex];ne&&ne.visible&&S.push(T,gt,ne,Y,kt.z,Ot)}}else dt.visible&&S.push(T,gt,dt,Y,kt.z,null)}}const ct=T.children;for(let gt=0,dt=ct.length;gt<dt;gt++)He(ct[gt],O,Y,X)}function Re(T,O,Y,X){const{opaque:H,transmissive:ct,transparent:gt}=T;b.setupLightsView(Y),xt===!0&&yt.setGlobalState(v.clippingPlanes,Y),X&&Mt.viewport(G.copy(X)),H.length>0&&de(H,O,Y),ct.length>0&&de(ct,O,Y),gt.length>0&&de(gt,O,Y),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Ee(T,O,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[X.id]===void 0){const ne=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[X.id]=new Fi(1,1,{generateMipmaps:!0,type:ne?rr:jn,minFilter:Yr,samples:Gt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace})}const ct=b.state.transmissionRenderTarget[X.id],gt=X.viewport||G;ct.setSize(gt.z*v.transmissionResolutionScale,gt.w*v.transmissionResolutionScale);const dt=v.getRenderTarget(),vt=v.getActiveCubeFace(),Dt=v.getActiveMipmapLevel();v.setRenderTarget(ct),v.getClearColor(tt),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear(),Ft&&lt.render(Y);const Ht=v.toneMapping;v.toneMapping=Ni;const Ot=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),b.setupLightsView(X),xt===!0&&yt.setGlobalState(v.clippingPlanes,X),de(T,Y,X),N.updateMultisampleRenderTarget(ct),N.updateRenderTargetMipmap(ct),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Me=0,Fe=O.length;Me<Fe;Me++){const Oe=O[Me],{object:Te,geometry:Bt,material:ve,group:pe}=Oe;if(ve.side===Ci&&Te.layers.test(X.layers)){const Wn=ve.side;ve.side=Fn,ve.needsUpdate=!0,Ln(Te,Y,X,Bt,ve,pe),ve.side=Wn,ve.needsUpdate=!0,ne=!0}}ne===!0&&(N.updateMultisampleRenderTarget(ct),N.updateRenderTargetMipmap(ct))}v.setRenderTarget(dt,vt,Dt),v.setClearColor(tt,R),Ot!==void 0&&(X.viewport=Ot),v.toneMapping=Ht}function de(T,O,Y){const X=O.isScene===!0?O.overrideMaterial:null;for(let H=0,ct=T.length;H<ct;H++){const gt=T[H],{object:dt,geometry:vt,group:Dt}=gt;let Ht=gt.material;Ht.allowOverride===!0&&X!==null&&(Ht=X),dt.layers.test(Y.layers)&&Ln(dt,O,Y,vt,Ht,Dt)}}function Ln(T,O,Y,X,H,ct){T.onBeforeRender(v,O,Y,X,H,ct),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),H.onBeforeRender(v,O,Y,X,T,ct),H.transparent===!0&&H.side===Ci&&H.forceSinglePass===!1?(H.side=Fn,H.needsUpdate=!0,v.renderBufferDirect(Y,O,X,H,T,ct),H.side=br,H.needsUpdate=!0,v.renderBufferDirect(Y,O,X,H,T,ct),H.side=Ci):v.renderBufferDirect(Y,O,X,H,T,ct),T.onAfterRender(v,O,Y,X,H,ct)}function Se(T,O,Y){O.isScene!==!0&&(O=Zt);const X=x.get(T),H=b.state.lights,ct=b.state.shadowsArray,gt=H.state.version,dt=bt.getParameters(T,H.state,ct,O,Y),vt=bt.getProgramCacheKey(dt);let Dt=X.programs;X.environment=T.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(T.isMeshStandardMaterial?j:K).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Dt===void 0&&(T.addEventListener("dispose",Pt),Dt=new Map,X.programs=Dt);let Ht=Dt.get(vt);if(Ht!==void 0){if(X.currentProgram===Ht&&X.lightsStateVersion===gt)return Hn(T,dt),Ht}else dt.uniforms=bt.getUniforms(T),T.onBeforeCompile(dt,v),Ht=bt.acquireProgram(dt,vt),Dt.set(vt,Ht),X.uniforms=dt.uniforms;const Ot=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ot.clippingPlanes=yt.uniform),Hn(T,dt),X.needsLights=tn(T),X.lightsStateVersion=gt,X.needsLights&&(Ot.ambientLightColor.value=H.state.ambient,Ot.lightProbe.value=H.state.probe,Ot.directionalLights.value=H.state.directional,Ot.directionalLightShadows.value=H.state.directionalShadow,Ot.spotLights.value=H.state.spot,Ot.spotLightShadows.value=H.state.spotShadow,Ot.rectAreaLights.value=H.state.rectArea,Ot.ltc_1.value=H.state.rectAreaLTC1,Ot.ltc_2.value=H.state.rectAreaLTC2,Ot.pointLights.value=H.state.point,Ot.pointLightShadows.value=H.state.pointShadow,Ot.hemisphereLights.value=H.state.hemi,Ot.directionalShadowMap.value=H.state.directionalShadowMap,Ot.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ot.spotShadowMap.value=H.state.spotShadowMap,Ot.spotLightMatrix.value=H.state.spotLightMatrix,Ot.spotLightMap.value=H.state.spotLightMap,Ot.pointShadowMap.value=H.state.pointShadowMap,Ot.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=Ht,X.uniformsList=null,Ht}function un(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=ll.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Hn(T,O){const Y=x.get(T);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function qe(T,O,Y,X,H){O.isScene!==!0&&(O=Zt),N.resetTextureUnits();const ct=O.fog,gt=X.isMeshStandardMaterial?O.environment:null,dt=z===null?v.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Ks,vt=(X.isMeshStandardMaterial?j:K).get(X.envMap||gt),Dt=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ht=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ot=!!Y.morphAttributes.position,ne=!!Y.morphAttributes.normal,Me=!!Y.morphAttributes.color;let Fe=Ni;X.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Fe=v.toneMapping);const Oe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Te=Oe!==void 0?Oe.length:0,Bt=x.get(X),ve=b.state.lights;if(xt===!0&&(Vt===!0||T!==k)){const Sn=T===k&&X.id===V;yt.setState(X,T,Sn)}let pe=!1;X.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==ve.state.version||Bt.outputColorSpace!==dt||H.isBatchedMesh&&Bt.batching===!1||!H.isBatchedMesh&&Bt.batching===!0||H.isBatchedMesh&&Bt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Bt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Bt.instancing===!1||!H.isInstancedMesh&&Bt.instancing===!0||H.isSkinnedMesh&&Bt.skinning===!1||!H.isSkinnedMesh&&Bt.skinning===!0||H.isInstancedMesh&&Bt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Bt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Bt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Bt.instancingMorph===!1&&H.morphTexture!==null||Bt.envMap!==vt||X.fog===!0&&Bt.fog!==ct||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==yt.numPlanes||Bt.numIntersection!==yt.numIntersection)||Bt.vertexAlphas!==Dt||Bt.vertexTangents!==Ht||Bt.morphTargets!==Ot||Bt.morphNormals!==ne||Bt.morphColors!==Me||Bt.toneMapping!==Fe||Bt.morphTargetsCount!==Te)&&(pe=!0):(pe=!0,Bt.__version=X.version);let Wn=Bt.currentProgram;pe===!0&&(Wn=Se(X,O,H));let ds=!1,Xn=!1,ca=!1;const we=Wn.getUniforms(),In=Bt.uniforms;if(Mt.useProgram(Wn.program)&&(ds=!0,Xn=!0,ca=!0),X.id!==V&&(V=X.id,Xn=!0),ds||k!==T){Mt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),we.setValue(I,"projectionMatrix",T.projectionMatrix),we.setValue(I,"viewMatrix",T.matrixWorldInverse);const Un=we.map.cameraPosition;Un!==void 0&&Un.setValue(I,Tt.setFromMatrixPosition(T.matrixWorld)),Gt.logarithmicDepthBuffer&&we.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&we.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),k!==T&&(k=T,Xn=!0,ca=!0)}if(Bt.needsLights&&(ve.state.directionalShadowMap.length>0&&we.setValue(I,"directionalShadowMap",ve.state.directionalShadowMap,N),ve.state.spotShadowMap.length>0&&we.setValue(I,"spotShadowMap",ve.state.spotShadowMap,N),ve.state.pointShadowMap.length>0&&we.setValue(I,"pointShadowMap",ve.state.pointShadowMap,N)),H.isSkinnedMesh){we.setOptional(I,H,"bindMatrix"),we.setOptional(I,H,"bindMatrixInverse");const Sn=H.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),we.setValue(I,"boneTexture",Sn.boneTexture,N))}H.isBatchedMesh&&(we.setOptional(I,H,"batchingTexture"),we.setValue(I,"batchingTexture",H._matricesTexture,N),we.setOptional(I,H,"batchingIdTexture"),we.setValue(I,"batchingIdTexture",H._indirectTexture,N),we.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&we.setValue(I,"batchingColorTexture",H._colorsTexture,N));const ai=Y.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&Wt.update(H,Y,Wn),(Xn||Bt.receiveShadow!==H.receiveShadow)&&(Bt.receiveShadow=H.receiveShadow,we.setValue(I,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(In.envMap.value=vt,In.flipEnvMap.value=vt.isCubeTexture&&vt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(In.envMapIntensity.value=O.environmentIntensity),In.dfgLUT!==void 0&&(In.dfgLUT.value=ry()),Xn&&(we.setValue(I,"toneMappingExposure",v.toneMappingExposure),Bt.needsLights&&$e(In,ca),ct&&X.fog===!0&&Et.refreshFogUniforms(In,ct),Et.refreshMaterialUniforms(In,X,Nt,Lt,b.state.transmissionRenderTarget[T.id]),ll.upload(I,un(Bt),In,N)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ll.upload(I,un(Bt),In,N),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&we.setValue(I,"center",H.center),we.setValue(I,"modelViewMatrix",H.modelViewMatrix),we.setValue(I,"normalMatrix",H.normalMatrix),we.setValue(I,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Sn=X.uniformsGroups;for(let Un=0,Gl=Sn.length;Un<Gl;Un++){const Dr=Sn[Un];nt.update(Dr,Wn),nt.bind(Dr,Wn)}}return Wn}function $e(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function tn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(T,O,Y){const X=x.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),x.get(T.texture).__webglTexture=O,x.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const Y=x.get(T);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};const Gi=I.createFramebuffer();this.setRenderTarget=function(T,O=0,Y=0){z=T,P=O,U=Y;let X=null,H=!1,ct=!1;if(T){const dt=x.get(T);if(dt.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(I.FRAMEBUFFER,dt.__webglFramebuffer),G.copy(T.viewport),F.copy(T.scissor),q=T.scissorTest,Mt.viewport(G),Mt.scissor(F),Mt.setScissorTest(q),V=-1;return}else if(dt.__webglFramebuffer===void 0)N.setupRenderTarget(T);else if(dt.__hasExternalTextures)N.rebindTextures(T,x.get(T.texture).__webglTexture,x.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ht=T.depthTexture;if(dt.__boundDepthTexture!==Ht){if(Ht!==null&&x.has(Ht)&&(T.width!==Ht.image.width||T.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(T)}}const vt=T.texture;(vt.isData3DTexture||vt.isDataArrayTexture||vt.isCompressedArrayTexture)&&(ct=!0);const Dt=x.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Dt[O])?X=Dt[O][Y]:X=Dt[O],H=!0):T.samples>0&&N.useMultisampledRTT(T)===!1?X=x.get(T).__webglMultisampledFramebuffer:Array.isArray(Dt)?X=Dt[Y]:X=Dt,G.copy(T.viewport),F.copy(T.scissor),q=T.scissorTest}else G.copy(J).multiplyScalar(Nt).floor(),F.copy($).multiplyScalar(Nt).floor(),q=st;if(Y!==0&&(X=Gi),Mt.bindFramebuffer(I.FRAMEBUFFER,X)&&Mt.drawBuffers(T,X),Mt.viewport(G),Mt.scissor(F),Mt.setScissorTest(q),H){const dt=x.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,dt.__webglTexture,Y)}else if(ct){const dt=O;for(let vt=0;vt<T.textures.length;vt++){const Dt=x.get(T.textures[vt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+vt,Dt.__webglTexture,Y,dt)}}else if(T!==null&&Y!==0){const dt=x.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dt.__webglTexture,Y)}V=-1},this.readRenderTargetPixels=function(T,O,Y,X,H,ct,gt,dt=0){if(!(T&&T.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=x.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(vt=vt[gt]),vt){Mt.bindFramebuffer(I.FRAMEBUFFER,vt);try{const Dt=T.textures[dt],Ht=Dt.format,Ot=Dt.type;if(!Gt.textureFormatReadable(Ht)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ot)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-X&&Y>=0&&Y<=T.height-H&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+dt),I.readPixels(O,Y,X,H,it.convert(Ht),it.convert(Ot),ct))}finally{const Dt=z!==null?x.get(z).__webglFramebuffer:null;Mt.bindFramebuffer(I.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,O,Y,X,H,ct,gt,dt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=x.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&gt!==void 0&&(vt=vt[gt]),vt)if(O>=0&&O<=T.width-X&&Y>=0&&Y<=T.height-H){Mt.bindFramebuffer(I.FRAMEBUFFER,vt);const Dt=T.textures[dt],Ht=Dt.format,Ot=Dt.type;if(!Gt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ne),I.bufferData(I.PIXEL_PACK_BUFFER,ct.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+dt),I.readPixels(O,Y,X,H,it.convert(Ht),it.convert(Ot),0);const Me=z!==null?x.get(z).__webglFramebuffer:null;Mt.bindFramebuffer(I.FRAMEBUFFER,Me);const Fe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await V_(I,Fe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ne),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ct),I.deleteBuffer(ne),I.deleteSync(Fe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,Y=0){const X=Math.pow(2,-Y),H=Math.floor(T.image.width*X),ct=Math.floor(T.image.height*X),gt=O!==null?O.x:0,dt=O!==null?O.y:0;N.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,Y,0,0,gt,dt,H,ct),Mt.unbindTexture()};const fs=I.createFramebuffer(),en=I.createFramebuffer();this.copyTextureToTexture=function(T,O,Y=null,X=null,H=0,ct=null){ct===null&&(H!==0?(Ka("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=H,H=0):ct=0);let gt,dt,vt,Dt,Ht,Ot,ne,Me,Fe;const Oe=T.isCompressedTexture?T.mipmaps[ct]:T.image;if(Y!==null)gt=Y.max.x-Y.min.x,dt=Y.max.y-Y.min.y,vt=Y.isBox3?Y.max.z-Y.min.z:1,Dt=Y.min.x,Ht=Y.min.y,Ot=Y.isBox3?Y.min.z:0;else{const ai=Math.pow(2,-H);gt=Math.floor(Oe.width*ai),dt=Math.floor(Oe.height*ai),T.isDataArrayTexture?vt=Oe.depth:T.isData3DTexture?vt=Math.floor(Oe.depth*ai):vt=1,Dt=0,Ht=0,Ot=0}X!==null?(ne=X.x,Me=X.y,Fe=X.z):(ne=0,Me=0,Fe=0);const Te=it.convert(O.format),Bt=it.convert(O.type);let ve;O.isData3DTexture?(N.setTexture3D(O,0),ve=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(N.setTexture2DArray(O,0),ve=I.TEXTURE_2D_ARRAY):(N.setTexture2D(O,0),ve=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const pe=I.getParameter(I.UNPACK_ROW_LENGTH),Wn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ds=I.getParameter(I.UNPACK_SKIP_PIXELS),Xn=I.getParameter(I.UNPACK_SKIP_ROWS),ca=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Oe.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Oe.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ht),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ot);const we=T.isDataArrayTexture||T.isData3DTexture,In=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const ai=x.get(T),Sn=x.get(O),Un=x.get(ai.__renderTarget),Gl=x.get(Sn.__renderTarget);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,Un.__webglFramebuffer),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Gl.__webglFramebuffer);for(let Dr=0;Dr<vt;Dr++)we&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,x.get(T).__webglTexture,H,Ot+Dr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,x.get(O).__webglTexture,ct,Fe+Dr)),I.blitFramebuffer(Dt,Ht,gt,dt,ne,Me,gt,dt,I.DEPTH_BUFFER_BIT,I.NEAREST);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(H!==0||T.isRenderTargetTexture||x.has(T)){const ai=x.get(T),Sn=x.get(O);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,fs),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,en);for(let Un=0;Un<vt;Un++)we?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ai.__webglTexture,H,Ot+Un):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ai.__webglTexture,H),In?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Sn.__webglTexture,ct,Fe+Un):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Sn.__webglTexture,ct),H!==0?I.blitFramebuffer(Dt,Ht,gt,dt,ne,Me,gt,dt,I.COLOR_BUFFER_BIT,I.NEAREST):In?I.copyTexSubImage3D(ve,ct,ne,Me,Fe+Un,Dt,Ht,gt,dt):I.copyTexSubImage2D(ve,ct,ne,Me,Dt,Ht,gt,dt);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else In?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(ve,ct,ne,Me,Fe,gt,dt,vt,Te,Bt,Oe.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(ve,ct,ne,Me,Fe,gt,dt,vt,Te,Oe.data):I.texSubImage3D(ve,ct,ne,Me,Fe,gt,dt,vt,Te,Bt,Oe):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ct,ne,Me,gt,dt,Te,Bt,Oe.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ct,ne,Me,Oe.width,Oe.height,Te,Oe.data):I.texSubImage2D(I.TEXTURE_2D,ct,ne,Me,gt,dt,Te,Bt,Oe);I.pixelStorei(I.UNPACK_ROW_LENGTH,pe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Wn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ds),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ca),ct===0&&O.generateMipmaps&&I.generateMipmap(ve),Mt.unbindTexture()},this.initRenderTarget=function(T){x.get(T).__webglFramebuffer===void 0&&N.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?N.setTextureCube(T,0):T.isData3DTexture?N.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?N.setTexture2DArray(T,0):N.setTexture2D(T,0),Mt.unbindTexture()},this.resetState=function(){P=0,U=0,z=null,Mt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}function ay(){const r=document.getElementById("canvas-container");if(!r)return;const t=new fg,e=new ui(45,window.innerWidth/window.innerHeight,.1,100);e.position.z=10;const n=new sy({alpha:!0,antialias:!0});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(window.devicePixelRatio),r.appendChild(n.domElement);const i=new a0(16777215,0,1.5);t.add(i);const s=new Ff(16766720,2.5);s.position.set(5,5,10),t.add(s);const a=new Ff(16777215,1);a.position.set(-5,5,-10),t.add(a);const o=new $r;t.add(o);const l=new xp({map:new If().load("./wand-glow.png"),color:16755200,transparent:!0,blending:Vc,opacity:.5}),c=new pg(l);c.scale.set(1.5,1.5,1),c.renderOrder=0,o.add(c);const u=new Th(.12,64,64),h=new If,d=h.load("/snitch-real.png"),f=new Lf({color:12951641,map:d,metalness:1,roughness:.25,emissive:2232576,emissiveIntensity:.2,envMapIntensity:1}),_=new _i(u,f);_.renderOrder=1,o.add(_);const g=new Ap;g.moveTo(0,0),g.bezierCurveTo(.2,.2,.5,.8,1.5,.2),g.bezierCurveTo(.8,.1,.2,.05,0,0);const m=new Eh(g),p=new Lf({color:16777215,side:Ci,transparent:!0,opacity:.4,metalness:.8,roughness:.2}),y=new _i(m,p);y.position.set(-.1,.05,0),y.rotation.z=Math.PI-.2,y.scale.set(.8,.8,.8),y.renderOrder=1;const M=new $r;M.add(y),o.add(M);const S=new _i(m,p);S.position.set(.1,.05,0),S.rotation.z=-(Math.PI-.2),S.rotation.y=Math.PI,S.scale.set(.8,.8,.8),S.renderOrder=1;const b=new $r;b.add(S),o.add(b);const w=400,A=new Gn,D=new Float32Array(w*3),v=new Float32Array(w),E=new Float32Array(w),P=new Float32Array(w);for(let et=0;et<w;et++)D[et*3]=9999,v[et]=0,E[et]=0,P[et]=Math.random()*Math.PI;A.setAttribute("position",new Pn(D,3)),A.setAttribute("size",new Pn(v,1)),A.setAttribute("opacity",new Pn(E,1)),A.setAttribute("angle",new Pn(P,1));const U=h.load("/smoke.png"),z=new Ei({uniforms:{color:{value:new le(328965)},pointTexture:{value:U}},vertexShader:`
            attribute float size;
            attribute float opacity;
            attribute float angle;
            varying float vOpacity;
            varying float vAngle;
            void main() {
                vOpacity = opacity;
                vAngle = angle;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,fragmentShader:`
            uniform vec3 color;
            uniform sampler2D pointTexture;
            varying float vOpacity;
            varying float vAngle;
            
            void main() {
                float c = cos(vAngle);
                float s = sin(vAngle);
                vec2 centered = gl_PointCoord - 0.5;
                vec2 rotated = vec2(
                    centered.x * c - centered.y * s,
                    centered.x * s + centered.y * c
                ) + 0.5;

                vec4 texColor = texture2D(pointTexture, rotated);
                gl_FragColor = vec4(color, vOpacity * texColor.r); 
            }
        `,blending:Kr,depthWrite:!1,transparent:!0}),V=new Sg(A,z);t.add(V),V.renderOrder=-1;const k=[];for(let et=0;et<w;et++)k.push({age:0,life:0,vx:0,vy:0,vz:0,growth:0});let G=0,F=0;const q=new B(0,0,0),tt=new B;window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)});function R(){requestAnimationFrame(R),F+=.05,c.material.opacity=.4+Math.sin(F*3)*.1,M.rotation.x=Math.sin(F*20),b.rotation.x=Math.sin(F*20+Math.PI),Math.random()>.99&&q.set((Math.random()-.5)*8,(Math.random()-.5)*4,(Math.random()-.5)*3);const et=Math.sin(F)*.5,Lt=Math.cos(F*1.5)*.5;tt.x+=(q.x+et-o.position.x)*.005,tt.y+=(q.y+Lt-o.position.y)*.005,tt.z+=(q.z-o.position.z)*.005,tt.multiplyScalar(.96),o.position.add(tt);const Nt=o.position.clone().add(tt.clone().multiplyScalar(10));o.lookAt(Nt),_.rotation.x+=.1;for(let $=0;$<2;$++){const st=G,Rt=V.geometry.attributes.position.array,xt=V.geometry.attributes.size.array,Vt=V.geometry.attributes.opacity.array,oe=V.geometry.attributes.angle.array;Rt[st*3]=o.position.x,Rt[st*3+1]=o.position.y,Rt[st*3+2]=o.position.z,oe[st]=Math.random()*Math.PI*2,k[st].vx=(Math.random()-.5)*.01,k[st].vy=(Math.random()-.5)*.01,k[st].vz=(Math.random()-.5)*.01,k[st].age=0,k[st].life=2+Math.random(),k[st].growth=.02+Math.random()*.02,xt[st]=1+Math.random(),Vt[st]=.6,G=(G+1)%w}const zt=V.geometry.attributes.position.array,Yt=V.geometry.attributes.size.array,J=V.geometry.attributes.opacity.array;for(let $=0;$<w;$++)if(J[$]>0){zt[$*3]+=k[$].vx,zt[$*3+1]+=k[$].vy,zt[$*3+2]+=k[$].vz,k[$].age+=.02;const st=k[$].age/k[$].life;Yt[$]+=k[$].growth,J[$]=.6*(1-st),st>=1&&(J[$]=0,zt[$*3]=9999)}V.geometry.attributes.position.needsUpdate=!0,V.geometry.attributes.size.needsUpdate=!0,V.geometry.attributes.opacity.needsUpdate=!0,n.render(t,e)}R()}function $i(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Op(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var ii={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ta={duration:.5,overwrite:!1,delay:0},wh,cn,De,pi=1e8,Ae=1/pi,ku=Math.PI*2,oy=ku/4,ly=0,Bp=Math.sqrt,cy=Math.cos,uy=Math.sin,an=function(t){return typeof t=="string"},ze=function(t){return typeof t=="function"},ar=function(t){return typeof t=="number"},Ch=function(t){return typeof t>"u"},ki=function(t){return typeof t=="object"},On=function(t){return t!==!1},Rh=function(){return typeof window<"u"},Wo=function(t){return ze(t)||an(t)},zp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},xn=Array.isArray,hy=/random\([^)]+\)/g,fy=/,\s*/g,od=/(?:-?\.?\d|\.)+/gi,kp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ac=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Vp=/[+-]=-?[.\d]+/,dy=/[^,'"\[\]\s]+/gi,py=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ie,bi,Vu,Ph,ri={},yl={},Gp,Hp=function(t){return(yl=ea(t,ri))&&Vn},Dh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},no=function(t,e){return!e&&console.warn(t)},Wp=function(t,e){return t&&(ri[t]=e)&&yl&&(yl[t]=e)||ri},io=function(){return 0},my={suppressEvents:!0,isStart:!0,kill:!1},cl={suppressEvents:!0,kill:!1},_y={suppressEvents:!0},Lh={},yr=[],Gu={},Xp,Jn={},wc={},ld=30,ul=[],Ih="",Uh=function(t){var e=t[0],n,i;if(ki(e)||ze(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ul.length;i--&&!ul[i].targetTest(e););n=ul[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new mm(t[i],n)))||t.splice(i,1);return t},jr=function(t){return t._gsap||Uh(mi(t))[0]._gsap},Yp=function(t,e,n){return(n=t[e])&&ze(n)?t[e]():Ch(n)&&t.getAttribute&&t.getAttribute(e)||n},Bn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ve=function(t){return Math.round(t*1e5)/1e5||0},Le=function(t){return Math.round(t*1e7)/1e7||0},Gs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},gy=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},El=function(){var t=yr.length,e=yr.slice(0),n,i;for(Gu={},yr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Nh=function(t){return!!(t._initted||t._startAt||t.add)},qp=function(t,e,n,i){yr.length&&!cn&&El(),t.render(e,n,!!(cn&&e<0&&Nh(t))),yr.length&&!cn&&El()},$p=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(dy).length<2?e:an(t)?t.trim():t},Zp=function(t){return t},si=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},vy=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},ea=function(t,e){for(var n in e)t[n]=e[n];return t},cd=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=ki(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Tl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Na=function(t){var e=t.parent||Ie,n=t.keyframes?vy(xn(t.keyframes)):si;if(On(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},xy=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Jp=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Bl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ar=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Qr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Sy=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Hu=function(t,e,n,i){return t._startAt&&(cn?t._startAt.revert(cl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},My=function r(t){return!t||t._ts&&r(t.parent)},ud=function(t){return t._repeat?na(t._tTime,t=t.duration()+t._rDelay)*t:0},na=function(t,e){var n=Math.floor(t=Le(t/e));return t&&n===t?n-1:n},bl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},zl=function(t){return t._end=Le(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ae)||0))},kl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Le(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),zl(t),n._dirty||Qr(n,t)),t},Kp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=bl(t.rawTime(),e),(!e._dur||mo(0,e.totalDuration(),n)-e._tTime>Ae)&&e.render(n,!0)),Qr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ae}},Pi=function(t,e,n,i){return e.parent&&Ar(e),e._start=Le((ar(n)?n:n||t!==Ie?li(t,n,e):t._time)+e._delay),e._end=Le(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Jp(t,e,"_first","_last",t._sort?"_start":0),Wu(e)||(t._recent=e),i||Kp(t,e),t._ts<0&&kl(t,t._tTime),t},jp=function(t,e){return(ri.ScrollTrigger||Dh("scrollTrigger",e))&&ri.ScrollTrigger.create(e,t)},Qp=function(t,e,n,i,s){if(Oh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!cn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Xp!==Qn.frame)return yr.push(t),t._lazy=[s,i],1},yy=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Wu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ey=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&yy(t)&&!(!t._initted&&Wu(t))||(t._ts<0||t._dp._ts<0)&&!Wu(t))?0:1,o=t._rDelay,l=0,c,u,h;if(o&&t._repeat&&(l=mo(0,t._tDur,e),u=na(l,o),t._yoyo&&u&1&&(a=1-a),u!==na(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||cn||i||t._zTime===Ae||!e&&t._zTime){if(!t._initted&&Qp(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Ae:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Hu(t,e,n,!0),t._onUpdate&&!n&&ei(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ei(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ar(t,1),!n&&!cn&&(ei(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ty=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},ia=function(t,e,n,i){var s=t._repeat,a=Le(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Le(a*(s+1)+t._rDelay*s):a,o>0&&!i&&kl(t,t._tTime=t._tDur*o),t.parent&&zl(t),n||Qr(t.parent,t),t},hd=function(t){return t instanceof Cn?Qr(t):ia(t,t._dur)},by={_start:0,endTime:io,totalDuration:io},li=function r(t,e,n){var i=t.labels,s=t._recent||by,a=t.duration()>=pi?s.endTime(!1):t._dur,o,l,c;return an(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(xn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Fa=function(t,e,n){var i=ar(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=On(l.vars.inherit)&&l.parent;a.immediateRender=On(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Ye(e[0],a,e[s+1])},Pr=function(t,e){return t||t===0?e(t):e},mo=function(t,e,n){return n<t?t:n>e?e:n},mn=function(t,e){return!an(t)||!(e=py.exec(t))?"":e[1]},Ay=function(t,e,n){return Pr(n,function(i){return mo(t,e,i)})},Xu=[].slice,tm=function(t,e){return t&&ki(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&ki(t[0]))&&!t.nodeType&&t!==bi},wy=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return an(i)&&!e||tm(i,1)?(s=n).push.apply(s,mi(i)):n.push(i)})||n},mi=function(t,e,n){return De&&!e&&De.selector?De.selector(t):an(t)&&!n&&(Vu||!ra())?Xu.call((e||Ph).querySelectorAll(t),0):xn(t)?wy(t,n):tm(t)?Xu.call(t,0):t?[t]:[]},Yu=function(t){return t=mi(t)[0]||no("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return mi(e,n.querySelectorAll?n:n===t?no("Invalid scope")||Ph.createElement("div"):t)}},em=function(t){return t.sort(function(){return .5-Math.random()})},nm=function(t){if(ze(t))return t;var e=ki(t)?t:{each:t},n=ts(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,h=i;return an(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,_){var g=(_||e).length,m=a[g],p,y,M,S,b,w,A,D,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,pi])[1],!v){for(A=-pi;A<(A=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=a[g]=[],p=l?Math.min(v,g)*u-.5:i%v,y=v===pi?0:l?g*h/v-.5:i/v|0,A=0,D=pi,w=0;w<g;w++)M=w%v-p,S=y-(w/v|0),m[w]=b=c?Math.abs(c==="y"?S:M):Bp(M*M+S*S),b>A&&(A=b),b<D&&(D=b);i==="random"&&em(m),m.max=A-D,m.min=D,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=mn(e.amount||e.each)||0,n=n&&g<0?fm(n):n}return g=(m[d]-m.min)/m.max||0,Le(m.b+(n?n(g):g)*m.v)+m.u}},qu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Le(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ar(n)?0:mn(n))}},im=function(t,e){var n=xn(t),i,s;return!n&&ki(t)&&(i=n=t.radius||pi,t.values?(t=mi(t.values),(s=!ar(t[0]))&&(i*=i)):t=qu(t.increment)),Pr(e,n?ze(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=pi,u=0,h=t.length,d,f;h--;)s?(d=t[h].x-o,f=t[h].y-l,d=d*d+f*f):d=Math.abs(t[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?t[u]:a,s||u===a||ar(a)?u:u+mn(a)}:qu(t))},rm=function(t,e,n,i){return Pr(xn(t)?!e:n===!0?!!(n=0):!i,function(){return xn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Cy=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},Ry=function(t,e){return function(n){return t(parseFloat(n))+(e||mn(n))}},Py=function(t,e,n){return am(t,e,0,1,n)},sm=function(t,e,n){return Pr(n,function(i){return t[~~e(i)]})},Dy=function r(t,e,n){var i=e-t;return xn(t)?sm(t,r(0,t.length),e):Pr(n,function(s){return(i+(s-t)%i)%i+t})},Ly=function r(t,e,n){var i=e-t,s=i*2;return xn(t)?sm(t,r(0,t.length-1),e):Pr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},ro=function(t){return t.replace(hy,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(fy);return rm(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},am=function(t,e,n,i,s){var a=e-t,o=i-n;return Pr(s,function(l){return n+((l-t)/a*o||0)})},Iy=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=an(t),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(xn(t)&&!xn(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(_){_*=h;var g=Math.min(d,~~_);return u[g](_-g)},n=e}else i||(t=ea(xn(t)?[]:{},t));if(!u){for(l in e)Fh.call(o,t,l,"get",e[l]);s=function(_){return kh(_,o)||(a?t.p:t)}}}return Pr(n,s)},fd=function(t,e,n){var i=t.labels,s=pi,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ei=function(t,e,n){var i=t.vars,s=i[e],a=De,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&yr.length&&El(),o&&(De=o),u=l?s.apply(c,l):s.call(c),De=a,u},ba=function(t){return Ar(t),t.scrollTrigger&&t.scrollTrigger.kill(!!cn),t.progress()<1&&ei(t,"onInterrupt"),t},zs,om=[],lm=function(t){if(t)if(t=!t.name&&t.default||t,Rh()||t.headless){var e=t.name,n=ze(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:io,render:kh,add:Fh,kill:Zy,modifier:$y,rawVars:0},a={targetTest:0,get:0,getSetter:zh,aliases:{},register:0};if(ra(),t!==i){if(Jn[e])return;si(i,si(Tl(t,s),a)),ea(i.prototype,ea(s,Tl(t,a))),Jn[i.prop=e]=i,t.targetTest&&(ul.push(i),Lh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Wp(e,i),t.register&&t.register(Vn,i,zn)}else om.push(t)},be=255,Aa={aqua:[0,be,be],lime:[0,be,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,be],navy:[0,0,128],white:[be,be,be],olive:[128,128,0],yellow:[be,be,0],orange:[be,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[be,0,0],pink:[be,192,203],cyan:[0,be,be],transparent:[be,be,be,0]},Cc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*be+.5|0},cm=function(t,e,n){var i=t?ar(t)?[t>>16,t>>8&be,t&be]:0:Aa.black,s,a,o,l,c,u,h,d,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Aa[t])i=Aa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&be,i&be,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&be,t&be]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(od),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Cc(l+1/3,s,a),i[1]=Cc(l,s,a),i[2]=Cc(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(kp),n&&i.length<4&&(i[3]=1),i}else i=t.match(od)||Aa.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/be,a=i[1]/be,o=i[2]/be,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},um=function(t){var e=[],n=[],i=-1;return t.split(Er).forEach(function(s){var a=s.match(Bs)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},dd=function(t,e,n){var i="",s=(t+i).match(Er),a=e?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return t;if(s=s.map(function(d){return(d=cm(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=um(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Er,"1").split(Bs),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Er),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},Er=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Aa)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),Uy=/hsl[a]?\(/,hm=function(t){var e=t.join(" "),n;if(Er.lastIndex=0,Er.test(e))return n=Uy.test(e),t[1]=dd(t[1],n),t[0]=dd(t[0],n,um(t[1])),!0},so,Qn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,f,_=function g(m){var p=r()-i,y=m===!0,M,S,b,w;if((p>t||p<0)&&(n+=p-e),i+=p,b=i-n,M=b-a,(M>0||y)&&(w=++h.frame,d=b-h.time*1e3,h.time=b=b/1e3,a+=M+(M>=s?4:s-M),S=1),y||(l=c(g)),S)for(f=0;f<o.length;f++)o[f](b,d,w,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Gp&&(!Vu&&Rh()&&(bi=Vu=window,Ph=bi.document||{},ri.gsap=Vn,(bi.gsapVersions||(bi.gsapVersions=[])).push(Vn.version),Hp(yl||bi.GreenSockGlobals||!bi.gsap&&bi||{}),om.forEach(lm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},so=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),so=0,c=io},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,p,y){var M=p?function(S,b,w,A){m(S,b,w,A),h.remove(M)}:m;return h.remove(m),o[y?"unshift":"push"](M),ra(),M},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},h})(),ra=function(){return!so&&Qn.wake()},ce={},Ny=/^[\d.\-M][\d.\-,\s]/,Fy=/["']/g,Oy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Fy,"").trim():+c,i=l.substr(o+1).trim();return e},By=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},zy=function(t){var e=(t+"").split("("),n=ce[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Oy(e[1])]:By(t).split(",").map($p)):ce._CE&&Ny.test(t)?ce._CE("",t):n},fm=function(t){return function(e){return 1-t(1-e)}},dm=function r(t,e){for(var n=t._first,i;n;)n instanceof Cn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},ts=function(t,e){return t&&(ze(t)?t:ce[t]||zy(t))||e},hs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Bn(t,function(o){ce[o]=ri[o]=s,ce[a=o.toLowerCase()]=n;for(var l in s)ce[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ce[o+"."+l]=s[l]}),s},pm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Rc=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/ku*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*uy((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:pm(o);return s=ku/s,l.config=function(c,u){return r(t,c,u)},l},Pc=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:pm(n);return i.config=function(s){return r(t,s)},i};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;hs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ce.Linear.easeNone=ce.none=ce.Linear.easeIn;hs("Elastic",Rc("in"),Rc("out"),Rc());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};hs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);hs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});hs("Circ",function(r){return-(Bp(1-r*r)-1)});hs("Sine",function(r){return r===1?1:-cy(r*oy)+1});hs("Back",Pc("in"),Pc("out"),Pc());ce.SteppedEase=ce.steps=ri.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Ae;return function(o){return((i*mo(0,a,o)|0)+s)*n}}};ta.ease=ce["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ih+=r+","+r+"Params,"});var mm=function(t,e){this.id=ly++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Yp,this.set=e?e.getSetter:zh},ao=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ia(this,+e.duration,1,1),this.data=e.data,De&&(this._ctx=De,De.data.push(this)),so||Qn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ia(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ra(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(kl(this,n),!s._dp||s.parent||Kp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ae||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ud(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ud(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?na(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ae?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?bl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ae?0:this._rts,this.totalTime(mo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),zl(this),Sy(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ra(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ae&&(this._tTime-=Ae)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Le(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(On(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=_y);var i=cn;return cn=n,Nh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),cn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,hd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(li(this,n),On(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,On(i)),this._dur||(this._zTime=-Ae),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ae:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ae,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ae)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=ze(n)?n:Zp,l=function(){var u=i.then;i.then=null,s&&s(),ze(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){ba(this)},r})();si(ao.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ae,_prom:0,_ps:!1,_rts:1});var Cn=(function(r){Op(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=On(n.sortChildren),Ie&&Pi(n.parent||Ie,$i(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&jp($i(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Fa(0,arguments,this),this},e.from=function(i,s,a){return Fa(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Fa(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Na(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ye(i,s,li(this,a),1),this},e.call=function(i,s,a){return Pi(this,Ye.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ye(i,a,li(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Na(a).immediateRender=On(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,Na(o).immediateRender=On(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Le(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,g,m,p,y,M,S,b,w,A;if(this!==Ie&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,S=this._start,M=this._ts,p=!M,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=Le(u%m),u===l?(g=this._repeat,d=c):(b=Le(u/m),g=~~b,g&&g===b&&(d=c,g--),d>c&&(d=c)),b=na(this._tTime,m),!o&&this._tTime&&b!==g&&this._tTime-b*m-this._dur<=0&&(b=g),w&&g&1&&(d=c-d,A=1),g!==b&&!this._lock){var D=w&&b&1,v=D===(w&&g&1);if(g<b&&(D=!D),o=D?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Le(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ei(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=g),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=D?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;dm(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Ty(this,Le(o),Le(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!b&&(ei(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=-Ae);break}}f=_}else{f=this._last;for(var E=i<0?i:d;f;){if(_=f._prev,(f._act||E<=f._end)&&f._ts&&y!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(E-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(E-f._start)*f._ts,s,a||cn&&Nh(f)),d!==this._time||!this._ts&&!p){y=0,_&&(u+=this._zTime=E?-Ae:Ae);break}}f=_}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-Ae)._zTime=d>=o?1:-1,this._ts))return this._start=S,zl(this),this.render(i,s,a);this._onUpdate&&!s&&ei(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ar(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(ei(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(ar(s)||(s=li(this,s,i)),!(i instanceof ao)){if(xn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(an(i))return this.addLabel(i,s);if(ze(i))i=Ye.delayedCall(0,i);else return this}return this!==i?Pi(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-pi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ye?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return an(i)?this.removeLabel(i):ze(i)?this.killTweensOf(i):(i.parent===this&&Bl(this,i),i===this._recent&&(this._recent=this._last),Qr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Le(Qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=li(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Ye.delayedCall(0,s||io,a);return o.data="isPause",this._hasPause=1,Pi(this,o,li(this,i))},e.removePause=function(i){var s=this._first;for(i=li(this,i);s;)s._start===i&&s.data==="isPause"&&Ar(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)gr!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=mi(i),l=this._first,c=ar(s),u;l;)l instanceof Ye?gy(l._targets,o)&&(c?(!gr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=li(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,_=Ye.to(a,si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ae,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&ia(_,m,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,h||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,si({startAt:{time:li(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),fd(this,li(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),fd(this,li(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ae)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Le(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Qr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=pi,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Pi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Le(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ia(a,a===Ie&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ie._ts&&(qp(Ie,bl(i,Ie)),Xp=Qn.frame),Qn.frame>=ld){ld+=ii.autoSleep||120;var s=Ie._first;if((!s||!s._ts)&&ii.autoSleep&&Qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Qn.sleep()}}},t})(ao);si(Cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var ky=function(t,e,n,i,s,a,o){var l=new zn(this._pt,t,e,0,1,Mm,null,s),c=0,u=0,h,d,f,_,g,m,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ro(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),d=n.match(Ac)||[];h=Ac.exec(i);)_=h[0],g=i.substring(c,h.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Gs(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=Ac.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Vp.test(i)||p)&&(l.e=0),this._pt=l,l},Fh=function(t,e,n,i,s,a,o,l,c,u){ze(i)&&(i=i(s||0,t,a));var h=t[e],d=n!=="get"?n:ze(h)?c?t[e.indexOf("set")||!ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,f=ze(h)?c?Xy:xm:Bh,_;if(an(i)&&(~i.indexOf("random(")&&(i=ro(i)),i.charAt(1)==="="&&(_=Gs(d,i)+(mn(d)||0),(_||_===0)&&(i=_))),!u||d!==i||$u)return!isNaN(d*i)&&i!==""?(_=new zn(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?qy:Sm,0,f),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!h&&!(e in t)&&Dh(e,i),ky.call(this,t,e,d,i,f,l||ii.stringFilter,c))},Vy=function(t,e,n,i,s){if(ze(t)&&(t=Oa(t,s,e,n,i)),!ki(t)||t.style&&t.nodeType||xn(t)||zp(t))return an(t)?Oa(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Oa(t[o],s,e,n,i);return a},_m=function(t,e,n,i,s,a){var o,l,c,u;if(Jn[t]&&(o=new Jn[t]).init(s,o.rawVars?e[t]:Vy(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new zn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==zs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},gr,$u,Oh=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:m,M=t._overwrite==="auto"&&!wh,S=t.timeline,b,w,A,D,v,E,P,U,z,V,k,G,F;if(S&&(!d||!s)&&(s="none"),t._ease=ts(s,ta.ease),t._yEase=h?fm(ts(h===!0?s:h,ta.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!S&&!!i.runBackwards,!S||d&&!i.stagger){if(U=m[0]?jr(m[0]).harness:0,G=U&&i[U.prop],b=Tl(i,Lh),g&&(g._zTime<0&&g.progress(1),e<0&&u&&o&&!f?g.render(-1,!0):g.revert(u&&_?cl:my),g._lazy=0),a){if(Ar(t._startAt=Ye.set(m,si({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&On(l),startAt:null,delay:0,onUpdate:c&&function(){return ei(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(cn||!o&&!f)&&t._startAt.revert(cl),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(o=!1),A=si({overwrite:!1,data:"isFromStart",lazy:o&&!g&&On(l),immediateRender:o,stagger:0,parent:p},b),G&&(A[U.prop]=G),Ar(t._startAt=Ye.set(m,A)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(cn?t._startAt.revert(cl):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Ae,Ae);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&On(l)||l&&!_,w=0;w<m.length;w++){if(v=m[w],P=v._gsap||Uh(m)[w]._gsap,t._ptLookup[w]=V={},Gu[P.id]&&yr.length&&El(),k=y===m?w:y.indexOf(v),U&&(z=new U).init(v,G||b,t,k,y)!==!1&&(t._pt=D=new zn(t._pt,v,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(q){V[q]=D}),z.priority&&(E=1)),!U||G)for(A in b)Jn[A]&&(z=_m(A,b,t,k,v,y))?z.priority&&(E=1):V[A]=D=Fh.call(t,v,A,"get",b[A],k,y,0,i.stringFilter);t._op&&t._op[w]&&t.kill(v,t._op[w]),M&&t._pt&&(gr=t,Ie.killTweensOf(v,V,t.globalTime(e)),F=!t.parent,gr=0),t._pt&&l&&(Gu[P.id]=1)}E&&ym(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!F,d&&e<=0&&S.render(pi,!0,!0)},Gy=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(u=d[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return $u=1,t.vars[e]="+=0",Oh(t,o),$u=0,l?no(e+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Ve(n)+mn(h.e)),h.b&&(h.b=u.s+mn(h.b))},Hy=function(t,e){var n=t[0]?jr(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=ea({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Wy=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(xn(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Oa=function(t,e,n,i,s){return ze(t)?t.call(e,n,i,s):an(t)&&~t.indexOf("random(")?ro(t):t},gm=Ih+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",vm={};Bn(gm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return vm[r]=1});var Ye=(function(r){Op(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Na(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,y=i.parent||Ie,M=(xn(n)||zp(n)?ar(n[0]):"length"in i)?[n]:mi(n),S,b,w,A,D,v,E,P;if(o._targets=M.length?Uh(M):no("GSAP target "+n+" not found. https://gsap.com",!ii.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||Wo(c)||Wo(u)){if(i=o.vars,S=o.timeline=new Cn({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:M}),S.kill(),S.parent=S._dp=$i(o),S._start=0,d||Wo(c)||Wo(u)){if(A=M.length,E=d&&nm(d),ki(d))for(D in d)~gm.indexOf(D)&&(P||(P={}),P[D]=d[D]);for(b=0;b<A;b++)w=Tl(i,vm),w.stagger=0,p&&(w.yoyoEase=p),P&&ea(w,P),v=M[b],w.duration=+Oa(c,$i(o),b,v,M),w.delay=(+Oa(u,$i(o),b,v,M)||0)-o._delay,!d&&A===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),S.to(v,w,E?E(b,v,M):0),S._ease=ce.none;S.duration()?c=u=0:o.timeline=0}else if(_){Na(si(S.vars.defaults,{ease:"none"})),S._ease=ts(_.ease||i.ease||"none");var U=0,z,V,k;if(xn(_))_.forEach(function(G){return S.to(M,G,">")}),S.duration();else{w={};for(D in _)D==="ease"||D==="easeEach"||Wy(D,_[D],w,_.easeEach);for(D in w)for(z=w[D].sort(function(G,F){return G.t-F.t}),U=0,b=0;b<z.length;b++)V=z[b],k={ease:V.e,duration:(V.t-(b?z[b-1].t:0))/100*c},k[D]=V.v,S.to(M,k,U),U+=k.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return f===!0&&!wh&&(gr=$i(o),Ie.killTweensOf(M),gr=0),Pi(y,$i(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!_&&o._start===Le(y._time)&&On(h)&&My($i(o))&&y.data!=="nested")&&(o._tTime=-Ae,o.render(Math.max(0,-u)||0)),m&&jp($i(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ae&&!u?l:i<Ae?0:i,d,f,_,g,m,p,y,M,S;if(!c)Ey(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,M=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(d=Le(h%g),h===l?(_=this._repeat,d=c):(m=Le(h/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(S=this._yEase,d=c-d),m=na(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&(M&&this._yEase&&dm(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(Le(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Qp(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(d/c),this._from&&(this.ratio=y=1-y),!o&&h&&!s&&!m&&(ei(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(y,f.d),f=f._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Hu(this,i,s,a),ei(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&ei(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Hu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ar(this,1),!s&&!(u&&!o)&&(h||o||p)&&(ei(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){so||Qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Oh(this,c),u=this._ease(c/this._dur),Gy(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(kl(this,0),this.parent||Jp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ba(this):this.scrollTrigger&&this.scrollTrigger.kill(!!cn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,gr&&gr.vars.overwrite!==!0)._first||ba(this),this.parent&&a!==this.timeline.totalDuration()&&ia(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?mi(i):o,c=this._ptLookup,u=this._pt,h,d,f,_,g,m,p;if((!s||s==="all")&&xy(o,l))return s==="all"&&(this._pt=0),ba(this);for(h=this._op=this._op||[],s!=="all"&&(an(s)&&(g={},Bn(s,function(y){return g[y]=1}),s=g),s=Hy(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(h[p]=s,_=d,f={}):(f=h[p]=h[p]||{},_=s);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Bl(this,m,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&ba(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Fa(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Fa(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Ie.killTweensOf(i,s,a)},t})(ao);si(Ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(r){Ye[r]=function(){var t=new Cn,e=Xu.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Bh=function(t,e,n){return t[e]=n},xm=function(t,e,n){return t[e](n)},Xy=function(t,e,n,i){return t[e](i.fp,n)},Yy=function(t,e,n){return t.setAttribute(e,n)},zh=function(t,e){return ze(t[e])?xm:Ch(t[e])&&t.setAttribute?Yy:Bh},Sm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},qy=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Mm=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},kh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},$y=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Zy=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Bl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Jy=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},ym=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},zn=(function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Sm,this.d=l||this,this.set=c||Bh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Jy,this.m=n,this.mt=s,this.tween=i},r})();Bn(Ih+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Lh[r]=1});ri.TweenMax=ri.TweenLite=Ye;ri.TimelineLite=ri.TimelineMax=Cn;Ie=new Cn({sortChildren:!1,defaults:ta,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ii.stringFilter=hm;var es=[],hl={},Ky=[],pd=0,jy=0,Dc=function(t){return(hl[t]||Ky).map(function(e){return e()})},Zu=function(){var t=Date.now(),e=[];t-pd>2&&(Dc("matchMediaInit"),es.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=bi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Dc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),pd=t,Dc("matchMedia"))},Em=(function(){function r(e,n){this.selector=n&&Yu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=jy++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){ze(n)&&(s=i,i=n,n=ze);var a=this,o=function(){var c=De,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Yu(s)),De=a,h=i.apply(a,arguments),ze(h)&&a._r.push(h),De=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===ze?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=De;De=null,n(this),De=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ye)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=es.length;a--;)es[a].id===this.id&&es.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})(),Qy=(function(){function r(e){this.contexts=[],this.scope=e,De&&De.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){ki(n)||(n={matches:n});var a=new Em(0,s||this.scope),o=a.conditions={},l,c,u;De&&!a.selector&&(a.selector=De.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=bi.matchMedia(n[c]),l&&(es.indexOf(a)<0&&es.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Zu):l.addEventListener("change",Zu)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Al={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return lm(i)})},timeline:function(t){return new Cn(t)},getTweensOf:function(t,e){return Ie.getTweensOf(t,e)},getProperty:function(t,e,n,i){an(t)&&(t=mi(t)[0]);var s=jr(t||{}).get,a=n?Zp:$p;return n==="native"&&(n=""),t&&(e?a((Jn[e]&&Jn[e].get||s)(t,e,n,i)):function(o,l,c){return a((Jn[o]&&Jn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=mi(t),t.length>1){var i=t.map(function(u){return Vn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var a=Jn[e],o=jr(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var h=new a;zs._pt=0,h.init(t,n?u+n:u,zs,0,[t]),h.render(1,h),zs._pt&&kh(1,zs)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=Vn.to(t,si((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return Ie.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ts(t.ease,ta.ease)),cd(ta,t||{})},config:function(t){return cd(ii,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Jn[o]&&!ri[o]&&no(e+" effect requires "+o+" plugin.")}),wc[e]=function(o,l,c){return n(mi(o),si(l||{},s),c)},a&&(Cn.prototype[e]=function(o,l,c){return this.add(wc[e](o,ki(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ce[t]=ts(e)},parseEase:function(t,e){return arguments.length?ts(t,e):ce},getById:function(t){return Ie.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Cn(t),i,s;for(n.smoothChildTiming=On(t.smoothChildTiming),Ie.remove(n),n._dp=0,n._time=n._tTime=Ie._time,i=Ie._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ye&&i.vars.onComplete===i._targets[0]))&&Pi(n,i,i._start-i._delay),i=s;return Pi(Ie,n,0),n},context:function(t,e){return t?new Em(t,e):De},matchMedia:function(t){return new Qy(t)},matchMediaRefresh:function(){return es.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Zu()},addEventListener:function(t,e){var n=hl[t]||(hl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=hl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Dy,wrapYoyo:Ly,distribute:nm,random:rm,snap:im,normalize:Py,getUnit:mn,clamp:Ay,splitColor:cm,toArray:mi,selector:Yu,mapRange:am,pipe:Cy,unitize:Ry,interpolate:Iy,shuffle:em},install:Hp,effects:wc,ticker:Qn,updateRoot:Cn.updateRoot,plugins:Jn,globalTimeline:Ie,core:{PropTween:zn,globals:Wp,Tween:Ye,Timeline:Cn,Animation:ao,getCache:jr,_removeLinkedListItem:Bl,reverting:function(){return cn},context:function(t){return t&&De&&(De.data.push(t),t._ctx=De),De},suppressOverwrites:function(t){return wh=t}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Al[r]=Ye[r]});Qn.add(Cn.updateRoot);zs=Al.to({},{duration:0});var tE=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},eE=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=tE(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Lc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(an(s)&&(l={},Bn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}eE(o,s)}}}},Vn=Al.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)cn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Lc("roundProps",qu),Lc("modifiers"),Lc("snap",im))||Al;Ye.version=Cn.version=Vn.version="3.14.2";Gp=1;Rh()&&ra();ce.Power0;ce.Power1;ce.Power2;ce.Power3;ce.Power4;ce.Linear;ce.Quad;ce.Cubic;ce.Quart;ce.Quint;ce.Strong;ce.Elastic;ce.Back;ce.SteppedEase;ce.Bounce;ce.Sine;ce.Expo;ce.Circ;var md,vr,Hs,Vh,Zr,_d,Gh,nE=function(){return typeof window<"u"},or={},Vr=180/Math.PI,Ws=Math.PI/180,Is=Math.atan2,gd=1e8,Hh=/([A-Z])/g,iE=/(left|right|width|margin|padding|x)/i,rE=/[\s,\(]\S/,Ii={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ju=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},sE=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},aE=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},oE=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},lE=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Tm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},bm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},cE=function(t,e,n){return t.style[e]=n},uE=function(t,e,n){return t.style.setProperty(e,n)},hE=function(t,e,n){return t._gsap[e]=n},fE=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},dE=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},pE=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Ne="transform",kn=Ne+"Origin",mE=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in or&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ii[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Ji(i,o)}):this.tfm[t]=a.x?a[t]:Ji(i,t),t===kn&&(this.tfm.zOrigin=a.zOrigin);else return Ii.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Ne)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(kn,e,"")),t=Ne}(s||e)&&this.props.push(t,e,s[t])},Am=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},_E=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Hh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Gh(),(!s||!s.isStart)&&!n[Ne]&&(Am(n),i.zOrigin&&n[kn]&&(n[kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},wm=function(t,e){var n={target:t,props:[],revert:_E,save:mE};return t._gsap||Vn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Cm,Ku=function(t,e){var n=vr.createElementNS?vr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):vr.createElement(t);return n&&n.style?n:vr.createElement(t)},ni=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Hh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,sa(e)||e,1)||""},vd="O,Moz,ms,Ms,Webkit".split(","),sa=function(t,e,n){var i=e||Zr,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(vd[a]+t in s););return a<0?null:(a===3?"ms":a>=0?vd[a]:"")+t},ju=function(){nE()&&window.document&&(md=window,vr=md.document,Hs=vr.documentElement,Zr=Ku("div")||{style:{}},Ku("div"),Ne=sa(Ne),kn=Ne+"Origin",Zr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cm=!!sa("perspective"),Gh=Vn.core.reverting,Vh=1)},xd=function(t){var e=t.ownerSVGElement,n=Ku("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Hs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Hs.removeChild(n),s},Sd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Rm=function(t){var e,n;try{e=t.getBBox()}catch{e=xd(t),n=1}return e&&(e.width||e.height)||n||(e=xd(t)),e&&!e.width&&!e.x&&!e.y?{x:+Sd(t,["x","cx","x1"])||0,y:+Sd(t,["y","cy","y1"])||0,width:0,height:0}:e},Pm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Rm(t))},wr=function(t,e){if(e){var n=t.style,i;e in or&&e!==kn&&(e=Ne),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Hh,"-$1").toLowerCase())):n.removeAttribute(e)}},xr=function(t,e,n,i,s,a){var o=new zn(t._pt,e,n,0,1,a?bm:Tm);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Md={deg:1,rad:1,turn:1},gE={grid:1,flex:1},Cr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Zr.style,l=iE.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",_,g,m,p;if(i===a||!s||Md[i]||Md[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&Pm(t),(f||a==="%")&&(or[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[u],Ve(f?s/_*h:s/100*_);if(o[l?"width":"height"]=h+(d?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===vr||!g.appendChild)&&(g=vr.body),m=g._gsap,m&&f&&m.width&&l&&m.time===Qn.time&&!m.uncache)return Ve(s/m.width*h);if(f&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+i,_=t[u],y?t.style[e]=y:wr(t,e)}else(f||a==="%")&&!gE[ni(g,"display")]&&(o.position=ni(t,"position")),g===t&&(o.position="static"),g.appendChild(Zr),_=Zr[u],g.removeChild(Zr),o.position="absolute";return l&&f&&(m=jr(g),m.time=Qn.time,m.width=g[u]),Ve(d?_*s/h:_&&s?h/_*s:0)},Ji=function(t,e,n,i){var s;return Vh||ju(),e in Ii&&e!=="transform"&&(e=Ii[e],~e.indexOf(",")&&(e=e.split(",")[0])),or[e]&&e!=="transform"?(s=lo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Cl(ni(t,kn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=wl[e]&&wl[e](t,e,n)||ni(t,e)||Yp(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Cr(t,e,s,n)+n:s},vE=function(t,e,n,i){if(!n||n==="none"){var s=sa(e,t,1),a=s&&ni(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=ni(t,"borderTopColor"))}var o=new zn(this._pt,t.style,e,0,1,Mm),l=0,c=0,u,h,d,f,_,g,m,p,y,M,S,b;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ni(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=ni(t,e)||i,g?t.style[e]=g:wr(t,e)),u=[n,i],hm(u),n=u[0],i=u[1],d=n.match(Bs)||[],b=i.match(Bs)||[],b.length){for(;h=Bs.exec(i);)m=h[0],y=i.substring(l,h.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(f=parseFloat(g)||0,S=g.substr((f+"").length),m.charAt(1)==="="&&(m=Gs(f,m)+S),p=parseFloat(m),M=m.substr((p+"").length),l=Bs.lastIndex-M.length,M||(M=M||ii.units[e]||S,l===i.length&&(i+=M,o.e+=M)),S!==M&&(f=Cr(t,e,g,M)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?bm:Tm;return Vp.test(i)&&(o.e=0),this._pt=o,o},yd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},xE=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=yd[n]||n,e[1]=yd[i]||i,e.join(" ")},SE=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],or[o]&&(l=1,o=o==="transformOrigin"?kn:Ne),wr(n,o);l&&(wr(n,Ne),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",lo(n,1),a.uncache=1,Am(i)))}},wl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new zn(t._pt,e,n,0,0,SE);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},oo=[1,0,0,1,0,0],Dm={},Lm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ed=function(t){var e=ni(t,Ne);return Lm(e)?oo:e.substr(7).match(kp).map(Ve)},Wh=function(t,e){var n=t._gsap||jr(t),i=t.style,s=Ed(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?oo:s):(s===oo&&!t.offsetParent&&t!==Hs&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,Hs.appendChild(t)),s=Ed(t),l?i.display=l:wr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Hs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Qu=function(t,e,n,i,s,a){var o=t._gsap,l=s||Wh(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],y=l[5],M=e.split(" "),S=parseFloat(M[0])||0,b=parseFloat(M[1])||0,w,A,D,v;n?l!==oo&&(A=f*m-_*g)&&(D=S*(m/A)+b*(-g/A)+(g*y-m*p)/A,v=S*(-_/A)+b*(f/A)-(f*y-_*p)/A,S=D,b=v):(w=Rm(t),S=w.x+(~M[0].indexOf("%")?S/100*w.width:S),b=w.y+(~(M[1]||M[0]).indexOf("%")?b/100*w.height:b)),i||i!==!1&&o.smooth?(p=S-c,y=b-u,o.xOffset=h+(p*f+y*g)-p,o.yOffset=d+(p*_+y*m)-y):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=b,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[kn]="0px 0px",a&&(xr(a,o,"xOrigin",c,S),xr(a,o,"yOrigin",u,b),xr(a,o,"xOffset",h,o.xOffset),xr(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",S+" "+b)},lo=function(t,e){var n=t._gsap||new mm(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=ni(t,kn)||"0",u,h,d,f,_,g,m,p,y,M,S,b,w,A,D,v,E,P,U,z,V,k,G,F,q,tt,R,et,Lt,Nt,zt,Yt;return u=h=d=g=m=p=y=M=S=0,f=_=1,n.svg=!!(t.getCTM&&Pm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ne]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ne]!=="none"?l[Ne]:"")),i.scale=i.rotate=i.translate="none"),A=Wh(t,n.svg),n.svg&&(n.uncache?(q=t.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",F=""):F=!e&&t.getAttribute("data-svg-origin"),Qu(t,F||c,!!F||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,w=n.yOrigin||0,A!==oo&&(P=A[0],U=A[1],z=A[2],V=A[3],u=k=A[4],h=G=A[5],A.length===6?(f=Math.sqrt(P*P+U*U),_=Math.sqrt(V*V+z*z),g=P||U?Is(U,P)*Vr:0,y=z||V?Is(z,V)*Vr+g:0,y&&(_*=Math.abs(Math.cos(y*Ws))),n.svg&&(u-=b-(b*P+w*z),h-=w-(b*U+w*V))):(Yt=A[6],Nt=A[7],R=A[8],et=A[9],Lt=A[10],zt=A[11],u=A[12],h=A[13],d=A[14],D=Is(Yt,Lt),m=D*Vr,D&&(v=Math.cos(-D),E=Math.sin(-D),F=k*v+R*E,q=G*v+et*E,tt=Yt*v+Lt*E,R=k*-E+R*v,et=G*-E+et*v,Lt=Yt*-E+Lt*v,zt=Nt*-E+zt*v,k=F,G=q,Yt=tt),D=Is(-z,Lt),p=D*Vr,D&&(v=Math.cos(-D),E=Math.sin(-D),F=P*v-R*E,q=U*v-et*E,tt=z*v-Lt*E,zt=V*E+zt*v,P=F,U=q,z=tt),D=Is(U,P),g=D*Vr,D&&(v=Math.cos(D),E=Math.sin(D),F=P*v+U*E,q=k*v+G*E,U=U*v-P*E,G=G*v-k*E,P=F,k=q),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Ve(Math.sqrt(P*P+U*U+z*z)),_=Ve(Math.sqrt(G*G+Yt*Yt)),D=Is(k,G),y=Math.abs(D)>2e-4?D*Vr:0,S=zt?1/(zt<0?-zt:zt):0),n.svg&&(F=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Lm(ni(t,Ne)),F&&t.setAttribute("transform",F))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(f*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Ve(f),n.scaleY=Ve(_),n.rotation=Ve(g)+o,n.rotationX=Ve(m)+o,n.rotationY=Ve(p)+o,n.skewX=y+o,n.skewY=M+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[kn]=Cl(c)),n.xOffset=n.yOffset=0,n.force3D=ii.force3D,n.renderTransform=n.svg?yE:Cm?Im:ME,n.uncache=0,n},Cl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ic=function(t,e,n){var i=mn(e);return Ve(parseFloat(e)+parseFloat(Cr(t,"x",n+"px",i)))+i},ME=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Im(t,e)},Br="0deg",xa="0px",zr=") ",Im=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,y=n.target,M=n.zOrigin,S="",b=p==="auto"&&t&&t!==1||p===!0;if(M&&(h!==Br||u!==Br)){var w=parseFloat(u)*Ws,A=Math.sin(w),D=Math.cos(w),v;w=parseFloat(h)*Ws,v=Math.cos(w),a=Ic(y,a,A*v*-M),o=Ic(y,o,-Math.sin(w)*-M),l=Ic(y,l,D*v*-M+M)}m!==xa&&(S+="perspective("+m+zr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(b||a!==xa||o!==xa||l!==xa)&&(S+=l!==xa||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+zr),c!==Br&&(S+="rotate("+c+zr),u!==Br&&(S+="rotateY("+u+zr),h!==Br&&(S+="rotateX("+h+zr),(d!==Br||f!==Br)&&(S+="skew("+d+", "+f+zr),(_!==1||g!==1)&&(S+="scale("+_+", "+g+zr),y.style[Ne]=S||"translate(0, 0)"},yE=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,y=n.forceCSS,M=parseFloat(a),S=parseFloat(o),b,w,A,D,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ws,c*=Ws,b=Math.cos(l)*h,w=Math.sin(l)*h,A=Math.sin(l-c)*-d,D=Math.cos(l-c)*d,c&&(u*=Ws,v=Math.tan(c-u),v=Math.sqrt(1+v*v),A*=v,D*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),b*=v,w*=v)),b=Ve(b),w=Ve(w),A=Ve(A),D=Ve(D)):(b=h,D=d,w=A=0),(M&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(M=Cr(f,"x",a,"px"),S=Cr(f,"y",o,"px")),(_||g||m||p)&&(M=Ve(M+_-(_*b+g*A)+m),S=Ve(S+g-(_*w+g*D)+p)),(i||s)&&(v=f.getBBox(),M=Ve(M+i/100*v.width),S=Ve(S+s/100*v.height)),v="matrix("+b+","+w+","+A+","+D+","+M+","+S+")",f.setAttribute("transform",v),y&&(f.style[Ne]=v)},EE=function(t,e,n,i,s){var a=360,o=an(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Vr:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*gd)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*gd)%a-~~(c/a)*a)),t._pt=d=new zn(t._pt,e,n,i,c,sE),d.e=u,d.u="deg",t._props.push(n),d},Td=function(t,e){for(var n in e)t[n]=e[n];return t},TE=function(t,e,n){var i=Td({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ne]=e,o=lo(n,1),wr(n,Ne),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ne],a[Ne]=e,o=lo(n,1),a[Ne]=c);for(l in or)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=mn(c),_=mn(u),h=f!==_?Cr(n,l,c,_):parseFloat(c),d=parseFloat(u),t._pt=new zn(t._pt,o,l,h,d-h,Ju),t._pt.u=_||0,t._props.push(l));Td(o,i)};Bn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});wl[t>1?"border"+r:r]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(_){return Ji(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,h)}});var Um={name:"css",register:ju,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,h,d,f,_,g,m,p,y,M,S,b,w,A,D,v;Vh||ju(),this.styles=this.styles||wm(t),D=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Jn[g]&&_m(g,e,n,i,t,s)))){if(f=typeof u,_=wl[g],f==="function"&&(u=u.call(n,i,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=ro(u)),_)_(this,t,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",Er.lastIndex=0,Er.test(c)||(m=mn(c),p=mn(u),p?m!==p&&(c=Cr(t,g,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),D.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],an(c)&&~c.indexOf("random(")&&(c=ro(c)),mn(c+"")||c==="auto"||(c+=ii.units[g]||mn(Ji(t,g))||""),(c+"").charAt(1)==="="&&(c=Ji(t,g))):c=Ji(t,g),d=parseFloat(c),y=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in Ii&&(g==="autoAlpha"&&(d===1&&Ji(t,"visibility")==="hidden"&&h&&(d=0),D.push("visibility",0,o.visibility),xr(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Ii[g],~g.indexOf(",")&&(g=g.split(",")[0]))),M=g in or,M){if(this.styles.save(g),v=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=ni(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var E=t.style.perspective;t.style.perspective=u,u=ni(t,"perspective"),E?t.style.perspective=E:wr(t,"perspective")}h=parseFloat(u)}if(S||(b=t._gsap,b.renderTransform&&!e.parseTransform||lo(t,e.parseTransform),w=e.smoothOrigin!==!1&&b.smooth,S=this._pt=new zn(this._pt,o,Ne,0,1,b.renderTransform,b,0,-1),S.dep=1),g==="scale")this._pt=new zn(this._pt,b,"scaleY",b.scaleY,(y?Gs(b.scaleY,y+h):h)-b.scaleY||0,Ju),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){D.push(kn,0,o[kn]),u=xE(u),b.svg?Qu(t,u,0,w,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&xr(this,b,"zOrigin",b.zOrigin,p),xr(this,o,g,Cl(c),Cl(u)));continue}else if(g==="svgOrigin"){Qu(t,u,1,w,0,this);continue}else if(g in Dm){EE(this,b,g,d,y?Gs(d,y+u):u);continue}else if(g==="smoothOrigin"){xr(this,b,"smooth",b.smooth,u);continue}else if(g==="force3D"){b[g]=u;continue}else if(g==="transform"){TE(this,u,t);continue}}else g in o||(g=sa(g)||g);if(M||(h||h===0)&&(d||d===0)&&!rE.test(u)&&g in o)m=(c+"").substr((d+"").length),h||(h=0),p=mn(u)||(g in ii.units?ii.units[g]:m),m!==p&&(d=Cr(t,g,c,p)),this._pt=new zn(this._pt,M?b:o,g,d,(y?Gs(d,y+h):h)-d,!M&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?lE:Ju),this._pt.u=p||0,M&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=oE):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=aE);else if(g in o)vE.call(this,t,g,c,y?y+u:u);else if(g in t)this.add(t,g,c||t[g],y?y+u:u,i,s);else if(g!=="parseTransform"){Dh(g,u);continue}M||(g in o?D.push(g,0,o[g]):typeof t[g]=="function"?D.push(g,2,t[g]()):D.push(g,1,c||t[g])),a.push(g)}}A&&ym(this)},render:function(t,e){if(e.tween._time||!Gh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ji,aliases:Ii,getSetter:function(t,e,n){var i=Ii[e];return i&&i.indexOf(",")<0&&(e=i),e in or&&e!==kn&&(t._gsap.x||Ji(t,"x"))?n&&_d===n?e==="scale"?fE:hE:(_d=n||{})&&(e==="scale"?dE:pE):t.style&&!Ch(t.style[e])?cE:~e.indexOf("-")?uE:zh(t,e)},core:{_removeProperty:wr,_getMatrix:Wh}};Vn.utils.checkPrefix=sa;Vn.core.getStyleSaver=wm;(function(r,t,e,n){var i=Bn(r+","+t+","+e,function(s){or[s]=1});Bn(t,function(s){ii.units[s]="deg",Dm[s]=1}),Ii[i[13]]=r+","+t,Bn(n,function(s){var a=s.split(":");Ii[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ii.units[r]="px"});Vn.registerPlugin(Um);var Zi=Vn.registerPlugin(Um)||Vn;Zi.core.Tween;function bE(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function AE(r,t,e){return t&&bE(r.prototype,t),r}var ln,fl,ti,Sr,Mr,Xs,Nm,Gr,Ba,Fm,Qi,Mi,Om,Bm=function(){return ln||typeof window<"u"&&(ln=window.gsap)&&ln.registerPlugin&&ln},zm=1,ks=[],re=[],Oi=[],za=Date.now,th=function(t,e){return e},wE=function(){var t=Ba.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,re),i.push.apply(i,Oi),re=n,Oi=i,th=function(a,o){return e[a](o)}},Tr=function(t,e){return~Oi.indexOf(t)&&Oi[Oi.indexOf(t)+1][e]},ka=function(t){return!!~Fm.indexOf(t)},En=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},yn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Xo="scrollLeft",Yo="scrollTop",eh=function(){return Qi&&Qi.isPressed||re.cache++},Rl=function(t,e){var n=function i(s){if(s||s===0){zm&&(ti.history.scrollRestoration="manual");var a=Qi&&Qi.isPressed;s=i.v=Math.round(s)||(Qi&&Qi.iOS?1:0),t(s),i.cacheID=re.cache,a&&th("ss",s)}else(e||re.cache!==i.cacheID||th("ref"))&&(i.cacheID=re.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Rn={s:Xo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Rl(function(r){return arguments.length?ti.scrollTo(r,Je.sc()):ti.pageXOffset||Sr[Xo]||Mr[Xo]||Xs[Xo]||0})},Je={s:Yo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Rn,sc:Rl(function(r){return arguments.length?ti.scrollTo(Rn.sc(),r):ti.pageYOffset||Sr[Yo]||Mr[Yo]||Xs[Yo]||0})},Nn=function(t,e){return(e&&e._ctx&&e._ctx.selector||ln.utils.toArray)(t)[0]||(typeof t=="string"&&ln.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},CE=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Rr=function(t,e){var n=e.s,i=e.sc;ka(t)&&(t=Sr.scrollingElement||Mr);var s=re.indexOf(t),a=i===Je.sc?1:2;!~s&&(s=re.push(t)-1),re[s+a]||En(t,"scroll",eh);var o=re[s+a],l=o||(re[s+a]=Rl(Tr(t,n),!0)||(ka(t)?i:Rl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=ln.getProperty(t,"scrollBehavior")==="smooth"),l},nh=function(t,e,n){var i=t,s=t,a=za(),o=a,l=e||50,c=Math.max(500,l*3),u=function(_,g){var m=za();g||m-a>l?(s=i,i=_,o=a,a=m):n?i+=_:i=s+(_-s)/(m-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},d=function(_){var g=o,m=s,p=za();return(_||_===0)&&_!==i&&u(_),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-g)*1e3};return{update:u,reset:h,getVelocity:d}},Sa=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},bd=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},km=function(){Ba=ln.core.globals().ScrollTrigger,Ba&&Ba.core&&wE()},Vm=function(t){return ln=t||Bm(),!fl&&ln&&typeof document<"u"&&document.body&&(ti=window,Sr=document,Mr=Sr.documentElement,Xs=Sr.body,Fm=[ti,Sr,Mr,Xs],ln.utils.clamp,Om=ln.core.context||function(){},Gr="onpointerenter"in Xs?"pointer":"mouse",Nm=Ge.isTouch=ti.matchMedia&&ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mi=Ge.eventTypes=("ontouchstart"in Mr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Mr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return zm=0},500),km(),fl=1),fl};Rn.op=Je;re.cache=0;var Ge=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){fl||Vm(ln)||console.warn("Please gsap.registerPlugin(Observer)"),Ba||km();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,y=n.onDrag,M=n.onPress,S=n.onRelease,b=n.onRight,w=n.onLeft,A=n.onUp,D=n.onDown,v=n.onChangeX,E=n.onChangeY,P=n.onChange,U=n.onToggleX,z=n.onToggleY,V=n.onHover,k=n.onHoverEnd,G=n.onMove,F=n.ignoreCheck,q=n.isNormalizer,tt=n.onGestureStart,R=n.onGestureEnd,et=n.onWheel,Lt=n.onEnable,Nt=n.onDisable,zt=n.onClick,Yt=n.scrollSpeed,J=n.capture,$=n.allowClicks,st=n.lockAxis,Rt=n.onLockAxis;this.target=o=Nn(o)||Mr,this.vars=n,f&&(f=ln.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,Yt=Yt||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ti.getComputedStyle(Xs).lineHeight)||22);var xt,Vt,oe,Tt,kt,Zt,Ft,W=this,I=0,me=0,Qt=n.passive||!u&&n.passive!==!1,Gt=Rr(o,Rn),Mt=Rr(o,Je),C=Gt(),x=Mt(),N=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Mi[0]==="pointerdown",K=ka(o),j=o.ownerDocument||Sr,Z=[0,0,0],St=[0,0,0],at=0,bt=function(){return at=za()},Et=function(Pt,Jt){return(W.event=Pt)&&f&&CE(Pt.target,f)||Jt&&N&&Pt.pointerType!=="touch"||F&&F(Pt,Jt)},rt=function(){W._vx.reset(),W._vy.reset(),Vt.pause(),h&&h(W)},ot=function(){var Pt=W.deltaX=bd(Z),Jt=W.deltaY=bd(St),pt=Math.abs(Pt)>=i,Xt=Math.abs(Jt)>=i;P&&(pt||Xt)&&P(W,Pt,Jt,Z,St),pt&&(b&&W.deltaX>0&&b(W),w&&W.deltaX<0&&w(W),v&&v(W),U&&W.deltaX<0!=I<0&&U(W),I=W.deltaX,Z[0]=Z[1]=Z[2]=0),Xt&&(D&&W.deltaY>0&&D(W),A&&W.deltaY<0&&A(W),E&&E(W),z&&W.deltaY<0!=me<0&&z(W),me=W.deltaY,St[0]=St[1]=St[2]=0),(Tt||oe)&&(G&&G(W),oe&&(m&&oe===1&&m(W),y&&y(W),oe=0),Tt=!1),Zt&&!(Zt=!1)&&Rt&&Rt(W),kt&&(et(W),kt=!1),xt=0},yt=function(Pt,Jt,pt){Z[pt]+=Pt,St[pt]+=Jt,W._vx.update(Pt),W._vy.update(Jt),c?xt||(xt=requestAnimationFrame(ot)):ot()},At=function(Pt,Jt){st&&!Ft&&(W.axis=Ft=Math.abs(Pt)>Math.abs(Jt)?"x":"y",Zt=!0),Ft!=="y"&&(Z[2]+=Pt,W._vx.update(Pt,!0)),Ft!=="x"&&(St[2]+=Jt,W._vy.update(Jt,!0)),c?xt||(xt=requestAnimationFrame(ot)):ot()},lt=function(Pt){if(!Et(Pt,1)){Pt=Sa(Pt,u);var Jt=Pt.clientX,pt=Pt.clientY,Xt=Jt-W.x,It=pt-W.y,qt=W.isDragging;W.x=Jt,W.y=pt,(qt||(Xt||It)&&(Math.abs(W.startX-Jt)>=s||Math.abs(W.startY-pt)>=s))&&(oe||(oe=qt?2:1),qt||(W.isDragging=!0),At(Xt,It))}},Wt=W.onPress=function(_t){Et(_t,1)||_t&&_t.button||(W.axis=Ft=null,Vt.pause(),W.isPressed=!0,_t=Sa(_t),I=me=0,W.startX=W.x=_t.clientX,W.startY=W.y=_t.clientY,W._vx.reset(),W._vy.reset(),En(q?o:j,Mi[1],lt,Qt,!0),W.deltaX=W.deltaY=0,M&&M(W))},L=W.onRelease=function(_t){if(!Et(_t,1)){yn(q?o:j,Mi[1],lt,!0);var Pt=!isNaN(W.y-W.startY),Jt=W.isDragging,pt=Jt&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),Xt=Sa(_t);!pt&&Pt&&(W._vx.reset(),W._vy.reset(),u&&$&&ln.delayedCall(.08,function(){if(za()-at>300&&!_t.defaultPrevented){if(_t.target.click)_t.target.click();else if(j.createEvent){var It=j.createEvent("MouseEvents");It.initMouseEvent("click",!0,!0,ti,1,Xt.screenX,Xt.screenY,Xt.clientX,Xt.clientY,!1,!1,!1,!1,0,null),_t.target.dispatchEvent(It)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,h&&Jt&&!q&&Vt.restart(!0),oe&&ot(),p&&Jt&&p(W),S&&S(W,pt)}},ht=function(Pt){return Pt.touches&&Pt.touches.length>1&&(W.isGesturing=!0)&&tt(Pt,W.isDragging)},it=function(){return(W.isGesturing=!1)||R(W)},ft=function(Pt){if(!Et(Pt)){var Jt=Gt(),pt=Mt();yt((Jt-C)*Yt,(pt-x)*Yt,1),C=Jt,x=pt,h&&Vt.restart(!0)}},nt=function(Pt){if(!Et(Pt)){Pt=Sa(Pt,u),et&&(kt=!0);var Jt=(Pt.deltaMode===1?l:Pt.deltaMode===2?ti.innerHeight:1)*_;yt(Pt.deltaX*Jt,Pt.deltaY*Jt,0),h&&!q&&Vt.restart(!0)}},Q=function(Pt){if(!Et(Pt)){var Jt=Pt.clientX,pt=Pt.clientY,Xt=Jt-W.x,It=pt-W.y;W.x=Jt,W.y=pt,Tt=!0,h&&Vt.restart(!0),(Xt||It)&&At(Xt,It)}},ut=function(Pt){W.event=Pt,V(W)},Ut=function(Pt){W.event=Pt,k(W)},fe=function(Pt){return Et(Pt)||Sa(Pt,u)&&zt(W)};Vt=W._dc=ln.delayedCall(d||.25,rt).pause(),W.deltaX=W.deltaY=0,W._vx=nh(0,50,!0),W._vy=nh(0,50,!0),W.scrollX=Gt,W.scrollY=Mt,W.isDragging=W.isGesturing=W.isPressed=!1,Om(this),W.enable=function(_t){return W.isEnabled||(En(K?j:o,"scroll",eh),a.indexOf("scroll")>=0&&En(K?j:o,"scroll",ft,Qt,J),a.indexOf("wheel")>=0&&En(o,"wheel",nt,Qt,J),(a.indexOf("touch")>=0&&Nm||a.indexOf("pointer")>=0)&&(En(o,Mi[0],Wt,Qt,J),En(j,Mi[2],L),En(j,Mi[3],L),$&&En(o,"click",bt,!0,!0),zt&&En(o,"click",fe),tt&&En(j,"gesturestart",ht),R&&En(j,"gestureend",it),V&&En(o,Gr+"enter",ut),k&&En(o,Gr+"leave",Ut),G&&En(o,Gr+"move",Q)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=Tt=oe=!1,W._vx.reset(),W._vy.reset(),C=Gt(),x=Mt(),_t&&_t.type&&Wt(_t),Lt&&Lt(W)),W},W.disable=function(){W.isEnabled&&(ks.filter(function(_t){return _t!==W&&ka(_t.target)}).length||yn(K?j:o,"scroll",eh),W.isPressed&&(W._vx.reset(),W._vy.reset(),yn(q?o:j,Mi[1],lt,!0)),yn(K?j:o,"scroll",ft,J),yn(o,"wheel",nt,J),yn(o,Mi[0],Wt,J),yn(j,Mi[2],L),yn(j,Mi[3],L),yn(o,"click",bt,!0),yn(o,"click",fe),yn(j,"gesturestart",ht),yn(j,"gestureend",it),yn(o,Gr+"enter",ut),yn(o,Gr+"leave",Ut),yn(o,Gr+"move",Q),W.isEnabled=W.isPressed=W.isDragging=!1,Nt&&Nt(W))},W.kill=W.revert=function(){W.disable();var _t=ks.indexOf(W);_t>=0&&ks.splice(_t,1),Qi===W&&(Qi=0)},ks.push(W),q&&ka(o)&&(Qi=W),W.enable(g)},AE(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ge.version="3.14.2";Ge.create=function(r){return new Ge(r)};Ge.register=Vm;Ge.getAll=function(){return ks.slice()};Ge.getById=function(r){return ks.filter(function(t){return t.vars.id===r})[0]};Bm()&&ln.registerPlugin(Ge);var wt,Fs,ie,Ce,Kn,_e,Xh,Pl,co,Va,wa,qo,dn,Vl,ih,An,Ad,wd,Os,Gm,Uc,Hm,bn,rh,Wm,Xm,pr,sh,Yh,Ys,qh,Ga,ah,Nc,$o=1,pn=Date.now,Fc=pn(),gi=0,Ca=0,Cd=function(t,e,n){var i=Zn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Rd=function(t,e){return e&&(!Zn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},RE=function r(){return Ca&&requestAnimationFrame(r)},Pd=function(){return Vl=1},Dd=function(){return Vl=0},Ai=function(t){return t},Ra=function(t){return Math.round(t*1e5)/1e5||0},Ym=function(){return typeof window<"u"},qm=function(){return wt||Ym()&&(wt=window.gsap)&&wt.registerPlugin&&wt},os=function(t){return!!~Xh.indexOf(t)},$m=function(t){return(t==="Height"?qh:ie["inner"+t])||Kn["client"+t]||_e["client"+t]},Zm=function(t){return Tr(t,"getBoundingClientRect")||(os(t)?function(){return gl.width=ie.innerWidth,gl.height=qh,gl}:function(){return Ki(t)})},PE=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=Tr(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?$m(s):t["client"+s])||0}},DE=function(t,e){return!e||~Oi.indexOf(t)?Zm(t):function(){return gl}},Ui=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=Tr(t,n))?a()-Zm(t)()[s]:os(t)?(Kn[n]||_e[n])-$m(i):t[n]-t["offset"+i])},Zo=function(t,e){for(var n=0;n<Os.length;n+=3)(!e||~e.indexOf(Os[n+1]))&&t(Os[n],Os[n+1],Os[n+2])},Zn=function(t){return typeof t=="string"},_n=function(t){return typeof t=="function"},Pa=function(t){return typeof t=="number"},Hr=function(t){return typeof t=="object"},Ma=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Oc=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Us=Math.abs,Jm="left",Km="top",$h="right",Zh="bottom",ns="width",is="height",Ha="Right",Wa="Left",Xa="Top",Ya="Bottom",Xe="padding",hi="margin",aa="Width",Jh="Height",Ze="px",fi=function(t){return ie.getComputedStyle(t)},LE=function(t){var e=fi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Ld=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ki=function(t,e){var n=e&&fi(t)[ih]!=="matrix(1, 0, 0, 1, 0, 0)"&&wt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Dl=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},jm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},IE=function(t){return function(e){return wt.utils.snap(jm(t),e)}},Kh=function(t){var e=wt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},UE=function(t){return function(e,n){return Kh(jm(t))(e,n.direction)}},Jo=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},sn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},rn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ko=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Id={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},jo={toggleActions:"play",anticipatePin:0},Ll={top:0,left:0,center:.5,bottom:1,right:1},dl=function(t,e){if(Zn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Ll?Ll[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Qo=function(t,e,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,f=s.fontWeight,_=Ce.createElement("div"),g=os(n)||Tr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?_e:n,y=t.indexOf("start")!==-1,M=y?c:u,S="border-color:"+M+";font-size:"+h+";color:"+M+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(S+=(i===Je?$h:Zh)+":"+(a+parseFloat(d))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=S,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],pl(_,0,i,y),_},pl=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+aa]=1,s["border"+o+aa]=0,s[n.p]=e+"px",wt.set(t,s)},te=[],oh={},uo,Ud=function(){return pn()-gi>34&&(uo||(uo=requestAnimationFrame(ir)))},Ns=function(){(!bn||!bn.isPressed||bn.startX>_e.clientWidth)&&(re.cache++,bn?uo||(uo=requestAnimationFrame(ir)):ir(),gi||cs("scrollStart"),gi=pn())},Bc=function(){Xm=ie.innerWidth,Wm=ie.innerHeight},Da=function(t){re.cache++,(t===!0||!dn&&!Hm&&!Ce.fullscreenElement&&!Ce.webkitFullscreenElement&&(!rh||Xm!==ie.innerWidth||Math.abs(ie.innerHeight-Wm)>ie.innerHeight*.25))&&Pl.restart(!0)},ls={},NE=[],Qm=function r(){return rn(ae,"scrollEnd",r)||Jr(!0)},cs=function(t){return ls[t]&&ls[t].map(function(e){return e()})||NE},$n=[],t_=function(t){for(var e=0;e<$n.length;e+=5)(!t||$n[e+4]&&$n[e+4].query===t)&&($n[e].style.cssText=$n[e+1],$n[e].getBBox&&$n[e].setAttribute("transform",$n[e+2]||""),$n[e+3].uncache=1)},e_=function(){return re.forEach(function(t){return _n(t)&&++t.cacheID&&(t.rec=t())})},jh=function(t,e){var n;for(An=0;An<te.length;An++)n=te[An],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Ga=!0,e&&t_(e),e||cs("revert")},n_=function(t,e){re.cache++,(e||!wn)&&re.forEach(function(n){return _n(n)&&n.cacheID++&&(n.rec=0)}),Zn(t)&&(ie.history.scrollRestoration=Yh=t)},wn,rs=0,Nd,FE=function(){if(Nd!==rs){var t=Nd=rs;requestAnimationFrame(function(){return t===rs&&Jr(!0)})}},i_=function(){_e.appendChild(Ys),qh=!bn&&Ys.offsetHeight||ie.innerHeight,_e.removeChild(Ys)},Fd=function(t){return co(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Jr=function(t,e){if(Kn=Ce.documentElement,_e=Ce.body,Xh=[ie,Ce,Kn,_e],gi&&!t&&!Ga){sn(ae,"scrollEnd",Qm);return}i_(),wn=ae.isRefreshing=!0,Ga||e_();var n=cs("refreshInit");Gm&&ae.sort(),e||jh(),re.forEach(function(i){_n(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),te.slice(0).forEach(function(i){return i.refresh()}),Ga=!1,te.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),ah=1,Fd(!0),te.forEach(function(i){var s=Ui(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Fd(!1),ah=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),re.forEach(function(i){_n(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),n_(Yh,1),Pl.pause(),rs++,wn=2,ir(2),te.forEach(function(i){return _n(i.vars.onRefresh)&&i.vars.onRefresh(i)}),wn=ae.isRefreshing=!1,cs("refresh")},lh=0,ml=1,qa,ir=function(t){if(t===2||!wn&&!Ga){ae.isUpdating=!0,qa&&qa.update(0);var e=te.length,n=pn(),i=n-Fc>=50,s=e&&te[0].scroll();if(ml=lh>s?-1:1,wn||(lh=s),i&&(gi&&!Vl&&n-gi>200&&(gi=0,cs("scrollEnd")),wa=Fc,Fc=n),ml<0){for(An=e;An-- >0;)te[An]&&te[An].update(0,i);ml=1}else for(An=0;An<e;An++)te[An]&&te[An].update(0,i);ae.isUpdating=!1}uo=0},ch=[Jm,Km,Zh,$h,hi+Ya,hi+Ha,hi+Xa,hi+Wa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],_l=ch.concat([ns,is,"boxSizing","max"+aa,"max"+Jh,"position",hi,Xe,Xe+Xa,Xe+Ha,Xe+Ya,Xe+Wa]),OE=function(t,e,n){qs(n);var i=t._gsap;if(i.spacerIsNative)qs(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},zc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=ch.length,a=e.style,o=t.style,l;s--;)l=ch[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Zh]=o[$h]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ns]=Dl(t,Rn)+Ze,a[is]=Dl(t,Je)+Ze,a[Xe]=o[hi]=o[Km]=o[Jm]="0",qs(i),o[ns]=o["max"+aa]=n[ns],o[is]=o["max"+Jh]=n[is],o[Xe]=n[Xe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},BE=/([A-Z])/g,qs=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||wt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(BE,"-$1").toLowerCase())}},tl=function(t){for(var e=_l.length,n=t.style,i=[],s=0;s<e;s++)i.push(_l[s],n[_l[s]]);return i.t=t,i},zE=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},gl={left:0,top:0},Od=function(t,e,n,i,s,a,o,l,c,u,h,d,f,_){_n(t)&&(t=t(l)),Zn(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?dl("0"+t.substr(3),n):0));var g=f?f.time():0,m,p,y;if(f&&f.seek(0),isNaN(t)||(t=+t),Pa(t))f&&(t=wt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,t)),o&&pl(o,n,i,!0);else{_n(e)&&(e=e(l));var M=(t||"0").split(" "),S,b,w,A;y=Nn(e,l)||_e,S=Ki(y)||{},(!S||!S.left&&!S.top)&&fi(y).display==="none"&&(A=y.style.display,y.style.display="block",S=Ki(y),A?y.style.display=A:y.style.removeProperty("display")),b=dl(M[0],S[i.d]),w=dl(M[1]||"0",n),t=S[i.p]-c[i.p]-u+b+s-w,o&&pl(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(_&&(l[_]=t||-.001,t<0&&(t=0)),a){var D=t+n,v=a._isStart;m="scroll"+i.d2,pl(a,D,i,v&&D>20||!v&&(h?Math.max(_e[m],Kn[m]):a.parentNode[m])<=D+1),h&&(c=Ki(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Ze))}return f&&y&&(m=Ki(y),f.seek(d),p=Ki(y),f._caScrollDist=m[i.p]-p[i.p],t=t/f._caScrollDist*d),f&&f.seek(g),f?t:Math.round(t)},kE=/(webkit|moz|length|cssText|inset)/i,Bd=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===_e){t._stOrig=s.cssText,o=fi(t);for(a in o)!+a&&!kE.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;wt.core.getCache(t).uncache=1,e.appendChild(t)}},r_=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},el=function(t,e,n){var i={};i[e.p]="+="+n,wt.set(t,i)},zd=function(t,e){var n=Rr(t,e),i="_scroll"+e.p2,s=function a(o,l,c,u,h){var d=a.tween,f=l.onComplete,_={};c=c||n();var g=r_(n,c,function(){d.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){re.cache++,a.tween&&ir()},l.onComplete=function(){a.tween=0,f&&f.call(d)},d=a.tween=wt.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},sn(t,"wheel",n.wheelHandler),ae.isTouch&&sn(t,"touchmove",n.wheelHandler),s},ae=(function(){function r(e,n){Fs||r.register(wt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),sh(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ca){this.update=this.refresh=this.kill=Ai;return}n=Ld(Zn(n)||Pa(n)||n.nodeType?{trigger:n}:n,jo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,M=s.once,S=s.snap,b=s.pinReparent,w=s.pinSpacer,A=s.containerAnimation,D=s.fastScrollEnd,v=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Rn:Je,P=!h&&h!==0,U=Nn(n.scroller||ie),z=wt.core.getCache(U),V=os(U),k=("pinType"in n?n.pinType:Tr(U,"pinType")||V&&"fixed")==="fixed",G=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],F=P&&n.toggleActions.split(" "),q="markers"in n?n.markers:jo.markers,tt=V?0:parseFloat(fi(U)["border"+E.p2+aa])||0,R=this,et=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Lt=PE(U,V,E),Nt=DE(U,V),zt=0,Yt=0,J=0,$=Rr(U,E),st,Rt,xt,Vt,oe,Tt,kt,Zt,Ft,W,I,me,Qt,Gt,Mt,C,x,N,K,j,Z,St,at,bt,Et,rt,ot,yt,At,lt,Wt,L,ht,it,ft,nt,Q,ut,Ut;if(R._startClamp=R._endClamp=!1,R._dir=E,m*=45,R.scroller=U,R.scroll=A?A.time.bind(A):$,Vt=$(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Gm=1,n.refreshPriority===-9999&&(qa=R)),z.tweenScroll=z.tweenScroll||{top:zd(U,Je),left:zd(U,Rn)},R.tweenTo=st=z.tweenScroll[E.p],R.scrubDuration=function(pt){ht=Pa(pt)&&pt,ht?L?L.duration(pt):L=wt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ht,paused:!0,onComplete:function(){return p&&p(R)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(h),lt=0,l||(l=i.vars.id)),S&&((!Hr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in _e.style&&wt.set(V?[_e,Kn]:U,{scrollBehavior:"auto"}),re.forEach(function(pt){return _n(pt)&&pt.target===(V?Ce.scrollingElement||Kn:U)&&(pt.smooth=!1)}),xt=_n(S.snapTo)?S.snapTo:S.snapTo==="labels"?IE(i):S.snapTo==="labelsDirectional"?UE(i):S.directional!==!1?function(pt,Xt){return Kh(S.snapTo)(pt,pn()-Yt<500?0:Xt.direction)}:wt.utils.snap(S.snapTo),it=S.duration||{min:.1,max:2},it=Hr(it)?Va(it.min,it.max):Va(it,it),ft=wt.delayedCall(S.delay||ht/2||.1,function(){var pt=$(),Xt=pn()-Yt<500,It=st.tween;if((Xt||Math.abs(R.getVelocity())<10)&&!It&&!Vl&&zt!==pt){var qt=(pt-Tt)/Gt,ke=i&&!P?i.totalProgress():qt,ee=Xt?0:(ke-Wt)/(pn()-wa)*1e3||0,ge=wt.utils.clamp(-qt,1-qt,Us(ee/2)*ee/.185),He=qt+(S.inertia===!1?0:ge),Re,Ee,de=S,Ln=de.onStart,Se=de.onInterrupt,un=de.onComplete;if(Re=xt(He,R),Pa(Re)||(Re=He),Ee=Math.max(0,Math.round(Tt+Re*Gt)),pt<=kt&&pt>=Tt&&Ee!==pt){if(It&&!It._initted&&It.data<=Us(Ee-pt))return;S.inertia===!1&&(ge=Re-qt),st(Ee,{duration:it(Us(Math.max(Us(He-ke),Us(Re-ke))*.185/ee/.05||0)),ease:S.ease||"power3",data:Us(Ee-pt),onInterrupt:function(){return ft.restart(!0)&&Se&&Se(R)},onComplete:function(){R.update(),zt=$(),i&&!P&&(L?L.resetTo("totalProgress",Re,i._tTime/i._tDur):i.progress(Re)),lt=Wt=i&&!P?i.totalProgress():R.progress,y&&y(R),un&&un(R)}},pt,ge*Gt,Ee-pt-ge*Gt),Ln&&Ln(R,st.tween)}}else R.isActive&&zt!==pt&&ft.restart(!0)}).pause()),l&&(oh[l]=R),d=R.trigger=Nn(d||f!==!0&&f),Ut=d&&d._gsap&&d._gsap.stRevert,Ut&&(Ut=Ut(R)),f=f===!0?d:Nn(f),Zn(o)&&(o={targets:d,className:o}),f&&(_===!1||_===hi||(_=!_&&f.parentNode&&f.parentNode.style&&fi(f.parentNode).display==="flex"?!1:Xe),R.pin=f,Rt=wt.core.getCache(f),Rt.spacer?Mt=Rt.pinState:(w&&(w=Nn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Rt.spacerIsNative=!!w,w&&(Rt.spacerState=tl(w))),Rt.spacer=N=w||Ce.createElement("div"),N.classList.add("pin-spacer"),l&&N.classList.add("pin-spacer-"+l),Rt.pinState=Mt=tl(f)),n.force3D!==!1&&wt.set(f,{force3D:!0}),R.spacer=N=Rt.spacer,At=fi(f),bt=At[_+E.os2],j=wt.getProperty(f),Z=wt.quickSetter(f,E.a,Ze),zc(f,N,At),x=tl(f)),q){me=Hr(q)?Ld(q,Id):Id,W=Qo("scroller-start",l,U,E,me,0),I=Qo("scroller-end",l,U,E,me,0,W),K=W["offset"+E.op.d2];var fe=Nn(Tr(U,"content")||U);Zt=this.markerStart=Qo("start",l,fe,E,me,K,0,A),Ft=this.markerEnd=Qo("end",l,fe,E,me,K,0,A),A&&(ut=wt.quickSetter([Zt,Ft],E.a,Ze)),!k&&!(Oi.length&&Tr(U,"fixedMarkers")===!0)&&(LE(V?_e:U),wt.set([W,I],{force3D:!0}),rt=wt.quickSetter(W,E.a,Ze),yt=wt.quickSetter(I,E.a,Ze))}if(A){var _t=A.vars.onUpdate,Pt=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){R.update(0,0,1),_t&&_t.apply(A,Pt||[])})}if(R.previous=function(){return te[te.indexOf(R)-1]},R.next=function(){return te[te.indexOf(R)+1]},R.revert=function(pt,Xt){if(!Xt)return R.kill(!0);var It=pt!==!1||!R.enabled,qt=dn;It!==R.isReverted&&(It&&(nt=Math.max($(),R.scroll.rec||0),J=R.progress,Q=i&&i.progress()),Zt&&[Zt,Ft,W,I].forEach(function(ke){return ke.style.display=It?"none":"block"}),It&&(dn=R,R.update(It)),f&&(!b||!R.isActive)&&(It?OE(f,N,Mt):zc(f,N,fi(f),Et)),It||R.update(It),dn=qt,R.isReverted=It)},R.refresh=function(pt,Xt,It,qt){if(!((dn||!R.enabled)&&!Xt)){if(f&&pt&&gi){sn(r,"scrollEnd",Qm);return}!wn&&et&&et(R),dn=R,st.tween&&!It&&(st.tween.kill(),st.tween=0),L&&L.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(vt){return vt.vars.immediateRender&&vt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var ke=Lt(),ee=Nt(),ge=A?A.duration():Ui(U,E),He=Gt<=.01||!Gt,Re=0,Ee=qt||0,de=Hr(It)?It.end:n.end,Ln=n.endTrigger||d,Se=Hr(It)?It.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),un=R.pinnedContainer=n.pinnedContainer&&Nn(n.pinnedContainer,R),Hn=d&&Math.max(0,te.indexOf(R))||0,qe=Hn,$e,tn,Gi,fs,en,T,O,Y,X,H,ct,gt,dt;for(q&&Hr(It)&&(gt=wt.getProperty(W,E.p),dt=wt.getProperty(I,E.p));qe-- >0;)T=te[qe],T.end||T.refresh(0,1)||(dn=R),O=T.pin,O&&(O===d||O===f||O===un)&&!T.isReverted&&(H||(H=[]),H.unshift(T),T.revert(!0,!0)),T!==te[qe]&&(Hn--,qe--);for(_n(Se)&&(Se=Se(R)),Se=Cd(Se,"start",R),Tt=Od(Se,d,ke,E,$(),Zt,W,R,ee,tt,k,ge,A,R._startClamp&&"_startClamp")||(f?-.001:0),_n(de)&&(de=de(R)),Zn(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(Zn(Se)?Se.split(" ")[0]:"")+de:(Re=dl(de.substr(2),ke),de=Zn(Se)?Se:(A?wt.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Tt):Tt)+Re,Ln=d)),de=Cd(de,"end",R),kt=Math.max(Tt,Od(de||(Ln?"100% 0":ge),Ln,ke,E,$()+Re,Ft,I,R,ee,tt,k,ge,A,R._endClamp&&"_endClamp"))||-.001,Re=0,qe=Hn;qe--;)T=te[qe]||{},O=T.pin,O&&T.start-T._pinPush<=Tt&&!A&&T.end>0&&($e=T.end-(R._startClamp?Math.max(0,T.start):T.start),(O===d&&T.start-T._pinPush<Tt||O===un)&&isNaN(Se)&&(Re+=$e*(1-T.progress)),O===f&&(Ee+=$e));if(Tt+=Re,kt+=Re,R._startClamp&&(R._startClamp+=Re),R._endClamp&&!wn&&(R._endClamp=kt||-.001,kt=Math.min(kt,Ui(U,E))),Gt=kt-Tt||(Tt-=.01)&&.001,He&&(J=wt.utils.clamp(0,1,wt.utils.normalize(Tt,kt,nt))),R._pinPush=Ee,Zt&&Re&&($e={},$e[E.a]="+="+Re,un&&($e[E.p]="-="+$()),wt.set([Zt,Ft],$e)),f&&!(ah&&R.end>=Ui(U,E)))$e=fi(f),fs=E===Je,Gi=$(),St=parseFloat(j(E.a))+Ee,!ge&&kt>1&&(ct=(V?Ce.scrollingElement||Kn:U).style,ct={style:ct,value:ct["overflow"+E.a.toUpperCase()]},V&&fi(_e)["overflow"+E.a.toUpperCase()]!=="scroll"&&(ct.style["overflow"+E.a.toUpperCase()]="scroll")),zc(f,N,$e),x=tl(f),tn=Ki(f,!0),Y=k&&Rr(U,fs?Rn:Je)(),_?(Et=[_+E.os2,Gt+Ee+Ze],Et.t=N,qe=_===Xe?Dl(f,E)+Gt+Ee:0,qe&&(Et.push(E.d,qe+Ze),N.style.flexBasis!=="auto"&&(N.style.flexBasis=qe+Ze)),qs(Et),un&&te.forEach(function(vt){vt.pin===un&&vt.vars.pinSpacing!==!1&&(vt._subPinOffset=!0)}),k&&$(nt)):(qe=Dl(f,E),qe&&N.style.flexBasis!=="auto"&&(N.style.flexBasis=qe+Ze)),k&&(en={top:tn.top+(fs?Gi-Tt:Y)+Ze,left:tn.left+(fs?Y:Gi-Tt)+Ze,boxSizing:"border-box",position:"fixed"},en[ns]=en["max"+aa]=Math.ceil(tn.width)+Ze,en[is]=en["max"+Jh]=Math.ceil(tn.height)+Ze,en[hi]=en[hi+Xa]=en[hi+Ha]=en[hi+Ya]=en[hi+Wa]="0",en[Xe]=$e[Xe],en[Xe+Xa]=$e[Xe+Xa],en[Xe+Ha]=$e[Xe+Ha],en[Xe+Ya]=$e[Xe+Ya],en[Xe+Wa]=$e[Xe+Wa],C=zE(Mt,en,b),wn&&$(0)),i?(X=i._initted,Uc(1),i.render(i.duration(),!0,!0),at=j(E.a)-St+Gt+Ee,ot=Math.abs(Gt-at)>1,k&&ot&&C.splice(C.length-2,2),i.render(0,!0,!0),X||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Uc(0)):at=Gt,ct&&(ct.value?ct.style["overflow"+E.a.toUpperCase()]=ct.value:ct.style.removeProperty("overflow-"+E.a));else if(d&&$()&&!A)for(tn=d.parentNode;tn&&tn!==_e;)tn._pinOffset&&(Tt-=tn._pinOffset,kt-=tn._pinOffset),tn=tn.parentNode;H&&H.forEach(function(vt){return vt.revert(!1,!0)}),R.start=Tt,R.end=kt,Vt=oe=wn?nt:$(),!A&&!wn&&(Vt<nt&&$(nt),R.scroll.rec=0),R.revert(!1,!0),Yt=pn(),ft&&(zt=-1,ft.restart(!0)),dn=0,i&&P&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(He||J!==R.progress||A||g||i&&!i._initted)&&(i&&!P&&(i._initted||J||i.vars.immediateRender!==!1)&&i.totalProgress(A&&Tt<-.001&&!J?wt.utils.normalize(Tt,kt,0):J,!0),R.progress=He||(Vt-Tt)/Gt===J?0:J),f&&_&&(N._pinOffset=Math.round(R.progress*at)),L&&L.invalidate(),isNaN(gt)||(gt-=wt.getProperty(W,E.p),dt-=wt.getProperty(I,E.p),el(W,E,gt),el(Zt,E,gt-(qt||0)),el(I,E,dt),el(Ft,E,dt-(qt||0))),He&&!wn&&R.update(),u&&!wn&&!Qt&&(Qt=!0,u(R),Qt=!1)}},R.getVelocity=function(){return($()-oe)/(pn()-wa)*1e3||0},R.endAnimation=function(){Ma(R.callbackAnimation),i&&(L?L.progress(1):i.paused()?P||Ma(i,R.direction<0,1):Ma(i,i.reversed()))},R.labelToScroll=function(pt){return i&&i.labels&&(Tt||R.refresh()||Tt)+i.labels[pt]/i.duration()*Gt||0},R.getTrailing=function(pt){var Xt=te.indexOf(R),It=R.direction>0?te.slice(0,Xt).reverse():te.slice(Xt+1);return(Zn(pt)?It.filter(function(qt){return qt.vars.preventOverlaps===pt}):It).filter(function(qt){return R.direction>0?qt.end<=Tt:qt.start>=kt})},R.update=function(pt,Xt,It){if(!(A&&!It&&!pt)){var qt=wn===!0?nt:R.scroll(),ke=pt?0:(qt-Tt)/Gt,ee=ke<0?0:ke>1?1:ke||0,ge=R.progress,He,Re,Ee,de,Ln,Se,un,Hn;if(Xt&&(oe=Vt,Vt=A?$():qt,S&&(Wt=lt,lt=i&&!P?i.totalProgress():ee)),m&&f&&!dn&&!$o&&gi&&(!ee&&Tt<qt+(qt-oe)/(pn()-wa)*m?ee=1e-4:ee===1&&kt>qt+(qt-oe)/(pn()-wa)*m&&(ee=.9999)),ee!==ge&&R.enabled){if(He=R.isActive=!!ee&&ee<1,Re=!!ge&&ge<1,Se=He!==Re,Ln=Se||!!ee!=!!ge,R.direction=ee>ge?1:-1,R.progress=ee,Ln&&!dn&&(Ee=ee&&!ge?0:ee===1?1:ge===1?2:3,P&&(de=!Se&&F[Ee+1]!=="none"&&F[Ee+1]||F[Ee],Hn=i&&(de==="complete"||de==="reset"||de in i))),v&&(Se||Hn)&&(Hn||h||!i)&&(_n(v)?v(R):R.getTrailing(v).forEach(function(Gi){return Gi.endAnimation()})),P||(L&&!dn&&!$o?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",ee,i._tTime/i._tDur):(L.vars.totalProgress=ee,L.invalidate().restart())):i&&i.totalProgress(ee,!!(dn&&(Yt||pt)))),f){if(pt&&_&&(N.style[_+E.os2]=bt),!k)Z(Ra(St+at*ee));else if(Ln){if(un=!pt&&ee>ge&&kt+1>qt&&qt+1>=Ui(U,E),b)if(!pt&&(He||un)){var qe=Ki(f,!0),$e=qt-Tt;Bd(f,_e,qe.top+(E===Je?$e:0)+Ze,qe.left+(E===Je?0:$e)+Ze)}else Bd(f,N);qs(He||un?C:x),ot&&ee<1&&He||Z(St+(ee===1&&!un?at:0))}}S&&!st.tween&&!dn&&!$o&&ft.restart(!0),o&&(Se||M&&ee&&(ee<1||!Nc))&&co(o.targets).forEach(function(Gi){return Gi.classList[He||M?"add":"remove"](o.className)}),a&&!P&&!pt&&a(R),Ln&&!dn?(P&&(Hn&&(de==="complete"?i.pause().totalProgress(1):de==="reset"?i.restart(!0).pause():de==="restart"?i.restart(!0):i[de]()),a&&a(R)),(Se||!Nc)&&(c&&Se&&Oc(R,c),G[Ee]&&Oc(R,G[Ee]),M&&(ee===1?R.kill(!1,1):G[Ee]=0),Se||(Ee=ee===1?1:3,G[Ee]&&Oc(R,G[Ee]))),D&&!He&&Math.abs(R.getVelocity())>(Pa(D)?D:2500)&&(Ma(R.callbackAnimation),L?L.progress(1):Ma(i,de==="reverse"?1:!ee,1))):P&&a&&!dn&&a(R)}if(yt){var tn=A?qt/A.duration()*(A._caScrollDist||0):qt;rt(tn+(W._isFlipped?1:0)),yt(tn)}ut&&ut(-qt/A.duration()*(A._caScrollDist||0))}},R.enable=function(pt,Xt){R.enabled||(R.enabled=!0,sn(U,"resize",Da),V||sn(U,"scroll",Ns),et&&sn(r,"refreshInit",et),pt!==!1&&(R.progress=J=0,Vt=oe=zt=$()),Xt!==!1&&R.refresh())},R.getTween=function(pt){return pt&&st?st.tween:L},R.setPositions=function(pt,Xt,It,qt){if(A){var ke=A.scrollTrigger,ee=A.duration(),ge=ke.end-ke.start;pt=ke.start+ge*pt/ee,Xt=ke.start+ge*Xt/ee}R.refresh(!1,!1,{start:Rd(pt,It&&!!R._startClamp),end:Rd(Xt,It&&!!R._endClamp)},qt),R.update()},R.adjustPinSpacing=function(pt){if(Et&&pt){var Xt=Et.indexOf(E.d)+1;Et[Xt]=parseFloat(Et[Xt])+pt+Ze,Et[1]=parseFloat(Et[1])+pt+Ze,qs(Et)}},R.disable=function(pt,Xt){if(pt!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Xt||L&&L.pause(),nt=0,Rt&&(Rt.uncache=1),et&&rn(r,"refreshInit",et),ft&&(ft.pause(),st.tween&&st.tween.kill()&&(st.tween=0)),!V)){for(var It=te.length;It--;)if(te[It].scroller===U&&te[It]!==R)return;rn(U,"resize",Da),V||rn(U,"scroll",Ns)}},R.kill=function(pt,Xt){R.disable(pt,Xt),L&&!Xt&&L.kill(),l&&delete oh[l];var It=te.indexOf(R);It>=0&&te.splice(It,1),It===An&&ml>0&&An--,It=0,te.forEach(function(qt){return qt.scroller===R.scroller&&(It=1)}),It||wn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,pt&&i.revert({kill:!1}),Xt||i.kill()),Zt&&[Zt,Ft,W,I].forEach(function(qt){return qt.parentNode&&qt.parentNode.removeChild(qt)}),qa===R&&(qa=0),f&&(Rt&&(Rt.uncache=1),It=0,te.forEach(function(qt){return qt.pin===f&&It++}),It||(Rt.spacer=0)),n.onKill&&n.onKill(R)},te.push(R),R.enable(!1,!1),Ut&&Ut(R),i&&i.add&&!Gt){var Jt=R.update;R.update=function(){R.update=Jt,re.cache++,Tt||kt||R.refresh()},wt.delayedCall(.01,R.update),Gt=.01,Tt=kt=0}else R.refresh();f&&FE()},r.register=function(n){return Fs||(wt=n||qm(),Ym()&&window.document&&r.enable(),Fs=Ca),Fs},r.defaults=function(n){if(n)for(var i in n)jo[i]=n[i];return jo},r.disable=function(n,i){Ca=0,te.forEach(function(a){return a[i?"kill":"disable"](n)}),rn(ie,"wheel",Ns),rn(Ce,"scroll",Ns),clearInterval(qo),rn(Ce,"touchcancel",Ai),rn(_e,"touchstart",Ai),Jo(rn,Ce,"pointerdown,touchstart,mousedown",Pd),Jo(rn,Ce,"pointerup,touchend,mouseup",Dd),Pl.kill(),Zo(rn);for(var s=0;s<re.length;s+=3)Ko(rn,re[s],re[s+1]),Ko(rn,re[s],re[s+2])},r.enable=function(){if(ie=window,Ce=document,Kn=Ce.documentElement,_e=Ce.body,wt&&(co=wt.utils.toArray,Va=wt.utils.clamp,sh=wt.core.context||Ai,Uc=wt.core.suppressOverwrites||Ai,Yh=ie.history.scrollRestoration||"auto",lh=ie.pageYOffset||0,wt.core.globals("ScrollTrigger",r),_e)){Ca=1,Ys=document.createElement("div"),Ys.style.height="100vh",Ys.style.position="absolute",i_(),RE(),Ge.register(wt),r.isTouch=Ge.isTouch,pr=Ge.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),rh=Ge.isTouch===1,sn(ie,"wheel",Ns),Xh=[ie,Ce,Kn,_e],wt.matchMedia?(r.matchMedia=function(c){var u=wt.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},wt.addEventListener("matchMediaInit",function(){e_(),jh()}),wt.addEventListener("matchMediaRevert",function(){return t_()}),wt.addEventListener("matchMedia",function(){Jr(0,1),cs("matchMedia")}),wt.matchMedia().add("(orientation: portrait)",function(){return Bc(),Bc})):console.warn("Requires GSAP 3.11.0 or later"),Bc(),sn(Ce,"scroll",Ns);var n=_e.hasAttribute("style"),i=_e.style,s=i.borderTopStyle,a=wt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ki(_e),Je.m=Math.round(o.top+Je.sc())||0,Rn.m=Math.round(o.left+Rn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),qo=setInterval(Ud,250),wt.delayedCall(.5,function(){return $o=0}),sn(Ce,"touchcancel",Ai),sn(_e,"touchstart",Ai),Jo(sn,Ce,"pointerdown,touchstart,mousedown",Pd),Jo(sn,Ce,"pointerup,touchend,mouseup",Dd),ih=wt.utils.checkPrefix("transform"),_l.push(ih),Fs=pn(),Pl=wt.delayedCall(.2,Jr).pause(),Os=[Ce,"visibilitychange",function(){var c=ie.innerWidth,u=ie.innerHeight;Ce.hidden?(Ad=c,wd=u):(Ad!==c||wd!==u)&&Da()},Ce,"DOMContentLoaded",Jr,ie,"load",Jr,ie,"resize",Da],Zo(sn),te.forEach(function(c){return c.enable(0,1)}),l=0;l<re.length;l+=3)Ko(rn,re[l],re[l+1]),Ko(rn,re[l],re[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Nc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(qo)||(qo=i)&&setInterval(Ud,i),"ignoreMobileResize"in n&&(rh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Zo(rn)||Zo(sn,n.autoRefreshEvents||"none"),Hm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Nn(n),a=re.indexOf(s),o=os(s);~a&&re.splice(a,o?6:2),i&&(o?Oi.unshift(ie,i,_e,i,Kn,i):Oi.unshift(s,i))},r.clearMatchMedia=function(n){te.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Zn(n)?Nn(n):n).getBoundingClientRect(),o=a[s?ns:is]*i||0;return s?a.right-o>0&&a.left+o<ie.innerWidth:a.bottom-o>0&&a.top+o<ie.innerHeight},r.positionInViewport=function(n,i,s){Zn(n)&&(n=Nn(n));var a=n.getBoundingClientRect(),o=a[s?ns:is],l=i==null?o/2:i in Ll?Ll[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ie.innerWidth:(a.top+l)/ie.innerHeight},r.killAll=function(n){if(te.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ls.killAll||[];ls={},i.forEach(function(s){return s()})}},r})();ae.version="3.14.2";ae.saveStyles=function(r){return r?co(r).forEach(function(t){if(t&&t.style){var e=$n.indexOf(t);e>=0&&$n.splice(e,5),$n.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),wt.core.getCache(t),sh())}}):$n};ae.revert=function(r,t){return jh(!r,t)};ae.create=function(r,t){return new ae(r,t)};ae.refresh=function(r){return r?Da(!0):(Fs||ae.register())&&Jr(!0)};ae.update=function(r){return++re.cache&&ir(r===!0?2:0)};ae.clearScrollMemory=n_;ae.maxScroll=function(r,t){return Ui(r,t?Rn:Je)};ae.getScrollFunc=function(r,t){return Rr(Nn(r),t?Rn:Je)};ae.getById=function(r){return oh[r]};ae.getAll=function(){return te.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ae.isScrolling=function(){return!!gi};ae.snapDirectional=Kh;ae.addEventListener=function(r,t){var e=ls[r]||(ls[r]=[]);~e.indexOf(t)||e.push(t)};ae.removeEventListener=function(r,t){var e=ls[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ae.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var h=[],d=[],f=wt.delayedCall(i,function(){u(h,d),h=[],d=[]}).pause();return function(_){h.length||f.restart(!0),h.push(_.trigger),d.push(_),s<=h.length&&f.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&_n(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return _n(s)&&(s=s(),sn(ae,"refresh",function(){return s=t.batchMax()})),co(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(ae.create(c))}),e};var kd=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},kc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ge.isTouch?" pinch-zoom":""):"none",t===Kn&&r(_e,e)},nl={auto:1,scroll:1},VE=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||wt.core.getCache(s),o=pn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==_e&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(nl[(l=fi(s)).overflowY]||nl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!os(s)&&(nl[(l=fi(s)).overflowY]||nl[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},s_=function(t,e,n,i){return Ge.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&VE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&sn(Ce,Ge.eventTypes[0],Gd,!1,!0)},onDisable:function(){return rn(Ce,Ge.eventTypes[0],Gd,!0)}})},GE=/(input|label|select|textarea)/i,Vd,Gd=function(t){var e=GE.test(t.target.tagName);(e||Vd)&&(t._gsapAllow=!0,Vd=e)},HE=function(t){Hr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=Nn(t.target)||Kn,u=wt.core.globals().ScrollSmoother,h=u&&u.get(),d=pr&&(t.content&&Nn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),f=Rr(c,Je),_=Rr(c,Rn),g=1,m=(Ge.isTouch&&ie.visualViewport?ie.visualViewport.scale*ie.visualViewport.width:ie.outerWidth)/ie.innerWidth,p=0,y=_n(i)?function(){return i(o)}:function(){return i||2.8},M,S,b=s_(c,t.type,!0,s),w=function(){return S=!1},A=Ai,D=Ai,v=function(){l=Ui(c,Je),D=Va(pr?1:0,l),n&&(A=Va(0,Ui(c,Rn))),M=rs},E=function(){d._gsap.y=Ra(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(S){requestAnimationFrame(w);var q=Ra(o.deltaY/2),tt=D(f.v-q);if(d&&tt!==f.v+f.offset){f.offset=tt-f.v;var R=Ra((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",d._gsap.y=R+"px",f.cacheID=re.cache,ir()}return!0}f.offset&&E(),S=!0},U,z,V,k,G=function(){v(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return d&&wt.set(d,{y:"+=0"}),t.ignoreCheck=function(F){return pr&&F.type==="touchmove"&&P()||g>1.05&&F.type!=="touchstart"||o.isGesturing||F.touches&&F.touches.length>1},t.onPress=function(){S=!1;var F=g;g=Ra((ie.visualViewport&&ie.visualViewport.scale||1)/m),U.pause(),F!==g&&kc(c,g>1.01?!0:n?!1:"x"),z=_(),V=f(),v(),M=rs},t.onRelease=t.onGestureStart=function(F,q){if(f.offset&&E(),!q)k.restart(!0);else{re.cache++;var tt=y(),R,et;n&&(R=_(),et=R+tt*.05*-F.velocityX/.227,tt*=kd(_,R,et,Ui(c,Rn)),U.vars.scrollX=A(et)),R=f(),et=R+tt*.05*-F.velocityY/.227,tt*=kd(f,R,et,Ui(c,Je)),U.vars.scrollY=D(et),U.invalidate().duration(tt).play(.01),(pr&&U.vars.scrollY>=l||R>=l-1)&&wt.to({},{onUpdate:G,duration:tt})}a&&a(F)},t.onWheel=function(){U._ts&&U.pause(),pn()-p>1e3&&(M=0,p=pn())},t.onChange=function(F,q,tt,R,et){if(rs!==M&&v(),q&&n&&_(A(R[2]===q?z+(F.startX-F.x):_()+q-R[1])),tt){f.offset&&E();var Lt=et[2]===tt,Nt=Lt?V+F.startY-F.y:f()+tt-et[1],zt=D(Nt);Lt&&Nt!==zt&&(V+=zt-Nt),f(zt)}(tt||q)&&ir()},t.onEnable=function(){kc(c,n?!1:"x"),ae.addEventListener("refresh",G),sn(ie,"resize",G),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),b.enable()},t.onDisable=function(){kc(c,!0),rn(ie,"resize",G),ae.removeEventListener("refresh",G),b.kill()},t.lockAxis=t.lockAxis!==!1,o=new Ge(t),o.iOS=pr,pr&&!f()&&f(1),pr&&wt.ticker.add(Ai),k=o._dc,U=wt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:r_(f,f(),function(){return U.pause()})},onUpdate:ir,onComplete:k.vars.onComplete}),o};ae.sort=function(r){if(_n(r))return te.sort(r);var t=ie.pageYOffset||0;return ae.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ie.innerHeight}),te.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ae.observe=function(r){return new Ge(r)};ae.normalizeScroll=function(r){if(typeof r>"u")return bn;if(r===!0&&bn)return bn.enable();if(r===!1){bn&&bn.kill(),bn=r;return}var t=r instanceof Ge?r:HE(r);return bn&&bn.target===t.target&&bn.kill(),os(t.target)&&(bn=t),t};ae.core={_getVelocityProp:nh,_inputObserver:s_,_scrollers:re,_proxies:Oi,bridge:{ss:function(){gi||cs("scrollStart"),gi=pn()},ref:function(){return dn}}};qm()&&wt.registerPlugin(ae);function a_(r,t,e){return Math.max(r,Math.min(t,e))}class WE{advance(t){if(!this.isRunning)return;let e=!1;if(this.lerp)this.value=(n=this.value,i=this.to,s=60*this.lerp,a=t,(function(o,l,c){return(1-c)*o+c*l})(n,i,1-Math.exp(-s*a))),Math.round(this.value)===this.to&&(this.value=this.to,e=!0);else{this.currentTime+=t;const o=a_(0,this.currentTime/this.duration,1);e=o>=1;const l=e?1:this.easing(o);this.value=this.from+(this.to-this.from)*l}var n,i,s,a;this.onUpdate?.(this.value,e),e&&this.stop()}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n=.1,duration:i=1,easing:s=(l=>l),onStart:a,onUpdate:o}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=s,this.currentTime=0,this.isRunning=!0,a?.(),this.onUpdate=o}}class XE{constructor({wrapper:t,content:e,autoResize:n=!0,debounce:i=250}={}){this.wrapper=t,this.content=e,n&&(this.debouncedResize=(function(s,a){let o;return function(){let l=arguments,c=this;clearTimeout(o),o=setTimeout((function(){s.apply(c,l)}),a)}})(this.resize,i),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class o_{constructor(){this.events={}}emit(t,...e){let n=this.events[t]||[];for(let i=0,s=n.length;i<s;i++)n[i](...e)}on(t,e){return this.events[t]?.push(e)||(this.events[t]=[e]),()=>{this.events[t]=this.events[t]?.filter((n=>e!==n))}}off(t,e){this.events[t]=this.events[t]?.filter((n=>e!==n))}destroy(){this.events={}}}const Hd=100/6;class YE{constructor(t,{wheelMultiplier:e=1,touchMultiplier:n=1}){this.element=t,this.wheelMultiplier=e,this.touchMultiplier=n,this.touchStart={x:null,y:null},this.emitter=new o_,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}onTouchStart=t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})};onTouchMove=t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t,i=-(e-this.touchStart.x)*this.touchMultiplier,s=-(n-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:i,y:s},this.emitter.emit("scroll",{deltaX:i,deltaY:s,event:t})};onTouchEnd=t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})};onWheel=t=>{let{deltaX:e,deltaY:n,deltaMode:i}=t;e*=i===1?Hd:i===2?this.windowWidth:1,n*=i===1?Hd:i===2?this.windowHeight:1,e*=this.wheelMultiplier,n*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:t})};onWindowResize=()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight}}class qE{constructor({wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:n=t,eventsTarget:i=n,smoothWheel:s=!0,syncTouch:a=!1,syncTouchLerp:o=.075,touchInertiaMultiplier:l=35,duration:c,easing:u=(M=>Math.min(1,1.001-Math.pow(2,-10*M))),lerp:h=!c&&.1,infinite:d=!1,orientation:f="vertical",gestureOrientation:_="vertical",touchMultiplier:g=1,wheelMultiplier:m=1,autoResize:p=!0,__experimental__naiveDimensions:y=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:M,deltaY:S,event:b})=>{if(b.ctrlKey)return;const w=b.type.includes("touch"),A=b.type.includes("wheel");if(this.options.syncTouch&&w&&b.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const D=M===0&&S===0,v=this.options.gestureOrientation==="vertical"&&S===0||this.options.gestureOrientation==="horizontal"&&M===0;if(D||v)return;let E=b.composedPath();if(E=E.slice(0,E.indexOf(this.rootElement)),E.find((V=>{var k,G,F,q,tt;return((k=V.hasAttribute)===null||k===void 0?void 0:k.call(V,"data-lenis-prevent"))||w&&((G=V.hasAttribute)===null||G===void 0?void 0:G.call(V,"data-lenis-prevent-touch"))||A&&((F=V.hasAttribute)===null||F===void 0?void 0:F.call(V,"data-lenis-prevent-wheel"))||((q=V.classList)===null||q===void 0?void 0:q.contains("lenis"))&&!(!((tt=V.classList)===null||tt===void 0)&&tt.contains("lenis-stopped"))})))return;if(this.isStopped||this.isLocked)return void b.preventDefault();if(this.isSmooth=this.options.syncTouch&&w||this.options.smoothWheel&&A,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();b.preventDefault();let P=S;this.options.gestureOrientation==="both"?P=Math.abs(S)>Math.abs(M)?S:M:this.options.gestureOrientation==="horizontal"&&(P=M);const U=w&&this.options.syncTouch,z=w&&b.type==="touchend"&&Math.abs(P)>5;z&&(P=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+P,Object.assign({programmatic:!1},U?{lerp:z?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const M=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-M),this.emit()}},window.lenisVersion="1.0.42",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,wheelEventsTarget:n,eventsTarget:i,smoothWheel:s,syncTouch:a,syncTouchLerp:o,touchInertiaMultiplier:l,duration:c,easing:u,lerp:h,infinite:d,gestureOrientation:_,orientation:f,touchMultiplier:g,wheelMultiplier:m,autoResize:p,__experimental__naiveDimensions:y},this.animate=new WE,this.emitter=new o_,this.dimensions=new XE({wrapper:t,content:e,autoResize:p}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=a||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new YE(i,{touchMultiplier:g,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,duration:s=this.options.duration,easing:a=this.options.easing,lerp:o=!s&&this.options.lerp,onComplete:l,force:c=!1,programmatic:u=!0}={}){if(!this.isStopped&&!this.isLocked||c){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{let h;if(typeof t=="string"?h=document.querySelector(t):t?.nodeType&&(h=t),h){if(this.options.wrapper!==window){const f=this.options.wrapper.getBoundingClientRect();e-=this.isHorizontal?f.left:f.top}const d=h.getBoundingClientRect();t=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=e,t=Math.round(t),this.options.infinite?u&&(this.targetScroll=this.animatedScroll=this.scroll):t=a_(0,t,this.limit),n)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!u){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:s,easing:a,lerp:o,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(h,d)=>{this.isScrolling=!0,this.velocity=h-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=h,this.setScroll(this.scroll),u&&(this.targetScroll=h),d||this.emit(),d&&(this.reset(),this.emit(),l?.(this),this.__preventNextScrollEvent=!0,requestAnimationFrame((()=>{delete this.__preventNextScrollEvent})))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(t=this.animatedScroll,e=this.limit,(t%e+e)%e):this.animatedScroll;var t,e}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.__isSmooth=t,this.toggleClassName("lenis-smooth",t))}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.toggleClassName("lenis-scrolling",t))}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.toggleClassName("lenis-stopped",t))}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.toggleClassName("lenis-locked",t))}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isSmooth&&(t+=" lenis-smooth"),t}toggleClassName(t,e){this.rootElement.classList.toggle(t,e),this.emitter.emit("className change",this)}}Zi.registerPlugin(ae);document.addEventListener("DOMContentLoaded",()=>{const r=new qE({duration:1.2,easing:a=>Math.min(1,1.001-Math.pow(2,-10*a)),direction:"vertical",gestureDirection:"vertical",smooth:!0,mouseMultiplier:1,smoothTouch:!1,touchMultiplier:2});function t(a){r.raf(a),requestAnimationFrame(t)}requestAnimationFrame(t),ay(),Zi.to(".hero-title",{scrollTrigger:{trigger:".hero-section",start:"top top",end:"bottom top",scrub:!0},y:200,opacity:.5}),Zi.to(".marquee-section",{scrollTrigger:{trigger:".marquee-section",start:"top center",end:"bottom top",scrub:1},rotate:2,scale:1.1}),document.querySelectorAll(".bento-box").forEach((a,o)=>{Zi.from(a,{scrollTrigger:{trigger:a,start:"top 85%",toggleActions:"play none none reverse"},y:100,opacity:0,duration:.8,delay:o*.1,ease:"power3.out"})});const n=document.getElementById("magic-wand"),i=document.querySelector(".cursor-light");document.addEventListener("mousemove",a=>{Zi.set(n,{x:a.clientX,y:a.clientY}),Zi.to(i,{x:a.clientX,y:a.clientY,duration:.15})}),document.querySelectorAll("a, button, .bento-box").forEach(a=>{a.addEventListener("mouseenter",()=>{n.src="/wand-final-glow.png",n.classList.add("active"),Zi.to(n,{rotation:15,duration:.2})}),a.addEventListener("mouseleave",()=>{n.src="/wand-final.png",n.classList.remove("active"),Zi.to(n,{rotation:0,duration:.2})})}),console.log("Heavy Build Loaded ⚡")});
