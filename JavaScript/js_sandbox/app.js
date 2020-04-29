function countdown(m,n){
  if (m == n){
    return [n];
  } else {
    const countArray = countdown(m+1,n);
    countArray.unshift(m);
    return countArray;
  }
}

let val = countdown(1,5);
console.log(val);