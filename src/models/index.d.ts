import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class UserDataModel {
  readonly id: string;
  readonly username?: string;
  readonly userCompany?: string;
  readonly userCellNumber?: string;
  readonly userEmail?: string;
  readonly userLastLogin?: number;
  constructor(init: ModelInit<UserDataModel>);
  static copyOf(source: UserDataModel, mutator: (draft: MutableModel<UserDataModel>) => MutableModel<UserDataModel> | void): UserDataModel;
}