import { type BaseModel } from './BaseModel/BaseModel';
export interface WorkersModel extends BaseModel {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  locatexApiUrl: string;
  idSociedad: string;
  idPlanta: string;
  updateConfig: boolean;
}