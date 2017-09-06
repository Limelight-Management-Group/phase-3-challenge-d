let query = require('./database.js');

let guests = () => {
  let idLength = `ID`.length
  let guestNameLength = `Marchelle Bloodworthe  `.length
  let emailLength = `mbloodwortheb@seattletimes.com       `.length
  console.log(`|----+-------------------------+---------------------------------------|`)
  console.log(`| ID | Guest Name              | EMAIL                                 |`)
  console.log(`|----+-------------------------+---------------------------------------|`)
  let list = query.getAllGuests()
  // console.log('the list', list)
  .then( guests => {
    // console.log('this is the guests query-->', guests)
    // console.log(guests)
      guests.map((guest) => {
        // console.log('the guest', guest)
        console.log("| " +
          (" ").repeat( idLength - guest.id.toString().length) +
          guest.id +
           " | " +
          guest.name +
          (" ").repeat( guestNameLength - guest.name.length) +
           " | " +
          guest.email +
          (" ").repeat(emailLength - guest.email.length) + " | ")
      })
    })
    .then( ()=> console.log( `|----+-------------------------+---------------------------------------|` ) )
}

let rooms = () => {
  let roomLength = `room_number`.length
  let capacityLength = `capacity`.length
  let availableLength = `available`.length
  console.log(`|--------------+--------+---------|`)
  console.log(`| Available   | Capacity | Room # |`)
  console.log(`|--------------+--------+---------|`)
  let list = query.getAllRooms()
    .then( rooms => {
      // console.log('da rooms', rooms)
      rooms.map( room => {
        // console.log('this is the room',room)
        console.log("| " +
          (" ").repeat( availableLength - room.available.length) +
          room.available +
           " | " +
          room.capacity +
          (" ").repeat( roomLength - room.room_number.length) +
           " | " +
          room.room_number +
          (" ").repeat(capacityLength - room.capacity.length) + " | ")
      })
    })
    .then( ()=> console.log( `|---------+-----------+---------|` ) )
}
let getAvailableRooms = () => {
  let roomNumberLength = `room_number`.length
  let guestNameLength = `name                     `.length
  let check_inLength =  `check_in      `.length
  let check_outLength = `check_out     `.length
  console.log(`|---------------------------------------------------------+-------------------------------------------------------------------|`)
  console.log(`| room_number |          name             |                check_in                  |                check_out               |`)
  console.log(`|---------------------------------------------------------+-------------------------------------------------------------------|`)
  let list = query.getAllAvailableRooms()           
    .then( items => {
      // console.log(items)
      items.map( item => {
        // console.log('item', item)
        console.log("| " +
          (" ").repeat( roomNumberLength - item.room_number.length) +
          item.room_number +
           " | " +
          item.name +
          (" ").repeat( guestNameLength - item.name.length) +
           " | " +
          item.check_in +
          (" ").repeat(check_inLength - item.check_in.length) + 
          " | " +
          item.check_out +
          (" ").repeat(check_outLength - item.check_out.length) + 
          " | "
          )
      })
    })
    .then( ()=> console.log( `|-----------------------------------------------------+-----------------------------------------------------------------------|` ) )
}


let getAllBookingPerRoom = () => {
  let roomNumberLength = `room_number`.length
  let guestNameLength = `name                     `.length
  let check_inLength =  `check_in      `.length
  let check_outLength = `check_out     `.length
  console.log(`|---------------------------------------------------------+-------------------------------------------------------------------|`)
  console.log(`| room_number |          name             |                check_in                  |                check_out               |`)
  console.log(`|---------------------------------------------------------+-------------------------------------------------------------------|`)
  let list = query.getAllBookingsByRoomNumber('3C')           
    .then( items => {
      // console.log(items)
      items.map( item => {
        // console.log('item', item)
        console.log("| " +
          (" ").repeat( roomNumberLength - item.room_number.length) +
          item.room_number +
           " | " +
          item.name +
          (" ").repeat( guestNameLength - item.name.length) +
           " | " +
          item.check_in +
          (" ").repeat(check_inLength - item.check_in.length) + 
          " | " +
          item.check_out +
          (" ").repeat(check_outLength - item.check_out.length) + 
          " | "
          )
      })
    })
    .then( ()=> console.log( `|-----------------------------------------------------+-----------------------------------------------------------------------|` ) )
}
let getAllBookings = () => {
  let roomNumberLength = `room_number`.length
  let guestNameLength = `name                     `.length
  let check_inLength =  `check_in      `.length
  let check_outLength = `check_out     `.length
  console.log(`|---------------------------------------------------------+-------------------------------------------------------------------|`)
  console.log(`| room_number |          name             |                check_in                  |                check_out               |`)
  console.log(`|---------------------------------------------------------+-------------------------------------------------------------------|`)
  let list = query.getAllBookings()           
    .then( items => {
      // console.log(items)
      items.map( item => {
        // console.log('item', item)
        console.log("| " +
          (" ").repeat( roomNumberLength - item.room_number.length) +
          item.room_number +
           " | " +
          item.name +
          (" ").repeat( guestNameLength - item.name.length) +
           " | " +
          item.check_in +
          (" ").repeat(check_inLength - item.check_in.length) + 
          " | " +
          item.check_out +
          (" ").repeat(check_outLength - item.check_out.length) + 
          " | "
          )
      })
    })
    .then( ()=> console.log( `|-----------------------------------------------------+-----------------------------------------------------------------------|` ) )
}

let func = process.argv[2]
let argument = process.argv[3]

switch (func) {
  case "guests": guests()
   break;
  case "rooms": rooms()
    break;
  case "available": getAvailableRooms()
    break;
  case "bookedRooms": getAllBookingPerRoom(argument)
    break;
  case "bookings": getAllBookings()
    break;
  default:

}