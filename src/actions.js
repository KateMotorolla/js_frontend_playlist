export const PLAYLIST_ADD= 'PLAYLIST_ADD'
export const PLAYLIST_ADD_ALL = 'PLAYLIST_ADD_ALL'
export const PLAYLIST_DELETE = 'PLAYLIST_DELETE'
export const PLAYLIST_UPDATE_STATE = 'PLAYLIST_UPDATE_STATE'

export function playlistAdd (_id, name, style) {
    return {type: PLAYLIST_ADD, _id, name, style};
}

export function playlistAddAll (playlist) {
    return {type: PLAYLIST_ADD_ALL, playlist};
}

export function playlistDelete (_id) {
    return {type: PLAYLIST_DELETE, _id};
}

export function playlistUpdateState (_id) {
    return {type: PLAYLIST_UPDATE_STATE, _id};
}