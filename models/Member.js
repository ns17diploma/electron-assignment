class Member {

  constructor(
    member_number,
    type,
    join_date,
    sub_due_month,
    first_name,
    last_name,
    sex,
    dob,
    address01,
    address02,
    address03,
    postalcode
  ) {
    this.member_number = member_number
    this.type = type
    this.join_date = join_date
    this.sub_due_month = sub_due_month
    this.first_name = first_name
    this.last_name = last_name
    this.sex = sex
    this.dob = dob
    this.address01 = address01
    this.address02 = address02
    this.address03 = address03
    this.postalcode = postalcode
  }

  transformObj() {
    return {
      'member_number' : this.member_number,
      'type' : this.type,
      'join_date' : this.join_date,
      'sub_due_month' : this.sub_due_month,
      'first_name' : this.first_name,
      'last_name' : this.last_name,
      'sex' : this.sex,
      'dob' : this.dob,
      'address01' : this.address01,
      'address02' : this.address02,
      'address03' : this.address03,
      'postalcode' : this.postalcode
    };
  }


}

module.exports = Member