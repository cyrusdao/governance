declare const _default: {
    readonly Azorius: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidArrayLengths";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidProposal";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidProposer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidStrategy";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTxHash";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTxs";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "guard_";
            readonly type: "address";
        }];
        readonly name: "NotIERC165Compliant";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ProposalNotExecutable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StrategyDisabled";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "StrategyEnabled";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TxFailed";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousAvatar";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newAvatar";
            readonly type: "address";
        }];
        readonly name: "AvatarSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "creator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "avatar";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "AzoriusSetUp";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "guard";
            readonly type: "address";
        }];
        readonly name: "ChangedGuard";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "strategy";
            readonly type: "address";
        }];
        readonly name: "DisabledStrategy";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "strategy";
            readonly type: "address";
        }];
        readonly name: "EnabledStrategy";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "executionPeriod";
            readonly type: "uint32";
        }];
        readonly name: "ExecutionPeriodUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "strategy";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "proposer";
            readonly type: "address";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }, {
                readonly internalType: "enum Enum.Operation";
                readonly name: "operation";
                readonly type: "uint8";
            }];
            readonly indexed: false;
            readonly internalType: "struct IAzorius.Transaction[]";
            readonly name: "transactions";
            readonly type: "tuple[]";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "metadata";
            readonly type: "string";
        }];
        readonly name: "ProposalCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32[]";
            readonly name: "txHashes";
            readonly type: "bytes32[]";
        }];
        readonly name: "ProposalExecuted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousTarget";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newTarget";
            readonly type: "address";
        }];
        readonly name: "TargetSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "timelockPeriod";
            readonly type: "uint32";
        }];
        readonly name: "TimelockPeriodUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR_TYPEHASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "TRANSACTION_TYPEHASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "avatar";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_prevStrategy";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_strategy";
            readonly type: "address";
        }];
        readonly name: "disableStrategy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_strategy";
            readonly type: "address";
        }];
        readonly name: "enableStrategy";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address[]";
            readonly name: "_targets";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_values";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "_data";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "enum Enum.Operation[]";
            readonly name: "_operations";
            readonly type: "uint8[]";
        }];
        readonly name: "executeProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "executionPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }, {
            readonly internalType: "enum Enum.Operation";
            readonly name: "_operation";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "_nonce";
            readonly type: "uint256";
        }];
        readonly name: "generateTxHashData";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getGuard";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "_guard";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposal";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "_strategy";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "_txHashes";
            readonly type: "bytes32[]";
        }, {
            readonly internalType: "uint32";
            readonly name: "_timelockPeriod";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "_executionPeriod";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "_executionCounter";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "_txIndex";
            readonly type: "uint32";
        }];
        readonly name: "getProposalTxHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalTxHashes";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_startAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_count";
            readonly type: "uint256";
        }];
        readonly name: "getStrategies";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_strategies";
            readonly type: "address[]";
        }, {
            readonly internalType: "address";
            readonly name: "_next";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }, {
            readonly internalType: "enum Enum.Operation";
            readonly name: "_operation";
            readonly type: "uint8";
        }];
        readonly name: "getTxHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "guard";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_strategy";
            readonly type: "address";
        }];
        readonly name: "isStrategyEnabled";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "proposalState";
        readonly outputs: readonly [{
            readonly internalType: "enum IAzorius.ProposalState";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_avatar";
            readonly type: "address";
        }];
        readonly name: "setAvatar";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_guard";
            readonly type: "address";
        }];
        readonly name: "setGuard";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_target";
            readonly type: "address";
        }];
        readonly name: "setTarget";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_strategy";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }, {
                readonly internalType: "enum Enum.Operation";
                readonly name: "operation";
                readonly type: "uint8";
            }];
            readonly internalType: "struct IAzorius.Transaction[]";
            readonly name: "_transactions";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "string";
            readonly name: "_metadata";
            readonly type: "string";
        }];
        readonly name: "submitProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "target";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "timelockPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalProposalCount";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_executionPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateExecutionPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_timelockPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateTimelockPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly AzoriusFreezeGuard: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "DAOFrozen";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "creator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "freezeVoting";
            readonly type: "address";
        }];
        readonly name: "AzoriusFreezeGuardSetUp";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly name: "checkAfterExecution";
        readonly outputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "enum Enum.Operation";
            readonly name: "";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "checkTransaction";
        readonly outputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezeVoting";
        readonly outputs: readonly [{
            readonly internalType: "contract IBaseFreezeVoting";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly DAOAutonomousAdminV1: readonly [{
        readonly inputs: readonly [];
        readonly name: "NotCurrentWearer";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "currentWearer";
                readonly type: "address";
            }, {
                readonly internalType: "contract IHats";
                readonly name: "hatsProtocol";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "hatId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "nominatedWearer";
                readonly type: "address";
            }];
            readonly internalType: "struct IDAOAutonomousAdminV1.TriggerStartArgs";
            readonly name: "args";
            readonly type: "tuple";
        }];
        readonly name: "triggerStartNextTerm";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly DAOHatsCreationModule: readonly [{
        readonly inputs: readonly [];
        readonly name: "SALT";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "contract IHats";
                readonly name: "hatsProtocol";
                readonly type: "address";
            }, {
                readonly internalType: "contract IERC6551Registry";
                readonly name: "erc6551Registry";
                readonly type: "address";
            }, {
                readonly internalType: "contract IHatsModuleFactory";
                readonly name: "hatsModuleFactory";
                readonly type: "address";
            }, {
                readonly internalType: "contract ModuleProxyFactory";
                readonly name: "moduleProxyFactory";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "keyValuePairs";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "daoAutonomousAdminImplementation";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "hatsAccountImplementation";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "hatsElectionsEligibilityImplementation";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "string";
                    readonly name: "details";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "imageURI";
                    readonly type: "string";
                }];
                readonly internalType: "struct DAOHatsCreationModule.TopHatParams";
                readonly name: "topHat";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "string";
                    readonly name: "details";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "imageURI";
                    readonly type: "string";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isMutable";
                    readonly type: "bool";
                }];
                readonly internalType: "struct DAOHatsCreationModule.AdminHatParams";
                readonly name: "adminHat";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "wearer";
                    readonly type: "address";
                }, {
                    readonly internalType: "string";
                    readonly name: "details";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "imageURI";
                    readonly type: "string";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "contract ISablierV2LockupLinear";
                        readonly name: "sablier";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "sender";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "asset";
                        readonly type: "address";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "uint40";
                            readonly name: "start";
                            readonly type: "uint40";
                        }, {
                            readonly internalType: "uint40";
                            readonly name: "cliff";
                            readonly type: "uint40";
                        }, {
                            readonly internalType: "uint40";
                            readonly name: "end";
                            readonly type: "uint40";
                        }];
                        readonly internalType: "struct LockupLinear.Timestamps";
                        readonly name: "timestamps";
                        readonly type: "tuple";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "account";
                            readonly type: "address";
                        }, {
                            readonly internalType: "UD60x18";
                            readonly name: "fee";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct Broker";
                        readonly name: "broker";
                        readonly type: "tuple";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "totalAmount";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "cancelable";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "transferable";
                        readonly type: "bool";
                    }];
                    readonly internalType: "struct DAOHatsModuleUtils.SablierStreamParams[]";
                    readonly name: "sablierStreamsParams";
                    readonly type: "tuple[]";
                }, {
                    readonly internalType: "uint128";
                    readonly name: "termEndDateTs";
                    readonly type: "uint128";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "maxSupply";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isMutable";
                    readonly type: "bool";
                }];
                readonly internalType: "struct DAOHatsModuleUtils.HatParams[]";
                readonly name: "hats";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct DAOHatsCreationModule.CreateTreeParams";
            readonly name: "treeParams";
            readonly type: "tuple";
        }];
        readonly name: "createAndDeclareTree";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly DAOHatsModificationModule: readonly [{
        readonly inputs: readonly [];
        readonly name: "SALT";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "contract IHats";
                readonly name: "hatsProtocol";
                readonly type: "address";
            }, {
                readonly internalType: "contract IERC6551Registry";
                readonly name: "erc6551Registry";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "hatsAccountImplementation";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "topHatId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "topHatAccount";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "keyValuePairs";
                readonly type: "address";
            }, {
                readonly internalType: "contract IHatsModuleFactory";
                readonly name: "hatsModuleFactory";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "hatsElectionsEligibilityImplementation";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "adminHatId";
                readonly type: "uint256";
            }, {
                readonly components: readonly [{
                    readonly internalType: "address";
                    readonly name: "wearer";
                    readonly type: "address";
                }, {
                    readonly internalType: "string";
                    readonly name: "details";
                    readonly type: "string";
                }, {
                    readonly internalType: "string";
                    readonly name: "imageURI";
                    readonly type: "string";
                }, {
                    readonly components: readonly [{
                        readonly internalType: "contract ISablierV2LockupLinear";
                        readonly name: "sablier";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "sender";
                        readonly type: "address";
                    }, {
                        readonly internalType: "address";
                        readonly name: "asset";
                        readonly type: "address";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "uint40";
                            readonly name: "start";
                            readonly type: "uint40";
                        }, {
                            readonly internalType: "uint40";
                            readonly name: "cliff";
                            readonly type: "uint40";
                        }, {
                            readonly internalType: "uint40";
                            readonly name: "end";
                            readonly type: "uint40";
                        }];
                        readonly internalType: "struct LockupLinear.Timestamps";
                        readonly name: "timestamps";
                        readonly type: "tuple";
                    }, {
                        readonly components: readonly [{
                            readonly internalType: "address";
                            readonly name: "account";
                            readonly type: "address";
                        }, {
                            readonly internalType: "UD60x18";
                            readonly name: "fee";
                            readonly type: "uint256";
                        }];
                        readonly internalType: "struct Broker";
                        readonly name: "broker";
                        readonly type: "tuple";
                    }, {
                        readonly internalType: "uint128";
                        readonly name: "totalAmount";
                        readonly type: "uint128";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "cancelable";
                        readonly type: "bool";
                    }, {
                        readonly internalType: "bool";
                        readonly name: "transferable";
                        readonly type: "bool";
                    }];
                    readonly internalType: "struct DAOHatsModuleUtils.SablierStreamParams[]";
                    readonly name: "sablierStreamsParams";
                    readonly type: "tuple[]";
                }, {
                    readonly internalType: "uint128";
                    readonly name: "termEndDateTs";
                    readonly type: "uint128";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "maxSupply";
                    readonly type: "uint32";
                }, {
                    readonly internalType: "bool";
                    readonly name: "isMutable";
                    readonly type: "bool";
                }];
                readonly internalType: "struct DAOHatsModuleUtils.HatParams[]";
                readonly name: "hats";
                readonly type: "tuple[]";
            }];
            readonly internalType: "struct DAOHatsModuleUtils.CreateRoleHatsParams";
            readonly name: "roleHatsParams";
            readonly type: "tuple";
        }];
        readonly name: "createRoleHats";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly DAOPaymasterV1: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCallData";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidInnerCallDataLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSmartAccount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidUserOpCallDataLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidValidator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes4";
            readonly name: "selector";
            readonly type: "bytes4";
        }];
        readonly name: "NoValidatorSet";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes4";
            readonly name: "selector";
            readonly type: "bytes4";
        }];
        readonly name: "ValidationFailed";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes4";
            readonly name: "selector";
            readonly type: "bytes4";
        }];
        readonly name: "FunctionValidatorRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes4";
            readonly name: "selector";
            readonly type: "bytes4";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "validator";
            readonly type: "address";
        }];
        readonly name: "FunctionValidatorSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "unstakeDelaySec";
            readonly type: "uint32";
        }];
        readonly name: "addStake";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "entryPoint";
        readonly outputs: readonly [{
            readonly internalType: "contract IEntryPoint";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getDeposit";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes4";
            readonly name: "selector";
            readonly type: "bytes4";
        }];
        readonly name: "getFunctionValidator";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVersion";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lightAccountFactory";
        readonly outputs: readonly [{
            readonly internalType: "contract ILightAccountFactory";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "enum IPaymaster.PostOpMode";
            readonly name: "mode";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes";
            readonly name: "context";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "actualGasCost";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "actualUserOpFeePerGas";
            readonly type: "uint256";
        }];
        readonly name: "postOp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes4";
            readonly name: "selector";
            readonly type: "bytes4";
        }];
        readonly name: "removeFunctionValidator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes4";
            readonly name: "selector";
            readonly type: "bytes4";
        }, {
            readonly internalType: "address";
            readonly name: "validator";
            readonly type: "address";
        }];
        readonly name: "setFunctionValidator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unlockStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "nonce";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "initCode";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes32";
                readonly name: "accountGasLimits";
                readonly type: "bytes32";
            }, {
                readonly internalType: "uint256";
                readonly name: "preVerificationGas";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes32";
                readonly name: "gasFees";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes";
                readonly name: "paymasterAndData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bytes";
                readonly name: "signature";
                readonly type: "bytes";
            }];
            readonly internalType: "struct PackedUserOperation";
            readonly name: "userOp";
            readonly type: "tuple";
        }, {
            readonly internalType: "bytes32";
            readonly name: "userOpHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxCost";
            readonly type: "uint256";
        }];
        readonly name: "validatePaymasterUserOp";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "context";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "validationData";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "withdrawAddress";
            readonly type: "address";
        }];
        readonly name: "withdrawStake";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "withdrawAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdrawTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly DAOSablierStreamManagementModule: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ISablierV2Lockup";
            readonly name: "sablier";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "streamId";
            readonly type: "uint256";
        }];
        readonly name: "cancelStream";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ISablierV2Lockup";
            readonly name: "sablier";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "recipientHatAccount";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "streamId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "withdrawMaxFromStream";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly ERC20Claim: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "AllocationClaimed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DeadlinePending";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoAllocation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoDeadline";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotTheFunder";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "parentToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "childToken";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "parentAllocation";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "snapshotId";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "ERC20ClaimCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "pToken";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "cToken";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "claimer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "ERC20Claimed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "childERC20";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "claimer";
            readonly type: "address";
        }];
        readonly name: "claimTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "claimed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "deadlineBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "funder";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "claimer";
            readonly type: "address";
        }];
        readonly name: "getClaimAmount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "parentAllocation";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "parentERC20";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "reclaim";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "snapShotId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly ERC20FreezeVoting: readonly [{
        readonly inputs: readonly [];
        readonly name: "AlreadyVoted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoVotes";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "votesERC20";
            readonly type: "address";
        }];
        readonly name: "ERC20FreezeVotingSetUp";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "freezePeriod";
            readonly type: "uint32";
        }];
        readonly name: "FreezePeriodUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "creator";
            readonly type: "address";
        }];
        readonly name: "FreezeProposalCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "freezeProposalPeriod";
            readonly type: "uint32";
        }];
        readonly name: "FreezeProposalPeriodUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "votesCast";
            readonly type: "uint256";
        }];
        readonly name: "FreezeVoteCast";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "freezeVotesThreshold";
            readonly type: "uint256";
        }];
        readonly name: "FreezeVotesThresholdUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "castFreezeVote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezePeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezeProposalCreatedBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezeProposalPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezeProposalVoteCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezeVotesThreshold";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "isFrozen";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unfreeze";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_freezePeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateFreezePeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_freezeProposalPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateFreezeProposalPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_freezeVotesThreshold";
            readonly type: "uint256";
        }];
        readonly name: "updateFreezeVotesThreshold";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "userHasFreezeVoted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "votesERC20";
        readonly outputs: readonly [{
            readonly internalType: "contract IVotes";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    readonly ERC721FreezeVoting: readonly [{
        readonly inputs: readonly [];
        readonly name: "NoVotes";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotSupported";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "UnequalArrays";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "strategy";
            readonly type: "address";
        }];
        readonly name: "ERC721FreezeVotingSetUp";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "freezePeriod";
            readonly type: "uint32";
        }];
        readonly name: "FreezePeriodUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "creator";
            readonly type: "address";
        }];
        readonly name: "FreezeProposalCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "freezeProposalPeriod";
            readonly type: "uint32";
        }];
        readonly name: "FreezeProposalPeriodUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "votesCast";
            readonly type: "uint256";
        }];
        readonly name: "FreezeVoteCast";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "freezeVotesThreshold";
            readonly type: "uint256";
        }];
        readonly name: "FreezeVotesThresholdUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_tokenAddresses";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_tokenIds";
            readonly type: "uint256[]";
        }];
        readonly name: "castFreezeVote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "castFreezeVote";
        readonly outputs: readonly [];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezePeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezeProposalCreatedBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezeProposalPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezeProposalVoteCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezeVotesThreshold";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "idHasFreezeVoted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "isFrozen";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "strategy";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC721VotingStrategy";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unfreeze";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_freezePeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateFreezePeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_freezeProposalPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateFreezeProposalPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_freezeVotesThreshold";
            readonly type: "uint256";
        }];
        readonly name: "updateFreezeVotesThreshold";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "userHasFreezeVoted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    readonly FractalModule: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "guard_";
            readonly type: "address";
        }];
        readonly name: "NotIERC165Compliant";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TxFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Unauthorized";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousAvatar";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newAvatar";
            readonly type: "address";
        }];
        readonly name: "AvatarSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "guard";
            readonly type: "address";
        }];
        readonly name: "ChangedGuard";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "controllers";
            readonly type: "address[]";
        }];
        readonly name: "ControllersAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "controllers";
            readonly type: "address[]";
        }];
        readonly name: "ControllersRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousTarget";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newTarget";
            readonly type: "address";
        }];
        readonly name: "TargetSet";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_controllers";
            readonly type: "address[]";
        }];
        readonly name: "addControllers";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "avatar";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "controllers";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "execTxData";
            readonly type: "bytes";
        }];
        readonly name: "execTx";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getGuard";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "_guard";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "guard";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "_controllers";
            readonly type: "address[]";
        }];
        readonly name: "removeControllers";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_avatar";
            readonly type: "address";
        }];
        readonly name: "setAvatar";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_guard";
            readonly type: "address";
        }];
        readonly name: "setGuard";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_target";
            readonly type: "address";
        }];
        readonly name: "setTarget";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "target";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly KeyValuePairs: readonly [{
        readonly inputs: readonly [];
        readonly name: "IncorrectValueCount";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "theAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "value";
            readonly type: "string";
        }];
        readonly name: "ValueUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "_keys";
            readonly type: "string[]";
        }, {
            readonly internalType: "string[]";
            readonly name: "_values";
            readonly type: "string[]";
        }];
        readonly name: "updateValues";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly LinearERC20Voting: readonly [{
        readonly inputs: readonly [];
        readonly name: "AlreadyVoted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidBasisNumerator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidProposal";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidQuorumNumerator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTokenAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidVote";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlyAzorius";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "VotingEnded";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }];
        readonly name: "AzoriusSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "BasisNumeratorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingEndBlock";
            readonly type: "uint32";
        }];
        readonly name: "ProposalInitialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "quorumNumerator";
            readonly type: "uint256";
        }];
        readonly name: "QuorumNumeratorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "requiredProposerWeight";
            readonly type: "uint256";
        }];
        readonly name: "RequiredProposerWeightUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "StrategySetUp";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "voteType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "weight";
            readonly type: "uint256";
        }];
        readonly name: "Voted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "VotingPeriodUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BASIS_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "QUORUM_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "azoriusModule";
        readonly outputs: readonly [{
            readonly internalType: "contract IAzorius";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "basisNumerator";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "noVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "abstainVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "startBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "endBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "votingSupply";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalVotingSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_voter";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getVotingWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "governanceToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IVotes";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "hasVoted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "initializeProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "isPassed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "isProposer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_noVotes";
            readonly type: "uint256";
        }];
        readonly name: "meetsBasis";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_totalSupply";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_abstainVotes";
            readonly type: "uint256";
        }];
        readonly name: "meetsQuorum";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "quorumNumerator";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "quorumVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "requiredProposerWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_azoriusModule";
            readonly type: "address";
        }];
        readonly name: "setAzorius";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "updateBasisNumerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_quorumNumerator";
            readonly type: "uint256";
        }];
        readonly name: "updateQuorumNumerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_requiredProposerWeight";
            readonly type: "uint256";
        }];
        readonly name: "updateRequiredProposerWeight";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateVotingPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_voteType";
            readonly type: "uint8";
        }];
        readonly name: "vote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "votingEndBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "votingPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    readonly LinearERC20VotingV1: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "AlreadyVoted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidBasisNumerator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCallData";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidInnerCallDataLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidProposal";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidQuorumNumerator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSmartAccount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTokenAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidUserOpCallDataLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidVote";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlyAzorius";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "VotingEnded";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }];
        readonly name: "AzoriusSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "BasisNumeratorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingEndBlock";
            readonly type: "uint32";
        }];
        readonly name: "ProposalInitialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "quorumNumerator";
            readonly type: "uint256";
        }];
        readonly name: "QuorumNumeratorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "requiredProposerWeight";
            readonly type: "uint256";
        }];
        readonly name: "RequiredProposerWeightUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "StrategySetUp";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "voteType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "weight";
            readonly type: "uint256";
        }];
        readonly name: "Voted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "votingEndBlock";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }];
        readonly name: "VotingPeriodEnded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "VotingPeriodUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BASIS_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "QUORUM_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "azoriusModule";
        readonly outputs: readonly [{
            readonly internalType: "contract IAzorius";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "basisNumerator";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "noVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "abstainVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "startBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "endBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "votingSupply";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalVotingSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVersion";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_voter";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getVotingWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "governanceToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IVotes";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "hasVoted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "initializeProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "isPassed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "isProposer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lightAccountFactory";
        readonly outputs: readonly [{
            readonly internalType: "contract ILightAccountFactory";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_noVotes";
            readonly type: "uint256";
        }];
        readonly name: "meetsBasis";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_totalSupply";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_abstainVotes";
            readonly type: "uint256";
        }];
        readonly name: "meetsQuorum";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "quorumNumerator";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "quorumVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "requiredProposerWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_azoriusModule";
            readonly type: "address";
        }];
        readonly name: "setAzorius";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "updateBasisNumerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_quorumNumerator";
            readonly type: "uint256";
        }];
        readonly name: "updateQuorumNumerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_requiredProposerWeight";
            readonly type: "uint256";
        }];
        readonly name: "updateRequiredProposerWeight";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateVotingPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_voteType";
            readonly type: "uint8";
        }];
        readonly name: "vote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "votingEndBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "votingPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "votingPeriodEnded";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    readonly LinearERC20VotingV1ValidatorV1: readonly [{
        readonly inputs: readonly [];
        readonly name: "VERSION";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVersion";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "lightAccountOwner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "votingContract";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }];
        readonly name: "validateOperation";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    readonly LinearERC20VotingWithHatsProposalCreation: readonly [{
        readonly inputs: readonly [];
        readonly name: "AlreadyVoted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HatAlreadyWhitelisted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HatNotWhitelisted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidBasisNumerator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidHatsContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidProposal";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidQuorumNumerator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTokenAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidVote";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoHatsWhitelisted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlyAzorius";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "VotingEnded";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }];
        readonly name: "AzoriusSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "BasisNumeratorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "hatId";
            readonly type: "uint256";
        }];
        readonly name: "HatRemovedFromWhitelist";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "hatId";
            readonly type: "uint256";
        }];
        readonly name: "HatWhitelisted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingEndBlock";
            readonly type: "uint32";
        }];
        readonly name: "ProposalInitialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "quorumNumerator";
            readonly type: "uint256";
        }];
        readonly name: "QuorumNumeratorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "requiredProposerWeight";
            readonly type: "uint256";
        }];
        readonly name: "RequiredProposerWeightUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "StrategySetUp";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "voteType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "weight";
            readonly type: "uint256";
        }];
        readonly name: "Voted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "VotingPeriodUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BASIS_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "QUORUM_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "azoriusModule";
        readonly outputs: readonly [{
            readonly internalType: "contract IAzorius";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "basisNumerator";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "noVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "abstainVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "startBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "endBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "votingSupply";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalVotingSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_voter";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getVotingWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getWhitelistedHatIds";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "governanceToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IVotes";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "hasVoted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "hatsContract";
        readonly outputs: readonly [{
            readonly internalType: "contract IHats";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "initializeProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "isPassed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "isProposer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_noVotes";
            readonly type: "uint256";
        }];
        readonly name: "meetsBasis";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_totalSupply";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_abstainVotes";
            readonly type: "uint256";
        }];
        readonly name: "meetsQuorum";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "quorumNumerator";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "quorumVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_hatId";
            readonly type: "uint256";
        }];
        readonly name: "removeHatFromWhitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "requiredProposerWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_azoriusModule";
            readonly type: "address";
        }];
        readonly name: "setAzorius";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "updateBasisNumerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_quorumNumerator";
            readonly type: "uint256";
        }];
        readonly name: "updateQuorumNumerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_requiredProposerWeight";
            readonly type: "uint256";
        }];
        readonly name: "updateRequiredProposerWeight";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateVotingPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_voteType";
            readonly type: "uint8";
        }];
        readonly name: "vote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "votingEndBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "votingPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_hatId";
            readonly type: "uint256";
        }];
        readonly name: "whitelistHat";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly LinearERC20VotingWithHatsProposalCreationV1: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "AlreadyVoted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HatAlreadyWhitelisted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HatNotWhitelisted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidBasisNumerator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCallData";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidInnerCallDataLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidProposal";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidQuorumNumerator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSmartAccount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTokenAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidUserOpCallDataLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidVote";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MissingHatsContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoHatsWhitelisted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlyAzorius";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "VotingEnded";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }];
        readonly name: "AzoriusSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "BasisNumeratorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "hatId";
            readonly type: "uint256";
        }];
        readonly name: "HatUnwhitelisted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "hatId";
            readonly type: "uint256";
        }];
        readonly name: "HatWhitelisted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingEndBlock";
            readonly type: "uint32";
        }];
        readonly name: "ProposalInitialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "quorumNumerator";
            readonly type: "uint256";
        }];
        readonly name: "QuorumNumeratorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "requiredProposerWeight";
            readonly type: "uint256";
        }];
        readonly name: "RequiredProposerWeightUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "StrategySetUp";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "voteType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "weight";
            readonly type: "uint256";
        }];
        readonly name: "Voted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "votingEndBlock";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }];
        readonly name: "VotingPeriodEnded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "VotingPeriodUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BASIS_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "QUORUM_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "azoriusModule";
        readonly outputs: readonly [{
            readonly internalType: "contract IAzorius";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "basisNumerator";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "noVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "abstainVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "startBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "endBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "votingSupply";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalVotingSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVersion";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_voter";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getVotingWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getWhitelistedHatIds";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "governanceToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IVotes";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "hasVoted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "hatsContract";
        readonly outputs: readonly [{
            readonly internalType: "contract IHats";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "initializeProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "isPassed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "isProposer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "isWearingWhitelistedHat";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lightAccountFactory";
        readonly outputs: readonly [{
            readonly internalType: "contract ILightAccountFactory";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_noVotes";
            readonly type: "uint256";
        }];
        readonly name: "meetsBasis";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_totalSupply";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_abstainVotes";
            readonly type: "uint256";
        }];
        readonly name: "meetsQuorum";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "quorumNumerator";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "quorumVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "requiredProposerWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_azoriusModule";
            readonly type: "address";
        }];
        readonly name: "setAzorius";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_hatId";
            readonly type: "uint256";
        }];
        readonly name: "unwhitelistHat";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "updateBasisNumerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_quorumNumerator";
            readonly type: "uint256";
        }];
        readonly name: "updateQuorumNumerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_requiredProposerWeight";
            readonly type: "uint256";
        }];
        readonly name: "updateRequiredProposerWeight";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateVotingPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_voteType";
            readonly type: "uint8";
        }];
        readonly name: "vote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "votingEndBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "votingPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "votingPeriodEnded";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_hatId";
            readonly type: "uint256";
        }];
        readonly name: "whitelistHat";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly LinearERC20WrappedVoting: readonly [{
        readonly inputs: readonly [];
        readonly name: "AlreadyVoted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidBasisNumerator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidProposal";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidQuorumNumerator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTokenAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidVote";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlyAzorius";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "VotingEnded";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }];
        readonly name: "AzoriusSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "BasisNumeratorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingEndBlock";
            readonly type: "uint32";
        }];
        readonly name: "ProposalInitialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "quorumNumerator";
            readonly type: "uint256";
        }];
        readonly name: "QuorumNumeratorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "requiredProposerWeight";
            readonly type: "uint256";
        }];
        readonly name: "RequiredProposerWeightUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "StrategySetUp";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "voteType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "weight";
            readonly type: "uint256";
        }];
        readonly name: "Voted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "VotingPeriodUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BASIS_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "QUORUM_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "azoriusModule";
        readonly outputs: readonly [{
            readonly internalType: "contract IAzorius";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "basisNumerator";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "noVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "abstainVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "startBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "endBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "votingSupply";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalVotingSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_voter";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getVotingWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "governanceToken";
        readonly outputs: readonly [{
            readonly internalType: "contract IVotes";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "hasVoted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "initializeProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "isPassed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "isProposer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_noVotes";
            readonly type: "uint256";
        }];
        readonly name: "meetsBasis";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_totalSupply";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_abstainVotes";
            readonly type: "uint256";
        }];
        readonly name: "meetsQuorum";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "quorumNumerator";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "quorumVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "requiredProposerWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_azoriusModule";
            readonly type: "address";
        }];
        readonly name: "setAzorius";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "updateBasisNumerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_quorumNumerator";
            readonly type: "uint256";
        }];
        readonly name: "updateQuorumNumerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_requiredProposerWeight";
            readonly type: "uint256";
        }];
        readonly name: "updateRequiredProposerWeight";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateVotingPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_voteType";
            readonly type: "uint8";
        }];
        readonly name: "vote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "votingEndBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "votingPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    readonly LinearERC721Voting: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "IdAlreadyVoted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "IdNotOwned";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidBasisNumerator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidParams";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidProposal";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTokenAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidVote";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoVotingWeight";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlyAzorius";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TokenAlreadySet";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TokenNotSet";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "VotingEnded";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }];
        readonly name: "AzoriusSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "BasisNumeratorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "weight";
            readonly type: "uint256";
        }];
        readonly name: "GovernanceTokenAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "GovernanceTokenRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingEndBlock";
            readonly type: "uint32";
        }];
        readonly name: "ProposalInitialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "proposerThreshold";
            readonly type: "uint256";
        }];
        readonly name: "ProposerThresholdUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "quorumThreshold";
            readonly type: "uint256";
        }];
        readonly name: "QuorumThresholdUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "StrategySetUp";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "voteType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "tokenAddresses";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "tokenIds";
            readonly type: "uint256[]";
        }];
        readonly name: "Voted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "VotingPeriodUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BASIS_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_weight";
            readonly type: "uint256";
        }];
        readonly name: "addGovernanceToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "azoriusModule";
        readonly outputs: readonly [{
            readonly internalType: "contract IAzorius";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "basisNumerator";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAllTokenAddresses";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "noVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "abstainVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "startBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "endBlock";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }];
        readonly name: "getTokenWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_tokenId";
            readonly type: "uint256";
        }];
        readonly name: "hasVoted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "initializeProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "isPassed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "isProposer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_noVotes";
            readonly type: "uint256";
        }];
        readonly name: "meetsBasis";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "proposalVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "votingStartBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "votingEndBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "noVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "abstainVotes";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proposerThreshold";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "quorumThreshold";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }];
        readonly name: "removeGovernanceToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_azoriusModule";
            readonly type: "address";
        }];
        readonly name: "setAzorius";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "tokenAddresses";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "tokenWeights";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "updateBasisNumerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_proposerThreshold";
            readonly type: "uint256";
        }];
        readonly name: "updateProposerThreshold";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_quorumThreshold";
            readonly type: "uint256";
        }];
        readonly name: "updateQuorumThreshold";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateVotingPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_voteType";
            readonly type: "uint8";
        }, {
            readonly internalType: "address[]";
            readonly name: "_tokenAddresses";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_tokenIds";
            readonly type: "uint256[]";
        }];
        readonly name: "vote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "votingEndBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "votingPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    readonly LinearERC721VotingV1: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "IdAlreadyVoted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "IdNotOwned";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidBasisNumerator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCallData";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidInnerCallDataLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidParams";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidProposal";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSmartAccount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTokenAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidUserOpCallDataLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidVote";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoVotingWeight";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlyAzorius";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TokenAlreadySet";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TokenNotSet";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "VotingEnded";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }];
        readonly name: "AzoriusSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "BasisNumeratorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "weight";
            readonly type: "uint256";
        }];
        readonly name: "GovernanceTokenAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "GovernanceTokenRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingEndBlock";
            readonly type: "uint32";
        }];
        readonly name: "ProposalInitialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "proposerThreshold";
            readonly type: "uint256";
        }];
        readonly name: "ProposerThresholdUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "quorumThreshold";
            readonly type: "uint256";
        }];
        readonly name: "QuorumThresholdUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "StrategySetUp";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "voteType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "tokenAddresses";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "tokenIds";
            readonly type: "uint256[]";
        }];
        readonly name: "Voted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "votingEndBlock";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }];
        readonly name: "VotingPeriodEnded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "VotingPeriodUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BASIS_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_weight";
            readonly type: "uint256";
        }];
        readonly name: "addGovernanceToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "azoriusModule";
        readonly outputs: readonly [{
            readonly internalType: "contract IAzorius";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "basisNumerator";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAllTokenAddresses";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "noVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "abstainVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "startBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "endBlock";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }];
        readonly name: "getTokenWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVersion";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_tokenId";
            readonly type: "uint256";
        }];
        readonly name: "hasVoted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "initializeProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "isPassed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "isProposer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lightAccountFactory";
        readonly outputs: readonly [{
            readonly internalType: "contract ILightAccountFactory";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_noVotes";
            readonly type: "uint256";
        }];
        readonly name: "meetsBasis";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "proposalVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "votingStartBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "votingEndBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "noVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "abstainVotes";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proposerThreshold";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "quorumThreshold";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }];
        readonly name: "removeGovernanceToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_azoriusModule";
            readonly type: "address";
        }];
        readonly name: "setAzorius";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "tokenAddresses";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "tokenWeights";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "updateBasisNumerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_proposerThreshold";
            readonly type: "uint256";
        }];
        readonly name: "updateProposerThreshold";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_quorumThreshold";
            readonly type: "uint256";
        }];
        readonly name: "updateQuorumThreshold";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateVotingPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_voteType";
            readonly type: "uint8";
        }, {
            readonly internalType: "address[]";
            readonly name: "_tokenAddresses";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_tokenIds";
            readonly type: "uint256[]";
        }];
        readonly name: "vote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "votingEndBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "votingPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "votingPeriodEnded";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    readonly LinearERC721VotingV1ValidatorV1: readonly [{
        readonly inputs: readonly [];
        readonly name: "VERSION";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVersion";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "lightAccountOwner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "votingContract";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }];
        readonly name: "validateOperation";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    readonly LinearERC721VotingWithHatsProposalCreation: readonly [{
        readonly inputs: readonly [];
        readonly name: "HatAlreadyWhitelisted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HatNotWhitelisted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "IdAlreadyVoted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "IdNotOwned";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidBasisNumerator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidHatsContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidParams";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidProposal";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTokenAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidVote";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoHatsWhitelisted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoVotingWeight";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlyAzorius";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TokenAlreadySet";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TokenNotSet";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "VotingEnded";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }];
        readonly name: "AzoriusSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "BasisNumeratorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "weight";
            readonly type: "uint256";
        }];
        readonly name: "GovernanceTokenAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "GovernanceTokenRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "hatId";
            readonly type: "uint256";
        }];
        readonly name: "HatRemovedFromWhitelist";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "hatId";
            readonly type: "uint256";
        }];
        readonly name: "HatWhitelisted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingEndBlock";
            readonly type: "uint32";
        }];
        readonly name: "ProposalInitialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "proposerThreshold";
            readonly type: "uint256";
        }];
        readonly name: "ProposerThresholdUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "quorumThreshold";
            readonly type: "uint256";
        }];
        readonly name: "QuorumThresholdUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "StrategySetUp";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "voteType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "tokenAddresses";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "tokenIds";
            readonly type: "uint256[]";
        }];
        readonly name: "Voted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "VotingPeriodUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BASIS_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_weight";
            readonly type: "uint256";
        }];
        readonly name: "addGovernanceToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "azoriusModule";
        readonly outputs: readonly [{
            readonly internalType: "contract IAzorius";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "basisNumerator";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAllTokenAddresses";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "noVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "abstainVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "startBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "endBlock";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }];
        readonly name: "getTokenWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getWhitelistedHatIds";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_tokenId";
            readonly type: "uint256";
        }];
        readonly name: "hasVoted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "hatsContract";
        readonly outputs: readonly [{
            readonly internalType: "contract IHats";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "initializeProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "isPassed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "isProposer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_noVotes";
            readonly type: "uint256";
        }];
        readonly name: "meetsBasis";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "proposalVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "votingStartBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "votingEndBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "noVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "abstainVotes";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proposerThreshold";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "quorumThreshold";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }];
        readonly name: "removeGovernanceToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_hatId";
            readonly type: "uint256";
        }];
        readonly name: "removeHatFromWhitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_azoriusModule";
            readonly type: "address";
        }];
        readonly name: "setAzorius";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "tokenAddresses";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "tokenWeights";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "updateBasisNumerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_proposerThreshold";
            readonly type: "uint256";
        }];
        readonly name: "updateProposerThreshold";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_quorumThreshold";
            readonly type: "uint256";
        }];
        readonly name: "updateQuorumThreshold";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateVotingPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_voteType";
            readonly type: "uint8";
        }, {
            readonly internalType: "address[]";
            readonly name: "_tokenAddresses";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_tokenIds";
            readonly type: "uint256[]";
        }];
        readonly name: "vote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "votingEndBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "votingPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_hatId";
            readonly type: "uint256";
        }];
        readonly name: "whitelistHat";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly LinearERC721VotingWithHatsProposalCreationV1: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "HatAlreadyWhitelisted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "HatNotWhitelisted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "IdAlreadyVoted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "tokenId";
            readonly type: "uint256";
        }];
        readonly name: "IdNotOwned";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidBasisNumerator";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidCallData";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidInnerCallDataLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidParams";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidProposal";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidSmartAccount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidTokenAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidUserOpCallDataLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidVote";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "MissingHatsContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoHatsWhitelisted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoVotingWeight";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "OnlyAzorius";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TokenAlreadySet";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "TokenNotSet";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "VotingEnded";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }];
        readonly name: "AzoriusSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "BasisNumeratorUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "weight";
            readonly type: "uint256";
        }];
        readonly name: "GovernanceTokenAdded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "GovernanceTokenRemoved";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "hatId";
            readonly type: "uint256";
        }];
        readonly name: "HatUnwhitelisted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "hatId";
            readonly type: "uint256";
        }];
        readonly name: "HatWhitelisted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingEndBlock";
            readonly type: "uint32";
        }];
        readonly name: "ProposalInitialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "proposerThreshold";
            readonly type: "uint256";
        }];
        readonly name: "ProposerThresholdUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "quorumThreshold";
            readonly type: "uint256";
        }];
        readonly name: "QuorumThresholdUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "azoriusModule";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "StrategySetUp";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "voteType";
            readonly type: "uint8";
        }, {
            readonly indexed: false;
            readonly internalType: "address[]";
            readonly name: "tokenAddresses";
            readonly type: "address[]";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256[]";
            readonly name: "tokenIds";
            readonly type: "uint256[]";
        }];
        readonly name: "Voted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint32";
            readonly name: "proposalId";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "votingEndBlock";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "currentBlock";
            readonly type: "uint256";
        }];
        readonly name: "VotingPeriodEnded";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "VotingPeriodUpdated";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "BASIS_DENOMINATOR";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_weight";
            readonly type: "uint256";
        }];
        readonly name: "addGovernanceToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "azoriusModule";
        readonly outputs: readonly [{
            readonly internalType: "contract IAzorius";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "basisNumerator";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAllTokenAddresses";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "getProposalVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "noVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "abstainVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "startBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "endBlock";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }];
        readonly name: "getTokenWeight";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVersion";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getWhitelistedHatIds";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_tokenId";
            readonly type: "uint256";
        }];
        readonly name: "hasVoted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "hatsContract";
        readonly outputs: readonly [{
            readonly internalType: "contract IHats";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "initializeProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "isPassed";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "isProposer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_address";
            readonly type: "address";
        }];
        readonly name: "isWearingWhitelistedHat";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "lightAccountFactory";
        readonly outputs: readonly [{
            readonly internalType: "contract ILightAccountFactory";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_noVotes";
            readonly type: "uint256";
        }];
        readonly name: "meetsBasis";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "proposalVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "votingStartBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "votingEndBlock";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint256";
            readonly name: "noVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "yesVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "abstainVotes";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proposerThreshold";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "quorumThreshold";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_tokenAddress";
            readonly type: "address";
        }];
        readonly name: "removeGovernanceToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_azoriusModule";
            readonly type: "address";
        }];
        readonly name: "setAzorius";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "tokenAddresses";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "tokenWeights";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_hatId";
            readonly type: "uint256";
        }];
        readonly name: "unwhitelistHat";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_basisNumerator";
            readonly type: "uint256";
        }];
        readonly name: "updateBasisNumerator";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_proposerThreshold";
            readonly type: "uint256";
        }];
        readonly name: "updateProposerThreshold";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_quorumThreshold";
            readonly type: "uint256";
        }];
        readonly name: "updateQuorumThreshold";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_votingPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateVotingPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint8";
            readonly name: "_voteType";
            readonly type: "uint8";
        }, {
            readonly internalType: "address[]";
            readonly name: "_tokenAddresses";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "_tokenIds";
            readonly type: "uint256[]";
        }];
        readonly name: "vote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "votingEndBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "votingPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_proposalId";
            readonly type: "uint32";
        }];
        readonly name: "votingPeriodEnded";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_hatId";
            readonly type: "uint256";
        }];
        readonly name: "whitelistHat";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly MultisigFreezeGuard: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "AlreadyTimelocked";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "DAOFrozen";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Expired";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotTimelocked";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Timelocked";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "executionPeriod";
            readonly type: "uint32";
        }];
        readonly name: "ExecutionPeriodUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "creator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "freezeVoting";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "childGnosisSafe";
            readonly type: "address";
        }];
        readonly name: "MultisigFreezeGuardSetup";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "timelockPeriod";
            readonly type: "uint32";
        }];
        readonly name: "TimelockPeriodUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "timelocker";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes";
            readonly name: "signatures";
            readonly type: "bytes";
        }];
        readonly name: "TransactionTimelocked";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly name: "checkAfterExecution";
        readonly outputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }, {
            readonly internalType: "enum Enum.Operation";
            readonly name: "";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "signatures";
            readonly type: "bytes";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "checkTransaction";
        readonly outputs: readonly [];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "childGnosisSafe";
        readonly outputs: readonly [{
            readonly internalType: "contract ISafe";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "executionPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezeVoting";
        readonly outputs: readonly [{
            readonly internalType: "contract IBaseFreezeVoting";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_signaturesHash";
            readonly type: "bytes32";
        }];
        readonly name: "getTransactionTimelockedBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "timelockPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "enum Enum.Operation";
            readonly name: "operation";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "safeTxGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "baseGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasPrice";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "gasToken";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "refundReceiver";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "signatures";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }];
        readonly name: "timelockTransaction";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_executionPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateExecutionPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_timelockPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateTimelockPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly MultisigFreezeVoting: readonly [{
        readonly inputs: readonly [];
        readonly name: "AlreadyVoted";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotOwner";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "freezePeriod";
            readonly type: "uint32";
        }];
        readonly name: "FreezePeriodUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "creator";
            readonly type: "address";
        }];
        readonly name: "FreezeProposalCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "freezeProposalPeriod";
            readonly type: "uint32";
        }];
        readonly name: "FreezeProposalPeriodUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "votesCast";
            readonly type: "uint256";
        }];
        readonly name: "FreezeVoteCast";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "freezeVotesThreshold";
            readonly type: "uint256";
        }];
        readonly name: "FreezeVotesThresholdUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "parentGnosisSafe";
            readonly type: "address";
        }];
        readonly name: "MultisigFreezeVotingSetup";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "castFreezeVote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezePeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezeProposalCreatedBlock";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezeProposalPeriod";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezeProposalVoteCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "freezeVotesThreshold";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "isFrozen";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "parentGnosisSafe";
        readonly outputs: readonly [{
            readonly internalType: "contract ISafe";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "unfreeze";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_freezePeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateFreezePeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_freezeProposalPeriod";
            readonly type: "uint32";
        }];
        readonly name: "updateFreezeProposalPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_freezeVotesThreshold";
            readonly type: "uint256";
        }];
        readonly name: "updateFreezeVotesThreshold";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "userHasFreezeVoted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    readonly VotesERC20: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "fromDelegate";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "toDelegate";
            readonly type: "address";
        }];
        readonly name: "DelegateChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegate";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "previousBalance";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newBalance";
            readonly type: "uint256";
        }];
        readonly name: "DelegateVotesChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "Snapshot";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "snapshotId";
            readonly type: "uint256";
        }];
        readonly name: "balanceOfAt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "captureSnapShot";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "snapId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "pos";
            readonly type: "uint32";
        }];
        readonly name: "checkpoints";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "fromBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint224";
                readonly name: "votes";
                readonly type: "uint224";
            }];
            readonly internalType: "struct ERC20VotesUpgradeable.Checkpoint";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
        }];
        readonly name: "delegate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "expiry";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "delegateBySig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "delegates";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }];
        readonly name: "getPastTotalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }];
        readonly name: "getPastVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "nonces";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "numCheckpoints";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "snapshotId";
            readonly type: "uint256";
        }];
        readonly name: "totalSupplyAt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    readonly VotesERC20LockableV1: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "newLockState";
            readonly type: "bool";
        }];
        readonly name: "CannotSwitchLockState";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "IsLocked";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "fromDelegate";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "toDelegate";
            readonly type: "address";
        }];
        readonly name: "DelegateChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegate";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "previousBalance";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newBalance";
            readonly type: "uint256";
        }];
        readonly name: "DelegateVotesChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isLocked";
            readonly type: "bool";
        }];
        readonly name: "Locked";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "Snapshot";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "isWhitelisted";
            readonly type: "bool";
        }];
        readonly name: "Whitelisted";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "snapshotId";
            readonly type: "uint256";
        }];
        readonly name: "balanceOfAt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "captureSnapShot";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "snapId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "pos";
            readonly type: "uint32";
        }];
        readonly name: "checkpoints";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "fromBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint224";
                readonly name: "votes";
                readonly type: "uint224";
            }];
            readonly internalType: "struct ERC20VotesUpgradeable.Checkpoint";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
        }];
        readonly name: "delegate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "expiry";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "delegateBySig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "delegates";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }];
        readonly name: "getPastTotalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }];
        readonly name: "getPastVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getVersion";
        readonly outputs: readonly [{
            readonly internalType: "uint16";
            readonly name: "";
            readonly type: "uint16";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "_locked";
            readonly type: "bool";
        }];
        readonly name: "lock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "locked";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "nonces";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "numCheckpoints";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "snapshotId";
            readonly type: "uint256";
        }];
        readonly name: "totalSupplyAt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "isWhitelisted";
            readonly type: "bool";
        }];
        readonly name: "whitelist";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "whitelisted";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    readonly VotesERC20Wrapper: readonly [{
        readonly inputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegator";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "fromDelegate";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "toDelegate";
            readonly type: "address";
        }];
        readonly name: "DelegateChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "delegate";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "previousBalance";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newBalance";
            readonly type: "uint256";
        }];
        readonly name: "DelegateVotesChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "Snapshot";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "snapshotId";
            readonly type: "uint256";
        }];
        readonly name: "balanceOfAt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "captureSnapShot";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "snapId";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "pos";
            readonly type: "uint32";
        }];
        readonly name: "checkpoints";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "fromBlock";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint224";
                readonly name: "votes";
                readonly type: "uint224";
            }];
            readonly internalType: "struct ERC20VotesUpgradeable.Checkpoint";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
        }];
        readonly name: "delegate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "expiry";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "delegateBySig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "delegates";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "depositFor";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }];
        readonly name: "getPastTotalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "blockNumber";
            readonly type: "uint256";
        }];
        readonly name: "getPastVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getVotes";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "nonces";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "numCheckpoints";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initializeParams";
            readonly type: "bytes";
        }];
        readonly name: "setUp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "snapshotId";
            readonly type: "uint256";
        }];
        readonly name: "totalSupplyAt";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "underlying";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdrawTo";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
};
export default _default;
