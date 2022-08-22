export default function SearchInput({onChange, value}) {
    this.$element = document.querySelector('.SearchInput')

    const input = document.createElement('input')
    input.setAttribute('class', 'SearchInput__input')
    input.type = 'text'
    input.placeholder = '프로그램 언어를 입력하세요'
    input.value = value


    this.render = () => {
        this.$element.appendChild(input)
    }

    this.render()

    this.$element.addEventListener('keyup', e => {
        onChange(e.target.value)
    })
}
