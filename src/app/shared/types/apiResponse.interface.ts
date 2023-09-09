import {ErrorDetailsInterface} from "@app/shared/types/errorDetails.interface";

export interface ApiResponseInterface {
  status: string,
  data: any | null
  error: ErrorDetailsInterface | null,
}
