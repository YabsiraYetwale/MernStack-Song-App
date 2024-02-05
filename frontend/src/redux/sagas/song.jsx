import { getSongsAPI, getSongByIdAPI, createSongAPI, updateSongAPI, deleteSongByIdAPI } from '../../api/index'
import { setSongSlice } from '../slice/song'
import { addSongSlice, deleteSongSlice, editSongSlice, getSongsSlice } from '../slice/songs'
import { CREATE_SONG, DELETE_SONG_BY_ID, GET_SONGS, GET_SONG_BY_ID, UPDATE_SONG_BY_ID } from '../actionTypes'
import { put, takeEvery } from 'redux-saga/effects'
export function* getSongsSaga() {
    const songs = yield getSongsAPI()
    yield put(getSongsSlice(songs.data))
}

export function* getSongByIdSaga(action) {
    yield getSongByIdAPI(action.id)
    yield put(setSongSlice(action.id))
}
export function* createSongSaga(action) {
    yield createSongAPI(action.song)
    yield put(addSongSlice(action.song))
}

export function* updateSongSaga(action) {
    yield updateSongAPI(action.song)
    yield put(editSongSlice(action.song))
}

export function* deleteSongByIdSaga(action) {
    yield deleteSongByIdAPI(action.id)
    yield put(deleteSongSlice(action.id))
}

export function* watchSongsAsync() {
    yield takeEvery(GET_SONGS, getSongsSaga)
    yield takeEvery(GET_SONG_BY_ID, getSongByIdSaga)
    yield takeEvery(CREATE_SONG, createSongSaga)
    yield takeEvery(UPDATE_SONG_BY_ID, updateSongSaga)
    yield takeEvery(DELETE_SONG_BY_ID, deleteSongByIdSaga)
}