// @flow

import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'
import configureStore from './redux'

import { registerScreens } from './screens'
import MovieListScreen from './screens/MovieList'

const store = configureStore()

registerScreens(store, Provider)

const stack = {
  stack: {
    children: [
      {
        component: {
          name: MovieListScreen.screenName
        }
      }
    ]
  }
}

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({ root: stack })
})
