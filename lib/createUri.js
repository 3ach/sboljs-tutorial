
function createUri(uriPrefix, displayId, version) {
    let uri = uriPrefix + displayId;

    if(version) {
        uri = uri + '/' + version; 
    }

    return uri;
}

module.exports = createUri;