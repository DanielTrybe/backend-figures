// import { uuid } from "uuidv4";

export class UpdateFigure {
  public id: number;
  public name: string;
  public category: string;
  public price: string;
  public specifications: string;
  public releaseInfo: string;
  public details: string;
  public serieID: number;
  public manufacturerID: number;

  // constructor(props: NewFigure, id?: string) {
  //   Object.assign(this, props);

  //   if (!id) {
  //     this.id = uuid();
  //   }
  // }
}

export class UpdateImages {
  public id: number;
  public link: string;
  public figureID: number;
}

export class UpdateSerie {
  public id: number;
  public serie: string;
}

export class UpdateManufacturer {
  public id: number;
  public manufacturer: string;
}
