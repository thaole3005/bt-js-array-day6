var btn_show_results = document.querySelectorAll('.show_result_btn');
var show_result_Eles = document.querySelectorAll('.show_result_text');

var addNum_btn = document.getElementById('addNum_btn');
myArray = [];

addNum_btn.onclick = function() {
  var addNum_input = document.getElementById('addNum_input');
  var number = parseFloat(addNum_input.value);
  myArray.push(number);
  document.getElementById('numbers_collection').innerHTML = myArray.join(', ');
  
}




btn_show_results.forEach((btn_show_result, index) => {
 btn_show_result.onclick = () => {
  switch (index) {
    case 0:
      handleBT1(index);
      break;
    case 1:
      handleBT2(index);
      break;
    case 2:
      handleBT3(index);
      break;
    case 3:
      handleBT4(index);
      break;

    case 4:
      handleBT5(index);
      break;
    case 5:
      handleBT6(index);
      break;

    case 6:
     handleBT7(index);
     break;
    case 7:
     handleBT8(index);
     break;
    case 8:
     handleBT9(index);
     break;
    case 9:
     handleBT10(index);
     break;
  }
 }
})




renderUI = (index, finalTxt) => {   //hàm render ra UI
  show_result_Eles[index].innerHTML = finalTxt;
}







// ------------------------------BÀI TẬP 1------------------------------


handleBT1 = (index) => {
  var finalTxt = "";
  var sum =0;
  


  for(let i=0; i< myArray.length; i++) {
    if(myArray[i] > 0) {
      // console.log(myArray[i]);
      sum += myArray[i];
    }
  }




  finalTxt = sum;


  renderUI(index, finalTxt);

}


// ------------------------------BÀI TẬP 2 ------------------------------




handleBT2 = (index) => {
  var finalTxt = "";
  var couter = 0;      

  
  for(let i=0; i< myArray.length; i++) {
    if(myArray[i] > 0) {
      
      couter++;
    }
  }




  finalTxt = couter;
  renderUI(index, finalTxt);

  
}




// --------BÀI TẬP 3----------

handleBT3 = (index) => {
  var finalTxt = "";
  var vitri = 0;
  var min = myArray[vitri];
 
  for(let i=0; i< myArray.length; i++) {
    if(myArray[i] < min) {
     
      vitri = i;
      min = myArray[vitri];
    }
  }


  finalTxt = myArray[vitri]
  renderUI(index, finalTxt);

}






// --------BÀI TẬP 4----------

//tìm số dương nhỏ nhất

handleBT4 = (index) => {
  var finalTxt = "";
  let newArray = [];

 
  for(let i=0; i< myArray.length; i++) {
    if(myArray[i] > 0) {
      
      newArray.push(myArray[i]);
     
    }
  }

  // console.log(newArray);
  var vitri = 0;
  var min = newArray[vitri];

  if(newArray.length > 0) {
    for(let j = 0; j < newArray.length; j++) {
          if(newArray[j] < min) {
            vitri = j;
            min = newArray[vitri];
          }
    }
  finalTxt = min;

  } else {
    finalTxt = "không có số dương";
  }



  renderUI(index, finalTxt);


}




// --------BÀI TẬP 5----------



handleBT5 = (index) => {
  var finalTxt = "";
  var finalChanNumber = 0;      

  
  for(let i=0; i< myArray.length; i++) {
    if(myArray[i] %2 === 0) {
      
      finalChanNumber = myArray[i];
    }
  }


  finalTxt = finalChanNumber;
  renderUI(index, finalTxt);


}




// --------BÀI TẬP 6----------



handleBT6 = (index) => {
  // console.log('bt6')
  var finalTxt = "";
  const newArray = [...myArray];
  // console.log(newArray);
  var vitri1 = parseInt(document.getElementById('vitri1').value)-1;
  var vitri2 = parseInt(document.getElementById('vitri2').value)-1;

  var number1 = newArray[vitri1];
  var number2 = newArray[vitri2];

  // console.log(vitri1, vitri2);
  // console.log(newArray[vitri1], newArray[vitri2]);

  newArray[vitri1] =number2;
  newArray[vitri2] = number1;
  // console.log(newArray);


  finalTxt = newArray.join(', ');

  renderUI(index, finalTxt);




}




// --------BÀI TẬP 7----------



handleBT7 = (index) => {
  var finalTxt = "";
  const newArray = [...myArray];
  
  for(var i=0; i<newArray.length; i++) {
    //sau khi vòng nhỏ kết thúc thì chỉ có 1 giá trị lớn về cuối mảng
    for(var j=0; j<newArray.length - 1; j++) {
        if(newArray[j] > newArray[[j+1]]) {
            //biến tạm
            //back up giá trị của phân tử thứ j vào biến tạm
            var temp = newArray[j];
            //gán giá trị của phần tử j+1 vào phần tử j
            newArray[j] = newArray[j+1];
            //gán giá trị backup vào phần tử j+1;
            newArray[j+1] = temp;
        }
    }
}

finalTxt = newArray.join(', ');


  
  renderUI(index, finalTxt);



}



// --------BÀI TẬP 8----------



handleBT8 = (index) => {
  // console.log('bt8')
  var finalTxt = "";
  var flag = 0;
  var firstSoNguyenTo = -1;


  for (let i = 0; i < myArray.length; i++) {
   if(myArray[i] > 1 && Number.isInteger(myArray[i])) {    // <1 thì chắc chắn không phải là số nguyên tố
    // console.log('vòng lặp i');
    for(var j = 2; j <= (Math.sqrt(myArray[i])); j++) {
      // console.log('vòng lặp j')
      
      // console.log(i,j)
      if( myArray[i] % j === 0) {
        // console.log('chia hết');
        flag++;
        break;      //chỉ cần chia hết cho 1 trong j thì break khỏi vòng lặp j luôn vì k phải là số nguyên tố r
      } 
    
    }

    if(flag ===0) {     //đây là số nguyên tố
      // console.log('flag = 0', i);
      firstSoNguyenTo = myArray[i];
      finalTxt = firstSoNguyenTo;
      break;
    } else { 
      finalTxt = "Không có số nguyên tố";
       flag = 0;
    }
    
   }
  }

  renderUI(index, finalTxt);


}















// ---------------BÀI TẬP 9---------------


var addNum_bt9_btn = document.getElementById('addNum_bt9_btn');
bt9_Array = [];

addNum_bt9_btn.onclick = function() {
  var addNum_bt9_input = document.getElementById('addNum_bt9_input');
  var number = parseFloat(addNum_bt9_input.value);
  bt9_Array.push(number);
  document.getElementById('numbers_bt9_collection').innerHTML = bt9_Array.join(', ');
  // console.log(bt9_Array);
}





handleBT9 = (index) => {
  var finalTxt = "";
  var counter =0;


  for(let i=0; i< bt9_Array.length; i++) {
    if(Number.isInteger(bt9_Array[i])) {
      
      counter++;
    }
  }




  finalTxt = counter;


  renderUI(index, finalTxt);

}


// ---------------BÀI TẬP 10---------------

handleBT10 = (index) => {
  var finalTxt = "";
  var counterAm =0;
  var counterDuong =0;


  for(let i=0; i< myArray.length; i++) {
    if(myArray[i] > 0) {
      
      counterDuong++;
    }
    if(myArray[i] < 0) {
      
      counterAm++;
    }
  }


  if(counterDuong > counterAm) {
    finalTxt = "Số dương > số âm";
  } else if (counterDuong < counterAm) {
    finalTxt = "Số dương < số âm";

  } else {
    finalTxt = "Số dương = số âm";
  }




  renderUI(index, finalTxt);

}