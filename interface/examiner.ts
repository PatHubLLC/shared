export interface IExaminer {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly middleName?: string;
  readonly secondName?: string;
  readonly phoneNumber?: string;
  readonly extension?: string;
  readonly positionIndicator?: string;
  readonly office: string;
  readonly officeDescription?: string;
}
