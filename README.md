<h1 align="center">Multi-Blockchain Wallet SDK Documentation</h1>

<p align="center">Welcome to the Multi-Blockchain Wallet SDK, an innovative and versatile open-source tool designed for developers across a variety of blockchain platforms. This SDK simplifies the creation of wallets, integration of cryptocurrency payments, and the management of crypto assets by leveraging user-specific information, such as IDs or emails, to generate unique public addresses. With exclusive access to private keys through encrypted passwords, developers can ensure the security of the wallets while enabling real-time monitoring of wallet activities via WebSockets. Currently, the SDK offers support for Ethereum, Solana, and Tron, with plans to expand to additional blockchains.</p>

---

## 🌐 Features

- **Wallet Generation**: Securely generate private keys and public addresses using a user's unique identifier and a developer-defined password.
- **Blockchain Support**:
  - Ethereum, BSC, Polygon, Avalanche,Optimism, Arbitrum,HECO,Harmony,Fantom✅
  - Solana ✅
  - Tron ✅
  - Bitcoin ✅
- **Real-Time Monitoring**: Coming Soon.

## 🛠 Getting Started

To begin using the SDK, follow these steps:

**Installation**:
`npm install 0xpay-cc-sdk`

## Generating key pair from identifier and a defined password

The core functionality of our SDK revolves around the generation of wallet keys for different blockchains. Here's a guide to getting started with each supported blockchain:

### Ethereum

- **Function:** `generateEvmPrivateKeyForUserIdentity`
- **Description:** Dynamically generates an Ethereum key pair (private and public keys) using a user's identifier and a developer-defined password. This method allows developers to securely manage wallet access while providing the necessary wallet functionalities to users.
- **Parameters:**
  - `identifier` (string): A unique identifier for the user, such as email or username.
  - `password` (string): A developer-defined password used in the key generation process.
  - `iterations` (number, optional): The number of iterations for the PBKDF2 key derivation function, defaults to 100,000.
  - `keyLength` (number, optional): The desired length of the derived key in bytes, defaults to 32.
- **Returns:** An `EthereumKeyPair` object containing the Ethereum address, private key, and both compressed and uncompressed public keys.

### Solana

- **Function:** `generateSolanaPrivateKeyForUserIdentity`
- **Description:** Generates a Solana key pair from a user's identifier and a password. It produces a private key which is then used to create a keypair, making the public key available to the user.
- **Parameters:**
  - `identifier` (string): The user's unique identifier.
  - `password` (string): The password combined with the identifier to generate the key.
  - `iterations` (number, optional): Number of iterations for PBKDF2, optional.
  - `keyLength` (number, optional): Desired key length, optional.
- **Returns:** A `SolanaKeyPair` object containing the private and public keys.

### Tron

- **Function:** `generateTronPrivateKeyForUserIdentity`
- **Description:** Similar to the Ethereum and Solana functions, this function generates a Tron key pair using the user's identifier and a password. It is designed to secure wallet creation and management by providing only the public key to the user.
- **Parameters:**
  - `identifier` (string): The user's unique identifier.
  - `password` (string): The password combined with the identifier to generate the key.
  - `iterations` (number, optional): Number of iterations for PBKDF2, optional.
  - `keyLength` (number, optional): Desired key length, optional.
- **Returns:** A `TronKeyPair` object including the private key and public key (address).

### Bitcoin

- **Function:** `generateBitcoinPrivateKeyForUserIdentity`
- **Description:** Generates a Bitcoin key pair from a user's identifier and a password. It produces a private key which is then used to create a keypair, making the public key available to the user.
- **Parameters:**
  - `identifier` (string): The user's unique identifier.
  - `password` (string): The password combined with the identifier to generate the key.
  - `iterations` (number, optional): Number of iterations for PBKDF2, optional.
  - `keyLength` (number, optional): Desired key length, optional.
- **Returns:** A `BitcoinKeyPair` object containing the private, private WIF and public keys.
