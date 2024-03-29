import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import { session, loading, failed, success, linkNavigate, dataUser } from './processor'

import {
	publishNewsSuccess,
	sendCommentSuccess,
	fetchCommentsSuccess,
	postJobSuccess,
	postJobLoading,
	postJobFailed,
	news,
	addClapsSuccess,
	fetchJobSuccess
} from './news'

import {
	dataFaculties,
	dataMajors,
	registerSuccess,
	fetchUserWithNim,
	editProfileSuccess,
	sendRequestFriendSuccess,
	fetchFriendRequestSuccess,
	fetchFriendsSuccess,
	checkFriendStatusSuccess,
	sendReportRegiterSuccess
} from './users'

import {
	fetchChatsPersonalSuccess,
	sendChatPersonalSuccess,
	fetchChatsByIDSuccess,
	deleteChatSuccess
} from './chats'

import {
	searchResultUser,
	searchResultNews,
	searchResultVote,
	searchResultCareer,
	searchNotFound
} from './search'

import {
	fetchPollsSuccess,
	fetchPollsAnswersSuccess,
	hasVoted,
	postVoteSuccess,
	votesList
} from './polls'

import { shop, shopWithCategory, shopCategory, ads, myShop } from './shop'

const config = {
	key: 'root',
	storage
}

const reducers = persistCombineReducers(config, {
	session,
	loading,
	success,
	failed,
	linkNavigate,
	dataUser,
	publishNewsSuccess,
	dataFaculties,
	dataMajors,
	registerSuccess,
	fetchUserWithNim,
	news,
	editProfileSuccess,
	sendCommentSuccess,
	fetchCommentsSuccess,
	addClapsSuccess,
	postJobSuccess,
	fetchJobSuccess,
	sendRequestFriendSuccess,
	searchResultUser,
	searchResultNews,
	searchResultVote,
	searchResultCareer,
	searchNotFound,
	fetchFriendRequestSuccess,
	fetchFriendsSuccess,
	checkFriendStatusSuccess,
	fetchChatsPersonalSuccess,
	sendChatPersonalSuccess,
	fetchChatsByIDSuccess,
	fetchPollsSuccess,
	fetchPollsAnswersSuccess,
	hasVoted,
	postVoteSuccess,
	deleteChatSuccess,
	sendReportRegiterSuccess,
	votesList,
	shopCategory,
	ads,
	shop,
	myShop,
	shopWithCategory
})

export default reducers
