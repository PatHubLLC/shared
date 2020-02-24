import { ITransaction } from './transaction';

export interface IUsptoApplicant {
  name: string;
  city: string;
  state: string;
  country: string;
  type: string;
}
export interface IUsptoData {
  publicationNumber: string;
  applicationNumber: string;
  title: string;
  applicant?: IUsptoApplicant;
  assignee?: string;
  abstract?: string;
  filedDate?: string;
}

// https://globaldossier.uspto.gov/#/result/application/US/15473454/95137
export interface IDossierApplicationPreview {
  appNum: string;
  appDate: number;
  pubList: any;
  countryCode: string;
  docList: any[];
  kindCode: string;
  priorityClaimList: any[];
  appDateStr: string;
  docListMsg: any;
  docNum: {
    country: string;
    docNumber: string;
    format: string;
    date: string;
    kindCode: string;
  };
  title: any;
  applicantNames: any;
  ip5: boolean;
}

export interface IDossierResult {
  country: string;
  internal: string;
  corrAppNum: string;
  id: string;
  type: string;
  list: IDossierApplicationPreview[];
}

export interface IDossierDoc {
  docCode: string;
  docDesc: string;
  docId: string;
  legalDate: number;
  docFormat: string;
  numberOfPages: number;
  docCodeDesc: string;
  docGroupCode: string;
  legalDateStr: string;
  shareable: boolean;
}

export interface IDossierApplication {
  title: string;
  docs: IDossierDoc[];
  country: string;
  docNumber: string;
  message: any;
  applicantNames: string[];
  oaIndCount: number;
  officeActionDocs: IDossierDoc[];
}

export interface IApplication {
  Transactions: ITransaction[];
  applId: string;
  createdAt: string;
  id: number;
  title: string;
  filingDate: string;

  usptoData: IUsptoData;

  typeCategory?: string;
  examiner?: string;
  applicant?: string;
  inventor?: string;
  practitioner?: string;
  identifier?: string;
  groupArtUnitNumber?: string;
  confirmationNumber?: string;
  applicantFileReference?: string;
  priorityClaim?: string;
  patentClassification?: string;
  businessEntityStatusCategory?: string;
  firstInventorToFileIndicator?: string;
  statusCategory?: string;
  statusDate?: string;
  officialFileLocationCategory?: string;
  relatedDocumentData?: string;
  publicationNumber?: string;
  publicationDate?: string;
  patentNumber?: string;
  grantDate?: string;
  assignment?: string;
}

// IContact defines the contact info stored in db splitted by "|".
export interface IContact {
  readonly fullName: string;
  readonly firstName: string;
  readonly middleName: string;
  readonly lastName: string;
  readonly nameSuffix: string;
  readonly organizationName: string;
  readonly phoneNumber: string;
  readonly cityName: string;
  readonly regionName: string;
  readonly regionCategory: string;
  readonly countryCode: string;
}

export interface IContinuityData {
  readonly descriptionText: string;
  readonly applicationNumberText: string;
  readonly filingDate: string;
  readonly aiaIndicator: string;
  readonly parentDocumentStatusCode: string;
  readonly patentNumber: string;
}

export interface IAssignment {
  readonly reelNumber: string;
  readonly frameNumber: string;
  readonly documentReceivedDate: string;
  readonly recordedDate: string;
  readonly mailDate: string;
  readonly assignors: string[];
  readonly assignees: string[];
}
