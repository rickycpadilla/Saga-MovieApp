// @flow

import { Navigation, ScreenVisibilityListener } from 'react-native-navigation'

import MovieListScreen from './MovieList'

const screens = [
MovieListScreen
]

const reduxScreens = [
	// MovieListScreen
]

export function registerScreens(store: any, provider: any) {
	// // Register screens without Redux wrapper
	screens.map( screen => 
		Navigation.registerComponent(screen.screenName, () => screen)
	)
	
	// // Register screens with Redux wrapper
	// reduxScreens.map( screen =>
	// 	Navigation.registerComponentWithRedux(screen.screenName, () => screen, provider, store)
	// )
}