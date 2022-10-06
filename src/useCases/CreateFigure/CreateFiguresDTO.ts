export interface ICreateFigureRequestDTO {
  name: string;
  category: string;
  price: string;
  specifications: string;
  releaseInfo: string;
  details: string;
  serieID: number;
  manufacturerID: number;
}

export interface ICreateImagesDTO {
  link: string;
  figureID: number;
}

export interface ICreateSeriesDTO {
  serie: string;
}

export interface ICreateManufacturerDTO {
  manufacturer: string;
}
