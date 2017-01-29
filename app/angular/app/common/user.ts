
interface userSchema {
	loginId?: string;
	encryptedId?: string;
}

export class user implements userSchema {
	loginId: string;
	encryptedId: string;

	constructor(args: userSchema) {
		this.loginId = args.loginId;
		this.encryptedId = args.encryptedId;
	}

	getEncryptedId() {
		return this.encryptedId;
	}
}