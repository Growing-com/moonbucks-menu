const element = (selector) => document.querySelector(selector);

const APP = () => {
  const addMenu = () => {
    const menuName = element("#espresso-menu-name").value.trim();

    if (menuName === "") {
      alert("메뉴를 입력하세요!");
      return;
    }
    //추가 로직
    element("#espresso-menu-list").insertAdjacentHTML(
      "beforeend",
      `<li class="menu-list-item d-flex items-center py-2">
        <span class="w-100 pl-2 menu-name">${menuName}</span>
        <button
          type="button"
          class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
        >
          수정
        </button>
        <button
          type="button"
          class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
        >
          삭제
        </button>
      </li>`
    );

    element("#espresso-menu-name").value = "";
  };

  //

  // 카테고리마다 변경.. 아 용어가 생각이 안나네
  element("#espresso-menu-submit-button").addEventListener("click", addMenu);
  element("#espresso-menu-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addMenu();
  });
};

APP();
