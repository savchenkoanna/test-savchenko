

function Func1(){
 // первая функция
}


function Func2(){
  // вторая функция
}



function Func3(){
  // первая + вторая
Func1();
Func2();
}



// Функции с параметрами:


function Sum(a, b){
  console.log(a + b);
}


// Sum(a=6; b=8;);
Sum(6, 8);
Sum(100, 5);



function doTaskWithArrays(parametr){
  console.log(parametr[1]);
}

// doTaskWithArrays(5);
// doTaskWithArrays(true);
// doTaskWithArrays("fsdfsd");
doTaskWithArrays([3,4,5,6]);
