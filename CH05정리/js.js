// 바닐라 자바스크립트 : 순수 자바스크립트 
// jQuery 라이브러리와 함께 사용 / MDN 외부 소스와 함께 사용
const title = document.querySelector("#title");

// clasName 은 클래스를 통채로 바꾸는 것
title.className = "on"
// classList를 사용하면 add, remove를 통해서 원하는 클래스 이름만 변경
title.classList.add("off")