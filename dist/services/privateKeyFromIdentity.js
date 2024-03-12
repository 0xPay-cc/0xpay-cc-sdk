"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateEvmPrivateKeyForUserIdentity = void 0;
const ethers_1 = require("ethers");
const crypto_1 = require("../utils/crypto");
/**
 * Dynamically generates an Ethereum wallet using a user's identifier and a predefined password.
 * This method is designed for developers to maintain control over the wallet's private key,
 * allowing for wallet regeneration using the same identifier and password. The user is only
 * provided with their Ethereum address, enhancing security by limiting their exposure to
 * sensitive key information. This approach ensures that the developer can manage wallet
 * access and security, while still providing necessary wallet functionalities to the user.
 *
 * @param _indentifier A unique identifier for the user, such as username or user ID, used in
 *                     conjunction with the password to generate the wallet's private key.
 * @param _password The developer-defined password used in the key derivation process to ensure
 *                  controlled access to the wallet's private key.

 * @param _iterations The number of iterations for PBKDF2, defaulting to 100,000.
 * @param _keyLength The desired length of the derived key, defaulting to 32 bytes.
 *
 *
 * @returns An object containing the Ethereum address, private key, and both compressed and
 *          uncompressed public keys, allowing the developer to securely manage the wallet.
 */
function generateEvmPrivateKeyForUserIdentity(_indentifier, _password, _iterations = crypto_1.DEFAULT_ITERATION, _keyLength = crypto_1.DEFAULT_KEY_LENGTH) {
    // Generate a private key from the user identifier and password
    const derivedKey = (0, crypto_1.generateEvmPrivateKey)(_indentifier, _password, _iterations, _keyLength);
    const privateKey = `0x${derivedKey}`;
    // Create a new Ethereum wallet with the derived private key and extract its address
    const address = new ethers_1.ethers.Wallet(privateKey).address;
    // Instantiate a SigningKey object with the private key to obtain both
    // compressed and uncompressed public keys
    const compressedPublicKey = new ethers_1.ethers.SigningKey(privateKey)
        .compressedPublicKey;
    const publicKey = new ethers_1.ethers.SigningKey(privateKey).publicKey;
    const EvmPrivateKey = {
        privateKey: privateKey,
        address: address,
        compressedPublicKey: compressedPublicKey,
        uncompressedPublicKey: publicKey,
    };
    console.log(EvmPrivateKey);
    return EvmPrivateKey;
}
exports.generateEvmPrivateKeyForUserIdentity = generateEvmPrivateKeyForUserIdentity;
