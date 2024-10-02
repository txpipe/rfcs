# Summary

A Rust library encapsulating logic and data structures to deal with Cardano addresss of any type.

# Motivation

Addresses in Cardano are complex. There're multiple formats and combination of options. At the same time, usage of these primitives is ubiquotus in almost every tool / project that requires to interact with the Cardano blockchain. Having a small but comprehensive Rust library to deal with Addresses can allow downstream tools (Oura, Scrolls, etc) to avoid re-inventing the wheel.

# Detailed design
A new crate `pallas-addresses` will be created and re-exported by Pallas entry point as `pallas::ledger::addresses`. This module will focus exclusively on address manipulation as defined in [CIP-19](https://cips.cardano.org/cips/cip19/).

The scope of the library will include:

- Header and payload binary data parsing.
- Byron, Shelly, stake address decoding / encoding into Rust structures.
- Bech32 encoding / decoding.
- API surface providing access to inner data: pointers, network, etc

The API surface will resemble the following:

```rust
// parse a bech32 string into a decoded struct
let addr = Address::from_bech32("addr1w8phkx6acpnf78fuvxn0mkew3l0fd058hzquvz7w36x4gtcyjy7wx");

// check the network of the address (mainnet, testnet, other)
addr.network()

// check if any part of the address points to a script
addr.has_script();

// check if the address is an enterprise type address
addr.is_enterprise()

// get the type id for this address
addr.typeid();

// get the HRP of the bech32 for this address
addr.hrp();

// Address is an enum with variants for each address type
match addr {
	// do shelley specific stuff
	Address::Shelley(shelley) => {
		// get the payment fragment of the address
		x.payment();
		// get the delegation part of the address
		x.delegation();
	}
	// do stake specificy stuff
	Address::Stake(stake) => {
		// get the payload of the address
		x.payload();
	}
	// do byron specific stuff
	Address::Byron(_) => {
		println!(byron.to_vec());
	}
}

// get the binary representation of the address
addr.to_vec();

// encode back to bech32 string
addr.to_bech32();
```

Some architectural definitions:
- This crate will function as a higher level of the `pallas-primitives` crate.

# Drawbacks
- adding a new crate increases the required maintenance effort
- more coupling between Pallas and downstream tools

# Alternatives
- each tools implements it's own decoding logic.
- we consume a 3rd party lib that already has this functionality

# Unresolved questions
- should we parse the CBOR content of Byron address? Is there a short-term use-case for this?
- how do we integrate this with the traverse library?