import { Metadata } from 'next';
import LandingPage from './components/LandingPage';

export const metadata = {
  title: 'Manage Your SaaS - All-in-One Dashboard for Micro-SaaS Founders',
  description: 'Run your entire SaaS from one simple dashboard. Manage social media, ads, SEO, user analytics, and more in one place.',
};

export default function Home() {
  return <LandingPage />;
}