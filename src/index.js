module.exports = function toReadable (number) {
  if(number === 0) return 'zero'
  let result = [];
    let objNum = [
      {value: 1000, str: "thousand"},
      {value: 100, str: "hundred"},
      {value: 90, str: "ninety"},
      {value: 80, str: "eighty"},
      {value: 70, str: "seventy"},
      {value: 60, str: "sixty"},
      {value: 50, str: "fifty"},
      {value: 40, str: "forty"},
      {value: 30, str: "thirty"},
      {value: 20, str: "twenty"},
      {value: 19, str: "nineteen"},
      {value: 18, str: "eighteen"},
      {value: 17, str: "seventeen"},
      {value: 16, str: "sixteen"},
      {value: 15, str: "fifteen"},
      {value: 14, str: "fourteen"},
      {value: 13, str: "thirteen"},
      {value: 12, str: "twelve"},
      {value: 11, str: "eleven"},
      {value: 10, str: "ten"},
      {value: 9, str: "nine"},
      {value: 8, str: "eight"},
      {value: 7, str: "seven"},
      {value: 6, str: "six"},
      {value: 5, str: "five"},
      {value: 4, str: "four"},
      {value: 3, str: "three"},
      {value: 2, str: "two"},
      {value: 1, str: "one"}
    ];

    const arr = []
    let i = 1
    while( number > 0) {
        arr.unshift((number % 100) * i)
        console.log(arr)
        number = Math.floor(number / 100);
        i = i * 100
    }
    
    let strArr = []
      while(arr.length !== 0){
        console.log(arr)
        console.log(arr.length)
        let lastNum = arr.shift();
        strArr.push(findDigitNum(lastNum))
        console.log(strArr)
        console.log(arr)
        console.log(arr.length)
      }
      
    console.log(strArr.join(' '));
    return strArr.join(' ').trim()

    function findDigitNum(num){
      let len = num.toString().length
      if(len === 3){
        let firstDigit = String(num)[0];
        return (findDigit(Number(firstDigit)) +" " +"hundred")
      }else if(len === 2 && num >= 21) {
        if(num % 10 == 0) {
          let firstDigit = String(num)[0];
          firstDigit = Number(firstDigit) * 10
          return findDigit(firstDigit)
        }
        let firstDigit = String(num)[0];
        let secondDigit = num % 10
        firstDigit = Number(firstDigit) * 10
        return (findDigit(firstDigit) +" "+ findDigit(secondDigit))
      }else{
          return findDigit(num)
      }
      }
    
    function findDigit(num) {
      for(const [key, value] of Object.entries(objNum)) {
          if(value.value === num) {
            return value.str
          }
    }
    }
}
