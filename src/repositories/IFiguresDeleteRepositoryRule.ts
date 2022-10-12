export interface IFiguresDeleteRepositoryRule {
  deleteFigureByID(id: Number): Promise<boolean>;
  deleteImagesByFigureID(figureID: number): Promise<boolean>;
}
