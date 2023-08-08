"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[9736],{66142:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>v,contentTitle:()=>h,default:()=>x,frontMatter:()=>b,metadata:()=>k,toc:()=>y});var t=a(87462),r=a(67294),s=a(3905),c=a(18947);const i=()=>r.createElement(c.oT,{files:{"Cargo.toml":o,"Cargo.lock":l,"src/lib.rs":d,"src/error.rs":u,"src/msgs.rs":g,"src/query.rs":p,"src/state.rs":f,"src/execute.rs":m},customSetup:{entry:"src/lib.rs"},options:{visibleFiles:["src/lib.rs","src/error.rs","src/msgs.rs","src/query.rs","src/state.rs","src/execute.rs","/Cargo.toml","/Cargo.lock"]}},r.createElement(c.sp,null,r.createElement(c.Lj,{autoHiddenFiles:!0}),r.createElement(c._V,{showLineNumbers:!0}))),o='[package]\nname = "game-data-save"\nversion = "0.0.1"\nauthors = ["Your Name <your@email.com>"]\nedition = "2018"\ndescription = "XPLA Contract Example"\nlicense = "Apache-2.0"\nrepository = ""\n\n[lib]\ncrate-type = ["cdylib", "rlib"]\n\n[dependencies]\ncw0 = { version = "0.10.3" }\ncw20 = { version = "0.13.4" }\ncw-storage-plus = { version = "0.13.4" }\ncosmwasm-std = { version = "1.0.0" }\nschemars = "0.8.1"\nserde = { version = "1.0.103", default-features = false, features = ["derive"] }\nthiserror = { version = "1.0.23" }\n\n[package.metadata.scripts]\noptimize = """docker run --rm -v %cd%:/code --mount type=volume,source=game-data-save_cache,target=/code/target --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry cosmwasm/rust-optimizer:0.12.6"""',d="mod state;\nmod execute;\nmod msgs;\nmod error;\nmod query;\n\npub use crate::msgs::{InstantiateMsg, ExecuteMsg, QueryMsg};\npub use crate::state::GameDataSaveContract;\npub use crate::error::ContractError;\n\n#[cfg(not(feature = \"library\"))]\npub mod entry {\n  use super::*;\n\n  use cosmwasm_std::entry_point;\n  use cosmwasm_std::{Binary, Deps, DepsMut, Env, MessageInfo, Response, StdResult};\n\n  #[entry_point]\n  pub fn instantiate(\n      deps: DepsMut,\n      env: Env,\n      info: MessageInfo,\n      msg: InstantiateMsg,\n  ) -> StdResult<Response> {\n      let tract: GameDataSaveContract<'_> = GameDataSaveContract::default();\n      tract.instantiate(deps, env, info, msg)\n  }\n\n  #[entry_point]\n  pub fn execute(\n      deps: DepsMut,\n      env: Env,\n      info: MessageInfo,\n      msg: ExecuteMsg,\n  ) -> Result<Response, ContractError> {\n      let tract: GameDataSaveContract<'_> = GameDataSaveContract::default();\n      tract.execute(deps, env, info, msg)\n  }\n\n  #[entry_point]\n  pub fn query(deps: Deps, env: Env, msg: QueryMsg) -> StdResult<Binary> {\n      let tract: GameDataSaveContract<'_> = GameDataSaveContract::default();\n      tract.query(deps, env, msg)\n  }\n\n}\n",u='use cosmwasm_std::StdError;\nuse thiserror::Error;\n\n#[derive(Error, Debug, PartialEq)]\npub enum ContractError {\n  #[error("{0}")]\n  Std(#[from] StdError),\n\n  #[error("Unauthorized")]\n  Unauthorized {},\n  \n}',m='use cosmwasm_std::{DepsMut, Env, MessageInfo, Response, StdResult};\n\nuse crate::state::{Config, GameDataSaveContract, GameData};\nuse crate::msgs::{InstantiateMsg, ExecuteMsg};\nuse crate::error::ContractError;\n\nimpl<\'a> GameDataSaveContract<\'a> {\n  pub fn instantiate(\n    &self,\n    deps: DepsMut,\n    _env: Env,\n    _info: MessageInfo,\n    msg: InstantiateMsg,\n  ) -> StdResult<Response> {\n    let config = Config {\n      owner: deps.api.addr_validate(&msg.owner)?,\n      owner_candidate: deps.api.addr_validate(&msg.owner)?,\n      description: msg.description,\n    };\n\n    self.config.save(deps.storage, &config)?;\n\n    Ok(Response::new())\n  }\n\n  pub fn execute(\n    &self,\n    deps: DepsMut,\n    env: Env,\n    info: MessageInfo,\n    msg: ExecuteMsg\n  ) -> Result<Response, ContractError> {\n    match msg{\n      ExecuteMsg::SaveData { \n        user, \n        last_stage,\n        high_score, \n        game_gold \n      } => self.save_data(deps, env, info, user, last_stage, high_score, game_gold),\n\n      ExecuteMsg::UpdateConfig { \n        owner_candidate,\n        description,\n      } => self.update_config(deps, env, info, owner_candidate, description),\n\n      ExecuteMsg::AllowOwner {\n\n      } => self.allow_owner(deps, env, info),\n    }\n  }\n}\n\n// execute functions\nimpl<\'a> GameDataSaveContract<\'a> {\n\n  pub fn save_data(\n    &self,\n    deps: DepsMut,\n    _env: Env,\n    info: MessageInfo,\n    user: String,\n    last_stage: Option<u64>,\n    high_score: Option<u64>,\n    game_gold: Option<u64>,\n  ) -> Result<Response, ContractError> {\n    let config: Config = self.config.load(deps.storage)?;\n    \n    if info.sender != config.owner {\n      return Err(ContractError::Unauthorized {})\n    }\n\n    self.game_data.update(deps.storage, user.clone(), |res| -> StdResult<GameData> { \n      let mut data = res.unwrap_or_default();\n      if let Some(ls) = last_stage {\n        if ls > data.last_stage {\n          data.last_stage = ls;\n        }\n      }\n      if let Some(hs) = high_score {\n        if hs > data.high_score {\n          data.high_score = hs;\n        }\n      }\n      if let Some(gg) = game_gold {\n        data.game_gold += gg;\n      }\n      Ok(data)\n    })?;\n\n\n    Ok(Response::new()\n          .add_attribute("action", "save_data")\n          .add_attribute("user", user))\n\n  }\n\n  pub fn update_config(\n    &self,\n    deps: DepsMut,\n    _env: Env,\n    info: MessageInfo,\n    owner_candidate: Option<String>,\n    description: Option<String>,\n  ) -> Result<Response, ContractError> {\n    let mut config: Config = self.config.load(deps.storage)?;\n    \n    if info.sender != config.owner {\n      return Err(ContractError::Unauthorized {})\n    }\n\n    if let Some(candidate) = owner_candidate {\n      let new_owner_candidate = deps.api.addr_validate(&candidate)?;\n      config.owner_candidate = new_owner_candidate;\n      self.config.save(deps.storage, &config)?;\n    }\n\n    if let Some(descript) = description {\n      config.description = descript;\n    }\n\n    self.config.save(deps.storage, &config)?;\n\n    Ok(Response::new().add_attribute("action", "update_config"))\n  }\n\n  pub fn allow_owner(\n    &self,\n    deps: DepsMut,\n    _env: Env,\n    info: MessageInfo,\n  ) -> Result<Response, ContractError> {\n\n    let mut config = self.config.load(deps.storage)?;\n    // only owner_candidate can execute\n    if info.sender != config.owner_candidate {\n      return Err(ContractError::Unauthorized{})\n    }\n\n    config.owner = config.owner_candidate.clone();\n    config.owner_candidate = config.owner_candidate.clone();\n    self.config.save(deps.storage, &config)?;\n\n    Ok(Response::new()\n      .add_attribute("action", "allow_owner")\n      .add_attribute("new owner", info.sender)\n    )\n  }\n  \n}\n',g='\nuse schemars::JsonSchema;\nuse serde::{Deserialize, Serialize};\n\n\n#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]\npub struct InstantiateMsg {\n  pub owner: String,\n  pub description: String,\n}\n\n#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]\n#[serde(rename_all = "snake_case")]\npub enum ExecuteMsg {\n\n  SaveData {\n    user: String,\n    last_stage: Option<u64>,\n    high_score: Option<u64>,\n    game_gold: Option<u64>,\n  },\n  \n  UpdateConfig {\n    owner_candidate: Option<String>,\n    description: Option<String>,\n  },\n\n  AllowOwner {},\n\n}\n\n#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]\n#[serde(rename_all = "snake_case")]\npub enum QueryMsg {\n  Config {},\n\n  GameData {\n    user: String,\n  }\n}\n',p="use cosmwasm_std::{to_binary, Binary, Deps, StdResult, Env};\nuse crate::state::{GameDataSaveContract, Config, GameData};\nuse crate::msgs::QueryMsg;\n\nimpl<'a> GameDataSaveContract<'a> {\n  pub fn query(&self, deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {\n    match msg {\n      QueryMsg::Config {} => to_binary(&self.config(deps)?),\n      QueryMsg::GameData { user } => to_binary(&self.game_data(deps, user)?)\n    }\n  }\n}\n\n\nimpl<'a> GameDataSaveContract<'a> {\n\n  fn config(\n    &self, \n    deps: Deps,\n  ) -> StdResult<Config> {\n    self.config.load(deps.storage)\n  }\n\n  fn game_data(\n    &self, \n    deps: Deps,\n    user: String,\n  ) -> StdResult<GameData> {\n    let data = self.game_data.may_load(deps.storage, user)?;\n    if let Some(user_data) = data {\n      return Ok(user_data)\n    } else {\n      return Ok(GameData{\n        last_stage: 0,\n        high_score: 0,\n        game_gold: 0,\n      })\n    }\n  }\n\n}\n",f="use schemars::JsonSchema;\nuse serde::{Deserialize, Serialize};\nuse cosmwasm_std::Addr;\nuse cw_storage_plus::{Item, Map};\n\n#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]\npub struct Config {\n  pub owner: Addr,\n  pub owner_candidate: Addr,\n  pub description: String,\n}\n\n#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug, Default)]\npub struct GameData {\n  pub last_stage: u64,\n  pub high_score: u64,\n  pub game_gold: u64,\n}\n\n\npub struct GameDataSaveContract<'a> {\n  pub config: Item<'a, Config>,\n  pub game_data: Map<'a, String, GameData>,\n}\n\nimpl Default for GameDataSaveContract<'static> {\n  fn default() -> Self {\n    Self::new(\n      \"config\",\n      \"game_data\",\n    )\n  }\n}\n\nimpl<'a> GameDataSaveContract<'a> {\n  fn new(\n    config_key: &'a str,\n    game_data_key: &'a str,\n  ) -> Self {\n\n    Self {\n      config: Item::new(config_key),\n      game_data: Map::new(game_data_key),\n    }\n  }\n}\n\n",l='# This file is automatically @generated by Cargo.\n# It is not intended for manual editing.\nversion = 3\n\n[[package]]\nname = "base16ct"\nversion = "0.1.1"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "349a06037c7bf932dd7e7d1f653678b2038b9ad46a74102f1fc7bd7872678cce"\n\n[[package]]\nname = "base64"\nversion = "0.13.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "904dfeac50f3cdaba28fc6f57fdcddb75f49ed61346676a78c4ffe55877802fd"\n\n[[package]]\nname = "base64ct"\nversion = "1.5.1"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "3bdca834647821e0b13d9539a8634eb62d3501b6b6c2cec1722786ee6671b851"\n\n[[package]]\nname = "block-buffer"\nversion = "0.9.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "4152116fd6e9dadb291ae18fc1ec3575ed6d84c29642d97890f4b4a3417297e4"\ndependencies = [\n "generic-array",\n]\n\n[[package]]\nname = "byteorder"\nversion = "1.4.3"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "14c189c53d098945499cdfa7ecc63567cf3886b3332b312a5b4585d8d3a6a610"\n\n[[package]]\nname = "cfg-if"\nversion = "1.0.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "baf1de4339761588bc0619e3cbc0120ee582ebb74b53b4efbf79117bd2da40fd"\n\n[[package]]\nname = "const-oid"\nversion = "0.7.1"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "e4c78c047431fee22c1a7bb92e00ad095a02a983affe4d8a72e2a2c62c1b94f3"\n\n[[package]]\nname = "cosmwasm-crypto"\nversion = "1.0.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "5eb0afef2325df81aadbf9be1233f522ed8f6e91df870c764bc44cca2b1415bd"\ndependencies = [\n "digest",\n "ed25519-zebra",\n "k256",\n "rand_core 0.6.3",\n "thiserror",\n]\n\n[[package]]\nname = "cosmwasm-derive"\nversion = "1.0.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "4b36e527620a2a3e00e46b6e731ab6c9b68d11069c986f7d7be8eba79ef081a4"\ndependencies = [\n "syn",\n]\n\n[[package]]\nname = "cosmwasm-std"\nversion = "1.0.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "875994993c2082a6fcd406937bf0fca21c349e4a624f3810253a14fa83a3a195"\ndependencies = [\n "base64",\n "cosmwasm-crypto",\n "cosmwasm-derive",\n "forward_ref",\n "schemars",\n "serde",\n "serde-json-wasm",\n "thiserror",\n "uint",\n]\n\n[[package]]\nname = "cpufeatures"\nversion = "0.2.4"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "dc948ebb96241bb40ab73effeb80d9f93afaad49359d159a5e61be51619fe813"\ndependencies = [\n "libc",\n]\n\n[[package]]\nname = "crunchy"\nversion = "0.2.2"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "7a81dae078cea95a014a339291cec439d2f232ebe854a9d672b796c6afafa9b7"\n\n[[package]]\nname = "crypto-bigint"\nversion = "0.3.2"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "03c6a1d5fa1de37e071642dfa44ec552ca5b299adb128fab16138e24b548fd21"\ndependencies = [\n "generic-array",\n "rand_core 0.6.3",\n "subtle",\n "zeroize",\n]\n\n[[package]]\nname = "crypto-mac"\nversion = "0.11.1"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "b1d1a86f49236c215f271d40892d5fc950490551400b02ef360692c29815c714"\ndependencies = [\n "generic-array",\n "subtle",\n]\n\n[[package]]\nname = "curve25519-dalek"\nversion = "3.2.1"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "90f9d052967f590a76e62eb387bd0bbb1b000182c3cefe5364db6b7211651bc0"\ndependencies = [\n "byteorder",\n "digest",\n "rand_core 0.5.1",\n "subtle",\n "zeroize",\n]\n\n[[package]]\nname = "cw-storage-plus"\nversion = "0.13.4"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "648b1507290bbc03a8d88463d7cd9b04b1fa0155e5eef366c4fa052b9caaac7a"\ndependencies = [\n "cosmwasm-std",\n "schemars",\n "serde",\n]\n\n[[package]]\nname = "cw-utils"\nversion = "0.13.4"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "9dbaecb78c8e8abfd6b4258c7f4fbeb5c49a5e45ee4d910d3240ee8e1d714e1b"\ndependencies = [\n "cosmwasm-std",\n "schemars",\n "serde",\n "thiserror",\n]\n\n[[package]]\nname = "cw0"\nversion = "0.10.3"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "8ae676b6cced78a3d38ad4b01ab4ed66fc78ac191c3c0d6bfd5372cb2efd473b"\ndependencies = [\n "cosmwasm-std",\n "schemars",\n "serde",\n "thiserror",\n]\n\n[[package]]\nname = "cw20"\nversion = "0.13.4"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "4cb782b8f110819a4eb5dbbcfed25ffba49ec16bbe32b4ad8da50a5ce68fec05"\ndependencies = [\n "cosmwasm-std",\n "cw-utils",\n "schemars",\n "serde",\n]\n\n[[package]]\nname = "der"\nversion = "0.5.1"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "6919815d73839e7ad218de758883aae3a257ba6759ce7a9992501efbb53d705c"\ndependencies = [\n "const-oid",\n]\n\n[[package]]\nname = "digest"\nversion = "0.9.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "d3dd60d1080a57a05ab032377049e0591415d2b31afd7028356dbf3cc6dcb066"\ndependencies = [\n "generic-array",\n]\n\n[[package]]\nname = "dyn-clone"\nversion = "1.0.9"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "4f94fa09c2aeea5b8839e414b7b841bf429fd25b9c522116ac97ee87856d88b2"\n\n[[package]]\nname = "ecdsa"\nversion = "0.13.4"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "d0d69ae62e0ce582d56380743515fefaf1a8c70cec685d9677636d7e30ae9dc9"\ndependencies = [\n "der",\n "elliptic-curve",\n "rfc6979",\n "signature",\n]\n\n[[package]]\nname = "ed25519-zebra"\nversion = "3.0.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "403ef3e961ab98f0ba902771d29f842058578bb1ce7e3c59dad5a6a93e784c69"\ndependencies = [\n "curve25519-dalek",\n "hex",\n "rand_core 0.6.3",\n "serde",\n "sha2",\n "thiserror",\n "zeroize",\n]\n\n[[package]]\nname = "elliptic-curve"\nversion = "0.11.12"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "25b477563c2bfed38a3b7a60964c49e058b2510ad3f12ba3483fd8f62c2306d6"\ndependencies = [\n "base16ct",\n "crypto-bigint",\n "der",\n "ff",\n "generic-array",\n "group",\n "rand_core 0.6.3",\n "sec1",\n "subtle",\n "zeroize",\n]\n\n[[package]]\nname = "ff"\nversion = "0.11.1"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "131655483be284720a17d74ff97592b8e76576dc25563148601df2d7c9080924"\ndependencies = [\n "rand_core 0.6.3",\n "subtle",\n]\n\n[[package]]\nname = "forward_ref"\nversion = "1.0.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "c8cbd1169bd7b4a0a20d92b9af7a7e0422888bd38a6f5ec29c1fd8c1558a272e"\n\n[[package]]\nname = "game-data-save"\nversion = "0.0.1"\ndependencies = [\n "cosmwasm-std",\n "cw-storage-plus",\n "cw0",\n "cw20",\n "schemars",\n "serde",\n "thiserror",\n]\n\n[[package]]\nname = "generic-array"\nversion = "0.14.6"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "bff49e947297f3312447abdca79f45f4738097cc82b06e72054d2223f601f1b9"\ndependencies = [\n "typenum",\n "version_check",\n]\n\n[[package]]\nname = "getrandom"\nversion = "0.1.16"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "8fc3cb4d91f53b50155bdcfd23f6a4c39ae1969c2ae85982b135750cccaf5fce"\ndependencies = [\n "cfg-if",\n "libc",\n "wasi 0.9.0+wasi-snapshot-preview1",\n]\n\n[[package]]\nname = "getrandom"\nversion = "0.2.7"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "4eb1a864a501629691edf6c15a593b7a51eebaa1e8468e9ddc623de7c9b58ec6"\ndependencies = [\n "cfg-if",\n "libc",\n "wasi 0.11.0+wasi-snapshot-preview1",\n]\n\n[[package]]\nname = "group"\nversion = "0.11.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "bc5ac374b108929de78460075f3dc439fa66df9d8fc77e8f12caa5165fcf0c89"\ndependencies = [\n "ff",\n "rand_core 0.6.3",\n "subtle",\n]\n\n[[package]]\nname = "hex"\nversion = "0.4.3"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "7f24254aa9a54b5c858eaee2f5bccdb46aaf0e486a595ed5fd8f86ba55232a70"\n\n[[package]]\nname = "hmac"\nversion = "0.11.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "2a2a2320eb7ec0ebe8da8f744d7812d9fc4cb4d09344ac01898dbcb6a20ae69b"\ndependencies = [\n "crypto-mac",\n "digest",\n]\n\n[[package]]\nname = "itoa"\nversion = "1.0.3"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "6c8af84674fe1f223a982c933a0ee1086ac4d4052aa0fb8060c12c6ad838e754"\n\n[[package]]\nname = "k256"\nversion = "0.10.4"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "19c3a5e0a0b8450278feda242592512e09f61c72e018b8cd5c859482802daf2d"\ndependencies = [\n "cfg-if",\n "ecdsa",\n "elliptic-curve",\n "sec1",\n "sha2",\n]\n\n[[package]]\nname = "libc"\nversion = "0.2.132"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "8371e4e5341c3a96db127eb2465ac681ced4c433e01dd0e938adbef26ba93ba5"\n\n[[package]]\nname = "opaque-debug"\nversion = "0.3.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "624a8340c38c1b80fd549087862da4ba43e08858af025b236e509b6649fc13d5"\n\n[[package]]\nname = "pkcs8"\nversion = "0.8.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "7cabda3fb821068a9a4fab19a683eac3af12edf0f34b94a8be53c4972b8149d0"\ndependencies = [\n "der",\n "spki",\n "zeroize",\n]\n\n[[package]]\nname = "proc-macro2"\nversion = "1.0.43"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "0a2ca2c61bc9f3d74d2886294ab7b9853abd9c1ad903a3ac7815c58989bb7bab"\ndependencies = [\n "unicode-ident",\n]\n\n[[package]]\nname = "quote"\nversion = "1.0.21"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "bbe448f377a7d6961e30f5955f9b8d106c3f5e449d493ee1b125c1d43c2b5179"\ndependencies = [\n "proc-macro2",\n]\n\n[[package]]\nname = "rand_core"\nversion = "0.5.1"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "90bde5296fc891b0cef12a6d03ddccc162ce7b2aff54160af9338f8d40df6d19"\ndependencies = [\n "getrandom 0.1.16",\n]\n\n[[package]]\nname = "rand_core"\nversion = "0.6.3"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "d34f1408f55294453790c48b2f1ebbb1c5b4b7563eb1f418bcfcfdbb06ebb4e7"\ndependencies = [\n "getrandom 0.2.7",\n]\n\n[[package]]\nname = "rfc6979"\nversion = "0.1.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "96ef608575f6392792f9ecf7890c00086591d29a83910939d430753f7c050525"\ndependencies = [\n "crypto-bigint",\n "hmac",\n "zeroize",\n]\n\n[[package]]\nname = "ryu"\nversion = "1.0.11"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "4501abdff3ae82a1c1b477a17252eb69cee9e66eb915c1abaa4f44d873df9f09"\n\n[[package]]\nname = "schemars"\nversion = "0.8.10"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "1847b767a3d62d95cbf3d8a9f0e421cf57a0d8aa4f411d4b16525afb0284d4ed"\ndependencies = [\n "dyn-clone",\n "schemars_derive",\n "serde",\n "serde_json",\n]\n\n[[package]]\nname = "schemars_derive"\nversion = "0.8.10"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "af4d7e1b012cb3d9129567661a63755ea4b8a7386d339dc945ae187e403c6743"\ndependencies = [\n "proc-macro2",\n "quote",\n "serde_derive_internals",\n "syn",\n]\n\n[[package]]\nname = "sec1"\nversion = "0.2.1"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "08da66b8b0965a5555b6bd6639e68ccba85e1e2506f5fbb089e93f8a04e1a2d1"\ndependencies = [\n "der",\n "generic-array",\n "pkcs8",\n "subtle",\n "zeroize",\n]\n\n[[package]]\nname = "serde"\nversion = "1.0.144"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "0f747710de3dcd43b88c9168773254e809d8ddbdf9653b84e2554ab219f17860"\ndependencies = [\n "serde_derive",\n]\n\n[[package]]\nname = "serde-json-wasm"\nversion = "0.4.1"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "479b4dbc401ca13ee8ce902851b834893251404c4f3c65370a49e047a6be09a5"\ndependencies = [\n "serde",\n]\n\n[[package]]\nname = "serde_derive"\nversion = "1.0.144"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "94ed3a816fb1d101812f83e789f888322c34e291f894f19590dc310963e87a00"\ndependencies = [\n "proc-macro2",\n "quote",\n "syn",\n]\n\n[[package]]\nname = "serde_derive_internals"\nversion = "0.26.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "85bf8229e7920a9f636479437026331ce11aa132b4dde37d121944a44d6e5f3c"\ndependencies = [\n "proc-macro2",\n "quote",\n "syn",\n]\n\n[[package]]\nname = "serde_json"\nversion = "1.0.85"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "e55a28e3aaef9d5ce0506d0a14dbba8054ddc7e499ef522dd8b26859ec9d4a44"\ndependencies = [\n "itoa",\n "ryu",\n "serde",\n]\n\n[[package]]\nname = "sha2"\nversion = "0.9.9"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "4d58a1e1bf39749807d89cf2d98ac2dfa0ff1cb3faa38fbb64dd88ac8013d800"\ndependencies = [\n "block-buffer",\n "cfg-if",\n "cpufeatures",\n "digest",\n "opaque-debug",\n]\n\n[[package]]\nname = "signature"\nversion = "1.4.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "02658e48d89f2bec991f9a78e69cfa4c316f8d6a6c4ec12fae1aeb263d486788"\ndependencies = [\n "digest",\n "rand_core 0.6.3",\n]\n\n[[package]]\nname = "spki"\nversion = "0.5.4"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "44d01ac02a6ccf3e07db148d2be087da624fea0221a16152ed01f0496a6b0a27"\ndependencies = [\n "base64ct",\n "der",\n]\n\n[[package]]\nname = "static_assertions"\nversion = "1.1.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "a2eb9349b6444b326872e140eb1cf5e7c522154d69e7a0ffb0fb81c06b37543f"\n\n[[package]]\nname = "subtle"\nversion = "2.4.1"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "6bdef32e8150c2a081110b42772ffe7d7c9032b606bc226c8260fd97e0976601"\n\n[[package]]\nname = "syn"\nversion = "1.0.99"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "58dbef6ec655055e20b86b15a8cc6d439cca19b667537ac6a1369572d151ab13"\ndependencies = [\n "proc-macro2",\n "quote",\n "unicode-ident",\n]\n\n[[package]]\nname = "thiserror"\nversion = "1.0.32"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "f5f6586b7f764adc0231f4c79be7b920e766bb2f3e51b3661cdb263828f19994"\ndependencies = [\n "thiserror-impl",\n]\n\n[[package]]\nname = "thiserror-impl"\nversion = "1.0.32"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "12bafc5b54507e0149cdf1b145a5d80ab80a90bcd9275df43d4fff68460f6c21"\ndependencies = [\n "proc-macro2",\n "quote",\n "syn",\n]\n\n[[package]]\nname = "typenum"\nversion = "1.15.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "dcf81ac59edc17cc8697ff311e8f5ef2d99fcbd9817b34cec66f90b6c3dfd987"\n\n[[package]]\nname = "uint"\nversion = "0.9.3"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "12f03af7ccf01dd611cc450a0d10dbc9b745770d096473e2faf0ca6e2d66d1e0"\ndependencies = [\n "byteorder",\n "crunchy",\n "hex",\n "static_assertions",\n]\n\n[[package]]\nname = "unicode-ident"\nversion = "1.0.3"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "c4f5b37a154999a8f3f98cc23a628d850e154479cd94decf3414696e12e31aaf"\n\n[[package]]\nname = "version_check"\nversion = "0.9.4"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "49874b5167b65d7193b8aba1567f5c7d93d001cafc34600cee003eda787e483f"\n\n[[package]]\nname = "wasi"\nversion = "0.9.0+wasi-snapshot-preview1"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "cccddf32554fecc6acb585f82a32a72e28b48f8c4c1883ddfeeeaa96f7d8e519"\n\n[[package]]\nname = "wasi"\nversion = "0.11.0+wasi-snapshot-preview1"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "9c8d87e72b64a3b4db28d11ce29237c246188f4f51057d65a7eab63b7987e423"\n\n[[package]]\nname = "zeroize"\nversion = "1.3.0"\nsource = "registry+https://github.com/rust-lang/crates.io-index"\nchecksum = "4756f7db3f7b5574938c3eb1c117038b8e07f95ee6718c0efad4ac21508f1efd"\n',b={sidebar_position:5},h="Cosmwasm \ucee8\ud2b8\ub799\ud2b8 \uc791\uc131 \ubc0f \ube4c\ub4dc\ud558\uae30",k={unversionedId:"tutorial/add-func-to-game-2/write-contract",id:"tutorial/add-func-to-game-2/write-contract",title:"Cosmwasm \ucee8\ud2b8\ub799\ud2b8 \uc791\uc131 \ubc0f \ube4c\ub4dc\ud558\uae30",description:"\uc774\uc804 \uc608\uc81c\uc5d0\uc11c CW20\uacfc CW721 \ucee8\ud2b8\ub799\ud2b8\ub97c Instantiate\ud558\uace0, Execute\uae4c\uc9c0 \uc9c4\ud589\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.",source:"@site/docs/3-tutorial/3-add-func-to-game-2/4-write-contract.mdx",sourceDirName:"3-tutorial/3-add-func-to-game-2",slug:"/tutorial/add-func-to-game-2/write-contract",permalink:"/xpla-academy-dev/docs/tutorial/add-func-to-game-2/write-contract",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Wallet Provider\ub85c React\uc640 XPLA Vault \uc9c0\uac11 \uc5f0\uacb0\ud558\uae30",permalink:"/xpla-academy-dev/docs/tutorial/add-func-to-game-2/walletprovider"}},v={},y=[{value:"\ubaa9\ucc28",id:"index",level:2},{value:"Prerequisite",id:"prerequisite",level:2},{value:"\ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131 \uc21c\uc11c",id:"order-of-storecode",level:2},{value:"\ucf54\ub4dc \uc81c\uacf5 \ubc0f \ube4c\ub4dc",id:"build-contract",level:2},{value:"\ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131\ud558\uace0, \uc0ac\uc6a9\ud558\uae30",id:"use-contract",level:2},{value:"StoreCode",id:"storecode",level:3},{value:"Instantiate",id:"instantiate",level:3},{value:"Execute",id:"execute",level:3},{value:"Query",id:"query",level:3}],w={toc:y},_="wrapper";function x(e){let{components:n,...a}=e;return(0,s.kt)(_,(0,t.Z)({},w,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cosmwasm-\ucee8\ud2b8\ub799\ud2b8-\uc791\uc131-\ubc0f-\ube4c\ub4dc\ud558\uae30"},"Cosmwasm \ucee8\ud2b8\ub799\ud2b8 \uc791\uc131 \ubc0f \ube4c\ub4dc\ud558\uae30"),(0,s.kt)("p",null,"\uc774\uc804 \uc608\uc81c\uc5d0\uc11c ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/make-web3-game/make-cw20-with-vault"},"CW20"),"\uacfc ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/add-func-to-game-1/make-nft-vault"},"CW721")," \ucee8\ud2b8\ub799\ud2b8\ub97c Instantiate\ud558\uace0, Execute\uae4c\uc9c0 \uc9c4\ud589\ud574\ubcf4\uc558\uc2b5\ub2c8\ub2e4.\nCW20\uacfc CW721 \ucee8\ud2b8\ub799\ud2b8\ub294 \ubaa8\ub450 Cosmwasm \ubaa8\ub4c8\uc744 \uc774\uc6a9\ud558\uace0, Rust \uc5b8\uc5b4\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uc2b5\ub2c8\ub2e4.\n\uac01 \ucee8\ud2b8\ub799\ud2b8\uc758 \ucf54\ub4dc\ub294 Github\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub450 \ucee8\ud2b8\ub799\ud2b8\ub294 \ud45c\uc900 \ucee8\ud2b8\ub799\ud2b8\uc774\uae30 \ub54c\ubb38\uc5d0 XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \uc774\ubbf8 \ubc30\ud3ec\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Contract"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Github"),(0,s.kt)("th",{parentName:"tr",align:"center"},"CodeId"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"CW20"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("a",{parentName:"td",href:"https://github.com/xpladev/cw-plus"},"https://github.com/xpladev/cw-plus")),(0,s.kt)("td",{parentName:"tr",align:"center"},"1")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"CW721"),(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("a",{parentName:"td",href:"https://github.com/xpladev/cw-nfts"},"https://github.com/xpladev/cw-nfts")),(0,s.kt)("td",{parentName:"tr",align:"center"},"3")))),(0,s.kt)("p",null,"\ub2e4\uc591\ud55c \uac8c\uc784 \uae30\ub2a5\uc744 \uac1c\ubc1c\ud558\ub824\uba74 \uc9c1\uc811 \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \ud544\uc694\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ubc88 \ub2e8\uacc4\uc5d0\uc11c\ub294 Cosmwasm \ucee8\ud2b8\ub799\ud2b8\ub97c \uc9c1\uc811 Rust \uc5b8\uc5b4\ub85c \uc791\uc131\ud574\ubcf4\uace0, XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \ubc30\ud3ec\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. "),(0,s.kt)("h2",{id:"index"},"\ubaa9\ucc28"),(0,s.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uc808\ucc28\ub85c Cosmwasm \ucee8\ud2b8\ub799\ud2b8 \uc791\uc131\uc744 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/add-func-to-game-2/write-contract#prerequisite"},"Prerequisite"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/add-func-to-game-2/write-contract#order-of-storecode"},"\ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131 \uc21c\uc11c"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/add-func-to-game-2/write-contract#build-contract"},"\ucf54\ub4dc \uc81c\uacf5 \ubc0f \ube4c\ub4dc"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/add-func-to-game-2/write-contract#use-contract"},"\ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131\ud558\uace0, \uc0ac\uc6a9\ud558\uae30")))),(0,s.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,s.kt)("p",null,"Coswmasm \ucee8\ud2b8\ub799\ud2b8\ub294 Rust \uc5b8\uc5b4\ub85c \uc791\uc131\ud569\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \uc6b4\uc601\uccb4\uc81c\uc5d0 \ub9de\uac8c ",(0,s.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/ch01-01-installation.html"},"Rust"),"\ub97c \uc124\uce58\ud574\uc8fc\uc138\uc694. \ub610\ud55c \ube4c\ub4dc\ub97c \uc704\ud574 Docker\ub97c \uc0ac\uc6a9\ud558\ub2c8, ",(0,s.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"),"\ub3c4 \uc124\uce58\ud574\uc8fc\uc138\uc694."),(0,s.kt)("p",null,"\ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc9c1\uc811 \uc791\uc131\ud558\ub824\uba74 Rust \uad00\ub828 \uc9c0\uc2dd\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. Rust \ud559\uc2b5\uc5d0 \ub3c4\uc6c0\uc774 \ub420 \ub9cc\ud55c \ubb38\uc11c\ub97c \uc900\ube44\ud588\uc2b5\ub2c8\ub2e4."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Guide"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Link"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"The Rust Programming Language"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://doc.rust-lang.org/book/ch00-00-introduction.html"},"https://doc.rust-lang.org/book/ch00-00-introduction.html"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"The Cargo Book"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://doc.rust-lang.org/cargo/index.html"},"https://doc.rust-lang.org/cargo/index.html"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Cosmwasm book"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://book.cosmwasm.com/basics/entry-points.html"},"https://book.cosmwasm.com/basics/entry-points.html"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"Learn X in Y minutes"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://learnxinyminutes.com/docs/rust/"},"https://learnxinyminutes.com/docs/rust/"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"CosmWasm Starter Pack"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://github.com/CosmWasm/cw-template"},"https://github.com/CosmWasm/cw-template"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"XPLA Docs"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://docs.xpla.io/docs/develop/smart-contract-guide/wasm/writing-the-contract/"},"https://docs.xpla.io/docs/develop/smart-contract-guide/wasm/writing-the-contract/"))))),(0,s.kt)("p",null,"Rust\uc5d0 \ub300\ud574 \uc644\ubcbd\ud558\uac8c \uc54c\uc9c0 \ubabb\ud574\ub3c4 \uad1c\ucc2e\uc2b5\ub2c8\ub2e4. \uc77c\ub2e8 \uc544\ub798 \ub0b4\uc6a9\uc744 \uc77d\uace0 \ub530\ub77c\ud574\ubcf4\ub294 \uac83\ub3c4 \uc88b\uc740 \uc120\ud0dd\uc785\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc774 \uc6d0\ud558\uc2dc\ub294 \ub300\ub85c \ud559\uc2b5\uc744 \uc9c4\ud589\ud574\uc8fc\uc138\uc694."),(0,s.kt)("h2",{id:"order-of-storecode"},"\ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131 \uc21c\uc11c"),(0,s.kt)("p",null,"\uba3c\uc800 XPLA \ube14\ub85d\uccb4\uc778\uc5d0\uc11c Cosmwasm \ucee8\ud2b8\ub799\ud2b8\uac00 \uc5b4\ub5bb\uac8c \uc0dd\uc131\ub418\ub294\uc9c0\ubd80\ud130 \uc0b4\ud3b4\ubd05\uc2dc\ub2e4."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Rust \uc5b8\uc5b4\ub85c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \uc791\uc131\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 CW20 \ucee8\ud2b8\ub799\ud2b8\uc758 \ucf54\ub4dc\ub294 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/xpladev/cw-plus"},"\ud574\ub2f9 Github"),"\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\uc791\uc131\ud55c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \ube4c\ub4dc\ud558\uc5ec ",(0,s.kt)("strong",{parentName:"p"},".wasm")," \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\uc0dd\uc131\ud55c ",(0,s.kt)("strong",{parentName:"p"},".wasm")," \ud30c\uc77c\uc744 XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \ubc30\ud3ec\ud569\ub2c8\ub2e4. \ubc30\ud3ec\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"StoreCode")," Method \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,s.kt)("a",{parentName:"p",href:"https://vault.xpla.io/contract/store"},"Vault"),"\ub97c \uc774\uc6a9\ud558\uba74 \uc27d\uac8c ",(0,s.kt)("strong",{parentName:"p"},".wasm")," \ud30c\uc77c\uc744 \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},".wasm")," \ud30c\uc77c\uc744 \ubc30\ud3ec\ud558\uba74 Code ID\uac00 \ubd80\uc5ec\ub429\ub2c8\ub2e4. \ud574\ub2f9 Code ID\ub97c \uc774\uc6a9\ud558\uc5ec ",(0,s.kt)("inlineCode",{parentName:"p"},"Instantiate")," Method \ud2b8\ub79c\uc7ad\uc158\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uac19\uc740 Code ID\ub85c ",(0,s.kt)("inlineCode",{parentName:"p"},"Instantiate")," \ub41c \ucee8\ud2b8\ub799\ud2b8\ub4e4\uc740 \ubaa8\ub450 \uac19\uc740 \ucf54\ub4dc\ub85c \uc774\ub8e8\uc5b4\uc838 \uc788\uc5b4, \uae30\ub2a5\uc774 \ube44\uc2b7\ud569\ub2c8\ub2e4. \ub2e4\ub9cc ",(0,s.kt)("inlineCode",{parentName:"p"},"Instantiate"),"\ud560 \ub54c \uc785\ub825\ud55c \ucd08\uae30\uac12\uc5d0 \ub530\ub77c \uc138\ubd80\uc0ac\ud56d\uc774 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. "))),(0,s.kt)("p",null,"\uc704 \uc21c\uc11c\ub300\ub85c \uc774\ubc88 \uc608\uc81c\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud574 \ubcfc \uac83\uc785\ub2c8\ub2e4."),(0,s.kt)("h2",{id:"build-contract"},"\ucf54\ub4dc \uc81c\uacf5 \ubc0f \ube4c\ub4dc"),(0,s.kt)("p",null,"Github()\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8 \ucf54\ub4dc\ub97c \ub2e4\uc6b4\ubc1b\uc544 \uc8fc\uc138\uc694. \ucf54\ub4dc \uad6c\uc131\uc740 \uc544\ub798\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4."),(0,s.kt)(i,{mdxType:"RustContractCode"}),(0,s.kt)("br",null),(0,s.kt)("p",null,"\ube4c\ub4dc\ub294 \uc544\ub798 \uc2a4\ud06c\ub9bd\ud2b8\ub85c \uc9c4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build\ncargo run-script optimize\n")),(0,s.kt)("p",null,"\ube4c\ub4dc\ub97c \uc644\ub8cc\ud558\uba74 ",(0,s.kt)("inlineCode",{parentName:"p"},"artifacts/game_data_save.wasm")," \ud30c\uc77c\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4. "),(0,s.kt)("h2",{id:"use-contract"},"\ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131\ud558\uace0, \uc0ac\uc6a9\ud558\uae30"),(0,s.kt)("h3",{id:"storecode"},"StoreCode"),(0,s.kt)("p",null,"wasm \ud30c\uc77c\ub85c \ub9cc\ub4e4\uc5b4\uc11c StoreCode \ud558\uae30  (JS, Vault)"),(0,s.kt)("h3",{id:"instantiate"},"Instantiate"),(0,s.kt)("h3",{id:"execute"},"Execute"),(0,s.kt)("h3",{id:"query"},"Query"))}x.isMDXComponent=!0}}]);