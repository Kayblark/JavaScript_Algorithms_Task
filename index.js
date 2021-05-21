function convertFahrToCelsius(value) {
    if (!value) return "No value passed";
    const valueType = typeof value;
    const fahrValue = Number(value);
  
    if (Number.isNaN(fahrValue))
      return `${value} is not a valid number but a/an ${valueType}`;
  
    const celsuisValue = ((fahrValue - 32) * 5) / 9;
    return celsuisValue.toFixed(2) + "\xB0C";
  }
  

//Question 2//
function checkYuGiOh(n){
    i = 1
    ans = new Array(n)
    while(i <= n){
      if(i <= 1){
       ans[i] = i
      }else if(i % 2 == 0 && i % 3 == 0 && i % 5 == 0){
        ans[i] = "yu-gi-oh"
      }else if(i % 2 == 0 && i % 3 == 0){
        ans[i] = "yu-gi"
      }else if(i % 2 == 0 && i % 5 == 0){
        ans[i] = "yu-oh"
      }else if(3 == 0 && i % 5 == 0){
        ans[i] = "gi-oh"
      }else if(i % 2 == 0){
        ans[i] = "yu"
      }else if(i % 3 == 0){
        ans[i] = "gi"
      }else if(i % 5 == 0){
        ans[i] = "oh"
      }else{
        ans[i] = i
      }
      i++
    }
    ans.shift()
    return ans
  }
  checkYuGiOh(5)