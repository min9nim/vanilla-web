import SelectedLanguages from './SelectedLanguages'
import SearchInput from './SearchInput'
import request from './request'
import Suggestion from './Suggestion'

export default function App({$target}) {
    this.state = {
        value: '',
        languages: [],
        selectedLanguages: [],
    }
    this.setState = (state) => {
        this.state = {...this.state, ...state}
        this.render()
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

        new SearchInput({
            value: this.state.value,
            onChange: async (value) => {
                const res = await request(value)
                this.setState({value, languages: res})
            },
        })
        new Suggestion({list: this.state.languages})

    }

    this.render()
}
