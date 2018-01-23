var jsf = require('jsonfile')
var fs = require('fs')
var chunk = require('chunk')
var filename = 'members.json'

$(function(){

  let members = jsf.readFileSync(filename)
  if (members.length > 0) {

    let member_page_groups = chunk(members, 10)
    make_table(member_page_groups[0])

    if (member_page_groups.length > 1) {
      create_pagination(member_page_groups)
    }
  }
})

function make_table(members)
{

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
    </tr>`
    $('#members-table tbody').append(member_row_html)
  }
}

function create_pagination(pages) {

  for (var i = 0; i < pages.length; i++) {
    let item_html = `<span class="item" data-page="${i}">${i+1}</span>`
    $('#members-pagination').append(item_html)
  }
  $('#members-pagination span.item').click(function() {
    $this = $(this)
    make_table(pages[$this.data('page')]);
  });
}