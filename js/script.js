$(document).ready(function () {  
    const menuItems = document.querySelectorAll(".menu_category");
    const background = document.querySelector(".background");
    const pages = document.querySelectorAll(".each_page");
    const logo = document.querySelector(".head .top_area .logo");
    const button_contact = document.querySelector(".main_page .button_r");

    // 페이지가 처음 로드될 때는 500px 부분을 보여주고 카테고리 활성화
    background.style.transform = "translateY(-600px)";
    document.querySelector('.main_page').classList.add('active');

    let time = 0;
    // 메뉴 클릭 시 이벤트 추가    
    menuItems.forEach((item, index) => {
        item.addEventListener("click", function() {   
            // 1. 모든 메뉴에서 active 제거
            menuItems.forEach(menu => menu.classList.remove('active'));
            item.classList.add('active');
            pages.forEach(page => page.classList.remove('active'));

            
            // 2. 현재 위치에 따라 transition 시간 설정
            if (background.style.transform === "translateY(0px)") {
                time = 0;
            } else {
                time = 500;
            }
            // 3. 클릭 시 배경이 0px 부분으로 이동
            background.style.transform = "translateY(0px)";

            // 4. 배경 이미지 이동 완료 후 페이지 전환
            openPage(pages, index + 1, time);
        });
    });

    //로고 클릭시 이벤트
    logo.addEventListener("click", function() {        
        menuItems.forEach(menu => menu.classList.remove('active'));
        // 현재 위치에 따라 transition 시간 설정
        if (background.style.transform === "translateY(-600px)") {
            time = 0;
        } else {
            time = 500;
        }
        background.style.transform = "translateY(-600px)";        
        openPage(pages, 0, time);
    });

    // contact us 클릭시 이벤트
    button_contact.addEventListener("click", function() {
        background.style.transform = "translateY(0px)";
        menuItems[3].classList.add('active');
        openPage(pages, 4, 500);
    });

    function openPage(pages, index, time) {
//      console.log(pages[index]);        
        pages.forEach(page => page.classList.remove('active'));
        setTimeout(() => {
            pages.forEach(page => page.classList.remove('active'));
            // 선택된 페이지 보이기
            pages[index].classList.add('active');
            // 스크롤 위치 초기화
            pages[index].scrollTop = 0;
        }, time); // time만큼 대기 후에 이동
    }
    
    // mobile
    const offcanvasMenuItems = document.querySelectorAll("#offcanvasExample ul li button");
    const offcanvasElement = document.querySelector("#offcanvasExample");
    const bootstrapOffcanvas = new bootstrap.Offcanvas(offcanvasElement);

    offcanvasMenuItems.forEach((item, index) => {
        item.addEventListener("click", function() {
            if (background.style.transform === "translateY(0px)") {
                time = 0;
            } else {
                time = 500;
            }
            // 3. 클릭 시 배경이 0px 부분으로 이동
            background.style.transform = "translateY(0px)";
            // 페이지 전환
            openPage(pages, index + 1, 0);
            // offcanvas 닫기
            bootstrapOffcanvas.hide();
        });
    });
});