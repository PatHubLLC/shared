import { ITransaction } from './transaction';

export interface IApplication {
  Transactions: ITransaction[];
  applId: string;
  createdAt: string;
  id: number;
  title: string;
  filingDate: string;

  // usptoData: IUsptoData;

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
