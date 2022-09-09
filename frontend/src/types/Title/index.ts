export type TitleDTO = {
  id?: string;
  name: string;
  author: string;
  cover: File | null;
  publisher: string;
  coverURL?: string;
};

export type TitleShowcase = Omit<TitleDTO, "cover">;

export type TitleForm = Omit<TitleDTO, "coverURL"> & {
  coverPreview: string;
};

export type TitleRequestResponse = {
  message: string;
  titulo: TitleShowcase;
};
