rooms = ['Room One', 'Room Two', 'Room Three', 'Room Four']
rooms.each { |room| Room.create(name: room) }

first_residents = ['First', 'Second']
first_residents.each { |resident| Resident.create(first_name: resident, last_name: 'Test', room_id: 1) }

second_residents = ['Third', 'Fourth']
second_residents.each { |resident| Resident.create(first_name: resident, last_name: 'Example', room_id: 2) }

