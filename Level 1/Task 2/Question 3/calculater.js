function add() {
  var numOne, numTwo, sum;
  numOne = parseInt(document.getElementById("first").value);
  numTwo = parseInt(document.getElementById("second").value);

  sum = numOne + numTwo;
  document.getElementById("answer").value = sum;

}

function sub() {
    var numOne, numTwo,sub;
    numOne = parseInt(document.getElementById("first").value);
    numTwo = parseInt(document.getElementById("second").value);
  
    sub = numOne - numTwo;
    document.getElementById("answer").value = sub;
  
  }

  function mul() {
    var numOne, numTwo,mul;
    numOne = parseInt(document.getElementById("first").value);
    numTwo = parseInt(document.getElementById("second").value);
  
    mul = numOne * numTwo;
    document.getElementById("answer").value = mul;
  
  }

  function div() {
    var numOne, numTwo,div;
    numOne = parseInt(document.getElementById("first").value);
    numTwo = parseInt(document.getElementById("second").value);
  
    div = numOne / numTwo;
    document.getElementById("answer").value = div;
  }