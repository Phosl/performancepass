export interface EarlyMemberOffer {
  title: string;
  benefit: string;
  availability: string;
}

// Deliberately hidden until benefit and availability are both approved by the client.
export const earlyMemberOffer: EarlyMemberOffer | null = null;
