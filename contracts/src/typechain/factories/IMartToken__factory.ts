/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { IMartToken, IMartTokenInterface } from "../IMartToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_marketplace",
        type: "address",
      },
    ],
    name: "setMarketplace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052346200032b5762001aa3803803806200001d8162000330565b9283398101906040818303126200032b5780516001600160401b03908181116200032b57836200004f91840162000356565b91602093848201518381116200032b576200006b920162000356565b825190828211620003155760008054926001958685811c951680156200030a575b88861014620002f6578190601f95868111620002a3575b5088908683116001146200023f57849262000233575b5050600019600383901b1c191690861b1781555b81519384116200021f5784548581811c9116801562000214575b878210146200020057838111620001b8575b50859284116001146200015357839495509262000147575b5050600019600383901b1c191690821b1790555b600c80546001600160a01b031916331790556040516116da9081620003c98239f35b01519050388062000111565b9190601f1984169585845280842093905b878210620001a05750508385961062000186575b505050811b01905562000125565b015160001960f88460031b161c1916905538808062000178565b80878596829496860151815501950193019062000164565b8582528682208480870160051c820192898810620001f6575b0160051c019086905b828110620001ea575050620000f9565b838155018690620001da565b92508192620001d1565b634e487b7160e01b82526022600452602482fd5b90607f1690620000e7565b634e487b7160e01b81526041600452602490fd5b015190503880620000b9565b8480528985208994509190601f198416865b8c8282106200028c575050841162000272575b505050811b018155620000cd565b015160001960f88460031b161c1916905538808062000264565b8385015186558c9790950194938401930162000251565b9091508380528884208680850160051c8201928b8610620002ec575b918a91869594930160051c01915b828110620002dd575050620000a3565b8681558594508a9101620002cd565b92508192620002bf565b634e487b7160e01b83526022600452602483fd5b94607f16946200008c565b634e487b7160e01b600052604160045260246000fd5b600080fd5b6040519190601f01601f191682016001600160401b038111838210176200031557604052565b919080601f840112156200032b5782516001600160401b03811162000315576020906200038c601f8201601f1916830162000330565b928184528282870101116200032b5760005b818110620003b457508260009394955001015290565b85810183015184820184015282016200039e56fe608060408181526004918236101561001657600080fd5b600092833560e01c91826301ffc9a714610d495750816306fdde0314610ca1578163081812fc14610c81578163095ea7b314610b1357816318160ddd14610af457816323b872dd14610acf5781632f745c5914610a2357816342842e0e146109ef5781634f6ccce71461095b5781636352211e1461092a57816370a08231146108fd57816373ad6c2d146108b257816395d89b41146107cf578163a22cb46514610707578163b88d4fde1461067e578163c87b56dd1461056b578163d204c45e1461013b575063e985e9c5146100eb57600080fd5b3461013757806003193601126101375760ff81602093610109610e0e565b610111610e29565b6001600160a01b0391821683526005875283832091168252855220549151911615158152f35b5080fd5b90508234610568578260031936011261056857610156610e0e565b9260249267ffffffffffffffff91843583811161056457366023820112156105645761018a90369087818601359101610ee4565b91600b54600193848201600b558351956101a387610e74565b8787526001600160a01b038a811697909390881561052257600998999a9b6101e96101e384600052600260205260018060a01b0360406000205416151590565b15611658565b600854838d5260209a8b52888d20819055600160401b8110156105105791836102e7928e9f9e8e83918f8f908f9160029261024b876102308e6102ec9f860160085561160b565b90919082549060031b600019811b9283911b16911916179055565b61025488610f1b565b8686526006845281862081875284528186208890558786526007845281862055600087815260026020526040902054610297906001600160a01b031615156101e3565b85855260038352842080549091019055848352528d812080546001600160a01b031916831790557fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8180a4611464565b611131565b6000818152600260205260409020546001600160a01b0316156104b7578a52600a8752848a209180519182116104a55781906103288454611004565b601f8111610455575b508890601f83116001146103f6578c926103eb575b5050600019600383901b1c191690861b1790555b600d5416958686146103af575050838652600583528086208587528352808620805460ff191683179055519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319190a380f35b60199085606494519362461bcd60e51b85528401528201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152fd5b015190508b80610346565b848d52898d208994509190601f1984168e5b8c82821061043f5750508411610426575b505050811b01905561035a565b015160001960f88460031b161c191690558b8080610419565b8385015186558c97909501949384019301610408565b909150838c52888c20601f840160051c8101918a851061049b575b84939291601f8b920160051c01915b82811061048d575050610331565b8e81558594508a910161047f565b9091508190610470565b634e487b7160e01b8b5260418552898bfd5b855162461bcd60e51b8152808601899052602e818c01527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608490fd5b634e487b7160e01b8d52604188528d8dfd5b865162461bcd60e51b81526020818801819052818d01527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606490fd5b8480fd5b80fd5b9190503461067a576020918260031936011261067657356000818152600260205260409020546105a5906001600160a01b03161515610f92565b8352600a82528083209281518094829080546105c081611004565b9182855260019188838216918260001461064f575050600114610611575b50505061060d9392916105f2910386610ea6565b81516105fd81610e74565b5251928284938452830190610dce565b0390f35b8552868520879350859291905b82841061063757505050820101816105f261060d6105de565b8054848b01860152899550889490930192810161061e565b60ff19168782015293151560051b860190930193508492506105f2915061060d90506105de565b8380fd5b8280fd5b83903461013757608036600319011261013757610699610e0e565b906106a2610e29565b916044356064359367ffffffffffffffff85116107035736602386011215610703576106dd6102e79486602461070098369301359101610ee4565b926106f06106eb8433611155565b61107c565b6106fb83838361121d565b611580565b80f35b8580fd5b9190503461067a578060031936011261067a57610722610e0e565b9060243591821515809303610564576001600160a01b0316923384146107915750338452600560205280842083855260205280842060ff1981541660ff8416179055519081527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3160203392a380f35b6020606492519162461bcd60e51b8352820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152fd5b5050346101375781600319360112610137578051908260018054916107f383611004565b8086529282811690811561088a575060011461082e575b50505061081c8261060d940383610ea6565b51918291602083526020830190610dce565b94508085527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8286106108725750505061081c82602061060d958201019461080a565b80546020878701810191909152909501948101610855565b61060d97508693506020925061081c94915060ff191682840152151560051b8201019461080a565b8334610568576020366003190112610568576108cc610e0e565b600c546001600160a01b0391908216330361067a57166bffffffffffffffffffffffff60a01b600d541617600d5580f35b5050346101375760203660031901126101375760209061092361091e610e0e565b610f1b565b9051908152f35b828434610568576020366003190112610568575061094a60209235610fde565b90516001600160a01b039091168152f35b905082346105685760203660031901126105685750803590600854821015610997576020836109898461160b565b91905490519160031b1c8152f35b608490602084519162461bcd60e51b8352820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152fd5b505034610137576102e761070091610a0636610e3f565b91925192610a1384610e74565b8684526106f06106eb8433611155565b828434610568578160031936011261056857610a3d610e0e565b60243590610a4a81610f1b565b821015610a78576001600160a01b031682526006602090815283832091835290815290829020548251908152f35b835162461bcd60e51b8152602081870152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608490fd5b833461056857610700610ae136610e3f565b91610aef6106eb8433611155565b61121d565b5050346101375781600319360112610137576020906008549051908152f35b90503461067a578160031936011261067a57610b2d610e0e565b6024359290916001600160a01b0391908280610b4887610fde565b16941693808514610c3457803314908115610c15575b5015610bad57848652602052842080546001600160a01b03191683179055610b8583610fde565b167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258480a480f35b6020608492519162461bcd60e51b8352820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152fd5b90508652600560205281862033875260205260ff828720541638610b5e565b506020608492519162461bcd60e51b8352820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152fd5b828434610568576020366003190112610568575061094a6020923561103e565b505034610137578160031936011261013757805190828054610cc281611004565b8085529160019180831690811561088a5750600114610ced5750505061081c8261060d940383610ea6565b80809650527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b828610610d315750505061081c82602061060d958201019461080a565b80546020878701810191909152909501948101610d14565b84913461067a57602036600319011261067a573563ffffffff60e01b811680910361067a576020925063780e9d6360e01b8114908115610d8b575b5015158152f35b6380ac58cd60e01b811491508115610dbd575b8115610dac575b5083610d84565b6301ffc9a760e01b14905083610da5565b635b5e139f60e01b81149150610d9e565b919082519283825260005b848110610dfa575050826000602080949584010152601f8019910116010190565b602081830181015184830182015201610dd9565b600435906001600160a01b0382168203610e2457565b600080fd5b602435906001600160a01b0382168203610e2457565b6060906003190112610e24576001600160a01b03906004358281168103610e2457916024359081168103610e24579060443590565b6020810190811067ffffffffffffffff821117610e9057604052565b634e487b7160e01b600052604160045260246000fd5b90601f8019910116810190811067ffffffffffffffff821117610e9057604052565b67ffffffffffffffff8111610e9057601f01601f191660200190565b929192610ef082610ec8565b91610efe6040519384610ea6565b829481845281830111610e24578281602093846000960137010152565b6001600160a01b03168015610f3b57600052600360205260406000205490565b60405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608490fd5b15610f9957565b60405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e20494400000000000000006044820152606490fd5b6000908152600260205260409020546001600160a01b0316611001811515610f92565b90565b90600182811c92168015611034575b602083101461101e57565b634e487b7160e01b600052602260045260246000fd5b91607f1691611013565b600081815260026020526040902054611061906001600160a01b03161515610f92565b6000908152600460205260409020546001600160a01b031690565b1561108357565b60405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201526c1c881bdc88185c1c1c9bdd9959609a1b6064820152608490fd5b60809060208152603260208201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b60608201520190565b1561113857565b60405162461bcd60e51b815280611151600482016110de565b0390fd5b906001600160a01b03808061116984610fde565b1693169183831493841561119c575b508315611186575b50505090565b6111929192935061103e565b1614388080611180565b909350600052600560205260406000208260005260205260ff604060002054169238611178565b156111ca57565b60405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608490fd5b6112419161122a84610fde565b6001600160a01b03938484169391851684146111c3565b8382169384156114135783918261135a575090506008549085600052600960205281604060002055600160401b821015610e90576112a79261128e8761023085600189970160085561160b565b828603611327575b506112a086610fde565b16146111c3565b7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60008481526004602052604081206bffffffffffffffffffffffff60a01b9081815416905583825260036020526040822060001981540190558482526040822060018154019055858252600260205284604083209182541617905580a4565b61133090610f1b565b60406000878152600660205281812083825260205288828220558881526007602052205538611296565b85830361136c575b506112a79261128e565b611377919250610f1b565b6000198101919082116113fd576112a792849260009088825260209060078252604091828420548281036113c6575b508a84528383812055868452600681528284209184525281205592611362565b87855260068252838520838652825283852054888652600683528486208287528352808587205585526007825283852055386113a6565b634e487b7160e01b600052601160045260246000fd5b60405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608490fd5b9192600092909190803b15611576576114b2946040518092630a85bd0160e11b9485835233600484015287602484015260448301526080606483015281878160209a8b966084830190610dce565b03926001600160a01b03165af1849181611536575b50611525575050503d60001461151d573d6114e181610ec8565b906114ef6040519283610ea6565b81528091833d92013e5b8051918261151a5760405162461bcd60e51b815280611151600482016110de565b01fd5b5060606114f9565b6001600160e01b0319161492509050565b9091508581813d831161156f575b61154e8183610ea6565b8101031261056457516001600160e01b0319811681036105645790386114c7565b503d611544565b5050915050600190565b9293600093909291803b15611600579484916115da9660405180948193630a85bd0160e11b9788845233600485015260018060a01b0380921660248501526044840152608060648401528260209b8c976084830190610dce565b0393165af18491816115365750611525575050503d60001461151d573d6114e181610ec8565b505050915050600190565b6008548110156116425760086000527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30190600090565b634e487b7160e01b600052603260045260246000fd5b1561165f57565b60405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606490fdfea26469706673582212205c9071dc2b7510397c315363b408188467e06066308d44261614151542dbd84d64736f6c63430008110033";

type IMartTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: IMartTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class IMartToken__factory extends ContractFactory {
  constructor(...args: IMartTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<IMartToken> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<IMartToken>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): IMartToken {
    return super.attach(address) as IMartToken;
  }
  override connect(signer: Signer): IMartToken__factory {
    return super.connect(signer) as IMartToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IMartTokenInterface {
    return new utils.Interface(_abi) as IMartTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMartToken {
    return new Contract(address, _abi, signerOrProvider) as IMartToken;
  }
}