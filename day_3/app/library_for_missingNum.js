function findMissing(a,b){
	
	a=a.sort()
	b=b.sort()
		
for(i=0;i<b.length;i++){
	c=[]
	
	if (b[i]==a[i]){

	}
	if (b[i]!==a[i]){
c.push(b[i])
	}
	if(b.length==a.length){
		return 0
	}

}

return c.join()
}