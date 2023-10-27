var mergeTwoLists = function(list1, list2) {
   let NewArr=[]
   let i
   let j
   while(i<list1.length&&j<list2.length){
    if(list1[i]<=list2[j]){
      NewArr.push(list1[i++])
    }else{
      NewArr.push(list2[j++])
    }
   }
   return NewArr
   
 };



