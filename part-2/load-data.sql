\copy guests(id, name, email) FROM './guests.csv' DELIMITER ',' CSV HEADER;

\copy rooms(id, room_number, capacity) FROM './rooms.csv' DELIMITER ',' CSV HEADER;

\copy bookings(id, room_id, guest_id, check_in, check_out) FROM './bookings.csv' DELIMITER ',' CSV HEADER;
