export interface Font {
  name: string;
  images: string[]; // Gallery images; first entry used as default preview
  description: string;
  downloadUrl: string;
  glyphCount: string;
  license: string;
  previewImage?: string; // Runtime-only preview derived from images
}

export interface LightboxState {
  isOpen: boolean;
  currentIndex: number;
  images: string[];
  fontName: string;
}
