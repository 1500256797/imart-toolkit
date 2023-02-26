// @ts-nocheck
import { CreationInterface } from "../proxy";
import {
  Config,
  CreationArgs,
  MintTokenArgs,
  CreateCollectionArgs,
  Tx,
  ApproveArgs,
} from "../types";
export class Creation implements CreationInterface {
  readonly config: Config;
  readonly handle: string;
  constructor(config: Config) {
    this.config = config;
    this.handle = `${this.config.addresses["singleCollective"]}::creation`;
  }

  isApproved(_: ApproveArgs, _?: Signer): Promise<Tx> {
    return true;
  }

  approve(_: ApproveArgs, _?: Signer): Promise<Tx> {}

  mintToken(args: MintTokenArgs): Promise<Tx> {
    const payload = {
      type: "entry_function_payload",
      function: `${this.handle}::create_token`,
      type_arguments: [],
      arguments: [
        args.collection,
        args.name,
        args.description,
        args.balance,
        args.uri,
      ],
    };
    return this.config?.submitTx!(payload);
  }

  createCollection(args: CreateCollectionArgs): Promise<Tx> {
    const payload = {
      type: "entry_function_payload",
      function: `${this.handle}::create_collection`,
      type_arguments: [],
      arguments: [
        args.category,
        args.tags,
        args.name,
        args.description,
        args.uri,
        args.payees,
        args.royalties.map((v) => v.toString()),
        args.maximum.toString(),
      ],
    };
    return this.config?.submitTx!(payload);
  }
  create(args: CreationArgs): Promise<Tx> {
    throw "Deprecated";
  }
}
