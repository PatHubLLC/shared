import { IApplication, IAssignment, IContact, IContinuityData } from '../../interface/application';
import { ITransaction } from '../../interface/transaction';

export const kOtherApplicantName = 'Others';

export function ExtractContact(contact: string): IContact {
  const [
    fullName,
    firstName,
    middleName,
    lastName,
    nameSuffix,
    organizationName,
    phoneNumber,
    cityName,
    regionName,
    regionCategory,
    countryCode,
  ] = contact.split('|');
  return {
    fullName,
    firstName,
    middleName,
    lastName,
    nameSuffix,
    organizationName,
    phoneNumber,
    cityName,
    regionName,
    regionCategory,
    countryCode,
  };
}

export function ExtractLatestTransaction(application: IApplication): ITransaction | null {
  const { length } = application.Transactions;
  if (length === 0) {
    return null;
  }

  return application.Transactions[length - 1];
}

export function extractApplicant(
  application: IApplication,
  fallbackName = kOtherApplicantName,
): string {
  let name = '';
  if (application.applicant) {
    // Deprecated: this is a temporary solution for old contact format. Will need to remove soon (5/16).
    if (!application.applicant.includes('|')) {
      return application.applicant;
    }
    const contact = ExtractContact(application.applicant);
    name = contact.organizationName;
  }
  if (application.usptoData && application.usptoData.applicant) {
    name = application.usptoData.applicant.name.toUpperCase();
  }
  return name || fallbackName;
}

export function ExtractAbstract(application: IApplication): string {
  if (application.usptoData && application.usptoData.abstract) {
    return application.usptoData.abstract;
  }
  return '';
}

export function ExtractInventors(application: IApplication): string[] {
  if (!application.inventor) return [];

  // Legacy format only one name. TODO: remove this after 8/5/2019.
  if (!application.inventor.includes('|')) return [application.inventor];

  let inventors = application.inventor.split('~');
  return inventors.map((inventor) => {
    let contact = ExtractContact(inventor);
    return `${contact.lastName}, ${contact.firstName}`;
  });
}

export function ExtractExaminer(application: IApplication): string | null {
  if (!application.examiner) return null;
  let contact = ExtractContact(application.examiner);

  return contact.fullName || contact.firstName + ' ' + contact.lastName;
}

export function ExtractRelatedApplications(application: IApplication): IContinuityData[] {
  let result: IContinuityData[] = [];
  if (application.relatedDocumentData) {
    let docList = application.relatedDocumentData.split('|');

    for (const docText of docList) {
      const [
        descriptionText,
        applicationNumberText,
        filingDate,
        aiaIndicator,
        parentDocumentStatusCode,
        patentNumber,
      ] = docText.split('~');
      result.push({
        descriptionText,
        applicationNumberText,
        filingDate,
        aiaIndicator,
        parentDocumentStatusCode,
        patentNumber,
      });
    }
  }

  return result;
}

export function ExtractAssignmentData(application: IApplication): IAssignment[] {
  let result: IAssignment[] = [];
  if (application.assignment) {
    let assignmentTexts = application.assignment.split('|');

    for (const text of assignmentTexts) {
      const [
        reelNumber,
        frameNumber,
        documentReceivedDate,
        recordedDate,
        mailDate,
        assignorsText,
        assigneesText,
      ] = text.split('~');
      let assignors = assignorsText.split('`');
      let assignees = assigneesText.split('`');
      result.push({
        reelNumber,
        frameNumber,
        documentReceivedDate,
        recordedDate,
        mailDate,
        assignors,
        assignees,
      });
    }
  }

  return result;
}

// US20190125709 -> e.g. http://pimg-faiw.uspto.gov/fdd/09/2019/57/012/1.pdf
export function ExtractUrlFromPublicationNumber(pubNumber: string): string {
  if (pubNumber.length <= 4) {
    return '';
  }
  let removeFirstTwoChars = pubNumber.substr(2);
  let removeLastTwoChars = removeFirstTwoChars.slice(0, -2);

  // Format yyyynnnnnnn (the left-justified year, plus up to 7 numeric digits, right justified, zero filled).
  if (removeLastTwoChars.length > 11) {
    return '';
  }
  // Four parts of the url params, random name alphabetically.
  let a = removeLastTwoChars.slice(-2);
  let b = removeLastTwoChars.substr(0, 4);
  let c = removeLastTwoChars.substr(7, 2);
  let d = removeLastTwoChars.substr(4, 3);

  return `http://pimg-faiw.uspto.gov/fdd/${a}/${b}/${c}/${d}/0.pdf`;
}

export function ExtractUrlFromPatentNumber(patNumber: string): string {
  if (!patNumber) return '';

  // We only handle utility patents at this time, which contains all numbers.
  if (!Number(patNumber)) return '';

  // For legacy patent, add a 0 at the front.
  if (patNumber.length === 7) {
    patNumber = `0${patNumber}`;
  }
  if (patNumber.length !== 8) {
    return '';
  }

  let a = patNumber.substr(6, 2);
  let b = patNumber.substr(3, 3);
  let c = patNumber.substr(0, 3);

  return `https://pimg-fpiw.uspto.gov/fdd/${a}/${b}/${c}/0.pdf`;
}
