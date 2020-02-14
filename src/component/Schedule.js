import React from 'react'
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core'

export default function Schedule(props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Event</TableCell>
          <TableCell>Time</TableCell>
          <TableCell>Location</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Registration Opens</TableCell>
          <TableCell>Saturday 9:00 AM</TableCell>
          <TableCell>1st Floor Lobby</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Team Building</TableCell>
          <TableCell>Saturday 11:00 AM</TableCell>
          <TableCell>Atrium</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Lunch</TableCell>
          <TableCell>Saturday 12:00 PM</TableCell>
          <TableCell>Atrium</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Opening Ceremony</TableCell>
          <TableCell>Saturday 1:00 PM</TableCell>
          <TableCell>Bossone Auditorium</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Hardware Opens</TableCell>
          <TableCell>Saturday 2:00 PM</TableCell>
          <TableCell>Parts Window</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Hacking Starts</TableCell>
          <TableCell>Saturday 2:00 PM</TableCell>
          <TableCell>Atrium</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Workshop 1</TableCell>
          <TableCell>Saturday 3:00 PM</TableCell>
          <TableCell>Room 302</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Workshop 2</TableCell>
          <TableCell>Saturday 5:00 PM</TableCell>
          <TableCell>Room 302</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Dinner</TableCell>
          <TableCell>Saturday 6:00 PM</TableCell>
          <TableCell>1st Floor</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Fun Event 1</TableCell>
          <TableCell>Saturday 7:00 PM</TableCell>
          <TableCell>1st Floor Lobby</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Workshop 3</TableCell>
          <TableCell>Saturday 8:00 PM</TableCell>
          <TableCell>Room 302</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Fun Event 2</TableCell>
          <TableCell>Saturday 9:00 PM</TableCell>
          <TableCell>1st Floor Lobby</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Devpost Registration Ends</TableCell>
          <TableCell>Saturday 10:00 PM</TableCell>
          <TableCell>N/A</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Midnight Snack</TableCell>
          <TableCell>Sunday 12:00 AM</TableCell>
          <TableCell>1st Floor</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Workshop 4</TableCell>
          <TableCell>Sunday 1:00 AM</TableCell>
          <TableCell>Room 302</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Fun Event 3</TableCell>
          <TableCell>Sunday 2:00 AM</TableCell>
          <TableCell>N/A</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Breakfast</TableCell>
          <TableCell>Sunday 8:00 AM</TableCell>
          <TableCell>1st Floor</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Lunch</TableCell>
          <TableCell>Sunday 12:00 PM</TableCell>
          <TableCell>1st Floor</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Hacking Ends</TableCell>
          <TableCell>Sunday 2:00 PM</TableCell>
          <TableCell>N/A</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Judging Starts</TableCell>
          <TableCell>Sunday 2:00 PM</TableCell>
          <TableCell>Atrium</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Closing Ceremony</TableCell>
          <TableCell>Sunday 4:00 PM</TableCell>
          <TableCell>Bossone Auditorium</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
