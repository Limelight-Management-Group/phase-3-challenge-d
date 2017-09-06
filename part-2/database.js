const pgp = require('pg-promise')();
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/hotel_db';
const db = pgp(connectionString);

const query = {
  getAllGuests(){
  let guestList = db.any('SELECT id, name, email FROM guests')
  return guestList;
  },
  getAllAvailableRooms(){
    let availableRoomsList = db.any(`
      SELECT room_number, g.name, check_in, check_out FROM rooms as r
      JOIN guests AS g
      ON r.id = g.id
      JOIN bookings as b
      ON b.id = g.id
      WHERE available`)
    // SELECT id FROM Users WHERE status = $1', ['active'],
    console.log('availableRoomsList', availableRoomsList)
    return availableRoomsList
  },
  getUpcomingBookings(){
    let upcomingBookings = db.any(`     
      SELECT r.room_number, g.name, b.check_in,b.check_out  FROM bookings AS b
      JOIN rooms AS r
      ON b.id = r.id
      JOIN guests as g
      ON b.id = g.id
      WHERE now() < check_in
      `)
    console.log('the UpcomingBookings', upcomingBookings)
    return upcomingBookings
  },
  getAllBookingsByRoomNumber(room_number){
    let bookingByRoomId = db.any(`
      SELECT r.room_number, g.name, b.check_in,b.check_out  FROM bookings AS b
      JOIN rooms as r
      ON b.room_id = r.id
      JOIN guests as g
      ON b.guest_id = g.id
      WHERE room_number = $1
      `,[room_number])
      // console.log('this is the bookingByRoomId', bookingByRoomId)
      return bookingByRoomId
  },
  getAllRooms(){
    let allOfTheRooms = db.any(`
      SELECT * FROM rooms
      `)
    // console.log('allOfTheRooms', allOfTheRooms)
    return allOfTheRooms
  },
  getAllBookings(){
    let bookings = db.any(`     
      SELECT *  FROM bookings 
      `)
    // console.log('the UpcomingBookings', bookings)
    return bookings
  }

}

module.exports = query;