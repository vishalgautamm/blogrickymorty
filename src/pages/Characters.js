import React, { Component, Fragment } from 'react'
import { getCharactersByPage } from './../utils/api'
import CharactersPage from './../components/CharactersPage'
import Button from '../components/Button'
import Loading from '../components/Loading'

class Characters extends Component {
  state = {
    data: [],
    page: 1,
    loading: false
  }

  componentDidMount () {
    this.getCharactersImages()
  }

  async getCharactersImages () {
    this.setState({ loading: true })
    let response = await getCharactersByPage(this.state.page)
    this.setState({ data: response, loading: false })
  }

  nextPage = () => {
    if (this.state.page === 22) {
      // -- always use === operator over == operator for comparing things

      return null
    } // limite para numero maximo de paginas
    let newpage = this.state.page + 1
    this.setState({ page: newpage }, () => {
      this.getCharactersImages()
    })
  }
  lastPage = () => {
    if (this.state.page === 1) {
      return null
    } // limite para numero minimo de paginas
    let newpage = this.state.page - 1
    this.setState({ page: newpage }, () => {
      this.getCharactersImages()
    })
  }

  render () {
    const { loading, data } = this.state
    return (
      <Fragment>
        <Button onClick={this.lastPage} secondary>
          Last
        </Button>
        <Button onClick={this.nextPage} primary>
          Next
        </Button>
        <div style={{ minHeight: '400px' }}>
          {loading ? <Loading /> : <CharactersPage data={data} />}
        </div>
      </Fragment>
    )
  }
}

export default Characters
