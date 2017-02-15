Function.prototype.toString=function(){
  return this.call(this)
}
function toTwenty(){
  t=[];
  for(d=0;d<21;d++){
     t.push(d)
  }
  return t;
}
function toForty(){
  t=[];
  for(d=2;d<41;d=d+2){
     t.push(d)
  }
  return t;
}
function toOneThousand(){
  t=[];
  for(d=10;d<1010;d=d+10){
     t.push(d)
  }
  return t;
}

Object.prototype.search=function (d){
  countD=0
  r=this.length;
  var f
    for (i=0; i<this.length;i++){
      if(this[i]==d){
f=this[i];        
break
      }
      else{
        countD++
      };
          };
          return i;
};
Object.prototype.count=function(){
  return countD;
}
Object.prototype.index=function(){
  return i;
};
Object.prototype.length=function(){
  return r
};
