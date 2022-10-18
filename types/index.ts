export type NFT = {
  id: string;
  description: string;
  image: string;
  name: string;
  price: number;
  artist: Artist
};
  
export type Artist = {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
};

export interface HomeProps {
  nfts: [NFT]
};