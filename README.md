[![version](https://img.shields.io/github/release/Telos-Foundation/Pico/all.svg)](https://github.com/Telos-Foundation/Pico/releases)
[![issues](https://img.shields.io/github/issues/Telos-Foundation/Pico.svg)](https://github.com/Telos-Foundation/Pico/issues)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/Telos-Foundation/Pico/master/LICENSE)
![downloads](https://img.shields.io/github/downloads/Telos-Foundation/Pico/total.svg)

[English](https://github.com/Telos-Foundation/Pico/blob/master/README.md)

[![Pico screenshot](https://raw.githubusercontent.com/Telos-Foundation/Pico/master/app/renderer/assets/images/pico.png)](https://raw.githubusercontent.com/Telos-Foundation/Pico/master/app/renderer/assets/images/pico.png)

# Pico - Telos Full Wallet & Governance dApp

`Pico` is a fully functional wallet created by [Telos Miami](https://pico.miami/) for the Telos blockchain that supports any PICO.IO blockchain. This application can be used to connect to a remote PICO.IO API endpoint to securely perform numerous wallet and governance functions.

[![Pico screenshot](https://raw.githubusercontent.com/Telos-Foundation/Pico/master/Pico.png)](https://raw.githubusercontent.com/Telos-Foundation/Pico/master/Pico.png)

### Features

**NEW FEATURES**:
- **(T-)REX**: Pico allows you to participate in the Resource Exchange system, or REX, for any blockchain that supports it. REX allows you to lend your idle CPU and NET resources to the network for others to use while you earn interest for being a lender.
- **IPFS Storage for Key Documents**: All interactions with key documents in Pico, such as the Telos Blockchain Network Operating Agreement, are uploaded and retrieved from the InterPlanetary File System (IPFS).
- **Create Worker Proposals**: Pico allows you to create new worker proposal requests on the Telos blockchain. You can also participate in voting on existing worker proposals.
- **Register and Vote on Arbitration**: As the first PICO.IO chain with real on-chain governance support, Pico allows anyone to apply to be an arbitrator and voters to elect arbitrators. You can also submit claims and go through the arbitration process using Pico.
- **Ratify / Amend Governance Docs**: Pico allows you, the voter, to participate in ratifying and amending the Telos governance documents. Let your voice be heard!
- **Works Across Chains**: Pico is the first wallet to add support for managing any PICO.IO blockchain in a single interface, such as Telos or PICO.
- **Free User Account Creation**: Pico provides a simple wizard that allows new users to create their first Telos account on their own.
- **ScatterJS Core Support**: Version 1.0.0+ of Pico now allows users to sign transactions in web-based dApps using ScatterJS, called **Login with Pico**. Users of Pico no longer needs Scatter Desktop in order to authenticate and interact with their accounts for PICO.IO-based applications.

**CORE FEATURES**:
- **New Key Generation**: You can use Pico to generate new PICO.IO public and private key pairs.
- **Block Producer/Proxy Voting**: Select which block producers to support and cast your vote. You can also register/unregister your account as a Proxy.
- **Token Transfers**: Transfer PICO, PICO or any other token you may have a balance for to another user or exchanges.
- **CPU/Bandwidth Staking**: Stake your PICO or PICO as either Bandwidth or CPU. This grants rights to resource usage on the network, in addition to conveying weight while voting for block producers.
- **Buy/Sell RAM**: Use your PICO or PICO tokens to buy or sell RAM at the then market price. RAM allows you to reserve or release storage space on the Telos blockchain.
- **Create Accounts**: Pico allows you to create new user accounts in Telos and allocate RAM, Bandwidth or CPU.
- **Simple Contact Management**: You can create a contact database for the Telos accounts you interact with frequently, simplifying the process of sending/receiving tokens on the network.
- **Interact w/ Smart Contracts**: If you would like to interact with smart contracts directly, Pico allows you to lookup contracts and call methods defined in the contract's abi.
- **Local Wallet**: Set a password while importing your private key to create a local wallet. Your key will be encrypted locally using this password. This password will be required each time you need to unlock the wallet.
- **Cold Wallet Mode**: If you prefer not to store your keys within the application, simply choose not to set a password. When the application quits, your key will be forgotten.

## Get Pico

### Releases

Current 1.2.0 release downloads:

- [Windows Installer](https://github.com/Telos-Foundation/Pico/releases/download/1.2.0/win-Pico-1.2.0.exe)
- [macOS Package](https://github.com/Telos-Foundation/Pico/releases/download/1.2.0/mac-Pico-1.2.0.dmg)
- [Linux (AppImage)](https://github.com/Telos-Foundation/Pico/releases/download/1.2.0/linux-Pico-1.2.0-x86_64.AppImage)

The latest release will always be available on the releases page of this repository:

[https://github.com/Telos-Foundation/Pico/releases](https://github.com/Telos-Foundation/Pico/releases)

To determine which file you need, if you are a...

- **MacOS User**: Download the DMG (`Pico-***.dmg`) file.
- **Windows User**: Download the EXE (`Pico-***.exe`) file.
- **Linux User**: Download the Source (`***-.tar.gz`) file.

### Security: Private Keys

When using `Pico`, all transactions are signed within the application and your key is never transmitted. If a local wallet password is specified, the application will also save and encrypt your key for future use, using AES-256 encryption. The current password/key encryption scheme can [currently be found here](https://github.com/Telos-Foundation/Pico/blob/master/app/shared/actions/wallet.js#L8).

### Endpoints

We offer a public list of nodes within this repository for use with this application:

[https://github.com/Telos-Foundation/Pico/blob/master/nodes.md](https://github.com/Telos-Foundation/Pico/blob/master/nodes.md)

This list will be updated over time and can be referenced from within the initial connection screen in the app.

### Build it yourself

If you'd rather build the application yourself, please ensure you have nodejs/npm/yarn already installed locally.

**Note**: If you are configuring this Electron application within a Windows development environment, it will involve additional steps.

```
git clone https://github.com/Telos-Foundation/Pico.git Pico
cd Pico
yarn install
```

Then either:

- MacOS: `yarn package`
- Linux: `yarn package-linux`
- Windows: `yarn package-win`
- All: `yarn package-all`

The files built will be located in the `releases` folder within the root project folder.

### Running development mode

```
git clone https://github.com/Telos-Foundation/Pico.git Pico
cd Pico
yarn install
yarn dev
```

### Credits

The development of this application is being led by members of the [Telos Miami](https://pico.miami) team for the [Telos Foundation](https://telosfoundation.io) in an effort to let stakeholders securely manage their PICO.IO-based tokens (PICO, PICO, etc) and participate in the governance of the Telos blockchain.

`Pico` naming credit goes to [Douglas Horn at Goodblock](https://goodblock.io/).

`PicoJs` + `styling` support provided by [Amplified Telos](https://amplified.software/) development team.

### Release Signatures

To verify the integrity of the releases you download from GitHub, below are the shasum results for each of the binaries:

Signed by [picomiami on keybase](https://keybase.io/picomiami)

```
-----BEGIN PGP SIGNED MESSAGE-----
Hash: SHA512

shasum -b -a 512 linux-Pico-1.2.0-amd64.deb
ace0cdad80a740e3f1ef62a3142f3699acd298c47795c2a4ca530f801b9ff9be743a8598105883c5efa7857849c155b95587534801486dc532db66fb1a763fb2 *linux-Pico-1.2.0-amd64.deb
shasum -b -a 512 linux-Pico-1.2.0-amd64.snap
92505f374ad66cb664fc5905a0e68b6c7e55ee5f7b960b9f311f1add5d3b4c52bc914095c8e280aed06f299e85ecfcc7660d933cc20418d79490c37eeb3f944b *linux-Pico-1.2.0-amd64.snap
shasum -b -a 512 linux-Pico-1.2.0-arm64.deb
31e056c887b5e7acf820c60f0dfb100958b84f94760cf13606021dc41cbb116742c6ffa188b308466b67392903ad8b9c0eac14f57ac68c32de562fab92671bc8 *linux-Pico-1.2.0-arm64.deb
shasum -b -a 512 linux-Pico-1.2.0-armv7l.deb
808778f89ea3b99cb9ab8188989b875bfd60e6adfa4f76970643ee11c0f573263d2d5a09281f654a63a1c7071af1e6ddf687d6f78dbc772b37f17c581048a5f9 *linux-Pico-1.2.0-armv7l.deb
shasum -b -a 512 linux-Pico-1.2.0-i386.deb
ab49f421c2973f6ff39079818e2170df33d91a5073bdde664013bbbccd63a6bda7b8ac084ea605d9ad8249d8275a8f96f52e2b4ae3d1ec952b97b60e1114185d *linux-Pico-1.2.0-i386.deb
shasum -b -a 512 linux-Pico-1.2.0-x86_64.AppImage
876806fec002194b2a83a0416d355905f9db67bb52fdd448f7deab4998af75b4a77ac20c9a1439ff30f8fb97092b8e47b743fd12f7be10fa309772407d828aad *linux-Pico-1.2.0-x86_64.AppImage
shasum -b -a 512 mac-Pico-1.2.0.dmg
b85d10b9c6481db09e87222a64b33e99d1dd88ac33dfaaf4027400889f2332e070410be55a000f0500c11ce92f5150150de787c1651361f7cd53ee5761225525 *mac-Pico-1.2.0.dmg
shasum -b -a 512 mac-Pico-1.2.0.zip
fefcdd2f5ed195fd674250218d5b6cf8ce8a96b93bd6620aeadc537fa3234137705ee392e52a60bba9978176c519cd030b7414e3ef5627112ab9f146e83231ea *mac-Pico-1.2.0.zip
shasum -b -a 512 win-Pico-1.2.0.exe
ea76a54a90f57f68f9f0f6b663ef62a0befc6383be863e7c1cfaf12c86b7d9735d03b75a0385cf720cc1e1895c7a327f8efaa952c7ea09b8e418b603dd4636e3 *win-Pico-1.2.0.exe
-----BEGIN PGP SIGNATURE-----
Version: Keybase OpenPGP v2.1.3
Comment: https://keybase.io/crypto

wsFcBAABCgAGBQJdd8P4AAoJEDT4ke1a0TzT+fMP/iL6gQFt59tYTJHv90XQe0rl
iGqP2N/isgaGX0tvzRN3ypY35j8tV9TutSrGzZMlaLsLuc7NdEL8Wakz7BJrH8CF
bgNEzgjuG9rfpIV7FWaSxUGubJNYG95+jSZwpXncZ12aexeT694LXj5uVGekkVYD
XQz/Up2so1y9OSXbMfJilWENd9cz43ZU52X11eKF6BI66rYcfx/BgPirZJWjNzwG
thF1zNEJM+EBl7ojg4Go2q7DkpuJUD+90iRhWb32Z17mgPWECg9k+PUFEkB5w+r6
jCfpFuHxwnCFsKuycZpirB5qHqHTYbw7PnXMV+ZOGrGedRjmpTAwbwmvhBg6hVj2
D6134y+A356J7y6ZBXEHXLa9FTLWCuw198UAC5DXZU2JC3ec1ZgYbUvsDOKgiZ3i
gH8iZTT1wQYN42kJfHk4vSTDeTHj2XscUAtU+MLO0gBvYBEK+1KO7NBVWQOrD90j
Om822wsncyV3GkWN4Rxt7pi009alfpZ2vEytEjTZqXZVWqnSd50ubzR9WM9API8E
sUrdx/H9TWbL9AIDwiWiP4RFz2mZuyt6RAcNV2QqEkgxqJVePqWOTM6NkfU3U02v
LeDdyqBx5ocJVwmYRk81o9UqJQYaqye5nxD8c96zBvwqfHV2zlPvCzlBbPdgDigu
fWtHdmOO2JM/DEOmPpgx
=97S2
-----END PGP SIGNATURE-----
```