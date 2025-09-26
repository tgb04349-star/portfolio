// GNB 메뉴와 이동할 섹션 매핑
const menuMap = {
  "About Me": "self",        // Resume 섹션 (id="self")
  "Planning Work": "plan",   // 기획 섹션 (id="plan")
  "Design Work": "design",   // 디자인 섹션 (id="design")
  "Video Work": "video"      // 비디오 섹션 (id="video")
};

// GNB의 모든 a 태그 선택 후 클릭 이벤트 등록
document.querySelectorAll(".gnb a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // 기본 a태그 이동 막기
    const text = link.textContent.trim(); // 클릭한 메뉴 텍스트
    const targetId = menuMap[text];       // 매핑된 섹션 id

    if (targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  });
});
