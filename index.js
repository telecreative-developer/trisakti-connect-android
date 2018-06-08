import React from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import reducers from './app/reducers'
import Reactotron from 'reactotron-react-native'
import './ReactotronConfig'
// Routes
import SplashScreen from './app/screens/Splash'
import LoginScreen from './app/screens/Login'
import RegisterScreen from './app/screens/Register'
import HomeScreen from './app/screens/Home'
import ChatsScreen from './app/screens/Chats'
import NewsScreen from './app/screens/News'
import ReportScreen from './app/screens/Report'
import SearchScreen from './app/screens/Search'
import OptionsScreen from './app/screens/Options'
import PersonProfile from './app/screens/Profile/PersonProfile'
import ModeReadNews from './app/screens/News/ModeReadNews'
import ModeReadJob from './app/screens/News/ModeReadJob'
import ModeReadVoting from './app/screens/News/ModeReadVoting'
import ModeChatting from './app/screens/Chats/ModeChatting'
import EditProfile from './app/screens/Profile/EditProfile'
import CardProfile from './app/screens/Profile/CardProfile'
import ContactsChat from './app/screens/Chats/ContactsChat'
import CreateNews from './app/screens/News/CreateNews'
import CreateJob from './app/screens/News/CreateJob'
import CreateVote from './app/screens/News/CreateVote'
import AddShopScreen from './app/screens/Shop/AddShop'
import ShopScreen from './app/screens/Shop/index'
import DetailCategoryScreen from './app/screens/Shop/DetailCategory'
import DetailItemScreen from './app/screens/Shop/DetailItem'
import ItemShopScreen from './app/screens/Shop/ItemShop'
import InvoiceShopScreen from './app/screens/Shop/InvoiceShop'
import DetailInvoiceScreen from './app/screens/Shop/DetailInvoiceShop'
import TokopediaShopScreen from './app/screens/Shop/TokopediaShop'
import TokopediaCartScreen from './app/screens/Shop/TokopediaCart'

const App = StackNavigator(
	{	
		TokopediaShop: { screen: TokopediaShopScreen },
		TokopediaCart: { screen: TokopediaCartScreen },
		DetailInvoiceShop: { screen: DetailInvoiceScreen },
		InvoiceShop: { screen: InvoiceShopScreen },
		Splash: { screen: SplashScreen },
		Login: { screen: LoginScreen },
		Register: { screen: RegisterScreen },
		Report: { screen: ReportScreen },
		Home: { screen: HomeScreen },
		News: { screen: NewsScreen },
		Chats: { screen: ChatsScreen },
		Search: { screen: SearchScreen },
		Shop: { screen: ShopScreen },
		ItemShop: { screen: ItemShopScreen },
		AddShop: { screen: AddShopScreen },
		DetailCategory: { screen: DetailCategoryScreen },
		DetailItem: { screen: DetailItemScreen },
		Options: { screen: OptionsScreen },
		PersonProfile: { screen: PersonProfile },
		ModeReadNews: { screen: ModeReadNews },
		ModeReadJob: { screen: ModeReadJob },
		ModeChatting: { screen: ModeChatting },
		ModeReadVoting: { screen: ModeReadVoting },
		EditProfile: { screen: EditProfile },
		CardProfile: { screen: CardProfile },
		ContactsChat: { screen: ContactsChat },
		CreateNews: { screen: CreateNews },
		CreateJob: { screen: CreateJob },
		CreateVote: { screen: CreateVote }
	},
	{
		headerMode: 'none'
	}
)

const store = Reactotron.createStore(reducers, applyMiddleware(thunk))
const persistor = persistStore(store)

const TrisaktiConnect = () => (
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
)

AppRegistry.registerComponent('TrisaktiConnect', () => TrisaktiConnect)
