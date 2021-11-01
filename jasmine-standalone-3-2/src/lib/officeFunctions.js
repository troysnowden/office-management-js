let office = new Office;

function showMeetingRooms() {
  const body = document.body,
        listContainer = document.createElement('div'),
        listElement = document.createElement('ul');

  body.appendChild(listContainer);
  listContainer.appendChild(listElement);
  
  office.meetingRooms.forEach(room => {
    let listItem = document.createElement('li'),
        meetingRoomDetailsList = document.createElement('ul'),
        roomNameItem = document.createElement('li'),
        roomAvailableItem = document.createElement('li'),
        currentMeetingItem = document.createElement('li');
    
    roomNameItem.innerHTML = room.name;
    roomAvailableItem.innerHTML = room.available;
    currentMeetingItem.innerHTML = room.currentMeeting;

    meetingRoomDetailsList.innerHTML = roomNameItem + roomAvailableItem + currentMeetingItem;

    listItem.innerHTML = meetingRoomDetailsList;

    listElement.appendChild(listItem);
  })
}

function addMeetingRoom(roomName) {
  office.addMeetingRoom(roomName);
  console.log(office.meetingRooms);
}