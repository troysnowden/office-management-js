describe('Office', () => {
  
  beforeEach(function() {
    office = new Office;
  })

  describe('constructor', () => {
    it('should set an empty meetingRooms array', () => {
      expect(office.meetingRooms).toEqual([]);
    })
  })

  describe('addMeetingRoom', () => {
    it('should add a meetingRoom object to the meetingRooms array', () => {
      office.addMeetingRoom("meetingRoomName");
      expect(office.meetingRooms.length).toEqual(1);
      expect(office.meetingRooms[0].name).toEqual("meetingRoomName");
    })
  })

  describe('availableMeetingRooms', () => {
    it('should return only available meeting rooms', () => {
      
      // room that should not be returned by this method
      office.addMeetingRoom("meetingRoomName");
      let unavailableRoom = office.meetingRooms[0];
      unavailableRoom.enterRoom("meetingName", "teamName");

      // room that should be returned by this method
      office.addMeetingRoom("availableMeetingRoomName");
      
      expect(office.meetingRooms.length).toEqual(2);
      expect(office.availableMeetingRooms().length).toEqual(1);
      expect(office.availableMeetingRooms()[0].name).toEqual("availableMeetingRoomName");

    })
  })
})