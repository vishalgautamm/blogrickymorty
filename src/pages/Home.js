import React, { Fragment, Component } from 'react'
import { getHomeImages } from './../utils/api'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'

class Home extends Component {
  state = {
    images: [],
    loading: false
  }

  async componentDidMount () {
    this.setState({ loading: true })
    let response = await getHomeImages()
    this.setState({ images: response, loading: false })
  }

  render () {
    return (
      <Fragment>
        <div className='row mt-4'>
          {this.state.loading ? (
            <Loading />
          ) : (
            this.state.images.map((url, index) => (
              <img key={index} src={url} className='col-md-4' />
            ))
          )}
        </div>

        <Link to='/characters' className='row align-items-end'>
          <button className='m-2 col-md-2 col-sm-8 btn btn-dark'>
            See more
          </button>
        </Link>
      </Fragment>
    )
  }
}

export default Home
