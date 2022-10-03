import { uuid } from "uuidv4";

export class NewFigure {
  public id: String;
  public name: String;
  public category: String;
  public price: String;
  public specifications: String;
  public releaseInfo: String;
  public details: String;
  public serieName: String;
  public manufacturerName: String;
  public createdAt: Date;

  constructor(props: NewFigure, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}

export class NewImages {
  public link: string;
  public figureID: string;
}

export class NewSerie {
  public serie: string;
}
