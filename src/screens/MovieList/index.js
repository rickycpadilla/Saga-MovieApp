// @flow

import React, { Component } from 'react'
import { Navigation } from 'react-native-navigation'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as reduxActions from '../../redux/actions'
import type { Movie } from '../../types'

import MovieList from './MovieList'

type Props = {

}

type State = {

}

const fakeMovies: Array<Movie> = [
  {
    id: '1',
    title: 'Fake one',
    overview: 'overview'
  },
  {
    id: '2',
    title: 'Fake two',
    overview: 'overview'
  },
]

class MovieListScreen extends Component < Props, State > {

	// STATIC PUBLIC PROPS
	static screenName = 'MOVIELIST_SCREEN'

  // NAVIGATOR STYLE

	// REACT COMPONENT PROPS AND METHODS

	state = {

	}

	componentWillReceiveProps(){

	}

  // PRIVATE METHODS


	// RENDER UI

	render() {
		return (
			<MovieList
        movies={fakeMovies}
			/>
		)
	}

}

export default MovieListScreen

// // SETUP REDUX STATE AND ACTIONS

// function mapStateToProps(state, ownProps) {
// 	// const { userState } = state
// 	return {
// 		// userState
// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		actions: bindActionCreators(reduxActions, dispatch)
// 	}
// }

// export default connect(mapStateToProps, mapDispatchToProps)(MovieListScreen)
