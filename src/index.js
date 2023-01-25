module.exports = function check(str, bracketsConfig) {
  let stack = [] ;
  let res = true ;
  for ( let i = 0 ; i < str.length ; i++){

    bracketsConfig.forEach( el => {
      if( str[i] === el[1] && stack[stack.length - 1 ] === el[0]  ){
        stack.pop() ;
     } 
     else if (str[i] === el[0]){
        stack.push(str[i]) ;
      }
     else if(str[i] === el[1] && stack[stack.length-1] !== el[0]){
       res =  false ;
     } 
    })
  }
  
if(!res){
  return false ;
}else if(stack.length === 0){
  return true ;
}else{
  return false ;
}

}
