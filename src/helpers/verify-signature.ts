import * as bitcoinMessage from "bitcoinjs-message";

const verifySignature = (address: string, signature: string, message: string) => {
	try {
		return bitcoinMessage.verify(message, address, signature);
	} catch (error) {
		return false;
	}
};

export default verifySignature;
