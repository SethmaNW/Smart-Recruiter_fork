export interface IApplicant {
    id: number;
  name: string;
  country: {
    name: string;
  };
  representative: {
    name: string;
  };
  status: string;
}