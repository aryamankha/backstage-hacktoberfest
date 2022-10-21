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
  nfts: NFT[]
};

export interface GetNFTs {
  nfts: NFT[];
  message: string;
};

export type User = {
  id: string;
  sub: string;
  picture: string;
  first_name: string;
  last_name: string;
  type: string[];
  username: string;
  nfts_owned: string[]
  token: string;
};