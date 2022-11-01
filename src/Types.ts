export interface InitialState {
  images: HomePageImages[];
  currentImages: CurrentImage | null;
  searchTerm: string;
  searchResults: [];
  nextPageToken: string | null;
  recommendedVideos: RecommendedVideos[];
}

export interface HomePageImages {}

export interface CurrentImage {}

export interface RecommendedVideos {}
