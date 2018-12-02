import React, { Component } from 'react'
import { getCharacters } from './../utils/api'
import { fillwithLorem } from './../utils/lorem'
import DetailReview from './../components/DetailReview'
import Loading from '../components/Loading'

class Detail extends Component {
  state = {
    detail: {},
    loading: false
  }

  async componentDidMount () {
    this.setState({ loading: true })
    let response = await getCharacters(this.props.match.params.id)
    const detail = fillwithLorem(response.data)
    this.setState({ detail, loading: false })
  }

  render () {
    return this.state.loading ? (
      <Loading />
    ) : (
      <DetailReview data={this.state.detail} />
    )
  }
}
export default Detail
