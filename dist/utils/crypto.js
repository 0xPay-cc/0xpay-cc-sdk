"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_ITERATION = exports.DEFAULT_KEY_LENGTH = exports.generateEvmPrivateKey = void 0;
const crypto = __importStar(require("crypto"));
const wallet_1 = require("../models/wallet");
// Default values for key derivation parameters
const DEFAULT_KEY_LENGTH = 32; // The desired byte length of the derived key
exports.DEFAULT_KEY_LENGTH = DEFAULT_KEY_LENGTH;
const DEFAULT_ITERATION = 100000; // The number of iterations to use in the PBKDF2 function
exports.DEFAULT_ITERATION = DEFAULT_ITERATION;
/**
 * Generates a SHA-256 hash of the given identity.
 *
 * @param identity The unique identifier for the user.
 * @returns A hexadecimal string representing the hashed identity.
 */
function hashTheIdentity(identity) {
    const hash = crypto.createHash(`sha256`).update(identity).digest(`hex`);
    return hash;
}
/**
 * Generates a derived key using PBKDF2 from a hash, password, and optional parameters.
 *
 * @param _hash The hashed identity to be used as the PBKDF2 salt.
 * @param _password The password used in the key derivation process.
 * @param _iterations The number of iterations for PBKDF2, defaulting to 100,000.
 * @param _keyLength The desired length of the derived key, defaulting to 32 bytes.
 * @param _digest The hash function to use with PBKDF2.
 * @returns A buffer containing the derived key.
 */
function generateDerivedKey(_hash, _password, _iterations = DEFAULT_ITERATION, _keyLength = DEFAULT_KEY_LENGTH, _digest) {
    return crypto.pbkdf2Sync(_hash, _password, _iterations, _keyLength, _digest);
}
/**
 * Generates an Ethereum private key from a user's identity and password.
 *
 * @param _identity The user's unique identity.
 * @param _password The password to secure the derived key.
 * @param _iterations Number of iterations for key derivation, defaults to 100,000.
 * @param _keyLength Length of the derived key, defaults to 32 bytes.
 * @returns A hexadecimal string of the Ethereum private key.
 */
function generateEvmPrivateKey(_identity, _password, _iterations = DEFAULT_ITERATION, _keyLength = DEFAULT_KEY_LENGTH) {
    const hash = hashTheIdentity(_identity);
    const derivedKey = generateDerivedKey(hash, _password, _iterations, _keyLength, wallet_1.HashFunction.SHA256);
    return derivedKey.toString("hex");
}
exports.generateEvmPrivateKey = generateEvmPrivateKey;
