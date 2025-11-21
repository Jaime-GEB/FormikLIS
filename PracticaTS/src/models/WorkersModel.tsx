import { BaseModel } from './BaseModel/BaseModel';
export interface WorkersModel extends BaseModel {
  name: string;
  locatexApiUrl: string;
  idSociedad: string;
  idPlanta: string;
  updateConfig: boolean;
}