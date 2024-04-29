const $ = (selector) => document.querySelector(selector)

function App() {
    const updateMenuCount = () => {
        const menuCount = document.querySelectorAll('.menu-list-item').length

        $('.menu-count').innerText = `총 ${menuCount}개`
    }

    const addMenu = () => {
        const menuName = document
            .querySelector('#espresso-menu-name')
            .value

        if (menuName === '') {
            alert('메뉴 이름을 입력해주세요.')

            return
        }

        $('#espresso-menu-list')
            .insertAdjacentHTML('beforeend',
                `
                <li class="menu-list-item d-flex items-center py-2">
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
                </li>
                `
            )

        $('#espresso-menu-name').value = ''

        updateMenuCount()
    }

    const editMenu = (e) => {
        const $menuNameElement = e.target.closest('li').querySelector('.menu-name')

        $menuNameElement.innerText = prompt('메뉴명을 수정해주세요', $menuNameElement.innerText)
    }

    const removeMenu = (e) => {
        if (confirm('정말 삭제하시겠습니까?')) {
            e.target.closest('li').remove()

            updateMenuCount()
        }
    }

    $("#espresso-menu-form").addEventListener('submit', e => {
        e.preventDefault()
    })

    $('#espresso-menu-submit-button').addEventListener('click', addMenu)

    $('#espresso-menu-name').addEventListener('keypress', (e) => {
        if (e.key !== 'Enter') {
            return
        }

        addMenu()
    })

    $('#espresso-menu-list').addEventListener('click', e => {
        if (e.target.classList.contains('menu-edit-button')) {
            editMenu(e)
        }

        if (e.target.classList.contains('menu-remove-button')) {
            removeMenu(e)
        }
    })
}

App()
