function checkbox() {
  var check_Box = document.getElementsByName("bmi");
  for (i = 0; i < check_Box.length; i++) {
    var design = document.getElementById([i + 1]);
    if (check_Box[i].checked == true) {
      design.style.display = "block";
    } else {
      check_Box[i].checked = false;
      design.style.display = "none";
    }
  }
}

window.onload = () => {
  var weight = document.querySelector("#weight");

  weight.addEventListener("keyup", calculateBMI);
  /* keyup 이벤트를 사용하여 weight 에 정보가 입력 될 시 calculateBMI 함수 실행  */
};


function calculateBMI() {
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const bmiBox = document.querySelector(".bmi_box");
  const bmiTxt = document.querySelector("#que")
  const bmiTit = document.querySelector("#ans")

  if (height === "" || isNaN(height)) {
    /* height 값이 표현할 수 없는 값일 때 */
    result.innerHTML = "";
    
  } else if (weight === "" || isNaN(weight)) {
    /* weight 값이 표현할 수 없는 값일 때 */
    result.innerHTML = "";
    bmiTxt.innerHTML = "Welcome!"
    bmiTit.innerHTML = "Enter your height and weight and you’ll see your BMI result here"
    // bmiTxt.style.fontSize = "24px"
    bmiBox.classList.remove("active");
    /* weight 값이 제거될 시 active 클래스 제거 */
  } else {
    /* height, weight 값이 모두 작성 될 때 */
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    /* toFixed 메소드로 소수점 첫 번째 자리까지 반올림 */
    bmiBox.classList.add("active");
    /* bmi 계산이 완료될 시 active 클래스 추가하여 레이아웃 변경 */
    bmiTxt.innerHTML = "Your BMI is...";
    /* bmi 계산이 완료될 시 text 변경 */
    bmiTit.innerHTML = "Your BMI suggests you're a healthy weight. Tour ideal Weight is between 63.3kgs - 85.2kgs.";
    /* bmi 계산이 완료될 시 text 변경 */
    result.innerHTML = `<span>${bmi}</span>`
    /* bmi 계산이 완료될 시 result 영역에 노출 */
  }
  console.log(result)
}




