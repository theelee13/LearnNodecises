i=2;
sum=0;
while(i<process.argv.length){
	sum+= +process.argv[i];
	i++;
}
console.log(sum);
