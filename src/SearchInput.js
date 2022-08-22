export default function SearchInput({onChange, value, setValue}) {
    this.$element = document.querySelector('.SearchInput')


    this.render = () => {
        this.$element.innerHTML = `<input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="Script">`
    }

}
