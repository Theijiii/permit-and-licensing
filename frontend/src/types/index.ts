export interface GovernmentService {
  id: string;
  title: string;
  description: string;
  href: string;
  icon?: string;
  processes?: {
    title: string;
    description: string;
  }[];
}

export interface Cemetery {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  address?: string;
  phone?: string;
}

export interface Cemetery {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  address?: string;
  phone?: string;
}

export interface GraveRecord {
  id: string;
  cemeteryId: string;
  plotNumber: string;
  latitude: number;
  longitude: number;
  deceasedName: string;
  birthDate: string;
  deathDate: string;
  hasFlowers?: boolean;
  imageUrl: string;
  notes?: string;
}