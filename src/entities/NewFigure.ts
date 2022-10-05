// import { uuid } from "uuidv4";

export class NewFigure {
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

export class NewImages {
  public link: string;
  public figureID: number;
}

export class NewSerie {
  public serie: string;
}

export class NewManufacturer {
  public manufacturer: string;
}
