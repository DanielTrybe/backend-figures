export class Figure {
  public id: number;
  public name: String;
  public category: String;
  public price: String;
  public specifications: String;
  public releaseInfo: String;
  public details: String;
  public serieID: Number;
  public manufacturerID: Number;
  public Images: Array<{ id: Number; link: string; figureID: number }>;
  // public Series: Array<{ id: Number; serie: string }>;
  // public Manufacturers: Array<{ id: Number; manufacturer: string }>;
  public createdAt: Date;
}
