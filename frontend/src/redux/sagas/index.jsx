import { all } from "redux-saga/effects";
import { watchSongsAsync } from "./song";

export function* rootSaga() {
    yield all([
        watchSongsAsync()
    ])
}