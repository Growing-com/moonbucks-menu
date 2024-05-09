const element = (selector) => document.querySelector(selector);

const APP = () => {
  const updateMenuCount = () => {
    const menuCount = document.querySelectorAll(".menu-list-item").length;
    element(".menu-count").textContent = `총 ${menuCount} 개`;
  };

  const addMenu = () => {
    const menuName = element("#espresso-menu-name").value.trim();

    if (menuName === "") {
      alert("메뉴를 입력하세요!");
      return;
    }

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
    updateMenuCount();
  };

  //
  const editMenu = (event) => {
    const menuNameElement = event.target
      .closest("li")
      .querySelector(".menu-name");
    const newName = (
      prompt("메뉴명을 수정하세요.", menuNameElement.textContent) || ""
    ).trim();
    if (newName !== "") {
      menuNameElement.textContent = newName;
    }
  };

  const removeMenu = (event) => {
    const menuElement = event.target.closest("li");
    const isConfirmed = confirm("정말 삭제하시겠습니까?");
    if (isConfirmed) {
      menuElement.remove();
      updateMenuCount();
    }
  };

  // 동적으로 변경?
  element("#espresso-menu-submit-button").addEventListener("click", addMenu);

  element("#espresso-menu-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addMenu();
  });

  element("#espresso-menu-list").addEventListener("click", (event) => {
    if (event.target.classList.contains("menu-edit-button")) {
      editMenu(event);
    }
    if (event.target.classList.contains("menu-remove-button")) {
      removeMenu(event);
    }
  });
};

APP();
