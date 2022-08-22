export default function Suggestion({list}) {
    this.$element = document.querySelector('.Suggestion')

    this.render = () => {
        const ul = document.createElement('ul')
        list.forEach(item => {
            const li = document.createElement('li')
            li.innerHTML = item
            ul.appendChild(li)
        })
        this.$element.appendChild(ul)
    }

    this.render()
}
