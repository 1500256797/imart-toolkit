import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "./common";
export declare namespace Curation {
    type GalleryStruct = {
        id: PromiseOrValue<BigNumberish>;
        collection: PromiseOrValue<string>;
        tokenId: PromiseOrValue<BigNumberish>;
        owner: PromiseOrValue<string>;
        spaceType: PromiseOrValue<string>;
        name: PromiseOrValue<string>;
        metadataUri: PromiseOrValue<string>;
    };
    type GalleryStructOutput = [
        BigNumber,
        string,
        BigNumber,
        string,
        string,
        string,
        string
    ] & {
        id: BigNumber;
        collection: string;
        tokenId: BigNumber;
        owner: string;
        spaceType: string;
        name: string;
        metadataUri: string;
    };
    type ExhibitStruct = {
        id: PromiseOrValue<BigNumberish>;
        galleryId: PromiseOrValue<BigNumberish>;
        collection: PromiseOrValue<string>;
        tokenId: PromiseOrValue<BigNumberish>;
        origin: PromiseOrValue<string>;
        expiration: PromiseOrValue<BigNumberish>;
        price: PromiseOrValue<BigNumberish>;
        commissionFee: PromiseOrValue<BigNumberish>;
        location: PromiseOrValue<string>;
        url: PromiseOrValue<string>;
        detail: PromiseOrValue<string>;
        status: PromiseOrValue<BigNumberish>;
    };
    type ExhibitStructOutput = [
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        number
    ] & {
        id: BigNumber;
        galleryId: BigNumber;
        collection: string;
        tokenId: BigNumber;
        origin: string;
        expiration: BigNumber;
        price: BigNumber;
        commissionFee: BigNumber;
        location: string;
        url: string;
        detail: string;
        status: number;
    };
    type OfferStruct = {
        id: PromiseOrValue<BigNumberish>;
        collection: PromiseOrValue<string>;
        tokenId: PromiseOrValue<BigNumberish>;
        from: PromiseOrValue<string>;
        to: PromiseOrValue<string>;
        price: PromiseOrValue<BigNumberish>;
        galleryId: PromiseOrValue<BigNumberish>;
        commissionFee: PromiseOrValue<BigNumberish>;
        offerStartAt: PromiseOrValue<BigNumberish>;
        offerEndAt: PromiseOrValue<BigNumberish>;
        exhibitDuration: PromiseOrValue<BigNumberish>;
        url: PromiseOrValue<string>;
        detail: PromiseOrValue<string>;
        status: PromiseOrValue<BigNumberish>;
    };
    type OfferStructOutput = [
        BigNumber,
        string,
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        number
    ] & {
        id: BigNumber;
        collection: string;
        tokenId: BigNumber;
        from: string;
        to: string;
        price: BigNumber;
        galleryId: BigNumber;
        commissionFee: BigNumber;
        offerStartAt: BigNumber;
        offerEndAt: BigNumber;
        exhibitDuration: BigNumber;
        url: string;
        detail: string;
        status: number;
    };
}
export interface CurationInterface extends utils.Interface {
    functions: {
        "buy(uint256,uint256)": FunctionFragment;
        "cancel(uint256,uint256)": FunctionFragment;
        "createGallery(address,uint256,string,string,string)": FunctionFragment;
        "exhibits(uint256)": FunctionFragment;
        "freeze(uint256,uint256)": FunctionFragment;
        "galleries(uint256)": FunctionFragment;
        "getCuratorGalleries(address)": FunctionFragment;
        "getGalleryExhibits(uint256)": FunctionFragment;
        "getReceivedOffers()": FunctionFragment;
        "getSentOffers()": FunctionFragment;
        "list(uint256,uint256,string)": FunctionFragment;
        "offers(uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "redeemForce(uint256,uint256)": FunctionFragment;
        "redeemRequests(uint256)": FunctionFragment;
        "redeemWithFreeze(uint256,uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "replyOffer(uint256,bool)": FunctionFragment;
        "sendOffer(address,uint256,uint256,uint256,uint256,uint64,uint64,string,string)": FunctionFragment;
        "setWhitelist(address,bool)": FunctionFragment;
        "toggleWhitelist(bool)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "whitelist(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "buy" | "cancel" | "createGallery" | "exhibits" | "freeze" | "galleries" | "getCuratorGalleries" | "getGalleryExhibits" | "getReceivedOffers" | "getSentOffers" | "list" | "offers" | "owner" | "redeemForce" | "redeemRequests" | "redeemWithFreeze" | "renounceOwnership" | "replyOffer" | "sendOffer" | "setWhitelist" | "toggleWhitelist" | "transferOwnership" | "whitelist"): FunctionFragment;
    encodeFunctionData(functionFragment: "buy", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "cancel", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "createGallery", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "exhibits", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "freeze", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "galleries", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getCuratorGalleries", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getGalleryExhibits", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getReceivedOffers", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSentOffers", values?: undefined): string;
    encodeFunctionData(functionFragment: "list", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "offers", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "redeemForce", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "redeemRequests", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "redeemWithFreeze", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "replyOffer", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "sendOffer", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "setWhitelist", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "toggleWhitelist", values: [PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "whitelist", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createGallery", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "exhibits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "freeze", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "galleries", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCuratorGalleries", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGalleryExhibits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReceivedOffers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSentOffers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "list", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "offers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemForce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemRequests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemWithFreeze", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replyOffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sendOffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "toggleWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;
    events: {
        "ExhibitCanceled(uint256,uint256,address,uint256,address)": EventFragment;
        "ExhibitFrozen(uint256,uint256,address,uint256,address)": EventFragment;
        "ExhibitListed(uint256,uint256,address,uint256,address,uint64,uint256,uint256,string)": EventFragment;
        "ExhibitRedeemed(uint256,uint256,address,uint256,address)": EventFragment;
        "ExhibitSold(uint256,uint256,address,uint256,address,uint256,uint256)": EventFragment;
        "GalleryCreated(uint256,address,uint256,address,string,string,string)": EventFragment;
        "OfferAccepted(uint256,address,uint256,address,address,uint256,uint256,uint256,uint64)": EventFragment;
        "OfferCreated(uint256,address,uint256,address,address,uint256,uint256,uint256,uint64,uint64,uint64,string,string)": EventFragment;
        "OfferRejected(uint256,address,uint256,address,address)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ExhibitCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExhibitFrozen"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExhibitListed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExhibitRedeemed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExhibitSold"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "GalleryCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OfferAccepted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OfferCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OfferRejected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export interface ExhibitCanceledEventObject {
    id: BigNumber;
    galleryId: BigNumber;
    collection: string;
    tokenId: BigNumber;
    origin: string;
}
export type ExhibitCanceledEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string
], ExhibitCanceledEventObject>;
export type ExhibitCanceledEventFilter = TypedEventFilter<ExhibitCanceledEvent>;
export interface ExhibitFrozenEventObject {
    id: BigNumber;
    galleryId: BigNumber;
    collection: string;
    tokenId: BigNumber;
    origin: string;
}
export type ExhibitFrozenEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string
], ExhibitFrozenEventObject>;
export type ExhibitFrozenEventFilter = TypedEventFilter<ExhibitFrozenEvent>;
export interface ExhibitListedEventObject {
    id: BigNumber;
    galleryId: BigNumber;
    collection: string;
    tokenId: BigNumber;
    origin: string;
    expiration: BigNumber;
    price: BigNumber;
    commissionFee: BigNumber;
    location: string;
}
export type ExhibitListedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    string
], ExhibitListedEventObject>;
export type ExhibitListedEventFilter = TypedEventFilter<ExhibitListedEvent>;
export interface ExhibitRedeemedEventObject {
    id: BigNumber;
    galleryId: BigNumber;
    collection: string;
    tokenId: BigNumber;
    origin: string;
}
export type ExhibitRedeemedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string
], ExhibitRedeemedEventObject>;
export type ExhibitRedeemedEventFilter = TypedEventFilter<ExhibitRedeemedEvent>;
export interface ExhibitSoldEventObject {
    id: BigNumber;
    galleryId: BigNumber;
    collection: string;
    tokenId: BigNumber;
    origin: string;
    price: BigNumber;
    commissionFee: BigNumber;
}
export type ExhibitSoldEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber
], ExhibitSoldEventObject>;
export type ExhibitSoldEventFilter = TypedEventFilter<ExhibitSoldEvent>;
export interface GalleryCreatedEventObject {
    id: BigNumber;
    collection: string;
    tokenId: BigNumber;
    owner: string;
    spaceType: string;
    name: string;
    metadataUri: string;
}
export type GalleryCreatedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    string,
    string
], GalleryCreatedEventObject>;
export type GalleryCreatedEventFilter = TypedEventFilter<GalleryCreatedEvent>;
export interface OfferAcceptedEventObject {
    id: BigNumber;
    collection: string;
    tokenId: BigNumber;
    from: string;
    to: string;
    price: BigNumber;
    galleryId: BigNumber;
    commissionFee: BigNumber;
    exhibitDuration: BigNumber;
}
export type OfferAcceptedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], OfferAcceptedEventObject>;
export type OfferAcceptedEventFilter = TypedEventFilter<OfferAcceptedEvent>;
export interface OfferCreatedEventObject {
    id: BigNumber;
    collection: string;
    tokenId: BigNumber;
    from: string;
    to: string;
    price: BigNumber;
    galleryId: BigNumber;
    commissionFee: BigNumber;
    offerStartAt: BigNumber;
    offerEndAt: BigNumber;
    exhibitDuration: BigNumber;
    url: string;
    detail: string;
}
export type OfferCreatedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
], OfferCreatedEventObject>;
export type OfferCreatedEventFilter = TypedEventFilter<OfferCreatedEvent>;
export interface OfferRejectedEventObject {
    id: BigNumber;
    collection: string;
    tokenId: BigNumber;
    from: string;
    to: string;
}
export type OfferRejectedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    string,
    string
], OfferRejectedEventObject>;
export type OfferRejectedEventFilter = TypedEventFilter<OfferRejectedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface Curation extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: CurationInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        buy(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancel(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createGallery(collection: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, spaceType: PromiseOrValue<string>, name: PromiseOrValue<string>, metadataUri: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        exhibits(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string,
            BigNumber,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            string,
            string,
            number
        ] & {
            id: BigNumber;
            galleryId: BigNumber;
            collection: string;
            tokenId: BigNumber;
            origin: string;
            expiration: BigNumber;
            price: BigNumber;
            commissionFee: BigNumber;
            location: string;
            url: string;
            detail: string;
            status: number;
        }>;
        freeze(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        galleries(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber,
            string,
            string,
            string,
            string
        ] & {
            id: BigNumber;
            collection: string;
            tokenId: BigNumber;
            owner: string;
            spaceType: string;
            name: string;
            metadataUri: string;
        }>;
        getCuratorGalleries(curator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[Curation.GalleryStructOutput[]]>;
        getGalleryExhibits(galleryId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[Curation.ExhibitStructOutput[]]>;
        getReceivedOffers(overrides?: CallOverrides): Promise<[Curation.OfferStructOutput[]]>;
        getSentOffers(overrides?: CallOverrides): Promise<[Curation.OfferStructOutput[]]>;
        list(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, location: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        offers(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber,
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            string,
            number
        ] & {
            id: BigNumber;
            collection: string;
            tokenId: BigNumber;
            from: string;
            to: string;
            price: BigNumber;
            galleryId: BigNumber;
            commissionFee: BigNumber;
            offerStartAt: BigNumber;
            offerEndAt: BigNumber;
            exhibitDuration: BigNumber;
            url: string;
            detail: string;
            status: number;
        }>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        redeemForce(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        redeemRequests(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            id: BigNumber;
            galleryId: BigNumber;
            createAt: BigNumber;
            endAt: BigNumber;
        }>;
        redeemWithFreeze(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        replyOffer(offerId: PromiseOrValue<BigNumberish>, accept: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        sendOffer(collection: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, galleryId: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, commissionFee: PromiseOrValue<BigNumberish>, offerDuration: PromiseOrValue<BigNumberish>, exhibitDuration: PromiseOrValue<BigNumberish>, url: PromiseOrValue<string>, detail: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setWhitelist(curator: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        toggleWhitelist(enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };
    buy(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancel(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createGallery(collection: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, spaceType: PromiseOrValue<string>, name: PromiseOrValue<string>, metadataUri: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    exhibits(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        string,
        number
    ] & {
        id: BigNumber;
        galleryId: BigNumber;
        collection: string;
        tokenId: BigNumber;
        origin: string;
        expiration: BigNumber;
        price: BigNumber;
        commissionFee: BigNumber;
        location: string;
        url: string;
        detail: string;
        status: number;
    }>;
    freeze(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    galleries(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        BigNumber,
        string,
        string,
        string,
        string
    ] & {
        id: BigNumber;
        collection: string;
        tokenId: BigNumber;
        owner: string;
        spaceType: string;
        name: string;
        metadataUri: string;
    }>;
    getCuratorGalleries(curator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Curation.GalleryStructOutput[]>;
    getGalleryExhibits(galleryId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Curation.ExhibitStructOutput[]>;
    getReceivedOffers(overrides?: CallOverrides): Promise<Curation.OfferStructOutput[]>;
    getSentOffers(overrides?: CallOverrides): Promise<Curation.OfferStructOutput[]>;
    list(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, location: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    offers(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        number
    ] & {
        id: BigNumber;
        collection: string;
        tokenId: BigNumber;
        from: string;
        to: string;
        price: BigNumber;
        galleryId: BigNumber;
        commissionFee: BigNumber;
        offerStartAt: BigNumber;
        offerEndAt: BigNumber;
        exhibitDuration: BigNumber;
        url: string;
        detail: string;
        status: number;
    }>;
    owner(overrides?: CallOverrides): Promise<string>;
    redeemForce(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    redeemRequests(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        id: BigNumber;
        galleryId: BigNumber;
        createAt: BigNumber;
        endAt: BigNumber;
    }>;
    redeemWithFreeze(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    replyOffer(offerId: PromiseOrValue<BigNumberish>, accept: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    sendOffer(collection: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, galleryId: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, commissionFee: PromiseOrValue<BigNumberish>, offerDuration: PromiseOrValue<BigNumberish>, exhibitDuration: PromiseOrValue<BigNumberish>, url: PromiseOrValue<string>, detail: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setWhitelist(curator: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    toggleWhitelist(enable: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        buy(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        cancel(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        createGallery(collection: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, spaceType: PromiseOrValue<string>, name: PromiseOrValue<string>, metadataUri: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        exhibits(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            string,
            BigNumber,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            string,
            string,
            number
        ] & {
            id: BigNumber;
            galleryId: BigNumber;
            collection: string;
            tokenId: BigNumber;
            origin: string;
            expiration: BigNumber;
            price: BigNumber;
            commissionFee: BigNumber;
            location: string;
            url: string;
            detail: string;
            status: number;
        }>;
        freeze(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        galleries(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber,
            string,
            string,
            string,
            string
        ] & {
            id: BigNumber;
            collection: string;
            tokenId: BigNumber;
            owner: string;
            spaceType: string;
            name: string;
            metadataUri: string;
        }>;
        getCuratorGalleries(curator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Curation.GalleryStructOutput[]>;
        getGalleryExhibits(galleryId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<Curation.ExhibitStructOutput[]>;
        getReceivedOffers(overrides?: CallOverrides): Promise<Curation.OfferStructOutput[]>;
        getSentOffers(overrides?: CallOverrides): Promise<Curation.OfferStructOutput[]>;
        list(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, location: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        offers(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber,
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            string,
            number
        ] & {
            id: BigNumber;
            collection: string;
            tokenId: BigNumber;
            from: string;
            to: string;
            price: BigNumber;
            galleryId: BigNumber;
            commissionFee: BigNumber;
            offerStartAt: BigNumber;
            offerEndAt: BigNumber;
            exhibitDuration: BigNumber;
            url: string;
            detail: string;
            status: number;
        }>;
        owner(overrides?: CallOverrides): Promise<string>;
        redeemForce(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        redeemRequests(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            id: BigNumber;
            galleryId: BigNumber;
            createAt: BigNumber;
            endAt: BigNumber;
        }>;
        redeemWithFreeze(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        replyOffer(offerId: PromiseOrValue<BigNumberish>, accept: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        sendOffer(collection: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, galleryId: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, commissionFee: PromiseOrValue<BigNumberish>, offerDuration: PromiseOrValue<BigNumberish>, exhibitDuration: PromiseOrValue<BigNumberish>, url: PromiseOrValue<string>, detail: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setWhitelist(curator: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        toggleWhitelist(enable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "ExhibitCanceled(uint256,uint256,address,uint256,address)"(id?: PromiseOrValue<BigNumberish> | null, galleryId?: null, collection?: null, tokenId?: null, origin?: null): ExhibitCanceledEventFilter;
        ExhibitCanceled(id?: PromiseOrValue<BigNumberish> | null, galleryId?: null, collection?: null, tokenId?: null, origin?: null): ExhibitCanceledEventFilter;
        "ExhibitFrozen(uint256,uint256,address,uint256,address)"(id?: PromiseOrValue<BigNumberish> | null, galleryId?: null, collection?: null, tokenId?: null, origin?: null): ExhibitFrozenEventFilter;
        ExhibitFrozen(id?: PromiseOrValue<BigNumberish> | null, galleryId?: null, collection?: null, tokenId?: null, origin?: null): ExhibitFrozenEventFilter;
        "ExhibitListed(uint256,uint256,address,uint256,address,uint64,uint256,uint256,string)"(id?: PromiseOrValue<BigNumberish> | null, galleryId?: null, collection?: null, tokenId?: null, origin?: null, expiration?: null, price?: null, commissionFee?: null, location?: null): ExhibitListedEventFilter;
        ExhibitListed(id?: PromiseOrValue<BigNumberish> | null, galleryId?: null, collection?: null, tokenId?: null, origin?: null, expiration?: null, price?: null, commissionFee?: null, location?: null): ExhibitListedEventFilter;
        "ExhibitRedeemed(uint256,uint256,address,uint256,address)"(id?: PromiseOrValue<BigNumberish> | null, galleryId?: null, collection?: null, tokenId?: null, origin?: null): ExhibitRedeemedEventFilter;
        ExhibitRedeemed(id?: PromiseOrValue<BigNumberish> | null, galleryId?: null, collection?: null, tokenId?: null, origin?: null): ExhibitRedeemedEventFilter;
        "ExhibitSold(uint256,uint256,address,uint256,address,uint256,uint256)"(id?: PromiseOrValue<BigNumberish> | null, galleryId?: null, collection?: null, tokenId?: null, origin?: null, price?: null, commissionFee?: null): ExhibitSoldEventFilter;
        ExhibitSold(id?: PromiseOrValue<BigNumberish> | null, galleryId?: null, collection?: null, tokenId?: null, origin?: null, price?: null, commissionFee?: null): ExhibitSoldEventFilter;
        "GalleryCreated(uint256,address,uint256,address,string,string,string)"(id?: PromiseOrValue<BigNumberish> | null, collection?: null, tokenId?: null, owner?: null, spaceType?: null, name?: null, metadataUri?: null): GalleryCreatedEventFilter;
        GalleryCreated(id?: PromiseOrValue<BigNumberish> | null, collection?: null, tokenId?: null, owner?: null, spaceType?: null, name?: null, metadataUri?: null): GalleryCreatedEventFilter;
        "OfferAccepted(uint256,address,uint256,address,address,uint256,uint256,uint256,uint64)"(id?: PromiseOrValue<BigNumberish> | null, collection?: null, tokenId?: null, from?: null, to?: null, price?: null, galleryId?: null, commissionFee?: null, exhibitDuration?: null): OfferAcceptedEventFilter;
        OfferAccepted(id?: PromiseOrValue<BigNumberish> | null, collection?: null, tokenId?: null, from?: null, to?: null, price?: null, galleryId?: null, commissionFee?: null, exhibitDuration?: null): OfferAcceptedEventFilter;
        "OfferCreated(uint256,address,uint256,address,address,uint256,uint256,uint256,uint64,uint64,uint64,string,string)"(id?: PromiseOrValue<BigNumberish> | null, collection?: null, tokenId?: null, from?: null, to?: null, price?: null, galleryId?: null, commissionFee?: null, offerStartAt?: null, offerEndAt?: null, exhibitDuration?: null, url?: null, detail?: null): OfferCreatedEventFilter;
        OfferCreated(id?: PromiseOrValue<BigNumberish> | null, collection?: null, tokenId?: null, from?: null, to?: null, price?: null, galleryId?: null, commissionFee?: null, offerStartAt?: null, offerEndAt?: null, exhibitDuration?: null, url?: null, detail?: null): OfferCreatedEventFilter;
        "OfferRejected(uint256,address,uint256,address,address)"(id?: PromiseOrValue<BigNumberish> | null, collection?: null, tokenId?: null, from?: null, to?: null): OfferRejectedEventFilter;
        OfferRejected(id?: PromiseOrValue<BigNumberish> | null, collection?: null, tokenId?: null, from?: null, to?: null): OfferRejectedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        buy(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancel(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createGallery(collection: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, spaceType: PromiseOrValue<string>, name: PromiseOrValue<string>, metadataUri: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        exhibits(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        freeze(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        galleries(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getCuratorGalleries(curator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getGalleryExhibits(galleryId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getReceivedOffers(overrides?: CallOverrides): Promise<BigNumber>;
        getSentOffers(overrides?: CallOverrides): Promise<BigNumber>;
        list(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, location: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        offers(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        redeemForce(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        redeemRequests(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        redeemWithFreeze(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        replyOffer(offerId: PromiseOrValue<BigNumberish>, accept: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        sendOffer(collection: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, galleryId: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, commissionFee: PromiseOrValue<BigNumberish>, offerDuration: PromiseOrValue<BigNumberish>, exhibitDuration: PromiseOrValue<BigNumberish>, url: PromiseOrValue<string>, detail: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setWhitelist(curator: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        toggleWhitelist(enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        buy(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancel(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createGallery(collection: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, spaceType: PromiseOrValue<string>, name: PromiseOrValue<string>, metadataUri: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        exhibits(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        freeze(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        galleries(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCuratorGalleries(curator: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGalleryExhibits(galleryId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getReceivedOffers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSentOffers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        list(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, location: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        offers(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemForce(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        redeemRequests(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        redeemWithFreeze(galleryId: PromiseOrValue<BigNumberish>, exhibitId: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        replyOffer(offerId: PromiseOrValue<BigNumberish>, accept: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        sendOffer(collection: PromiseOrValue<string>, tokenId: PromiseOrValue<BigNumberish>, galleryId: PromiseOrValue<BigNumberish>, price: PromiseOrValue<BigNumberish>, commissionFee: PromiseOrValue<BigNumberish>, offerDuration: PromiseOrValue<BigNumberish>, exhibitDuration: PromiseOrValue<BigNumberish>, url: PromiseOrValue<string>, detail: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setWhitelist(curator: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        toggleWhitelist(enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
