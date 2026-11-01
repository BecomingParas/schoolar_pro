export type DegreeLevel = 'all' | 'undergraduate' | 'masters' | 'phd' | 'diploma';

export type FundingType = 'full' | 'tuition' | 'partial' | 'stipend';

export interface Scholarship {
  id: string;
  title: string;
  provider: string;
  country: string;
  flag: string;
  level: DegreeLevel[];
  amount: string;
  fundingType: FundingType;
  deadline: string;
  description: string;
  eligibility: string[];
  coverage: string[];
  officialUrl: string;
  featured?: boolean;
  verifiedAt: string;
}

export interface Destination {
  id: string;
  country: string;
  code: string;
  flag: string;
  heroImage: string;
  intakeFocus: string;
  avgLivingCost: string;
  workPermit: string;
  languageReq: string;
  topScholarships: string[];
}

export interface Consultancy {
  id: string;
  name: string;
  rating: number;
  reviewsCount: number;
  destinations: string[];
  specialty: string;
  licenseNumber: string;
  accreditation: string;
  city: string;
}

export interface StudentProfile {
  id: string;
  fullName: string;
  email: string;
  targetDegree: DegreeLevel;
  targetCountries: string[];
  gpa?: string;
  ieltsScore?: string;
  savedScholarshipIds: string[];
}

export interface ApplicationTask {
  id: string;
  scholarshipId: string;
  scholarshipTitle: string;
  stage: 'preparing' | 'submitted' | 'under_review' | 'accepted' | 'closed';
  deadline: string;
  nextStep: string;
  progressPercentage: number;
}
