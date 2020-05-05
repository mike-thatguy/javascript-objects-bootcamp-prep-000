playlist = {
  artist: 'Dude'
};

function updatePlaylist(obj, name, title) {
  return obj.Assign({}, obj, { name: title });
}