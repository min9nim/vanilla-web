import SelectedLanguages from './SelectedLanguages'
import SearchInput from './SearchInput'

export default function App({$target}) {
    this.state = {
        value: '',
        languages: [],
        selectedLanguages: [],
    }
    this.render = () => {
        $target.innerHTML = `${SelectedLanguages()}
      <form class="SearchInput">
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
    new SearchInput({
        value: this.state.value,
        onChange: (value) => {
            console.log(value)
        },
    })
}
