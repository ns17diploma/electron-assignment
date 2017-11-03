var jsf = require('jsonfile')
var fs = require('fs')
var filename = 'members.json'

$(function(){
  make_table()
})

function make_table()
{
  let members = jsf.readFileSync(filename);

  $('#members-table tbody').html('')
  for (var i in members) {

    let member_row_html = `<tr>
      <td>${members[i]['member-number']}</td>
      <td>${members[i]['first-name']}</td>
      <td>${members[i]['last-name']}</td>
      <td>${members[i]['address01']} <br> ${members[i]['address02']} <br> ${members[i]['address03']} </td>
      <td>${members[i]['sex']}</td>
      <td>${members[i]['dob']}</td>
      <td>${members[i]['join-date']}</td>
      <td>${members[i]['type']}</td>
      <td>${members[i]['sub-due-month']}</td>
    </tr>`;
    $('#members-table tbody').append(member_row_html)
    console.log(members[i])
  }

}