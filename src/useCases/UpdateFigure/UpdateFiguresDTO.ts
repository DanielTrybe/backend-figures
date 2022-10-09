export interface IUpdateFigureRequestDTO {
  id: number;
  name: string;
  category: string;
  price: string;
  specifications: string;
  releaseInfo: string;
  details: string;
  serieID: number;
  manufacturerID: number;
}

export interface IUpdateImagesDTO {
  id: number;
  link: string;
  figureID: number;
}

export interface IUpdateSeriesDTO {
  id: number;
  serie: string;
}

export interface IUpdateManufacturerDTO {
  id: number;
  manufacturer: string;
}
