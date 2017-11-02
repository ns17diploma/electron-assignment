var jsf = require('jsonfile')
var fs = require('fs')
var filename = 'members.json'
$(function(){
  $('#btn-save').click(function(){
    if (validate()) {
      let member = {}
      $('.input-save').each(function(){
        let $this = $(this)
        member[$this.attr('name')] = $this.val();
      })
      appendMember(member)
      console.log('save')
    } else {
      console.log('error')
    }
  })
})

function validate()
{
  $result = true
  console.log('validate')
  if (false) {
    $result = false
  }
  return $result
}

function appendMember(member)
{
  if (!fs.existsSync(filename)) {
      jsf.writeFileSync(filename, [])
  }
  var members = jsf.readFileSync(filename)
  members.push(member)
  jsf.writeFileSync(filename, members)
}