// @flow

import React from 'react'
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
  FlatList
} from 'react-native'

import type { Movie } from '../../types'

type Props = {
  movies: Array<Movie>
}

const MovieCell = (props: {movie: Movie}) => {
  return (
    <View>
      <Text>{props.movie.title}</Text>
      <Text>{props.movie.overview}</Text>
      <View style={{height: 1, backgroundColor: 'black'}}/>
    </View>
  )
}

// RICKY PICK UP HERE - START USING API AND REDUX SAGAS

export default (props: Props) => {

	const { movies } = props

	return (
		<View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => {
            return (
              <MovieCell key={item.id} movie={item}/>
            )
          }
        }
      />
    </View>
	)

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column'
  }
})
