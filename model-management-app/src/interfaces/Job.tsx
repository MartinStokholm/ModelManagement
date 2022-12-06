import type { ModelDto } from "./Model";
export type JobRegisterDto = {
  customer: string;
  startdate: string;
  days: number;
  location: string;
  comments: string;
};

export type Job = {
  jobId: number;
  customer: string;
  startDate: string;
  days: number;
  location: string;
  comments: string;
  models: ModelDto[];
};

export type Jobs = {
  jobs: Job[];
};

export type JobModelDto = {
  jobId: number;
  modelId: number;
};
