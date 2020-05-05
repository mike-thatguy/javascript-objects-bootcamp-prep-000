playlist = {
  artist: 'Dude'
};

function updatePlaylist(obj, name, title) {
  return obj.Assign({}, obj, { name: title });
}

function removeFromPlaylist(obj, name) {
    return {
      ...Object.keys(obj)
          .filter(item => !isInArray(item, [name]))
          .reduce((newObj, item) => {
              return {
                ...newObj, [item]: obj[item]
              }
            }, {})
    };
}
