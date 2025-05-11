export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
  highlight?: boolean;
  rating: number;
  reviews: number;
}


export interface Category {
  id: string;
  label: string;
}

export interface BakeryHighlight {
  name: string;
  description: string;
  iconSrc: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

export interface ContactInfo {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
    holidays?: string;
  };
  social?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  screenWidth: number;
}
