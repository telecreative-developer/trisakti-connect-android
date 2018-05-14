import { SESSION, PROCESS_SUCCESS, PROCESS_LOADING, PROCESS_FAILED, SET_NOTIFICATION, SET_LINK_NAVIGATE, SET_DATA_USER } from '../constants'
import { url } from '../server'

export const setSession = (dataSession) => {
	return (dispatch) => {
		dispatch(session(dataSession))
	}
}

const session = (session) => {
	return {
		type: SESSION,
		session
	}
}

export const setLoading = (dataLoading) => {
	return (dispatch) => {
		dispatch(loading(dataLoading))
	}
}

const loading = (loading) => {
	return {
		type: PROCESS_LOADING,
		loading
	}
}

export const setSuccess = (dataSuccess) => {
	return (dispatch) => {
		dispatch(success(dataSuccess))
	}
}

const success = (success) => {
	return {
		type: PROCESS_SUCCESS,
		success
	}
}

export const setFailed = (dataFailed) => {
	return (dispatch) => {
		dispatch(failed(dataFailed))
	}
}

const failed = (failed) => {
	return {
		type: PROCESS_FAILED,
		failed
	}
}

export const setLinkNavigate = (navigate) => {
	return (dispatch) => {
		dispatch(linkNavigate(navigate))
	}
}

const linkNavigate = (navigate) => {
	return {
		type: SET_LINK_NAVIGATE,
		linkNavigate: navigate
	}
}

export const setDataUser = (user) => {
	return (dispatch) => {
		dispatch(dataUser(user))
	}
}

const dataUser = (dataUser) => {
	return {
		type: SET_DATA_USER,
		dataUser
	}
}