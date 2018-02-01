class Validator {

  constructor(vm) {
    this.vm = vm
  }

  validateMember(member)
  {

    var result = true
    
    // accept 6 digits only
    if (!/^\d{6}$/.test(member.member_number)) {
      this.vm.error_label_html('#member-number', 'member number accept 6 digits only')
      result = false
    }


    // modulus 11
    let mn = $('#member-number').val();

    let totalmn = 0;
    for(var i = 0; i<$('#member-number').val().length; i++){
      let x = 6 - i;
      totalmn += $('#member-number').val()[i] * x;
    }

    if ((totalmn % 11) !== 0) {
      this.vm.error_label_html('#member-number', 'member number must follow modulus 11 check rules')
      result = false
    }



    return result
  }  
}

module.exports = Validator