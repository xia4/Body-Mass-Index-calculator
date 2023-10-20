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
  console.log(check_Box);
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

  if (height === "" || isNaN(height)) {
    /* height 값이 표현할 수 없는 값일 때 */
    result.innerHTML = "키를 입력해 주세요!";
  } else if (weight === "" || isNaN(weight)) {
    /* weight 값이 표현할 수 없는 값일 때 */
    result.innerHTML = "몸무게를 입력해 주세요!";
  } else {
    /* height, weight 값이 모두 작성 될 때 */
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    /* toFixed 메소드로 소수점 첫 번째 자리까지 반올림 */
      if (bmi <= 18.5) {
        result.innerHTML = `<span>${bmi}</span>`;
      } else if (bmi <= 23) {
        result.innerHTML = `<span>${bmi}</span>`;
      } else if (bmi <= 25) {
        result.innerHTML = `<span>${bmi}</span>`;
      } else if (bmi <= 30) {
        result.innerHTML = `<span>${bmi}</span>`;
      } else {
        result.innerHTML = `<span>${bmi}</span>`;
      }
  }
}
