const fs = require('fs')
const jsf = require('jsonfile')


class JsonFileManager {

	constructor() {

		this.filename = 'members.json'

		if (!fs.existsSync(this.filename)) {
		  jsf.writeFileSync(this.filename, [])
		}
	}

	saveMember(member)
	{
		var members = this.getMembers()
		members.push(member.transformObj())
		jsf.writeFileSync(this.filename, members)
	}

	getMember()
	{

	}

	getMembers()
	{
		return jsf.readFileSync(filename)
	}

	getMembersPaginate(members_per_page)
	{

	}
}

module.exports = JsonFileManager