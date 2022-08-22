export default function App({$target}) {
    this.state = {
        languages: [],
        selectedLanguages: [],
    }
    this.render = () => {
        $target.innerHTML = `<div class="SelectedLanguage">
        <ul>
          <li>JavaScrip</li>
          <li>Python</li>
          <li>Elixir</li>
          <li>Java</li>
          <li>PHP</li>
        </ul>
      </div>
      <form class="SearchInput">
        <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="Script">
      </form>
      <div class="Suggestion">
        <ul>
          <li class="Suggestion__item--selected">Action<span class="Suggestion__item--matched">Script</span></li>
          <li>Java<span class="Suggestion__item--matched">Script</span></li>
          <li>Type<span class="Suggestion__item--matched">Script</span></li>
          <li>Pure<span class="Suggestion__item--matched">Script</span></li>
        </ul>
      </div>`
    }
    this.render()
}
