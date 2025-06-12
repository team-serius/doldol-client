export interface DetailBase {
  key: string;
  label: string;
  description: string;
}

export interface Video extends DetailBase {
  type: 'video';
  videoPath: string;
}

export interface Image extends DetailBase {
  type: 'image';
  image: string;
}

export type DetailFunc = Video | Image;
