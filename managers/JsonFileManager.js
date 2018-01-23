const jsf = require('jsonfile')


class JsonFileManager {

	constructor() {

		var filename = 'members.json'

		if (!fs.existsSync(filename)) {
		  jsf.writeFileSync(filename, [])
		}
	}

	saveMember(member)
	{
		var members = this.getMembers()
		members.push(member.transformObj())
		jsf.writeFileSync(filename, members)
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